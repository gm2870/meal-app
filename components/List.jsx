import { StyleSheet, Text, View } from 'react-native';

const List = ({ data }) => {
  return data.map((d) => (
    <View key={d} style={styles.listItem}>
      <Text style={styles.text}>{d}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  text: {
    color: '#351401',
    textAlign: 'center',
  },
});
