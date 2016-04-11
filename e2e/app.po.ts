export class Ng2TestsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-tests-app p')).getText();
  }
}
