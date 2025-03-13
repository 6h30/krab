import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const CallScreen: React.FC = () => {
  const [callActive, setCallActive] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  
  const router = useRouter();

  // Giả lập đồng hồ đếm thời gian cuộc gọi
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (callActive) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartCall = () => {
    setCallActive(true);
    alert('Calling driver...');
    // Logic thực tế để bắt đầu cuộc gọi
  };

  const handleEndCall = () => {
    setCallActive(false);
    setTimer(0);
    setIsSpeakerOn(false);
    setIsCameraOff(false);
    alert('Call ended');
    // Logic thực tế để kết thúc cuộc gọi
    router.back();
  };

  const handleToggleSpeaker = () => {
    setIsSpeakerOn(prev => !prev);
    alert(`Speaker ${isSpeakerOn ? 'off' : 'on'}`);
    // Logic thực tế để bật/tắt loa ngoài
  };

  const handleToggleCamera = () => {
    setIsCameraOff(prev => !prev);
    alert(`Camera ${isCameraOff ? 'on' : 'off'}`);
    // Logic thực tế để bật/tắt camera
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <FontAwesome name="arrow-left" size={20} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Call Driver</Text>
      </View>
      <View style={styles.callContainer}>
        <View style={styles.driverInfo}>
          <FontAwesome name="user-circle" size={60} color="#4A4A4A" />
          <Text style={styles.driverName}>John Doe</Text>
          <Text style={styles.driverPhone}>+1 234 567 890</Text>
          {callActive && <Text style={styles.timer}>{formatTime(timer)}</Text>}
        </View>
        {callActive ? (
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[styles.actionButton, isSpeakerOn ? styles.activeButton : styles.inactiveButton]}
              onPress={handleToggleSpeaker}
            >
              <FontAwesome name="volume-up" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, isCameraOff ? styles.activeButton : styles.inactiveButton]}
              onPress={handleToggleCamera}
            >
              <FontAwesome name={isCameraOff ? 'video-slash' : 'video'} size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.endButton} onPress={handleEndCall}>
              <FontAwesome name="phone-slash" size={30} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.startButton} onPress={handleStartCall}>
            <FontAwesome name="phone" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FBFD',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  backButton: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4A4A4A',
    flex: 1,
    textAlign: 'center',
  },
  callContainer: {
    flex: 1,
    backgroundColor: '#F8FBFD',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  driverInfo: {
    alignItems: 'center',
  },
  driverName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#4A4A4A',
    marginTop: 15,
  },
  driverPhone: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  timer: {
    fontSize: 18,
    fontWeight: '500',
    color: '#A0B5EB',
    marginTop: 10,
  },
  startButton: {
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A0B5EB',
    shadowColor: '#8095CC',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  actionButton: {
    borderRadius: 40,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  inactiveButton: {
    backgroundColor: '#A0B5EB',
    shadowColor: '#8095CC',
  },
  activeButton: {
    backgroundColor: '#7A90C2', // Màu đậm hơn khi bật
    shadowColor: '#5A70A2',
  },
  endButton: {
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EB9090',
    shadowColor: '#CC8080',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
});

export default CallScreen;