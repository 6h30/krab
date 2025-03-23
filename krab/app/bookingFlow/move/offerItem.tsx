// src/components/OfferItem/OfferItem.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { commonStyles } from '@/theme/styles';

interface Offer {
  id: string;
  title: string;
  discount: string;
  image: any;
}

const OfferItem: React.FC<{ item: Offer }> = ({ item }) => {
  return (
    <View style={styles.offerItem}>
      <Image source={item.image} style={styles.offerItem__image} />
      <Text style={styles.offerItem__title}>{item.title}</Text>
      <Text style={styles.offerItem__discount}>{item.discount}</Text>
    </View>
  );
};

// Styles theo BEM
export const styles = StyleSheet.create({
  offerItem: {
    paddingHorizontal: spacing.sm, 
    paddingVertical: spacing.sm,
    // marginRight: spacing.lg,
    ...commonStyles.center,
  },

  offerItem__image: {
    width: 100,
    height: 120,
    borderRadius: spacing.md,
    borderWidth: 1,
    // borderColor: colors.borderPrimary,
  },

  offerItem__title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginTop: spacing.xs,
  },

  offerItem__discount: {
    fontSize: 12,
    color: colors.error,
    paddingBottom: spacing.md, 
  },
});

export default OfferItem;