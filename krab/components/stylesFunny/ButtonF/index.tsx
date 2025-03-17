import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from "react-native";

import { styles, sizes, radiusList, getDynamicStyles } from "./styles";

type ButtonFProps = {
  children?: React.ReactNode;
  title?: string;
  theme?: "standard" | "secondary" | "st_mini";
  size?: "standard" | "secondary" | "light" | "offlight" | "mini" | "none";
  radius?: "standard" | "full" | "mini" | "none";
  leftIcon?: React.FC<{ color: string }>;
  rightIcon?: React.FC<{ color: string }>;
  containerStyles?: object;
  disabled?: boolean;
  textColor?: string;
  bgColor?: string;
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
  textColor,
  bgColor,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  stopPropagation = false,
  ...props
}) => {
  const defaultStyle = styles[theme] || styles.standard;
  const padding = sizes[size] || sizes.standard;
  const borderRadius = radiusList[radius] || radiusList.standard;
  
  const defaultTextColor = defaultStyle?.title?.color || "#000000";
  const defaultBgColor = defaultStyle?.wrapper?.backgroundColor || "#FFFFFF";

  const dynamicStyle = getDynamicStyles(
    textColor || defaultTextColor,
    disabled ? "#999999" : bgColor || defaultBgColor
  );

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
              <Icon color={textColor || defaultTextColor} />
            </View>
          )}
          {title && <Text style={dynamicStyle.title}>{title}</Text>}
          {RightIcon && (
            <View style={{ marginLeft: 8 }}>
              <RightIcon color={textColor || defaultTextColor} />
            </View>
          )}
        </>
      )}
    </>
  );

  const buttonStyle = {
    ...dynamicStyle.wrapper,
    padding,
    borderRadius,
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
