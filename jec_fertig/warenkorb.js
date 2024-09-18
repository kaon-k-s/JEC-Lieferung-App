import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from './styles'; // Importiere die Styles

const Warenkorb = ({ route }) => {
  const [cartItems, setCartItems] = useState(route.params.cartItems || []);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  useEffect(() => {
    calculateTotal();  // Berechne den Gesamtpreis, wann immer sich die Warenkorb-Artikel ändern
  }, [cartItems]);

  // Berechne den Gesamtpreis und wende ggf. einen Rabatt an
  const calculateTotal = () => {
    let total = 0;
    let containsEssen = false;
    let containsAnime = false;

    cartItems.forEach(item => {
      total += item.price * item.quantity;
      if (item.type === 'Essen') containsEssen = true;
      if (item.type === 'Anime') containsAnime = true;
    });

    setTotalPrice(total);

    // Wende 10% Rabatt an, wenn sowohl Essen als auch Anime im Warenkorb vorhanden sind
    if (containsEssen && containsAnime) {
      setDiscountedPrice(total * 0.9);
    } else {
      setDiscountedPrice(total);
    }
  };

  // Aktualisiere die Menge eines Artikels im Warenkorb
  const updateQuantity = (id, type, action) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === id && item.type === type
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
    checkStock(id, type); // Prüfe den Lagerbestand nach der Aktualisierung der Menge
  };

  // Entferne einen Artikel aus dem Warenkorb
  const removeItem = (id, type) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => !(item.id === id && item.type === type)));
  };

  // Prüfe die Verfügbarkeit eines Artikels im Lager
  const checkStock = async (id, type) => {
    try {
      const response = await axios.get(`http://your_server_ip:3000/check-stock?id=${id}&type=${type}`);
      const { available } = response.data;

      if (!available) {
        alert('Nicht genug Lagerbestand für den ausgewählten Artikel.');  // Warne, wenn der Lagerbestand unzureichend ist
      }
    } catch (error) {
      console.error('Fehler beim Überprüfen des Lagerbestands', error);  // Fehlerbehandlung
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => `${item.id}-${item.type}`}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.quantityRow}>
                {/* Buttons zum Erhöhen oder Verringern der Menge */}
                <TouchableOpacity onPress={() => updateQuantity(item.id, item.type, 'decrease')}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, item.type, 'increase')}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.price}>€{(item.price * item.quantity).toFixed(2)}</Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id, item.type)}>
                <Text style={styles.removeButtonText}>Entfernen</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.summary}>
        <Text style={styles.total}>Gesamt (ohne Rabatt): €{totalPrice.toFixed(2)}</Text>
        {discountedPrice !== totalPrice && (
          <Text style={styles.discounted}>Endpreis (mit 10% Rabatt): €{discountedPrice.toFixed(2)}</Text>
        )}
      </View>
    </View>
  );
};

export default Warenkorb;
