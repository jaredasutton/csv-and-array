# csv-and-array
This package currently allows for four operations with CSV files:
* return a promise that will supply a CSV-formatted UTF-8 string, reformatted as an array, from a specified file
* return a promise that will supply a CSV-formatted UTF-8 string, reformatted as an array of objects--the first "row's" cells determine the property names for each object, if the user does not provide an appropriately sized array of property names)
* update the data of a specified file to reflect the values in an specified array
* write an array of arrays to a UTF-8 CSV file