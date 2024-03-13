import homeScreen  from '../pageobjects/homeScreen.js';
import BnHApp from '../pageobjects/bnhApp.js'
import WatchApp from '../pageobjects/watchApp.js'


describe('Check mobile tests', ()=>{
    it('Open Apple Maps and Validate Its Opened', async()=>{
        await homeScreen.watchIcon.waitForExist()
        await homeScreen.watchIcon.click()
        await expect(WatchApp.watchPopUpHeader).toHaveText("“Watch” Would Like to Send You Notifications");
        await WatchApp.watchPopUpDontAllowButton.waitForExist()
        await WatchApp.watchPopUpAllowButton.waitForExist()
    });

    it('Open B&H and Validate Its Opened', async()=>{
        await homeScreen.bnhIcon.waitForExist() //Check App is Exist
        await homeScreen.bnhIcon.click() //Opening App
        await BnHApp.bnhPopUpHeader.waitForExist()
        await expect(BnHApp.bnhPopUpHeader).toHaveText('Welcome to B&H')
        await BnHApp.bnhPopUpDontAllowButton.waitForExist()
        await BnHApp.bnhPopUpAllowButton.waitForExist()
    });
});    