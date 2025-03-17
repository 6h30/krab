import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Modal,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import Button2 from "@/components/Button/index";
import InputField2 from "@/components/josh_component/input-feild";
import { SvgProps } from "react-native-svg";

import GoogleLogo from "@/assets/svgs/googleLogo.svg";
import AppleLogo from "@/assets/svgs/appleLogo.svg";
import FacebookLogo from "@/assets/svgs/facebookLogo.svg";
import ButtonF from "@/components/stylesFunny/ButtonF";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+84");
  const [showCountryCodeModal, setShowCountryCodeModal] = useState(false);

  const countryCodes = [
    { label: "+84 (Vietnam)", value: "+84" },
    { label: "+1 (USA)", value: "+1" },
    { label: "+44 (UK)", value: "+44" },
    { label: "+33 (France)", value: "+33" },
  ];
  const socialIcons = {
    Google: GoogleLogo,
    Apple: AppleLogo,
    Facebook: FacebookLogo,
  };

  const router = useRouter();

  const handleContinue = () => {
    // if (!phoneNumber) {
    //   Alert.alert('Error', 'Please enter your phone number');
    //   return;
    // }
    router.push("/verifyCode");
  };

  const handleSocialLogin = (type: string) => {
    console.log(`Continue with ${type}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in with your phone number</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity
            style={styles.countryCodeButton}
            onPress={() => setShowCountryCodeModal(true)}
          >
            <Text style={styles.countryCodeText}>{selectedCountryCode}</Text>
          </TouchableOpacity>
          <InputField2
            label="Phone Number"
            inputValue={phoneNumber}
            onChangeText={setPhoneNumber}
            // keyboardType="phone-pad"
            // containerStyles={styles.inputField}
          />
        </View>

        {/* <Button2
          // containerStyles={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </Button2> */}

        <ButtonF
          bgColor="#66E1FF"
          theme="secondary"
          onPress={handleContinue}
          title="Continue"
        ></ButtonF>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialButtonsContainer}>
          {Object.entries(socialIcons).map(([type, Icon]) => (
            <TouchableOpacity
              key={type}
              style={styles.socialButton}
              onPress={() => handleSocialLogin(type)}
            >
              <Icon width={28} height={28} />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.consentText}>
          By proceeding, you consent to get calls, SMS or Zalo messages from
          Krab and its affiliates to the number provided.
        </Text>
      </View>

      <Modal
        visible={showCountryCodeModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowCountryCodeModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <FlatList
              data={countryCodes}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryCodeItem}
                  onPress={() => {
                    setSelectedCountryCode(item.value);
                    setShowCountryCodeModal(false);
                  }}
                >
                  <Text style={styles.countryCodeItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
    marginBottom: 40,
  },
  formContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  phoneInputContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  countryCodeButton: {
    padding: 14,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginRight: 10,
  },
  countryCodeText: {
    fontSize: 16,
    color: "#333",
  },
  inputField: {
    flex: 1,
  },
  continueButton: {
    // width: '100%',
    // backgroundColor: '#007AFF',
    // borderRadius: 8,
    // paddingVertical: 14,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#eee",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#666",
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  consentText: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 18,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    maxHeight: "50%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
  },
  countryCodeItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  countryCodeItemText: {
    fontSize: 16,
    color: "#333",
  },
});

export default LoginScreen;
