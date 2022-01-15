import React, { useState, useEffect } from "react";
import {Text, View} from "native-base";
import axios from "axios";
import {FlatList} from "react-native-web";

function New({route, navigation}) {
    const [advert, setAdvert] = useState({});
    const { id } = route.params;

    const fetchAdverts = async() => {
        try {
            const res = await axios.get(`http://localhost:3000/advert/${id}`, {

            })
            setAdvert(res.data);
        }
        catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchAdverts().catch();
    }, [])

    return (
        <View>
            <Text>
                {advert.title}<br/>
                {advert.link}
            </Text>
        </View>
    );
}

export default New;