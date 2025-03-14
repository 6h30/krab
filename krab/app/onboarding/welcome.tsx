import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import Button2 from "@/components/Button/index";
import ButtonF from "@/components/stylesFunny/ButtonF";

const WelcomeScreen = () => {
  const router = useRouter();
  // const krabGoImage = require("@/assets/images/krab-go.png");
  const WelcomeImage = require("@/assets/images/welcomeKrab.jpg");
  // const Step1Image = require("@/assets/images/step1.png");
  // const Step2Image = require("@/assets/images/step2.png");
  // const Step3Image = require("@/assets/images/step3.png");

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.scrollSection}>
              <View style={styles.imageSection}>
        <Image style={styles.welcomeImage} source={WelcomeImage} />
      </View>

      <View style={styles.textSection}>
        <Text style={styles.title}>Welcome to Krab</Text>
        {/* Pagination Dots */}
      </View>
        </View>
    

      <View style={styles.buttonSection}>
        {/* <Button2
          size="secondary"
          onPress={() => router.push("/onboarding/introStep1")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Button2> */}

        <ButtonF
          title="Next"
          onPress={() => router.push("/onboarding/introStep1")}
        >
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

    backgroundColor: "#FFFFFF",
    height: "100%",
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
    width: 400,
    height: 320,
    resizeMode: "contain",
    // elevation: 4,
    // shadowColor: "#000",
    // shadowOffset: { width: 1, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
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
