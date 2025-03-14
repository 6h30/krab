import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import MapComponent from "@/components/MapComponent";
import ButtonF from "@/components/stylesFunny/ButtonF";
import InputFieldF from "@/components/stylesFunny/input-field";
import HomePoint from "@/assets/svgs/bookingFlowSvgs/homePoint.svg";
import PickPoint from "@/assets/svgs/bookingFlowSvgs/pickPoint.svg";

const SearchLocationScreen = () => {
  const router = useRouter();

  const handleChoiceCar = () => {
    router.push("/bookingFlow/choiceCar");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        {/* <MapComponent /> */}
        <Text style={styles.mapPlaceholder}>Map Placeholder</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Find a Trip</Text>
        <Text style={styles.subtitle}>Enter your pickup and destination</Text>

        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            {/* <Icon name="location-arrow" size={20} color="#666" style={styles.icon} /> */}

            {/* <TextInput 
              placeholder="Enter your destination" 
              style={styles.input}
              placeholderTextColor="#999"
            /> */}

            <HomePoint style={styles.icon} width={28} height={28} />
            
            <InputFieldF
              theme="secondary"
              size="secondary"
              radius="standard"
              // rightIcon="location"
              inputValue="Add a pick-up location"
              onChangeText={(text) => console.log(text)}
            />
          </View>


          <View style={styles.inputContainer}>
            {/* <Icon name="map-marker" size={20} color="#666" style={styles.icon} /> */}
            <PickPoint style={styles.icon} width={28} height={28} />

            {/* <TextInput
              placeholder="Add a pick-up location"
              style={styles.input}
              placeholderTextColor="#999"
            /> */}

            <InputFieldF
              theme="secondary"
              size="secondary"
              radius="standard"
              inputValue="Enter your destination"
            />
          </View>

          {/* <InputFieldF
            label="Username"
            theme="secondary"
            size="secondary"
            radius="standard"
            leftIcon="map"
            inputValue="Enter your destination"
          /> */}

          {/* <View style={styles.inputContainer}>
            <Icon name="location-arrow" size={20} color="#666" style={styles.icon} />
            <HomePoint style={styles.icon} width={28} height={28} />
            <TextInput 
              placeholder="Enter your destination" 
              style={styles.input}
              placeholderTextColor="#999"
            />

          </View> */}

          {/* <TouchableOpacity 
            style={styles.button} 
            onPress={handleChoiceCar}
          >
            <Text style={styles.buttonText}>Choose Car</Text>
          </TouchableOpacity> */}

          <ButtonF
            onPress={handleChoiceCar}
            title='Continue'
          >
          </ButtonF>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholder: {
    color: '#666',
    fontSize: 16,
  },
  bottomContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    minHeight: 300,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  inputSection: {
    width: '100%',
    gap: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SearchLocationScreen;