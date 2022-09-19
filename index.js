var xlsx = require("xlsx");

var wb = xlsx.readFile('files/File1.xlsx');
var ws = wb.Sheets("Sheet1");

console.log(ws)