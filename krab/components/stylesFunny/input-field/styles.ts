import { StyleSheet } from "react-native";

const COLORS = {
  purple: "#7E49FF",
  white: "#FFFFFF",
  lightPurple: "#ECE8FF",
  slate: "#020617",
  gray: "#E2E8F0",
  black: "#000000",
  red: "#FF0000",
};

const BaseStyle = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  icon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

const styles = {
  standard: StyleSheet.create({
    wrapper: {
      ...BaseStyle.wrapper,
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: COLORS.black,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    input: {
      ...BaseStyle.input,
      color: COLORS.black,
    },
    leftIcon: {
      ...BaseStyle.icon,
      tintColor: COLORS.black, // Màu icon trái
    },
    rightIcon: {
      ...BaseStyle.icon,
      tintColor: COLORS.black, // Màu icon phải
    },
  }),
  secondary: StyleSheet.create({
    wrapper: {
      ...BaseStyle.wrapper,
      backgroundColor: COLORS.gray,
      borderWidth: 0,
      width: "90%",
    },
    input: {
      ...BaseStyle.input,
      color: COLORS.purple,
    },
    leftIcon: {
      ...BaseStyle.icon,
      tintColor: COLORS.purple,
    },
    rightIcon: {
      ...BaseStyle.icon,
      tintColor: COLORS.purple,
    },
  }),
  light: StyleSheet.create({
    wrapper: {
      ...BaseStyle.wrapper,
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: COLORS.gray,
    },
    input: {
      ...BaseStyle.input,
      color: COLORS.slate,
    },
    leftIcon: {
      ...BaseStyle.icon,
      tintColor: COLORS.slate,
    },
    rightIcon: {
      ...BaseStyle.icon,
      tintColor: COLORS.slate,
    },
  }),
  offlight: StyleSheet.create({
    wrapper: {
      ...BaseStyle.wrapper,
      backgroundColor: "transparent",
      borderWidth: 0,
      borderBottomWidth: 2,
      borderBottomColor: COLORS.purple,
    },
    input: {
      ...BaseStyle.input,
      color: COLORS.purple,
    },
    leftIcon: {
      ...BaseStyle.icon,
      tintColor: COLORS.purple,
    },
    rightIcon: {
      ...BaseStyle.icon,
      tintColor: COLORS.purple,
    },
  }),
};

const sizes = {
  standard: 16,
  secondary: 12,
  light: 8,
  offlight: 4,
};

const radiusList = {
  standard: 12,
  full: 9999,
  none: 0,
};

export { styles, sizes, radiusList };