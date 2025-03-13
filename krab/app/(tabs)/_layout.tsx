import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import HomeSvg from '@/assets/svgs/homesl24.svg';
import PersonSvg from '@/assets/svgs/personCircle.svg';
import LoginSvg from '@/assets/svgs/login.svg';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          tabBarIcon: () => <HomeSvg width={28} height={28} />,
        }}
      />
       <Tabs.Screen
        name="login"
        options={{
          title: 'Krab',
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          tabBarIcon: () => <LoginSvg width={28} height={28} />,
        }}
      />
        <Tabs.Screen
        name="account"
        options={{
          title: 'Acc',
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          tabBarIcon: () => <PersonSvg width={28} height={28} />,
        }}
      />
      
      <Tabs.Screen
        name="onBoarding"
        options={{
          title: 'Welcome screen',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />

    </Tabs>
  );
}
