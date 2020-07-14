import header from '../pages/header.page';

describe('Header', function () {

  it('Header-displayed', function () {
    header.openBase();
    header.HeaderIsDisplayed();
  })

  it('Header-title-dislayed', function () {
    header.headerTitleIsDisplayed();
  })

  it('Header-title-text', function () {
    header.headerTitleText();
  })

});