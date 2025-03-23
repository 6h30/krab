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
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import TimeStop from "@/assets/svgs/bookingFlowSvgs/preBook/timeStop.svg";
import MapIcon from "@/assets/svgs/bookingFlowSvgs/preBook/mapIcon.svg";
import CursorTaget from "@/assets/svgs/bookingFlowSvgs/preBook/cursorTaget.svg";
import FocusCamera from "@/assets/svgs/bookingFlowSvgs/preBook/focusCamera.svg";
import AddCirle from "@/assets/svgs/bookingFlowSvgs/preBook/addCircle.svg";
import SearchCircle from "@/assets/svgs/bookingFlowSvgs/preBook/searchCircle.svg";
import HistoryPick from "@/assets/svgs/bookingFlowSvgs/preBook/historyPick.svg";
import HandDrag from "@/assets/svgs/bookingFlowSvgs/preBook/handDrag.svg";
import UpArrow from "@/assets/svgs/bookingFlowSvgs/preBook/upArrow.svg";
import ScrollVertical from "@/assets/svgs/bookingFlowSvgs/preBook/scrollVertical.svg";
import LikeChat from "@/assets/svgs/bookingFlowSvgs/preBook/likeChat.svg";

import ButtonF from "@/components/stylesFunny/ButtonF";
import { Location } from "@/data/types";
import { recentLocations } from "@/data/MockData";

const OnDestinationScreen: React.FC = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");
  const [containerHeight] = useState(new Animated.Value(200));
  const heightValueRef = useRef(200);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const keyboardHeight = useRef(new Animated.Value(0)).current;

  const [text, setText] = useState(""); // State lưu nội dung nhập
  const maxChars = 150; // Số ký tự tối đa
  // const charsLeft = maxChars - text.length;

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

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        Animated.timing(keyboardHeight, {
          toValue: e.endCoordinates.height, // Chiều cao bàn phím
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        Animated.timing(keyboardHeight, {
          toValue: 0, // Ẩn bàn phím
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Hàm mở modal
  const showModal = () => {
    setIsModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 1, // Trượt lên
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  // Hàm đóng modal
  const hideModal = () => {
    Animated.timing(slideAnim, {
      toValue: 0, // Trượt xuống
      duration: 250,
      useNativeDriver: true,
    }).start(() => setIsModalVisible(false));
  };

  // Kết hợp animation trượt modal và chiều cao bàn phím
  const modalTranslateY = Animated.add(
    slideAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [300, 0], // Trượt từ dưới lên
    }),
    keyboardHeight.interpolate({
      inputRange: [0, 500], // Giả sử chiều cao bàn phím tối đa là 500
      outputRange: [0, -500], // Di chuyển modal lên khi bàn phím xuất hiện
      extrapolate: "clamp",
    })
  );

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
          style={{ marginTop: 15, marginBottom: 100 }}
          data={recentLocations}
          renderItem={renderRecentItem}
          keyExtractor={(item) => item.id}
        />
      </Animated.View>

      <View style={styles.footer}>
        <View style={styles.footerButton}>
          <TouchableOpacity onPress={showModal}>
            <Text style={styles.footerText}>
              Add pickup details (e.g near the gate)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={showModal}>
            <AddCirle width={20} height={20} />
          </TouchableOpacity>
        </View>

        <ButtonF
          bgColor="#66E1FF"
          textColor="#333"
          title="Choose this pickup"
          size="secondary"
            radius="secondary"
          // style={styles.chooseButton}
          // textStyle={styles.chooseButtonText}
          onPress={() => router.push("/bookingFlow/choiceCar/selectCar")}
        />
      </View>

      {/* Modal trượt từ dưới lên */}
      {isModalVisible && (
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ translateY: modalTranslateY }] },
          ]}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Note to driver</Text>
            <TextInput
              style={styles.noteInput}
              placeholder="Add pickup details (e.g near the gate)"
              multiline
              maxLength={maxChars}
              value={text}
              // onChangeText={setText} // Viết gọn
              onChangeText={(value) => setText(value)}
            />
            <Text style={{ marginBottom: 10 }}>
              {text.length} / {maxChars} characters
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={hideModal} style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}
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
    width: 40,
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

  footer: {
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    width: "100%",
    alignSelf: "center",
    position: "absolute",
    bottom: 2,
    backgroundColor: "#fff",
    gap: 5,
  },
  footerButton: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingVertical: 5,
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
    padding: 10,
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

  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 250, // Chiều cao modal
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  modalContent: {
    padding: 20,
    flex: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    height: 100,
    textAlignVertical: "top",
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#66E1FF",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    borderWidth : 1,
    borderColor: "#bcbbc1",
  },
  buttonText: {
    color: "#111",
    fontSize: 16,
  },
});

export default OnDestinationScreen;
