import Page from './page.js'
    
class WatchApp extends Page {
    get watchPopUpHeader() {
        return $('//XCUIElementTypeStaticText[@name="“Watch” Would Like to Send You Notifications"]')
    };

    get watchPopUpBody() {
        return $('')
    };

    get watchPopUpDontAllowButton() {
        return $('//XCUIElementTypeButton[@name="Don’t Allow"]')
    };

    get watchPopUpAllowButton() {
        return $('//XCUIElementTypeButton[@name="Allow"]')
    };
}

export default new WatchApp();