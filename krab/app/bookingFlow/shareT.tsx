import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
} from "react-native";

import { useRouter } from "expo-router";
import MessageChat from "@/assets/svgs/bookingFlowSvgs/preBook/messageChat.svg";
import MailIcon from "@/assets/svgs/bookingFlowSvgs/preBook/mailIcon.svg";
import CopyPaste from "@/assets/svgs/bookingFlowSvgs/preBook/copyPaste.svg";
import PersonCheck from "@/assets/svgs/bookingFlowSvgs/preBook/personCheck.svg";
import PickPoint from "@/assets/svgs/bookingFlowSvgs/pickPoint.svg";
import HomePoint from "@/assets/svgs/bookingFlowSvgs/homePoint.svg";
import CalenderTrip from "@/assets/svgs/bookingFlowSvgs/calendar.svg";
import { colors } from "@/theme/colors";
import { spacing, margin, padding } from "@/theme/spacing";
import { commonStyles, pickScreenStyles } from "@/theme/styles";

// Định nghĩa kiểu cho thông tin chuyến đi (giả lập)
interface TripInfo {
  id: string;
  dateTime: string;
  pickupAddress: string;
  dropoffAddress: string;
  driverName: string;
}

const ShareTripScreen: React.FC = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  // Giả lập thông tin chuyến đi (có thể truyền qua props)
  const tripInfo: TripInfo = {
    id: "TRIP123",
    dateTime: "13 Mar 2025, 14:30",
    pickupAddress: "Vo Thi Nho street, District 7, HCM city",
    dropoffAddress: "Vo Thi Nho street, District 1, HCM city",
    driverName: "Dc Viet",
  };

  // Giả lập liên kết chia sẻ
  const shareLink = `https://krab.app/trip/${tripInfo.id}`;

  const handleCopyLink = () => {
    Clipboard.setString(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset thông báo sau 2 giây
  };

  const handleShareViaMessage = () => {
    // Logic gửi qua tin nhắn (có thể dùng react-native-share hoặc API)
    alert(`Shared via message: ${shareLink}`);
  };

  const handleShareViaEmail = () => {
    // Logic gửi qua email (có thể dùng react-native-communications)
    alert(`Shared via email: ${shareLink}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Share Your Trip</Text>
      </View>

      <View style={styles.tripCard}>
        <Text style={styles.cardTitle}>Trip Details</Text>
        <View style={styles.cardRow}>
          <CalenderTrip width={18} height={18} />
          <Text style={styles.cardText}>{tripInfo.dateTime}</Text>
        </View>
        <View style={styles.cardRow}>
          <HomePoint width={18} height={18} />
          <Text style={styles.cardText}>{tripInfo.pickupAddress}</Text>
        </View>
        <View style={styles.cardRow}>
          <PickPoint width={18} height={18} />
          <Text style={styles.cardText}>{tripInfo.dropoffAddress}</Text>
        </View>
        <View style={styles.cardRow}>
          <PersonCheck width={18} height={18} />
          <Text style={styles.cardText}>{tripInfo.driverName}</Text>
        </View>
      </View>

      <View style={styles.shareContainer}>
        <Text style={styles.shareLinkLabel}>Share Link</Text>
        <View style={styles.linkContainer}>
          <Text style={styles.shareLink}>{shareLink}</Text>
          <TouchableOpacity style={styles.copyButton} onPress={handleCopyLink}>
            <CopyPaste width={24} height={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.shareButtons}>
          <TouchableOpacity
            style={styles.shareOptionButton}
            onPress={handleShareViaMessage}
          >
            <MessageChat width={24} height={24} />
            <Text style={styles.shareOptionText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.shareOptionButton}
            onPress={handleShareViaEmail}
          >
            <MailIcon width={24} height={24} />
            <Text style={styles.shareOptionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.backgroundPrimary,
    paddingBottom: 14,
  },
  backButton: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
  },
  tripCard: {
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",

    marginBottom: 15,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,

    marginLeft: 10,
    flex: 1,
  },
  shareContainer: {
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.borderPrimary,
  },
  shareLinkLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },
  shareLink: {
    fontSize: 14,
    flex: 1,
  },
  copyButton: {
    // backgroundColor: colors.buttonBlue,
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    borderRadius: 10,
    padding: 8,
    marginLeft: 10,
  },
  shareButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  shareOptionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: colors.shareButton,
    borderRadius: 10,
    paddingVertical: 12,
    borderWidth: 1,
  },
  shareOptionText: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default ShareTripScreen;
