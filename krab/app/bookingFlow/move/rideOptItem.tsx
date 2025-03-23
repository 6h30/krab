// src/components/RideOptionItem/RideOptionItem.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { RideOption } from "@/data/types";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { commonStyles } from "@/theme/styles";

const RideOptionItem: React.FC<{ item: RideOption }> = ({ item }) => {
  const IconComponent = item.icon;

  return (
    <View style={styles.rideOptionItem}>
      <TouchableOpacity style={styles.rideOptionItem__container}>
        {IconComponent && typeof IconComponent === "function" ? (
          <IconComponent width={50} height={35} />
        ) : (
          <Image source={item.icon} style={styles.rideOptionItem__icon} />
        )}
        <View style={styles.rideOptionItem__textContainer}>
          <Text style={styles.rideOptionItem__title}>{item.title}</Text>
          {item.description && (
            <Text style={styles.rideOptionItem__description}>
              {item.description}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Styles theo BEM
export const styles = StyleSheet.create({
  rideOptionItem: {
    paddingVertical: spacing.xs, 
    paddingHorizontal: spacing.xs, 
    width: "50%",
  },

  rideOptionItem__container: {
    ...commonStyles.flexRow, 
    alignItems: "center",
    backgroundColor: colors.backgroundPrimary, 
    borderRadius: spacing.md, 
    padding: spacing.md, 

    borderWidth: 1,
  },

  rideOptionItem__icon: {
    width: 28,
    height: 28,
    marginHorizontal: spacing.sm, 
  },

  rideOptionItem__textContainer: {
    flex: 1,
    marginLeft: spacing.sm, 
  },

  rideOptionItem__title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textPrimary, 
  },

  rideOptionItem__description: {
    fontSize: 14,
    color: colors.textSecondary, 
    marginTop: spacing.xs, 
  },
});

export default RideOptionItem;
