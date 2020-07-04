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
    require:['./src/support/*.js'],
    strict: true,
    keepAlive: false,


  },
  onPrepare:function(){

    browser.manage().window().maximize();

  },

  // Framework to use. custom is recommended.
  framework: "custom",
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  baseUrl: 'http://newtours.demoaut.com/',
  allScriptsTimeout: 110000,
  getPageTimeout: 60000,

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['example_spec.js'],
  suites: {regression:['./features']
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
