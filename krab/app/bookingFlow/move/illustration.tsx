import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Illustration = () => {
  return (
    <View style={styles.illustrationContainer}>
    
      <Image source={require('@/assets/svgs/bookingFlowSvgs/moveS2.png')} style={styles.illustration} />
      <Text style={styles.subHeader}>Wherever you-re going, let's get you there!</Text>
    </View>
  );
};

export default Illustration;

const styles = StyleSheet.create({
  // Illustration
  illustrationContainer: {
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#FFF",
  },
  subHeader: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  illustration: {
    width: 200,
    height: 150,
    resizeMode: "contain",
  },

});

