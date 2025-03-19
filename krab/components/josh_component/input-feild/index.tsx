import React from "react";
import {
  TextInput as RTextInput,
  Text,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { styles, sizes, themeStyles, radiusList } from "./styles";

interface InputField2Props {
  inputValue?: string;
  label?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: string;
  theme?: keyof typeof themeStyles;
  size?: keyof typeof sizes;
  radius?: keyof typeof radiusList;
  rightIcon?: React.ComponentType<any> | null;
  leftIcon?: React.ComponentType<any> | null;
  floatingInput?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  error?: string | boolean;
}

const InputField2: React.FC<InputField2Props> = ({
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
  const themeStyle = themeStyles[theme] || themeStyles.standard;
  const padding = sizes[size] || sizes.standard;
  const borderRadius = radiusList[radius] || radiusList.standard;

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
        {LeftIcon && <LeftIcon />}
        <RTextInput
          style={{
            ...themeStyle.input,
            marginLeft: LeftIcon ? 10 : 0,
          }}
          placeholder={label}
          value={inputValue}
          onChangeText={(text) => onChangeText(text)}
        />
        {RightIcon && <RightIcon />}
      </View>

      {error && <Text style={{ color: "red", marginTop: 5 }}>* {error}</Text>}
    </View>
  );
};

export default InputField2;
