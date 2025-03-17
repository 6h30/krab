import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Suggestion } from "@/data/types";
import LocationPick from "@/assets/svgs/bookingFlowSvgs/locationPick.svg";

const SuggestionItem: React.FC<{ item: Suggestion }> = ({ item }) => {
  return (
    <View style={styles.suggestionItem}>
      <LocationPick style={styles.locationIcon} width={28} height={28} />
      <View style={styles.locationDetails}>
        <Text style={styles.locationName}>{item.name}</Text>
        <Text style={styles.locationAddress} numberOfLines={2}>
          {item.address}
        </Text>
      </View>
    </View>
  );
};

export default SuggestionItem;

const styles = StyleSheet.create({
  suggestionItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    backgroundColor: "#FFF",
  },
  locationDetails: {
    flex: 1,
    marginHorizontal: 5,
  },
  locationName: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 2,
  },
  locationAddress: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  locationIcon: {
    fontSize: 20,
    marginRight: 10,
    marginTop: 8,
  },
});
