import { Text, StyleSheet } from "react-native";
import React from "react";

export default function Row({item}) {
    return (
        <Text style={styles.row}>{item.id}. {item.lastname}, {item.fname}</Text>
        
    )
}

const styles = StyleSheet.create({
    row: {
      flex: 1,
      backgroundColor: '#fff',
      fontSize: 15,
      padding: 5,
    },
  });