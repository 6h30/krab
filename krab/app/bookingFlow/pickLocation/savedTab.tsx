// src/components/SavedComponent.tsx
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import HistoryPick from "@/assets/svgs/bookingFlowSvgs/preBook/historyPick.svg";
import EditPencil from "@/assets/svgs/bookingFlowSvgs/preBook/editPencil.svg";
import EditAdd from "@/assets/svgs/bookingFlowSvgs/preBook/editAdd.svg";

import { savedLocations } from "@/data/MockData";
import { Location } from "@/data/types";

const SavedComponent = () => {
  const renderSavedItem = ({ item }: { item: Location }) => (
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
      <EditPencil style={styles.locationIcon} width={20} height={20} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addNewContainer}>
        <EditAdd style={styles.locationIcon} width={28} height={28} />
        <Text>Add new</Text>
      </TouchableOpacity>
      <FlatList
        data={savedLocations}
        renderItem={renderSavedItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  ); 
};

export default SavedComponent;

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
  addNewContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
});
