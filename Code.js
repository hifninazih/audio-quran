var token = "[TOKEN_BOT]";
var SheetID = "[SHEET_ID]";
function doPost(e) {
  var stringJson = e.postData.getDataAsString();
  var updates = JSON.parse(stringJson);

 if(updates.message.text){

    if(updates.message.text>=1 && updates.message.text<=114
    ){          
      sendAudio(updates.message.chat.id,searchAudioById(updates.message.text));
    }else if(updates.message.text == '/start'){
      sendText(updates.message.chat.id, 'Selamat datang, silakan tulis nomor surat');
    }else{
      sendText(updates.message.chat.id,searchAudioById(updates.message.text));
    }
 }
}