import { Text, View, StyleSheet, TouchableOpacity, Pressable, Alert } from "react-native";
import React from "react";
import * as Clipboard from 'expo-clipboard';
import useStorage from "../../hooks/useStorage";

export default function ModalPassword({ password, handleClose }) {
    const { saveItem } = useStorage();

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password);
        await saveItem('@pass', password);
        Alert.alert('Salvo com sucesso');
        handleClose();
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>
                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>{password}</Text>
                </Pressable>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonText}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24,24,24,0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#FFF',
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24,
        paddingTop: 24,
        borderRadius: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 24
    },
    innerPassword: {
        width: '90%',
        backgroundColor: '#0e0e0e',
        paddingTop: 14,
        borderRadius: 8
    },
    text: {
        color: '#FFF',
        textAlign: 'center'
    },
    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        alignItems: 'center'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14
    },
    buttonSave: {
        backgroundColor: '#392de9',
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold'
    }
});
