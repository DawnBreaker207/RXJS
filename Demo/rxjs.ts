import { fromEvent, map, Observable, scan, throttleTime } from 'rxjs';

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9];
const stringSlug = [
  'Trong trường hợp này',
  'Câu chuyện này có lẽ không xảy ra',
  'Đây có lẽ là trường hợp hiếm hoi',
  'Mà thứ này thực sự có thể xảy ra',
  'Tôi đôi lúc ức chế đến tột cùng',
  'Đời tôi chưa bao giờ gặp điều như này cả',
];
// const clickButton = document.getElementById('click');
// let showDetail = document.getElementById('show');
// let count = 0;

// showDetail.innerHTML = count.toString();

// clickButton?.addEventListener('click', () => {
//   count += 1;
//   showDetail.innerHTML = count.toString();
// });

// Basic understand
//* Observable
//* Observer
//* Subscription

// fromEvent(document, 'click') //*FromEvent: create Observable from DOM event, eventEmitter from the given event target
//   .pipe(
//     throttleTime(1000), //*throttleTime: Like delay, delay event in a time
//     map((event) => event.clientX), //*map: Like map, mapping value from a target array
//     scan((count) => count + 1, 0) //*scan: Like a reduce function, reduce event over times
//   )
//   .subscribe((count) => (showDetail.innerHTML = count.toString()));

// Define Observable

// const observable = new Observable((subscribe) => {
//   subscribe.next(1);
//   subscribe.next(2);
//   subscribe.next(3);
//   setTimeout(() => {
//     subscribe.next(4);
//     subscribe.complete();
//   }, 1000);
// });
// console.log('Just before subscribe');
// observable.subscribe({
//   //* Observer next()
//   next(x) {
//     console.log(`Got value ${x}`);
//   },
//   //* Observer error()
//   error(err) {
//     console.error(`Something wrong occurred ${err}`);
//   },
//   //* Observer complete()
//   complete() {
//     console.log(`Done`);
//   },
// });
// console.log('Just after subscribe');

// const slugify = (val: string) => {
//   if (!val) return '';

//   return (
//     String(val)
//       // Spilt accented characters into their base characters and diacritical marks
//       .normalize('NFKD')
//       // Replace VietNamese Characters
//       // "a" and "ă" variants
//       .replace(
//         /(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/g,
//         'a'
//       )
//       // "e" variants
//       .replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/g, 'e')
//       // "i" variants
//       .replace(/(ì|í|ị|ỉ|ĩ|Ì|Í|Ị|Ỉ|Ĩ)/g, 'i')
//       // "o" variants
//       .replace(
//         /(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/g,
//         'o'
//       )
//       // "u" variants
//       .replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/g, 'u')
//       // "y" variants
//       .replace(/(ỳ|ý|ỵ|ỷ|ỹ|Ý|Ỵ|Ỷ|Ỹ)/g, 'y')
//       // "d" variants
//       .replace(/(đ|Đ)/g, 'd')
//       // Remove all the accents, which happen to be all in \u03xx UNICODE
//       .replace(/[\u0300-\u036f]/g, '')
//       // Trim leading or trailing whitespace
//       .trim()
//       // Convert to lower case
//       .toLowerCase()
//       // Remove non-alphanumeric characters
//       .replace(/[^a-z0-9 -]/g, '')
//       // Replace spaces with hyphens
//       .replace(/\s+/g, '-')
//       // Replace consecutive hyphens
//       .replace(/-+/g, '-')
//   );
// };

// stringSlug.map((index) => {
//   const transfer = slugify(index);

//   console.log(transfer);
// });

const observable$ = new Observable<number>((subscribe) => {
  let counter = 1;

  const intervalId = setInterval(() => {
    console.log(`Emitted`, counter);
    subscribe.next(counter++);
  }, 1000);
  return () => {
    clearInterval(intervalId);
  };
});

const subscription = observable$.subscribe((index) => {
  console.log(index);
});

setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 7000);
