// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { useRouter } from 'expo-router';
// import { BlurView } from 'expo-blur';
// import Button2 from '@/components/Button/index';

// const IntroStep2Screen = () => {
//   const router = useRouter();
//   const krabMotoImage = require('@/assets/images/krab-moto.png');
//   const totalSteps = 3;
//   const currentStep = 2;

//   return (
//     <View style={styles.container}>
//       <BlurView
//         style={styles.blurBackground}
//         tint="light"
//         intensity={60}
//       >
//         {/* Content Container */}
//         <View style={styles.contentContainer}>
//           <Text style={styles.title}>Your satisfaction is our number one priority</Text>
//           <Image
//             style={styles.welcomeImage}
//             source={krabMotoImage}
//           />
//           <Button2
//             onPress={() => router.push('/onboarding/introStep3')}
//           >
//             <Text style={styles.buttonText}>Next</Text>
//           </Button2>

//             {/* Pagination Dots */}
//                     <View style={styles.paginationContainer}>
//                       {Array(totalSteps)
//                         .fill(0)
//                         .map((_, index) => (
//                           <View
//                             key={index}
//                             style={[
//                               styles.paginationDot,
//                               index === currentStep - 1 && styles.activeDot,
//                             ]}
//                           />
//                         ))}
//                     </View>

//         </View>
//       </BlurView>
//     </View>
//   );
// };

// export default IntroStep2Screen;


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#F0F2F5', // Light gray base for depth
//     },
//     blurBackground: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       paddingHorizontal: 20,
//       overflow: 'hidden',
//     },
//     contentContainer: {
//       // Claymorphism: Card-like container
//       backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly opaque white
//       borderRadius: 20,
//       padding: 30,
//       alignItems: 'center',
//       elevation: 8, // Clay shadow (Android)
//       shadowColor: '#000', // Clay shadow (iOS)
//       shadowOffset: { width: 2, height: 4 },
//       shadowOpacity: 0.15,
//       shadowRadius: 6,
//       borderWidth: 1,
//       borderColor: 'rgba(255, 255, 255, 0.3)', // Glassy edge
//     },
//     title: {
//       fontSize: 28, // Larger for impact
//       fontWeight: '700', // Modern bold
//       color: '#333333', // Softer black
//       letterSpacing: 0.5, // Subtle refinement
//       marginBottom: 25,
//       textAlign: 'center',
//     },
//     welcomeImage: {
//       width: 280, // Balanced size
//       height: 320,
//       resizeMode: 'contain',
//       marginBottom: 35,
//       // Claymorphism: Image shadow
//       elevation: 4,
//       shadowColor: '#000',
//       shadowOffset: { width: 1, height: 2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 4,
//     },
//     buttonText: {
//       color: '#FFFFFF',
//       fontSize: 16,
//       fontWeight: '600', // Semi-bold for clarity
//       textAlign: 'center',
//     },

//     paginationContainer: {
//         flexDirection: 'row',
//         marginTop: 20, // Space above dots
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       paginationDot: {
//         width: 10,
//         height: 10,
//         borderRadius: 5, // Perfectly round
//         backgroundColor: 'rgba(150, 150, 150, 0.5)', // Inactive: semi-transparent gray
//         marginHorizontal: 5,
//         // Claymorphism: Subtle shadow
//         elevation: 2,
//         shadowColor: '#000',
//         shadowOffset: { width: 1, height: 1 },
//         shadowOpacity: 0.1,
//         shadowRadius: 2,
//       },
//       activeDot: {
//         width: 12, // Slightly larger when active
//         height: 12,
//         backgroundColor: '#4A90E2', // Active: matches button color
//         elevation: 4, // Stronger shadow
//         shadowOpacity: 0.2,
//       },
//   });


import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import Button2 from "@/components/Button/index";

const WelcomeScreen = () => {
  const router = useRouter();
  const krabGoImage = require("@/assets/images/krab-moto.png");
  const totalSteps = 3;
  const currentStep = 2;

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section: Image (50%) */}
      <View style={styles.imageSection}>
        <Image style={styles.welcomeImage} source={krabGoImage} />
      </View>

      {/* Middle Section: Text (30%) */}
      <View style={styles.textSection}>
        <Text style={styles.title}>
        Your satisfaction is our number one priority
        </Text>
        {/* Pagination Dots */}
        <View style={styles.pagination}>
          {Array(totalSteps)
            .fill(0)
            .map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentStep - 1 && styles.activeDot,
                ]}
              />
            ))}
        </View>
      </View>

      {/* Bottom Section: Button (20%) */}
      <View style={styles.buttonSection}>
        <Button2
          size="secondary"
          onPress={() => router.push("/onboarding/introStep3")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Button2>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5",
  },
  imageSection: {
    flex: 5, // 50% of the screen
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textSection: {
    flex: 3, // 30% of the screen
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonSection: {
    flex: 2, // 20% of the screen
    justifyContent: "flex-start", // Align button to the top of this section
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20, // Add padding to ensure button isn't too close to the bottom edge
  },
  welcomeImage: {
    width: 280,
    height: 320,
    resizeMode: "contain",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333333",
    letterSpacing: 0.5,
    textAlign: "center",
    marginBottom: 10, // Space between title and pagination dots
  },
  pagination: {
    flexDirection: "row",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D3D3D3",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FFA500",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default WelcomeScreen;
