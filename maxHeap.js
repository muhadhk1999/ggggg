class MaxHeap{
  constructor(){
      this.heap=[]
  }
  parent(index){
      return Math.floor((index-1)/2)
  }
  leftChild(index){
      return Math.floor(2*index+1)
  }
  rightChild(index){
      return Math.floor(2*index+2)
  }
  add(element){
      this.heap.push(element)
      var index=this.heap.length-1
      var parent=this.parent(index)
      while(this.heap(parent)&&this.heap[index]>this.heap[parent]){
          swap(index,parent)
          index=this.parent(index)
          parent=this.parent(index)
      }
  }
  swap(a,b){
      let temp=this.heap[a]
      this.heap[a]=this.heap[b]
      this.heap[b]=temp

  }
  delete(){
      var item=this.heap.shift()
      this.heap.unshift(this.heap.pop())
      var index=0
      var leftChild=this.leftChild(index)
      var rightChild=this.rightChild(index)
      while(this.heap(this.leftChild) && this.heap[leftChild]>this.heap[index] || this.heap[this.rightChild]>this.heap(index)){
          var max=this.leftChild
          if(this.heap(this.rightChild) && this.heap[this.rightChild]> this.heap[max]){
              max=this.rightChild
          }
          this.swap(max,index)
          index=max
          leftChild=leftChild(max)
          rightChild=rightChild(max)

      }

      return item
  }
  primeORnot(n){
    let arr=[]
    let val=arr[0]
    arr.push(Elements)
    for(i=2;i<=arr.length;i++){
        if(i%arr[i]===0)
    }
  }
  second
}