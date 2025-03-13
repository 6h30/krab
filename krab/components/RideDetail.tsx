import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface RideDetailProps {
  dateTime: string;
  driverInfo: string;
  pickupAddress: string;
  dropoffAddress: string;
  onAddStop: () => void;
  onComplete: () => void;
}

const RideDetailComponent: React.FC<RideDetailProps> = ({
  dateTime,
  driverInfo,
  pickupAddress,
  dropoffAddress,
  onAddStop,
  onComplete,
}) => {
  return (
    <View style={styles.container}>
      {/* Thời gian */}
      <View style={styles.header}>
        <Text style={styles.dateTime}>{dateTime}</Text>
        <FontAwesome name="ellipsis-v" size={20} color="#666" />
      </View>

      {/* Thông tin tài xế */}
      <View style={styles.driverInfo}>
        <View style={styles.avatar} />
        <Text style={styles.driverText}>{driverInfo}</Text>
      </View>

      {/* Địa chỉ và tuyến đường */}
      <View style={styles.routeContainer}>
        <View style={styles.locationDot} />
        <Text style={styles.addressText}>{pickupAddress}</Text>
      </View>
      <View style={styles.line} />
      <TouchableOpacity style={styles.addStop} onPress={onAddStop}>
        <View style={styles.locationDot} />
        <Text style={styles.addStopText}>Add stop</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <View style={styles.routeContainer}>
        <View style={styles.locationDot} />
        <Text style={styles.addressText}>{dropoffAddress}</Text>
      </View>

      {/* Nút Completed */}
      <TouchableOpacity style={styles.completedButton} onPress={onComplete}>
        <Text style={styles.completedText}>Completed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F4F8', // Màu nền nhẹ nhàng
    borderRadius: 20,
    padding: 20,
    margin: 15,
    // Bóng đổ cho hiệu ứng 3D
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8, // Cho Android
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateTime: {
    fontSize: 16,
    color: '#4A4A4A',
    fontWeight: '600',
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FBFD',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    // Bóng đổ bên trong nhẹ
    shadowColor: '#A0A0A0',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E6ED',
    marginRight: 10,
  },
  driverText: {
    fontSize: 16,
    color: '#4A4A4A',
    fontWeight: '500',
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  locationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#A0B5EB',
    marginRight: 10,
    // Hiệu ứng nổi nhẹ
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  addressText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  line: {
    width: 2,
    height: 20,
    backgroundColor: '#D0D8E0',
    marginLeft: 5,
    borderRadius: 1,
  },
  addStop: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8EDF3',
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
    // Hiệu ứng lõm nhẹ
    shadowColor: '#FFFFFF',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  addStopText: {
    fontSize: 14,
    color: '#7A90C2',
    fontWeight: '500',
  },
  completedButton: {
    backgroundColor: '#A0B5EB',
    borderRadius: 15,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
    // Hiệu ứng nổi
    shadowColor: '#8095CC',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  completedText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default RideDetailComponent;
