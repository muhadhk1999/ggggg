class minHeap{
    constructor(){
        this.heap=[]
    }
    parent(index){
        return Math.floor((index-1)/2)
    }
    leftChild(index){
        return (2*index+1)
    }
    rightChild(index){
        return (2*index+2)
    }
    swap(a,b){
        var temp=this.heap[a]
        this.heap[a]=this.heap[b]
        this.heap[b]=temp
    }
    add(element){
        this.heap.push(element)
        index=this.heap.length-1
        parent1=this.parent(index)
        while(this.heap(parent1) && this.heap[parent1]<this.heap[index]){
            swap(parent1,index)
            index=this.parent(index)
            parent1=this.parent(index)


        }

    }
    delete(){
        var item=this.heap.shift()
        this.heap.unshift(this.heap.pop())
        let leftChild=this.leftChild(index)
        let rightChild=this.rightChild(index)
        index=0
        while(this.heap(leftChild) && this.heap[leftChild]<this.heap[index] || this.heap[rightChild]<this.heap[index]){
            min=leftChild
            if(this.heap(rightChild) && this.heap[rightChild]<this.heap[min]){
                min=rightChild
            }
            this.swap(min,index)
            index=min
            leftChild=leftChild(min)
            rightChild=rightChild(min)
        }
        return item
    }
}