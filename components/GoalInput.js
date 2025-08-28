import { StyleSheet, View, Button, TextInput } from "react-native";
import { useState } from "react"; 
function GoalInput(props) {
  const [inputValue, setInputValue] = useState("");
  const textInputHandler = (value) => {
    setInputValue(value);
  };
  function addGoalHanlder () {
    props.onAddGoal(inputValue);
    setInputValue('')
  }
  return(
  <View style={styles.inputContainer}>
    <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={textInputHandler}
        />
    <Button title="Add Goal" onPress={addGoalHanlder} />
  </View>
)}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 12,
  },
  textInput: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "60%",
    marginRight: 8,
    padding: 8,
  },
});
