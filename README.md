# Keep reading Chrome's extension

Keep your pace reading pages!
Ever wished to know where you halted your reading on a webpage and had to search on the text to continue were you left off? Well, I did. That's why I built this simple yet helpfull extension that stores were you left off your reading, and resumes when you open that page again. Whether you open it again tomorrow, next week or next month.

## Instaling
  The app is available for download at Google Chrome's webstore [here](https://chrome.google.com/webstore/detail/keep-reading/obecbfgglkfphmlbnoamnlcfobofclio).
  
## How it works
  There are simply two events upon which this extension works.
    * Everytime you scroll the page, the vertical position you are at is stored at localStorage of your browser.
    * Whenever you open a page you have visited before, the extension will search on localStorage to collected where you were last at, and resumes vertical scroll position accordingly.
    
## Built with
  * Javascript;
  * HTML 5.
    
## License
  This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
