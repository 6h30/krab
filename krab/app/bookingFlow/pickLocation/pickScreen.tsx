import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import TimeStop from "@/assets/svgs/bookingFlowSvgs/preBook/timeStop.svg";
import MapIcon from "@/assets/svgs/bookingFlowSvgs/preBook/mapIcon.svg";
import CursorTaget from "@/assets/svgs/bookingFlowSvgs/preBook/cursorTaget.svg";
import FocusCamera from "@/assets/svgs/bookingFlowSvgs/preBook/focusCamera.svg";
import AddCirle from "@/assets/svgs/bookingFlowSvgs/preBook/addCircle.svg";
import SearchCircle from "@/assets/svgs/bookingFlowSvgs/preBook/searchCircle.svg";

import RecentComponent from "./recentTab";
import SuggestedComponent from "./suggestedTab";
import SavedComponent from "./savedTab";
import TabMenu from "./menuTab";

const PickScreen: React.FC = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");
  // const [activeTab, setActiveTab] = useState<"recent" | "suggested" | "saved">(
  //   "recent"
  // );

  // const renderItem = () => {
  //   switch (activeTab) {
  //     case "suggested":
  //       return <SuggestedComponent />;
  //     case "saved":
  //       return <SavedComponent />;
  //     case "recent":
  //     default:
  //       return <RecentComponent />;
  //   }
  // };

  const [activeTab, setActiveTab] = useState("recent");

  const tabs = [
    { id: "recent", label: "Recent", content: <RecentComponent /> },
    { id: "suggested", label: "Suggested", content: <SuggestedComponent /> },
    { id: "saved", label: "Saved", content: <SavedComponent /> },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.searchBar}>
        <View style={styles.section1}>
          <TouchableOpacity>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.section2_noborder}>
          <CursorTaget width={24} height={24} />
          <Text style={styles.currentLocationText}>Current location</Text>
        </TouchableOpacity>

        <View style={styles.section3}>
          <TouchableOpacity
            onPress={() =>
              router.push("/bookingFlow/pickLocation/selectCountry")
            }
          >
            <Image
              source={require("@/assets/svgs/bookingFlowSvgs/preBook/vnFlag.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBar}>
        <View style={styles.section1} />

        <View style={styles.section2}>
          <SearchCircle width={24} height={24} />
          <TextInput
            style={styles.searchInput}
            placeholder="Find airports by flight no."
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity>
            <FocusCamera width={24} height={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.section3}>
          <TouchableOpacity  onPress={() =>
              router.push("/bookingFlow/pickLocation/addLocation")
            }>
            <AddCirle width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={styles.tabs}>
        {["recent", "suggested", "saved"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={activeTab === tab ? styles.tabActive : styles.tab}
            onPress={() => setActiveTab(tab as any)}
          >
            <Text
              style={activeTab === tab ? styles.tabTextActive : styles.tabText}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ flex: 1 }}>{renderItem()}</View> */}

      <TabMenu tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <View style={styles.footer}>
        <Text style={styles.screenTitle}>Need help?</Text>
        <TouchableOpacity style={styles.footerButton}>
          <TimeStop width={28} height={28} />
          <Text style={styles.footerText}>
            If you haven't decided where to go, select a ride with metered fare.
          </Text>
          <Icon name="chevron-right" size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.chooseButton}>
          <MapIcon width={20} height={20} />
          <Text style={styles.chooseButtonText}>Choose on KrabMaps</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  section1: { 
    // flex: 1,
    width: 30,
   },
  section2: {
    flex: 9,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    gap: 10,
  },
  section2_noborder: {
    flex: 9,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
  },
  section3: {
    // flex: 1,
    width: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    borderRadius: 8,
  },
  currentLocationText: {
    fontSize: 16,
    color: "#333",
  },
  screenTitle: { fontSize: 18, fontWeight: "bold", color: "#333" },
  tabs: { flexDirection: "row", paddingHorizontal: 10, marginVertical: 10 },
  tab: { paddingVertical: 5, paddingHorizontal: 15 },
  tabActive: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#8be8ff",
  },
  tabText: { fontSize: 16, color: "#666" },
  tabTextActive: { fontSize: 16, color: "#333", fontWeight: "bold" },
  footer: { padding: 10, borderTopWidth: 1, borderTopColor: "#f0f0f0" },
  footerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  footerText: { fontSize: 14, color: "#666", flex: 1, marginHorizontal: 5 },
  chooseButton: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#66E1FF",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    gap: 5,
  },
  chooseButtonText: { color: "#333", fontSize: 16, fontWeight: "bold" },
});

export default PickScreen;
