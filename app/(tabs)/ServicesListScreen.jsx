import React, { useEffect } from "react";
import { View, Text, FlatList, Button, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices, deleteService } from "../store/serviceSlice";

export default function ServicesListScreen({ navigation }) {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector(state => state.service);

    useEffect(() => {
        dispatch(fetchServices());
    }, []);

    if (loading) return <ActivityIndicator size="large" />;
    if (error) return <Text style={{ color: "red" }}>{error}</Text>;

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Button title="Add Service" onPress={() => navigation.navigate("ServiceForm")} />
            <FlatList
                data={list}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, borderBottomWidth: 1 }}>
                        <Text>{item.serviceName}</Text>
                        <Button title="Edit" onPress={() => navigation.navigate("ServiceForm", { service: item })} />
                        <Button title="Delete" onPress={() => dispatch(deleteService(item.id))} />
                    </View>
                )}
            />
        </View>
    );
}
