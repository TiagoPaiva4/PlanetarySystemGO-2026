import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';

// Se estiveres a usar React Navigation, recebemos a prop 'navigation'
export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Opcional: Podes colocar uma imagem de fundo do espaço aqui */}
      <View style={styles.content}>
        
        {/* Título da Aplicação */}
        <View style={styles.header}>
          <Text style={styles.title}>Planetary</Text>
          <Text style={styles.titleHighlight}>SystemGO</Text>
          <Text style={styles.subtitle}>Explora o universo na palma da tua mão</Text>
        </View>

        {/* Botões de Ação */}
        <View style={styles.buttonContainer}>
          
          <TouchableOpacity 
            style={styles.primaryButton}
            // Quando tiveres o React Navigation configurado, isto leva ao ecrã AR
            onPress={() => navigation.navigate('ARExplorer')}
          >
            <Text style={styles.primaryButtonText}>Iniciar Exploração AR</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryButton}
            // Botão para o Fallback 3D (Requisito Funcional nº 8 do teu projeto)
            onPress={() => navigation.navigate('Fallback3D')}
          >
            <Text style={styles.secondaryButtonText}>Modo Visualização 3D</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}

// Estilos da aplicação (Tema Espacial: Escuro com detalhes vibrantes)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D17', // Fundo escuro a imitar o espaço
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  titleHighlight: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#4DA8DA', // Azul vibrante para destacar o "SystemGO"
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#D0D6F9',
    marginTop: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 50,
  },
  primaryButton: {
    backgroundColor: '#4DA8DA',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '85%',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5, // Sombra no Android
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '85%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4DA8DA',
  },
  secondaryButtonText: {
    color: '#4DA8DA',
    fontSize: 16,
    fontWeight: '600',
  },
});