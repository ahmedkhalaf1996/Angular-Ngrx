import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World firest', action: Action) {
 // console.log(action.type, state)

  switch (action.type) {
    case 'SPANISH':
      return state = 'Hola SPANISH'
    case 'FRENCH':
      return state = 'bonjour le FRENCH'

    default:
      return state;
  }
}
