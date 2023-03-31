//Ex: 01
/* Write a function to check whether an `input` is a string * or not
 * isString('abc'); // true
 * isString([1, 2, 4, 0]) // false */
is_string = function (input) {
  if (Object.prototype.toString.call(input) === "[object String]") return true;
  else return false;
};
console.log(is_string("vfbghjgfd"));
console.log(is_string([1, 2, 4, 0]));
/*Ex: 02
 * Write a function to check whether a string is blank * or not.
 * isBlank("") // true
 * isBlank("abc") // not */
is_Blank = function (input) {
  if (input.length === 0) return true;
  else return false;
};
console.log(is_Blank(""));
console.log(is_Blank("abc"));
/*Ex: 03
 * Write a function to split a string and convert it
 * into an array of words.
 * stringToArray("Foo Bar") // ["Foo", "Bar"] */
array = function (str) {
  return str.trim().split(" ");
};
console.log(array("Robin Singh"));
/*Ex: 04
 * Write a function to convert a string
 * in abbreviated form.
 * abbrevName("Kapil Sharma") // Kapil S */
abbrev_name = function (str1) {
  var split_names = str1.trim().split(" ");
  if (split_names.length > 1) {
    return split_names[0].charAt(0) + " " + split_names[1].charAt(2) + ".";
  }
  return split_names[0];
};
console.log(abbrev_name("Robin Singh"));
/*Ex: 05
 * Write a function to hide email addresses
 * to protect from unauthorized user.
 * * protectEmail("robin_singh@example.com"); robin...@example.com */
protect_email = function (email) {
  var avg, splitted, part1, part2;
  splitted = email.split("@");
  part1 = splitted[0];
  avg = part1.length / 3;
  part1 = part1.substring(0, part1.length - avg);
  part2 = splitted[0];
  return part1 + "...@" + part2;
};

console.log(protect_email("vishvadadhaniya2812@gmail.com"));
/* Ex: 06
 * Write a function to convert string
 * into small kabab-case
 * kababCase("Abc xyz FOO bAr") // abc-xyz-foo-bar */

let ab = "VISHVA bbbbbbb SADVFBF";
let xy = ab.split(" ").join("-");
console.log(xy.toLowerCase());
/*Ex: 07
 * Write a function that takes a string and
 * swap the lower case to uper case and Vice Versa * swapCase("AbCd") // aBcD */
swapcase = function swapcase(str) {
  return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
    return chr ? match.toUpperCase() : match.toLowerCase();
  });
};
console.log(swapcase("ASSDFGHJLJLJKasdfhgjhkjlkj"));
/*
Ex: 08 
* Write a function to concatenates a * given string n times (default is 1). 
* repeat("Hello") // Hello * repeat("Hello", 2) // Hello Hello*/
let repeat = function () {
  if (count > 1) {
    return new Array(count + 1).join(" " + str);
  }
};

// let reapt = function (str, count = 1) {
//   return count < 1 ? "" : new Array(count + 1).join(" " + str);
// };
// console.log(repeat("Vishva"));
// console.log(repeat("vishva", 2));
// console.log(repeat("vishva", 3));
/* Ex: 09
 * Write a function to humanized number * humanize(1) // 1st
 * humanize(8) // 8th
 * * humanize(402) // 402nd */
function ordinal_suffix_of(i) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}
console.log(ordinal_suffix_of(56));
/*
Ex: 10 
* Write a function to truncate a string * with ellipsis sequence ("...") * truncate("We are doing JS string exercises.") * 
Output: We are doing JS string exercises. 
* truncate("We are doing JS string exercises.", 19)
 * Output: We are doing JS …*/
text_truncate = function (str, length, ending) {
  if (length == null) {
    //length = 100;
  }
  if (ending == null) {
    ending = "***";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
console.log(text_truncate("We are doing JS string exercises. "));
console.log(text_truncate("We are doing JS string exercises.", 19));
console.log(text_truncate("We are doing JS string exercises.", 15, "!!"));
/*Ex: 11
 * Write a function to chop a string into chunks of a given length
 * chop("Just Chill") // Just Chill * chop("Just Chill", 2) // ["Ju", "st", "Ch","il", "l"]*/
function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);
  str1 = str.replace(" ", "");

  for (let i = 0, j = 0; i < numChunks; ++i, j += size) {
    chunks[i] = str.substr(j, size);
  }
  return chunks;
}
console.log(chunkSubstr("just chill", 2));
/*Ex: 12
 * Write a function to get a part of a string
 * after a specified character.
 * subStringAfterChars("Hello World!", "W") // World!*/
function subStrAfterChars(str, char, pos) {
  if (pos == "b") return str.substring(str.indexOf(char) + 0);
  else if (pos == "a") return str.substring(0, str.indexOf(char));
  else return str;
}
console.log(subStrAfterChars("Hello World!", "W", "b"));
