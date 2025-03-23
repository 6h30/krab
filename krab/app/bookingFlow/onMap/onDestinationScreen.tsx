import React, { useState, useRef, useEffect } from "react";
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
  FlatList,
  Animated,
  PanResponder,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import AddCirle from "@/assets/svgs/bookingFlowSvgs/preBook/addCircle.svg";
import CursorTaget from "@/assets/svgs/bookingFlowSvgs/preBook/cursorTaget.svg";
import FocusCamera from "@/assets/svgs/bookingFlowSvgs/preBook/focusCamera.svg";
import HandDrag from "@/assets/svgs/bookingFlowSvgs/preBook/handDrag.svg";
import HistoryPick from "@/assets/svgs/bookingFlowSvgs/preBook/historyPick.svg";
import LikeChat from "@/assets/svgs/bookingFlowSvgs/preBook/likeChat.svg";
import MapIcon from "@/assets/svgs/bookingFlowSvgs/preBook/mapIcon.svg";
import ScrollVertical from "@/assets/svgs/bookingFlowSvgs/preBook/scrollVertical.svg";
import SearchCircle from "@/assets/svgs/bookingFlowSvgs/preBook/searchCircle.svg";
import TimeStop from "@/assets/svgs/bookingFlowSvgs/preBook/timeStop.svg";
import UpArrow from "@/assets/svgs/bookingFlowSvgs/preBook/upArrow.svg";

import ButtonF from "@/components/stylesFunny/ButtonF";
import { Location } from "@/data/types";
import { recentLocations } from "@/data/MockData";
import { colors } from "@/theme/colors";
import { spacing, margin, padding } from "@/theme/spacing";
import { commonStyles } from "@/theme/styles";

const OnDestinationScreen: React.FC = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");
  const [containerHeight] = useState(new Animated.Value(200));
  const heightValueRef = useRef(200);

  const renderRecentItem = ({ item }: { item: Location }) => (
    <TouchableOpacity style={styles.locationItem}>
      <View>
        <HistoryPick style={styles.locationIcon} width={28} height={28} />
        <Text style={styles.locationDistance}>{item.distance}</Text>
      </View>
      <View style={styles.locationDetails}>
        <Text style={styles.locationName}>{item.name}</Text>
        <Text style={styles.locationAddress} numberOfLines={2}>
          {item.address}
        </Text>
      </View>
    </TouchableOpacity>
  );

  // Theo dõi giá trị Animated.Value
  useEffect(() => {
    const listener = containerHeight.addListener(({ value }) => {
      heightValueRef.current = value;
    });
    return () => containerHeight.removeListener(listener); // Cleanup
  }, [containerHeight]);
  // Hàm xử lý tap để toggle height
  const toggleHeight = () => {
    const newHeight = heightValueRef.current === 200 ? 400 : 200;
    Animated.timing(containerHeight, {
      toValue: newHeight,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  // PanResponder để xử lý kéo
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const newHeight = Math.max(200, Math.min(400, 200 - gestureState.dy));
      containerHeight.setValue(newHeight);
    },
    onPanResponderRelease: (evt, gestureState) => {
      const finalHeight = heightValueRef.current > 350 ? 400 : 200;
      Animated.timing(containerHeight, {
        toValue: finalHeight,
        duration: 200,
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.searchBar}>
        <View style={styles.section1}>
          <TouchableOpacity
            style={{ borderWidth: 1, padding: 5, borderRadius: 5 }}
          >
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mapViewContainer}></View>

      <Animated.View
        style={[
          styles.locationContainer,
          { height: containerHeight }, // Gán height động
        ]}
        {...panResponder.panHandlers}
      >
        <TouchableOpacity
          onPress={toggleHeight}
          style={{ alignSelf: "center", position: "absolute", top: -12 }}
        >
          <ScrollVertical width={24} height={24} />
        </TouchableOpacity>
        <View
          style={{
            alignSelf: "flex-end",
            position: "absolute",
            right: 10,
            top: -90,
            borderWidth: 1,
            borderColor: "#bcbbc1",
            borderRadius: 14,
            paddingVertical: 8,
            paddingHorizontal: 6,
            backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity
            style={{ marginBottom: 8 }}
            onPress={() => router.push("/bookingFlow/onMap/placeChat")}
          >
            <LikeChat width={28} height={28} />
          </TouchableOpacity>

          <TouchableOpacity>
            <CursorTaget width={28} height={28} />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ marginTop: 15, marginBottom: 90 }} 
          data={recentLocations}
          renderItem={renderRecentItem}
          keyExtractor={(item) => item.id}
        />
      </Animated.View>

      <View style={styles.footer}>
        <ButtonF
          bgColor="#66E1FF"
          textColor="#333"
          title="Choose this Destination"
          size="secondary"
          radius="mini"
          onPress={() => router.push("/bookingFlow/onMap/onPickUpScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  searchBar: {
    ...commonStyles.flexRow,
    alignItems: "center",
    paddingTop: spacing.md,
    ...padding.horizontal("lg"),
    backgroundColor: colors.backgroundPrimary,
  },
  section1: {
    // flex: 1,
    width: 40,
  },
  section2: {
    flex: 9,
    ...commonStyles.flexRow,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    ...padding.horizontal("sm"),
    borderRadius: 8,
    gap: 10,
  },
  section2_noborder: {
    flex: 9,
    ...commonStyles.flexRow,
    alignItems: "center",
    ...padding.horizontal("sm"),
    gap: 10,
  },
  section3: {
    // width: 50,
    paddingLeft: spacing.lg,
    ...commonStyles.flexRow,
    justifyContent: "flex-end",
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
    color: colors.textPrimary,
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  footer: {
     ...padding.all('lg'),
    borderTopWidth: 1,
    borderTopColor: colors.borderPrimary,
    width: "100%",
    alignSelf: "center",
    position: "absolute",
    bottom: 2,
    backgroundColor: "#fff",
  },
  footerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  footerText: { fontSize: 14, color: "#666", flex: 1, marginHorizontal: 5 },

  mapViewContainer: {
    flex: 1,
  },
  locationContainer: {
    position: "relative",
    height: 250,
    // backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#bcbbc1",
    borderRadius: 14,
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
     paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  locationIcon: {
    marginHorizontal: 5,
  },
  locationDetails: {
    flex: 1,
    marginHorizontal: 5,
  },
  locationName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationAddress: {
    fontSize: 14,
    color: "#666",
    marginVertical: 2,
    lineHeight: 20,
  },
  locationDistance: {
    fontSize: 12,
    color: "#999",
    marginTop: 8,
    marginHorizontal: 5,
  },
});

export default OnDestinationScreen;
