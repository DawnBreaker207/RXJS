import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 2000);
  setTimeout(() => subscriber.next('Charlie'), 4000);
});

// const subscription = observable$.subscribe((value) => console.log(value));
console.log('Subscription 1 starts');
observable$.subscribe((value) => console.log('Subscription 1', value));

setTimeout(() => {
  console.log('Subscription 2 starts');
  observable$.subscribe((value) => console.log('Subscription 2', value));
}, 1000);

// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 3000);
