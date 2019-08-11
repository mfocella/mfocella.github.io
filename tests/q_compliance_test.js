module.exports = {
  
  'login to Splunk' : function (browser) {
    browser
      .url('http://3.14.53.90:8443/en-US/app/search/search')
      .waitForElementVisible('body', 1000)
      .setValue('input[id="username"]', 'nighttest')
      .setValue('input[id="password"]', 'sl33Pwe!!')
      .pause(500)
      .click('input[type=submit]')
  },


  'Find and run test data saved search' : function (browser) {
    browser
      .useXpath().waitForElementVisible("//*[contains(text(),'enter search here')]")
      .pause(2000)
      .useCss().click('a[title=Settings]')
      .pause(800)
      .click('a[href="/en-US/manager/search/saved/searches"]')
      .pause(800)
      .setValue('input[name="nameFilter"]','nighttest')
      .pause(200)
      .keys(['\uE006']) //hits the enter key.
      .pause(800)
      //make sure only one savedsearch for this user
      .useXpath().click("//*[contains(text(),'Run')]")
      .pause(5000)
      browser.windowHandles(function (result) {
            // 0 == current main window, 1 == new tab
            var handle = result.value[1];
            browser.switchWindow(handle);
      });
      browser.useCss().expect.element('span[class="visuallyhidden"]')
      .text.to.contain("Complete").before(600000) 
  },

  'Check saved search returns correct value' : function (browser) {
    //check that the data exists in Splunk for the checks
    browser.expect.element('td[tabindex="0"]').text.to.contain("348").before(20000) 
  },


  'Check can reach control dashboards correctly' : function (browser) {
    browser
      .url("http://3.14.53.90:8443/en-US/app/Q-Compliance/generic_control_page?control_name=ac-02")
      .pause(1600)
      .click('#btnSelectOrgInitial')
      .pause(300)
      .click('#org_1')
      .pause(300)
      .click('#org_2')
      .pause(300)
      .click('#sys_3')
      .pause(200)
      .click('#btnSelectOrg')
      .pause(10000)
      .useCss().click('button[label="AC: Access Control"]')
      .pause(5200)
      .click('button[value="*"]')
      .pause(6000)
      .click('button[label*="Last"]')
      .pause(200)
      .click('button[label="Last 60 minutes"]')
      .pause(6100)
      .expect.element('h1[class="dashboard-title dashboard-header-title"]').text.to.equal("Control Compliance Hub") 
  },


  'Check dashboard AC-17(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-17(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-02 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-02"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-02(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-02(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-02(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-02(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-02(03) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-02(03)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-02(04) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-02(04)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-02(05) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-02(05)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-02(07) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-02(07)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-02(09) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-02(09)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-02(10) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-02(10)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-02(11) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-02(11)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-02(12) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-02(12)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-02(13) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-02(13)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-03 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-03"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-03(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-03(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-03(04) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-03(04)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-04 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-04"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-05 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-05"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-06(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-06(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-06(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-06(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-06(03) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-06(03)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-06(05) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-06(05)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-06(09) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-06(09)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-06(10) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-06(10)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-07 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-07"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-08 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-08"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-09 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-09"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-10 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-10"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-11 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-11"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-11(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-11(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-12 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-12"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-17 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-17"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-17(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-17(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AC-17(03) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AC-17(03)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AT-02 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AT-02"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AT-02(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AT-02(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AT-04 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AT-04"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-02 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-02"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-03 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-03"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-03(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-03(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-03(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-03(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-04 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-04"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-05 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-05"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-05(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-05(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-05(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-05(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-06 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-06"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-06(03) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-06(03)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-06(05) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-06(05)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-06(06) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-06(06)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-07 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-07"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-07(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-07(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-08 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-08"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-08(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-08(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-09 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-09"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-09(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-09(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-09(03) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-09(03)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-09(04) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-09(04)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-11 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-11"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard AU-12(03) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="AU-12(03)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CA-02 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CA-02"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CA-02(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CA-02(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CA-03 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CA-03"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CA-05 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CA-05"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CA-07 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CA-07"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CA-07(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CA-07(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-02(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-02(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-05 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-05"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-05(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-05(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-05(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-05(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-05(03) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-05(03)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-05(05) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-05(05)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-05(06) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-05(06)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-06 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-06"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-06(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-06(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-06(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-06(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-07(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-07(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-07(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-07(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-07(03) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-07(03)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-07(04) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-07(04)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-07(05) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-07(05)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-08 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-08"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-08(03) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-08(03)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-10 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-10"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CM-11 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CM-11"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CP-03 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CP-03"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CP-09 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CP-09"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CP-09(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CP-09(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CP-09(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CP-09(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard CP-09(03) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="CP-09(03)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-02 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-02"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-02(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-02(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-02(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-02(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-02(03) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-02(03)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-02(04) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-02(04)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-02(05) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-02(05)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-02(08) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-02(08)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-02(09) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-02(09)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-02(11) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-02(11)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-02(12) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-02(12)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-02(13) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-02(13)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-03 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-03"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-05 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-05"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-05(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-05(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-05(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-05(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-05(11) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-05(11)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-08 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-08"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IA-08(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IA-08(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IR-04(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IR-04(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IR-05 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IR-05"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IR-06 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IR-06"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IR-06(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IR-06(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard IR-07(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="IR-07(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard PL-04 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="PL-04"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard PS-04(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="PS-04(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard RA-05 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="RA-05"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard RA-05(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="RA-05(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard RA-05(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="RA-05(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard RA-05(05) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="RA-05(05)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SC-05 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SC-05"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SC-07 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SC-07"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SC-07(04) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SC-07(04)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SC-07(05) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SC-07(05)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SC-07(08) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SC-07(08)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SC-07(21) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SC-07(21)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SC-10 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SC-10"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SC-13 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SC-13"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SC-17 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SC-17"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SC-20 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SC-20"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SC-21 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SC-21"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SC-22 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SC-22"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-02 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-02"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-03 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-03"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-03(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-03(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-03(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-03(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-04 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-04"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-04(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-04(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-04(04) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-04(04)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-04(05) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-04(05)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-04(14) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-04(14)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-06 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-06"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-07 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-07"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-08(01) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-08(01)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-08(02) has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-08(02)"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-11 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-11"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },



  'Check dashboard SI-12 has splunk search charts and data shows up properly' : function(browser) { 
    browser
      .pause(200)
      .click('a[title="SI-12"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },


  'Kill Browser.' : function(browser) {
    browser
      .waitForElementVisible('body', 1000)
    browser.end()
  }

}
