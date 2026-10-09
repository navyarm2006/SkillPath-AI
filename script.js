
const form = document.getElementById("profileForm");
const profileScreen = document.getElementById("profileScreen");
const dashboardScreen = document.getElementById("dashboardScreen");
const backButton = document.getElementById("backButton");

const result = document.getElementById("result");
const progressSection = document.getElementById("progressSection");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const taskList = document.getElementById("taskList");

const recommendationSection = document.getElementById("recommendationSection");
const recommendationIntro = document.getElementById("recommendationIntro");
const recommendationList = document.getElementById("recommendationList");


const resourcesSection = document.getElementById("resourcesSection");
const resourcesIntro = document.getElementById("resourcesIntro");
const resourcesList = document.getElementById("resourcesList");

const practiceSection = document.getElementById("practiceSection");

const openResourcesButton = document.getElementById("openResourcesButton");
const openPracticeButton = document.getElementById("openPracticeButton");

const backToRecommendationsFromResources =
    document.getElementById("backToRecommendationsFromResources");

const backToRecommendationsFromPractice =
    document.getElementById("backToRecommendationsFromPractice");



    
function showLearningSection(sectionToShow) {
    recommendationSection.hidden = sectionToShow !== null;
    resourcesSection.hidden = sectionToShow !== resourcesSection;
    practiceSection.hidden = sectionToShow !== practiceSection;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

openResourcesButton.addEventListener("click", function () {
    window.location.href = "learning.html";
});

openPracticeButton.addEventListener("click", function () {
    window.location.href = "learning.html";
});

backToRecommendationsFromResources.addEventListener("click", function () {
    showLearningSection(null);
});

backToRecommendationsFromPractice.addEventListener("click", function () {
    showLearningSection(null);
});






openPracticeButton.addEventListener("click", function () {
    openPracticeButton.addEventListener("click", function () {
    window.location.href = "learning.html";
})});
("click", function () {
    showLearningSection(resourcesSection);
});

openPracticeButton.addEventListener("click", function () {
    showLearningSection(practiceSection);
});

backToRecommendationsFromResources.addEventListener("click", function () {
    showLearningSection(null);
});

backToRecommendationsFromPractice.addEventListener("click", function () {
    showLearningSection(null);
});


const freeResources = {
    "python": {
        title: "Python for Beginners",
        description: "Learn Python syntax, variables, loops, and functions.",
        source: "Kaggle Learn",
        url: "https://www.kaggle.com/learn/python"
    },
    "sql": {
        title: "SQL for Beginners",
        description: "Practice database queries, filtering, and sorting.",
        source: "SQLBolt",
        url: "https://sqlbolt.com/"
    },
    "excel": {
        title: "Excel for Data Analysis",
        description: "Learn spreadsheet formulas and data handling.",
        source: "Microsoft Excel Help",
        url: "https://support.microsoft.com/excel"
    },
    "pandas": {
        title: "Learn Pandas",
        description: "Practice working with tables and datasets in Python.",
        source: "Kaggle Learn",
        url: "https://www.kaggle.com/learn/pandas"
    },
    "numpy": {
        title: "Learn NumPy",
        description: "Understand arrays and numerical operations.",
        source: "NumPy Tutorials",
        url: "https://numpy.org/learn/"
    },
    "machine learning": {
        title: "Intro to Machine Learning",
        description: "Learn model training and basic prediction concepts.",
        source: "Kaggle Learn",
        url: "https://www.kaggle.com/learn/intro-to-machine-learning"
    },
    "statistics": {
        title: "Statistics Fundamentals",
        description: "Learn statistical concepts for analysing data.",
        source: "Khan Academy",
        url: "https://www.khanacademy.org/math/statistics-probability"
    },
    "git": {
        title: "Git Version Control",
        description: "Learn how to track code changes and use repositories.",
        source: "Git Documentation",
        url: "https://git-scm.com/doc"
    },
    "flask": {
        title: "Flask Web Development",
        description: "Learn to build web apps using Python.",
        source: "Flask Documentation",
        url: "https://flask.palletsprojects.com/en/stable/tutorial/"
    },
    "apis": {
        title: "Learn About APIs",
        description: "Understand how applications communicate with APIs.",
        source: "MDN Web Docs",
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction"
    }
};


const practiceQuestion = document.getElementById("practiceQuestion");
const practiceOptions = document.getElementById("practiceOptions");
const checkAnswerButton = document.getElementById("checkAnswerButton");
const practiceFeedback = document.getElementById("practiceFeedback");

let currentQuestionIndex = 0;
let selectedAnswer = null;
let correctAnswers = 0;
let currentQuestions = [];
let answerChecked = false;

const practiceQuestions = {
    "ml engineer": [
        {
            question: "What is NumPy mainly used for?",
            options: [
                "Building websites",
                "Numerical calculations and arrays",
                "Sending emails",
                "Editing videos"
            ],
            answer: 1,
            explanation: "NumPy provides efficient arrays and numerical computing tools."
        },
        {
            question: "Which library is commonly used for machine learning?",
            options: ["Flask", "BeautifulSoup", "Scikit-learn", "PowerPoint"],
            answer: 2,
            explanation: "Scikit-learn provides tools to train and evaluate machine learning models."
        }
    ],

    "data analyst": [
        {
            question: "What is SQL mainly used for?",
            options: [
                "Querying and managing databases",
                "Designing posters",
                "Editing videos",
                "Creating animations"
            ],
            answer: 0,
            explanation: "SQL helps retrieve, filter, and manage data in relational databases."
        },
        {
            question: "Which Pandas function displays the first few rows?",
            options: ["show()", "head()", "start()", "firstrow()"],
            answer: 1,
            explanation: "DataFrame.head() displays the first five rows by default."
        }
    ],

    "python developer": [
        {
            question: "Which keyword defines a function in Python?",
            options: ["function", "define", "def", "func"],
            answer: 2,
            explanation: "Python uses the def keyword to define a function."
        },
        {
            question: "Which tool tracks code changes?",
            options: ["Git", "Excel", "NumPy", "PowerPoint"],
            answer: 0,
            explanation: "Git tracks code changes and supports version control."
        }
    ]
};

// Display a practice question.
function showPracticeQuestion() {
    practiceOptions.replaceChildren();
    practiceFeedback.textContent = "";
    selectedAnswer = null;
    answerChecked = false;

    if (currentQuestionIndex >= currentQuestions.length) {
        practiceQuestion.textContent = "Practice complete! 🎉";
        checkAnswerButton.hidden = true;

        practiceFeedback.textContent =
            `Your score: ${correctAnswers} out of ${currentQuestions.length}`;

        return;
    }

    const question = currentQuestions[currentQuestionIndex];

    practiceQuestion.textContent =
        `Question ${currentQuestionIndex + 1}: ${question.question}`;

    question.options.forEach((option, index) => {
        const label = document.createElement("label");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "practiceAnswer";
        radio.value = index;

        radio.addEventListener("change", function () {
            selectedAnswer = index;
        });

        label.appendChild(radio);
        label.appendChild(document.createTextNode(" " + option));

        practiceOptions.appendChild(label);
    });

    checkAnswerButton.hidden = false;
    checkAnswerButton.textContent = "Check Answer";
}

// Check answers and move to the next question.
checkAnswerButton.addEventListener("click", function () {
    if (currentQuestionIndex >= currentQuestions.length) {
        return;
    }

    if (answerChecked) {
        currentQuestionIndex++;
        showPracticeQuestion();
        return;
    }

    if (selectedAnswer === null) {
        practiceFeedback.textContent = "Please select an answer first.";
        return;
    }

    const question = currentQuestions[currentQuestionIndex];

    if (selectedAnswer === question.answer) {
        correctAnswers++;

        practiceFeedback.textContent =
            "Correct! Well done! 🎉 " + question.explanation;
    } else {
        practiceFeedback.textContent =
            "Not quite! The correct answer is: " +
            question.options[question.answer] +
            ". " + question.explanation;
    }

    answerChecked = true;
    checkAnswerButton.textContent = "Next Question";
});

// Save daily task progress.
const progressKey = "skillpath_completed_tasks";

function updateProgress() {
    const checkboxes = taskList.querySelectorAll('input[type="checkbox"]');

    const completed = taskList.querySelectorAll(
        'input[type="checkbox"]:checked'
    ).length;

    const total = checkboxes.length;

    const percentage = total
        ? Math.round((completed / total) * 100)
        : 0;

    progressBar.max = total || 7;
    progressBar.value = completed;

    progressText.textContent =
        `${completed} of ${total} days completed • ${percentage}% complete`;

    localStorage.setItem(
        progressKey,
        JSON.stringify(Array.from(checkboxes, checkbox => checkbox.checked))
    );
}

// Return to the profile page.
backButton.addEventListener("click", function () {
    dashboardScreen.hidden = true;
    profileScreen.hidden = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Create the student's personalized learning path.
form.addEventListener("submit", async function (event) {
    event.preventDefault();

    result.hidden = false;
    result.textContent = "Creating your learning path...";
    progressSection.hidden = true;
    taskList.replaceChildren();

    recommendationList.replaceChildren();
    recommendationIntro.textContent = "Preparing your recommendations...";

    const profile = {
        name: document.getElementById("studentName").value.trim(),
        career: document.getElementById("career").value,
        skills: document.getElementById("skills").value.trim(),
        hours: document.getElementById("hours").value
    };

    try {
        const response = await fetch("/api/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.error || "Unable to create your learning path."
            );
        }

        // Display the welcome message and career information.
        result.replaceChildren();

        const heading = document.createElement("h2");
        heading.textContent = `Welcome, ${data.name}! 🎉`;
        result.appendChild(heading);

        const career = document.createElement("p");
        career.textContent = `Target career: ${data.career}`;
        result.appendChild(career);

        // Display skills that the student needs to learn.
        const skillsHeading = document.createElement("h3");
        skillsHeading.textContent = "Skills You Need to Learn";
        result.appendChild(skillsHeading);

        const skillsList = document.createElement("ul");

        const missingSkills = data.missing_skills || [];

        const skills = missingSkills.length
            ? missingSkills
            : ["All required skills listed are covered!"];

        skills.forEach(skill => {
            const item = document.createElement("li");
            item.textContent = skill;
            skillsList.appendChild(item);
        });

        result.appendChild(skillsList);

        // Display the seven-day roadmap.
        const roadmapHeading = document.createElement("h3");
        roadmapHeading.textContent = "Your 7-Day Roadmap";
        result.appendChild(roadmapHeading);

        data.roadmap.forEach(day => {
            const item = document.createElement("p");

            item.textContent =
                `Day ${day.day}: ${day.skill} — ${day.hours} hour(s). ${day.task}`;

            result.appendChild(item);
        });

        // Create daily task checkboxes.
        data.roadmap.forEach(day => {
            const label = document.createElement("label");

            label.style.display = "block";
            label.style.margin = "10px 0";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.style.marginRight = "8px";

            checkbox.addEventListener("change", updateProgress);

            label.appendChild(checkbox);
            label.appendChild(
                document.createTextNode(`Day ${day.day}: ${day.skill}`)
            );

            taskList.appendChild(label);
        });

        // Restore previously saved task progress.
        let savedTasks = [];

        try {
            savedTasks = JSON.parse(
                localStorage.getItem(progressKey) || "[]"
            );
        } catch (storageError) {
            savedTasks = [];
        }

        const checkboxes = taskList.querySelectorAll(
            'input[type="checkbox"]'
        );

        checkboxes.forEach((checkbox, index) => {
            checkbox.checked = savedTasks[index] === true;
        });

        updateProgress();

        // Recommend missing skills in career-specific priority order.
        const prioritySkills = {
            "ml engineer": [
                "python",
                "numpy",
                "pandas",
                "machine learning",
                "sql"
            ],
            "data analyst": [
                "sql",
                "excel",
                "python",
                "pandas",
                "statistics"
            ],
            "python developer": [
                "python",
                "git",
                "sql",
                "flask",
                "apis"
            ]
        };

        const careerKey = profile.career.trim().toLowerCase();

        const skillOrder =
            prioritySkills[careerKey] || prioritySkills["ml engineer"];

        const recommendations = [...missingSkills].sort((a, b) => {
            const aIndex = skillOrder.indexOf(a.toLowerCase());
            const bIndex = skillOrder.indexOf(b.toLowerCase());

            const aPriority = aIndex === -1 ? skillOrder.length : aIndex;
            const bPriority = bIndex === -1 ? skillOrder.length : bIndex;

            return aPriority - bPriority;
        });

        recommendationList.replaceChildren();

        if (recommendations.length === 0) {
            recommendationIntro.textContent =
                "Great work! You have covered all the required skills in our current list.";
        } else {
            recommendationIntro.textContent =
                "Start with these skills in priority order for your chosen career:";

            recommendations.forEach((skill, index) => {
                const card = document.createElement("p");

                card.textContent =
                    `${index + 1}. ${skill} — ${
                        index === 0
                            ? "Start here first!"
                            : "Learn after the previous skill."
                    }`;

                recommendationList.appendChild(card);
            });
        }

        
        // Display free learning resources for missing skills.
        resourcesList.replaceChildren();

        if (recommendations.length === 0) {
            resourcesIntro.textContent =
                "Great work! Explore these resources to strengthen your skills.";
        } else {
            resourcesIntro.textContent =
                "Start learning with these free resources for your missing skills:";

            recommendations.forEach(skill => {
                const resource = freeResources[skill.toLowerCase()];

                if (!resource) {
                    return;
                }

                const card = document.createElement("div");
                card.className = "resource-card";

                const title = document.createElement("h4");
                title.textContent = resource.title;

                const description = document.createElement("p");
                description.textContent = resource.description;

                const source = document.createElement("p");
                source.textContent = "Resource: " + resource.source;

                const link = document.createElement("a");
                link.href = resource.url;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.textContent = "Start Learning Free ↗";

                card.appendChild(title);
                card.appendChild(description);
                card.appendChild(source);
                card.appendChild(link);

                resourcesList.appendChild(card);
            });

            if (!resourcesList.children.length) {
                resourcesIntro.textContent =
                    "We don't have a matching resource for these skills yet.";
            }
        }

        resourcesSection.hidden = true;
        practiceSection.hidden = true;

        // Load the quiz for the selected career.
        currentQuestions =
            practiceQuestions[careerKey] || practiceQuestions["ml engineer"];

        currentQuestionIndex = 0;
        correctAnswers = 0;

        showPracticeQuestion();

        // Show the completed dashboard.
        progressSection.hidden = false;
        recommendationSection.hidden = false;
        result.hidden = false;

        profileScreen.hidden = true;
        dashboardScreen.hidden = false;

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
        result.replaceChildren();

        const message = document.createElement("p");
        message.textContent =
            `Error: ${error.message}. Please check that the Flask server is running.`;

        result.appendChild(message);

        profileScreen.hidden = true;
        dashboardScreen.hidden = false;

        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});
