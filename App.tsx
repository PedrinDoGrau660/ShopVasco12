import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Routes from './src/routes/index.routes';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './src/contexts/CartContext'; // Importe o CartProvider

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider> 
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});