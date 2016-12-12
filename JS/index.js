/* 
This is a program that will count and return all white spaces
before the word/phrase as well as the 
letters, and numbers from
said prompted word/phrase.
*/

// ** Always put in every type of searched for character **

/* 
Nouns: program, white, spaces, letters, numbers, word
Verbs:return, prompt
*/
// Prompts the user for a word or phrase.
var word0 = prompt("Enter a word or short phrase.");
// Regular Expression pattern that counts the white spaces before the word/phrase.
var pttrn0 = /^\s*/;
// Regex for counting spaces
word0.match(/\s/g).length;

word0.match(/\d/g).length;

word0.match(/\w/g).length;

/* Length function that will actually do the counting
of white spaces before
the word/phrase.
*/
len0 = word0.match(pttrn0)[0].length;
// Writes the above function onto the page.
  document.write(len0);
// Writes " space(s) before the string, " then adds the string after the comma.
  document.write(" space(s) before the string, " + word0);
//Page break for next output.
document.write("<br>");
//Writes in the document: "I count (the number) spaces in the phrase."
  document.write(" I count " + word0.match(/\s/g).length + " spaces in the phrase.");
// Break
document.write("<br>");
// Writes the number of numbers written in the string
  document.write("I count " + word0.match(/\d/g).length + " number(s) in the string.");
// Break
document.write("<br>");
// Writes the number of letter characters in the string
  document.write("I count " + word0.match(/\w/g).length + " letter(s) in the string.");


/*
Pseudocode
BEGIN
  init var word0 prompt
  init var pttrn0
  examples of code written for following document.writes
  word0.match(/\s/g).length;

  word0.match(/\d/g).length;

  word0.match(/\w/g).length;

  word.match pttrn0
  write word.match pttrn0 function on page
  write spaces before the string + prompt
break
  write I count code_example1 spaces in the phrase.
break
  write I count code_example2 numbers in the string.
break
  write I count code_example3 letters in the string.
END
*/

/*
Test Plan 1
input: The 3 cows.
expected output: 
0 space(s) before the string, the 3 cows
I count 2 spaces in the phrase.
I count 1 number(s) in the string.
I count 8 letter(s) in the string. 
output:
0 space(s) before the string, the 3 cows
I count 2 spaces in the phrase.
I count 1 number(s) in the string.
I count 8 letter(s) in the string. 

Test Plan 2
input  The 2 cows.
expected output:
1 space(s) before the string, the 3 cows
I count 2 spaces in the phrase.
I count 1 number(s) in the string.
I count 8 letter(s) in the string. 
output:
1 space(s) before the string, the 3 cows
I count 2 spaces in the phrase.
I count 1 number(s) in the string.
I count 8 letter(s) in the string. 

Test Plan 3
input   The 2 cows became 3.
expected output:
2 space(s) before the string, the 3 cows
I count 4 spaces in the phrase.
I count 2 number(s) in the string.
I count 14 letter(s) in the string. 
output:
2 space(s) before the string, the 3 cows
I count 4 spaces in the phrase.
I count 2 number(s) in the string.
I count 14 letter(s) in the string. 

Test Plan 4
input   The 2 cows became 3 today.
expected output:
2 space(s) before the string, the 3 cows
I count 5 spaces in the phrase.
I count 2 number(s) in the string.
I count 19 letter(s) in the string. 
output:
2 space(s) before the string, the 3 cows
I count 5 spaces in the phrase.
I count 2 number(s) in the string.
I count 19 letter(s) in the string.
*/
