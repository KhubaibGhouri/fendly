import { FendlyPage } from './app.po';

describe('fendly App', function() {
  let page: FendlyPage;

  beforeEach(() => {
    page = new FendlyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
