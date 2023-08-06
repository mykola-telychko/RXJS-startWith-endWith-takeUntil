import { interval, map, fromEvent, startWith, takeUntil, endWith } from 'rxjs';

// https://rxjs.dev/api/operators/endWith

const ticker$ = interval(1000).pipe(map(() => 'tick'));

const documentClicks$ = fromEvent(document, 'click');

ticker$
  .pipe(
    startWith('interval started'),
    takeUntil(documentClicks$),
    endWith('stop interval by click')
  )
  .subscribe((x) => console.log(x));
