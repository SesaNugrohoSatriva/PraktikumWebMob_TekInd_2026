import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default function HomeScreen({ navigation }) {
    const [items, setItems] = useState([
        {
            id: '1',
            nama: 'Produk A',
            status: 'Belum Dicek'
        },
        {
            id: '2',
            nama: 'Produk B',
            status: 'Belum Dicek'
        },
        {
            id: '3',
            nama: 'Produk C',
            status: 'Belum Dicek'
        }
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Daftar Inspeksi QC
            </Text>
            <Text style={styles.identitas}>Sesa Nugroho Satriva</Text>
            <Text style={styles.identitas}>23051430031</Text>

            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate('Detail', {
                                itemData: item
                            })
                        }
                    >
                        <Text
                            style={[
                                styles.nama,
                                item.status === 'Gagal' &&
                                { color: 'red' }
                            ]}
                        >
                            {item.nama}
                        </Text>

                        <Text>{item.status}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        padding: 15,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 8,
    },
    nama: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    identitas: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5,
    },
});