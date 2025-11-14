import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { TextInput, Button } from 'react-native';
import { FlatList } from 'react-native';
import TodoItem from './components/TodoItem';


export default function App() {
  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  function taskInputHandler(enteredText) {
  setEnteredTaskText(enteredText);
}

function addTaskHandler() {
  if (enteredTaskText.trim().length === 0) {
    return;
  }

  setTasks((currentTasks) => [
    ...currentTasks,
    { id: Math.random().toString(), text: enteredTaskText },
  ]);
  function deleteTaskHandler(id) {
  setTasks((currentTasks) => {
    return currentTasks.filter((task) => task.id !== id);
  });
}

  setEnteredTaskText('');
}

return (
  <View style={styles.container}>

    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a task..."
        value={task}
        onChangeText={setTask}
      />

      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.listContainer}>
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TodoItem
          text={item.text}
          id={item.id}
          onDelete={deleteTaskHandler}
        />
      )}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text style={styles.emptyText}>No tasks yet. Add one!</Text>}
    />
    </View>

  </View>
);

}

const styles = StyleSheet.create({

  listContainer: {
  flex: 5,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },

  inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
  borderBottomWidth: 1,
  borderColor: '#ccc',
  paddingBottom: 10,
},
textInput: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 10,
  borderRadius: 6,
  marginRight: 10,
  fontSize: 16,
},

  appContainer: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
