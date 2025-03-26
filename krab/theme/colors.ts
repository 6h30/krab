import { Appearance, useColorScheme } from 'react-native';

// Định nghĩa các màu cơ bản
const baseColors = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'rgba(0, 0, 0, 0)',
};

// Định nghĩa màu theo vai trò
const palette = {
  // Màu thương hiệu (Brand Colors)
  primary: '#007AFF', // Màu chính (ví dụ: nút, liên kết)
  secondary: '#66E1FF', // Màu phụ (ví dụ: highlight)
  accent: '#FF2D55', // Màu nhấn (ví dụ: điểm nhấn đặc biệt)
  acctive: '#8be8ff', // Màu active (ví dụ: nút active)

  // Màu chữ (Text Colors)
  textPrimary: '#1A1A1A', // Chữ chính (đậm)
  textSecondary: '#666666', // Chữ phụ (nhạt hơn)
  textDisabled: '#B3B3B3', // Chữ khi bị vô hiệu hóa

  // Màu nền (Background Colors)
  backgroundPrimary: '#FFFFFF', // Nền chính
  backgroundSecondary: '#F5F5F5', // Nền phụ (nhẹ)
  backgroundOverlay: 'rgba(0, 0, 0, 0.5)', // Nền overlay (modal)

  // Màu viền (Border Colors)
  borderPrimary: '#E0E0E0', // Viền mặc định
  borderDark: '#111111', // Viền đậm
  borderGray: "#bcbbc1", // Màu viền xám

  // Màu trạng thái (Status Colors)
  success: '#34C759', // Thành công
  error: '#FF3B30', // Lỗi
  warning: '#FF9500', // Cảnh báo
  info: '#5856D6', // Thông tin
};

const colors2 = {
  white: "#fff",
  backgroundLight: "#F8FBFD", // Màu nền cho input container
  backgroundGray: "#E8EDF3", // Màu nền cho received bubble và input
  borderGray: "#bcbbc1", // Màu viền
  shadowGray: "#A0A0A0", // Màu bóng đổ
  shadowWhite: "#FFFFFF", // Màu bóng đổ cho received bubble
  textPrimary: "#4A4A4A", // Màu chữ chính
  textDark: "#1A1A1A", // Màu tiêu đề
  textGray: "#666", // Màu chữ phụ
  primaryBlue: "#66E1FF", // Màu chính cho sent bubble và button
};

// Theme cho chế độ sáng (Light Mode)
const lightColors = {
  ...baseColors,
  ...palette,
  // Có thể ghi đè nếu cần
};

// Theme cho chế độ tối (Dark Mode)
const darkColors = {
  ...baseColors,
  // Ghi đè các màu cho Dark Mode
  primary: '#0A84FF',
  secondary: '#66E1FF',
  accent: '#FF375F',
  textPrimary: '#FFFFFF',
  textSecondary: '#A1A1A1',
  textDisabled: '#666666',
  backgroundPrimary: '#1C1C1E',
  backgroundSecondary: '#2C2C2E',
  backgroundOverlay: 'rgba(255, 255, 255, 0.1)',
  borderPrimary: '#3A3A3C',
  borderDark: '#FFFFFF',
  success: '#30D158',
  error: '#FF453A',
  warning: '#FF9F0A',
  info: '#5E5CE6',
};



// Hàm chọn theme dựa trên hệ thống
const getColors = () => {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'dark' ? darkColors : lightColors;
};

// Xuất colors để sử dụng
export const colors = getColors();

// export const useThemeColors = () => {
//   const colorScheme = useColorScheme();
//   return colorScheme === "dark" ? darkColors : lightColors;
// };

// Nếu cần export cả light/dark riêng
export { lightColors, darkColors };