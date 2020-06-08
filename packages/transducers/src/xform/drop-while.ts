import { compR } from "../func/compr";
import { $iter } from "../iterator";
import type { Predicate } from "@thi.ng/api";
import type { Reducer, Transducer } from "../api";

export function dropWhile<T>(pred?: Predicate<T>): Transducer<T, T>;
export function dropWhile<T>(src: Iterable<T>): IterableIterator<T>;
export function dropWhile<T>(
    pred: Predicate<T>,
    src: Iterable<T>
): IterableIterator<T>;
export function dropWhile<T>(...args: any[]): any {
    return (
        $iter(dropWhile, args) ||
        ((rfn: Reducer<any, T>) => {
            const r = rfn[2];
            const pred = args[0];
            let ok = true;
            return compR(rfn, (acc, x: T) =>
                (ok = ok && pred(x)) ? acc : r(acc, x)
            );
        })
    );
}
