import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Modal,
  FlatList
} from 'react-native';

import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('+84');
  const [showCountryCodeModal, setShowCountryCodeModal] = useState(false);

  const countryCodes = [
    { label: '+84 (Vietnam)', value: '+84' },
    { label: '+1 (USA)', value: '+1' },
    { label: '+44 (UK)', value: '+44' },
    { label: '+33 (France)', value: '+33' },
    // Add more country codes as needed
  ];

  const router = useRouter();

  const handleContinue = () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter your phone number');
      return;
    }
    // Add your logic here for handling the continue action
    router.push('/privacy');
  };

  const handleGoogleLogin = () => {
    // Add Google login logic here
    console.log('Continue with Google');
  };

  const handleAppleLogin = () => {
    // Add Apple login logic here
    console.log('Continue with Apple');
  };

  const handleFacebookLogin = () => {
    // Add Facebook login logic here
    console.log('Continue with Facebook');
  };

  const handleCountryCodeSelect = (code:string) => {
    setSelectedCountryCode(code);
    setShowCountryCodeModal(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your phone number or email?</Text>

      {/* Country Code Picker and Phone Number Input */}
      <View style={styles.inputContainer}>
      <TouchableOpacity
          style={styles.countryCodeButton}
          onPress={() => setShowCountryCodeModal(true)}
        >
          <Text style={styles.countryCodeText}>{selectedCountryCode}</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.phoneInput}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          placeholder="Số điện thoại"
        />
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
        <Image
          source={{ uri: 'https://www.google.com/favicon.ico' }} // Replace with actual Google icon
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} onPress={handleAppleLogin}>
        <Image
          source={{ uri: 'https://www.apple.com/favicon.ico' }} // Replace with actual Apple icon
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
        <Image
          source={{ uri: 'https://www.facebook.com/favicon.ico' }} // Replace with actual Facebook icon
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <Text style={styles.consentText}>
        By proceeding, you consent to get calls, WhatsApp or SMS messages,
        including by automated means, from Uber and its affiliates to the number
        provided.
      </Text>


       <Modal
        visible={showCountryCodeModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowCountryCodeModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Country Code</Text>
            <FlatList
              data={countryCodes}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryCodeItem}
                  onPress={() => handleCountryCodeSelect(item.value)}
                >
                  <Text style={styles.countryCodeItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setShowCountryCodeModal(false)}
            >
              <Text style={styles.closeModalButtonText}>Close</Text>
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
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
  },
  pickerContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    overflow: 'hidden',
  },
  picker: {
    height: 40,
    width: '100%',
    paddingHorizontal: 5,
  },
  phoneInput: {
    flex: 3,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
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
  orText: {
    marginVertical: 20,
    fontSize: 16,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    marginVertical: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
  },
  consentText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
  },
  countryCodeButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryCodeText: {
    fontSize: 16,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 5,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  countryCodeItem: {
    paddingVertical: 10,
  },
  countryCodeItemText: {
    fontSize: 16,
    textAlign: 'center',
  },
  closeModalButton: {
    marginTop: 20,
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeModalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
