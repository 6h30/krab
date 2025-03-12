import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from "react-native";
// import LinearGradient from "react-native-linear-gradient";

import { styles, sizes, radiusList } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

type Button2Props = {
  children?: React.ReactNode;
  title?: string;
  theme?: "standard" | "secondary" | "light" | "offlight";
  size?: "standard" | "secondary" | "light" | "offlight";
  radius?: "standard" | "full" | "none";
  leftIcon?: React.FC<{ color: string }>;
  rightIcon?: React.FC<{ color: string }>;
  containerStyles?: object;
  // gradientColors?: string[];
  gradientColors?: [string, string, ...string[]];
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  stopPropagation?: boolean;
  [key: string]: any;
};

const Button2: React.FC<Button2Props> = ({
  children,
  title,
  theme = "standard",
  size = "standard",
  radius = "standard",
  leftIcon: Icon = null,
  rightIcon: RightIcon = null,
  containerStyles = {},
  gradientColors = ["#79D562", "#3B933C"],
  disabled = false,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  stopPropagation = false,
  ...props
}) => {
  const style = styles[theme] || styles.standard;
  const padding = sizes[size] || sizes.standard;
  const borderRadius = radiusList[radius] || radiusList.standard;
  const colorList = {
    standard: "#FFFFFF",
    secondary: "#7E49FF",
    light: "#000000",
    offlight: "#7E49FF",
  };

  const iconColor = colorList[theme];

  const handleEvent = (
    event: GestureResponderEvent,
    callback?: (e: GestureResponderEvent) => void
  ) => {
    if (stopPropagation) {
      event.stopPropagation();
    }
    if (callback && !disabled) {
      callback(event);
    }
  };

  const ButtonContent = () => (
    <>
      {children ? (
        children
      ) : (
        <>
          {Icon && (
            <View style={{ marginRight: 8 }}>
              <Icon color={iconColor} />
            </View>
          )}
          {title && <Text style={style.title}>{title}</Text>}
          {RightIcon && (
            <View style={{ marginLeft: 8 }}>
              <RightIcon color={iconColor} />
            </View>
          )}
        </>
      )}
    </>
  );

  const buttonStyle = { ...style.wrapper, padding, borderRadius };

  // Kiểm tra LinearGradient có sẵn không
  if (!LinearGradient) {
    console.error(
      "LinearGradient is not available. Ensure react-native-linear-gradient is installed and linked correctly."
    );
    return (
      <TouchableOpacity
        style={{ ...containerStyles, ...buttonStyle, backgroundColor: "#3B933C" }}
        onPress={(e) => handleEvent(e, onPress)}
        disabled={disabled}
        {...props}
      >
        <ButtonContent />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={{ ...containerStyles, opacity: disabled ? 0.6 : 1 }}
      onPress={(e) => handleEvent(e, onPress)}
      onPressIn={(e) => handleEvent(e, onPressIn)}
      onPressOut={(e) => handleEvent(e, onPressOut)}
      onLongPress={(e) => handleEvent(e, onLongPress)}
      activeOpacity={0.7}
      disabled={disabled}
      {...props}
    >
      <View style={{ 
        ...buttonStyle, 
        // backgroundColor: "transparent" 
        }}>
      {theme === "standard" ? (
        <LinearGradient
          colors={disabled ? ["#cccccc", "#999999"] : gradientColors}
          locations={[0.13, 1]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ ...buttonStyle, shadowColor: "transparent" }} // Không cho bóng bị mất
        >
          <ButtonContent />
        </LinearGradient>
      ) : (
        <View style={buttonStyle}>
          <ButtonContent />
        </View>
      )}
    </View>
    </TouchableOpacity>
  );
};

export default Button2;