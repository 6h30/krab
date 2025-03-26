import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type OfferItemsProps = {
  icon?: JSX.Element;
  image?: string | number;
  title: string;
  subtitle?: string;
  onPress: () => void;
  isFirst?: boolean; // Thêm prop để xác định item đầu tiên
};

const OfferItems = ({ icon, image, title, subtitle, onPress, isFirst = false }: OfferItemsProps) => {
  const renderIconOrImage = () => {
    if (icon) {
      return icon;
    }
    if (image) {
      return (
        <Image
          source={typeof image === 'string' ? { uri: image } : image}
          style={styles.image}
        />
      );
    }
    return <View style={styles.placeholder} />;
  };

  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      {renderIconOrImage()}
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionTitle}>{title}</Text>
        {subtitle && <Text style={styles.optionSubtitle}>{subtitle}</Text>}
      </View>
      {isFirst && <Icon name="chevron-right" size={24} color="#000" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500' as const,
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  placeholder: {
    width: 24,
    height: 24,
  },
});

export default OfferItems;