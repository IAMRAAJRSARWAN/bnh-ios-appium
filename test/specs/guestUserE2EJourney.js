import BnHApp_HomePage from '../pageobjects/BnHApp.HomePage.js'

describe('End to End Shopping as a Guest User', ()=>{
    it('Open B&H App and Validate HomePage', async()=>{
        await BnHApp_HomePage.welcomeMsg.waitForExist()
        await expect(BnHApp_HomePage.welcomeMsg).toHaveText('Welcome to B&amp;H! Sign In');
    });
});    