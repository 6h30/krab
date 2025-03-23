import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import CursorTaget from "@/assets/svgs/bookingFlowSvgs/preBook/cursorTaget.svg";
import { colors } from "@/theme/colors";
import { spacing, margin, padding } from "@/theme/spacing";
import { commonStyles, pickScreenStyles } from "@/theme/styles";

const SelectCountryScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedLocation, setSelectedLocation] =
    useState<string>("Ho Chi Minh City");

  const locations = {
    B: [
      { name: "Bac Ninh" },
      { name: "Binh Dinh" },
      { name: "Binh Thuan" },
      { name: "Bac Giang" },
      { name: "Bac Kan" },
    ],
    C: [{ name: "Ca Mau" }, { name: "Can Tho" }, { name: "Cao Bang" }],
    D: [
      { name: "Da Nang" },
      { name: "Dak Lak" },
      { name: "Dak Nong" },
      { name: "Dien Bien" },
      { name: "Dong Nai" },
      { name: "Dong Thap" },
    ],
    G: [{ name: "Gia Lai" }],
    H: [
      { name: "Ha Noi" },
      { name: "Hai Phong" },
      { name: "Ho Chi Minh City" },
      { name: "Hung Yen" },
    ],
  };

  // Lọc danh sách địa điểm dựa trên searchText
  const filteredLocations = Object.entries(locations).reduce(
    (acc, [group, items]) => {
      const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      if (filteredItems.length > 0) {
        acc[group] = filteredItems;
      }
      return acc;
    },
    {} as { [key: string]: { name: string }[] }
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Thanh tìm kiếm và nút quay lại */}
      <View style={styles.searchBar}>
        <View style={styles.section1}>
          <TouchableOpacity>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.section2_noborder}>
          <CursorTaget width={24} height={24} />
          <Text style={styles.currentLocationText}>{selectedLocation}</Text>
        </TouchableOpacity>
      </View>

      {/* Thanh nhập liệu tìm kiếm và cờ */}
      <View style={styles.searchBar}>
        <View style={styles.section1} />

        <View style={styles.section2}>
          <CursorTaget width={24} height={24} />
          <TextInput
            style={styles.searchInput}
            placeholder={selectedLocation}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <View style={styles.section3}>
          <TouchableOpacity
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("@/assets/svgs/bookingFlowSvgs/preBook/vnFlag.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text style={{ fontSize: 11 }}>Vietnam</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Danh sách địa điểm */}
      <View style={styles.locationListContainer}>
        <ScrollView>
          {Object.entries(filteredLocations).map(([group, items]) => (
            <View key={group} style={styles.groupContainer}>
              <Text style={styles.groupTitle}>{group}</Text>
              {items.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.locationItem}
                  onPress={() => setSelectedLocation(item.name)}
                >
                  <Text style={styles.locationName}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  searchBar: {
    ...pickScreenStyles.searchBar,
  },
  section1: {
    width: 30,
  },
  section2: {
    ...pickScreenStyles.section2,
  },
  section2_noborder: {
    ...pickScreenStyles.section2_noborder,
  },
  section3: {
   ...pickScreenStyles.section3,
  },
  searchInput: {
    ...pickScreenStyles.searchInput,
    paddingHorizontal: 5,
  },
  currentLocationText: {
    marginLeft: 5,
    fontSize: 16,
    color: "#000",
  },
  locationListContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  groupContainer: {
    marginBottom: 15,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  locationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  locationName: {
    fontSize: 16,
    color: "#000",
  },
});

export default SelectCountryScreen;
