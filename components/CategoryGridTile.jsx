import { StyleSheet, View, Text, Pressable, Platform } from 'react-native';

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View
      style={[
        styles.gridItem,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    borderRadius: 8,
    margin: 16,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    height: 150,
    elevation: 4,
    flex: 1,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },

  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
});
