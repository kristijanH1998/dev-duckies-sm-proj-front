# DuckPond - Social Media Application (Frontend)
DuckPond - internship group project for Bay Valley Tech

## Table of Contents
- [Description](#description)
- [How to Run the Project](#how-to-run-the-project)
- [How to Use the Project](#how-to-use-the-project)
- [Developer Log, Wireframe](#developer-log-wireframe)

## Description
#### Overview and Technologies used
* Full-Stack social network application modeled on existing platforms like Twitter and Instagram
* DuckPond is an example of a 3-tier MERN (MongoDB, Express, React, Node.js) full-stack architecture 
* This repository stores backend server-side logic and database access code for the DuckPond project
* Users can create new accounts on DuckPond, and sign in at any time with valid credentials. 
* Every user has a Profile which they can update at any time with new personal information, such as a profile image, biography, country of residence, etc.
* The main page of DuckPond is a Feed page that holds all the active posts from all users who are registered to the social network. Feed page provides all the typical social media features, from liking and commenting on other people's posts, to deleting or editing one's own posts (not those from other users however)
* Furthermore, users can make new posts, search for other users on the network, change the app theme, sign out, and also delete their accounts if they so decide
* DuckPond is a responsive application, and its interface can be accessed from both a desktop machine and a mobile phone
* Code for this project was written in JavaScript, HTML, and CSS languages
* The technology stack utilized for this project was MERN (MongoDB, Express, React, and Node.js). This set of technologies was chosen because of its high scalability, ease of application management, great flexibility of Node.js, and feasibility of the MERN stack for developing medium-sized projects in a rapid fashion. MongoDB is a NoSQL database, and my team decided it would be best for this project due to its scalability, flexibility, cost-effectiveness, and intuitiveness of the way data is stored in a database
* React was determined as the best frontend library for the project thanks to the speed of development in it, its reusable components principle, and how easy it makes creating dynamic web applications
* The editor used for the project was Visual Studio Code, version control was done with Git, Figma and Whimsical were used for visual outlines (wireframes) and flowcharts 
* Bulma was our CSS framework of choice, as it is lightweight, simple to learn and use, and highly browser-compatible
* Both Insomnia and Postman were utilized for API endpoint testing (on the backend). However, we decided to make our own API testing tool that would support automated testing, and we developed it in Python using the pytest framework. The repository of this automated testing tool written in Python can be accessed [here](https://github.com/kristijanH1998/ddsm-backend-testing-tool.git)
* Hackolade was employed for making data models, Entity Relationship (ER) diagrams, and schema designs for collections and documents of our MongoDB database
* To connect frontend layer of the application to backend logic, we utilized Axios API for sending HTTP requests to the backend server
* Font Awesome toolkit was used for fonts and icons on the application's website (frontend)
* The repository of the frontend part of the project can be found [here](https://github.com/kristijanH1998/dev-duckies-sm-proj-front.git)      
* An extra step that has also been taken was containerization of the project with Docker, to achieve OS-level virtualization and make it easier for end users to test DuckPond without having to install a lot of environment dependencies, packages, libraries, etc.

#### Challenges faced during development
* Prior to starting this project, I was not very much experienced in backend development and using MERN technology stack, more specifically using Express as server-side framework, Node as a JavaScript runtime environment (server platform), and MongoDB as database. I only had knowledge of React for frontend development. Furthermore, MongoDB is a NoSQL database system, and before this project I only worked in SQL-type databases and database management systems for those (I had experience with MySQL). The tools used for backend development in MERN stack, like MongoDB Compass, API test tools (Insomnia, Postman), and Hackolade were new to me as well. Therefore, I needed several weeks of both research and hands-on practice to familiarize myself with this software stack, but I managed to catch up pretty fast with the rest of the team
* The integration of the frontend code to the backend side of the application was by far the most time-consuming and difficult phase of building DuckPond, as it exposed bugs in both parts of the project that were previously not detected nor found to possibly cause issues in the future. This meant going back to backend code and making changes to it (introducing new endpoints or editing existing ones, fixing errors with data retrieved by endpoints, etc.), and sometimes editing and upgrading already finished and tested frontend code when it would be missing certain elements or React components
* Axios library used for sending HTTP requests from the frontend to the backend server was initally causing CORS errors and failed to fetch data from the database. This issue required several days of research and debugging followed by several days of trial-and-error attempts to make all endpoint types return desired data from the database
* Forgot Password functionality has not yet been implemented due to Mailgun API and Gmail API not producing expected results, since these solutions required both the sender and recipient of email messages to change certain email account security settings. Gmail did not work as desired with Nodemailer module for Node.js. These problems caused our application to, as of the time of writing this description, be missing Forgot Password service for resetting user password       

#### Features to be implemented in the future
* DuckPond would be a better social media app solution if it had a digital storage area for messages (Inbox), enabling users to receive messages from and send messages to other users. This is a feature I hope to work on in the future
* Forgot Password functionality with password reset option would improve DuckPond's user experience as it would allow them to reset their password in case they lost/forgot it. This would require being able to securely send email messages to users with confirmation code and potentially other confidential information. There are numerous solutions for this in existence on the Web, but all attempts so far failed to achieve smooth, fast, and secure password reset process. I hope to implement this in the future
* DuckPond exhibits some minor CSS design bugs on the mobile phone screen view (for example, trash button and edit button on Post component are not positioned correctly), which will need to be fixed going forward
* Hosting DuckPond on AWS Cloud would be a great addition to the project, since it would allow anybody interested in testing this application to simply run it in their browser without having to install all the packages, dependencies, tools, and other components for running project files

#### Motivation
* I was assigned this project while participating in the Bay Valley Tech's internship program, and I was looking forward to it because I needed more experience in full-stack application development. I also wanted to add new technologies to my portfolio stack, like MongoDB, Express, Node.js, Bulma, Postman, and others, and this project was a great opportunity for me to learn them

#### Things I learned
* This almost 3 months long project taught me that good methodology, team organization, and effective leadership are crucial components of any software engineering process. At times our team struggled with these factors, and it resulted in longer development time, harder debugging period and integration process requiring longer time to finish than initially expected
* I learned that even if one is not very familiar with certain set of technologies, they can still be productive in a team project that requires knowledge of those technologies if they put enough effort in learning them by both reading documentation and other study materials, and being willing to immerse themselves in practical work even if initial attempts are filled with setbacks. The most important thing is to never give up, learn from mistakes, and keep trying without thinking about results
* Lastly, I realized that medium to large scale software projects like DuckPond are very time consuming and in order to be completed within a couple of months, they should be performed by teams of developers and engineers. The same goes for any larger full-stack application. Perhaps such projects can be finished by a single person, but that process would take considerably more time than team work would require to deliver the product and finalize all the steps in the process

## How to Run the Project
* ***Important:*** Please first follow installation instructions for the Backend part of this project, which can be found [here](https://github.com/kristijanH1998/ddsm-back-end/tree/main?tab=readme-ov-file#backend-installation). Once that is completed, proceed to Frontend installation steps described below

### Frontend Installation 
Assuming that all the steps for installing the environment for Backend part of DuckPond have been finished, the user should already have VS Code, Node.js, Git, and extensions for HTML/CSS/JavaScript installed on their machine. Next, follow these steps:
1. Choose the location (directory) for the project's frontend repository, navigate to it with 'cd [directory-name]' terminal command and inside of it clone the project's frontend repository by running the command 'git clone https://github.com/kristijanH1998/dev-duckies-sm-proj-front.git' in your terminal
2. Open the newly cloned repository folder in VS Code and open the Bash shell (terminal). Navigate to 'dev-duckies-sm-proj' folder by running 'cd dev-duckies-sm-proj' in your terminal
3. Type and run the command 'npm i' to install all necessary packages (including software for Vite and React.js)
4. If you have not already started running the server for the Backend part of the project, do that now by opening Backend repository in another VS Code window (with its own Bash terminal instance), and run it by typing 'npm run dev' in the terminal
5. In the VS Code window for the Frontend part, type and run the command 'npm run dev' to start the local server for Vite with React. You should see this in your terminal:
![terminal after npm run dev (frontend)](/screenshots/npm-run-dev-result-frontend.jpg?raw=true "terminal after npm run dev (frontend)")
6. Copy the 'http://localhost:5173/' URL address and paste it in the address bar of your internet browser. You should see the DuckPond's Login page appear with entry fields for email and password:


## How to Use the Project
