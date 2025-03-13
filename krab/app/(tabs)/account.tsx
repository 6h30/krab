import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

import { SvgProps } from "react-native-svg";

import History from "@/assets/svgs/setingsvg/timeCircle.svg";
import Favourites from "@/assets/svgs/setingsvg/flagHabbit.svg";
import Wallet from "@/assets/svgs/setingsvg/walletM.svg";
import Help from "@/assets/svgs/setingsvg/help.svg";
import Promotions from "@/assets/svgs/setingsvg/promotions.svg";
import Settings from "@/assets/svgs/setingsvg/cog.svg";
import Logout from "@/assets/svgs/setingsvg/logout.svg";

// Định nghĩa kiểu cho các tham số của MenuItem
interface MenuItemProps {
  icon: string;
  SvgIcon?: React.FC<SvgProps>;
  title: string;
  onPress: () => void;
}

// Định nghĩa kiểu cho mỗi mục trong danh sách menu
interface MenuItemData {
  id: string;
  icon: string;
  SvgIcon?: React.FC<SvgProps>;
  title: string;
  slug: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  SvgIcon,
  title,
  onPress,
}) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.iconContainer}>
      {SvgIcon ? (
        <SvgIcon width={24} height={24} color="#007AFF" />
      ) : (
        <FontAwesome name={icon} size={24} color="#007AFF" />
      )}
    </View>
    <Text style={styles.menuText}>{title}</Text>
    <FontAwesome
      name="chevron-right"
      size={16}
      color="#666"
      style={styles.arrowIcon}
    />
  </TouchableOpacity>
);

const AccountScreen: React.FC = () => {
  const router = useRouter();

  const menuItems: MenuItemData[] = [
    {
      id: "1",
      icon: "history",
      SvgIcon: History,
      title: "Historys",
      slug: "history",
    },
    {
      id: "2",
      icon: "heart",
      SvgIcon: Favourites,
      title: "Your Favourites",
      slug: "favourites",
    },
    {
      id: "3",
      icon: "credit-card",
      SvgIcon: Wallet,
      title: "Wallet",
      slug: "wallet",
    },
    {
      id: "4",
      icon: "question-circle",
      SvgIcon: Help,
      title: "Help",
      slug: "help",
    },
    {
      id: "5",
      icon: "tag",
      title: "Promotions",
      SvgIcon: Promotions,
      slug: "promotions",
    },
    {
      id: "6",
      icon: "cog",
      title: "Settings",
      SvgIcon: Settings,
      slug: "settings",
    },
    {
      id: "7",
      icon: "sign-out",
      title: "Logout",
      SvgIcon: Logout,
      slug: "logout",
    },
  ];

  const renderItem = ({ item }: { item: MenuItemData }) => (
    <MenuItem
      icon={item.icon}
      SvgIcon={item.SvgIcon}
      title={item.title}
      onPress={() => router.push(`/accounts/${item.slug}`)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userIconContainer}>
          <FontAwesome name="user" size={30} color="#fff" />
        </View>
        <View>
          <Text style={styles.headerText}>dcviet</Text>
          <Text style={styles.subHeaderText}>Krab Premium</Text>
        </View>
      </View>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#f5f5f5",
  },
  userIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subHeaderText: {
    fontSize: 14,
    color: "#007AFF",
    marginTop: 4,
  },
  list: {
    padding: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  iconContainer: {
    width: 40,
    alignItems: "center",
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  arrowIcon: {
    marginLeft: 10,
  },
});

export default AccountScreen;
