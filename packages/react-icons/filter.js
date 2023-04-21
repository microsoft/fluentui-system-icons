const fs = require("fs");
const path = require("path");
const argv = require("yargs").boolean("selector").default("selector", false).argv;
const _ = require("lodash");

const RTL_FILTER_PATH =argv.filter;

if (!RTL_FILTER_PATH) {
    throw new Error("Filter folder not specified by --filter");
}

const filterFile = fs.readFileSync(RTL_FILTER_PATH, { encoding: 'utf8' })
var rtlArray = filterFile.split(/\r?\n/);
console.log(rtlArray)
console.log(rtlArray.includes("ic_fluent_arrow_hook_down_right_24_filled"))


