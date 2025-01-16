import { BehaviorSubject, fromEvent, map, Subject, withLatestFrom } from 'rxjs';

// const emitButton = document.querySelector('button#emit');
// const inputElement: HTMLInputElement = document.querySelector('#value-input');
// const subscribeButton = document.querySelector('button#subscribe');

// const value$ = new Subject<string>();

// fromEvent(emitButton, 'click')
//   .pipe(map(() => inputElement.value))
//   .subscribe(value$);
// fromEvent(subscribeButton, 'click').subscribe(() => {
//   console.log('New Subscription');
//   value$.subscribe((value) => console.log(value));
// });

const loggedInSpan: HTMLElement = document.querySelector('span#logged-in');
const loginButton: HTMLElement = document.querySelector('button#login');
const logoutButton: HTMLElement = document.querySelector('button#logout');
const printStateButton: HTMLElement =
  document.querySelector('button#print-state');

// const isLoggedIn$ = new Subject<boolean>();
const isLoggedIn$ = new BehaviorSubject<boolean>(false);
fromEvent(loginButton, 'click').subscribe(() => isLoggedIn$.next(true));
fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(true));
isLoggedIn$.subscribe(
  (isLoggedIn) => (loggedInSpan.innerText = isLoggedIn.toString())
);
isLoggedIn$.subscribe((isLoggedIn) => {
  logoutButton.style.display = isLoggedIn ? 'block' : 'none';
  loginButton.style.display = !isLoggedIn ? 'block' : 'none';
});

fromEvent(printStateButton, 'click')
  .pipe(withLatestFrom(isLoggedIn$))
  .subscribe(([event, isLoggedIn]) =>
    console.log('User is logged in...', isLoggedIn)
  );
