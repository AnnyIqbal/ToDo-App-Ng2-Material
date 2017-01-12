export const initialState = { 
    Tasks: {
        index: 0,
        todo: 'Hello World'
    }
 };

 export const ToDoReducer = function(state = initialState, action : { type: any, payload?: any }): {} {
     switch(action.type){
         case 'ADD_TASK': 
            return Object.assign({}, state, { index: state.Tasks.index + 1 });
         case 'DLT_TASK': 
            return Object.assign({}, state, { index: state.Tasks.index - 1 });
         case 'EDIT_TASK': 
            return Object.assign({}, state, { index: state.Tasks.index }); 
         default:
            return state;
     }
 }