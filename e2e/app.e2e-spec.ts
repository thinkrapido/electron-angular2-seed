import { MorowloverPage } from './app.po';

describe('morowlover App', () => {
  let page: MorowloverPage;

  beforeEach(() => {
    page = new MorowloverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
