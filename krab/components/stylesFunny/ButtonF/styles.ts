import { StyleSheet } from "react-native";

const COLORS = {
  purple: "#7E49FF",
  white: "#FFFFFF",
  lightPurple: "#ECE8FF",
  slate: "#020617",
  green: "#8fce00",
  gray: "#E2E8F0",
  black: "#333",
};

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

const getDynamicStyles = (color = COLORS.white, backgroundColor = COLORS.gray, dotColor = COLORS.purple) =>
  StyleSheet.create({
    wrapper: {
      ...BaseStyle.wrapper,
      backgroundColor: backgroundColor,
      borderWidth: 1,
      borderColor: COLORS.black,
    },
    title: {
      ...BaseStyle.title,
      color: color,
    },
    dot: {
      ...BaseStyle.dot,
      backgroundColor: dotColor,
    },
  });

const styles = {
  standard: StyleSheet.create({
    wrapper: {
      ...BaseStyle.wrapper,
      backgroundColor: "#FFFFFF", // Thêm dòng này
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
      
      borderWidth: 1.5,
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

  st_mini: StyleSheet.create({
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
  secondary: 14,
  light: 12,
  offlight: 10,
  mini: 8,
  none: 0,
};

const radiusList = {
  standard: 12,
  secondary: 14,
  full: 9999,
  mini: 8,
  none: 0,
};

export { styles, sizes, radiusList, getDynamicStyles };