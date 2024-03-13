import Page from './page.js'
    
class BnHApp extends Page {
    get bnhPopUpHeader() {
        return $('//XCUIElementTypeStaticText[@name="“Watch” Would Like to Send You Notifications"]')
    };

    get bnhPopUpBody() {
        return $('')
    };

    get bnhPopUpDontAllowButton() {
        return $('//XCUIElementTypeButton[@name="Don’t Allow"]')
    };

    get bnhPopUpAllowButton() {
        return $('//XCUIElementTypeButton[@name="Allow"]')
    };
}

export default new BnHApp();