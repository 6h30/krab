import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';

const TermsScreen = () => {
  const [isChecked, setIsChecked] = useState(false);

   const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accept Uber's Terms & Review Privacy Notice</Text>
      <Text style={styles.description}>
        By selecting ‘I Agree’ below, I have reviewed and agree to the{" "}
        <Text style={styles.link}>Terms of Use</Text> and acknowledge the{" "}
        <Text style={styles.link}>Privacy Notice</Text>. I am at least 18 years of age.
      </Text>

      {/* Checkbox đơn giản */}
      <TouchableOpacity style={styles.checkboxContainer} onPress={() => setIsChecked(!isChecked)}>
        <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
          {isChecked && <Text style={styles.checkmark}>✔</Text>}
        </View>
        <Text style={styles.checkboxLabel}>I agree</Text>
      </TouchableOpacity>

      {/* Nút điều hướng */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, isChecked ? styles.buttonActive : styles.buttonDisabled]}
          disabled={!isChecked}
          onPress={() => router.push("/verifyCode")}
        >
          <Text style={styles.buttonText}>Next →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "black",
    borderColor: "black",
  },
  checkmark: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  checkboxLabel: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonActive: {
    backgroundColor: "black",
  },
  buttonDisabled: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default TermsScreen;
