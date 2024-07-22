import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Routes
import Routes from './bottomTabsRoutes';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveBackgroundColor: 'grey' }}>
            <Tab.Screen
                name="Home"
                component={Routes.Home}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarLabelStyle: { fontSize: 14, color: '#52C1CA' },
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" size={24} color="#52C1CA" />
                    ),
                }}
            />
            <Tab.Screen
                name="Transfer Market"
                component={Routes.TransferMarket}
                options={{
                    tabBarLabel: 'Mercado',
                    tabBarLabelStyle: { fontSize: 14, color: '#52C1CA' },
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="transit-transfer" size={24} color="#52C1CA" />
                    ),
                }}
            />
            <Tab.Screen
                name="Team"
                component={Routes.Team}
                options={{
                    tabBarLabel: 'Equipo',
                    tabBarLabelStyle: { fontSize: 14, color: '#52C1CA' },
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="soccer-field" size={24} color="#52C1CA" />
                    ),
                }}
            />
            <Tab.Screen
                name="Standings"
                component={Routes.Standings}
                options={{
                    tabBarLabel: 'Clasificación',
                    tabBarLabelStyle: { fontSize: 14, color: '#52C1CA' },
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="trophy" size={24} color="#52C1CA" />
                    ),
                }}
            />
            <Tab.Screen
                name="Information"
                component={Routes.Information}
                options={{
                    tabBarLabel: 'Información',
                    tabBarLabelStyle: { fontSize: 14, color: '#52C1CA' },
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="information-outline"
                            size={24}
                            color="#52C1CA"
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
