// Kiểu dữ liệu cho gợi ý địa điểm
export interface Suggestion {
    id: string;
    name: string;
    address: string;
  }
  
  // Kiểu dữ liệu cho ưu đãi
  export interface Offer {
    id: string;
    title: string;
    discount: string;
    image: any; // `any` để có thể nhận `require()`
  }
  
  // Kiểu dữ liệu cho các tùy chọn chuyến đi
  export interface RideOption {
    id: string;
    title: string;
    description: string;
    icon: any;
  }
  
  // Kiểu dữ liệu cho Advance Booking
  export interface AdvanceBooking {
    id: string;
    title: string;
    description: string;
    image: any;
  }
  
  // Kiểu dữ liệu cho mục khám phá thêm
  export interface ExploreItem {
    id: string;
    image: any;
  }
  
  export interface Location {
    id: string;
    name: string;
    address: string;
    distance: string;
  }