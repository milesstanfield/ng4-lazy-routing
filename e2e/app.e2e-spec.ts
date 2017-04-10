import { Ng4LazyRoutingPage } from './app.po';

describe('ng4-lazy-routing App', () => {
  let page: Ng4LazyRoutingPage;

  beforeEach(() => {
    page = new Ng4LazyRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
