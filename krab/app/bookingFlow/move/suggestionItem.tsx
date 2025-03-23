import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Suggestion } from "@/data/types";
import LocationPick from "@/assets/svgs/bookingFlowSvgs/locationPick.svg";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { commonStyles } from "@/theme/styles";

const SuggestionItem: React.FC<{ item: Suggestion }> = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.suggestionItem}>
        <LocationPick
          style={styles.suggestionItem__locationIcon}
          width={28}
          height={28}
        />
        <View style={styles.suggestionItem__locationDetails}>
          <Text style={styles.suggestionItem__locationName}>{item.name}</Text>
          <Text
            style={styles.suggestionItem__locationAddress}
            numberOfLines={2}
          >
            {item.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Styles theo BEM
export const styles = StyleSheet.create({
  suggestionItem: {
    ...commonStyles.flexRow,
    padding: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderPrimary,
    backgroundColor: colors.backgroundPrimary,
  },
  suggestionItem__locationIcon: {
    marginRight: spacing.sm,
    marginTop: spacing.sm,
  },
  suggestionItem__locationDetails: {
    flex: 1,
    marginHorizontal: spacing.xs,
  },
  suggestionItem__locationName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginVertical: spacing.xs / 2,
  },
  suggestionItem__locationAddress: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});

export default SuggestionItem;
