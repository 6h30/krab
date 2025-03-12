import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { themeStyles, themeSizes } from "./styles";

interface IconButtonProps extends TouchableOpacityProps {
  theme?: keyof typeof themeStyles;
  icon?: React.ComponentType;
  size?: keyof typeof themeSizes;
}

const IconButton: React.FC<IconButtonProps> = ({
  theme = "standard",
  icon: Icon,
  size = "large",
  style,
  ...props
}) => {
  const themeStyle = themeStyles[theme] || themeStyles.standard;
  const themeSize = themeSizes[size] || themeSizes.large;

  return (
    <TouchableOpacity
      style={[themeStyle.wrapper, themeSize.wrapper, style]}
      {...props}
    >
      {Icon && <Icon />}
    </TouchableOpacity>
  );
};

export default IconButton;
