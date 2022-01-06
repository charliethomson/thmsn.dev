import { v4 as uuidv4 } from "uuid";

export type WithId<T> = T | { item?: T, id: string };

export function idify<T>(items: T[]): WithId<T>[];
export function idify<T>(item: T): WithId<T>;
export function idify(items: string[]): WithId<string>[];


export function idify<T>(items: T[] | T): WithId<T>[] | WithId<T> {
    if (Array.isArray(items)) {
        if (typeof (items as any[])[0] === 'string') return items.map(s => ({ item: s, id: uuidv4() }))

        return items.map(_ => ({ ..._, id: uuidv4() }));
    }
    return { ...items, id: uuidv4() }
}

