import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { Text, TextInput, View, TextStyle, ViewStyle } from "react-native";
import { themeStyles } from "./styles";

interface InputProps {
  lable?: string;
  name: string;
  value?: string;
  onChangeText: (value: { name: string; text: string }) => void;
  placeholder?: string;
  size?: "large" | "medium" | "small";
  error?: string;
  disable?: boolean;
  backgroundColor?: string;
  border?: boolean;
  leftIcon?: React.FC;
  rightIcon?: React.FC;
  isSearch?: boolean;
}

const Input: React.FC<InputProps> = ({
  lable,
  name,
  value = "",
  onChangeText,
  placeholder = "",
  size = "medium",
  error,
  disable = false,
  backgroundColor,
  border = true,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  isSearch,
}) => {
  const [fontSize, setFontSize] = useState(value ? 12 : 16);
  const [focus, setFocus] = useState(false);
  const [position, setPosition] = useState(
    value
      ? size === "large"
        ? 6
        : size === "small"
        ? 0
        : 4
      : size === "large"
      ? 16
      : size === "small"
      ? 8
      : 12
  );
  const [inputValue, setInputValue] = useState<{ [key: string]: string }>({ [name]: value });
  const themeStyle = themeStyles[size] || themeStyles.medium;

  const animatedHeaderTextSize = useAnimatedStyle(() => ({
    fontSize: withTiming(fontSize, { duration: 500 }),
    position: "absolute",
    top: withTiming(position, { duration: 500 }),
    left: LeftIcon ? 48 : 16,
    color: error ? "#FF2C20" : disable ? "#CBCBCB" : "#757575",
  }));

  const handleInput = (value: { name: string; text: string }) => {
    setInputValue({ ...inputValue, [value.name]: value.text });
    onChangeText(value);
    setFocus(value.text === "");
  };

  const onFocusAction = () => {
    setFocus(true);
    setPosition(size === "small" ? 0 : size === "large" ? 6 : 4);
    setFontSize(12);
  };

  const onBlurAction = () => {
    setFocus(false);
    if (inputValue[name] === "") {
      setFontSize(16);
      setPosition(size === "large" ? 16 : size === "small" ? 8 : 12);
    }
  };

  const WrapperBgColor = backgroundColor || (isSearch ? (focus ? "#E2E2E2" : "#F6F6F6") : "#fff");

  const MainWrapperStyle: ViewStyle = {
    ...themeStyle.wrapper,
    backgroundColor: WrapperBgColor,
    borderWidth: border ? 1 : 0,
    justifyContent: !lable ? "center" : undefined,
  };

  let InputWrapperStyle: ViewStyle = {
    ...themeStyle.textContainer,
    paddingHorizontal: 24,
  };

  let InputStyle: TextStyle = {
    fontSize: 16,
    width: "100%",
    position: "relative",
    left: LeftIcon && RightIcon ? 24 : LeftIcon ? 16 : RightIcon ? 0 : -8,
  };

  if (lable || placeholder) {
    const TopSizes: Record<string, number> = {
      large: lable ? 8 : 2,
      medium: lable ? 2 : 2,
      small: lable ? -1 : -1,
    };

    InputWrapperStyle = {
      ...InputWrapperStyle,
      top: TopSizes[size] ?? (LeftIcon || RightIcon ? 4 : 0),
    };

    const InputTopSize: Record<string, number> = {
      large: placeholder ? -2 : 4,
      medium: placeholder ? -2 : 4,
      small: placeholder ? 1 : 4,
    };

    InputStyle = {
      ...InputStyle,
      top: InputTopSize[size] ?? (LeftIcon || RightIcon ? 4 : 0),
    };
  }

  return (
    <View>
      <View style={MainWrapperStyle}>
        {lable && <Animated.Text style={[animatedHeaderTextSize]}>{lable}</Animated.Text>}
        <View style={InputWrapperStyle}>
          {LeftIcon && <LeftIcon />}
          <TextInput
            style={InputStyle}
            defaultValue={value}
            onChangeText={(text) => handleInput({ name, text })}
            placeholder={!lable ? placeholder : ""}
            placeholderTextColor={error ? "#FF2C20" : disable ? "#CBCBCB" : "#757575"}
            onFocus={onFocusAction}
            onBlur={onBlurAction}
            editable={!disable}
            selectTextOnFocus={!disable}
          />
          {RightIcon && <RightIcon />}
        </View>
      </View>
      {error && (
        <View style={themeStyle.errorText}>
          <Text style={{ color: "#FF2C20" }}>{`* ${error}`}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
