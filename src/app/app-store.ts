import {InjectionToken} from "@angular/core";
import { createStore, Store, StoreEnhancer} from "redux";
import {AppState} from "./app-state";
import {counterReducer} from "./counter-reduce";


let devTools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

export let store: Store<AppState> = createStore<AppState>(
  counterReducer,
  devTools
);

// export function createAppStore(): Store<AppState> {
//   return createStore<AppState>(
//     counterReducer,
//     compose(devTools)
//   );
// }


export const AppStore = new InjectionToken<Store<AppState>>('App.store');

export const appStoreProviders = [
  {provide: AppStore, useValue: store}
];
