import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import HistoryPick from "@/assets/svgs/bookingFlowSvgs/preBook/historyPick.svg";
import CheckSquare from "@/assets/svgs/bookingFlowSvgs/preBook/checkSquare.svg";
import GalleryImg from "@/assets/svgs/bookingFlowSvgs/preBook/galleryImg.svg";
import CameraImg from "@/assets/svgs/bookingFlowSvgs/preBook/cameraImg.svg";
import Shapes from "@/assets/svgs/bookingFlowSvgs/preBook/shapes.svg";
import HoleFlag from "@/assets/svgs/bookingFlowSvgs/preBook/holeFlag.svg";

const PlaceScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 16 }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <View style={styles.searchBar}>
          <View style={styles.section1}>
            <TouchableOpacity>
              <Icon name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.section2_noborder}>
            <Text style={styles.address} numberOfLines={1} ellipsizeMode="tail">
              487/47/20A Huỳnh Tấn Phát St.,P.Tân Thuận Đông, Q.7, Hồ Chí Minh,
              700000, Vietnam
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <View style={styles.section1}>
            <TouchableOpacity>
              <HistoryPick width={24} height={24} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.section2_noborder}>
            <Text style={styles.address}>
              487/47/20A Huỳnh Tấn Phát St.,P.Tân Thuận Đông, Q.7, Hồ Chí Minh,
              700000, Vietnam
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <View style={styles.section1}>
            <TouchableOpacity>
              <Shapes width={24} height={24} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.section2_noborder}>
            <Text style={styles.address}>Residential</Text>
          </TouchableOpacity>
        </View>

        {/* Phần Camera và Gallery */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <CameraImg width={30} height={30} />
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <GalleryImg width={30} height={30} />
            <Text style={styles.buttonText}>Gallery</Text>
          </TouchableOpacity>
        </View>

        {/* Phần Edit this place */}
        <View style={styles.footer}>
          <Text style={styles.sectionTitle}>Edit this place</Text>
          {/* Change incorrect information */}
          <TouchableOpacity style={styles.option}>
            <CheckSquare width={24} height={24} />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>
                Change incorrect information
              </Text>
              <Text style={styles.optionSubtitle}>
                Edit name, location, category, etc.
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>
          {/* Feedback on place */}
          <TouchableOpacity style={styles.option}>
            <HoleFlag width={24} height={24} />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Feedback on place</Text>
              <Text style={styles.optionSubtitle}>
                Closed, non-existent, duplicate, etc.
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  section1: {
    // flex: 1,
    width: 40,
  },
  section2_noborder: {
    flex: 9,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backIcon: {
    marginRight: 8,
  },
  addressContainer: {
    flex: 1,
  },
  address: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    flexWrap: "wrap",
  },
  residential: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  residentialText: {
    fontSize: 14,
    color: "#4CAF50",
    marginLeft: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 14,
    gap: 16,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 16,
    color: "#000",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  optionTitle: {
    fontSize: 16,
    color: "#000",
  },
  optionSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  screenTitle: { fontSize: 18, fontWeight: "bold", color: "#333" },
  footer: { padding: 10, borderTopWidth: 1, borderTopColor: "#f0f0f0" },
  footerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});

export default PlaceScreen;
