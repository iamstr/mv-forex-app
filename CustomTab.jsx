/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import _themeColor from './colorScheme.json';
import ExchangeScreen from './screens/ExchangeScreen';
import HelpScreen from './screens/HelpScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import TransactionScreen from './screens/TransactionScreen';

const Tab = createBottomTabNavigator();

export default function CustomTab() {
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('./assets/fonts/Karla/KarlaRegular.ttf'),
    'Karla-Medium': require('./assets/fonts/Karla/KarlaMedium.ttf'),
    'Karla-Bold': require('./assets/fonts/Karla/KarlaBold.ttf'),
  });
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-outline' : 'person-outline';
          } else if (route.name === 'Exchange') {
            iconName = focused ? 'swap-vertical-outline' : 'swap-vertical-outline';
          } else if (route.name === 'Transaction') {
            iconName = focused ? 'list-outline' : 'list-outline';
          } else if (route.name === 'Help') {
            iconName = focused ? 'help-circle-outline' : 'help-circle-outline';
          }

          // You can return any component that you like here!
          return (
            <Ionicons name={iconName} size={size} color={focused ? _themeColor.secondary : color} />
          );
        },
        tabBarActiveTintColor: _themeColor.secondary,
        tabBarInactiveTintColor: _themeColor.gray,
        tabBarLabelStyle: {
          fontFamily: 'Karla-Bold',
        },
        headerTitle: () => <Text style={styles.name}>Hello Joe Doe</Text>,
        headerRight: () => (
          <Ionicons
            name="notifications"
            size={26}
            color={_themeColor.darkGray}
            style={styles.headerRight}
          />
        ),
        headerLeft: () => (
          <Ionicons
            name="log-out"
            size={26}
            color={_themeColor.darkGray}
            style={styles.headerLeft}
          />
        ),
      })}
      tabBarPosition="bottom"
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          // Add a placeholder button without the `onPress` to avoid flicker
        })}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Exchange" component={ExchangeScreen} />
      <Tab.Screen name="Help" component={HelpScreen} />
      <Tab.Screen name="Transaction" component={TransactionScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: _themeColor.white,
    borderBottomColor: _themeColor.gray,
    borderBottomWidth: 0.5,
    paddingBottom: 15,
    paddingHorizontal: 15,
    shadowColor: '#ccc',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 28,
  },
  headerLeft: {
    paddingHorizontal: 15,
  },
  headerRight: {
    paddingHorizontal: 15,
  },

  name: { color: _themeColor.green, fontFamily: 'Karla-Medium', fontSize: 20 },
  rowBetween: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
});
