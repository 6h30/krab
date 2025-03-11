import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Định nghĩa kiểu cho trạng thái
interface PasswordState {
  newPassword: string;
  confirmPassword: string;
  showNewPassword: boolean;
  showConfirmPassword: boolean;
}

const SetNewPasswordScreen: React.FC = () => {
  const [state, setState] = useState<PasswordState>({
    newPassword: '',
    confirmPassword: '',
    showNewPassword: false,
    showConfirmPassword: false,
  });

  const toggleShowPassword = (field: 'newPassword' | 'confirmPassword') => {
    setState(prevState => ({
      ...prevState,
      [field === 'newPassword' ? 'showNewPassword' : 'showConfirmPassword']:
        !prevState[field === 'newPassword' ? 'showNewPassword' : 'showConfirmPassword'],
    }));
  };

  const handleSave = () => {
    if (state.newPassword !== state.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!/[0-9!@#$%^&*]/.test(state.newPassword)) {
      alert('Password must contain at least 1 number or special character!');
      return;
    }
    alert('Password updated successfully!');
  };

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>Set New Password</Text>

      {/* Mô tả */}
      <Text style={styles.description}>Set your new password</Text>

      {/* Ô nhập liệu: New Password */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your new password"
          placeholderTextColor="#ccc"
          value={state.newPassword}
          onChangeText={text => setState(prev => ({ ...prev, newPassword: text }))}
          secureTextEntry={!state.showNewPassword}
        />
        <TouchableOpacity onPress={() => toggleShowPassword('newPassword')}>
          <FontAwesome
            name={state.showNewPassword ? 'eye' : 'eye-slash'}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      {/* Ô nhập liệu: Confirm Password */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ccc"
          value={state.confirmPassword}
          onChangeText={text => setState(prev => ({ ...prev, confirmPassword: text }))}
          secureTextEntry={!state.showConfirmPassword}
        />
        <TouchableOpacity onPress={() => toggleShowPassword('confirmPassword')}>
          <FontAwesome
            name={state.showConfirmPassword ? 'eye' : 'eye-slash'}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      {/* Ghi chú */}
      <Text style={styles.note}>Atleast 1 number or a special character</Text>

      {/* Nút Save */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
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
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
  },
  note: {
    fontSize: 12,
    color: '#666',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#f5c518', // Màu vàng tương tự giao diện
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SetNewPasswordScreen;