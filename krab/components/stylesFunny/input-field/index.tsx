import React from "react";
import {
  TextInput as RTextInput,
  Text,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { styles, sizes, radiusList } from "./styles";
import { Ionicons } from "@expo/vector-icons";

// Định nghĩa danh sách tên icon bạn muốn hỗ trợ
type IconName = "map" | "location" | "search" | "close" | "alert"; // Thêm các tên khác nếu cần

interface InputFieldFProps {
  inputValue?: string;
  label?: string;
  onChangeText?: (text: string) => void;
  theme?: keyof typeof styles;
  size?: keyof typeof sizes;
  radius?: keyof typeof radiusList;
  rightIcon?: React.ComponentType<any> | null | IconName;
  leftIcon?: React.ComponentType<any> | null | IconName;
  // rightIcon?: React.ComponentType<any> | null | Ionicons['name']; 
  // leftIcon?: React.ComponentType<any> | null | Ionicons['name'];
  floatingInput?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  error?: string | boolean;
}

const InputFieldF: React.FC<InputFieldFProps> = ({
  inputValue = "",
  label,
  onChangeText = () => {},
  theme = "standard",
  size = "standard",
  radius = "standard",
  rightIcon: RightIcon = null,
  leftIcon: LeftIcon = null,
  floatingInput = true,
  containerStyles,
  error = false,
  ...props
}) => {
  const themeStyle = styles[theme] || styles.standard;
  const padding = sizes[size] || sizes.standard;
  const borderRadius = radiusList[radius] || radiusList.standard;

  const renderIcon = (
    Icon: IconName | React.ComponentType<any> | null, // Icon: Ionicons['name'] | React.ComponentType<any> | null, 
    position: "left" | "right"
  
  ) => {
    if (!Icon) return null;
    if (typeof Icon === "string") {
      return (
        <View style={position === "left" ? themeStyle.leftIcon : themeStyle.rightIcon}>
          <Ionicons
            name={Icon}
            size={24}
            color={themeStyle[position === "left" ? "leftIcon" : "rightIcon"].tintColor}
          />
        </View>
      );
    }
    return (
      <View style={position === "left" ? themeStyle.leftIcon : themeStyle.rightIcon}>
        <Icon />
      </View>
    );
  };

  return (
    <View style={[{ width: "100%" }, containerStyles]}>
      <View
        style={{
          ...themeStyle.wrapper,
          flexDirection: "row",
          alignItems: "center",
          padding,
          borderRadius,
        }}
        {...props}
      >
        {renderIcon(LeftIcon, "left")}
        <RTextInput
          style={{
            ...themeStyle.input,
            marginLeft: LeftIcon ? 8 : 0,
            marginRight: RightIcon ? 8 : 0,
          }}
          placeholder={label}
          value={inputValue}
          onChangeText={(text) => onChangeText(text)}
        />
        {renderIcon(RightIcon, "right")}
      </View>

      {error && <Text style={{ color: "red", marginTop: 5 }}>* {error}</Text>}
    </View>
  );
};

export default InputFieldF;