import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';  // Import the styles from the external file

const categories = {
  Essen: [
    { id: '1', name: 'Nigiri-Sushi', image: 'https://example.com/nigiri.jpg' },
    { id: '2', name: 'Rollen', image: 'https://example.com/rollen.jpg' },
    { id: '3', name: 'Bowl', image: 'https://example.com/bowl.jpg' },
    { id: '4', name: 'Desserts', image: 'https://example.com/desserts.jpg' },
  ],
  Anime: [
    { id: '5', name: 'Figuren', image: 'https://example.com/figuren.jpg' },
    { id: '6', name: 'Anhaenger', image: 'https://example.com/anhaenger.jpg' },
    { id: '7', name: 'Wandrollen', image: 'https://example.com/wandrollen.jpg' },
    { id: '8', name: 'Manga', image: 'https://example.com/manga.jpg' },
  ]
};

const Index = () => {
  const navigation = useNavigation();
  const [selectedCategoryType, setSelectedCategoryType] = useState('Essen');

  const handleCategoryPress = (categoryName) => {
    navigation.navigate('ItemListPage', { category: categoryName, categoryType: selectedCategoryType });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.categoryButton} onPress={() => setSelectedCategoryType('Essen')}>
          <Text style={[styles.categoryText, selectedCategoryType === 'Essen' && styles.activeCategoryText]}>Essen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton} onPress={() => setSelectedCategoryType('Anime')}>
          <Text style={[styles.categoryText, selectedCategoryType === 'Anime' && styles.activeCategoryText]}>Anime</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>zur Bestellung</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Sorten</Text>
        <FlatList
          data={categories[selectedCategoryType]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCategoryPress(item.name)}>
              <View style={styles.menuItem}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.menuItemText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Bestellt Ihr gleichzeitig Food und Anime - dann ist es Japan-Meal - und dann bekommt Ihr 10% Rabatt!
        </Text>
      </View>
    </View>
  );
};

export default Index;
