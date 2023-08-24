class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BST{
    constructor(){
        this.root=null
    }
    Insert(value){
        const newNode=new Node(value)
        if(this.root===null){
            this.root=newNode
            return
        }
        let temp=this.root
        while(true){
            if(value<temp.value){
                if(temp.left===null){
                    temp.left=newNode
                    return
                }
                else{
                    temp=temp.left
                }
            }
            else{
                if(temp.right===null){
                    temp.right=newNode
                    return
                }
                else{
                    temp=temp.right
                }
            }
        }
    }
    search(value){
        if(this.root===null){
            return false
        }
        let temp=this.root
        while(true){
            if(temp.value===value){
                return true
            }
            if(temp.value>value){
                if(temp.left===null){
                    return false
                }
                else{
                    temp=temp.left
                }
            }
            else if(data > temp.data){
                if(temp.right===null){
                    return false
                }
                else{
                    temp=temp.right
                }
            }
            else{
                return true
            }
        }
    }
    preOrder(){
        this.HelperPre(this.root)
    }
    HelperPre(newNode){
        if(newNode!==null){
            console.log(newNode.value)
            this.HelperPre(newNode.left)
            this.HelperPre(newNode.right)
        }
    }
    inOrder(){
        this.HelperIn(this.root)
    }
    HelperIn(newNode){
        if(newNode!==null){
            this.HelperIn(newNode.left)
            console.log(newNode.value)
            this.HelperIn(newNode.right)
        }
    }
    postOrder(){
        this.HelperPost(this.root)
    }
    HelperPost(newNode){
        if(newNode!==null){
            this.HelperPost(newNode.left)
            this.HelperPost(newNode.right)
            console.log(newNode.value)
        }
    }
    isBTree(n){
        let arr=[]
        let val=arr[0]
        this.Helper(this.root,arr)
        for(let i of arr){
            if(val>i){
                return false
            }
        }return true
    }
    Helper(newNode,arr){
        if(newNode!==null){
            this.Helper(newNode.left,arr)
            arr.push(newNode.value)
            this.Helper(newNode.right,arr)
        }
    }
    remove(value){
        if(this.root===null){
            
        }
    }
}
const bst=new BST()

bst.Insert(10)
bst.Insert(5)
bst.Insert(15)

 
console.log(bst.search(10))
bst.preOrder()
bst.inOrder()
bst.postOrder()

let n
console.log(bst.isBTree(n))