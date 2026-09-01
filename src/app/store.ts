import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Store {
  private state = new BehaviorSubject({ leyendo: [] as any[] });
  getState() { return this.state.asObservable(); }
  dispatch(action: any) {
    if (action.type === 'LEER_AHORA') {
      const actual = this.state.value;
      this.state.next({ leyendo: [...actual.leyendo, action.payload] });
    }
  }
}