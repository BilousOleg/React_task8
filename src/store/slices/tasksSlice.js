import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  initialState,
  name: 'tasks',
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push({
        ...payload,
        id: uuidv4(),
        isDone: false,
        // deadline:
      });
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter(t => t.id !== payload);
    },
    checkTask: (state, { payload: { id, checked } }) => {
      console.log(checked);
      const changeIndex = state.tasks.findIndex(t => t.id === id);
      state.tasks[changeIndex] = {
        ...state.tasks[changeIndex],
        isDone: checked,
      };
    },
  },
});

const { reducer, actions } = tasksSlice;

export const { addTask, deleteTask, checkTask } = actions;

export default reducer;
