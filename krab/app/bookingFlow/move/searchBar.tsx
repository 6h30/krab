import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PickPoint from "@/assets/svgs/bookingFlowSvgs/pickPoint.svg";
import ButtonF from "@/components/stylesFunny/ButtonF";
import { useRouter } from "expo-router";

interface SearchBarProps {
  destination: string;
  setDestination: (text: string) => void;
  isSticky?: boolean; // Thêm prop để kiểm tra sticky
}

const SearchBar: React.FC<SearchBarProps> = ({
  destination,
  setDestination,
  isSticky = false,
}) => {
  const router = useRouter();

  return (
    <View style={[styles.searchContainer, isSticky && styles.stickyContainer]}>
      {isSticky && (
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      )}

      {/* View chứa PickPoint, TextInput và ButtonF */}
      <View style={styles.inputContainer}>
        <PickPoint style={styles.locationIcon} width={28} height={28} />

        {/* <TextInput
          style={styles.searchInput}
          placeholder="Where to?"
          value={destination}
          onChangeText={setDestination}
        /> */}
        <TouchableOpacity style={styles.searchInput}>
          <Text
            style={{ color: "#888", fontSize: 16 }}
            onPress={() => router.push("/bookingFlow/pickLocation/pickScreen")}
          >
            Where to?
          </Text>
        </TouchableOpacity>
        <ButtonF
          theme="st_mini"
          size="mini"
          radius="mini"
          title="Now"
          bgColor="#66E1FF"
          onPress={() => router.push("/bookingFlow/pickLocation/pickScreen")}
          containerStyles={{ marginVertical: 0 }}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#FFF",
    // marginHorizontal: 16,
    borderRadius: 8,
    padding: 8,

    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // borderWidth: 1,
  },
  stickyContainer: {
    paddingLeft: 40,
  },
  backButton: {
    position: "absolute",
    left: 0,
    zIndex: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
  locationIcon: {
    fontSize: 20,
    marginRight: 10,
    marginTop: 2,
  },
});
