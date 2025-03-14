import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from "react-native";

import { styles, sizes, radiusList } from "./styles";

type ButtonFProps = {
  children?: React.ReactNode;
  title?: string;
  theme?: "standard" | "secondary" ;
  size?: "standard" | "secondary" | "light" | "offlight";
  radius?: "standard" | "full" | "none";
  leftIcon?: React.FC<{ color: string }>;
  rightIcon?: React.FC<{ color: string }>;
  containerStyles?: object;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  stopPropagation?: boolean;
  [key: string]: any;
};

const ButtonF: React.FC<ButtonFProps> = ({
  children,
  title,
  theme = "standard",
  size = "standard",
  radius = "standard",
  leftIcon: Icon = null,
  rightIcon: RightIcon = null,
  containerStyles = {},
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

  const backgroundColors = {
    standard: "#30cbed",
    secondary: "#FFFFFF",
    light: "#FFFFFF",
    offlight: "#FFFFFF",
  };

  const iconColor = colorList[theme];
  const buttonBackground = disabled ? "#999999" : backgroundColors[theme];

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

  const buttonStyle = {
    ...style.wrapper,
    padding,
    borderRadius,
    backgroundColor: buttonBackground,
  };

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
      <View style={buttonStyle}>
        <ButtonContent />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonF;
