import { interval, map, fromEvent, startWith, takeUntil, endWith } from 'rxjs';

const ticker$ = interval(5000).pipe(map(() => 'tick'));

const documentClicks$ = fromEvent(document, 'click');

ticker$
  .pipe(
    startWith('interval started'),
    takeUntil(documentClicks$),
    endWith('stop interval by click')
  )
  .subscribe((x) => console.log(x));

// Result (assuming a user clicks after 15 seconds)
// 'interval started'
// 'tick'
// 'tick'
// 'tick'
// 'interval ended by click'
