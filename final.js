
  /*
  Title: sleepIn
  Description: The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

  Test Cases: 
  sleepIn(false, false) → true
  sleepIn(false, false) → true
  sleepIn(false, false) → true
  */
  
  /*
  Title: monkeyTrouble
  Description: We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

  Test Cases: 
  monkeyTrouble(true, true) → true
  monkeyTrouble(true, true) → true
  monkeyTrouble(true, true) → true
  */
  
  /*
  Title: sumDouble
  Description: Given two int values, return their sum. Unless the two values are the same, then return double their sum.

  Test Cases: 
  sumDouble(1, 2) → 3
  sumDouble(1, 2) → 3
  sumDouble(1, 2) → 3
  */
  
  /*
  Title: diff21
  Description: Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

  Test Cases: 
  diff21(19) → 2
  diff21(19) → 2
  diff21(19) → 2
  */
  
  /*
  Title: parrotTrouble
  Description: We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

  Test Cases: 
  parrotTrouble(true, 6) → true
  parrotTrouble(true, 6) → true
  parrotTrouble(true, 6) → true
  */
  
  /*
  Title: makes10
  Description: Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

  Test Cases: 
  makes10(9, 10) → true
  makes10(9, 10) → true
  makes10(9, 10) → true
  */
  
  /*
  Title: nearHundred
  Description: Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

  Test Cases: 
  nearHundred(93) → true
  nearHundred(93) → true
  nearHundred(93) → true
  */
  
  /*
  Title: posNeg
  Description: Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

  Test Cases: 
  posNeg(1, -1, false) → true
  posNeg(1, -1, false) → true
  posNeg(1, -1, false) → true
  */
  
  /*
  Title: notString
  Description: Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.

  Test Cases: 
  notString("candy") → "not candy"
  notString("candy") → "not candy"
  notString("candy") → "not candy"
  */
  
  /*
  Title: missingChar
  Description: Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

  Test Cases: 
  missingChar("kitten", 1) → "ktten"
  missingChar("kitten", 1) → "ktten"
  missingChar("kitten", 1) → "ktten"
  */
  
  /*
  Title: frontBack
  Description: Given a string, return a new string where the first and last chars have been exchanged.

  Test Cases: 
  frontBack("code") → "eodc"
  frontBack("code") → "eodc"
  frontBack("code") → "eodc"
  */
  
  /*
  Title: front3
  Description: Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.

  Test Cases: 
  front3("Java") → "JavJavJav"
  front3("Java") → "JavJavJav"
  front3("Java") → "JavJavJav"
  */
  
  /*
  Title: backAround
  Description: Given a string, take the last char and return a new string with the last char added at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.

  Test Cases: 
  backAround("cat") → "tcatt"
  backAround("cat") → "tcatt"
  backAround("cat") → "tcatt"
  */
  
  /*
  Title: or35
  Description: Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator -- see 

  Test Cases: 
  or35(3) → true
  or35(3) → true
  or35(3) → true
  */
  
  /*
  Title: front22
  Description: Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.

  Test Cases: 
  front22("kitten") → "kikittenki"
  front22("kitten") → "kikittenki"
  front22("kitten") → "kikittenki"
  */
  
  /*
  Title: startHi
  Description: Given a string, return true if the string starts with "hi" and false otherwise.

  Test Cases: 
  startHi("hi there") → true
  startHi("hi there") → true
  startHi("hi there") → true
  */
  
  /*
  Title: icyHot
  Description: Given two temperatures, return true if one is less than 0 and the other is greater than 100.

  Test Cases: 
  icyHot(120, -1) → true
  icyHot(120, -1) → true
  icyHot(120, -1) → true
  */
  
  /*
  Title: in1020
  Description: Given 2 int values, return true if either of them is in the range 10..20 inclusive.

  Test Cases: 
  in1020(12, 99) → true
  in1020(12, 99) → true
  in1020(12, 99) → true
  */
  
  /*
  Title: hasTeen
  Description: We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

  Test Cases: 
  hasTeen(13, 20, 10) → true
  hasTeen(13, 20, 10) → true
  hasTeen(13, 20, 10) → true
  */
  
  /*
  Title: loneTeen
  Description: We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

  Test Cases: 
  loneTeen(13, 99) → true
  loneTeen(13, 99) → true
  loneTeen(13, 99) → true
  */
  
  /*
  Title: delDel
  Description: Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

  Test Cases: 
  delDel("adelbc") → "abc"
  delDel("adelbc") → "abc"
  delDel("adelbc") → "abc"
  */
  
  /*
  Title: mixStart
  Description: Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.

  Test Cases: 
  mixStart("mix snacks") → true
  mixStart("mix snacks") → true
  mixStart("mix snacks") → true
  */
  
  /*
  Title: startOz
  Description: Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".

  Test Cases: 
  startOz("ozymandias") → "oz"
  startOz("ozymandias") → "oz"
  startOz("ozymandias") → "oz"
  */
  
  /*
  Title: intMax
  Description: Given three int values, a b c, return the largest.

  Test Cases: 
  intMax(1, 2, 3) → 3
  intMax(1, 2, 3) → 3
  intMax(1, 2, 3) → 3
  */
  
  /*
  Title: close10
  Description: Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

  Test Cases: 
  close10(8, 13) → 8
  close10(8, 13) → 8
  close10(8, 13) → 8
  */
  
  /*
  Title: in3050
  Description: Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

  Test Cases: 
  in3050(30, 31) → true
  in3050(30, 31) → true
  in3050(30, 31) → true
  */
  
  /*
  Title: max1020
  Description: Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

  Test Cases: 
  max1020(11, 19) → 19
  max1020(11, 19) → 19
  max1020(11, 19) → 19
  */
  
  /*
  Title: stringE
  Description: Return true if the given string contains between 1 and 3 'e' chars.

  Test Cases: 
  stringE("Hello") → true
  stringE("Hello") → true
  stringE("Hello") → true
  */
  
  /*
  Title: lastDigit
  Description: Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.

  Test Cases: 
  lastDigit(7, 17) → true
  lastDigit(7, 17) → true
  lastDigit(7, 17) → true
  */
  
  /*
  Title: endUp
  Description: Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

  Test Cases: 
  endUp("Hello") → "HeLLO"
  endUp("Hello") → "HeLLO"
  endUp("Hello") → "HeLLO"
  */
  
  /*
  Title: everyNth
  Description: Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

  Test Cases: 
  everyNth("Miracle", 2) → "Mrce"
  everyNth("Miracle", 2) → "Mrce"
  everyNth("Miracle", 2) → "Mrce"
  */
  
  /*
  Title: stringTimes
  Description: Given a string and a non-negative int n, return a larger string that is n copies of the original string.

  Test Cases: 
  stringTimes("Hi", 2) → "HiHi"
  stringTimes("Hi", 2) → "HiHi"
  stringTimes("Hi", 2) → "HiHi"
  */
  
  /*
  Title: frontTimes
  Description: Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;

  Test Cases: 
  frontTimes("Chocolate", 2) → "ChoCho"
  frontTimes("Chocolate", 2) → "ChoCho"
  frontTimes("Chocolate", 2) → "ChoCho"
  */
  
  /*
  Title: countXX
  Description: Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".

  Test Cases: 
  countXX("abcxx") → 1
  countXX("abcxx") → 1
  countXX("abcxx") → 1
  */
  
  /*
  Title: doubleX
  Description: Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

  Test Cases: 
  doubleX("axxbb") → true
  doubleX("axxbb") → true
  doubleX("axxbb") → true
  */
  
  /*
  Title: stringBits
  Description: Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

  Test Cases: 
  stringBits("Hello") → "Hlo"
  stringBits("Hello") → "Hlo"
  stringBits("Hello") → "Hlo"
  */
  
  /*
  Title: stringSplosion
  Description: Given a non-empty string like "Code" return a string like "CCoCodCode".

  Test Cases: 
  stringSplosion("Code") → "CCoCodCode"
  stringSplosion("Code") → "CCoCodCode"
  stringSplosion("Code") → "CCoCodCode"
  */
  
  /*
  Title: last2
  Description: Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

  Test Cases: 
  last2("hixxhi") → 1
  last2("hixxhi") → 1
  last2("hixxhi") → 1
  */
  
  /*
  Title: arrayCount9
  Description: Given an array of ints, return the number of 9's in the array.

  Test Cases: 
  arrayCount9([1, 2, 9]) → 1
  arrayCount9([1, 2, 9]) → 1
  arrayCount9([1, 2, 9]) → 1
  */
  
  /*
  Title: arrayFront9
  Description: Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

  Test Cases: 
  arrayFront9([1, 2, 9, 3, 4]) → true
  arrayFront9([1, 2, 9, 3, 4]) → true
  arrayFront9([1, 2, 9, 3, 4]) → true
  */
  
  /*
  Title: array123
  Description: Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

  Test Cases: 
  array123([1, 1, 2, 3, 1]) → true
  array123([1, 1, 2, 3, 1]) → true
  array123([1, 1, 2, 3, 1]) → true
  */
  
  /*
  Title: stringMatch
  Description: Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.

  Test Cases: 
  stringMatch("xxcaazz", "xxbaaz") → 3
  stringMatch("xxcaazz", "xxbaaz") → 3
  stringMatch("xxcaazz", "xxbaaz") → 3
  */
  
  /*
  Title: stringX
  Description: Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

  Test Cases: 
  stringX("xxHxix") → "xHix"
  stringX("xxHxix") → "xHix"
  stringX("xxHxix") → "xHix"
  */
  
  /*
  Title: altPairs
  Description: Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

  Test Cases: 
  altPairs("kitten") → "kien"
  altPairs("kitten") → "kien"
  altPairs("kitten") → "kien"
  */
  
  /*
  Title: stringYak
  Description: Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.

  Test Cases: 
  stringYak("yakpak") → "pak"
  stringYak("yakpak") → "pak"
  stringYak("yakpak") → "pak"
  */
  
  /*
  Title: array667
  Description: Given an array of ints, return the number of times that two 6's are next to each other in the array. Also count instances where the second "6" is actually a 7.

  Test Cases: 
  array667([6, 6, 2]) → 1
  array667([6, 6, 2]) → 1
  array667([6, 6, 2]) → 1
  */
  
  /*
  Title: noTriples
  Description: Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

  Test Cases: 
  noTriples([1, 1, 2, 2, 1]) → true
  noTriples([1, 1, 2, 2, 1]) → true
  noTriples([1, 1, 2, 2, 1]) → true
  */
  
  /*
  Title: has271
  Description: Given an array of ints, return true if it contains a 2, 7, 1 pattern: a value, followed by the value plus 5, followed by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.

  Test Cases: 
  has271([1, 2, 7, 1]) → true
  has271([1, 2, 7, 1]) → true
  has271([1, 2, 7, 1]) → true
  */
  
  /*
  Title: helloName
  Description: Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

  Test Cases: 
  helloName("Bob") → "Hello Bob!"
  helloName("Bob") → "Hello Bob!"
  helloName("Bob") → "Hello Bob!"
  */
  
  /*
  Title: makeAbba
  Description: Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

  Test Cases: 
  makeAbba("Hi", "Bye") → "HiByeByeHi"
  makeAbba("Hi", "Bye") → "HiByeByeHi"
  makeAbba("Hi", "Bye") → "HiByeByeHi"
  */
  
  /*
  Title: makeTags
  Description: The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

  Test Cases: 
  makeTags("i", "Yay") → "<i>Yay</i>"
  makeTags("i", "Yay") → "<i>Yay</i>"
  makeTags("i", "Yay") → "<i>Yay</i>"
  */
  
  /*
  Title: makeOutWord
  Description: Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.

  Test Cases: 
  makeOutWord("<<>>", "Yay") → "<<Yay>>"
  makeOutWord("<<>>", "Yay") → "<<Yay>>"
  makeOutWord("<<>>", "Yay") → "<<Yay>>"
  */
  
  /*
  Title: extraEnd
  Description: Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

  Test Cases: 
  extraEnd("Hello") → "lololo"
  extraEnd("Hello") → "lololo"
  extraEnd("Hello") → "lololo"
  */
  
  /*
  Title: firstTwo
  Description: Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.

  Test Cases: 
  firstTwo("Hello") → "He"
  firstTwo("Hello") → "He"
  firstTwo("Hello") → "He"
  */
  
  /*
  Title: firstHalf
  Description: Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

  Test Cases: 
  firstHalf("WooHoo") → "Woo"
  firstHalf("WooHoo") → "Woo"
  firstHalf("WooHoo") → "Woo"
  */
  
  /*
  Title: withoutEnd
  Description: Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

  Test Cases: 
  withoutEnd("Hello") → "ell"
  withoutEnd("Hello") → "ell"
  withoutEnd("Hello") → "ell"
  */
  
  /*
  Title: comboString
  Description: Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

  Test Cases: 
  comboString("Hello", "hi") → "hiHellohi"
  comboString("Hello", "hi") → "hiHellohi"
  comboString("Hello", "hi") → "hiHellohi"
  */
  
  /*
  Title: nonStart
  Description: Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

  Test Cases: 
  nonStart("Hello", "There") → "ellohere"
  nonStart("Hello", "There") → "ellohere"
  nonStart("Hello", "There") → "ellohere"
  */
  
  /*
  Title: left2
  Description: Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

  Test Cases: 
  left2("Hello") → "lloHe"
  left2("Hello") → "lloHe"
  left2("Hello") → "lloHe"
  */
  
  /*
  Title: right2
  Description: Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

  Test Cases: 
  right2("Hello") → "loHel"
  right2("Hello") → "loHel"
  right2("Hello") → "loHel"
  */
  
  /*
  Title: theEnd
  Description: Given a string, return a string length 1 from its front, unless 

  Test Cases: 
  theEnd("Hello", true) → "H"
  theEnd("Hello", true) → "H"
  theEnd("Hello", true) → "H"
  */
  
  /*
  Title: withouEnd2
  Description: Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

  Test Cases: 
  withouEnd2("Hello") → "ell"
  withouEnd2("Hello") → "ell"
  withouEnd2("Hello") → "ell"
  */
  
  /*
  Title: middleTwo
  Description: Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

  Test Cases: 
  middleTwo("string") → "ri"
  middleTwo("string") → "ri"
  middleTwo("string") → "ri"
  */
  
  /*
  Title: endsLy
  Description: Given a string, return true if it ends in "ly".

  Test Cases: 
  endsLy("oddly") → true
  endsLy("oddly") → true
  endsLy("oddly") → true
  */
  
  /*
  Title: nTwice
  Description: Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.

  Test Cases: 
  nTwice("Hello", 2) → "Helo"
  nTwice("Hello", 2) → "Helo"
  nTwice("Hello", 2) → "Helo"
  */
  
  /*
  Title: twoChar
  Description: Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.

  Test Cases: 
  twoChar("java", 0) → "ja"
  twoChar("java", 0) → "ja"
  twoChar("java", 0) → "ja"
  */
  
  /*
  Title: middleThree
  Description: Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

  Test Cases: 
  middleThree("Candy") → "and"
  middleThree("Candy") → "and"
  middleThree("Candy") → "and"
  */
  
  /*
  Title: hasBad
  Description: Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0. Note: use .equals() to compare 2 strings.

  Test Cases: 
  hasBad("badxx") → true
  hasBad("badxx") → true
  hasBad("badxx") → true
  */
  
  /*
  Title: atFirst
  Description: Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

  Test Cases: 
  atFirst("hello") → "he"
  atFirst("hello") → "he"
  atFirst("hello") → "he"
  */
  
  /*
  Title: lastChars
  Description: Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

  Test Cases: 
  lastChars("last", "chars") → "ls"
  lastChars("last", "chars") → "ls"
  lastChars("last", "chars") → "ls"
  */
  
  /*
  Title: conCat
  Description: Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

  Test Cases: 
  conCat("abc", "cat") → "abcat"
  conCat("abc", "cat") → "abcat"
  conCat("abc", "cat") → "abcat"
  */
  
  /*
  Title: lastTwo
  Description: Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

  Test Cases: 
  lastTwo("coding") → "codign"
  lastTwo("coding") → "codign"
  lastTwo("coding") → "codign"
  */
  
  /*
  Title: seeColor
  Description: Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

  Test Cases: 
  seeColor("redxx") → "red"
  seeColor("redxx") → "red"
  seeColor("redxx") → "red"
  */
  
  /*
  Title: frontAgain
  Description: Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

  Test Cases: 
  frontAgain("edited") → true
  frontAgain("edited") → true
  frontAgain("edited") → true
  */
  
  /*
  Title: minCat
  Description: Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

  Test Cases: 
  minCat("Hello", "Hi") → "loHi"
  minCat("Hello", "Hi") → "loHi"
  minCat("Hello", "Hi") → "loHi"
  */
  
  /*
  Title: extraFront
  Description: Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

  Test Cases: 
  extraFront("Hello") → "HeHeHe"
  extraFront("Hello") → "HeHeHe"
  extraFront("Hello") → "HeHeHe"
  */
  
  /*
  Title: without2
  Description: Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

  Test Cases: 
  without2("HelloHe") → "lloHe"
  without2("HelloHe") → "lloHe"
  without2("HelloHe") → "lloHe"
  */
  
  /*
  Title: deFront
  Description: Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

  Test Cases: 
  deFront("Hello") → "llo"
  deFront("Hello") → "llo"
  deFront("Hello") → "llo"
  */
  
  /*
  Title: startWord
  Description: Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string, except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.

  Test Cases: 
  startWord("hippo", "hi") → "hi"
  startWord("hippo", "hi") → "hi"
  startWord("hippo", "hi") → "hi"
  */
  
  /*
  Title: withoutX
  Description: Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

  Test Cases: 
  withoutX("xHix") → "Hi"
  withoutX("xHix") → "Hi"
  withoutX("xHix") → "Hi"
  */
  
  /*
  Title: withoutX2
  Description: Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

  Test Cases: 
  withoutX2("xHi") → "Hi"
  withoutX2("xHi") → "Hi"
  withoutX2("xHi") → "Hi"
  */
  
  /*
  Title: firstLast6
  Description: Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

  Test Cases: 
  firstLast6([1, 2, 6]) → true
  firstLast6([1, 2, 6]) → true
  firstLast6([1, 2, 6]) → true
  */
  
  /*
  Title: sameFirstLast
  Description: Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

  Test Cases: 
  sameFirstLast([1, 2, 3]) → false
  sameFirstLast([1, 2, 3]) → false
  sameFirstLast([1, 2, 3]) → false
  */
  
  /*
  Title: makePi
  Description: Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.

  Test Cases: 
  makePi() → [3, 1, 4]
  makePi() → [3, 1, 4]
  makePi() → [3, 1, 4]
  */
  
  /*
  Title: commonEnd
  Description: Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

  Test Cases: 
  commonEnd([1, 2, 3], [7, 3]) → true
  commonEnd([1, 2, 3], [7, 3]) → true
  commonEnd([1, 2, 3], [7, 3]) → true
  */
  
  /*
  Title: sum3
  Description: Given an array of ints length 3, return the sum of all the elements.

  Test Cases: 
  sum3([1, 2, 3]) → 6
  sum3([1, 2, 3]) → 6
  sum3([1, 2, 3]) → 6
  */
  
  /*
  Title: rotateLeft3
  Description: Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

  Test Cases: 
  rotateLeft3([1, 2, 3]) → [2, 3, 1]
  rotateLeft3([1, 2, 3]) → [2, 3, 1]
  rotateLeft3([1, 2, 3]) → [2, 3, 1]
  */
  
  /*
  Title: reverse3
  Description: Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

  Test Cases: 
  reverse3([1, 2, 3]) → [3, 2, 1]
  reverse3([1, 2, 3]) → [3, 2, 1]
  reverse3([1, 2, 3]) → [3, 2, 1]
  */
  
  /*
  Title: maxEnd3
  Description: Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

  Test Cases: 
  maxEnd3([1, 2, 3]) → [3, 3, 3]
  maxEnd3([1, 2, 3]) → [3, 3, 3]
  maxEnd3([1, 2, 3]) → [3, 3, 3]
  */
  
  /*
  Title: sum2
  Description: Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

  Test Cases: 
  sum2([1, 2, 3]) → 3
  sum2([1, 2, 3]) → 3
  sum2([1, 2, 3]) → 3
  */
  
  /*
  Title: middleWay
  Description: Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

  Test Cases: 
  middleWay([1, 2, 3], [4, 5, 6]) → [2, 5]
  middleWay([1, 2, 3], [4, 5, 6]) → [2, 5]
  middleWay([1, 2, 3], [4, 5, 6]) → [2, 5]
  */
  
  /*
  Title: makeEnds
  Description: Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.

  Test Cases: 
  makeEnds([1, 2, 3]) → [1, 3]
  makeEnds([1, 2, 3]) → [1, 3]
  makeEnds([1, 2, 3]) → [1, 3]
  */
  
  /*
  Title: has23
  Description: Given an int array length 2, return true if it contains a 2 or a 3.

  Test Cases: 
  has23([2, 5]) → true
  has23([2, 5]) → true
  has23([2, 5]) → true
  */
  
  /*
  Title: no23
  Description: Given an int array length 2, return true if it does not contain a 2 or 3.

  Test Cases: 
  no23([4, 5]) → true
  no23([4, 5]) → true
  no23([4, 5]) → true
  */
  
  /*
  Title: makeLast
  Description: Given an int array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more. Note: by default, a new int array contains all 0's.

  Test Cases: 
  makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
  makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
  makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
  */
  
  /*
  Title: double23
  Description: Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

  Test Cases: 
  double23([2, 2]) → true
  double23([2, 2]) → true
  double23([2, 2]) → true
  */
  
  /*
  Title: fix23
  Description: Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.

  Test Cases: 
  fix23([1, 2, 3]) → [1, 2, 0]
  fix23([1, 2, 3]) → [1, 2, 0]
  fix23([1, 2, 3]) → [1, 2, 0]
  */
  
  /*
  Title: start1
  Description: Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.

  Test Cases: 
  start1([1, 2, 3], [1, 3]) → 2
  start1([1, 2, 3], [1, 3]) → 2
  start1([1, 2, 3], [1, 3]) → 2
  */
  
  /*
  Title: biggerTwo
  Description: Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

  Test Cases: 
  biggerTwo([1, 2], [3, 4]) → [3, 4]
  biggerTwo([1, 2], [3, 4]) → [3, 4]
  biggerTwo([1, 2], [3, 4]) → [3, 4]
  */
  
  /*
  Title: makeMiddle
  Description: Given an array of ints of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.

  Test Cases: 
  makeMiddle([1, 2, 3, 4]) → [2, 3]
  makeMiddle([1, 2, 3, 4]) → [2, 3]
  makeMiddle([1, 2, 3, 4]) → [2, 3]
  */
  
  /*
  Title: plusTwo
  Description: Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

  Test Cases: 
  plusTwo([1, 2], [3, 4]) → [1, 2, 3, 4]
  plusTwo([1, 2], [3, 4]) → [1, 2, 3, 4]
  plusTwo([1, 2], [3, 4]) → [1, 2, 3, 4]
  */
  
  /*
  Title: swapEnds
  Description: Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

  Test Cases: 
  swapEnds([1, 2, 3, 4]) → [4, 2, 3, 1]
  swapEnds([1, 2, 3, 4]) → [4, 2, 3, 1]
  swapEnds([1, 2, 3, 4]) → [4, 2, 3, 1]
  */
  
  /*
  Title: midThree
  Description: Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3.

  Test Cases: 
  midThree([1, 2, 3, 4, 5]) → [2, 3, 4]
  midThree([1, 2, 3, 4, 5]) → [2, 3, 4]
  midThree([1, 2, 3, 4, 5]) → [2, 3, 4]
  */
  
  /*
  Title: maxTriple
  Description: Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.

  Test Cases: 
  maxTriple([1, 2, 3]) → 3
  maxTriple([1, 2, 3]) → 3
  maxTriple([1, 2, 3]) → 3
  */
  
  /*
  Title: frontPiece
  Description: Given an int array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present.

  Test Cases: 
  frontPiece([1, 2, 3]) → [1, 2]
  frontPiece([1, 2, 3]) → [1, 2]
  frontPiece([1, 2, 3]) → [1, 2]
  */
  
  /*
  Title: unlucky1
  Description: We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

  Test Cases: 
  unlucky1([1, 3, 4, 5]) → true
  unlucky1([1, 3, 4, 5]) → true
  unlucky1([1, 3, 4, 5]) → true
  */
  
  /*
  Title: make2
  Description: Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.

  Test Cases: 
  make2([4, 5], [1, 2, 3]) → [4, 5]
  make2([4, 5], [1, 2, 3]) → [4, 5]
  make2([4, 5], [1, 2, 3]) → [4, 5]
  */
  
  /*
  Title: front11
  Description: Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.

  Test Cases: 
  front11([1, 2, 3], [7, 9, 8]) → [1, 7]
  front11([1, 2, 3], [7, 9, 8]) → [1, 7]
  front11([1, 2, 3], [7, 9, 8]) → [1, 7]
  */
  
  /*
  Title: cigarParty
  Description: When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.

  Test Cases: 
  cigarParty(30, false) → false
  cigarParty(30, false) → false
  cigarParty(30, false) → false
  */
  
  /*
  Title: dateFashion
  Description: You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).

  Test Cases: 
  dateFashion(5, 10) → 2
  dateFashion(5, 10) → 2
  dateFashion(5, 10) → 2
  */
  
  /*
  Title: squirrelPlay
  Description: The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.

  Test Cases: 
  squirrelPlay(70, false) → true
  squirrelPlay(70, false) → true
  squirrelPlay(70, false) → true
  */
  
  /*
  Title: caughtSpeeding
  Description: You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

  Test Cases: 
  caughtSpeeding(60, false) → 0
  caughtSpeeding(60, false) → 0
  caughtSpeeding(60, false) → 0
  */
  
  /*
  Title: sortaSum
  Description: Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.

  Test Cases: 
  sortaSum(3, 4) → 7
  sortaSum(3, 4) → 7
  sortaSum(3, 4) → 7
  */
  
  /*
  Title: alarmClock
  Description: Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

  Test Cases: 
  alarmClock(1, false) → "7:00"
  alarmClock(1, false) → "7:00"
  alarmClock(1, false) → "7:00"
  */
  
  /*
  Title: love6
  Description: The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.

  Test Cases: 
  love6(6, 4) → true
  love6(6, 4) → true
  love6(6, 4) → true
  */
