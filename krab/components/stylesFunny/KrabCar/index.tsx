import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Sử dụng MaterialIcons
import Car4 from "@/assets/svgs/bookingFlowSvgs/preBook/car4.svg";
import InfoCircle from "@/assets/svgs/bookingFlowSvgs/preBook/infoCircle.svg";

// Định nghĩa kiểu cho props
interface KrabCarProps {
  carType: string; // Tên loại xe (e.g., "KrabCar")
  seats: string; // Số lượng ghế (e.g., "4-seater car")
  estimatedTime: string; // Thời gian ước tính (e.g., "Est. 3 mins away")
  price: string; // Giá gốc (e.g., "68.000đ")
  promoPercentage?: number; // Phần trăm giảm giá (e.g., 20 cho 20%)
  image: any;
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

const KrabCarCard: React.FC<KrabCarProps> = ({
  carType,
  seats,
  estimatedTime,
  price,
  promoPercentage,
  image,
}) => {
  // Tính giá sau khi giảm nếu có promoPercentage
  const promoPrice = promoPercentage
    ? calculatePromoPrice(price, promoPercentage)
    : null;

  return (
    <View style={styles.container}>
      {/* Phần bên trái: Icon xe và thông tin */}
      <View style={styles.leftSection}>
        {/* <Car4 width={40} height={40} style={styles.carIcon} /> */}
        {/* <Image source={{ uri: image }} style={styles.carImage} /> */} 
        <Image source={ image } style={styles.carImage} />

        <View style={styles.infoContainer}>
          <View style={styles.carTypeContainer}>
            <Text style={styles.carType}>{carType}</Text>
            <InfoCircle width={16} height={16} style={styles.infoIcon} />
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
    paddingVertical: 6,

    // Claymorphism outer style (shadows and border)
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)",

    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    marginVertical: 5,
    marginHorizontal: 12,
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
    width: 60, 
    height: 60,
    marginRight: 14,
    resizeMode: 'contain',
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
    textDecorationLine: "line-through", // Gạch ngang giá gốc
  },
  promoPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF0000", // Màu đỏ để nổi bật giá khuyến mãi
  },
});

export default KrabCarCard;
