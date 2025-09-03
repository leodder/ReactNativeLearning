import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
import { useState } from "react";
function GoalInput({ onAddGoal, modalVisible, endGoalHandler }) {
  const [inputValue, setInputValue] = useState("");
  const textInputHandler = (value) => {
    setInputValue(value);
  };
  const addGoalHanlder = () => {
    onAddGoal(inputValue);
    setInputValue("");
    endGoalHandler();
  };
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.inputContainer}>
        <TextInput
          value={inputValue}
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={textInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <Button title="Add Goal" onPress={addGoalHanlder} />
          </View>
          <View style={styles.buttonView}>
            <Button title="Cancel" onPress={endGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 12,
    // width: "100%",
    height: "100%",
    padding: 16
  },
  textInput: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    // marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8
  },
  buttonView: {
    width: '30%',
    marginHorizontal: 8
  }
});
