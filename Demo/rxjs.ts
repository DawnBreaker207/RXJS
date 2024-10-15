import { fromEvent, map, scan, throttleTime } from 'rxjs';

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9];

const clickButton = document.getElementById('click');
let showDetail = document.getElementById('show');
let count = 0;

// showDetail.innerHTML = count.toString();

// clickButton?.addEventListener('click', () => {
//   count += 1;
//   showDetail.innerHTML = count.toString();
// });

// Basic understand
//* Observable
//* Observer
//* Subscription

fromEvent(document, 'click') //FromEvent: create Observable from DOM event, eventEmitter from the given event target
  .pipe(
    throttleTime(1000), //throttleTime: Like delay, delay event in a time
    map((event) => event.clientX), //map: Like map, mapping value from a target array
    scan((count) => count + 1, 0) //scan: Like a reduce function, reduce event over times
  )
  .subscribe((count) => (showDetail.innerHTML = count.toString()));
