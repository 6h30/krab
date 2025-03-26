import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// Định nghĩa kiểu cho props
interface KrabCarProps {
  carType: string; // Tên loại xe (e.g., "KrabCar")
  seats: string; // Số lượng ghế (e.g., "4-seater car")
  estimatedTime: string; // Thời gian ước tính (e.g., "Est. 3 mins away")
  price: string; // Giá gốc (e.g., "68.000đ")
  promoPercentage?: number; // Phần trăm giảm giá (e.g., 20 cho 20%)
  image: any;
  isSelected?: boolean;
}

// Hàm tính giá sau khi giảm
const calculatePromoPrice = (
  price: string,
  promoPercentage: number
): string => {
  // Chuyển giá gốc từ chuỗi (e.g., "68.000đ") thành số
  const priceNumber = parseFloat(price.replace(/[^0-9]/g, "")); // Loại bỏ ký tự không phải số
  // Tính giá giảm
  const discount = (priceNumber * promoPercentage) / 100;
  const finalPrice = priceNumber - discount;
  // Định dạng lại giá thành chuỗi (e.g., "54.400đ")
  return `${finalPrice.toLocaleString("vi-VN")}đ`;
};

const KrabCarCard: React.FC<
  KrabCarProps & { isSelected?: boolean; InfoIcon?: JSX.Element }
> = ({
  carType,
  seats,
  estimatedTime,
  price,
  promoPercentage,
  image,
  InfoIcon,
  isSelected,
}) => {
  // Tính giá sau khi giảm nếu có promoPercentage
  const promoPrice = promoPercentage
    ? calculatePromoPrice(price, promoPercentage)
    : null;

  return (
    <View style={[styles.container, isSelected && styles.selectedCard]}>
      {/* Phần bên trái: Icon xe và thông tin */}
      <View style={styles.leftSection}>
        <Image source={image} style={styles.carImage} />

        <View style={styles.infoContainer}>
          <View style={styles.carTypeContainer}>
            <Text style={styles.carType}>{carType}</Text>
            {/* <InfoCircle width={16} height={16} style={styles.infoIcon} /> */}
            {InfoIcon && InfoIcon}
            {/* {InfoIcon ?? <InfoCircle width={16} height={16} style={styles.infoIcon} />} */}
          </View>
          <Text style={styles.estimatedTime}>{estimatedTime}</Text>
          <Text style={styles.seats}>{seats}</Text>
        </View>
      </View>

      {/* Phần bên phải: Giá tiền */}
      <View style={styles.priceContainer}>
        {promoPrice ? (
          <>
            <Text style={styles.originalPrice}>{price}</Text>
            <Text style={styles.promoPrice}>{promoPrice}</Text>
          </>
        ) : (
          <Text style={styles.price}>{price}</Text>
        )}
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    // paddingVertical: 4,

    // Claymorphism outer style (shadows and border)
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)",

    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    // marginVertical: 5,
    marginHorizontal: 0,
    overflow: "hidden",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  carIcon: {
    marginRight: 16,
  },
  carImage: {
    width: 80,
    height: 80,
    marginRight: 14,
    resizeMode: "contain",
    // borderWidth: 1,
  },
  infoContainer: {
    justifyContent: "center",
  },
  carTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  carType: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginRight: 4,
  },
  infoIcon: {
    marginLeft: 4,
  },
  seats: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  estimatedTime: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  originalPrice: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "line-through",
  },
  promoPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F34051",
  },

  selectedCard: {
    backgroundColor: "rgba(223, 247, 255, 0.86)",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    borderRadius: 14,
  },
});

export default KrabCarCard;
