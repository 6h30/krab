import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MapIcon from "@/assets/svgs/bookingFlowSvgs/preBook/mapIcon.svg";
import { router } from "expo-router";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { commonStyles, screenStyles } from "@/theme/styles";

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Element: Back Button */}
      <TouchableOpacity style={styles.header__backButton}>
        <Icon name="arrow-back" size={24} color={colors.textPrimary} />
      </TouchableOpacity>

      {/* Element: Title */}
      <Text style={styles.header__title}>Transport</Text>

      {/* Element: Right Action */}
      <TouchableOpacity
        style={styles.header__rightAction}
        onPress={() => router.push("/bookingFlow/onMap/onDestinationScreen")}
      >
        <Text style={styles.header__rightActionText}>Map</Text>
        <MapIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

// Styles theo BEM
export const styles = StyleSheet.create({
  // Block: Header
  header: {
    ...commonStyles.flexRow,
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing.lg,
    backgroundColor: colors.backgroundPrimary,
    ...commonStyles.shadow,
  },

  // Element: Back Button
  header__backButton: {
    padding: spacing.xs, // 4 (để vùng nhấn lớn hơn một chút)
  },

  // Element: Title
  header__title: {
    ...screenStyles.header__title,
  },

  // Element: Right Action
  header__rightAction: {
    ...commonStyles.flexRow,
    borderWidth: 1,
    borderColor: colors.borderDark,
    gap: spacing.xs, // 4 (thay cho gap: 5 để đồng bộ với spacing)
    alignItems: "center",
    paddingHorizontal: spacing.sm, // 8 (thay 5)
    paddingVertical: spacing.xs, // 4 (thay 2)
    borderRadius: spacing.sm, // 8
  },
  header__rightActionText: {
    fontSize: 12,
    color: colors.textPrimary, // Thay #000
  },
});

export default Header;
