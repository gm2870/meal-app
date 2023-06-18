import { StyleSheet } from 'react-native';
import Categories from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealDetails from './screens/MealDetails';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './screens/Favorites';
import { Ionicons } from '@expo/vector-icons';
const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#351401',
        },
        headerTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25',
        },
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#3f2f25',
            },
          }}
        >
          {/* <stack.Screen name="Categories" component={Categories} /> */}

          <stack.Screen
            name="drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen name="MealsOverview" component={MealsOverview} />
          <stack.Screen name="MealDetails" component={MealDetails} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}
