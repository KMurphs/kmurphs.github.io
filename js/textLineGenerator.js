/**
 * Function that will extract a line from some text.
 * Given the "lastEnd" input, the function will look for the first
 * "\n" character just after offset "lastEnd" and will return the text 
 * between these two offsets.
 * 
 * @param  {string} text
 * @param  {number | null} lastEnd = null
 * @returns {[string, number, number]}
 */
const getLine = (text, lastEnd = null) => {

  // Compute line limits
  const newStart = lastEnd ? lastEnd + 1 : 0; 
  const newEnd = text.indexOf("\n", newStart); 

  // When end of text is reached, we must be a little bit clever to get last portion of text
  const line = text.substr(newStart, newEnd == -1 ? undefined : newEnd - newStart); 

  return [line, newStart, newEnd];
}

/**
 * Generator function that iterates through lines of a given "text" input.
 * 
 * If "doDebug" is true, the generator will yield an array with the line, its
 * starting and ending index in the "text" input.
 * 
 * The Generator function has an external dependency "getLine": A function used 
 * to extract text between a starting and ending index.
 * 
 * @param  {string} text
 * @param  {boolean} doDebug = false
 * @returns {Generator<string>|Generator<string, number, number>}
 */
function* textLineGenerator(text, doDebug = false) {

  // Get First line
  let curr = getLine(text);
  let lineCount = 0;
  
  // Yield and update current line until end of text
  while(curr[2] !== -1){
    yield doDebug ? curr : curr[0];
    curr = getLine(text, curr[2]);
    lineCount++;
  }

  // Yield last portion of text
  yield doDebug ? curr : curr[0];
  lineCount++;

  // Return number of lines yielded
  return lineCount;
}




// export { textLineGenerator, getLine }