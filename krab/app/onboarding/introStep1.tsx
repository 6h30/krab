import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useRouter } from "expo-router";
import Button2 from "@/components/Button/index";
import ButtonF from "@/components/stylesFunny/ButtonF";

interface Slide {
  image: any;
  title: string;
  nextRoute:
    | "/onboarding/introStep1"
    | "/onboarding/introStep2"
    | "/onboarding/introStep3"
    | "/onboarding/welcome";
}
const Step1Image = require("@/assets/images/onBoarding/step1.png");
const Step2Image = require("@/assets/images/onBoarding/step2.png");
const Step3Image = require("@/assets/images/onBoarding/step3.png");

const WelcomeScreen = () => {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const { width: screenWidth } = Dimensions.get("window");

  const slides: Slide[] = [
    {
      image: Step1Image,
      title: "We provide professional taxi services for you",
      nextRoute: "/onboarding/introStep2",
    },
    {
      image: Step2Image,
      title: "Safe and reliable rides anytime",
      nextRoute: "/onboarding/introStep3",
    },
    {
      image: Step3Image,
      title: "Book your ride in just a few taps!",
      nextRoute: "/onboarding/welcome",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffset / slideSize);
    if (newIndex !== currentStep) {
      setCurrentStep(newIndex);
    }
  };

  // const handlePress = useCallback(() => {
  //   router.push("/new-page");
  // }, [router]);

  const scrollToNext = useCallback(() => {
    if (currentStep < slides.length - 1) {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: (currentStep + 1) * screenWidth,
          animated: true,
        });
      }
    } else {
      router.push(slides[currentStep].nextRoute);
    }
  }, [router]);

  const getButtonColor = (step: number) => {
    if (step === 0) return "#54b1f7"; // Màu cho bước đầu tiên
    if (step === 1) return "#12d488"; // Màu cho bước giữa
    return "#9353d1"; // Màu cho bước cuối cùng
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Scrollable Section for Image and Text */}
      <View style={styles.scrollSection}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.scrollView}
        >
          {slides.map((slide, index) => (
            <View style={[styles.slide, { width: screenWidth }]} key={index}>
              {/* Top Section: Image (50%) */}
              <View style={styles.imageSection}>
                <Image style={styles.welcomeImage} source={slide.image} />
              </View>

              {/* Middle Section: Text (30%) */}
              <View style={styles.textSection}>
                <Text style={styles.title}>{slide.title}</Text>
                {/* Pagination Dots */}
                <View style={styles.pagination}>
                  {slides.map((_, idx) => (
                    <View
                      key={idx}
                      style={[
                        styles.dot,
                        idx === currentStep && styles.activeDot,
                      ]}
                    />
                  ))}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Fixed Bottom Section: Button (20%) */}
      <View style={styles.buttonSection}>
        {/* <Button2 size="secondary" onPress={scrollToNext}>
          <Text style={styles.buttonText}>
            {currentStep === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </Button2> */}

        {/* <ButtonF
          bgColor={currentStep === slides.length - 1 ? "#ff9900" : "#54b1f7"}
          title="N"
          onPress={scrollToNext}
        >
          <Text style={styles.buttonText}>
            {currentStep === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </ButtonF> */}
        <ButtonF bgColor={getButtonColor(currentStep)} onPress={scrollToNext}>
          <Text style={styles.buttonText}>
            {currentStep === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </ButtonF>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    flexDirection: "column",

    backgroundColor: "#F0F2F5",
  },
  scrollView: {
    height: "80%",
    display: "flex",
  },
  slide: {
    flex: 1,
  },
  imageSection: {
    display: "flex",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textSection: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  scrollSection: {
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
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
    marginBottom: 10,
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
