import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Clipboard } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

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
    id: 'TRIP123',
    dateTime: '13 Mar 2025, 14:30',
    pickupAddress: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    dropoffAddress: '6391 Elgin St. Celina, Delaware 10299',
    driverName: 'John Doe',
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
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <FontAwesome name="arrow-left" size={20} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Share Your Trip</Text>
      </View>
      <View style={styles.tripCard}>
        <Text style={styles.cardTitle}>Trip Details</Text>
        <View style={styles.cardRow}>
          <FontAwesome name="calendar" size={18} color="#4A4A4A" />
          <Text style={styles.cardText}>{tripInfo.dateTime}</Text>
        </View>
        <View style={styles.cardRow}>
          <FontAwesome name="map-marker" size={18} color="#4A4A4A" />
          <Text style={styles.cardText}>{tripInfo.pickupAddress}</Text>
        </View>
        <View style={styles.cardRow}>
          <FontAwesome name="map-marker" size={18} color="#4A4A4A" />
          <Text style={styles.cardText}>{tripInfo.dropoffAddress}</Text>
        </View>
        <View style={styles.cardRow}>
          <FontAwesome name="user" size={18} color="#4A4A4A" />
          <Text style={styles.cardText}>{tripInfo.driverName}</Text>
        </View>
      </View>
      <View style={styles.shareContainer}>
        <Text style={styles.shareLinkLabel}>Share Link</Text>
        <View style={styles.linkContainer}>
          <Text style={styles.shareLink}>{shareLink}</Text>
          <TouchableOpacity style={styles.copyButton} onPress={handleCopyLink}>
            <FontAwesome name={copied ? 'check' : 'copy'} size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.shareButtons}>
          <TouchableOpacity style={styles.shareOptionButton} onPress={handleShareViaMessage}>
            <FontAwesome name="comment" size={24} color="#FFFFFF" />
            <Text style={styles.shareOptionText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareOptionButton} onPress={handleShareViaEmail}>
            <FontAwesome name="envelope" size={24} color="#FFFFFF" />
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
    backgroundColor: '#F0F4F8',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FBFD',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#A0A0A0',
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
    fontWeight: '600',
    color: '#4A4A4A',
    flex: 1,
    textAlign: 'center',
  },
  tripCard: {
    backgroundColor: '#F8FBFD',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A4A4A',
    marginBottom: 15,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
    flex: 1,
  },
  shareContainer: {
    backgroundColor: '#F8FBFD',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  shareLinkLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4A4A4A',
    marginBottom: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8EDF3',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  shareLink: {
    fontSize: 14,
    color: '#7A90C2',
    flex: 1,
  },
  copyButton: {
    backgroundColor: '#A0B5EB',
    borderRadius: 10,
    padding: 8,
    marginLeft: 10,
    shadowColor: '#8095CC',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  shareButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shareOptionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A0B5EB',
    borderRadius: 15,
    paddingVertical: 12,
    marginHorizontal: 5,
    shadowColor: '#8095CC',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  shareOptionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 8,
  },
});

export default ShareTripScreen;