export const initialTaskState = {
    Tasks: {
        index: 0,
        counter: 0,
        todo: ''
    }
 };

 export const TaskReducer = function(state = initialTaskState, action: { type: any, payload?: any }): {} {
   let newstate ;
     switch (action.type) {
         case 'ADD_TASK': {
            newstate = state;
            newstate.Tasks.counter = state.Tasks.counter + 1;
            newstate.Tasks.todo = action.payload;
            newstate.currentState = action.type + ': ' + action.payload;

            // same object values are modified and currentState ki key added
            return Object.assign({}, state, newstate);

            // purana wese hi rha plus ye 3 new keys created n modified each time on add
            // return Object.assign({}, state, { index: state.Tasks.index + 1, counter: state.Tasks.counter + 1, todo: action.payload });
         }
         case 'DLT_TASK': {
            newstate = state;
            newstate.Tasks.counter = state.Tasks.counter - 1;
            newstate.Tasks.todo = action.payload;
            newstate.currentState = action.type + ': ' + action.payload;
            return Object.assign({}, state, newstate);
         }
         case 'EDIT_TASK': {
            newstate = state;
            newstate.Tasks.todo = action.payload;
            newstate.currentState = action.type + ': ' + action.payload;
            return Object.assign({}, state, newstate);
        }
         default:
            return state;
     }
 };

export const initialUserState = {
    User: {
        name: '',
        status: ''
    }
};

export const UserReducer = function(state = initialUserState, action: { type: string, payload?: any}) {
    switch (action.type) {
        case 'SIGN_IN':
            return Object.assign({}, state, { status: action.payload });
        case 'SIGN_UP':
            return Object.assign({}, state, { status: action.payload });
        case 'SIGN_OUT':
            return Object.assign({}, state, { status: action.payload });
        default:
            return state;
    }
};