// src/theme/spacing.ts
export const spacing = {
    none: 0,
    xs: 4,   // Extra small
    sm: 8,   // Small
    md: 12,  // Medium
    lg: 16,  // Large
    xl: 24,  // Extra large
    xxl: 32, // Extra extra large
    xxxl: 40, // Extra extra extra large
    14: 14,
    20: 20,
  };
  
  // Helper functions (tuỳ chọn)
  export const padding = {
    horizontal: (value: keyof typeof spacing) => ({
      paddingHorizontal: spacing[value],
    }),
    vertical: (value: keyof typeof spacing) => ({
      paddingVertical: spacing[value],
    }),
    all: (value: keyof typeof spacing) => ({
      padding: spacing[value],
    }),
  };
  
  export const margin = {
    horizontal: (value: keyof typeof spacing) => ({
      marginHorizontal: spacing[value],
    }),
    vertical: (value: keyof typeof spacing) => ({
      marginVertical: spacing[value],
    }),
    all: (value: keyof typeof spacing) => ({
      margin: spacing[value],
    }),
  };

//   Sử dụng 
// import { spacing, padding, margin } from '@/theme/spacing';
// const styles = StyleSheet.create({
//   container: {
//     ...padding.all('md'), // padding: 12
//     ...margin.vertical('lg'), // marginVertical: 16
//   },
//   header: {
//     paddingTop: spacing.sm, // 8
//     paddingHorizontal: spacing.md, // 12
//   },
// });