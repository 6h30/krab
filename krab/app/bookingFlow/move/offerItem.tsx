import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface Offer {
  id: string;
  title: string;
  discount: string;
  image: any;
}

const OfferItem: React.FC<{ item: Offer }> = ({ item }) => {
  return (
    
      <View style={styles.offersList}>
        <Image source={item.image} style={styles.offerImage} />
        <Text style={styles.offerTitle}>{item.title}</Text>
        <Text style={styles.offerDiscount}>{item.discount}</Text>
      </View>
  
  );
};

export default OfferItem;

const styles = StyleSheet.create({
  offersList: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  offerItem: {
    marginRight: 16,
    alignItems: "center",
  
  },
  offerImage: {
    width: 100,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
  },
  offerTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
  },
  offerDiscount: {
    fontSize: 12,
    color: "#FF0000",
  },
});
