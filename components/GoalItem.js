import { StyleSheet } from "react-native";
import {View, Text} from 'react-native'
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderWidth: 5,
    borderColor: "#5e0acc",
    borderRadius: 5,
    backgroundColor: "black",
    // react native裡，CSS沒有辦法inheritance & cascade，所以外層寫的，裡面的吃不到
    // color: "white",
  },
  goalText: {
    color: "white",
  },
});
