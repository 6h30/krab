import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from 'expo-router';

const TermsScreen = () => {
  const [isChecked, setIsChecked] = useState(true);
  const router = useRouter();

  const handleNext = () => {
    if (isChecked) {
      router.push("/verifyCode");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Terms & Privacy</Text>
        <Text style={styles.subtitle}>
          Please review and accept our terms to continue
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          By selecting ‘I Agree’ below, I have reviewed and agree to the{" "}
          <Text style={styles.link}>Terms of Use</Text> and acknowledge the{" "}
          <Text style={styles.link}>Privacy Notice</Text>. I am at least 18 years of age.
        </Text>

        <TouchableOpacity 
          style={styles.checkboxContainer} 
          onPress={() => setIsChecked(!isChecked)}
        >
          <View style={[
            styles.checkbox, 
            isChecked && styles.checkboxChecked
          ]}>
            {isChecked && <Text style={styles.checkmark}>✔</Text>}
          </View>
          <Text style={styles.checkboxLabel}>I agree</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.nextButton,
              isChecked ? styles.nextButtonActive : styles.nextButtonDisabled
            ]}
            onPress={handleNext}
            disabled={!isChecked}
          >
            <Text 
              style={[
                styles.nextButtonText,
                !isChecked && styles.nextButtonTextDisabled
              ]}
            >
              Next →
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginBottom: 40,
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 30,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#666',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 40,
  },
  backButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  backButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  nextButton: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  nextButtonActive: {
    backgroundColor: '#007AFF',
  },
  nextButtonDisabled: {
    backgroundColor: '#eee',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  nextButtonTextDisabled: {
    color: '#999',
  },
});

export default TermsScreen;