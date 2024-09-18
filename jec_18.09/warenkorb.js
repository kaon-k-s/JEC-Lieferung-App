import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from './styles';

const Warenkorb = ({ route }) => {
  const [cartItems, setCartItems] = useState(route.params.cartItems || []);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

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

    if (containsEssen && containsAnime) {
      setDiscountedPrice(total * 0.9);
    } else {
      setDiscountedPrice(total);
    }
  };

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
    checkStock(id, type);
  };

  const removeItem = (id, type) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => !(item.id === id && item.type === type)));
  };

  const checkStock = async (id, type) => {
    try {
      const response = await axios.get(`http://your_server_ip:3000/check-stock?id=${id}&type=${type}`);
      const { available } = response.data;

      if (!available) {
        alert('Not enough stock for the selected item.');
      }
    } catch (error) {
      console.error('Error checking stock', error);
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
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.summary}>
        <Text style={styles.total}>Total (without discount): €{totalPrice.toFixed(2)}</Text>
        {discountedPrice !== totalPrice && (
          <Text style={styles.discounted}>Final Total (with 10% discount): €{discountedPrice.toFixed(2)}</Text>
        )}
      </View>
    </View>
  );
};

export default Warenkorb;
