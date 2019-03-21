 let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
 });

  changeColor.onclick = function (element) {
      let color = element.target.value;
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.executeScript(
              tabs[0].id,
             // { code: 'document.body.style.backgroundColor = "' + color + '";' });
            //  { code: "alert(" + tabs[0].pageYOffset +");" });
             // { code: "alert(" + tabs[0].scrollTop  + ");" });
             // { code: "alert(" + document.documentElement.scrollTop + ");" });
              {
                  //code: ' chrome.storage.sync.set({ scrollPosition: document.documentElement.scrollTop }); alert(document.documentElement.scrollTop);',
                  code: 'StoreScrollPosition()'
              });
              //{ 
              //    code: 'alert(document.documentElement.scrollTop);', 
              //});
      });
  };

Resume.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            // { code: 'document.body.style.backgroundColor = "' + color + '";' });
            //  { code: "alert(" + tabs[0].pageYOffset +");" });
            // { code: "alert(" + tabs[0].scrollTop  + ");" });
            // { code: "alert(" + document.documentElement.scrollTop + ");" });
            {
                //code: function () {
                //    chrome.storage.sync.get('scrollPosition', function (data) {
                //        document.documentElement.scrollTop = data.scrollPosition; alert(data.scrollPosition);
                //    });
                //},
               // code: "chrome.storage.sync.get('scrollPosition', function(data) {document.documentElement.scrollTop =data.scrollPosition; alert(data.scrollPosition); })"
                code:'RecoverScrollPosition()'

            });
               // code: "chrome.storage.sync.get('scrollPosition', function(data) {document.documentElement.scrollTop =data.scrollPosition; alert(data.scrollPosition); })" });
    });
};