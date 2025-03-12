import React from "react";
import { Image, Text, View, StyleProp, ViewStyle } from "react-native";
import { themeStyles } from "./styles";

interface AvatarProps {
  status: "online" | "offline" | "away";
  size?: "small" | "medium" | "large";
  userImage?: React.FC; // Component hình ảnh
  icon?: React.FC; // Component icon
  number?: number;
  style?: StyleProp<ViewStyle>; // Cho phép thêm styles tùy chỉnh
}

const StatusColors: Record<string, string> = {
  online: "#00DD00",
  offline: "#E2E2E2",
  away: "#ffb404",
};

const Avatar2: React.FC<AvatarProps> = ({
  status,
  size = "large",
  userImage: UserImage,
  icon: Icon,
  number,
  style,
}) => {
  const themeStyle = themeStyles[size] || themeStyles.large;

  return (
    <View style={[themeStyle.wrapper, style]}>
      {UserImage && <UserImage />}
      {status && (
        <View
          style={{
            ...themeStyle.icon,
            backgroundColor: StatusColors[status] || "#E2E2E2",
          }}
        >
          {number ? (
            <Text style={themeStyle.status}>{number}</Text>
          ) : Icon ? (
            <Icon />
          ) : null}
        </View>
      )}
    </View>
  );
};

export default Avatar2;
