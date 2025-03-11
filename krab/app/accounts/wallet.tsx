import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Định nghĩa kiểu cho mỗi mục trong danh sách menu
interface MenuItemData {
  id: string;
  title: string;
  subTitle?: string;
  onPress?: () => void;
}

// Định nghĩa kiểu cho props của MenuItem
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
  const menuItems: MenuItemData[] = [
    { id: '1', title: 'Payment methods', subTitle: 'Add payment method', onPress: () => alert('Add payment method') },
    { id: '2', title: 'Vouchers', subTitle: 'Add voucher', onPress: () => alert('Add voucher') },
  ];

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Krab Wallet</Text>
      </View>

      {/* Thẻ Uber Cash */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Krab Cash</Text>
        <Text style={styles.balance}>0.00</Text>
        <TouchableOpacity style={styles.giftCardButton} onPress={() => alert('Gift card')}>
          <FontAwesome name="plus" size={18} color="#fff" />
          <Text style={styles.giftCardText}>Gift card</Text>
        </TouchableOpacity>
      </View>

      {/* Danh sách menu */}
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
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  giftCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  giftCardText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 14,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  subTitle: {
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },
});

export default WalletScreen;