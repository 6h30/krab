import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useRouter } from "expo-router";
import ArrowRight from "@/assets/svgs/bookingFlowSvgs/preBook/arrowRight.svg";
import { colors } from "@/theme/colors";
import { spacing, margin, padding } from "@/theme/spacing";
import {
  commonStyles,
  pickScreenStyles,
  tabScreenStyles,
} from "@/theme/styles";


// Định nghĩa kiểu cho tin nhắn
interface Message {
  id: string;
  text: string;
  isSent: boolean;
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hello! How can I assist you today?", isSent: false },
    { id: "2", text: "Hi, I need help with my ride.", isSent: true },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const router = useRouter();

  const handleSend = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage,
        isSent: true,
      };
      setMessages((prev) => [...prev, message]);
      setNewMessage("");
      // Giả lập tin nhắn trả lời từ phía đối phương (có thể thay bằng logic thực tế)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            text: "Sure, how can I help?",
            isSent: false,
          },
        ]);
      }, 1000);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageBubble,
        item.isSent ? styles.sentBubble : styles.receivedBubble,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "position"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Chat with Driver</Text>
        </View>

        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="handled" // Cho phép nhấn vào input khi keyboard mở
          contentContainerStyle={styles.messageList}
          showsVerticalScrollIndicator={false}
          style={{
            borderWidth: 1,
            borderColor: "#bcbbc1",
            borderRadius: 14,
            backgroundColor: "#fff",
            flex: 1,
          }}
        />
        <View style={{ flex: 0 }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={newMessage}
              onChangeText={setNewMessage}
              placeholder="Type your message..."
              placeholderTextColor="#666"
              multiline
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <ArrowRight width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 14,
    shadowColor: colors.borderDark,
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
    color: colors.textPrimary,
    flex: 1,
    textAlign: "center",
  },
  messageList: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  messageBubble: {
    maxWidth: "70%",
    borderRadius: 12,
    padding: 10,
    marginVertical: 5,
    // shadowColor: colors.borderDark,
    // shadowOffset: { width: 2, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 5,
    // elevation: 3,
    borderWidth: 1,
    borderColor: colors.borderPrimary,
  },
  sentBubble: {
    backgroundColor: colors.secondary,
    alignSelf: "flex-end",
  },
  receivedBubble: {
    backgroundColor: colors.backgroundSecondary,
    alignSelf: "flex-start",
    // shadowColor: colors.backgroundOverlay,
    // shadowOffset: { width: -2, height: -2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
  },
  messageText: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 14,
    padding: 10,
    marginVertical: 14,
    borderWidth: 1,
    borderColor: colors.borderPrimary,
  },
  input: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 10,
    padding: 14,
    fontSize: 14,
    color: colors.textPrimary,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
});

export default ChatScreen;
