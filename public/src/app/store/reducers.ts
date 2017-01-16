export const initialTaskState = {
    Tasks: {
        counter: 0,
        todo: ''
    }
 };

 export const TaskReducer = function(state = initialTaskState, action: { type: any, payload?: any }): {} {
   let newstate;
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
        email: '',
        status: ''
    }
};

export const UserReducer = function(state = initialUserState, action: { type: string, payload?: any}) {
  let userStatus;
    switch (action.type) {
        case 'SIGN_IN': {
            userStatus = state;
            state.User.email = action.payload;
            state.User.status = 'Logged In';
            return Object.assign({}, state, userStatus);
        }
        case 'SIGN_UP': {
            userStatus = state;
            console.log(action.payload);
            state.User.name = action.payload.uname;
            state.User.email = action.payload.emlid;
            state.User.status = 'Signed Up';
            return Object.assign({}, state, userStatus);
        }
        case 'SIGN_OUT': {
            userStatus = state;
            state.User.email = '';
            state.User.status = action.payload;
            return Object.assign({}, state, userStatus);
        }
        default:
            return state;
    }
};