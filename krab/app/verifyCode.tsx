import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { useRouter } from "expo-router"; // Assuming you're using Expo Router
import ButtonF from "@/components/stylesFunny/ButtonF";
import { colors } from "@/theme/colors";
import { commonStyles, screenStyles } from "@/theme/styles";
import { spacing } from "@/theme/spacing";

const VerifyCodeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  const [codeActive, setCodeActive] = useState(true);
  const [timer, setTimer] = useState(60);
  const [code, setCode] = useState<string[]>(Array(4).fill(""));

  // Create refs for each TextInput
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (codeActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCodeActive(false);
    }
    return () => clearInterval(interval);
  }, [codeActive, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleInputChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move focus to the next input if text is entered and not the last input
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.header__title}>Verify Your Number</Text>
        <Text style={styles.header__subtitle}>
          Enter the 4-digit code sent to you
        </Text>
        <Text style={styles.header__phoneNumber}>0868680111</Text>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        {/* Code Input Section */}
        <View style={styles.codeContainer}>
          {code.map((value, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)} // Assign ref
              style={[
                styles.codeBox,
                index === 0 && value === "" && styles["codeBox--focused"], // Ví dụ trạng thái focus
              ]}
              maxLength={1}
              keyboardType="numeric"
              autoFocus={index === 0}
              value={value}
              onChangeText={(text) => handleInputChange(text, index)}
            />
          ))}
        </View>

        {/* Resend Action */}
        <TouchableOpacity
          disabled={timer > 0}
          onPress={() => {
            setTimer(20);
            setCodeActive(true);
          }}
        >
          <Text
            style={[
              styles.resendText,
              timer > 0 && styles["resendText--disabled"], 
            ]}
          >
            I haven't received a code ({formatTime(timer)})
          </Text>
        </TouchableOpacity>

        {/* Next Button */}
        <ButtonF
          bgColor="#66E1FF"
          theme="secondary"
          onPress={() => router.push("/bookingFlow/move/moveScreen")}
          title="Next"
          containerStyles={{ width: "100%" }}
        ></ButtonF>
      </View>

      {/* Modal code remains unchanged */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal__overlay}>
          <View style={styles.modal__content}>
            <TouchableOpacity
              style={styles.modal__resendButton}
              onPress={() => {
                setModalVisible(false);
                setTimer(60); // Reset bộ đếm khi gửi lại mã
                setCodeActive(true);
              }}
            >
              <Text style={styles.modal__resendButtonText}>
                Resend code by SMS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modal__cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modal__cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// Sử dụng các biến màu trong StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  header: {
    ...screenStyles.header,
  },
  header__title: {
    ...screenStyles.header__title,
  },
  header__subtitle: {
    ...screenStyles.header__subtitle,
  },
  header__phoneNumber: {
    ...screenStyles.header__phoneNumber,
  },
  content: {
    ...screenStyles.content,
  },
  codeContainer: {
    ...commonStyles.flexRow,
    justifyContent: "space-between",
    width: "80%",
    marginBottom: spacing.xxl,
  },
  codeBox: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: colors.borderDark,
    borderRadius: spacing.sm,
    textAlign: "center",
    fontSize: 24,
    color: colors.textPrimary,
    backgroundColor: colors.backgroundSecondary,
  },
  "codeBox--focused": {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  resendText: {
    color: colors.primary,
    fontSize: 14,
    marginBottom: spacing.xxxl,
  },
  "resendText--disabled": {
    color: colors.textDisabled,
  },
  // Block: Modal
  modal__overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.backgroundOverlay,
  },
  modal__content: {
    backgroundColor: colors.backgroundPrimary,
    borderTopLeftRadius: spacing.xl, // 24
    borderTopRightRadius: spacing.xl, // 24
    padding: spacing[20], // 20
    width: '100%',
  },
  modal__resendButton: {
    backgroundColor: colors.backgroundSecondary,
    paddingVertical: spacing[14], // 14
    borderRadius: spacing.sm, // 8
    ...commonStyles.center,
    marginBottom: spacing.md, // 12 (thay vì 10 để đồng bộ với thang spacing)
  },
  modal__resendButtonText: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: '500',
  },
  modal__cancelButton: {
    paddingVertical: spacing[14], // 14
    borderRadius: spacing.sm, // 8
    ...commonStyles.center,
  },
  modal__cancelButtonText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '500',
  },
});

export default VerifyCodeScreen;
