import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

// Định nghĩa kiểu cho tin nhắn
interface Message {
  id: string;
  text: string;
  isSent: boolean; // true: tin nhắn gửi đi, false: tin nhắn nhận được
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hello! How can I assist you today?', isSent: false },
    { id: '2', text: 'Hi, I need help with my ride.', isSent: true },
  ]);
  const [newMessage, setNewMessage] = useState('');
  
  const router = useRouter();

  const handleSend = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage,
        isSent: true,
      };
      setMessages(prev => [...prev, message]);
      setNewMessage('');
      // Giả lập tin nhắn trả lời từ phía đối phương (có thể thay bằng logic thực tế)
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now().toString(), text: 'Sure, how can I help?', isSent: false }]);
      }, 1000);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[styles.messageBubble, item.isSent ? styles.sentBubble : styles.receivedBubble]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 20}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <FontAwesome name="arrow-left" size={20} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Chat with Support</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messageList}
        showsVerticalScrollIndicator={false}
      />
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
          <FontAwesome name="paper-plane" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FBFD',
    borderRadius: 20,
    padding: 20,
    margin: 15,
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
  messageList: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  messageBubble: {
    maxWidth: '70%',
    borderRadius: 15,
    padding: 15,
    marginVertical: 5,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  sentBubble: {
    backgroundColor: '#A0B5EB',
    alignSelf: 'flex-end',
  },
  receivedBubble: {
    backgroundColor: '#E8EDF3',
    alignSelf: 'flex-start',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  messageText: {
    fontSize: 14,
    color: '#4A4A4A',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FBFD',
    borderRadius: 15,
    padding: 10,
    margin: 15,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  input: {
    flex: 1,
    backgroundColor: '#E8EDF3',
    borderRadius: 12,
    padding: 10,
    fontSize: 14,
    color: '#4A4A4A',
    marginRight: 10,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#A0B5EB',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#8095CC',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
});

export default ChatScreen;