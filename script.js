let data = {
    "t-28474": {
        "title": "Apples",
        "description": "1kg, green",
        "status": "new"
    },
    "t-28475": {
        "title": "Bread",
        "description": "hlib i kava",
        "status": "new"
    },
    "t-28476": {
        "title": "Airan",
        "description": "bottles: 3",
        "status": "new"
    },
}

const tasksBlockNew = document.querySelector(".tasks-block_new");
const tasksBlockInProgress = document.querySelector(".tasks-block_in-progress");
const tasksBlockDone = document.querySelector(".tasks-block_done");

function genButton() {
    const f = document.createElement("footer");

    const s1 = document.createElement("span");
    s1.textContent = "new";

    const s2 = document.createElement("span");
    s2.textContent = "in progress";

    const s3 = document.createElement("span");
    s3.textContent = "done";

    f.append(s1, s2, s3);

    return f;

}
function clear() {
    tasksBlockNew.textContent = "";
    tasksBlockInProgress.textContent = "";
    tasksBlockDone.textContent = "";

}

function init() {
    // clear();
    // saveState();
    for (const dataId in data) {
        const t = document.createElement("div");
        t.classList.add("task");
        t.setAttribute("data-id", dataId);

        const h = document.createElement("h6");
        h.textContent = data[dataId].title;
        t.append(h);

        const p = document.createElement("p");
        p.textContent = data[dataId].description;
        t.append(p);

        t.append(genButton());

        if (data[dataId].status === "new") tasksBlockNew.append(t);
        if (data[dataId].status === "done") tasksBlockDone.append(t);
        if (data[dataId].status === "in progress") tasksBlockInProgress.append(t);

    }
}


document.querySelector(".tasks-grids").addEventListener("click", function (event) {
    console.log(event.target.nodeName);
    if (event.target.nodeName !== "SPAN") return;

    const dataId = event.target.parentElement.parentElement.getAttribute("data-id");
    console.log(dataId);

    data[dataId].status = event.target.textContent;
    init();

})

// function saveState(){
//     localStorage.setItem("tasks", JSON.stringify(data));

// }
// if (localStorage.getItem("tasks")) data=JSON.parse(localStorage.getItem("tasks"));

init();