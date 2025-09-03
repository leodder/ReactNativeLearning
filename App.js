// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  // TextInput,
  // ScrollView,
  FlatList,
} from "react-native";
// ScrollView跟FlatList差別在於，當有很多筆資料時，ScrollView會一次渲染全部的資料，而FlatList則是會渲染至看到的部分為止
// 因此當有很多筆資料或效能考量時，會使用FlatList
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = (inputValue) => {
    setCourseGoals((currentCourseGoals) => {
      return [
        ...currentCourseGoals,
        { text: inputValue, id: Math.random().toString() },
      ];
    });
  };
  const endGoalHandler = () => {
    setModalIsVisible(false)
  }
  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };
  const addModalHandler = () => {
    setModalIsVisible(true);
  }
  return (
    <View style={styles.appContainer}>
      {/* components */}
      <Button title="Add New Goal" color="#5e0acc" onPress={addModalHandler} />
      <GoalInput onAddGoal={addGoalHandler} modalVisible={modalIsVisible} endGoalHandler={endGoalHandler} />
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
            itemData;
            return (
              // component
              // <View style={styles.goalItem}>
              //   <Text style={styles.goalText}>{itemData.item.text}</Text>
              // </View>
              <GoalItem
                text={itemData.item.text}
                onDeleteGoal={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
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
  courseGoals: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 8,
    // width: "60%",
    flex: 5,
  },
});
