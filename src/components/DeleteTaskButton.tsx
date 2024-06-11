/* import React from 'react';
import { FAB } from 'react-native-paper';
import { deleteTask } from '../services/tasks';

const DeleteTaskButton = ({ taskId }) => {
  const handlePress = async () => {
    try {
      await deleteTask(taskId);
      console.log('Tarefa excluída com sucesso:', taskId);
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    }
  };

  return (
    <FAB
      small
      icon="delete"
      onPress={handlePress}
    />
  );
};

export default DeleteTaskButton;
 */