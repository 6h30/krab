import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import ButtonF from '@/components/stylesFunny/ButtonF';

const VerifyCodeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  const [codeActive, setCodeActive] = useState(true); // Bật bộ đếm ngay từ đầu
  const [timer, setTimer] = useState(60); // Đếm ngược từ 60

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (codeActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCodeActive(false); // Tắt bộ đếm khi về 0
    }
    return () => clearInterval(interval);
  }, [codeActive, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Verify Your Number</Text>
        <Text style={styles.subtitle}>Enter the 4-digit code sent to you</Text>
        <Text style={styles.phoneNumber}>0868680111</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.codeContainer}>
          {[...Array(4)].map((_, index) => (
            <TextInput 
              key={index} 
              style={styles.codeBox} 
              maxLength={1} 
              keyboardType="numeric"
              autoFocus={index === 0}
            />
          ))}
        </View>

        <TouchableOpacity 
          disabled={timer > 0} // Chỉ bật lại khi bộ đếm hết thời gian
          onPress={() => {
            setTimer(20); // Reset bộ đếm
            setCodeActive(true); // Bật lại bộ đếm
          }}
        >
          <Text style={[styles.resendText, timer > 0 && { color: 'gray' }]}>
            I haven't received a code ({formatTime(timer)})
          </Text>
        </TouchableOpacity>

        <ButtonF
          // onPress={handleContinue}
          bgColor='#66E1FF'
          theme='secondary'
          // onPress={() => router.push('/bookingFlow/searchLocation')}
          onPress={() => router.push('/bookingFlow/move/moveScreen')}
          title='Next'
        >         
        </ButtonF>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity 
              style={styles.resendButton}
              onPress={() => {
                setModalVisible(false);
                setTimer(60); // Reset bộ đếm khi gửi lại mã
                setCodeActive(true);
              }}
            >
              <Text style={styles.resendButtonText}>Resend code by SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.cancelButton} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
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
    marginBottom: 20,
  },
  phoneNumber: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  codeBox: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    color: '#333',
    backgroundColor: '#f5f5f5',
  },
  resendText: {
    color: '#007AFF',
    fontSize: 14,
    marginBottom: 40,
  },
  continueButton: {
    width: '100%',
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '100%',
  },
  resendButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  resendButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  cancelButton: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
});

export default VerifyCodeScreen;