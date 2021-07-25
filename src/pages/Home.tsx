import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
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
    setTasks(oldVector => [...oldVector, task])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: number) {
    setTasks(oldVector => oldVector.filter(
      (task) => task.id !== id
    ))
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