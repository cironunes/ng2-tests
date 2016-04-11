import { Ng2TestsPage } from './app.po';

describe('ng2-tests App', function() {
  let page: Ng2TestsPage;

  beforeEach(() => {
    page = new Ng2TestsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-tests Works!');
  });
});
