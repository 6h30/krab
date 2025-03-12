// import { StyleSheet } from "react-native";

// const BaseStyle = StyleSheet.create({
//   wrapper: {
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//     flexDirection: "row",
//     gap: 8,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "700",
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 16,
//   },
// });

// const standard = StyleSheet.create({
//   wrapper: {
//     ...BaseStyle.wrapper,
//     // backgroundColor: "#ECE8FF",
//     shadowColor: "#000",
//       shadowOffset: { width: 0, height: 4 },
//       shadowOpacity: 0.2,
//       shadowRadius: 4,
//       elevation: 5,
//   },
  
//   title: {
//     ...BaseStyle.title,
//     color: "#FFFFFF",
//   },
//   dot: {
//     ...BaseStyle.dot,
//     backgroundColor: "#ffffff",
//   },
// });

// const secondary = StyleSheet.create({
//   wrapper: {
//     ...BaseStyle.wrapper,
//     backgroundColor: "#ECE8FF",
//   },
//   title: {
//     ...BaseStyle.title,
//     color: "#7E49FF",
//   },
//   dot: {
//     ...BaseStyle.dot,
//     backgroundColor: "#7E49FF",
//   },
// });

// const light = StyleSheet.create({
//   wrapper: {
//     ...BaseStyle.wrapper,
//     borderWidth: 1,
//     borderColor: "#E2E8F0",
//     backgroundColor: "#FFFFFF",
//   },
//   title: {
//     ...BaseStyle.title,
//     color: "#020617",
//   },
//   dot: {
//     ...BaseStyle.dot,
//     backgroundColor: "#020617",
//   },
// });

// const offlight = StyleSheet.create({
//   wrapper: {
//     ...BaseStyle.wrapper,
//   },
//   title: {
//     ...BaseStyle.title,
//     color: "#7E49FF",
//     fontSize: 14,
//     textDecorationLine: "underline",
//   },
//   dot: {
//     ...BaseStyle.dot,
//     backgroundColor: "#7E49FF",
//   },
// });

// const styles = {
//   standard,
//   secondary,
//   light,
//   offlight,
// };

// const sizes = {
//   standard: 16,
//   secondary: 12,
//   light: 8,
//   offlight: 4,
// };

// const radiusList = {
//   standard: 12,
//   full: 9999,
//   none: 0,
// };

// export { styles, sizes, radiusList };


import { StyleSheet } from "react-native";

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

const standard = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    backgroundColor: '#f5f7fa', 
    borderRadius: 16, // More pronounced rounding
    // Claymorphism shadows
    shadowColor: '#d1d5db',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    // Subtle border for depth
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    ...BaseStyle.title,
    color: '#2d3748', // Darker, muted text
  },
  dot: {
    ...BaseStyle.dot,
    backgroundColor: '#ffffff',
    // Add clay effect to dot
    shadowColor: '#d1d5db',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
});

const secondary = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    backgroundColor: '#eceff5', // Slightly muted purple-toned
    borderRadius: 16,
    shadowColor: '#d1d5db',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.7)',
  },
  title: {
    ...BaseStyle.title,
    color: '#7E49FF', // Keep original purple
  },
  dot: {
    ...BaseStyle.dot,
    backgroundColor: '#7E49FF',
    shadowColor: '#d1d5db',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
});

const light = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#d1d5db',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.9)',
  },
  title: {
    ...BaseStyle.title,
    color: '#020617',
  },
  dot: {
    ...BaseStyle.dot,
    backgroundColor: '#020617',
    shadowColor: '#d1d5db',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 1,
  },
});

const offlight = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    backgroundColor: '#f5f7fa', // Add subtle background
    borderRadius: 12,
    shadowColor: '#d1d5db',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  title: {
    ...BaseStyle.title,
    color: '#7E49FF',
    fontSize: 14,
    textDecorationLine: "underline",
  },
  dot: {
    ...BaseStyle.dot,
    backgroundColor: '#7E49FF',
    shadowColor: '#d1d5db',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
});

const styles = {
  standard,
  secondary,
  light,
  offlight,
};

const sizes = {
  standard: 16,
  secondary: 12,
  light: 8,
  offlight: 4,
};

const radiusList = {
  standard: 16, // Increased for claymorphism
  full: 9999,
  none: 0,
};

export { styles, sizes, radiusList };