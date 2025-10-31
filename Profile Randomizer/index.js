const btnRandomize = document.getElementById('btnRandomize');
const btnDelete = document.getElementById('btnDelete');
const profileImage = document.getElementById('profileImage');

const username = document.getElementById('username');
const course = document.getElementById('course');
const cor = document.getElementById('cor');

let images = ['IMG1.png', 'IMG2.png', 'IMG3.png', 'IMG4.png', 'IMG5.png'];
let nameStudents = ['Zane Valle', 'Alvin Campus', 'John Angelo', 'Gabriel Avacenia', 'Jonnebert Zarco']
let bsitBlock = ['Block 2', 'Block 1', 'Block 2', 'Block 1', 'Block 3'];
let corNum = ['202380285', '202380022', '202380029', 'Gab', '202380164'];

let min = 1;
let numPicker

btnRandomize.onclick = function() {
    numPicker = Math.floor(Math.random() * (images.length)) + min;// generate random numbers

    profileImage.src = 'imgs/' + images[numPicker - 1];
    username.textContent = nameStudents[numPicker - 1];
    course.textContent = 'BSIT - '+ bsitBlock[numPicker - 1];
    cor.textContent = corNum[numPicker - 1];
}

btnDelete.onclick = function(){
    images[numPicker - 1] = 'deleted.png';
    nameStudents[numPicker - 1] = 'Deleted User';
    bsitBlock[numPicker - 1] = 'N/A';
    corNum[numPicker - 1] = 'N/A';
    profileImage.src = 'imgs/' + images[numPicker - 1];
    username.textContent = nameStudents[numPicker - 1];
    course.textContent = 'BSIT - '+ bsitBlock[numPicker - 1];
    cor.textContent = corNum[numPicker - 1];

    
}