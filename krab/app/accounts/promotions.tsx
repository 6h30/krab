import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Định nghĩa kiểu cho mỗi mục khuyến mãi
interface PromotionData {
  id: string;
  title: string;
  description: string;
  code: string;
  onApply: () => void;
}

// Component cho mỗi mục khuyến mãi
interface PromotionItemProps {
  title: string;
  description: string;
  code: string;
  onApply: () => void;
}

const PromotionItem: React.FC<PromotionItemProps> = ({ title, description, code, onApply }) => (
  <View style={styles.promoCard}>
    <View style={styles.promoHeader}>
      <Text style={styles.promoTitle}>{title}</Text>
      <FontAwesome name="tag" size={20} color="#7A90C2" />
    </View>
    <Text style={styles.promoDescription}>{description}</Text>
    <View style={styles.promoCodeContainer}>
      <Text style={styles.promoCode}>{code}</Text>
    </View>
    <TouchableOpacity style={styles.applyButton} onPress={onApply}>
      <Text style={styles.applyButtonText}>Apply Now</Text>
    </TouchableOpacity>
  </View>
);

const PromotionsScreen: React.FC = () => {
  const promotions: PromotionData[] = [
    {
      id: '1',
      title: '20% Off First Ride',
      description: 'Get 20% off your first ride with Krab. Valid until March 31, 2025.',
      code: 'FIRST20',
      onApply: () => alert('Applied FIRST20'),
    },
    {
      id: '2',
      title: 'Free Ride Friday',
      description: 'Ride for free every Friday this month. Limited to one ride per user.',
      code: 'FREERIDE',
      onApply: () => alert('Applied FREERIDE'),
    },
    {
      id: '3',
      title: 'Refer a Friend',
      description: 'Invite a friend and get $5 credit when they complete their first ride.',
      code: 'REFER5',
      onApply: () => alert('Applied REFER5'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Promotions</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {promotions.map(item => (
          <PromotionItem
            key={item.id}
            title={item.title}
            description={item.description}
            code={item.code}
            onApply={item.onApply}
          />
        ))}
      </ScrollView>
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
  scrollContent: {
    paddingBottom: 20,
  },
  promoCard: {
    backgroundColor: '#F8FBFD',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  promoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A4A4A',
    flex: 1,
  },
  promoDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  promoCodeContainer: {
    backgroundColor: '#E8EDF3',
    borderRadius: 12,
    padding: 10,
    alignSelf: 'flex-start',
    // Hiệu ứng lõm nhẹ
    shadowColor: '#FFFFFF',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 15,
  },
  promoCode: {
    fontSize: 16,
    fontWeight: '500',
    color: '#7A90C2',
  },
  applyButton: {
    backgroundColor: '#A0B5EB',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#8095CC',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default PromotionsScreen;