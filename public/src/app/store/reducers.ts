export const initialState = { 
    Tasks: {
        counter: 0,
        todo: ''
    }
 };

 export const ToDoReducer = function(state = initialState, action : { type: any, payload?: any }): {} {
   let newstate ;
     switch(action.type) {
         case 'ADD_TASK': {
            newstate = state;
            newstate.Tasks.counter= state.Tasks.counter + 1;
            newstate.Tasks.todo = action.payload;         
            return Object.assign({}, state, newstate);
         }
         case 'DLT_TASK': {
            newstate = state;
            newstate.Tasks.counter= state.Tasks.counter - 1;
            return Object.assign({}, state, newstate);
         }
         case 'EDIT_TASK': {
            newstate = state;
            newstate.Tasks.todo = action.payload;         
            return Object.assign({}, state, newstate); 
        }
         default:
            return state;
     }
 }