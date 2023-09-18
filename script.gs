function doGet() {
  var startTime = new Date().getTime(); // Засекаем начальное время выполнения
  
  let contents = SpreadsheetApp
                  .openById("1Bh6QJjoXsMG467KPCF0bB13JSP8jcJq3f2_ZWD_j6aI")
                  // .getSheetByName("BaseCDN")
                  .getSheetByName("маньяков")
                  .getDataRange()
                  .getValues()              
                     contents.shift()

var result = {}

 
        result.contents = createObject(contents).sort(() => Math.random() - 0.5).slice(0, 20);
Logger.log(result);
// Logger.log(contents);
        // Logger.log(result.contents);

// var test = result.contents;
// Logger.log(test);

// var template = HtmlService.createTemplateFromFile('index');
//   template.result = result; // передаем объект в шаблон
// return template.evaluate();


//  return HtmlService.createTemplateFromFile('index')
//     .evaluate()
//     .setSandboxMode(HtmlService.SandboxMode.IFRAME);

for (var i = 0; i < result.contents.length; i++) {
 var id_cdn = result.contents[i].ID;
  var id_kp = result.contents[i].ID_KP;
  var type = result.contents[i].Type;
  var name = result.contents[i].Title;
  var year = result.contents[i].Year;
  var quality = result.contents[i].Quality;
  var kp_rating = result.contents[i].KP_Rating;
  var imdb_rating = result.contents[i].IMDb_Rating;
  var genre = result.contents[i].Genre;
  kp_rating = Number(kp_rating)
  kp_rating = kp_rating.toFixed(1);
  var ranDom = [];
while(ranDom.length < 1){
    var r = Math.floor(Math.random() * 9000000) + 1;
    if(ranDom.indexOf(r) === -1) ranDom.push(r);
    var ranDom = ranDom.toString()
}
// console.log(result.contents[i].ID, result.contents[i].ID_KP, result.contents[i].Type, result.contents[i].Title, result.contents[i].Year, result.contents[i].Quality, result.contents[i].KP_Rating, result.contents[i].IMDb_Rating, result.contents[i].Genre, ranDom);


let urlName = encodeURI(name);
if (i === 0) {
    var url_0 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_0 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
    // Logger.log(content_0);
  }
if (i === 1) {
    // var content_1 = '<a href="https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '"><img src="https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg"></a>';
    var url_1 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_1 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
    // Logger.log(content_1);
  }
if (i === 2) {
    var url_2 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_2 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 3) {
    var url_3 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_3 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 4) {
    var url_4 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_4 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 5) {
    var url_5 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_5 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 6) {
    var url_6 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_6 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 7) {
    var url_7 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_7 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 8) {
    var url_8 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_8 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 9) {
    var url_9 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_9 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 10) {
    var url_10 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_10 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 11) {
    var url_11 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_11 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 12) {
    var url_12 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_12 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 13) {
    var url_13 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_13 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 14) {
    var url_14 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_14 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 15) {
    var url_15 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_15 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 16) {
    var url_16 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_16 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 17) {
    var url_17 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_17 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 18) {
    var url_18 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_18 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
if (i === 19) {
    var url_19 = 'https://eltigre001kz.github.io/player.html?video=//788542.svetacdn.in/VMbxNZKU6nyu?kp_id=' + id_kp + '&name=' + name + '&year=' + year + '';
    var poster_19 ='https://st.kp.yandex.net/images/film_iphone/iphone360_' + id_kp + '.jpg'
  }
          //  console.log(content);
          //  var container = document.getElementById('item-'+i+''); 
          // container.innerHTML += content;

          

}



var template = HtmlService.createTemplateFromFile('index');
// var template = HtmlService.createHtmlOutputFromFile('index');
// var html = HtmlService.createHtmlOutput(template);
template.url_0 = url_0;
template.poster_0 = poster_0;
template.url_1 = url_1;
template.poster_1 = poster_1;
template.url_2 = url_2;
template.poster_2 = poster_2;
template.url_3 = url_3;
template.poster_3 = poster_3;
template.url_4 = url_4;
template.poster_4 = poster_4;
template.url_5 = url_5;
template.poster_5 = poster_5;
template.url_6 = url_6;
template.poster_6 = poster_6;
template.url_7 = url_7;
template.poster_7 = poster_7;
template.url_8 = url_8;
template.poster_8 = poster_8;
template.url_9 = url_9;
template.poster_9 = poster_9;
template.url_10 = url_10;
template.poster_10 = poster_10;
template.url_11 = url_11;
template.poster_11 = poster_11;
template.url_12 = url_12;
template.poster_12 = poster_12;
template.url_13 = url_13;
template.poster_13 = poster_13;
template.url_14 = url_14;
template.poster_14 = poster_14;
template.url_15 = url_15;
template.poster_15 = poster_15;
template.url_16 = url_16;
template.poster_16 = poster_16;
template.url_17 = url_17;
template.poster_17 = poster_17;
template.url_18 = url_18;
template.poster_18 = poster_18;
template.url_19 = url_19;
template.poster_19 = poster_19;
// template.url_20 = url_20;
// template.poster_20 = poster_20;


// template.content_0 = content_0;


// template.result = result;
// Logger.log(template.result);
// return template.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1');
 var htmlOutput = template.evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);

var endTime = new Date().getTime(); // Засекаем конечное время выполнения
var executionTime = endTime - startTime; // Вычисляем разницу во времени выполнения
Logger.log("Время выполнения: " + executionTime + " миллисекунд");
const seconds = Math.floor((executionTime / 1000) % 60);
Logger.log(seconds);

  return htmlOutput;
  
}



