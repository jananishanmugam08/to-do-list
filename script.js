function addTask() {
    let input = document.getElementById('taskInput').value.trim();
    if(input === "") return;

    let li = document.createElement('li');
    li.textContent = input;

    // Click to mark done
    li.onclick = () => li.classList.toggle('done');

    document.getElementById('taskList').appendChild(li);
    document.getElementById('taskInput').value = "";
}