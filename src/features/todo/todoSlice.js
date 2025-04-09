//reducers
import { createSlice, nanoid } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'


const initialState  = {
    todos:[ {id:"abc",task:"demo-task",isDone: false } ],  //initialising sample todo 
  }

  export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {   // state , action(name)
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo);  //direct mutation 
        },
        deleteTodo: (state,action) =>{
            // action.payload
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        markAsDone: (state,action) => {
            // action.payload
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload) {
                    todo.isDone = true;
                }
            });
        },
    },
  })

 export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;  //automatic genrates action creaters
 export default todoSlice.reducer;