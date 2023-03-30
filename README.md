# Notability Note Taker
A simple browser-based application that allows users to create and store notes/reminders.

![](https://img.shields.io/badge/License-MIT-yellow.svg)

A video illustrating this application's functionality may be viewed [here](https://youtu.be/HIwSCIZ18_U).

## Description
Notability is a simple and efficient web application that allows users to create, view, and delete notes. The application is built using Node.js and runs on an Express.js server. Notes are saved within a JSON file, and unique IDs are generated for each note using NodeJS' 'uuid' package. The frontend is designed using HTML, CSS (Bootstrap), and JavaScript. The application is hosted using Heroku, allowing users access to the application through their preferred web browser so that they may manage their notes.

The deployed application may be accessed [here](). 

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing) 
- [Tests](#tests) 
- [Questions](#questions)
- [License](#license)

## Screenshots 



## Installation
No installation is required for users to access the deployed application except for installation of a modern web browser (e.g., Chrome, Safari, Firefox, Edge).

Users who want to deploy the application locally may follow the following steps to get the app working on their local system:
1. Ensure that Node.js is installed on your system. You can check if you already have Node installed by typing the command `node -v` in your terminal. If node is not installed, please see the official node downloader [here](https://nodejs.org/en/download). 
2. Next, clone the repository to your local machine using the command: `git clone https://github.com/username/Note-Taker.git
`
3. Finally, navigate to the project directory and install the required dependencies by typing: `npm install` in the command line.

Upon completion of these steps, the application should be usable following the steps below.

## Usage
### Local Usage:
1. Start the application by running the following command in the project directory: `node server.js`.
2. Open your web browser and navigate to http://localhost:5001 to access the Note Taker application.
3. Follow steps 2-5 in the section below. <span style="color:yellow">The application deployed locally should share all functionality with the version hosted by Heroku.</span>

### Using Application Deployed using Heroku:
1. Open your web browser and navigate to http://localhost:5001 to access the Note Taker application.

2. Click the "+" icon in the top right corner to create a new note.

3. Enter a title and content for your note, and click the save icon (floppy disk) to save the note. Your saved notes will appear on the left side of the screen. 

4. Click on a note's title to view its content.

5. To delete a note, click the trash can icon next to the note's title in the list.

## Contributing
Users interested in contributing to this project or with ideas for additional functionality may fork the git repo for this project (located [here](https://github.com/Pilotguide9897/Notability)) and submit their changes to the original repository as a pull request. These pull requests will subsequently be reviewed by the project author. If accepted, the changes will be merged and added to the project's main branch to create the new starting point for future development and deployment using Heroku!

## Tests

Development of this application was assisted by the Insomnia REST API client, allowing for simple testing and debugging of this API. Insomnia allowed for quick and easy configuration of the routes and enpoints used in this promect. It also allowed for testing of API calls to ensure that they functioned as intended. 

## Questions
* If you have any questions concerning this application, do not hesitate to reach me at jaredryan1997@hotmail.com.
* You may also view my GitHub profile at http://github.com/Pilotguide9897.

## Credits
The front-end code for this application was provided for use courtesy of the UNB Full Stack Web Development Bootcamp and the excellent developers who wrote/contributed to the code: GitHub usernames: Xandromus, nol166, and Georgeyoo. The GitHub repo featuring the initial code may be accessed [here](https://github.com/coding-boot-camp/miniature-eureka).

## License
This project is licensed under the ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg). See the [license](https://opensource.org/licenses/MIT) documentation for more information.
