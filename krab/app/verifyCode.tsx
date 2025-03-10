import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useRouter } from 'expo-router';

const VerifyCodeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const router = useRouter();

  const handleSearchLocation = () => {
    // Add your logic here for handling the continue action
    router.push('/searchLocation');
  };
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.continueButton} onPress={handleSearchLocation}>
        <Text style={styles.button}>
          Search location
        </Text>
      </TouchableOpacity>
      
      {/* Header Text */}
      <Text style={styles.headerText}>Enter the 4-digit code sent to you</Text>

      {/* Phone Number */}
      <Text style={styles.phoneNumber}>06333 26210</Text>

      {/* Code Input Boxes */}
      <View style={styles.codeContainer}>
        <TextInput style={styles.codeBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.codeBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.codeBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.codeBox} maxLength={1} keyboardType="numeric" />
      </View>

      {/* Resend Code Link with Timer */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.resendText}>I haven't received a code (00:05)</Text>
      </TouchableOpacity>

    

      {/* Navigation Arrows */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.arrowButton}>
          <Text style={styles.arrowText}>←</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.arrowButton} onPress={handleSearchLocation}>
          <Text style={styles.arrowText}>Next→</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
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
  },
  arrowButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 20,
    color: '#000',
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

export default VerifyCodeScreen;