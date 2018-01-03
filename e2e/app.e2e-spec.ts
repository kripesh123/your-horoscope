import { HoroscopePage } from './app.po';

describe('horoscope App', () => {
  let page: HoroscopePage;

  beforeEach(() => {
    page = new HoroscopePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
