class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class binarySerchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    Insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(this.left,newNode)
            }
        }
        else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(this.right,newNode)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }
        if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }
            else{
                return this.search(root.right,value)
            }
        
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
}
const bST=new binarySerchTree()

bST.Insert(10)
bST.Insert(5)
bST.Insert(15)
bST.Insert(3)
bST.Insert(7)  

console.log(bST.search(bST.root,10))
console.log(bST.search(bST.root,5))

console.log(bST.search(bST.root,15))
bST.preOrder(bST.root)

