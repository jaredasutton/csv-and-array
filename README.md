# csv-and-array
This package currently allows for four operations with CSV files:
* return a promise that will supply a CSV-formatted UTF-8 string, reformatted as an array, from a specified file
* return a promise that will supply a CSV-formatted UTF-8 string, reformatted as an array of objects--the first "row's" cells determine the property names for each object, if the user does not provide an appropriately sized array of property names
* update the data of a specified file to reflect the values in an specified array
* write an array of arrays to a UTF-8 CSV file
## Usage
Suppose there are two files named `sample1.csv` and `sample2.csv` within the `./data-store` directory.
`sample1.csv`:
```js
00,01,02
10,11,12
20,21,22
```
`sample2.csv`:
```js
Left,MiddleLeft,MiddleRight,Right
AA,AB,AC,AD
BA,BB,BC,BD
```
Now, we can access and manipulate these files as follows:
```js
const csvAndArray = require('csv-and-array')
const sample1 = csvAndArray.csvFileAsArray('./data-store/sample1.csv')
const sample2 = csvAndArray.csvFileAsArray('./data-store/sample2.csv')

// Return a promise to supply `sample1.csv`'s values as an array of arrays.
var samp1AsArrPromise = sample1.getValues()
samp1AsArrPromise.then(console.log)
/* expected output:
    --> [['00','01','02'],['10','11','12'],['20','21','22']]
*/

// Change the values within `sample2.csv` by
// applying a transforming function to the analogous array of arrays,
// and return a promise to supply the file's new content as a UTF-8 string.
sample2.changeValues(
  arr=>arr.concat([['CA','CB','CC','CD']])
)
// Check to see impact of the changes. 
sample2.getValues().then(console.log)
/* expected output:
    --> [
         ['Left','MiddleLeft','MiddleRight','Right'],
         ['AA','AB','AC','AD'],
         ['BA','BB','BC','BD'],
         ['CA','CB','CC','CD']
        ]
*/

// Return a promise to supply `sample2.csv`'s values as an array of objects
// with the file's first row dictating the property names for each subsequent
// row's analogous object property:(cell value) pairs.
var samp2AsObjPromise = sample2.getValuesAsObj()
samp2AsObjPromise.then(console.log)
/* expected output:
    --> [
         { Left: 'AA', MiddleLeft: 'AB', MiddleRight: 'AC', Right: 'AD' },
         { Left: 'BA', MiddleLeft: 'BB', MiddleRight: 'BC', Right: 'BD' },
         { Left: 'CA', MiddleLeft: 'CB', MiddleRight: 'CC', Right: 'CD' }
        ]
*/

// Return a promise to supply `sample1.csv`'s values as an array of objects
// with the property names provided in the array ['l','m','r'] for each
// row's analogous object property:(cell value) pairs.
var samp1AsObjPromise = sample1.getValuesAsObj(['l','m','r'])
samp1AsObjPromise.then(console.log)
/* expected output:
    --> [
         { l: '00', m: '01', r: '02' },
         { l: '10', m: '11', r: '12' },
         { l: '20', m: '21', r: '22' }
        ]
*/
```
Finally, we can write a UTF-8 CSV file named `sample3.csv` from an array of arrays to the directory `./data-store`:
```js
const csvAndArray = require('csv-and-array')
var sample3Arr = [[1,2,3,4],[2,4,6,8],[3,6,9,12]]

csvAndArray.arrayToCSVFile('./data-store/sample3.csv',sample3Arr)
// expected output --> 'success'
```
We should now see the following content in `sample3.csv`:
```js
1,2,3,4
2,4,6,8
3,6,9,12
```