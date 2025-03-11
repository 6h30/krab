import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const WelcomeScreen = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Krab</Text>
            <TouchableOpacity
                style={styles.button }
                onPress={() => router.push("/onboarding/introStep1")}
            >
                <Text style={styles.text}>Next →</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
      },
});
