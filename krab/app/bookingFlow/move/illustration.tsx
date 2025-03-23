import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { commonStyles } from '@/theme/styles';

const Illustration = () => {
  return (
    <View style={styles.illustration}>
      <Image
        source={require('@/assets/svgs/bookingFlowSvgs/moveS2.png')}
        style={styles.illustration__image}
      />
      <Text style={styles.illustration__subHeader}>
        Wherever you’re going, let’s get you there!
      </Text>
    </View>
  );
};

// Styles theo BEM
export const styles = StyleSheet.create({
  // Block: Illustration
  illustration: {
    ...commonStyles.center, // Tái sử dụng alignItems: 'center'
    paddingVertical: spacing.sm, // 8 (thay cho 14 để đồng bộ với thang spacing)
    backgroundColor: colors.backgroundPrimary, // #FFF
  },

  // Element: Image
  illustration__image: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },

  // Element: SubHeader
  illustration__subHeader: {
    fontSize: 16,
    color: colors.textPrimary, // Thay #333
    marginBottom: spacing.none, // 0
  },
});

export default Illustration;