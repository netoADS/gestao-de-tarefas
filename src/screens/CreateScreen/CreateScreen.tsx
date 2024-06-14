import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import { createTask } from '../../services/tasks';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categoryColor, setCategoryColor] = useState<string>('');

  // Função para salvar uma nova tarefa
  const handleSave = async () => {
    try {
      await createTask(title, description, categoryColor);
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao criar tarefa', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Titulo"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        label="Descrição"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <View style={styles.colorButtonContainer}>
        <IconButton
          icon="bookmark"
          iconColor="rgb(255, 138, 255)"
          size={30}
          onPress={() => setCategoryColor('rgb(255, 231, 255)')}
          style={categoryColor === 'rgb(255, 231, 255)' && styles.selectedColorButton}
        />
        <IconButton
          icon="bookmark"
          iconColor="purple"
          size={30}
          onPress={() => setCategoryColor('rgb(200, 150, 200)')}
          style={categoryColor === 'rgb(200, 150, 200)' && styles.selectedColorButton}
        />
        <IconButton
          icon="bookmark"
          iconColor="red"
          size={30}
          onPress={() => setCategoryColor('#f78f8f')}
          style={categoryColor === '#f78f8f' && styles.selectedColorButton}
        />
      </View>
      <Button mode="contained" onPress={handleSave}>
        Salvar
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
});

export default CreateScreen;
