import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import styles from './styles'; 

// Định nghĩa kiểu dữ liệu cho gợi ý địa điểm
interface Suggestion {
  id: string;
  name: string;
  address: string;
}

// Định nghĩa kiểu dữ liệu cho ưu đãi
interface Offer {
  id: string;
  title: string;
  discount: string;
  image: any;
}

// Định nghĩa kiểu dữ liệu cho các tùy chọn chuyến đi
interface RideOption {
  id: string;
  title: string;
  description: string;
  icon: any;
}

// Định nghĩa kiểu dữ liệu cho khám phá thêm
interface ExploreItem {
  id: string;
  image: any;
}

const RideBookingScreen = () => {
  const [destination, setDestination] = useState('');

  // Dữ liệu giả lập cho danh sách gợi ý địa điểm
  const suggestions: Suggestion[] = [
    { id: '1', name: 'Mitek Trụ Sở Chính', address: 'Săng Tạo, PT Tân Thuận Đông, Q7, TP Hồ Chí Minh' },
    { id: '2', name: 'Chành Xe Anh Vinh', address: 'Võ Văn Kiệt, P7, Q6, TP Hồ Chí Minh, 70000, Vietnam' },
    { id: '3', name: 'Nhà', address: '3/7 Tân Mỹ, 3/7 Tân Mỹ, P Tân Thuận Tây, Q7, TP Hồ Chí Minh' },
    { id: '4', name: 'Công viên', address: 'Đường Lê Lợi, Q1, TP Hồ Chí Minh' },
    { id: '5', name: 'Trường học', address: 'Đường Nguyễn Huệ, Q1, TP Hồ Chí Minh' },
  ];

  // Dữ liệu giả lập cho danh sách ưu đãi
  const offers: Offer[] = [
    { id: '1', title: 'Baozi', discount: 'Giảm 20%', image: require('@/assets/images/krab-go.png') },
    { id: '2', title: 'District K', discount: 'Giảm 15%', image: require('@/assets/images/krab-go.png') },
    { id: '3', title: 'The Sake', discount: 'Giảm 20%', image: require('@/assets/images/krab-go.png') },
    { id: '4', title: 'Baozi', discount: 'Giảm 20%', image: require('@/assets/images/krab-go.png') },
  ];

  // Dữ liệu giả lập cho các tùy chọn chuyến đi
  const rideOptions: RideOption[] = [
    { id: '1', title: 'Đặt trước chuyến xe', description: '', icon: require('@/assets/images/krab-go.png') },
    { id: '2', title: 'Đặt xe cho Gia Đình', description: '', icon: require('@/assets/images/krab-go.png') },
    { id: '3', title: 'Xe rồng hiện đại', description: '', icon: require('@/assets/images/krab-go.png') },
    { id: '4', title: 'Đi chuyến nhôm thoái', description: '', icon: require('@/assets/images/krab-go.png') },
  ];

  // Dữ liệu giả lập cho Advance Booking
  const advanceBooking = {
    id: '1',
    title: 'Advance Booking',
    description: 'Lên lịch đặt xe, Không lo trễ giờ\nTài xế sẽ đến đúng giờ, hỗ trợ đón bạn',
    image: require('@/assets/images/krab-go.png'),
  };

  // Dữ liệu giả lập cho khám phá thêm
  const exploreItems: ExploreItem[] = [
    { id: '1', image: require('@/assets/images/krab-go.png') },
    { id: '2', image: require('@/assets/images/krab-go.png') },
  ];

  // Hàm render cho gợi ý địa điểm
  const renderSuggestionItem = ({ item }: { item: Suggestion }) => (
    <View style={styles.suggestionItem}>
      <Icon name="location-pin" size={24} color="#FF0000" />
      <View style={styles.suggestionText}>
        <Text style={styles.suggestionName}>{item.name}</Text>
        <Text style={styles.suggestionAddress}>{item.address}</Text>
      </View>
    </View>
  );

  // Hàm render cho ưu đãi
  const renderOfferItem = ({ item }: { item: Offer }) => (
    <View style={styles.offerItem}>
      <Image source={item.image} style={styles.offerImage} />
      <Text style={styles.offerTitle}>{item.title}</Text>
      <Text style={styles.offerDiscount}>{item.discount}</Text>
    </View>
  );

  // Hàm render cho các tùy chọn chuyến đi
  const renderRideOptionItem = ({ item }: { item: RideOption }) => (
    <TouchableOpacity style={styles.rideOptionItem}>
      <Image source={item.icon} style={styles.rideOptionIcon} />
      <View style={styles.rideOptionText}>
        <Text style={styles.rideOptionTitle}>{item.title}</Text>
        <Text style={styles.rideOptionDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  // Hàm render cho Advance Booking
  const renderAdvanceBooking = () => (
    <View style={styles.advanceBookingContainer}>
      <Image source={advanceBooking.image} style={styles.advanceBookingImage} />
      <View style={styles.advanceBookingText}>
        <Text style={styles.advanceBookingTitle}>{advanceBooking.title}</Text>
        <Text style={styles.advanceBookingDescription}>{advanceBooking.description}</Text>
      </View>
      <View style={styles.advanceBookingSubText}>
        <Text style={styles.subText}>Nhanh tay lên lịch Thoải mái hơn khi</Text>
      </View>
    </View>
  );

  // Hàm render cho khám phá thêm
  const renderExploreItem = ({ item }: { item: ExploreItem }) => (
    <Image source={item.image} style={styles.exploreImage} />
  );

  // Header của FlatList (bao gồm header, illustration, search bar, tùy chọn chuyến đi, advance booking)
  const renderHeader = () => (
    <>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Move</Text>
        <TouchableOpacity>
          <Icon name="map" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Text style={styles.subHeader}>Chứng tỏ sự đỉnh cao đầy bất ngờ!</Text>
        <Image
          source={require('@/assets/images/krab-go.png')}
          style={styles.illustration}
        />
      </View>

      {renderSuggestionItem}

      {/* Sticky Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="location-on" size={24} color="#FF0000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Bạn muốn đến đâu?"
          value={destination}
          onChangeText={setDestination}
        />
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Đặt ngay</Text>
        </TouchableOpacity>
        
      </View>

      {/* Tiêu đề và tùy chọn chuyến đi */}
      <View style={styles.optionsSection}>
        <Text style={styles.sectionTitle}>Đa dạng lựa chọn đi chuyến cho bạn</Text>
        <FlatList
          data={rideOptions}
          renderItem={renderRideOptionItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.rideOptionsList}
        />
      </View>

      {/* Advance Booking */}
      <Text style={[styles.sectionTitle, { paddingHorizontal: 16 }]}>Đặt trước chuyến xe với bàn</Text>
      {renderAdvanceBooking()}
    </>
  );

  
  const renderFooter = () => (
    <View>
      {/* Phần ưu đãi */}
      <View style={styles.hotDealContainer}>
        <Text style={styles.hotDealTitle}>Điểm Hot Nến-di - Grab 🎉</Text>
        <FlatList
          data={offers}
          renderItem={renderOfferItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.offersList}
        />
      </View>

      {/* Phần khám phá thêm */}
      <View style={styles.exploreContainer}>
        <Text style={styles.hotDealTitle}>Khám phá thêm với Grab</Text>
        <FlatList
          data={exploreItems}
          renderItem={renderExploreItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.exploreList}
        />
      </View>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={suggestions}
      renderItem={renderSuggestionItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      stickyHeaderIndices={[2]} // Search bar ở vị trí index 2 trong ListHeaderComponent
    />
  );
};

export default RideBookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  illustrationContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#FFF',
  },
  subHeader: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  illustration: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 8,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  bookButton: {
    backgroundColor: '#00C853',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  bookButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  optionsSection: {
    marginTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  rideOptionsList: {
    marginTop: 8,
  },
  rideOptionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
    padding: 12,
    marginRight: 8,
    borderRadius: 8,
    elevation: 1,
  },
  rideOptionIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  rideOptionText: {
    flex: 1,
  },
  rideOptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rideOptionDescription: {
    fontSize: 14,
    color: '#666',
  },
  advanceBookingContainer: {
    padding: 16,
    backgroundColor: '#FFF',
    marginTop: 8,
  },
  advanceBookingImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  advanceBookingText: {
    marginTop: 8,
  },
  advanceBookingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  advanceBookingDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  advanceBookingSubText: {
    marginTop: 8,
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
  hotDealContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    paddingBottom: 16,
  },
  hotDealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  offersList: {
    marginTop: 8,
  },
  offerItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  offerImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  offerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  offerDiscount: {
    fontSize: 12,
    color: '#FF0000',
  },
  exploreContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    paddingBottom: 16,
  },
  exploreList: {
    marginTop: 8,
  },
  exploreImage: {
    width: 150,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
  suggestionItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    backgroundColor: '#FFF',
  },
  suggestionText: {
    marginLeft: 16,
  },
  suggestionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  suggestionAddress: {
    fontSize: 14,
    color: '#666',
  },
});