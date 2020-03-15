


class Branch{
    constructor(){
        this.nodes=[];
        this.branch={};
        this.start=null;
        this.end=null;
    }

    addNode(node){
        this.nodes.push(node);
        let title=node.value;
        this.branch[title]=node
    }

    getNode(actor){
        return this.branch[actor]
    }

    setStart(actor){
        return this.start=this.branch[actor]
    }

    setEnd(actor){
        return this.end=this.branch[actor]
    }

    reset(){
        this.nodes.forEach(n=>{
            n.parent=null;
            n.checked=false;
        })
    }
}