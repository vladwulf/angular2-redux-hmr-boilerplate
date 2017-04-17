import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { CounterActions } from './app.actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';
  count: number;
  subscription;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions){
      this.subscription = ngRedux.select<number>('count')
        .subscribe(newCount => this.count = newCount)
  }


  increment(){
    this.ngRedux.dispatch(this.actions.increment())
  }
  decrement(){
    this.ngRedux.dispatch(this.actions.decrement())
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
