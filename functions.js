var webdriver = require('selenium-webdriver');

class functions{
    constructor(){
        this.driver = new webdriver.Builder().forBrowser('chrome').build();
        this.By = webdriver.By;
        this.until = webdriver.until;
        
    }
    openNewWindow(url){
        this.driver.get(url);
    };

    openNewTab(url){
        this.driver.executeScript("window.open('"+url+"');");
    };
    ElementClickCSS(CSS){
        this.driver.findElement(this.By.css(CSS)).submit();
    };
   
    getAndSendCSS(CSS, txt){
       this.driver.findElement(this.By.css(CSS)).sendKeys(txt);
    };

 



    
}

module.exports = functions;
