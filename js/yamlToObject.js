// import { textLineGenerator } from "./textLineGenerator"
/**
 * Iterator modifier that will ensure that items starting with any of the given
 * characters in "firstChars" is filtered out.
 * 
 * It will also filter out empty lines.
 * 
 * @param  {Generator<string>} it
 * @param  {string[]} firstChars = [""]
 * @returns {Generator<string>}
 */
function* filterFirstCharIterator(it, firstChars = [""]) {
  for(const item of it){
    if(!firstChars.includes(item[0]) && item.length > 0)
      yield item
  }
}

/**
 * Iterator modifier that will ensure only that the portion of some text before the 
 * given splitToken is returned.
 * 
 * @param  {Generator<string>} it
 * @param  {string} splitToken = " #"
 * @returns {Generator<string>}
 */
function* stripAllAfterTokenIterator(it, splitToken = " #") {
  for(const item of it){
    yield item.split(splitToken)[0]
  }
}

/**
 * Split "text" input using "splitToken". 
 * 
 * It returns an object where the key is the left part of the split and 
 * the value is the right part of the split.
 * 
 * The Function will also un-double-quote the value field when it is between double quotes.
 * 
 * e.g. "baseurl: /word-inventorier" becomes {"baseurl": "/word-inventorier"}
 * 
 * @param  {string} text
 * @param  {string} splitToken = ": "
 * @returns {{[key: string]: any}}
 */
const extractKeyValueFromSplit = (text, splitToken = ": ")=>{
  const [key, value] = text.split(splitToken);

  const valueWithoutDoubleQuotes = value && value[0] === "\"" && value[value.length - 1] === "\"" ? value.substr(1, value.length - 2) : value

  let tmp = {};
  key && valueWithoutDoubleQuotes && (tmp[key] = valueWithoutDoubleQuotes);
  return tmp;
}

/**
 * Convert content of yml file into a Javascript object 
 * 
 * @param  {string} yamlText
 * @returns {{[key: string]: any}}
 */
const objFromYAML = (yamlText)=>{

  // Setup our iterator
  const it = stripAllAfterTokenIterator(
    filterFirstCharIterator(
      textLineGenerator(yamlText), 
      ["", "#"]
    ), 
    " #"
  );
  
  // Use iterator to build js object
  let obj = {};
  for(const line of it) obj = { ...extractKeyValueFromSplit(line, ": "), ...obj };
  return obj;
}







// const data = await fetch("https://raw.githubusercontent.com/KMurphs/word-inventorier/master/_config.yml").then(res => res.text())
// const obj = objFromYAML(data)
// console.log(obj)


// export default objFromYAML;