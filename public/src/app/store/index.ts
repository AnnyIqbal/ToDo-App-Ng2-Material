import { NgRedux, select, DevToolsExtension } from 'ng2-redux';
import { combineReducers } from 'redux';
import { NgModule } from '@angular/core';

// Actions
import { MyActions } from './actions';
export { MyActions } from './actions';

// Reducer
import { TaskReducer, initialTaskState, UserReducer, initialUserState } from './reducers';

export interface IAppState {
    TaskReducer: Object;
    UserReducer: Object;
}
export const AppReducer = combineReducers<IAppState>({
    TaskReducer,
    UserReducer
});

@NgModule({
    providers: [ MyActions ] // actions
})
export class StoreModule {
    constructor(
        private ngRedux: NgRedux<{}>,
        private devTool: DevToolsExtension
    ) {
        this.ngRedux.configureStore(
            AppReducer,                 // ToDoReducer
            {},                         // initial state
            null,                       // middleware
            [devTool.isEnabled() ? devTool.enhancer() : f => f] // Enhancers
        );
    }
}