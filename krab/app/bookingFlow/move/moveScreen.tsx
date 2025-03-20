// screens/RideBookingScreen.tsx
import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Text, Animated, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Header from "./header";
import Illustration from "./illustration";
import SearchBar from "./searchBar";
import SuggestionItem from "./suggestionItem";
import AdvanceBookingItem from "./advanceBooking";
// import Icon from "react-native-vector-icons/MaterialIcons";
import RideOptionItem from "./rideOptItem";
import OfferItem from "./offerItem";
import {
  suggestions,
  rideOptions,
  offers,
  advanceBookings,
} from "@/data/MockData";

const RideBookingScreen = () => {
  const [destination, setDestination] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  const scrollY = useRef(new Animated.Value(0)).current;
  const searchBackground = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ["#fff", "#fff"],
    extrapolate: "clamp",
  });

  const searchElevation = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 5],
    extrapolate: "clamp",
  });

  const shadowOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 0.1],
    extrapolate: "clamp",
  });

  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      setIsSticky(value > 220); // Khi scroll > 100px thì kích hoạt sticky
    });

    return () => {
      scrollY.removeListener(listener);
    };
  }, []);
  // Tạo một danh sách các phần tử để FlatList quản lý
  const sections = [
    { type: "header", component: <Header /> },
    { type: "illustration", component: <Illustration /> },
    {
      type: "searchBar",
      component: (
        <Animated.View
          style={[
            styles.searchBarContainer,
            {
              backgroundColor: searchBackground,
              elevation: searchElevation,
              shadowOpacity: scrollY.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 0.1],
              }),
            },
          ]}
        >
          <SearchBar
            destination={destination}
            setDestination={setDestination}
            isSticky={isSticky}
          />
        </Animated.View>
      ),
    },
    {
      type: "suggestions",
      component: (
        <View style={styles.optionsSection}>
          <Text style={styles.screenTitle}>Location history</Text>
          <FlatList
            data={suggestions}
            renderItem={({ item }) => <SuggestionItem item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      ),
    },
    {
      type: "rideOptions",
      component: (
        <View style={styles.optionsSection}>
          <Text style={styles.screenTitle}>Rides for your every need</Text>
          <FlatList
            data={rideOptions}
            renderItem={({ item }) => <RideOptionItem item={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      ),
    },
    {
      type: "advanceBookings",
      component: (
        <View style={styles.optionsSection}>
          <Text style={styles.screenTitle}>Pre-book your ride</Text>

          <FlatList
            data={advanceBookings}
            renderItem={({ item }) => <AdvanceBookingItem item={item} />}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
      ),
    },
  ];

  return (
    <View style={styles.safeContainer}>
      <Animated.FlatList
        // style={styles.container}
        data={sections}
        renderItem={({ item }) => item.component}
        keyExtractor={(item, index) => item.type + index}
        stickyHeaderIndices={[2]}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false } // Đặt false vì backgroundColor không hỗ trợ native driver
        )}
        ListFooterComponent={
          <View style={styles.optionsSection}>
            <Text style={styles.screenTitle}>KrabHotSpot</Text>
            <FlatList
              data={offers}
              renderItem={({ item }) => <OfferItem item={item} />}
              keyExtractor={(item) => item.id}
              horizontal
              bounces={false}
              contentContainerStyle={{ paddingBottom: 50 }}
            />
          </View>
        }
      />
    </View>
  );
};

export default RideBookingScreen;
