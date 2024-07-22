import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import Passwords from "./pages/Passwords";
import Icon from 'react-native-vector-icons'

const Tab = createBottomTabNavigator()

export default function Routes(){

    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="Home"
            component={Home}
            options={{
                headerShown:false,
                tabBarIcon: ({focused,size,color}) => {
               if(focused){
                return <Icon size={size} color={color} name='home' />
               }
               return <Icon size={size} color={color} name='home-outline' />
                }

            }}
            />

            <Tab.Screen 
            name="Passwords"
            component={Passwords}
            options={{
                headerShown:false,
                tabBarIcon: ({focused,size,color}) => {
                    if(focused){
                     return <Icon size={size} color={color} name='lock-closed' />
                    }
                    return <Icon size={size} color={color} name='lock-closed-outline' />
                     }
            }}
            />
        </Tab.Navigator>
    )
}