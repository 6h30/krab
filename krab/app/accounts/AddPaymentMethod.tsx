import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

// Định nghĩa các phương thức thanh toán
type PaymentMethod = 'Credit Card' | 'PayPal' | 'Apple Pay' | 'MoMo';

const AddPaymentMethod: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [email, setEmail] = useState(''); // Cho PayPal hoặc MoMo
  
  const router = useRouter();

  const paymentMethods: { id: string; name: PaymentMethod; icon: string }[] = [
    { id: '1', name: 'Credit Card', icon: 'credit-card' },
    { id: '2', name: 'PayPal', icon: 'paypal' },
    { id: '3', name: 'Apple Pay', icon: 'apple' },
    { id: '4', name: 'MoMo', icon: 'mobile' },
  ];

  const handleSave = () => {
    if (selectedMethod === 'Credit Card') {
      alert(`Card Added: ${cardNumber}, ${expiryDate}, ${cvv}, ${cardHolder}`);
    } else if (selectedMethod === 'PayPal' || selectedMethod === 'MoMo') {
      alert(`${selectedMethod} Added: ${email}`);
    } else if (selectedMethod === 'Apple Pay') {
      alert('Apple Pay Added');
    }
    router.back();
  };

  const renderMethodSelection = () => (
    <View style={styles.formContainer}>
      <Text style={styles.sectionTitle}>Choose a Payment Method</Text>
      {paymentMethods.map(method => (
        <TouchableOpacity
          key={method.id}
          style={styles.methodItem}
          onPress={() => setSelectedMethod(method.name)}
        >
          <FontAwesome name={method.icon} size={24} color="#4A4A4A" />
          <Text style={styles.methodText}>{method.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderMethodDetails = () => {
    switch (selectedMethod) {
      case 'Credit Card':
        return (
          <View style={styles.formContainer}>
            <Text style={styles.label}>Card Number</Text>
            <TextInput
              style={styles.input}
              value={cardNumber}
              onChangeText={setCardNumber}
              placeholder="1234 5678 9012 3456"
              keyboardType="numeric"
              maxLength={19}
            />
            <View style={styles.row}>
              <View style={styles.halfInputContainer}>
                <Text style={styles.label}>Expiry Date</Text>
                <TextInput
                  style={styles.input}
                  value={expiryDate}
                  onChangeText={setExpiryDate}
                  placeholder="MM/YY"
                  keyboardType="numeric"
                  maxLength={5}
                />
              </View>
              <View style={styles.halfInputContainer}>
                <Text style={styles.label}>CVV</Text>
                <TextInput
                  style={styles.input}
                  value={cvv}
                  onChangeText={setCvv}
                  placeholder="123"
                  keyboardType="numeric"
                  maxLength={3}
                />
              </View>
            </View>
            <Text style={styles.label}>Card Holder Name</Text>
            <TextInput
              style={styles.input}
              value={cardHolder}
              onChangeText={setCardHolder}
              placeholder="John Doe"
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save Payment Method</Text>
            </TouchableOpacity>
          </View>
        );
      case 'PayPal':
      case 'MoMo':
        return (
          <View style={styles.formContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="example@email.com"
              keyboardType="email-address"
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Link {selectedMethod}</Text>
            </TouchableOpacity>
          </View>
        );
      case 'Apple Pay':
        return (
          <View style={styles.formContainer}>
            <Text style={styles.infoText}>Apple Pay will use your device's configured payment method.</Text>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Add Apple Pay</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => selectedMethod ? setSelectedMethod(null) : router.back()}>
          <FontAwesome name="arrow-left" size={20} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {selectedMethod ? `Add ${selectedMethod}` : 'Add Payment Method'}
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {selectedMethod ? renderMethodDetails() : renderMethodSelection()}
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
  formContainer: {
    backgroundColor: '#F8FBFD',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A4A4A',
    marginBottom: 15,
  },
  methodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8EDF3',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  methodText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4A4A4A',
    marginLeft: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4A4A4A',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#E8EDF3',
    borderRadius: 12,
    padding: 15,
    fontSize: 14,
    color: '#4A4A4A',
    marginBottom: 15,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  halfInputContainer: {
    flex: 1,
    marginRight: 10,
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
  infoText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AddPaymentMethod;