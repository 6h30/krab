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
import { tabScreenStyles } from "@/theme/styles";

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
    ...tabScreenStyles.locationItem,
  },
  locationIcon: {
    marginHorizontal: 5,
  },
  locationDetails: {
    ...tabScreenStyles.locationDetails,
  },
  locationName: {
    ...tabScreenStyles.locationName,
  },
  locationAddress: {
  ...tabScreenStyles.locationAddress,
  },
  locationDistance: {
    ...tabScreenStyles.locationDistance,
  },
  componentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});
