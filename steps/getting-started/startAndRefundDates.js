import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Given('the user is on the enrollment page', async function () {
 await startApplicationPage.login();  

});

Then('the program start date is displayed', async function () {
    await expect(startApplicationPage.programStartDate).toBeVisible();

});

Then('the program refund date is displayed', async function () {
    await expect(startApplicationPage.refundEndDate).toBeVisible();

});

Then('the displayed start date is correct', async function () {

   const ACTUAL_START_DATE = await startApplicationPage.programStartDate.innerText();
   console.log(`Actual start date: ${ ACTUAL_START_DATE}`);

   const EXPECTED_START_DATE = productInfo.startDate;
   console.log(`Expected start date: ${EXPECTED_START_DATE}`);

   //get price from product info:
   console.log(`Expected Upfront Price: ${productInfo.prices[0].baseAmount}`);
   console.log(`Expected Upfront Discount Amount: ${productInfo.prices[0].upfrontDiscountAmount}`);
   await expect(ACTUAL_START_DATE).toBe(EXPECTED_START_DATE);

});

Then('the displayed refund date is correct', async function () {

    const ACTUAL_REFUND_DATE = await startApplicationPage.refundEndDate.innerText();
    const EXPECTED_REFUND_DATE = productInfo.refundDate;
    await expect(ACTUAL_REFUND_DATE).toBe(EXPECTED_REFUND_DATE);

});