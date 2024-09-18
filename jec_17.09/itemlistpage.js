import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import styles from './styles';  // Import the styles from the external file

const ItemListPage = () => {
  const [items, setItems] = useState([]);
  const route = useRoute();
  const { category, categoryType } = route.params;

  useEffect(() => {
    const apiUrl = categoryType === 'Essen'
      ? `http://your_server_ip:3000/essen?category=${category}`
      : `http://your_server_ip:3000/anime?category=${category}`;

    axios.get(apiUrl)
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });
  }, [category, categoryType]);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: 'https://example.com/default-image.jpg' }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{categoryType === 'Essen' ? item.essenname : item.animename}</Text>
              <Text style={styles.description}>{categoryType === 'Essen' ? item.essenbeschreibung : item.animebeschreibung}</Text>
              <Text style={styles.price}>€{(categoryType === 'Essen' ? item.essenpreis : item.animepreis).toFixed(2)}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>In den Warenkorb</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ItemListPage;
