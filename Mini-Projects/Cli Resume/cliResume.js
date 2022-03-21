const inquirer = require('inquirer');
const cp = require('child_process');

function displayList() {
    inquirer
        .prompt([{

            type: 'list',
            name: 'selection',
            choices: ['About', 'Skills', 'Academics', 'Projects']
        }])
        .then(function (ans) {

            if (ans.selection == 'About') {
                console.log("A passionate Web Develper and DSA enthusiast who has started to get a hang of making some beautiful websites!");
                displayNext();
            }

            else if (ans.selection == 'Skills') {
                console.log("Java, JavaScript, Node JS, Problem Solving, Data Structures, HTML, CSS 3, Bootstrap");
                displayNext();
            }

            else if (ans.selection == 'Academics') {
                cp.execSync('start chrome https://drive.google.com/file/d/1_pTCeIU_3q4efEn_89lmC3KEJit9NXhT/view?usp=sharing');
                displayNext();
            }

            else if (ans.selection == 'Projects') {
                cp.execSync("start chrome https://github.com/harsh-sangwan2003");
                displayNext();
            }

        }).catch(function (err) {

            console.log("Error is: ", err);
        });
}

displayList();

function displayNext() {

    inquirer
        .prompt([{

            type: 'list',
            name: 'selection',
            choices: ['Go Back', 'Exit']
        }])
        .then(function (ans) {

            if (ans.selection == 'Go Back')
                displayList();

            else if (ans.selection == 'Exit')
                console.log("Resume Closed");
        })
}