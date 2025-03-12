import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Button2 from '@/components/Button/index';

const WelcomeScreen = () => {
    const router = useRouter();
    const krabGoImage = require("@/assets/images/krab-go.png"); 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Krab</Text>
            <Image style={styles.welcomeImage} source={krabGoImage} />

            {/* <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/onboarding/introStep1")}
            >
                <Text style={styles.buttonText}>Next →</Text>
            </TouchableOpacity> */}

            {/* <Button2
                title="" // Không cần title vì dùng children
                leftIcon={null}
                rightIcon={null}
                // theme = "standard"
                containerStyles={{ marginVertical: 20 }} // Thêm khoảng cách
                onPress={() => router.push("/onboarding/introStep1")}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Start Krab</Text>
                </View>
            </Button2> */}

            {/* <Button2
            title='Gradient Button'
                containerStyles={{ marginVertical: 20 }}
                onPress={() => router.push("/onboarding/introStep1")}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Start Krab</Text>
                </View>
            </Button2> */}

            <Button2
                // onPress={(e) => console.log("Pressed", e.nativeEvent)}
                onPress={() => router.push("/onboarding/introStep1")}
                containerStyles={{ marginVertical: 10 }}
            >
                <Text style={{ color: "white", fontSize: 16 }}>Start Krab2</Text>
            </Button2>

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
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    welcomeImage: {
        width: 300, // 
        height: 350,
        resizeMode: 'contain',
        borderWidth: 1,
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});
