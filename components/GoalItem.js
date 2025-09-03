import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";
function GoalItem({text, onDeleteGoal, id}) {
  return (
    <Pressable onPress={() => onDeleteGoal(id)} style={({pressed})=> pressed && styles.pressedItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
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
  pressedItem: {
    opacity: 0.5
  }
});
