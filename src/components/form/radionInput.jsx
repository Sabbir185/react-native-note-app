import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function RadionInput({ label, value, options = [], onChange }) {
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            {
                options?.map((option) => {
                    const selected = option === value;
                    return (
                        <Pressable
                            onPress={() => onChange(option)}
                            key={option}
                            style={styles.radionContainer}
                        >
                            <View
                                style={[styles.outerCircle, selected && styles.selectedOuterCircle]}
                            >
                                <View
                                    style={[styles.innerCircle, selected && styles.selectedInnerCircle]}
                                />
                            </View>
                            <Text style={styles.radioText}>{option}</Text>
                        </Pressable>
                    )
                })
            }
        </>
    )
}


const styles = StyleSheet.create({
    label: {textTransform: 'capitalize', marginVertical: 15},
    radionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    outerCircle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#cfcfcf',

        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    selectedOuterCircle: {
        borderColor: 'orange'
    },
    innerCircle: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        borderWidth: 1,
        borderColor: '#cfcfcf',
    },
    selectedInnerCircle: {
        backgroundColor: 'orange',
        borderColor: 'orange'
    },
    radioText: {
        marginTop: '10',
        textTransform: 'capitalize'
    },
})