import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { RideOption } from "@/data/types";

const RideOptionItem: React.FC<{ item: RideOption }> = ({ item }) => {
  const IconComponent = item.icon;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={[styles.screenContainer]}>
        {/* <Image source={item.icon} style={styles.screenIcon} /> */}
        {IconComponent && typeof IconComponent === "function" ? (
          <IconComponent width={50} height={35} />
        ) : (
          <Image source={item.icon} style={styles.screenIcon} />
        )}

        <View style={styles.screenTextContainer}>
          <Text style={styles.screenTitle}>{item.title}</Text>
          {item.description && (
            <Text style={styles.screenDescription}>{item.description}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RideOptionItem;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: "50%",
  },
  screenContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    // aspectRatio: 2.2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    // borderColor: "#ddd",
  },
  screenIcon: {
    width: 28,
    height: 28,
    // resizeMode: "contain",
    marginHorizontal: 10,
  },
  screenTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  screenTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  screenDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
