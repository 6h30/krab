import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import HomePoint from "@/assets/svgs/bookingFlowSvgs/homePoint.svg";
import Safety from "@/assets/svgs/bookingFlowSvgs/shield.svg";
import Share from "@/assets/svgs/bookingFlowSvgs/share.svg";
import Call from "@/assets/svgs/bookingFlowSvgs/phoneCall.svg";

// Constants
const driver_avt = require("@/assets/images/krab-go.png");

const RideDetailScreen = () => {
  const router = useRouter();

  const handleSafety = () => {
    // Logic for safety feature
    console.log("Safety clicked");
  };

  const handleShareTrip = () => {
    router.push('/bookingFlow/shareT');
  };

  const handleCallDriver = () => {
    router.push('/bookingFlow/callS');
  };

  const handleMessage = () => {
    router.push('/bookingFlow/chatS');

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Meet Your Driver</Text>
          <Text style={styles.subtitle}>At the pickup point in <Text style={styles.timeHighlight}>2 min</Text></Text>
        </View>

        <View style={styles.content}>
          <View style={styles.driverInfo}>
            <Image style={styles.driverImage} source={driver_avt} />
            <View style={styles.driverDetails}>
              <Text style={styles.driverName}>51L-12345</Text>
              <Text style={styles.driverFullName}>4 seats</Text>
              <Text style={styles.carInfo}>White Suzuki S-Presso XL</Text>
              <Text style={styles.rating}>4.9 ★</Text>
            </View>
          </View>

          <View style={styles.locationContainer}>
            <View style={styles.locationRow}>
              {/* <Text style={styles.locationIcon}>📍</Text> */}
              <HomePoint style={styles.locationIcon} width={28} height={28} />
              <View>
                <Text style={styles.locationText}>487/47</Text>
                <Text style={styles.locationDetails}>
                  Vo Thi Nho street, District 7, HCM city
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.actionButton} onPress={handleSafety}>
              {/* <FontAwesome name="shield" size={24} color="#007AFF" /> */}
              <Safety style={styles.locationIcon} width={28} height={28} />
              <Text style={styles.actionButtonText}>Safety</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={handleShareTrip}>
              {/* <FontAwesome name="share-alt" size={24} color="#007AFF" /> */}
              <Share style={styles.locationIcon} width={28} height={28} />
              <Text style={styles.actionButtonText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={handleCallDriver}>
              {/* <FontAwesome name="phone" size={24} color="#007AFF" /> */}
              <Call style={styles.locationIcon} width={28} height={28} />
              <Text style={styles.actionButtonText}>Call</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.messageButton} onPress={handleMessage}>
            <Text style={styles.messageButtonText}>Send a message...</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  timeHighlight: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  content: {
    flex: 1,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,

  },
  driverImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
    borderWidth: 1,
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  driverFullName: {
    fontSize: 16,
    color: '#666',
    marginTop: 2,
  },
  carInfo: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    marginTop: 4,
  },
  locationContainer: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,

    borderWidth: 1,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationIcon: {
    fontSize: 20,
    marginRight: 10,
    marginTop: 2,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  locationDetails: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    width: '30%',
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  actionButtonText: {
    fontSize: 14,
    color: '#007AFF',
    marginTop: 6,
  },
  messageButton: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  messageButtonText: {
    fontSize: 16,
    color: '#666',
  },
});

export default RideDetailScreen;