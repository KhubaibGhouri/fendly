import { FndlyPage } from './app.po';

describe('fndly App', () => {
  let page: FndlyPage;

  beforeEach(() => {
    page = new FndlyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
