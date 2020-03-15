
var data=[]
let branch=new Branch()
let actorsDOM=document.querySelector("#actors")
var htmlSelect=""

console.log(branch)

fetch('bacon.json')
.then(res=>res.json())
.then(res=>{
    console.log(res.movies)
    data=res.movies


    for(let i=0;i<data.length;i++){
        let title=data[i].title;
        let titleNode=new Node(title);
        branch.addNode(titleNode);
    
        for(let j=0;j<data[i].cast.length;j++){
            let actor=data[i].cast[j];

            let actorNode=branch.getNode(actor)

            if(actorNode == undefined){
                htmlSelect +=`<option value='${actor}'>${actor}</option>`
              actorNode=new Node(actor)
            }
        branch.addNode(actorNode);
        titleNode.addEdge(actorNode);
       
    }         
            }
    actorsDOM.innerHTML=htmlSelect;
    console.log(branch)

 
})



function bfs(actor){
    branch.reset()
    let start=branch.setStart(actor)
    let end=branch.setEnd("Kevin Bacon");

    let queue=[];
    start.checked=true;
    queue.push(start)


    while(queue.length > 0){
        current=queue.shift();

        if(current == end){
            console.log("Found the node")
            console.log(current)
            break;
           
        }
        let edges=current.edges;
        for(let i=0;i<edges.length;i++){
            let neighbor=edges[i];
            
            if(!neighbor.checked){
                neighbor.checked=true;
                neighbor.parent=current;
                queue.push(neighbor)
            }
        }
    }
    console.log("No nodes found!")


    let path=[];
    path.push(end);
    let next=branch.end.parent;
    while(next != null){
        path.push(next);
        next=next.parent
    }
    console.log(path)
    var html="";

    for(let i=path.length-1;i>=0;i--){
        html += path[i].value;
        if(i != 0){
            html += "--> "
        }
    }
    console.log('hey!!')
    document.querySelector(".output").innerHTML=html

}


actorsDOM.onchange=()=>bfs(actorsDOM.value);{console.log(actorsDOM.value)}

