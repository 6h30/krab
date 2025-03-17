// src/components/TabMenu.tsx
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabMenuProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={activeTab === tab.id ? styles.tabActive : styles.tab}
            onPress={() => onTabChange(tab.id)}
          >
            <Text
              style={
                activeTab === tab.id ? styles.tabTextActive : styles.tabText
              }
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.content}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabs: { flexDirection: "row", paddingHorizontal: 10, marginVertical: 10 },
  tab: { paddingVertical: 5, paddingHorizontal: 15 },
  tabActive: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 6,
    // backgroundColor: "#8be8ff",
    backgroundColor: "#66E1FF",
  },
  tabText: { fontSize: 16, color: "#666" },
  tabTextActive: { fontSize: 16, color: "#111", fontWeight: "bold" },
  content: {
    flex: 1,
  },
});

export default TabMenu;
