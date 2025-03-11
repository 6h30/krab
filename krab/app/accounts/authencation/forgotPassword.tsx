import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Định nghĩa kiểu cho mỗi tùy chọn
interface OptionData {
  id: string;
  method: string;
  value: string;
  onPress: () => void;
}

// Định nghĩa kiểu cho props của OptionItem
interface OptionItemProps {
  method: string;
  value: string;
  onPress: () => void;
}

const OptionItem: React.FC<OptionItemProps> = ({ method, value, onPress }) => (
  <TouchableOpacity style={styles.optionItem} onPress={onPress}>
    <View style={styles.iconCircle}>
      <FontAwesome name={method === 'Via SMS' ? 'comment' : 'envelope'} size={20} color="#f5c518" />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.methodText}>{method}</Text>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  </TouchableOpacity>
);

const ForgotPasswordScreen: React.FC = () => {
  const options: OptionData[] = [
    { id: '1', method: 'Via SMS', value: '****70', onPress: () => alert('Reset via SMS') },
    { id: '2', method: 'Via Email', value: '****xyz@xyz.com', onPress: () => alert('Reset via Email') },
  ];

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>Forgot Password</Text>

      {/* Mô tả */}
      <Text style={styles.description}>
        Select which contact details should we use to reset your password
      </Text>

      {/* Các tùy chọn */}
      {options.map(option => (
        <OptionItem
          key={option.id}
          method={option.method}
          value={option.value}
          onPress={option.onPress}
        />
      ))}
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
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff9e6',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  methodText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  valueText: {
    fontSize: 14,
    color: '#666',
  },
});

export default ForgotPasswordScreen;