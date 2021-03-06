import {Component, Inject} from '@angular/core';
import {AppStore} from "./app-store";
import {Store} from "redux";
import {AppState} from "./app-state";
import * as CounterActions from "./counter-action-creators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  counter: number;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    let state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment() {
    this.store.dispatch(CounterActions.increment())
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
}
