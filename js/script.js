 //Все что связано с музыкой
 let image = document.getElementById("sound-marker");
 image.addEventListener("click", function(){
    if (image.getAttribute("src") == "/design/Слои/sound off.png"){
       image.src = "/design/Слои/sound on.png"}
    else{
       image.src = "/design/Слои/sound off.png"}
 });
 
 document.querySelector('#sound-marker').addEventListener('click', function() {
   const audioElement = document.querySelector('audio');
   if (audioElement.paused) {
     audioElement.play();
   } 
   else {
     audioElement.pause();
   }
 });


//Все что связано с генерацией
let button = document.querySelector(".joke-button");
let result = document.querySelector("#jokesWindow");

let locationAndAction = ['Заходят в бар', 'Сидят на крыше', 'Лежат на пляже', 'Стоят в парке',
 'Встретились у входа в ТЦ', 'Сидят у оврага', 'Сели в самолет', 'Едут в автобусе', 'Идут по тротуару',
  'Купаются в реке', 'Пьют кофе', 'Тащат диван', 'Лежат на пляже', 'Стоят у озера', 'Ждут поезд на перроне'];
let persons = ['парень с девушкой,', 'охранник и чернорабочий,', 'два музыканта,', 'прораб и сантехник,',
'два учителя средней школы,', 'двое парней в костюмах,', 'два лесоруба,', 'водитель и кондуктор,',
 'два водолаза', 'лесничий и грибник', 'электрик и маляр', 'кондуктор и ДПСник', 'блоггер и стартапер', 
 'дачник и рыбак'];
let opposition = ['смотрят на часы,', 'снимают куртки,', 'смотрят в зеркало,', 'затягивают пояса,',
 'наблюдают за голубями,', 'снимают шапки,', 'смотрят на проезжающий поезд,', 'расчехляют лопаты,', 
'убиррают телефоны,', 'мечтают о переезде,', 'открывают журналы,', 'заваривают чай,', 'разгадывают сканворд,',
'обсуждают новости,', 'один тащит кабель,', 'обсуждают спорт,'];
let punch = ['а стаканы уже пустые.', 'а вокруг них вокзал.', 'а солнце уже село.', 'а дождь все льет',
'а метро уже закрылось', 'а оба в Калуге', 'а жизнь все проходит', 'а президент все тот же', 'а зубы все еще желтые',
'а зима все еще не закончилась', 'а север где?', 'а дома уже нет ничего', 'а денег и нет', 'а спину прямо держать нужно',
'а в душ так и хочется', 'а загранник уже и не нужен', 'а штаны уж протерлись', 'а зраение уже не то', 'а силы уже не те'];

function generateJoke() {
  let randomLocationAndAction = getRandomArrayElement(locationAndAction);
  let randomPersons = getRandomArrayElement(persons);
  let randomOpposition = getRandomArrayElement(opposition);
  let randomPunch = getRandomArrayElement(punch);

  return `${randomLocationAndAction} ${randomPersons} ${randomOpposition} ${randomPunch}`;
}
function injectJokeText() {
  result.innerText = generateJoke();
}
 
button.addEventListener("click", injectJokeText);

function getRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}
