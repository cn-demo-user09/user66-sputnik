describe('Test UI: browser title', function() {
  it('AngularJS + NodeJS', function() {
    browser.get('http://localhost:3000/');

    expect(browser.getTitle()).toEqual('Sputnik');
  });
});

describe('Test with hello and Martin', function() {
  it('Response: contains Martin', function() {
    browser.get('http://localhost:3000/');

    element(by.model('ctrl.user.message')).sendKeys('Hello');
    element(by.model('ctrl.user.firstname')).sendKeys('Martin');
    element(by.buttonText('Send')).click();

    var response = element(by.id('response_result'));

    expect(response.getText()).toEqual('Hello Fellow Traveller, your message was received, thankyou Martin');
  });
});

function log(arg) {
  browser.call(function() {
    console.log(arg);
  });
}