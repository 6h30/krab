
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
// import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const resetOnboarding = async () => {
    await AsyncStorage.removeItem('hasSeenOnboarding');
    router.replace('/onboardingS');
  };
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    //   headerImage={
    //     <Image
    //       source={require("@/assets/images/partial-react-logo.png")}
    //       style={styles.reactLogo}
    //     />
    //   }
    // >
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Giới thiệu</ThemedText>
    //     <ThemedText type="default">
    //     Đây là một ứng dụng học tập và thực hành, giúp bạn khám phá cách làm việc với API OpenStreetMap (OSM) và các API miễn phí khác. 
    // Ứng dụng mô phỏng tính năng đặt xe cơ bản, giúp bạn hiểu rõ hơn về cách tích hợp bản đồ, quản lý dữ liệu vị trí và giao tiếp với API. 
    // Hãy thử trải nghiệm và khám phá các công nghệ thú vị! 🚀
    //     </ThemedText>
    //   </ThemedView>

      
    // </ParallaxScrollView>

    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      {/* Header trong nội dung */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello, User</ThemedText>
        <ThemedText type="subtitle">Where are you going today?</ThemedText>
      </ThemedView>

      {/* Search Bar */}
      <TouchableOpacity style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#8E8E93" />
        <Text style={styles.searchText}>Enter your destination</Text>
      </TouchableOpacity>

      {/* Service Cards */}
      <View style={styles.scrollContainer}>
        {/* Main Service Card */}
        <TouchableOpacity style={[styles.card, styles.mainCard]}>
          <Ionicons name="car" size={40} color="#000" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Booking Ride</Text>
            <Text style={styles.cardSubtitle}>Quick and comfy rides</Text>
          </View>
        </TouchableOpacity>

        {/* Secondary Service Cards */}
        <View style={styles.secondaryCards}>
          <TouchableOpacity style={[styles.card, styles.secondaryCard]}>
            <Ionicons name="bicycle" size={30} color="#000" />
            <Text style={styles.secondaryCardTitle}>Bike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.secondaryCard]}>
            <Ionicons name="fast-food" size={30} color="#000" />
            <Text style={styles.secondaryCardTitle}>Food</Text>
          </TouchableOpacity>
        </View>

        {/* Promo Card */}
        <TouchableOpacity style={[styles.card, styles.promoCard]}>
          <View style={styles.promoContent}>
            <Text style={styles.promoTitle}>50% OFF</Text>
            <Text style={styles.promoSubtitle}>Your first ride with us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reviewButton} onPress={resetOnboarding}>
          <Text style={styles.reviewText}>Review Onboarding</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation (Optional) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#000" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="wallet" size={24} color="#8E8E93" />
          <Text style={styles.navText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#8E8E93" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>

  );
}

const styles = StyleSheet.create({
  // titleContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   gap: 8,
  // },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },

  titleContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginTop: -20,
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  searchText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#8E8E93',
  },
  scrollContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  mainCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
  },
  secondaryCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondaryCard: {
    width: (width - 60) / 2,
    alignItems: 'center',
    padding: 15,
  },
  secondaryCardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginTop: 10,
  },
  promoCard: {
    backgroundColor: '#000',
  },
  promoContent: {
    alignItems: 'center',
  },
  promoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  promoSubtitle: {
    fontSize: 14,
    color: '#FFF',
    opacity: 0.8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 5,
  },
  reviewButton: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  reviewText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});
