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
      .setValue('input[name="nameFilter"]','audittest')
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

  'Check saved search returns correct value and test data exists for Q-Audit' : function (browser) {
    //check that the data exists in Splunk for the checks
    browser.expect.element('td[tabindex="0"]').text.to.contain("352").before(20000) 
  },


  'Check can reach Data Summary Dashboard and charts run splunk searches and populate' : function (browser) {
    browser
      .url("http://3.14.53.90:8443/en-US/app/Q-Audit/Home")
      .pause(1600)
      .click('a[title="Data Summary"]')
    //check that splunk search charts exist
        browser.expect.element('div[class="alert alert-info"]')
        .to.be.present.before(20000)
    //next check that charts fill up correctly
        browser.expect.element('div[class="alert alert-info"]')
        .to.not.be.present.before(20000)

  },

  'Check can reach Real Time Monitoring Dashboard and that charts run splunk searches and populate' : function (browser) {
    browser
      .click('a[title="Real Time Monitoring"]')
      .pause(2000)
      .click('button[label*="Last"]')
      .pause(200)
      .click('div[data-test-panel-id="presets"] button[type="button"')
      .pause(200)
      .click('button[label="Last 60 minutes"]')
    //check that splunk search charts exist
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
    //next check that charts fill up correctly
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },

   'Check can reach Event Family Admin Access and Escalation Dashboard and that charts run splunk searches and populate' : function (browser) {
    browser
      .click('a[title="Event Families"]')
      .pause(200)
      .click('a[href="/en-US/app/Q-Audit/admin_access"]')
      .pause(2000)
      .click('button[label*="Last"]')
      .pause(200)
      .click('div[data-test-panel-id="presets"] button[type="button"')
      .pause(200)
      .click('button[label="Last 60 minutes"]')
    //check that splunk search charts exist
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
    //next check that charts fill up correctly
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },
     
   'Check can reach Event Family Application Dashboard and that charts run splunk searches and populate' : function (browser) {
    browser
      .click('a[title="Event Families"]')
      .pause(200)
      .click('a[href="/en-US/app/Q-Audit/application"]')
      .pause(2000)
      .click('button[label*="Last"]')
      .pause(200)
      .click('div[data-test-panel-id="presets"] button[type="button"')
      .pause(200)
      .click('button[label="Last 60 minutes"]')
    //check that splunk search charts exist
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
    //next check that charts fill up correctly
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },

   'Check can reach Event Family Authentication Dashboard and that charts run splunk searches and populate' : function (browser) {
    browser
      .click('a[title="Event Families"]')
      .pause(200)
      .click('a[href="/en-US/app/Q-Audit/authentication"]')
      .pause(2000)
      .click('button[label*="Last"]')
      .pause(200)
      .click('div[data-test-panel-id="presets"] button[type="button"')
      .pause(200)
      .click('button[label="Last 60 minutes"]')
    //check that splunk search charts exist
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
    //next check that charts fill up correctly
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },

   'Check can reach Event Family Data Movement Dashboard and that charts run splunk searches and populate' : function (browser) {
    browser
      .click('a[title="Event Families"]')
      .pause(200)
      .click('a[href="/en-US/app/Q-Audit/data_movement"]')
      .pause(2000)
      .click('button[label*="Last"]')
      .pause(200)
      .click('div[data-test-panel-id="presets"] button[type="button"')
      .pause(200)
      .click('button[label="Last 60 minutes"]')
    //check that splunk search charts exist
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
    //next check that charts fill up correctly
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },

   'Check can reach Event Family File and Object Dashboard and that charts run splunk searches and populate' : function (browser) {
    browser
      .click('a[title="Event Families"]')
      .pause(200)
      .click('a[href="/en-US/app/Q-Audit/file_and_object"]')
      .pause(2000)
      .click('button[label*="Last"]')
      .pause(200)
      .click('div[data-test-panel-id="presets"] button[type="button"')
      .pause(200)
      .click('button[label="Last 60 minutes"]')
    //check that splunk search charts exist
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
    //next check that charts fill up correctly
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },

   'Check can reach Event Family Privileged Access Dashboard and that charts run splunk searches and populate' : function (browser) {
    browser
      .click('a[title="Event Families"]')
      .pause(200)
      .click('a[href="/en-US/app/Q-Audit/privileged"]')
      .pause(2000)
      .click('button[label*="Last"]')
      .pause(200)
      .click('div[data-test-panel-id="presets"] button[type="button"')
      .pause(200)
      .click('button[label="Last 60 minutes"]')
    //check that splunk search charts exist
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
    //next check that charts fill up correctly
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },

   'Check can reach Event Family System Dashboard and that charts run splunk searches and populate' : function (browser) {
    browser
      .click('a[title="Event Families"]')
      .pause(200)
      .click('a[href="/en-US/app/Q-Audit/system"]')
      .pause(2000)
      .click('button[label*="Last"]')
      .pause(200)
      .click('div[data-test-panel-id="presets"] button[type="button"')
      .pause(200)
      .click('button[label="Last 60 minutes"]')
    //check that splunk search charts exist
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
    //next check that charts fill up correctly
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },

   'Check can reach Event Family User and Group Management Dashboard and that charts run splunk searches and populate' : function (browser) {
    browser
      .click('a[title="Event Families"]')
      .pause(200)
      .click('a[href="/en-US/app/Q-Audit/user_group_management"]')
      .pause(2000)
      .click('button[label*="Last"]')
      .pause(200)
      .click('div[data-test-panel-id="presets"] button[type="button"')
      .pause(200)
      .click('button[label="Last 60 minutes"]')
    //check that splunk search charts exist
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
    //next check that charts fill up correctly
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },


  'Check can reach Event Families Attributable Events page and app selected is Q-Audit' : function (browser) {
    browser
      .click('a[title="Event Families"]')
      .pause(400)
      .useXpath().click("//*[contains(text(),'Attributable Events')]")
      .pause(3300).useCss()
      .expect.element('#app').to.have.value.which.equal("Q-Audit")
  },

   'Check can reach User/Host Investigation Dashboard and that charts run splunk searches and populate' : function (browser) {
    browser
      .pause(2000)
      .url("http://3.14.53.90:8443/en-US/app/Q-Audit/Home")
      .pause(2200)
      .click('a[title="User/Host Investigation"]')
      .pause(2000)
      .click('button[label*="Last"]')
      .pause(200)
      .click('div[data-test-panel-id="presets"] button[type="button"')
      .pause(200)
      .click('button[label="Last 60 minutes"]')
    //check that splunk search charts exist
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
    //next check that charts fill up correctly
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)
  },

   'Check Search dropdown exists and contains the correct list items' : function (browser) {
    browser
      .pause(2000)
      .click('a[title="Search"]')
      .expect.element('li[data-target-view="dashboards"]').to.be.present.before(4000)
      browser.expect.element('li[data-target-view="reports"]').to.be.present.before(4000)
      browser.expect.element('li[data-target-view="data_models"]').to.be.present.before(4000)
      browser.expect.element('li[data-target-view="alerts"]').to.be.present.before(2000)
      browser.expect.element('li[data-target-view="search"]').to.be.present.before(4000)
  },

  'Check clicking Search -> Dashboards option brings you to the dashboards page' : function (browser) {
    browser
      .pause(3000)
      .click('li[data-target-view="dashboards"]')
      .expect.element('h1[class="section-title"]').text.to.equal("Dashboards").before(5000)
  },

  'Check clicking Search -> Reports option brings you to the Reports page' : function (browser) {
    browser
      .pause(3000)
      .click('a[title="Search"]')
      .pause(200)
      .click('li[data-target-view="reports"]')
      .expect.element('h1[class="section-title"]').text.to.equal("Reports").before(5000)
  },

  'Check clicking Search -> Datasets option brings you to the Datasets page' : function (browser) {
    browser
      .pause(3000)
      .click('a[title="Search"]')
      .pause(200)
      .click('li[data-target-view="data_models"]')
      .expect.element('h1[class="section-title"]').text.to.equal("Datasets").before(5000)
  },

  'Check clicking Search -> Alerts option brings you to the Alerts page' : function (browser) {
    browser
      .pause(3000)
      .click('a[title="Search"]')
      .pause(200)
      .click('li[data-target-view="alerts"]')
      .expect.element('h1[class="section-title"]').text.to.equal("Alerts").before(5000)
  },

  'Check clicking Search -> Search option brings you to the Search page' : function (browser) {
    browser
      .pause(2000)
      .click('a[title="Search"]')
      .pause(200)
      .click('li[data-target-view="search"]')
      .expect.element('h1[title="Search"]').text.to.contain('Search').before(5000)
  },

  'Check Configure dropdown contains proper links' : function (browser) {
    browser
      .pause(2000)
      .click('a[title="Configure"]')
      .useXpath()
      .expect.element("//*[contains(text(),'Baseline Users and Hosts')]").to.be.present.before(5000)
      browser.useXpath().expect.element("//*[contains(text(),'Baseline/Watchlist Apps')]").to.be.present.before(5000)
      browser.useXpath().expect.element("//*[contains(text(),'Configure Alerts')]").to.be.present.before(5000)
  },

  'Check clicking Configure -> Baseline Users and Hosts brings you to the correct page' : function (browser) {
    browser
      .pause(1000)
      //!!! will not let me click ('a[href="/en-US/app/Q-Audit/baseline"]')
      .url('http://3.14.53.90:8443/en-US/app/Q-Audit/baseline')
      browser.useXpath().expect.element("//*[contains(text(),'Baseline Users and Hosts')]").to.be.present.before(5000)
      browser.useCss().pause(1000).expect.element('button[label*="Last"]').to.be.present.before(5000)
      browser.expect.element('button[class="btn btn-primary"]').to.be.present.before(5000)
      browser.pause(1000).click('button[class="btn btn-primary"]')
      browser.expect.element('div[class="alert alert-info"]')
      .to.be.present.before(20000)
      browser.expect.element('div[class="alert alert-info"]')
      .to.not.be.present.before(20000)

  },

  'Check clicking Configure -> Baseline/Watchlist Apps brings you to the correct page' : function (browser) {
    browser
      .useXpath().click("//*[contains(text(),'Configure')]")
      //!!! will not let me click ('a[href="/en-US/app/Q-Audit/baseline"]')
      .url('http://3.14.53.90:8443/en-US/app/Q-Audit/baseline_watchlist_apps')
      .pause(2000)
      browser.useXpath().expect.element("//*[contains(text(),'Baseline/Watchlist Apps')]").to.be.present.before(5000)
      browser.useCss().expect.element('#addbaselineapp').to.be.present.before(5000)
      browser.expect.element('#removebaselineapp').to.be.present.before(5000)
      browser.expect.element('#addwatchlistapp').to.be.present.before(5000)
      browser.expect.element('#removewatchlistapp').to.be.present.before(5000)
      browser.pause(200)
  },

  'Check Baseline/Watchlist Apps page lets you add and remove baseline and watchlisted apps' : function (browser) {
    browser

     //test baseline apps
      .pause(200).click('#addbaselineapp')
      .pause(1000)
      .setValue('input[id="baselineappinput"]', 'QCompliance')
      .setValue('input[id="baselineosinput"]', 'WebOS')
      browser.pause(1000).click('#addbaseline')
      browser.useXpath().expect.element("//*[contains(text(),'QCompliance')]").to.be.present.before(5000)
      browser.useXpath().expect.element("//*[contains(text(),'WebOS')]").to.be.present.before(5000)
      browser.pause(500).useCss().click('div[id="baseline_table"]')
      browser.pause(500).useXpath().click("//*[contains(text(),'QCompliance')]")
      browser.useCss().pause(1000).click('#removebaselineapp')
      browser.useXpath().expect.element("//*[contains(text(),'QCompliance')]").to.not.be.present.before(5000)
      browser.useXpath().expect.element("//*[contains(text(),'WebOS')]").to.not.be.present.before(5000)
 
    //test watchlist apps
      browser.useCss().pause(1000).click('#addwatchlistapp')
      browser.pause(500).setValue('input[id="watchlistappinput"]', 'QAudit')
      .setValue('input[id="watchlistosinput"]', 'googlechrome')
      browser.pause(200).click('#addwatchlist')
      browser.pause(1000).useXpath().expect.element("//*[contains(text(),'QAudit')]").to.be.present.before(5000)
      browser.pause(1000).useXpath().expect.element("//*[contains(text(),'googlechrome')]").to.be.present.before(5000)
      browser.pause(500).useCss().click('div[id="watchlist_table"]')
      browser.pause(500).useXpath().click("//*[contains(text(),'QAudit')]")
      browser.pause(400).useCss().click('#removewatchlistapp')
      browser.pause(1000).useXpath().expect.element("//*[contains(text(),'QAudit')]").to.not.be.present.before(5000)
      browser.pause(1000).useXpath().expect.element("//*[contains(text(),'googlechrome')]").to.not.be.present.before(5000)

  },

  'Check clicking Configure -> Configure Alerts brings you to the correct page' : function (browser) {
    browser
      .useXpath().click("//*[contains(text(),'Configure')]")
      .pause(200)
      .url('http://3.14.53.90:8443/en-US/app/Q-Audit/alerts')
      .pause(2000)
      browser.useXpath().expect.element("//*[contains(text(),'Alerts')]").to.be.present.before(5000)
      browser.pause(200).useCss().expect.element('input[class="search-query text-clear "]').to.be.present.before(2000)
  },

  'Close Browser' : function (browser) {
    browser.end()
  }

}
