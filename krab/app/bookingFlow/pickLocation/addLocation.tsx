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
import RecentComponent from "./recentTab";
import SuggestedComponent from "./suggestedTab";
import SavedComponent from "./savedTab";
import TabMenu from "./menuTab";

const AddLocationScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const [activeTab, setActiveTab] = useState("recent");

  const tabs = [
    { id: "recent", label: "Recent", content: <RecentComponent /> },
    { id: "suggested", label: "Suggested", content: <SuggestedComponent /> },
    { id: "saved", label: "Saved", content: <SavedComponent /> },
  ];

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
      </View>

      {/* Thanh nhập liệu tìm kiếm và cờ */}
      <View
        style={
          (styles.searchBar,
          {
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
          })
        }
      >
        <View style={styles.section1} />

        <View style={styles.section2}>
          <CursorTaget width={24} height={24} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a location"
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
      <TabMenu tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  section1: {
    width: 30,
  },
  section2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    gap: 10,
  },
  section2_noborder: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
  },
  section3: {
    width: 60,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 5,
  },
  currentLocationText: {
    marginLeft: 5,
    fontSize: 16,
    color: "#000",
  },
  locationListContainer: {
    flex: 1,
    paddingHorizontal: 10,
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

export default AddLocationScreen;
