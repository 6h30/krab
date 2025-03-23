// src/components/TabMenu.tsx
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { tabScreenStyles } from "@/theme/styles";

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
  tabs: { 
    ...tabScreenStyles.tabs,
  },
  tab: { 
    paddingVertical: 5, 
    paddingHorizontal: 15 
  },
  tabActive: {
   ...tabScreenStyles.tab__active,
  },
  tabText: { ...tabScreenStyles.tab__text },
  tabTextActive: { fontSize: 16, color: "#111", fontWeight: "bold" },
  content: {
    flex: 1,
  },
});

export default TabMenu;
