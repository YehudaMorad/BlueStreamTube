var webdriver = require('selenium-webdriver');
var config = require('./config.json')
var functions = require("../functions.js")

driver = new webdriver.Builder().forBrowser('chrome')
functions = new functions();

// Enter to Minio site
functions.openNewWindow(config.miniosite);
functions.getAndSendCSS("#accessKey", config.AccessKey);
functions.getAndSendCSS("#secretKey", config.SecretKey);
functions.ElementClickCSS("#root > div > div.l-wrap > form > button")

// Enter to BlueStream site
functions.openNewTab(config.bluestream); 



