import RideDetailComponent from "@/components/RideDetail";
import { View, Text } from "react-native";

export default function AccountHistory() {
  return (
    <View>
      <RideDetailComponent
        dateTime="06 Mar 2024, 11:59"
        driverInfo="Driver at company: 1 year, Ride: 1000"
        pickupAddress="1901 Thornridge Cir. Shiloh, Hawaii 81063"
        dropoffAddress="6391 Elgin St. Celina, Delaware 10299"
        onAddStop={() => alert('Add stop clicked')}
        onComplete={() => alert('Ride completed')}
      />
    </View>
  );
}
