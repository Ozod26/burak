


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

