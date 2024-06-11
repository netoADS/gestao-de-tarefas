/* import React from 'react';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

interface UpdateTaskButtonProps {
  taskId: number;
}

const UpdateTaskButton: React.FC<UpdateTaskButtonProps> = ({ taskId }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('DetailScreen', { id: taskId });
  };

  return (
    <FAB
      small
      icon="pencil"
      onPress={() => handlePress()}
    />
  );
};

export default UpdateTaskButton; */
