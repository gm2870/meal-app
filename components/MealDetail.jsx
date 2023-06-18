import { Platform, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

const MealDetail = ({ duration, affordability, complexity, textStyle }) => {
  return (
    <View style={[styles.details, textStyle]}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};
export default MealDetail;

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
    color: 'white',
  },

  details: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
