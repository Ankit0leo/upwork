const arr=[3,5,4,1,2]
let sum=0;
arr.forEach((item,id)=>{
  if(item%2!==0)
  sum=sum+item
})
console.log(sum)
