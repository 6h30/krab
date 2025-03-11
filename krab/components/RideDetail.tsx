import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Định nghĩa kiểu cho props của component
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
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateTime: {
    fontSize: 14,
    color: '#666',
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  driverText: {
    fontSize: 14,
    color: '#000',
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    marginRight: 10,
  },
  addressText: {
    fontSize: 14,
    color: '#000',
    flex: 1,
  },
  line: {
    height: 30,
    width: 2,
    backgroundColor: '#000',
    alignSelf: 'center',
    marginHorizontal: 4,
  },
  addStop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addStopText: {
    fontSize: 14,
    color: '#000',
    textDecorationLine: 'underline',
  },
  completedButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  completedText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RideDetailComponent;

// Ví dụ sử dụng component
/*
import React from 'react';
import { View } from 'react-native';
import RideDetailComponent from './RideDetailComponent';

const App = () => {
  return (
    <View>
      <RideDetailComponent
        dateTime="06 Mar 2024, 11:59"
        driverInfo="Driver at company: 1 year, Ride: 1000"
        pickupAddress="1901 Thornridge Cir. Shiloh, Hawaii 81063"
        dropoffAddress="6391 Elgin St. Celina, Delaware 10299"
        onAddStop={() => alert('Add stop clicked')}
        onComplete={() => alert('Ride completed')}
      />
    </View>
  );
};

export default App;
*/