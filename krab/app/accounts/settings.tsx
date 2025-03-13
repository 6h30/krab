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
            color={isEditable ? '#28a745' : '#000'} 
        />
        <Text style={[styles.menuText, isEditable && styles.editableText]}>{title}</Text>
    </TouchableOpacity>
);

const UserSettingScreen: React.FC = () => {
    const menuItems: MenuItemData[] = [
        { id: '1', icon: 'user-circle', title: 'dcviet', isEditable: true, onPress: () => router.push(`/accounts/authencation/`) },
        { id: '2', icon: 'map-marker', title: 'Security', isSubItem: false, onPress: () => router.push(`/accounts/SecuritySettings`) },
        { id: '5', icon: 'ellipsis-h', title: 'setNewPass', isSubItem: false, onPress: () => router.push(`/accounts/authencation/setNewPass`) },
    ];

    const renderItem = ({ item }: { item: MenuItemData }) => (
        <MenuItem
            icon={item.icon}
            title={item.title}
            isSubItem={item.isSubItem}
            isEditable={item.isEditable}
            onPress={item.onPress || (() => { })}
        // onPress={() => router.push(`/accounts/${item.slug}`)}
        />
    );

    const router = useRouter();

    return (
        <View style={styles.container}>

            {/* Phần thông tin người dùng */}
            <View style={styles.userInfo}>
                <Image
                    source={require('@/assets/images/krab-go.png')}
                    style={styles.avatar}
                />
                <View>
                    <Text style={styles.userName}>dcviet</Text>
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

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F4F8', // Màu nền nhẹ nhàng
      padding: 15,
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F8FBFD',
      borderRadius: 20,
      padding: 20,
      marginBottom: 20,
      // Hiệu ứng nổi nhẹ
      shadowColor: '#A0A0A0',
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 6,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 15,
      // Bóng đổ cho avatar
      shadowColor: '#A0A0A0',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    userName: {
      fontSize: 20,
      fontWeight: '600',
      color: '#4A4A4A',
      marginBottom: 5,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F8FBFD',
      borderRadius: 15,
      padding: 15,
      // Hiệu ứng nổi
      shadowColor: '#A0A0A0',
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 6,
    },
    menuText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#4A4A4A',
      marginLeft: 15,
      flex: 1,
    },
    editableText: {
      color: '#7A90C2', // Màu xanh nhạt thay cho #28a745 để phù hợp Claymorphism
      fontWeight: '600',
    },
    list: {
      paddingBottom: 20,
    },
    separator: {
      height: 10, // Khoảng cách giữa các mục
      backgroundColor: 'transparent',
    },
  });

export default UserSettingScreen;