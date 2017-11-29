var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser("phantomjs")
    .build();

driver.get('https://port20-poc.herokuapp.com/');

var customText = driver.findElement(By.xpath('//*/pre[text()[contains(., \'Hello Zenfolio!\')]]'));

if(customText.isDisplayed()) {
    console.log('Found');
} else {
    console.log('Not Found')
}

/*
driver.sleep(1000).then(function() {
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
});
*/
// driver.findElement(By.xpath('//*/div[@class=\'jsb\']/center/input')).click();
/*
driver.sleep(2000).then(function() {
    driver.getTitle().then(function(title) {
        if(title === 'webdriver - Google Search') {
            console.log('Test passed');
        } else {
            console.log('Test failed');
        }
    });
});
*/

driver.quit();