import { AngularFlycrmPage } from './app.po';

describe('angular-flycrm App', () => {
  let page: AngularFlycrmPage;

  beforeEach(() => {
    page = new AngularFlycrmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
