import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Hottest from "../views/occassion/Hottest";
import Hot from "../views/occassion/Hot";
import Stack from "./Stack";

const Tab = createMaterialTopTabNavigator();

function TopTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Hottest" component={Hottest} />
            <Tab.Screen name="Hot" component={Stack} />
        </Tab.Navigator>
    );
}

export default TopTab;