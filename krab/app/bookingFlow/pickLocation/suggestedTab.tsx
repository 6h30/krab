// src/components/SuggestedComponent.tsx
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import HistoryPick from "@/assets/svgs/bookingFlowSvgs/preBook/historyPick.svg";
import { suggestedLocations } from "@/data/MockData";
import { Location } from "@/data/types";

const SuggestedComponent = () => {
  const renderSuggestedItem = ({ item }: { item: Location }) => (
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
      <Text style={styles.componentTitle}>Frequently used</Text>
      <FlatList
        data={suggestedLocations}
        renderItem={renderSuggestedItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.componentTitle}>Popular</Text>
    </View>
  );
};

export default SuggestedComponent;

const styles = StyleSheet.create({
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
});
