document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const output = document.getElementById("output");

    const welcomeMessage = "Welcome to my portfolio! Type 'Let's Go!' to see what you can learn about today!";
    const commands = {
        "Let's Go!": function() {
            console.log("Let's Go! command received.");  // Debug log
            openMainInterfaceWindow();
        },
        clear: function() {
            output.innerHTML = "";
        },
        Bye: "Goodbye!"
    };

    function processCommand(command) {
        console.log("Processing command:", command);  // Debug log
        if (commands[command]) {
            if (typeof commands[command] === 'function') {
                commands[command]();
            } else {
                output.innerHTML += `<div class="prompt">user@portfolio:~$ ${command}</div><div>${commands[command]}</div>`;
            }
        } else {
            output.innerHTML += `<div class="prompt">user@portfolio:~$ ${command}</div><div>Command not found: ${command}</div>`;
        }
        output.scrollTop = output.scrollHeight;
    }

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const command = input.value.trim();
            console.log("Command entered:", command);  // Debug log
            if (command) {
                processCommand(command);
            }
            input.value = "";
        }
    });

    output.innerHTML = `<div>${welcomeMessage}</div>`;
});



function openMainInterfaceWindow() {
    console.log("Opening main interface window.");  // Debug log
    const newWindow = window.open("", "_blank", "width=800,height=600");
    if (!newWindow) {
        console.log("Failed to open a new window. Check your browser settings or pop-up blocker.");  // Debug log
        return;
    }
    newWindow.document.write(`
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Portfolio - Sections</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="notes-app">
                <div class="title-bar">
                    <div class="buttons">
                        <span class="close" onclick="window.close()"></span>
                        <span class="minimize"></span>
                        <span class="maximize"></span>
                    </div>
                    <div class="title">Portfolio</div>
                </div>
                <div class="sidebar">
                    <ul>
                        <li onclick="openSection('aboutMe')">About Me</li>
                        <li onclick="openSection('projects')">Projects</li>
                        <li onclick="openSection('education')">Education</li>
                        <li onclick="openSection('skills')">Skills</li>
                        <li onclick="openSection('experience')">Experience</li>
                        <li onclick="openSection('summary')">Summary</li>
                    </ul>
                </div>
                <div id="main-content" class="content">
                    <div class="section-squares">
                        <div class="square" onclick="openSection('aboutMe')">
                            <img src="aboutMe.jpg" alt="About Me">
                            <p>About Me</p>
                        </div>
                        <div class="square" onclick="openSection('projects')">
                            <img src="projects.jpg" alt="Projects">
                            <p>Projects</p>
                        </div>
                        <div class="square" onclick="openSection('education')">
                            <img src="education.jpg" alt="Education">
                            <p>Education</p>
                        </div>
                        <div class="square" onclick="openSection('skills')">
                            <img src="skills.jpg" alt="Skills">
                            <p>Skills</p>
                        </div>
                        <div class="square" onclick="openSection('experience')">
                            <img src="experience.jpg" alt="Experience">
                            <p>Experience</p>
                        </div>
                        <div class="square" onclick="openSection('summary')">
                            <img src="summary.jpg" alt="Summary">
                            <p>Summary</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);

    // Add CSS to the new window
    const style = newWindow.document.createElement('style');
    style.innerHTML = `
    body {
        font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        background-color: #f0f0f5;
        color: #333;
        margin: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .notes-app {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        width: 80%;
        max-width: 800px;
        height: 70%;
        display: flex;
    }

    .title-bar {
        background-color: #e8e8e8;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .title-bar .buttons {
        display: flex;
        gap: 5px;
    }

    .title-bar .buttons span {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .title-bar .buttons .close {
        background-color: #ff605c;
    }

    .title-bar .buttons .minimize {
        background-color: #ffbd44;
    }

    .title-bar .buttons .maximize {
        background-color: #00ca4e;
    }

    .title-bar .title {
        flex-grow: 1;
        text-align: center;
        font-weight: bold;
        color: #333;
    }

    .sidebar {
        background-color: #f0f0f5;
        padding: 20px;
        width: 200px;
    }

    .sidebar ul {
        list-style-type: none;
        padding: 0;
    }

    .sidebar ul li {
        padding: 10px;
        cursor: pointer;
    }

    .sidebar ul li:hover {
        background-color: #e8e8e8;
    }

    .content {
        flex-grow: 1;
        padding: 20px;
        overflow-y: auto;
        font-size: 16px;
        line-height: 1.5;
    }

    .section-squares {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .square {
        background-color: #f0f0f5;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        flex: 1 1 calc(33.333% - 20px);
        margin: 10px;
        padding: 20px;
        text-align: center;
        cursor: pointer;
    }

    .square img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .square p {
        margin-top: 10px;
        font-size: 16px;
    }
    `;
    newWindow.document.head.appendChild(style);

    const script = newWindow.document.createElement('script');
    script.innerHTML = `
    function openSection(section) {
        const content = {
            aboutMe: "I am [Your Name], a [Your Profession].",
            projects: "Here are some of my projects:\\n1. Project One\\n2. Project Two\\n3. Project Three",
            education: "I graduated from [Your University] with a degree in [Your Degree].",
            skills: "I have skills in:\\n- Programming languages: Python, JavaScript, etc.\\n- Tools and technologies: Git, Docker, etc.",
            experience: "I have worked at [Your Company] as a [Your Role] for [X] years.",
            summary: "I am a dedicated professional with a passion for [Your Passion]."
        };

        console.log("Opening section:", section);  // Debug log

        const sectionWindow = window.open("", "_blank", "width=600,height=400");
        sectionWindow.document.write(\`
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Portfolio - \${section}</title>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <div class="notes-app">
                    <div class="title-bar">
                        <div class="buttons">
                            <span class="close" onclick="window.close()"></span>
                            <span class="minimize"></span>
                            <span class="maximize"></span>
                        </div>
                        <div class="title">\${section}</div>
                    </div>
                    <div id="main-content" class="content">
                        \${content[section] || "Section not found."}
                    </div>
                </div>
            </body>
            </html>
        \`);

        const sectionStyle = sectionWindow.document.createElement('style');
        sectionStyle.innerHTML = \`
        body {
            font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f0f0f5;
            color: #333;
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .notes-app {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            width: 80%;
            max-width: 600px;
            height: 70%;
            display: flex;
            flex-direction: column;
        }

        .title-bar {
            background-color: #e8e8e8;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px 10px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .title-bar .buttons {
            display: flex;
            gap: 5px;
        }

        .title-bar .buttons span {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }

        .title-bar .buttons .close {
            background-color: #ff605c;
        }

        .title-bar .buttons .minimize {
            background-color: #ffbd44;
        }

        .title-bar .buttons .maximize {
            background-color: #00ca4e;
        }

        .title-bar .title {
            flex-grow: 1;
            text-align: center;
            font-weight: bold;
            color: #333;
        }

        .content {
            flex-grow: 1;
            padding: 20px;
            overflow-y: auto;
            font-size: 16px;
            line-height: 1.5;
        }
        \`;
        sectionWindow.document.head.appendChild(sectionStyle);
    }
    `;
    newWindow.document.head.appendChild(script);
}
function openSection(section) {
    const content = {
        aboutMe: "I am [Your Name], a [Your Profession].",
        projects: "Here are some of my projects:\n1. Project One\n2. Project Two\n3. Project Three",
        education: "I graduated from [Your University] with a degree in [Your Degree].",
        skills: "I have skills in:\n- Programming languages: Python, JavaScript, etc.\n- Tools and technologies: Git, Docker, etc.",
        experience: "I have worked at [Your Company] as a [Your Role] for [X] years.",
        summary: "I am a dedicated professional with a passion for [Your Passion]."
    };

    console.log("Opening section:", section);  // Debug log

    const sectionWindow = window.open("", "_blank", "width=600,height=400");
    sectionWindow.document.write(`
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Portfolio - ${section}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="notes-app">
                <div class="title-bar">
                    <div class="buttons">
                        <span class="close" onclick="window.close()"></span>
                        <span class="minimize"></span>
                        <span class="maximize"></span>
                    </div>
                    <div class="title">${section}</div>
                </div>
                <div id="main-content" class="content">
                    ${content[section] || "Section not found."}
                </div>
            </div>
        </body>
        </html>
    `);

    const sectionStyle = sectionWindow.document.createElement('style');
    sectionStyle.innerHTML = `
    body {
        font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        background-color: #f0f0f5;
        color: #333;
        margin: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .notes-app {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        width: 80%;
        max-width: 600px;
        height: 70%;
        display: flex;
        flex-direction: column;
    }

    .title-bar {
        background-color: #e8e8e8;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .title-bar .buttons {
        display: flex;
        gap: 5px;
    }

    .title-bar .buttons span {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .title-bar .buttons .close {
        background-color: #ff605c;
    }

    .title-bar .buttons .minimize {
        background-color: #ffbd44;
    }

    .title-bar .buttons .maximize {
        background-color: #00ca4e;
    }

    .title-bar .title {
        flex-grow: 1;
        text-align: center;
        font-weight: bold;
        color: #333;
    }

    .content {
        flex-grow: 1;
        padding: 20px;
        overflow-y: auto;
        font-size: 16px;
        line-height: 1.5;
    }
    `;
    sectionWindow.document.head.appendChild(sectionStyle);
}
