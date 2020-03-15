


class Node{
    constructor(value){
        this.value=value;
        this.checked=false;
        this.parent=null;
        this.edges=[];
    }

    addEdge(neighbor){
        this.edges.push(neighbor);
        neighbor.edges.push(this)
    }
}