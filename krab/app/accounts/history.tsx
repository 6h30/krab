import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import RideDetailComponent from "@/components/RideDetail";

// Định nghĩa kiểu cho dữ liệu lịch sử
interface RideHistoryData {
  id: string;
  status: 'Active Now' | 'Completed' | 'Cancelled';
  dateTime: string;
  driverInfo: string;
  pickupAddress: string;
  dropoffAddress: string;
}

const AccountHistory: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<'Active Now' | 'Completed' | 'Cancelled'>('Active Now');

  const rideHistory: RideHistoryData[] = [
    {
      id: '1',
      status: 'Active Now',
      dateTime: '13 Mar 2025, 14:30',
      driverInfo: 'Driver at company: 2 years, Ride: 1500',
      pickupAddress: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
      dropoffAddress: '6391 Elgin St. Celina, Delaware 10299',
    },
    {
      id: '2',
      status: 'Completed',
      dateTime: '06 Mar 2025, 11:59',
      driverInfo: 'Driver at company: 1 year, Ride: 1000',
      pickupAddress: '123 Main St, City',
      dropoffAddress: '456 Business Ave, Town',
    },
    {
      id: '3',
      status: 'Completed',
      dateTime: '01 Mar 2025, 09:15',
      driverInfo: 'Driver at company: 3 years, Ride: 2000',
      pickupAddress: '789 Fitness Rd, Village',
      dropoffAddress: '101 Park Lane, Suburb',
    },
    {
      id: '4',
      status: 'Cancelled',
      dateTime: '28 Feb 2025, 16:45',
      driverInfo: 'Driver at company: 6 months, Ride: 500',
      pickupAddress: '321 Oak St, Hamlet',
      dropoffAddress: '654 Pine Rd, County',
    },
  ];

  // Lọc danh sách theo trạng thái được chọn
  const filteredRides = rideHistory.filter(ride => ride.status === selectedStatus);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ride History</Text>
      </View>
      <View style={styles.navigation}>
        {(['Active Now', 'Completed', 'Cancelled'] as const).map(status => (
          <TouchableOpacity
            key={status}
            style={[
              styles.navItem,
              selectedStatus === status && styles.navItemSelected,
            ]}
            onPress={() => setSelectedStatus(status)}
          >
            <Text
              style={[
                styles.navText,
                selectedStatus === status && styles.navTextSelected,
              ]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {filteredRides.length > 0 ? (
          filteredRides.map(ride => (
            <RideDetailComponent
              key={ride.id}
              dateTime={ride.dateTime}
              driverInfo={ride.driverInfo}
              pickupAddress={ride.pickupAddress}
              dropoffAddress={ride.dropoffAddress}
              onAddStop={() => alert(`Add stop for ride ${ride.id}`)}
              onComplete={() => alert(`Ride ${ride.id} completed`)}
            />
          ))
        ) : (
          <Text style={styles.emptyText}>No rides in this category yet.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // Màu nền nhẹ nhàng
    padding: 15,
  },
  header: {
    backgroundColor: '#F8FBFD',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4A4A4A',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  navItem: {
    flex: 1,
    backgroundColor: '#F8FBFD',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    // Hiệu ứng nổi nhẹ
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  navItemSelected: {
    backgroundColor: '#A0B5EB', // Màu nổi bật khi được chọn
    shadowColor: '#8095CC',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  navText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4A4A4A',
  },
  navTextSelected: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default AccountHistory;