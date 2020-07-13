// An example configuration file.
require('babel-register')({
  presets: [ 'es2015' ]
})
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
            args: ['disable-infobar', "--disable-gpu", "--window-size=1920,1080", '--no-sandbox']


    }
  },

//cucumber options

  cucumberOpts: {
    require:['./src/stepDefinations/*.js','./src/support/*.js'],
    strict: true,
    keepAlive: false,
    format:'json:Documents/Reports/results.json'
  },
  onPrepare:function(){

    browser.manage().window().maximize();

  },

  // Framework to use. custom is recommended.
  framework: "custom",
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  baseUrl: 'http://automationpractice.com/index.php',
  allScriptsTimeout: 110000,
  getPageTimeout: 60000,

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['example
  suites: {
   // regression:['./features/regression/signInwithoutRegister.feature'],
    regression:['./features/regression/endToEndscenario.feature']
  },

  // reporting plugins
  plugins:[{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
      displayDuration: true,
      durationInMS: true
    }

  }]



};
