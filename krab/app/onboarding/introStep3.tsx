import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import Button2 from '@/components/Button/index';

const IntroStep2Screen = () => {
  const router = useRouter();
  const krabMotoImage = require('@/assets/images/krab-pro.png');
  const totalSteps = 3;
  const currentStep = 3;

  return (
    <View style={styles.container}>
      <BlurView
        style={styles.blurBackground}
        tint="light"
        intensity={60}
      >
        {/* Content Container */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Let's make your day great with Krab right now!</Text>
          <Image
            style={styles.welcomeImage}
            source={krabMotoImage}
          />
          <Button2
            onPress={() => router.push('/onboarding/introStep3')}
          >
            <Text style={styles.buttonText}>Next</Text>
          </Button2>

            {/* Pagination Dots */}
                    <View style={styles.paginationContainer}>
                      {Array(totalSteps)
                        .fill(0)
                        .map((_, index) => (
                          <View
                            key={index}
                            style={[
                              styles.paginationDot,
                              index === currentStep - 1 && styles.activeDot,
                            ]}
                          />
                        ))}
                    </View>

        </View>
      </BlurView>
    </View>
  );
};

export default IntroStep2Screen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F2F5', // Light gray base for depth
    },
    blurBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      overflow: 'hidden',
    },
    contentContainer: {
      // Claymorphism: Card-like container
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly opaque white
      borderRadius: 20,
      padding: 30,
      alignItems: 'center',
      elevation: 8, // Clay shadow (Android)
      shadowColor: '#000', // Clay shadow (iOS)
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.3)', // Glassy edge
    },
    title: {
      fontSize: 28, // Larger for impact
      fontWeight: '700', // Modern bold
      color: '#333333', // Softer black
      letterSpacing: 0.5, // Subtle refinement
      marginBottom: 25,
      textAlign: 'center',
    },
    welcomeImage: {
      width: 280, // Balanced size
      height: 320,
      resizeMode: 'contain',
      marginBottom: 35,
      // Claymorphism: Image shadow
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600', // Semi-bold for clarity
      textAlign: 'center',
    },

    paginationContainer: {
        flexDirection: 'row',
        marginTop: 20, // Space above dots
        justifyContent: 'center',
        alignItems: 'center',
      },
      paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5, // Perfectly round
        backgroundColor: 'rgba(150, 150, 150, 0.5)', // Inactive: semi-transparent gray
        marginHorizontal: 5,
        // Claymorphism: Subtle shadow
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      activeDot: {
        width: 12, // Slightly larger when active
        height: 12,
        backgroundColor: '#4A90E2', // Active: matches button color
        elevation: 4, // Stronger shadow
        shadowOpacity: 0.2,
      },
  });
