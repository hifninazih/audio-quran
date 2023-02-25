function getRows(){
  var rangeName = 'QuranAudio!A1:B'; 
  var rows = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  return rows;
}
function searchAudioById(id){
  var data = getRows();
  for (var row = 0; row < data.length; row++) {
    if(data[row][0]==id){ 
      var nama = data[row][1];
      return nama;
    }
  }
  return "Data tidak ditemukan, silahkan tulis nomor surat.\nKetik ''surat'' untuk menampilkan daftar surat.";
}


function sendText(chatid,text,replymarkup){
var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatid),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(replymarkup)
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}

function sendAudio(chatid,audio_url,replymarkup){
var data = {
    method: "post",
    payload: {
      method: "sendAudio",
      chat_id: String(chatid),
      audio: audio_url,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(replymarkup)
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}
