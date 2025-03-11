import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ForgotPasswordOTP: React.FC = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  // Store persistent refs
  const otpInputs = useRef<Array<React.RefObject<TextInput>>>(
    Array.from({ length: 4 }, () => React.createRef<TextInput>())
  );

  // Function to handle OTP input changes
  const handleOtpChange = (value: string, index: number) => {
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input if available
      if (value && index < 3) {
        otpInputs.current[index + 1]?.current?.focus();
      }
    }
  };

  // Reset focus when a field is cleared
  useEffect(() => {
    otp.forEach((value, index) => {
      if (!value && index > 0) {
        otpInputs.current[index - 1]?.current?.focus();
      }
    });
  }, [otp]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.description}>Code has been sent to **** ****70</Text>

      {/* OTP Input Fields */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
            maxLength={1}
            keyboardType="numeric"
            ref={otpInputs.current[index]} // Use stable refs
          />
        ))}
      </View>

      {/* Resend Code */}
      <TouchableOpacity onPress={() => alert('Resend code')}>
        <Text style={styles.resendText}>Didn't receive code? Resend again</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  resendText: {
    fontSize: 14,
    color: '#f5c518', // Yellow color for emphasis
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordOTP;
