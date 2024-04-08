import Page from './page.js'
    
class BnHAppHomePage extends Page {
    get welcomeMsg () { return $('//XCUIElementTypeStaticText[@name="welcomeMsg"]'); }
}

export default new BnHAppHomePage();