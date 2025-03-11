import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const DynamicAccountScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the {id} screen</Text>
    </View>
  );
};

export default DynamicAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
