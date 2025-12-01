function valores_unicos_set(arr) {
  return [...new Set(arr)];
}
function valores_unicos_manual(arr) {
  return arr.filter((v, i) => arr.indexOf(v) === i);
}
const nums = [1, 2, 2, 3, 4, 4, 5];
console.log(valores_unicos_set(nums));    // [1,2,3,4,5]
console.log(valores_unicos_manual(nums)); // [1,2,3,4,5]
