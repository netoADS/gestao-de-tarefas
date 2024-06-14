import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import { readTasks, updateTask, deleteTask } from '../../services/tasks';
import { Task } from '../../types/types'; // Importe o tipo Task

const DetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [task, setTask] = useState<Task>({ id: 0, title: '', description: '', categoryColor: '' });

  // Carrega a tarefa específica quando o componente é montado
  useEffect(() => {
    fetchTask();
  }, []);

  // Função para buscar a tarefa específica no banco de dados
  const fetchTask = async () => {
    try {
      const tasksData: Task[] = await readTasks(); // Defina o tipo de retorno como Task[]
      const task = tasksData.find(t => t.id === id);
      if (task) {
        setTask(task);
      }
    } catch (error) {
      console.error('Erro ao carregar tarefa', error);
    }
  };

  // Função para atualizar a tarefa
  const handleUpdate = async () => {
    try {
      await updateTask(id, task.title, task.description, task.categoryColor);
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao atualizar tarefa', error);
    }
  };

  // Função para deletar a tarefa
  const handleDelete = async () => {
    try {
      await deleteTask(id);
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao deletar tarefa', error);
    }
  };

  // Função para atualizar o estado do formulário
  const handleChange = (name: string, value: string) => {
    setTask({ ...task, [name]: value });
  };

  const setCategoryColor = (color: string) => {
    setTask({ ...task, categoryColor: color });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Titulo"
        value={task.title}
        onChangeText={(text) => handleChange('title', text)}
        style={styles.input}
      />
      <TextInput
        label="Descrição"
        value={task.description}
        onChangeText={(text) => handleChange('description', text)}
        style={styles.input}
      />
      <View style={styles.colorButtonContainer}>
        <IconButton
          icon="circle"
          iconColor="rgb(255, 138, 255)"
          size={30}
          onPress={() => setCategoryColor('rgb(255, 231, 255)')}
          style={task.categoryColor === 'rgb(255, 231, 255)' && styles.selectedColorButton}
        />
        <IconButton
          icon="circle"
          iconColor="purple"
          size={30}
          onPress={() => setCategoryColor('rgb(200, 150, 200)')}
          style={task.categoryColor === 'rgb(200, 150, 200)' && styles.selectedColorButton}
        />
        <IconButton
          icon="circle"
          iconColor="red"
          size={30}
          onPress={() => setCategoryColor('#f78f8f')}
          style={task.categoryColor === '#f78f8f' && styles.selectedColorButton}
        />
      </View>
      <Button mode="contained" onPress={handleUpdate} style={styles.button}>
        Atualizar
      </Button>
      <Button mode="contained" onPress={handleDelete} style={styles.button} color="red">
        Apagar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
  colorButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  selectedColorButton: {
    borderWidth: 2,
    borderColor: 'black',
  },
  button: {
    marginTop: 10,
  },
});

export default DetailScreen;
