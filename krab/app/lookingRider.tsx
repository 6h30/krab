import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { useRouter } from 'expo-router';

const LookingForDriverScreen = () => {
  const router = useRouter();
  
    const handleFindRider = () => {

       router.push('/riderDetail');
     };
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Looking for nearby drivers</Text>

      {/* Car Image */}
      <View style={styles.carContainer}>
        <Image
          style={styles.carImage}
          source={{ uri: 'https://via.placeholder.com/150' }} // Thay bằng URL ảnh xe thật
        />
      </View>

      {/* Pickup Location */}
      <View style={styles.locationContainer}>
        <View style={styles.locationRow}>
          <Text style={styles.locationIcon}>📍</Text>
          <View>
            <Text style={styles.locationText}>562/11-A</Text>
            <Text style={styles.locationDetails}>
              Kaikondrahalli, Bengaluru, Karnataka
            </Text>
          </View>
        </View>
      </View>

      {/* Drop-off Location */}
      <View style={styles.locationContainer}>
        <View style={styles.locationRow}>
          <Text style={styles.locationIcon}>📍</Text>
          <View>
            <Text style={styles.locationText}>Third Wave Coffee</Text>
            <Text style={styles.locationDetails}>
              17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru, Karnataka
            </Text>
          </View>
        </View>
      </View>

      {/* Price and Payment Method */}
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>₹ 193.20</Text>
        <Text style={styles.paymentMethod}>Cash</Text>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleFindRider}>
        <Text style={styles.button}>
          Confirm rider
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  carContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  carImage: {
    width: 150,
    height: 150,
  },
  locationContainer: {
    marginBottom: 20,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationDetails: {
    fontSize: 14,
    color: '#555',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentMethod: {
    fontSize: 16,
    color: '#555',
  },
  button: {
       fontSize: 20,
        color: '#fff',
       },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LookingForDriverScreen;