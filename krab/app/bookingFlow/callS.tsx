import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import Call from "@/assets/svgs/bookingFlowSvgs/phoneCall.svg";
import DeleteCircle from "@/assets/svgs/bookingFlowSvgs/preBook/deleteCircle.svg";
import CameraOff from "@/assets/svgs/bookingFlowSvgs/preBook/cameraOff.svg";
import HeadPhone from "@/assets/svgs/bookingFlowSvgs/preBook/headPhone.svg";
import AvatarRec from "@/assets/svgs/bookingFlowSvgs/preBook/avatarRec.svg";

const CallScreen: React.FC = () => {
  const [callActive, setCallActive] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);

  const router = useRouter();

  // Giả lập đồng hồ đếm thời gian cuộc gọi
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (callActive) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStartCall = () => {
    setCallActive(true);
    alert("Calling driver...");
    // Logic thực tế để bắt đầu cuộc gọi
  };

  const handleEndCall = () => {
    setCallActive(false);
    setTimer(0);
    setIsSpeakerOn(false);
    setIsCameraOff(false);
    alert("Call ended");
    // Logic thực tế để kết thúc cuộc gọi
    router.back();
  };

  const handleToggleSpeaker = () => {
    setIsSpeakerOn((prev) => !prev);
    alert(`Speaker ${isSpeakerOn ? "off" : "on"}`);
    // Logic thực tế để bật/tắt loa ngoài
  };

  const handleToggleCamera = () => {
    setIsCameraOff((prev) => !prev);
    alert(`Camera ${isCameraOff ? "on" : "off"}`);
    // Logic thực tế để bật/tắt camera
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Call Driver</Text>
      </View>

      <View style={styles.callContainer}>
        <View style={styles.driverInfo}>
          <AvatarRec width={34} height={34} />
          <Text style={styles.driverName}>Dc Viet</Text>
          <Text style={styles.driverPhone}>+84 234 567 890</Text>
          {callActive && <Text style={styles.timer}>{formatTime(timer)}</Text>}
        </View>
        {callActive ? (
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[
                styles.actionButton,
                isSpeakerOn ? styles.activeButton : styles.inactiveButton,
              ]}
              onPress={handleToggleSpeaker}
            >
              <HeadPhone width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.actionButton,
                isCameraOff ? styles.activeButton : styles.inactiveButton,
              ]}
              onPress={handleToggleCamera}
            >
              <CameraOff width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.endButton} onPress={handleEndCall}>
              <DeleteCircle width={34} height={34} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.startButton}
            onPress={handleStartCall}
          >
            <Call width={34} height={34} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 14,
    shadowColor: "#A0A0A0",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  backButton: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#4A4A4A",
    flex: 1,
    textAlign: "center",
  },
  callContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#A0A0A0",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#bcbbc1",
  },
  driverInfo: {
    alignItems: "center",
  },
  driverName: {
    fontSize: 22,
    fontWeight: "600",
    color: "#4A4A4A",
    marginTop: 15,
  },
  driverPhone: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  timer: {
    fontSize: 18,
    fontWeight: "500",
    color: "#666",
    marginTop: 10,
  },
  startButton: {
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",

    borderWidth: 1,
    shadowColor: "#8095CC",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  actionButton: {
    borderRadius: 40,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  inactiveButton: {
    shadowColor: "#8095CC",
    borderWidth: 1,
    borderColor: "#bcbbc1",
  },
  activeButton: {
    backgroundColor: "#f1f1f1",
    shadowColor: "#5A70A2",
    borderWidth: 1,
  },
  endButton: {
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});

export default CallScreen;
