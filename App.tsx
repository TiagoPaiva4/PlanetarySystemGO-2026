/**
 * PlanetarySystemGO - React Native App
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação dos ecrãs
import HomeScreen from './src/screens/HomeScreen';

// Tipagem das rotas da aplicação
export type RootStackParamList = {
  Home: undefined;
};

// Criação do Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  // Mantemos a verificação do dark mode para a StatusBar
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider style={styles.container}>
      {/* Ajustei o backgroundColor para condizer com o nosso tema espacial escuro */}
      <StatusBar 
        barStyle={'light-content'} 
        backgroundColor="#0B0D17" 
      />
      
      {/* Contentor principal de Navegação */}
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{ 
            headerShown: false // Esconde o cabeçalho nativo para o design ficar mais limpo
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D17',
  },
});

export default App;