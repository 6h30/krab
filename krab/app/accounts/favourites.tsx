import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Định nghĩa kiểu cho mỗi địa điểm yêu thích
interface FavouriteData {
  id: string;
  name: string;
  address: string;
}

// Component cho mỗi địa điểm yêu thích
interface FavouriteItemProps {
  name: string;
  address: string;
  onEdit: (newName: string, newAddress: string) => void;
  onDelete: () => void;
}

const FavouriteItem: React.FC<FavouriteItemProps> = ({ name, address, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedAddress, setEditedAddress] = useState(address);

  const handleSave = () => {
    onEdit(editedName, editedAddress);
    setIsEditing(false);
  };

  return (
    <View style={styles.favouriteCard}>
      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            value={editedName}
            onChangeText={setEditedName}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            value={editedAddress}
            onChangeText={setEditedAddress}
            placeholder="Address"
          />
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <FontAwesome name="check" size={18} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setIsEditing(false)}>
              <FontAwesome name="times" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.favouriteHeader}>
            <Text style={styles.favouriteName}>{name}</Text>
            <FontAwesome name="heart" size={20} color="#7A90C2" />
          </View>
          <Text style={styles.favouriteAddress}>{address}</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
              <FontAwesome name="pencil" size={18} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
              <FontAwesome name="trash" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const FavouritesScreen: React.FC = () => {
  const [favourites, setFavourites] = useState<FavouriteData[]>([
    { id: '1', name: 'Home', address: '123 Main St, City' },
    { id: '2', name: 'Work', address: '456 Business Ave, Town' },
    { id: '3', name: 'Gym', address: '789 Fitness Rd, Village' },
  ]);

  const handleEdit = (id: string, newName: string, newAddress: string) => {
    setFavourites(prev =>
      prev.map(item =>
        item.id === id ? { ...item, name: newName, address: newAddress } : item
      )
    );
  };

  const handleDelete = (id: string) => {
    setFavourites(prev => prev.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favourites</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {favourites.length > 0 ? (
          favourites.map(item => (
            <FavouriteItem
              key={item.id}
              name={item.name}
              address={item.address}
              onEdit={(newName, newAddress) => handleEdit(item.id, newName, newAddress)}
              onDelete={() => handleDelete(item.id)}
            />
          ))
        ) : (
          <Text style={styles.emptyText}>No favourite locations yet.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 15,
  },
  header: {
    backgroundColor: '#F8FBFD',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4A4A4A',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  favouriteCard: {
    backgroundColor: '#F8FBFD',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#A0A0A0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  favouriteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  favouriteName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A4A4A',
    flex: 1,
  },
  favouriteAddress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  editButton: {
    backgroundColor: '#A0B5EB',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#8095CC',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  deleteButton: {
    backgroundColor: '#EB9090',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#CC8080',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  input: {
    backgroundColor: '#E8EDF3',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
    color: '#4A4A4A',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  saveButton: {
    backgroundColor: '#A0B5EB',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#8095CC',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  cancelButton: {
    backgroundColor: '#EB9090',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#CC8080',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FavouritesScreen;