import Page from './page.js'
    
class HomeScreen extends Page {
    get watchIcon() {
        return $('//XCUIElementTypeIcon[@name="Watch"]')
    };
    get watchAppPopupHeader() {
        return $('//XCUIElementTypeStaticText[@name="Simulator Not Paired"]')
    }
    get bnhIcon() {
        return $('//XCUIElementTypeIcon[@name="B&H Audio Video"]')
    }
}

export default new HomeScreen();