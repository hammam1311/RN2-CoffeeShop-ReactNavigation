import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "native-base";
// Screens
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";

const { Navigator, Screen } = createStackNavigator();

function RootNavigator() {
    return (
        <Navigator
            initialRouteName="Login"
            screenOptions={{
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: "rgb(20, 90, 100)",
                },
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Screen name="Login" component={Login} />
            <Screen name="Signup" component={Signup} />
            <Screen
                name="CoffeeList"
                component={CoffeeList}
                options={({ navigation }) => ({
                    title: "Coffee List",
                    headerRight: () => (
                        <Icon
                            name="shoppingcart"
                            type="AntDesign"
                            onPress={() => navigation.navigate("CoffeeCart")}
                        />
                    ),
                })}
            />
            <Screen
                name="CoffeeDetail"
                component={CoffeeDetail}
                options={({ route, navigation }) => {
                    const { coffeeshop } = route.params;
                    return {
                        title: coffeeshop.name,
                        headerRight: () => (
                            <Icon
                                name="shoppingcart"
                                type="AntDesign"
                                onPress={() => navigation.navigate("CoffeeCart")}
                            />
                        ),
                    };
                }}
            />
            <Screen name="CoffeeCart" component={CoffeeCart} />
        </Navigator>
    );
}
export default RootNavigator;