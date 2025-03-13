import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const SecuritySettings: React.FC = () => {
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);
  const [googleAuthEnabled, setGoogleAuthEnabled] = useState(false);
  const [rememberMeEnabled, setRememberMeEnabled] = useState(true);

  const router = useRouter();

  const securityOptions = [
    {
      id: '1',
      title: 'Face ID',
      description: 'Use facial recognition to unlock the app.',
      icon: 'id-badge',
      value: faceIdEnabled,
      onValueChange: setFaceIdEnabled,
    },
    {
      id: '2',
      title: 'Google Authenticator',
      description: 'Enable two-factor authentication with Google Authenticator.',
      icon: 'google',
      value: googleAuthEnabled,
      onValueChange: setGoogleAuthEnabled,
    },
    {
      id: '3',
      title: 'Remember Me',
      description: 'Stay logged in between sessions.',
      icon: 'check-square',
      value: rememberMeEnabled,
      onValueChange: setRememberMeEnabled,
    },
  ];

  const handleSave = () => {
    // Logic để lưu cài đặt bảo mật (gửi API hoặc lưu local)
    alert(`Security Settings Saved: Face ID: ${faceIdEnabled}, Google Auth: ${googleAuthEnabled}, Remember Me: ${rememberMeEnabled}`);
    router.back(); // Quay lại màn hình trước (giả sử là Settings hoặc Wallet)
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <FontAwesome name="arrow-left" size={20} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Security Settings</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.settingsContainer}>
          {securityOptions.map(option => (
            <View key={option.id} style={styles.optionItem}>
              <View style={styles.optionHeader}>
                <FontAwesome name={option.icon} size={24} color="#4A4A4A" />
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionTitle}>{option.title}</Text>
                  <Text style={styles.optionDescription}>{option.description}</Text>
                </View>
              </View>
              <Switch
                trackColor={{ false: '#D0D8E0', true: '#A0B5EB' }}
                thumbColor={option.value ? '#FFFFFF' : '#F8FBFD'}
                ios_backgroundColor="#D0D8E0"
                onValueChange={option.onValueChange}
                value={option.value}
                style={styles.switch}
              />
            </View>
          ))}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Settings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  scrollContent: {
    paddingBottom: 20,
  },
  settingsContainer: {
    backgroundColor: '#F8FBFD',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8EDF3',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4A4A4A',
    marginBottom: 5,
  },
  optionDescription: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  switch: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },
  saveButton: {
    backgroundColor: '#A0B5EB',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#8095CC',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default SecuritySettings;