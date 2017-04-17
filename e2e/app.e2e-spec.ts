import { CleverContractsPage } from './app.po';

describe('clever-contracts App', () => {
  let page: CleverContractsPage;

  beforeEach(() => {
    page = new CleverContractsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
