//Bai 1:
// const getMaxLengthArray = (inputArr)=>{
//     let maxLength = inputArr[0].length;
  
//     for (const item of inputArr) {
//       if (item.length > maxLength) {
//         maxLength = item.length
//       }
//     }
  
//     return inputArr.filter((item) => item.length === maxLength);
//   };
  
//   const input = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
//   console.log(getMaxLengthArray(input));

//Bai2:
// const alternatingSum = (arr) => {
//     const row1 = [];
//     const row2 = [];
  
//     for (let i = 0; i < arr.length; i += 1) {
//       if (i % 2 === 0) {
//         row1.push(arr[i]);
//       } else {
//         row2.push(arr[i]);
//       }
//     }
  
//     return [
//       row1.reduce((a, b) => a + b, 0),
//       row2.reduce((a, b) => a + b, 0)
//     ];
//   };
  
//   const arrInput = [60, 40, 55, 75, 64];
//   console.log(alternatingSum(arrInput));
  //Bai3
  
  const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  const hexBtn = document.querySelector('.hexBtn'); 
  const bodyBcg = document.querySelector('body'); 
  const hex = document.querySelector('.hex'); 
  
  hexBtn.addEventListener('click', getHex); 
  
  function getHex() {
      let hexCol = '#'; 
      for(let i = 0; i < 6; i++) { 
          let random = Math.floor(Math.random()*hexNumbers.length); 
          hexCol += hexNumbers[random]; 
      }
      bodyBcg.style.backgroundColor = hexCol; 
      hex.innerHTML = hexCol; 
  }
  