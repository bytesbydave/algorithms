## Arrays

Arrays are stored in order

lookup is O(1)  
push is O(1)  
insert is O(n)  
delete is O(n)

```
const arr = ['a', 'b', 'c']
```

#### Methods in JS:

| PUSH O(1)                 | POP O(1)          | UNSHIFT O(n)                    | SPLICE O(n)                                   | SHIFT O(n)                            |
| ------------------------- | ----------------- | ------------------------------- | --------------------------------------------- | ------------------------------------- |
| adds item to end of array | removes last item | adds item to beginning of array | go to index of 1 (delete nothing) and add 'e' | removes the first element of an array |
| arr.push('d')             | arr.pop()         | arr.unshift('x')                | arr.splice(1, 0, 'e')                         | arr.shift()                           |

#### Static Arrays

- Fixed in size: need to specify number of elements

#### Dynamic Arrays

- automatically allocate memory due to auto resizing

## Hash Tables

| insert | lookup | delete | search |
| ------ | ------ | ------ | ------ |
| O(1)   | O(1)   | O(1)   | O(1)   |
