// Javascript DOM Assignment

// Create a To-do list application where a user can add and remove tasks.
// When a user clicks on a specific task, let them see further details of the task.
function addActivity(){
    activity = prompt("Enter an Activity:")
    ol = document.getElementsByTagName("ol")
    let li = document.createElement("li")
    let label = document.createElement("label")
    let input = document.createElement("input")
    input.type = "checkbox"
    let br = document.createElement("br")
    label.appendChild(input)
    label.append(activity) 
    li.appendChild(label)
    li.appendChild(br)
    li.appendChild(br)
    li.appendChild(br)
    ol[0].appendChild(li)
}

function clearActivityList(){
    let parent = document.getElementById("todo")
    let child = parent.getElementsByTagName("li")[0]
    parent.removeChild(child)
}

