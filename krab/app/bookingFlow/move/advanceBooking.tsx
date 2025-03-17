import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AdvanceBooking } from '@/data/types';

const AdvanceBookingItem: React.FC<{ item: AdvanceBooking }> = ({ item }) => {
  return (
    <View style={styles.wrapper}> 
     <TouchableOpacity style={styles.screenContainer}>
      <Image source={item.image} style={styles.screenImage} />
      <View style={styles.screenTextContainer}>
        <Text style={styles.screenTitle}>{item.title}</Text>
        {item.description && <Text style={styles.screenDescription}>{item.description}</Text>}
      </View>
    </TouchableOpacity>
    </View>
   
  );
};

export default AdvanceBookingItem;
const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 8, // Tạo khoảng cách trên dưới
    paddingHorizontal: 12, // Giữ khoảng cách với viền màn hình
  },
  screenContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    // borderColor: "#ddd",

  },
  screenImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: "contain",
  },
  screenTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  screenTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  screenDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});

