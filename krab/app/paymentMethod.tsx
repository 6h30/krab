import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useRouter } from 'expo-router';

// Định nghĩa kiểu cho mỗi mục trong danh sách menu
interface MenuItemData {
  id: string;
  icon: string;
  title: string;
  isSubItem?: boolean; // Để phân biệt các mục con như Home, Work
  isEditable?: boolean; // Để đánh dấu mục có thể chỉnh sửa (EDIT ACCOUNT)
  onPress?: () => void;
}

// Định nghĩa kiểu cho props của MenuItem
interface MenuItemProps {
  icon: string;
  title: string;
  isSubItem?: boolean;
  isEditable?: boolean;
  onPress: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, isSubItem, isEditable, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <FontAwesome
      name={icon}
      size={isSubItem ? 18 : 24}
      color={isEditable ? '#28a745' : '#000'} // Màu xanh cho EDIT ACCOUNT
    />
    <Text style={[styles.menuText, isEditable && styles.editableText]}>{title}</Text>
  </TouchableOpacity>
);

const PaymentScreen: React.FC = () => {
  const menuItems: MenuItemData[] = [
    { id: '1', icon: 'user-circle', title: 'John Doe', isEditable: true, onPress: () => alert('Edit account') },
    { id: '2', icon: 'map-marker', title: 'Saved places', isSubItem: false },
    { id: '3', icon: 'home', title: 'Home', isSubItem: true, onPress: () => alert('Add home') },
    { id: '4', icon: 'briefcase', title: 'Work', isSubItem: true, onPress: () => alert('Add work') },
    { id: '5', icon: 'ellipsis-h', title: 'Other options', isSubItem: false },
    { id: '6', icon: 'sign-out', title: 'Sign Out', isSubItem: true, onPress: () => alert('Sign out') },
  ];

  const renderItem = ({ item }: { item: MenuItemData }) => (
    <MenuItem
      icon={item.icon}
      title={item.title}
      isSubItem={item.isSubItem}
      isEditable={item.isEditable}
      onPress={item.onPress || (() => {})}
    />
  );

  const router = useRouter();
  
    const handlePayment = () => {
      router.push('/');
    };

  return (
    <View style={styles.container}>
      {/* Header với nút Back và tiêu đề */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => alert('Go back')}>
          <FontAwesome name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      {/* Phần thông tin người dùng */}
      <View style={styles.userInfo}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} // Placeholder avatar
          style={styles.avatar}
        />
        <View>
          <Text style={styles.userName}>John Doe</Text>
          <MenuItem
            icon="pencil"
            title="EDIT ACCOUNT"
            isEditable={true}
            onPress={() => alert('Edit account')}
          />
        </View>
      </View>

      {/* Danh sách menu */}
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <TouchableOpacity
      
              onPress={handlePayment}
            >
              <Text>Confirm rider</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: '#ccc', // Placeholder màu xám
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuText: {
    marginLeft: 20,
    fontSize: 16,
  },
  editableText: {
    color: '#28a745', // Màu xanh cho EDIT ACCOUNT và Sign Out
  },
  list: {
    paddingVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 20,
  },
});

export default PaymentScreen;