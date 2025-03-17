// src/components/RecentComponent.tsx
import React from "react";
import { View, TouchableOpacity, Text, FlatList, StyleSheet } from "react-native";
import HistoryPick from "@/assets/svgs/bookingFlowSvgs/preBook/historyPick.svg";
import { Location } from "@/data/types";
import {
    recentLocations,
  } from "@/data/MockData";

const RecentComponent = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.componentTitle}>Recent Locations</Text>
      <FlatList
        data={recentLocations}
        renderItem={renderRecentItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RecentComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
  },
  tab: {
    padding: 10,
  },
  tabActive: {
    padding: 10,
    backgroundColor: "#66E1FF",
    borderRadius: 5,
  },
  tabText: {
    fontSize: 16,
    color: "#333",
  },
  tabTextActive: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  componentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  suggestedCard: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    margin: 10,
  },
  suggestedName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  savedItem: {
    padding: 15,
    backgroundColor: "#fff0f0",
    borderRadius: 5,
    margin: 10,
  },
  actionButton: {
    backgroundColor: "#00bcd4",
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: "flex-start",
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});