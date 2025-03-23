import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
TouchableWithoutFeedback, Keyboard } from "react-native";
import { useRouter } from "expo-router";
import StarIconYellow from "@/assets/svgs/bookingFlowSvgs/preBook/startIconYellow.svg";
import ButtonF from "@/components/stylesFunny/ButtonF";

// Định nghĩa kiểu cho thông tin tài xế (giả lập)
interface DriverInfo {
  id: string;
  name: string;
  tripDate: string;
}

const RateDriverScreen: React.FC = () => {
  const router = useRouter();
  const [rating, setRating] = useState(0); // Điểm đánh giá từ 0-5
  const [comment, setComment] = useState(""); // Nhận xét của người dùng
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Giả lập thông tin tài xế
  const driverInfo: DriverInfo = {
    id: "DRIVER123",
    name: "Dc Viet",
    tripDate: "13 Mar 2025, 14:30",
  };

  const handleSubmit = () => {
    if (rating === 0) {
      Alert.alert("Error", "Please select a rating before submitting.");
      return;
    }
    // Logic gửi đánh giá (có thể gọi API tại đây)
    Alert.alert(
      "Success",
      `Rating submitted: ${rating} stars\nComment: ${comment}`
    );
    // Quay lại màn hình trước hoặc chuyển hướng
    router.back();
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <StarIconYellow
            width={30}
            height={30}
            fill={i <= rating ? "#FFD700" : "#E0E0E0"} // Vàng nếu được chọn, xám nếu chưa
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  // Danh sách các thẻ đánh giá nhanh
  const quickTags = [
    "Thân thiện",
    "Di chuyển nhanh",
    "An toàn",
    "Đúng giờ",
    "Xe sạch sẽ",
  ];

  const handleTagPress = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag)); // Bỏ chọn
    } else {
      setSelectedTags([...selectedTags, tag]); // Thêm vào
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Rate Your Driver</Text>
          <Text style={styles.subtitle}>
            Trip on {driverInfo.tripDate} with {driverInfo.name}
          </Text>
        </View>

        {/* Đánh giá sao */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingLabel}>How was your experience?</Text>
          <View style={styles.starsContainer}>{renderStars()}</View>
        </View>

        {/* Thẻ đánh giá nhanh */}
        <View style={styles.tagsContainer}>
          <Text style={styles.tagsLabel}>Quick Feedback</Text>
          <View style={styles.tagsWrapper}>
            {quickTags.map((tag) => (
              <TouchableOpacity
                key={tag}
                style={[
                  styles.tagButton,
                  selectedTags.includes(tag) && styles.tagButtonSelected,
                ]}
                onPress={() => handleTagPress(tag)}
              >
                <Text
                  style={[
                    styles.tagText,
                    selectedTags.includes(tag) && styles.tagTextSelected,
                  ]}
                >
                  {tag}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Ô nhập nhận xét */}
        <View style={styles.commentContainer}>
          <Text style={styles.commentLabel}>Additional Comments (Optional)</Text>
          <TextInput
            style={styles.commentInput}
            multiline
            numberOfLines={4}
            placeholder="Share your feedback..."
            placeholderTextColor={colors.textGray}
            value={comment}
            onChangeText={setComment}
          />
        </View>

        {/* Nút gửi */}
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <ButtonF
          bgColor="#66E1FF"
          textColor="#333"
          title="Submit"
          onPress={() => router.push("/bookingFlow/move/moveScreen")}
        />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const colors = {
  white: "#fff",
  primaryBackground: "#FFF", // Màu nền chính cho card và header
  lightGray: "#E8EDF3", // Màu nền cho link container
  borderGray: "#bcbbc1", // Màu viền
  textDark: "#111", // Màu chữ chính
  textGray: "#666", // Màu chữ phụ
  textHeader: "#4A4A4A", // Màu chữ header
  textTitle: "#1A1A1A", // Màu tiêu đề chính
  linkBlue: "#7A90C2", // Màu link
  buttonBlue: "#A0B5EB", // Màu nút copy
  shareButton: "#58d8e5", // Màu nút share
  tagSelected: "#C2F3FF",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    padding: 20,
  },

  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textTitle,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textGray,
    marginTop: 4,
  },
  ratingContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  ratingLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textHeader,
    marginBottom: 15,
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  commentContainer: {
    marginBottom: 20,
  },
  commentLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textHeader,
    marginBottom: 10,
  },
  commentInput: {
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    padding: 15,
    fontSize: 14,
    color: colors.textDark,
    borderWidth: 1,
    borderColor: colors.borderGray,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: colors.buttonBlue,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.white,
  },

  tagsContainer: {
    marginBottom: 20,
  },
  tagsLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textHeader,
    marginBottom: 10,
  },
  tagsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  tagButton: {
    backgroundColor: colors.lightGray,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.borderGray,
  },
  tagButtonSelected: {
    backgroundColor: colors.tagSelected,
    borderColor: colors.shareButton,
  },
  tagText: {
    fontSize: 14,
    color: colors.textGray,
  },
  tagTextSelected: {
    color: colors.shareButton,
    fontWeight: "600",
  },
});

export default RateDriverScreen;
