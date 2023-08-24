class Node{
    constructor(){
        this.children={}
        this.isWordEnd=false
    }
}
class trie{
    constructor(){
        this.root=new Node()
    }

Insert(word){
    let temp=this.root
    for(let i=0;i<word.length;i++){
        let charToInsert=word[i]
        if(!(temp.children[charToInsert])){
            temp.children[charToInsert]= Node
        }
        temp=temp.children[charToInsert]
    }
    temp.isWordEnd=true
}
contain(word){
    let temp=this.root
    for(let i=0;i<word.length;i++){
        let charToFind=word[i]
        if(!(temp.children[charToFind])){
            return false
        }
        temp=temp.children[charToFind]
    }
    temp.isWordEnd=true
}
}
const tri=new trie()
tri.Insert("cat")
tri.Insert("b")
tri.Insert("c")

console.log(tri.contain("cat"))