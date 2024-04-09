import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatusLabel = ({lable,status}) => {

  return (
    <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>{lable}</Text>
          {status &&  <Text style={styles.statusText}>{status}</Text>}
        </View>
  )
}

export default StatusLabel

const styles = StyleSheet.create({
    statusRow: {
        flexDirection: 'row',
      },
      statusLabel: {
        backgroundColor: '#32733e',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        color: 'white',
        marginEnd: 10,
      },
      statusText: {
        backgroundColor: '#32733e',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        color: 'white',
      },
})