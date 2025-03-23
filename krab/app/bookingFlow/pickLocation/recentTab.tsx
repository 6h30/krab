// src/components/RecentComponent.tsx
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import HistoryPick from "@/assets/svgs/bookingFlowSvgs/preBook/historyPick.svg";
import { Location } from "@/data/types";
import { recentLocations } from "@/data/MockData";
import { tabScreenStyles } from "@/theme/styles";

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
    flex: 1,
    marginHorizontal: 10,
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
