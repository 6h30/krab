import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const ChoiceCarScreen = () => {
    // Dữ liệu mẫu cho các tùy chọn xe
    const rideOptions = [
        {
            id: '1',
            title: 'UberGo',
            rating: 4,
            time: '2 mins away · 15:24',
            price: '₹193.20',
            description: 'Affordable, compact rides',
            image: 'https://via.placeholder.com/50', // Thay bằng URL ảnh xe thật
        },
        {
            id: '2',
            title: 'Moto',
            rating: 1,
            time: '3 mins away · 15:24',
            price: '₹65.17',
            description: 'Affordable motorcycle rides',
            image: 'https://via.placeholder.com/50', // Thay bằng URL ảnh xe máy thật
        },
        {
            id: '3',
            title: 'Premier',
            rating: 4,
            time: '4 mins away · 15:25',
            price: '₹193.20',
            description: 'Comfortable sedans, top-quality drivers',
            image: 'https://via.placeholder.com/50', // Thay bằng URL ảnh sedan thật
        },
        {
            id: '4',
            title: 'UberAuto',
            rating: 3,
            time: '2 mins away · 15:24',
            price: '₹118.21',
            description: 'Affordable auto rides',
            image: 'https://via.placeholder.com/50', // Thay bằng URL ảnh auto thật
        },
    ];

    const router = useRouter();

    const handleLookingRider = () => {
        // Add your logic here for handling the continue action
        router.push('/lookingRider');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.continueButton} onPress={handleLookingRider}>
                <Text style={styles.button}>
                    confirm car and look
                </Text>
            </TouchableOpacity>

            {/* Leave Now Button */}
            <TouchableOpacity style={styles.leaveNowButton}>
                <Text style={styles.leaveNowText}>Leave Now</Text>
            </TouchableOpacity>

            {/* Ride Options */}
            {rideOptions.map((option) => (
                <View key={option.id} style={styles.rideOption}>
                    <Image style={styles.vehicleImage} source={{ uri: option.image }} />
                    <View style={styles.rideDetails}>
                        <View style={styles.headerRow}>
                            <Text style={styles.rideTitle}>{option.title}</Text>
                            <Text style={styles.rating}>{'★'.repeat(option.rating)}</Text>
                        </View>
                        <Text style={styles.timeText}>{option.time}</Text>
                        <Text style={styles.description}>{option.description}</Text>
                    </View>
                    <Text style={styles.price}>{option.price}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    leaveNowButton: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    leaveNowText: {
        fontSize: 16,
        color: '#000',
    },
    rideOption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        marginBottom: 10,
    },
    vehicleImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    rideDetails: {
        flex: 1,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rideTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    rating: {
        fontSize: 16,
        color: '#FFD700', // Màu vàng cho sao
    },
    timeText: {
        fontSize: 14,
        color: '#555',
    },
    description: {
        fontSize: 14,
        color: '#777',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        fontSize: 20,
        color: '#fff',
    },
    continueButton: {
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
});

export default ChoiceCarScreen;