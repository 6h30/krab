import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Button2 from '@/components/Button/index';

const IntroStep1Screen = () => {
    const router = useRouter();
    const krabProImage = require("@/assets/images/krab-pro.png");

    return (
        // <View style={styles.container}>
        //     <Text style={styles.text}>Intro 1 Screen</Text>
        //     <TouchableOpacity
        //         style={styles.button }
        //         onPress={() => router.push("/onboarding/introStep2")}
        //     >
        //         <Text style={styles.text}>Next →</Text>
        //     </TouchableOpacity>
        // </View>

        <View style={styles.container}>
            <Text style={styles.title}>We provide </Text>
            <Image style={styles.welcomeImage} source={krabProImage} />

            <Button2
                onPress={() => router.push("/onboarding/introStep2")}
                containerStyles={{ marginVertical: 10 }}
            >
                <Text style={{ color: "white", fontSize: 16 }}>Next 1</Text>
            </Button2>

        </View>
    );
};

export default IntroStep1Screen;

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
});
