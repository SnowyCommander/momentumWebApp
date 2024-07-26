document
  .getElementById("continueButton")
  .addEventListener("click", function () {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (name) {
      document.getElementById(
        "greeting"
      ).textContent = `Good afternoon, ${name}.`;
      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "block";
    } else {
      errorMessage.textContent = "Please let us know how to address you.";
    }
  });

document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const task = e.target.value.trim();
    if (task) {
      const taskItem = document.createElement("div");
      taskItem.className = "taskItem";
      taskItem.innerHTML = `
                <input type="checkbox" />
                <label>${task}</label>
                <span class="setting"> (settings)</span>
            `;
      document.getElementById("taskList").appendChild(taskItem);
      e.target.value = "";
    }
  }
});
