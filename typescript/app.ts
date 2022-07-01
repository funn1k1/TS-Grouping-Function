// You need to write a grouping function that takes an array of objects and its key, makes a grouping according to the specified key and returns the grouped object.

// Example of input data:
// [
// 	{ group: 1, name: 'a' },
// 	{ group: 1, name: 'b' },
// 	{ group: 2, name: 'c' },
// ];

// Result of the grouping function:
// {
// 	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
// 	'2': [ { group: 2, name: 'c' } ]
// }

interface Data {
  group: number;
  name: string;
}

const data: Data[] = [
  { group: 1, name: "a" },
  { group: 1, name: "b" },
  { group: 2, name: "c" },
];

interface IGroup<T> {
  [key: string]: T[]
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
  return array.reduce((map: IGroup<T>, item) => {
    const itemKey = item[key];
    let arr = map[itemKey];
    if (!arr) {
      arr = [item];
    } else {
      arr.push(item);
    }
    map[itemKey] = arr;
    return map;
  }, {});
}

const res = group(data, 'group');
console.log(res);

// function group<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
//   return array.reduce((map: IGroup<T>, item) => {
//      (map[item[key]] = map[item[key]] || []).push(item);
//      return map;
//   }, {});
// }