// var result = result;
// function getItems() {
//   let contents = SpreadsheetApp
//                   .openById("1Bh6QJjoXsMG467KPCF0bB13JSP8jcJq3f2_ZWD_j6aI")
//                   .getSheetByName("маньяков")
//                   .getDataRange()
//                   .getValues()              
//                      contents.shift()

// var result = {}

 
//         result.contents = createObject(contents).sort(() => Math.random() - 0.5).slice(0, 12);
//   Logger.log(result);
//   return result;
// }

// function readRandomRows() {

// }

// function readRandomRows() {
//   var sheet = SpreadsheetApp.openById("1Wvdpq1lmIkH52v5YyaCgnoFeYJaDwpboDYAAU56SgdY").getSheetByName("BaseCDN_TAGS");
//   var numRows = sheet.getLastRow();
  
  
//   var randomRows = [];
//   var result = {};
  
//   for (var i = 0; i < 1; i++) {
//     var randomRow = Math.floor(Math.random() * numRows) + 1;
//     var rowData = sheet.getRange(randomRow, 1, 1, sheet.getLastColumn()).getValues()[0];
    
//     var rowObj = {};
//     for (var j = 0; j < rowData.length; j++) {
//       var cellValue = rowData[j];
//       var header = sheet.getRange(1, j + 1).getValue();
//       rowObj[header] = cellValue;
//     }
    
//     randomRows.push(rowObj);
//   }
  
//   result.randomRows = randomRows;
  
//   Logger.log(result);
// }


// function readRandomRows() {
//   var sheet = SpreadsheetApp.openById("1Wvdpq1lmIkH52v5YyaCgnoFeYJaDwpboDYAAU56SgdY").getSheetByName("BaseCDN_TAGS");
//   var numRows = sheet.getLastRow();
//   var numRandomRows = 5; // указываете количество случайных строк, которые Вы хотите прочитать
  
//   // Генерируем случайные индексы строк
//   var randomIndexes = [];
//   for (var i = 0; i < numRandomRows; i++) {
//     var randomIndex = Math.floor(Math.random() * numRows) + 1;
//     randomIndexes.push(randomIndex);
//   }
  
//   // Читаем значения из случайных строк в массив
//   var randomRowsData = [];
  
//   for (var i = 0; i < numRandomRows; i++) {
//     var rowData = sheet.getRange(randomIndexes[i], 1, 1, sheet.getLastColumn()).getValues()[0];
//     randomRowsData.push(rowData);
//   }
  
//   // Выводим значения в лог
//   Logger.log(randomRowsData);
// }

function createObject(dataArr) {
   let obj = []
     obj = dataArr.map(el => ({
        ID: el[0],
        ID_KP: el[1],
        Type: el[2],
        Title: el[3],
        Year: el[4],
        Quality: el[5],
        KP_Rating: el[6],
        IMDb_Rating: el[7],
        Genre: el[8],
        // Tags: el[9],
  }))
  
  
  return obj
}
