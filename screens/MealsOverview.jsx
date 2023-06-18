import { FlatList, View } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';

const MealsOverview = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const mealItems = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  useLayoutEffect(() => {
    const ctegoryTitle = CATEGORIES.find((cat) => catId === cat.id).title;
    navigation.setOptions({
      title: ctegoryTitle,
    });
  }, [catId, navigation]);
  const renderMealItem = ({ item }) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      affordability: item.affordability,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View>
      <FlatList
        data={mealItems}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverview;
