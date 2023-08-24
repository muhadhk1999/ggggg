const array=[0,4,1,22,3,4,5,4,6,7,7]
let count=1
for(let i=0;i<array.length;i++){
    if(array[i]===false){
        break}else{
        for(let j=i+1;j<array.length;j++){
            if(array[i]===array[j]){
                count++
                
                array[j]=false
            }
        }
    }console.log(array[i]+"="+count)
}

