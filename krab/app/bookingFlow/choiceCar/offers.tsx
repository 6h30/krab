import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import ReceiptBill from "@/assets/svgs/bookingFlowSvgs/preBook/receiptBill.svg";
import TickerAdd from "@/assets/svgs/bookingFlowSvgs/preBook/tickerAdd.svg";
import CheckTick from "@/assets/svgs/bookingFlowSvgs/preBook/checkTick.svg";

import { colors } from "@/theme/colors";
import { spacing, margin, padding } from "@/theme/spacing";
import {
  commonStyles,
  pickScreenStyles,
  tabScreenStyles,
} from "@/theme/styles";
import OfferItems from "@/components/stylesFunny/OfferItems";

type OfferData = {
  id: number;
  icon?: JSX.Element;
  image?: string | number;
  title: string;
  subtitle?: string;
  onPress: () => void;
  isFirst?: boolean;
};

const OffersScreen = () => {
  const [searchText, setSearchText] = useState<string>("");

  const offerData: OfferData[] = [
    {
      id: 1,
      icon: <CheckTick width={24} height={24} />,
      title: "Use KrabGifts",
      subtitle: "Have a gift code? Redeem and use it now",
      onPress: () => console.log("KrabGifts pressed"),
      isFirst: true,
    },
    {
      id: 2,
      //   icon: <ReceiptBill width={24} height={24} />,
      title: "Momo | Đồng giá 15k",
      image: "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png",
      onPress: () => console.log("Momo pressed"),
    },
    {
      id: 3,
      icon: <ReceiptBill width={24} height={24} />,
      title: "Ưu đãi 20.000đ x 1 chuyến xe",
      subtitle:
        "20.000đ off, change your chosen vehicle type to enjoy this offer",
      onPress: () => console.log("Discount pressed"),
    },
    {
      id: 4,
    //   icon: <ReceiptBill width={24} height={24} />,
      image: "https://upload.wikimedia.org/wikipedia/vi/7/77/ZaloPay_Logo.png",
      title: "Thanh toán qua ZaloPay",
      subtitle: "Giảm 10% cho đơn đầu tiên",
      onPress: () => console.log("ZaloPay pressed"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <View style={styles.searchBar}>
          <View style={styles.section1}>
            <TouchableOpacity>
              <Icon name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.address} numberOfLines={1} ellipsizeMode="tail">
              Offers
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
          <View style={styles.section1}>
            <TouchableOpacity>
              <TickerAdd width={24} height={24} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.section2_noborder}>
            <TextInput
              style={styles.searchInput}
              placeholder="Enter promo or gift code here"
              value={searchText}
              onChangeText={setSearchText}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}></View>
      </View>
      <ScrollView>
        <ScrollView>
          {offerData.map((item) => (
            <OfferItems
              key={item.id}
              icon={item.icon}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              onPress={item.onPress}
              isFirst={item.isFirst}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    ...pickScreenStyles.searchBar,
  },
  section1: {
    // flex: 1,
    width: 40,
  },
  section2_noborder: {
    ...pickScreenStyles.section2_noborder,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  address: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    flexWrap: "wrap",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 14,
    paddingHorizontal: 16,
    gap: 16,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 16,
    color: "#000",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  searchInput: {
    ...pickScreenStyles.searchInput,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  optionTextContainer: {
    flex: 1,
    gap: 4,
    marginLeft: 16,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  optionSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  screenTitle: {
    ...pickScreenStyles.screenTitle,
  },
  footer: {
    padding: 16,
  },
  footerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});

export default OffersScreen;
