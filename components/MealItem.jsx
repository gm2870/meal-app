import { useNavigation } from '@react-navigation/native';
import { Platform, StyleSheet } from 'react-native';
import { Image, Pressable, Text, View } from 'react-native';

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
}) => {
  const navigation = useNavigation();
  const onSelectMealHandler = () => {
    navigation.navigate('MealDetails', {
      mealId: id,
    });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onSelectMealHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
  },
  innerContainer: {
    borderTopColor: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  buttonPressed: {
    opacity: 0.5,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  details: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
