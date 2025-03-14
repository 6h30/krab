import { StyleSheet } from "react-native";

const COLORS = {
  purple: "#7E49FF",
  white: "#FFFFFF",
  lightPurple: "#ECE8FF",
  slate: "#020617",
  gray: "#E2E8F0",
  black: "#111",
};

// Base styles for common layout properties
const BaseStyle = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    flexDirection: "row",
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 16,
  },
});

const styles = {
  standard: StyleSheet.create({
    wrapper: {
      ...BaseStyle.wrapper,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
      
      borderWidth: 2,
      borderColor: COLORS.black,
    },
    title: {
      ...BaseStyle.title,
      color: COLORS.white,
    },
    dot: {
      ...BaseStyle.dot,
      backgroundColor: COLORS.white,
    },
  }),
  secondary: StyleSheet.create({
    wrapper: {
      ...BaseStyle.wrapper,
      backgroundColor: COLORS.gray,
      
      borderWidth: 1,
      borderColor: COLORS.black,
    },
    title: {
      ...BaseStyle.title,
      color: COLORS.black,
    },
    dot: {
      ...BaseStyle.dot,
      backgroundColor: COLORS.purple,
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