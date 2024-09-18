import React, { useState } from 'react'; // useState für das Verwalten des lokalen Zustands
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'; // React Native-Komponenten für den Aufbau der Benutzeroberfläche
import { useNavigation } from '@react-navigation/native'; // Hook für die Navigation zwischen Bildschirmen
import styles from './styles';  // Importiere Styles für konsistentes Styling in den Komponenten

// Daten für Kategorien (Essen und Anime) mit Beispielartikeln und Bildern
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
  const navigation = useNavigation(); // Hook, um die Navigation zu anderen Bildschirmen zu ermöglichen
  const [selectedCategoryType, setSelectedCategoryType] = useState('Essen'); // Zustand für die Verfolgung der ausgewählten Kategorie (Standard: Essen)

  // Funktion zur Behandlung der Kategorieauswahl (Essen oder Anime)
  // Navigiert zur ItemListPage und übergibt die ausgewählte Kategorie und den Typ (Essen oder Anime)
  const handleCategoryPress = (categoryName) => {
    navigation.navigate('ItemListPage', { category: categoryName, categoryType: selectedCategoryType });
  };

  // Funktion zur Navigation zum Warenkorb (Warenkorb)-Bildschirm
  const handleOrderPress = () => {
    navigation.navigate('Warenkorb'); // Navigiert zum Warenkorb-Bildschirm
  };

  return (
    <View style={styles.container}>
      {/* Obere Navigationsleiste mit Essen- und Anime-Schaltflächen */}
      <View style={styles.topBar}>
        {/* Schaltfläche für die Auswahl der Kategorie Essen */}
        <TouchableOpacity 
          style={styles.categoryButton} 
          onPress={() => setSelectedCategoryType('Essen')}  // Aktualisiert die ausgewählte Kategorie auf Essen
        >
          {/* Textbeschriftung für Essen, gestylt basierend auf der aktiven Kategorie */}
          <Text style={[styles.categoryText, selectedCategoryType === 'Essen' && styles.activeCategoryText]}>
            Essen
          </Text>
        </TouchableOpacity>

        {/* Schaltfläche für die Auswahl der Kategorie Anime */}
        <TouchableOpacity 
          style={styles.categoryButton} 
          onPress={() => setSelectedCategoryType('Anime')}  // Aktualisiert die ausgewählte Kategorie auf Anime
        >
          {/* Textbeschriftung für Anime, gestylt basierend auf der aktiven Kategorie */}
          <Text style={[styles.categoryText, selectedCategoryType === 'Anime' && styles.activeCategoryText]}>
            Anime
          </Text>
        </TouchableOpacity>

        {/* Schaltfläche, um zum Warenkorb (Warenkorb) zu gelangen */}
        <TouchableOpacity style={styles.orderButton} onPress={handleOrderPress}>
          <Text style={styles.orderButtonText}>zur Bestellung</Text>  {/* "Zur Bestellung" bedeutet "Zur Bestellung" */}
        </TouchableOpacity>
      </View>

      {/* Scrollbarer Bereich, der Artikel in der ausgewählten Kategorie anzeigt */}
      <ScrollView style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Sorten</Text>  {/* "Sorten" bedeutet "Typen" */}
        {/* Liste der Kategorienartikel (Essen oder Anime), angezeigt in einer vertikalen Liste */}
        <FlatList
          data={categories[selectedCategoryType]}  // Daten ändern sich basierend auf der ausgewählten Kategorie (Essen oder Anime)
          keyExtractor={item => item.id}  // Eindeutiger Schlüssel für jeden Artikel in der Liste
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCategoryPress(item.name)}>
              {/* Menüelement mit Bild und Text */}
              <View style={styles.menuItem}>
                <Image source={{ uri: item.image }} style={styles.image} />  {/* Bild für den Artikel */}
                <Text style={styles.menuItemText}>{item.name}</Text>  {/* Name des Artikels */}
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      {/* Fußbereich mit einer Werbebotschaft */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Bestellt Ihr gleichzeitig Food und Anime - dann ist es Japan-Meal - und dann bekommt Ihr 10% Rabatt!
          {/* Diese Nachricht bietet einen 10%-Rabatt, wenn Benutzer gleichzeitig Essen (Essen) und Anime-Produkte bestellen */}
        </Text>
      </View>
    </View>
  );
};

export default Index; // Exportiere die Index-Komponente als Standardexport
