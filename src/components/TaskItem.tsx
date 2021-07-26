import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';


// My imports
import trashIcon from '../assets/icons/trash/trash.png'

import { Task } from './TasksList'


interface TasksItemProps {
    tasks: Task;
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
    editTask: (id: number, title: string) => void;
  }

export function TaskItem({ tasks, toggleTaskDone, removeTask, editTask } : TasksItemProps ) {
    return (
        <>
            <View>
                <TouchableOpacity                    
                    activeOpacity={0.7}
                    style={styles.taskButton}    
                    onPress={() => toggleTaskDone(tasks.id)}
                    //TODO - use onPress (toggle task) prop
                >
                    <View
                    style={tasks.done ? styles.taskMarkerDone : styles.taskMarker}
                    //TODO - use style prop 
                    >
                    { tasks.done && (
                        <Icon 
                        name="check"
                        size={12}
                        color="#FFF"
                        />
                    )}
                    </View>

                    <Text 
                    style={tasks.done ? styles.taskTextDone : styles.taskText}
                    //TODO - use style prop
                    >
                    {tasks.title}
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity                
                style={{ paddingHorizontal: 24 }}
                onPress={() => removeTask(tasks.id)}
                //TODO - use onPress (remove task) prop
                >
                <Image source={trashIcon} />
            </TouchableOpacity> 
        </>
  )
}

const styles = StyleSheet.create({
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B2B2B2',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskText: {
    color: '#666',
    fontFamily: 'Inter-Medium'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: '#1DB863',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskTextDone: {
    color: '#1DB863',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter-Medium'
  }
})
