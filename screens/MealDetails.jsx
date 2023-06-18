import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import List from '../components/List';
import Subtitle from '../components/Subtitle';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';

const MealDetails = ({ route, navigation }) => {
  const meal = MEALS.find((m) => m.id === route.params.mealId);
  const headerButtonPressHandler = () => {
    navigation.navigate('Favorites');
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name="star"
          size={24}
          color="white"
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetail
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subtitleContainer}>
            <Subtitle>Ingredients</Subtitle>
          </View>
          <List data={meal.ingredients} />

          <View style={styles.subtitleContainer}>
            <Subtitle>Steps</Subtitle>
          </View>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    margin: 8,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
