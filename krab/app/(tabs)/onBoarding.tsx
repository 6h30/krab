import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react'; // Thêm useState
import Button2 from '@/components/Button/index';
import Avatar2 from '@/components/josh_component/avatar/index';
import InputField2 from '@/components/josh_component/input-feild/index';

const OnboardingScreen = () => {
    const router = useRouter();
    const [value, setValue] = useState(''); // Thêm state cho InputField2

    return (
        <View style={styles.container}>
            {/* Tiêu đề */}
            <Text style={styles.title}>Krab</Text>

            {/* Nút điều hướng */}
            <TouchableOpacity
                style={styles.button}
                // onPress={() => router.push('/onboarding/welcome')}
                onPress={() => router.push('/bookingFlow/choiceCar')}
            >
                <Text style={styles.buttonText}>Next →</Text>
            </TouchableOpacity>

            {/* Button2 với nội dung tùy chỉnh */}
            <Button2
                title="" // Không cần title vì dùng children
                // leftIcon={null}
                // rightIcon={null}
                containerStyles={{ marginVertical: 20 }} // Thêm khoảng cách
                onPress={() => router.push('/onboarding/welcome')} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Custom Child</Text>
                </View>
            </Button2>

            {/* Avatar2 */}
            <Avatar2
                status="online"
                userImage={() => (
                    <Image
                        source={require('@/assets/images/krab-go.png')}
                        style={{ width: 50, height: 50, borderRadius: 25 }}
                    />
                )}
                icon={() => <Text>🔔</Text>}
                number={5}
                style={{ marginVertical: 20 }} // Thêm khoảng cách
            />

            {/* InputField2 */}
            <InputField2
                label="Username"
                inputValue={value} // Truyền giá trị từ state
                onChangeText={(text) => setValue(text)} // Cập nhật state khi nhập
                containerStyles={{ width: '80%', marginVertical: 20 }} // Tùy chỉnh kích thước và khoảng cách
            />
        </View>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24, // Tăng kích thước chữ cho tiêu đề
        fontWeight: 'bold',
        marginBottom: 20, // Thêm khoảng cách dưới
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#eee', // Thêm màu nền cho nút
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});