var topics = ['HTML', 'CSS', 'Git', 'Javascript'];
var randomtopic = topics[Math.floor(Math.random() * topics.lenth)];

function listtopics() {
for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}
}
function selecttopic(){
if (randomtopic === 'HTML') {
    console.log("let's study HTML!");
} else if (randomtopic === 'CSS') {
    console.log("Let's study CSS!");
} else if (randomtopic === 'Git'){
    console.log("Let's study Git");
} else if (randomtopic === 'Javascript') {
    console.log("Let's study Javascript");
} else {
    console.log('please try again!');
}
}
console.log('Here are the topics we learned through prework');
listtopics();
console.log('which topic should we learn first?');
selecttopic();
