import { ComicSearchPage } from './app.po';

describe('comic-search App', () => {
  let page: ComicSearchPage;

  beforeEach(() => {
    page = new ComicSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
