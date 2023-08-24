class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(value){
        if(!this.adjacencyList[value]){
            this.adjacencyList[value]=new Set()
        }
    }
    addEdge(value1,value2){
        if(!this.adjacencyList[value1]){
            this.addVertex(value1)
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        if(!this.adjacencyList[value2]){
            this.addVertex(value2)
        }
        this.adjacencyList[value1].add(value2)
        this.adjacencyList[value2].add(value1)
    }
    hasEdge(value1,value2){
        return( this.adjacencyList[value1].has(value2)&&
        this.adjacencyList[value2].has(value1))
    }
    removeEdge(value1,value2){
        this.adjacencyList[value1].delete(value2)
        this.adjacencyList[value2].delete(value1)
    }


    display(){
        for(let value in this.adjacencyList){
            console.log(value + "=>" + [...this.adjacencyList[value]])
        }
    }
}
const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("B","c")
graph.removeEdge("C","C")
graph.display()
console.log(graph.hasEdge("A","c"))