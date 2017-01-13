export const initialState = {
    Tasks: {
        index: 0,
        counter: 0,
        todo: '',
        type: ''
    }
 };

 export const ToDoReducer = function(state = initialState, action: { type: any, payload?: any }): {} {
   let newstate ;
     switch (action.type) {
         case 'ADD_TASK': {
            newstate = state;
            newstate.Tasks.counter = state.Tasks.counter + 1;
            newstate.Tasks.todo = action.payload;
            newstate.Tasks.type = action.type;
            return Object.assign({}, state, newstate);
            // return Object.assign({}, state, {
            //                                     index: state.Tasks.index++,
            //                                     counter: state.Tasks.counter + 1,
            //                                     todo: action.payload,
            //                                     type: action.type
            //                                 });
         }
         case 'DLT_TASK': {
            newstate = state;
            newstate.Tasks.counter = state.Tasks.counter - 1;
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
 };
