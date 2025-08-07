import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
// ScrollView跟FlatList差別在於，當有很多筆資料時，ScrollView會一次渲染全部的資料，而FlatList則是會渲染至看到的部分為止
// 因此當有很多筆資料或效能考量時，會使用FlatList
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const textInputHandler = (value) => {
    // console.log(value)
    setInputValue(value);
  };
  const addGoalHanlder = () => {
    // console.log(inputValue);
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, inputValue]);
    // console.log(courseGoals)
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={textInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHanlder} />
      </View>
      <View style={styles.courseGoals}>
        {/* ScrollView的情況，就不能用style，必須要用contentContainerStyle去套用CSS */}
        {/* <ScrollView contentContainerStyle={styles.courseGoals}> */}
        {/* <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{index}</Text>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            itemData
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item}</Text>
              </View>
            );
          }}
          alwaysBounceVertical={false}
        />
        {/* FlatList不需要用map方法 */}
        {/* {courseGoals.map((goal, index) => ( */}
        {/* <View key={index} style={styles.goalItem}>
            <Text style={styles.goalText}>{index}</Text>
            <Text style={styles.goalText}>{goal}</Text>
          </View> */}
        {/* ))} */}
        {/* </FlatList> */}
      </View>
    </View>
  );
}

// 使用StyleSheet object才有auto complete
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    // flexDirection:'column',
    // justifyContent:'space-between',
    // justifyContent:'space-around',
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
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
  courseGoals: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 8,
    // width: "60%",
    flex: 5,
  },
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
