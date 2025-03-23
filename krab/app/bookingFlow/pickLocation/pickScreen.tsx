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
import { colors } from "@/theme/colors";
import { spacing, margin, padding } from "@/theme/spacing";
import { commonStyles, pickScreenStyles } from "@/theme/styles";

const PickScreen: React.FC = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");
  const [activeTab, setActiveTab] = useState("recent");

  const tabs = [
    { id: "recent", label: "Recent", content: <RecentComponent /> },
    { id: "suggested", label: "Suggested", content: <SuggestedComponent /> },
    { id: "saved", label: "Saved", content: <SavedComponent /> },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
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
            <TouchableOpacity
              onPress={() =>
                router.push("/bookingFlow/pickLocation/addLocation")
              }
            >
              <AddCirle width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>

        <TabMenu tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <View style={styles.footer}>
          <Text style={styles.screenTitle}>Need help?</Text>
          <TouchableOpacity style={styles.footerButton}>
            <TimeStop width={28} height={28} />
            <Text style={styles.footerText}>
              If you haven't decided where to go, select a ride with metered
              fare.
            </Text>
            <Icon name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chooseButton}
            onPress={() =>
              router.push("/bookingFlow/onMap/onDestinationScreen")
            }
          >
            <MapIcon width={20} height={20} />
            <Text style={styles.chooseButtonText}>Choose on KrabMaps</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  scrollContainer: {
    flex: 1,
    //  ...padding.horizontal('lg'),
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
  },
  currentLocationText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  screenTitle: {
    ...pickScreenStyles.screenTitle,
  },
  footer: {
    ...pickScreenStyles.footer,
  },
  footerButton: {
    ...commonStyles.flexRow,
    alignItems: "center",
    justifyContent: "space-between",
    ...padding.vertical("sm"),
  },
  footerText: {
    fontSize: 14,
    color: colors.textSecondary,
    flex: 1,
    ...margin.horizontal("md"),
  },
  chooseButton: {
    ...commonStyles.flexRow,
    justifyContent: "center",
    backgroundColor: colors.secondary,
    ...padding.vertical("md"),
    borderRadius: 8,
    alignItems: "center",
    marginTop: spacing.sm,
    borderWidth: 1,
    gap: 8,
  },
  chooseButtonText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PickScreen;
