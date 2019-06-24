import { AppPage } from './app.po';
import { browser, logging, element, by, protractor } from 'protractor';

describe('employee portal App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  const origFn = browser.driver.controlFlow().execute;

  browser.driver.controlFlow().execute = function() {
    const args = arguments;

    // queue 100ms wait
    origFn.call(browser.driver.controlFlow(), () => {
      return protractor.promise.delayed(100);
    });

    return origFn.apply(browser.driver.controlFlow(), args);
  };
  it('should display Add emplyee details', async () => {
    page.navigateTo('/#/user-add');
    expect(page.getTitleText('app-employee-add h5')).toEqual('Register your emplyee here !');
  });
  it('should Add employees successfully successfully', async () => {
    page.navigateTo('/#/user-add');
    const firstname = element(by.id('firstName'));
    const lastname = element(by.id('lastName'));
    const gender = element(by.id('gender'));
    const dob = element(by.id('dob'));
    const department = element(by.id('department'));
    const register = element(by.id('register'));

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf(firstname), 3000);
    firstname.sendKeys('Ganesh');

    expect(firstname.getAttribute('value'))
      .toBe('Ganesh');


    lastname.sendKeys('k v');
    dob.sendKeys('06/02/2019');
    gender.sendKeys('Male');
    department.sendKeys('Account');
    register.click().then(() => {
      const toasterSuccess = element(by.className('toast-success'));
      const ec = protractor.ExpectedConditions;
      browser.wait(ec.presenceOf(toasterSuccess), 5000);
      expect(toasterSuccess.isPresent()).toBeTruthy();
    });




  });

  it('should display Get emplyee details', async () => {
    page.navigateTo('/#/user-list');
    expect(page.getTitleText('app-employee-list h5')).toEqual('Get emplyee details');
    browser.sleep(100);
  });

  it('should search valid emplyee ', async () => {
    const search = element(by.id('search'));
    search.sendKeys('Ganesh').then(() => {
      browser.debugger();
      const row = element.all(by.css('table')).first();

      const cells = row.all(by.tagName('td'));

      const cellTexts = cells.map((elm) => {
        return elm.getText();
      });
      browser.debugger();
      expect(cellTexts).toContain('Ganesh');
    });
  });

  it('should search invalid emplyee ', async () => {
    const search = element(by.id('search'));
    search.clear().then(() => search.sendKeys('Jimboomba').then(() => {

      const noContent = element(by.id('nocontent'));
      expect(noContent.isPresent()).toBeTruthy();

    }));
  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
