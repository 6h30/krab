import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useRouter } from 'expo-router';

const VerifyCodeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleSearchLocation = () => {
    router.push('/searchLocation');
  };

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.headerText}>Enter the 4-digit code sent to you</Text>

      {/* Số điện thoại */}
      <Text style={styles.phoneNumber}>0868680111</Text>

      {/* Ô nhập mã xác nhận */}
      <View style={styles.codeContainer}>
        {[...Array(4)].map((_, index) => (
          <TextInput key={index} style={styles.codeBox} maxLength={1} keyboardType="numeric" />
        ))}
      </View>

      {/* Link gửi lại mã */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.resendText}>I haven't received a code (00:05)</Text>
      </TouchableOpacity>

      {/* Nút tìm kiếm địa điểm */}
      <TouchableOpacity style={styles.continueButton} onPress={handleSearchLocation}>
        <Text style={styles.continueButtonText}>Search location</Text>
      </TouchableOpacity>

      {/* Modal gửi lại mã */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.resendButton}>
              <Text style={styles.resendButtonText}>Resend code by SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  codeBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  resendText: {
    color: '#007AFF',
    fontSize: 14,
    marginBottom: 30,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  resendButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
  },
  resendButtonText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default VerifyCodeScreen;
