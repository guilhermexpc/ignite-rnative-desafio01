import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { TaskItem } from '../components/TaskItem';
import { TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);  

  function handleAddTask(newTaskTitle: string) {
    const task : Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    } 

    const duplicatedTasks = tasks.find(element => element.title === newTaskTitle)
    if (duplicatedTasks){
      Alert.alert(
        "Task já cadastrada",
        "Você não pode cadastrar uma task com o mesmo nome",
        [          
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      return
    }    
    setTasks(OldVector => [...OldVector, task])
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map((task) => ({...task}))
    
    const foundTask = updatedTasks.find((element) => element.id === id)

    if (foundTask){
      foundTask.done = !foundTask.done
      setTasks(updatedTasks)
    }
    //TODO - toggle task done if exists
  }

  function handleEditTask(taskId: number, taskNewTitle: string) {
    const selectedTask = tasks.find((element) => element.id === taskId)

    if (selectedTask){

    }
    
  }

  function handleRemoveTask(id: number) {
    Alert.alert(
      "Task já cadastrada",
      "Você não pode cadastrar uma task com o mesmo nome",
      [          
        { text: "Não" },

        { text: "OK", onPress: () => 
          setTasks(oldVector => oldVector.filter(
            (task) => task.id !== id
          ))
        }
      ]
    );
    //TODO - remove task from state
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />
     
      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
        editTask={handleEditTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})