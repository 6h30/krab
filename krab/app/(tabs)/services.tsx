import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

// Định nghĩa kiểu cho các tham số của MenuItem
interface MenuItemProps {
  icon: string;
  title: string;
  onPress: () => void;
}

// Định nghĩa kiểu cho mỗi mục trong danh sách menu
interface MenuItemData {
  id: string;
  icon: string;
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <FontAwesome name={icon} size={24} color="#000" />
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

const AccountScreen: React.FC = () => {
  const menuItems: MenuItemData[] = [
    { id: '1', icon: 'receipt', title: 'Orders' },
    { id: '2', icon: 'heart', title: 'Your favourites' },
    { id: '3', icon: 'gift', title: 'Restaurant Rewards' },
    { id: '4', icon: 'credit-card', title: 'Wallet' },
    { id: '5', icon: 'send', title: 'Send a gift' },
    { id: '6', icon: 'briefcase', title: 'Business preferences' },
    { id: '7', icon: 'briefcase', title: 'Make work meals quicker and easier' },
    { id: '8', icon: 'question-circle', title: 'Help' },
    { id: '9', icon: 'tag', title: 'Promotions' },
    { id: '10', icon: 'ticket', title: 'Uber Pass' },
    { id: '11', icon: 'ticket', title: 'Join free for 1 month' },
    { id: '12', icon: 'truck', title: 'Deliver with Uber' },
    { id: '13', icon: 'cog', title: 'Settings' },
  ];

  const renderItem = ({ item }: { item: MenuItemData }) => (
    <MenuItem icon={item.icon} title={item.title} onPress={() => alert(`Pressed ${item.title}`)} />
  );

  const router = useRouter();

  const handleUserSetting = () => {
    router.push("/accounts/history");
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="user" size={30} color="#000" />
        <Text style={styles.headerText}>John Doe</Text>
      </View>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleUserSetting}
      >
        <Text style={styles.continueButtonText}>user</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.continueButton} onPress={() => router.push("/accounts/123")}>
        <Text>Go to Account 123</Text>
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
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    marginLeft: 20,
    fontSize: 16,
  },
  continueButton: {
    position: "absolute",
    bottom: 60,
    left: "10%",
    width: "80%",
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AccountScreen;