import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Định nghĩa kiểu dữ liệu cho props
interface CardProps {
  title: string;
  description: string;
  creator: string;
  onPress?: () => void; // Optional prop cho sự kiện nhấn
}

const CardComponent: React.FC<CardProps> = ({ title, description, creator, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.creatorCircle}>
          <Text style={styles.creatorInitial}>{creator.charAt(0)}</Text>
        </View>
        <Text style={styles.creatorName}>{creator}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    // Claymorphism: Soft, rounded, 3D-like
    backgroundColor: 'rgba(245, 245, 245, 0.85)', // Light gray with transparency (Glassmorphism)
    borderRadius: 20, // Softer, more rounded edges (Claymorphism)
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)', // Subtle reflective border (Glassmorphism)
    elevation: 8, // Stronger shadow for depth (Claymorphism - Android)
    shadowColor: '#000', // Multi-layered shadow (Claymorphism - iOS)
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    margin: 10,
    overflow: 'hidden',
    // Glassmorphism: Simulate blur (without library, approximated with transparency)
    padding: 5, // Inner padding to enhance "puffy" clay feel
  },
  header: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(224, 224, 224, 0.6)', // Soft, transparent divider
  },
  title: {
    fontSize: 18,
    fontWeight: '600', // Slightly softer than bold for clay vibe
    color: '#333333',
  },
  content: {
    padding: 12,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'rgba(250, 250, 250, 0.9)', // Slightly more opaque footer
    borderRadius: 16, // Rounded inner footer (Claymorphism)
  },
  creatorCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    // Claymorphism touch: subtle shadow
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  creatorInitial: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  creatorName: {
    fontSize: 14,
    color: '#333333',
  },
});

export default CardComponent;