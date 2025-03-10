import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Constants
const driver_avt = require("../assets/images/krab-go.png");

const RideDetailScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Meet at the pickup point</Text>
        <Text style={styles.timeText}>2 min</Text>
      </View>

      {/* Driver Info */}
      <View style={styles.driverInfo}>
        <Image style={styles.driverImage} source={driver_avt} />
        <View style={styles.driverDetails}>
          <Text style={styles.driverName}>KA15AK00-0</Text>
          <Text style={styles.driverFullName}>SANTH</Text>
          <Text style={styles.carInfo}>White Suzuki S-Presso XL</Text>
          <Text style={styles.rating}>4.9 ★</Text>
        </View>
      </View>

      {/* Location Info */}
      <View style={styles.locationInfo}>
        <Text style={styles.locationText}>562/11-A</Text>
        <Text style={styles.locationDetails}>
          Kaikondrahalli, Bengaluru, Karnataka
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="shield" size={24} color="#007AFF" />
          <Text style={styles.buttonText}>Safety</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="share-alt" size={24} color="#007AFF" />
          <Text style={styles.buttonText}>Share my trip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="phone" size={24} color="#007AFF" />
          <Text style={styles.buttonText}>Call driver</Text>
        </TouchableOpacity>
      </View>

      {/* Message Button */}
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Send a message...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },

  /* Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 16,
    color: '#888',
  },

  /* Driver Info */
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  driverFullName: {
    fontSize: 14,
    color: '#555',
  },
  carInfo: {
    fontSize: 14,
    color: '#555',
  },
  rating: {
    fontSize: 14,
    color: '#FFD700', // Màu vàng cho sao
  },

  /* Location Info */
  locationInfo: {
    marginBottom: 20,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationDetails: {
    fontSize: 14,
    color: '#555',
  },

  /* Action Buttons */
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: '#007AFF',
    marginTop: 5,
  },

  /* Message Button */
  messageButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  messageButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RideDetailScreen;
