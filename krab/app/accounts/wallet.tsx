import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

interface MenuItemData {
  id: string;
  title: string;
  subTitle?: string;
  onPress?: () => void;
}

interface MenuItemProps {
  title: string;
  subTitle?: string;
  onPress: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, subTitle, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    {subTitle ? (
      <>
        <Text style={styles.menuTitle}>{title}</Text>
        <View style={styles.subItem}>
          <FontAwesome name="plus" size={18} color="#000" />
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </>
    ) : (
      <Text style={styles.menuTitle}>{title}</Text>
    )}
  </TouchableOpacity>
);

const WalletScreen: React.FC = () => {
  const router = useRouter();

  const menuItems: MenuItemData[] = [
    { id: '1', title: 'Payment methods', subTitle: 'Add payment method', onPress: () => router.push('/accounts/AddPaymentMethod') },
    { id: '2', title: 'Vouchers', subTitle: 'Add voucher', onPress: () => alert('Add voucher') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Krab Wallet</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Krab Cash</Text>
        <Text style={styles.balance}>0.00</Text>
        <TouchableOpacity style={styles.giftCardButton} onPress={() => alert('Gift card')}>
          <FontAwesome name="plus" size={18} color="#fff" />
          <Text style={styles.giftCardText}>Gift card</Text>
        </TouchableOpacity>
      </View>
      {menuItems.map(item => (
        <MenuItem
          key={item.id}
          title={item.title}
          subTitle={item.subTitle}
          onPress={item.onPress || (() => {})}
        />
      ))}
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
    backgroundColor: '#F8FBFD',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4A4A4A',
  },
  card: {
    backgroundColor: '#F8FBFD',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: '#666',
    fontWeight: '500',
    marginBottom: 10,
  },
  balance: {
    fontSize: 36,
    fontWeight: '700',
    color: '#4A4A4A',
    marginBottom: 20,
  },
  giftCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A0B5EB',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#8095CC',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  giftCardText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
    marginLeft: 8,
  },
  menuItem: {
    backgroundColor: '#F8FBFD',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4A4A4A',
    marginBottom: 8,
  },
  subItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8EDF3',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  subTitle: {
    fontSize: 14,
    color: '#7A90C2',
    fontWeight: '500',
    marginLeft: 8,
  },
});

export default WalletScreen;