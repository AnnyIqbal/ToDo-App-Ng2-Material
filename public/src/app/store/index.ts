import { NgRedux, select, DevToolsExtension } from 'ng2-redux';
import { NgModule } from '@angular/core';

// Actions
import { MyActions } from './actions';
export { MyActions } from './actions';

// Reducer
import { TaskReducer, initialTaskState, UserReducer, initialUserState } from './reducers';

@NgModule({
    providers: [ MyActions ]
})
export class StoreModule {
    constructor(
        private ngRedux: NgRedux<{}>,
        private devTool: DevToolsExtension
    ) {
        this.ngRedux.configureStore(
            TaskReducer,                // ToDoReducer
            initialTaskState,               // initial state
            null,                       // middleware
            [devTool.isEnabled() ? devTool.enhancer() : f => f] // Enhancers
        );
    }
}