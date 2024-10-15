let data = {
    "t-28474":{
        "title": "Apples",
        "description": "1kg, green",
        "status": "new"
    },
    "t-28475": {
        "title": "Bread",
        "description": "hlib i kava",
        "status": "done"
    },
    "t-28476":{
        "title": "Airan",
        "description": "bottles: 3",
        "status": "new"
    }
}

const tasksBlockNew=document.querySelector(".tasks-block_new");
const tasksBlockInProgress=document.querySelector(".tasks-block_in-progress");
const tasksBlockDone=document.querySelector(".tasks-block_done");

(function init(){
    for (const dataId in data){
        const t=document.createElement("div");
        t.classList.add("task");
        t.setAttribute("data-id",dataId);

        const h=document.createElement("h6");
        h.textContent=data[dataId].title;
        t.append(h);

        const p=document.createElement("p");
        p.textContent=data[dataId].description;
        t.append(p);

        if (data[dataId].status==="new") tasksBlockNew.append(t);

    }
})
();