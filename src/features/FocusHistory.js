import { View, Text, StyleSheet, FlatList } from 'react-native'
import {colors} from '../utils/colors'
import {fontSize, spacing} from '../utils/size'


export const FocusHistory=({history})=>{
  if (!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet.</Text>;

  const renderItem= ({item})=>(<Text style={styles.item}>- {item}</Text>);

  return (<View style={styles.container}>
    <Text style={styles.title}>Things we've focused on:</Text>
    <FlatList data={history} renderItem={renderItem} />
</View>)}

const styles=StyleSheet.create({
  container:{
    padding:spacing.md,
    flex:1
  },
  item:{
    fontSize:fontSize.md,
    color:colors.white,
    paddingTop:spacing.sm
  },
  title:{
    color:colors.white,
    fontSize:fontSize.md,
    padding:spacing.sm,
    fontWeight: 'bold'
  }
})