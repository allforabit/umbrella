import { IObjectOf } from "@thi.ng/api";

export type DiffKeyMap<T> = IObjectOf<T>;

export const enum DiffMode {
    ONLY_DISTANCE,
    ONLY_DISTANCE_LINEAR,
    ONLY_DISTANCE_LINEAR_ONLY_CHANGES,
    FULL
}

export interface ArrayDiff<T> {
    distance: number;
    adds?: DiffKeyMap<T>;
    dels?: DiffKeyMap<T>;
    const?: DiffKeyMap<T>;
    linear?: EditLog<number, T>;
}

export interface ObjectDiff<T> {
    distance: number;
    adds?: string[];
    dels?: string[];
    edits?: EditLog<string, T>;
}

export type EditLog<K, T> = (K | T)[];
