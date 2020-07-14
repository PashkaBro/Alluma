import header from '../pages/header.page';

describe('Header', function () {

  it('Header-displayed', () =>  {
    header.openBase();
    header.HeaderIsDisplayed();
  })

  it('Header-title-dislayed', () =>  {
    header.headerTitleIsDisplayed();
  })

  it('Header-title-text', () =>  {
    header.headerTitleText();
  })

});