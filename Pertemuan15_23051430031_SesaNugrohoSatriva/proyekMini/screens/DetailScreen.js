import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

export default function DetailScreen({
    route,
    navigation
}) {
    const { itemData } = route.params;
    const [status, setStatus] = useState('');

    return (
        <View style={styles.container}>

            <View style={styles.card}>
                <Text style={styles.nama}>
                    Sesa Nugroho Satriva
                </Text>

                <Text style={styles.nim}>
                    23051430031
                </Text>

                <Text style={styles.title}>
                    {itemData.nama}
                </Text>

                <Text style={styles.label}>
                    Standar Kualitas:
                </Text>

                <Text style={styles.deskripsi}>
                    Tidak cacat, warna sesuai, ukuran sesuai.
                </Text>

                <Text style={styles.label}>
                    Status Inspeksi:
                </Text>

                <Text
                    style={[
                        styles.status,
                        status === 'Lolos' && styles.lolos,
                        status === 'Gagal' && styles.gagal
                    ]}
                >
                    {status === '' ? 'Belum Dicek' : status}
                </Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <Button
                    title="Lolos"
                    onPress={() => {
                        setStatus('Lolos');
                        alert('Produk Lolos QC');
                    }}
                />
            </View>

            <View style={{ marginTop: 10 }}>
                <Button
                    title="Gagal"
                    onPress={() => {
                        setStatus('Gagal');
                        alert('Produk Gagal QC');
                    }}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Button
                    title="Kembali"
                    onPress={() => navigation.goBack()}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },

    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 3,
    },

    nama: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    nim: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        marginBottom: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2c3e50',
    },

    label: {
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 16,
    },

    deskripsi: {
        fontSize: 15,
        marginTop: 5,
    },

    status: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },

    lolos: {
        color: 'green',
    },

    gagal: {
        color: 'red',
    },
});