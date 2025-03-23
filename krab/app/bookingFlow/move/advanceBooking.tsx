import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AdvanceBooking } from '@/data/types';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { commonStyles } from '@/theme/styles';

const AdvanceBookingItem: React.FC<{ item: AdvanceBooking }> = ({ item }) => {
  return (
    <View style={styles.advanceBookingItem}>
      <TouchableOpacity style={styles.advanceBookingItem__container}>
        <Image
          source={item.image}
          style={styles.advanceBookingItem__image}
        />
        <View style={styles.advanceBookingItem__textContainer}>
          <Text style={styles.advanceBookingItem__title}>{item.title}</Text>
          {item.description && (
            <Text style={styles.advanceBookingItem__description}>
              {item.description}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Styles theo BEM
export const styles = StyleSheet.create({
  advanceBookingItem: {
    marginVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },

  advanceBookingItem__container: {
    ...commonStyles.flexRow,
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
    borderRadius: spacing.md,
    padding: spacing.md,
    borderWidth: 1,
  },

  advanceBookingItem__image: {
    width: 80,
    height: 80,
    borderRadius: spacing.sm,
    resizeMode: 'contain',
  },

  advanceBookingItem__textContainer: {
    flex: 1,
    marginLeft: spacing.md,
  },

  advanceBookingItem__title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },

  advanceBookingItem__description: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
});

export default AdvanceBookingItem;