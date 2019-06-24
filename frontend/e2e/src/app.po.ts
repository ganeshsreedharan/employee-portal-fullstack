import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url: string) {
    return browser.get(browser.baseUrl + url) as Promise<any>;
  }

  getTitleText( selector: string) {
    return element(by.css(selector)).getText() as Promise<string>;
  }
}
