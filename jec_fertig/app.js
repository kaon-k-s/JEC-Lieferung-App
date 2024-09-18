import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Navigationscontainer, der den Navigationsbaum verwaltet
import { createStackNavigator } from '@react-navigation/stack'; // Erstelle eine stapelbasierte Navigation (Bildschirme werden übereinander gestapelt)
import Index from './index'; // Importiere den Index-Bildschirm (Startseite mit Kategorien)
import ItemListPage from './itemlistpage'; // Importiere den ItemListPage-Bildschirm (zeigt Artikel basierend auf ausgewählter Kategorie an)
import Warenkorb from './warenkorb'; // Importiere den Warenkorb-Bildschirm (Seite mit den ausgewählten Artikeln)

const Stack = createStackNavigator(); // Erstelle einen Stack-Navigator zum Verwalten der Bildschirmübergänge

const App = () => {
  return (
    // NavigationContainer verwaltet den Navigationszustand und ermöglicht die Navigation zwischen Bildschirmen
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        {/* Definiert die Routen im Stack-Navigator */}
        <Stack.Screen 
          name="Index" 
          component={Index} 
          options={{ title: 'Kategorien' }} // Titel, der in der App-Leiste für den Index-Bildschirm angezeigt wird
        />
        <Stack.Screen 
          name="ItemListPage" 
          component={ItemListPage} 
          options={{ title: 'Warenliste' }} // Titel, der in der App-Leiste für den ItemListPage-Bildschirm angezeigt wird
        />
        <Stack.Screen 
          name="Warenkorb" 
          component={Warenkorb} 
          options={{ title: 'Warenkorb' }} // Titel, der in der App-Leiste für den Warenkorb-Bildschirm angezeigt wird
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; // Exportiere die App-Komponente als Haupteinstiegspunkt
