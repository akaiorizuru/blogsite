// let r=0;
// // let g=0; 
// let b=0;
// let all = 0;
// for (let g = 0; g <= 255; g++) {
//     while(r <= g){
//         r=r+1;
//         if(g !=r && g != b){
//             all = all + 1;
//         }
//         while(b <= g){
//             b = b + 1;
//             if(g !=r && g != b){
//                 all = all + 1;
//             }
//         }
//     }
//     return all;
// }
// console.log(all);

//version final
// let all = 0;
// for (let g = 0; g <= 255; g++) {
//   for (let r = 0; r < g; r++) {
//     for (let b = 0; b < g; b++) {
//       all = all + 1;
//     }
//   }
//   console.log(all)
// }

let r = 0; 
let b = 0;
let g = 0;
let all = 0;
for (let g = 0; g <= 10; g++) {
// let green = g;
    for (let r = 0; r < g; r++) {
        for (let b = 0; b < g; b++) {
            all = all + 1;
            let rgb=[r,g,b]
            console.log(rgb);
        }
    }
    console.log(all)
}