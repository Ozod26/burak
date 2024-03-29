/*L-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

*/

function reverseSentence(sentence: string) {
  let words = sentence.split(' ');
  let reversedWords = words.map((word: string) => {
      return word.split('').reverse().join('');
  });
  return reversedWords.join(' ');
}
console.log(reverseSentence("we like coding!")); 


/**
 * session/cookies
request join req oziga joylashvoladi 
 self destroy ozini ozi
 */
/**  Frontend developmant
 Tradition Frontend Developmet =>BSSR =>EJS Wramework
 Modern Frontend Developent => SPA => REACT 
*/

/** 
datalarni togri kiritiyotganini tekshireydigon valideshinlar 
Validation:
Frontend validation -> frontendda togri kiritilyotganini tekshirish validation 
Backend validation -> Backend 
Database validation -> 
Burakda 3 ta validationdan foydalaniladi 
/
Pipe ->serverga kirish oraligidagi buni Pipelar bn amalga oshirishimiz mumkin 
/
*/


/** K-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;

*/

// function countVowels(str: string) {
//   let vowels = str.toLowerCase().replace(/[^aeiou]/g, '');

//   // Unli harfni sonini hisoblash
//   return vowels.length;
// }
// console.log(countVowels("AsmoXonim")); 


/** J-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
 */
// function findLongestWord(str: any) {
//   let strSplit = str.split(" ");
//   return strSplit.sort((a: any, b: any) => b.length - a.length)[0];
// }
// const result = findLongestWord("Uzbekistan");
// console.log("result:", result);



/**
 *
 */



/** 
 * I-TASK: 
Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"
 */

// function getDigits(str: string) {
//   return str.replace(/\D/g, "");
// }

// console.log(getDigits("m14i1t")); 

/* Project Standards:
  - Logging standards:
  - Naming standards:
     function, method, variable => CAMEL case (goHome)
     class => PASCALcase                      (MemberService)
     folder, file => KEBAB case 
     css => SNAKE case                         (button_style)
   

  - ERROR handling 
*/

/*
  Traditinal Api
  Rest Api
  GraphQL Api
  ...
 */

// H-TASK: 
// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(arr: any[]) {
//   let positiveNums = arr.filter((num: number) => num >=0 );
//   let result = positiveNums.length > 0 ? positiveNums.join('') : '';
//   return result;
// }
// console.log(getPositive([7, -8, 0, 5, 1]));

// function getHighestIndex(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) {
//       return -1; 
//   }
  
//   let max = arr[0]; 
//   let maxIndex = 0; 
  
//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//           max = arr[i];
//           maxIndex = i;
//       }
//   }
  
//   return maxIndex;
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8])); // Konsolga 1 ni chiqaradi

