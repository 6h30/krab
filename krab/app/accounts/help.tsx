import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Định nghĩa kiểu cho mỗi mục Q&A
interface QAItemData {
  id: string;
  question: string;
  answer: string;
}

// Component cho mỗi mục Q&A
interface QAItemProps {
  question: string;
  answer: string;
}

const QAItem: React.FC<QAItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.qaContainer}>
      <TouchableOpacity
        style={styles.questionContainer}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.questionText}>{question}</Text>
        <FontAwesome
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={18}
          color="#7A90C2"
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const HelpScreen: React.FC = () => {
  const qaItems: QAItemData[] = [
    {
      id: '1',
      question: 'How do I add a payment method?',
      answer: 'Go to Wallet > Payment methods > Add payment method and follow the instructions.',
    },
    {
      id: '2',
      question: 'What is Krab Cash?',
      answer: 'Krab Cash is a digital wallet feature that allows you to store and use funds for transactions.',
    },
    {
      id: '3',
      question: 'How can I contact support?',
      answer: 'You can reach us via email at support@krab.com or call our hotline at 123-456-7890.',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Help & Support</Text>
      </View>
      {qaItems.map(item => (
        <QAItem
          key={item.id}
          question={item.question}
          answer={item.answer}
        />
      ))}
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
    backgroundColor: '#F8FBFD',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4A4A4A',
  },
  qaContainer: {
    backgroundColor: '#F8FBFD',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4A4A4A',
    flex: 1,
  },
  answerContainer: {
    backgroundColor: '#E8EDF3',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    // Hiệu ứng lõm nhẹ
    shadowColor: '#FFFFFF',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  answerText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default HelpScreen;