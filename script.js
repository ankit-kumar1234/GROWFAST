document.addEventListener('DOMContentLoaded', function () {

    // Get references to the buttons and task container

    const ytSubscriberBtn = document.getElementById("yt-subscriber");

    const ytLikesBtn = document.getElementById("yt-likes");

    const igFollowersBtn = document.getElementById("ig-followers");

    const igLikesBtn = document.getElementById("ig-likes");
  
  const igCommentBtn = document.getElementById("ig-comment");

    const earnClickBtn = document.getElementById("earn-click");

    const taskContainer = document.getElementById("task-container");

    // Task data for each button click

    const taskData = {

        "yt-subscriber": [

            { text: "Subscribe on YouTube", link: "https://youtube.com/@prime-time_ankit?si=6q8ZcUQxUSW5bF71" },

            { text: "Like a YouTube Video", link: "https://youtube.com/shorts/ik4oETNfCvE?si=HgDpR5gVCArOsye9" }

        ],

        "yt-likes": [

            { text: "Like on YouTube", link: "https://youtube.com/shorts/ik4oETNfCvE?si=HgDpR5gVCArOsye9" }

        ],

        "ig-followers": [

            { text: "Follow on Instagram", link: "https://www.instagram.com/cations___ankit?igsh=bXhlaWh1amRpMjhw" }

        ],

        "ig-likes": [

            { text: "Like on Instagram", link: "https://www.instagram.com/reel/C1WmpZSJgFl/?igsh=ZDgwbW85eW5zeWM0" }

        ],

        "ig-comment": [

            { text: "Comment on Instagram", link: "https://www.instagram.com/reel/C1WmpZSJgFl/?igsh=ZDgwbW85eW5zeWM0" }

        ],

        "earn-click": [

            { text: "Earn by Clicking", link: "https://some-earn-link.com" }

        ]

    };

    // Function to display tasks
  function displayTasks(tasks) {

        taskContainer.innerHTML = ""; // Clear any existing tasks

        tasks.forEach((task) => {

            const taskElement = document.createElement("div");

            taskElement.classList.add("task");

            const taskLink = document.createElement("a");

            taskLink.href = task.link;

            taskLink.textContent = task.text;

            taskLink.target = "_blank"; // Open link in a new tab

            taskElement.appendChild(taskLink);

            taskContainer.appendChild(taskElement);

        });

    }

    // Add event listeners to buttons

    ytSubscriberBtn.addEventListener("click", () => displayTasks(taskData["yt-subscriber"]));

    ytLikesBtn.addEventListener("click", () => displayTasks(taskData["yt-likes"]));

    igFollowersBtn.addEventListener("click", () => displayTasks(taskData["ig-followers"]));

    igLikesBtn.addEventListener("click", () => displayTasks(taskData["ig-likes"]));

    igCommentBtn.addEventListener("click", () => displayTasks(taskData["ig-comment"]));

    earnClickBtn.addEventListener("click", () => displayTasks(taskData["earn-click"]));

});