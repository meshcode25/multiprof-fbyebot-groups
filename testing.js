// Wait for the initial selector to appear
await page.waitForSelector('div[role="button"][aria-label^="More options for"]');

let moreoptionsellipses = await page.$$('div[role="button"][aria-label^="More options for"]');
console.log("Here is the number of MORE OPTIONS ELLIPSES BUTTONS: " + moreoptionsellipses.length);

if (moreoptionsellipses.length > 0) {
    for (let index = 0; index < moreoptionsellipses.length; index++) {
        // Wait for 2 seconds before processing the next item
        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));

        // Re-fetch the button to ensure it's still valid
        moreoptionsellipses = await page.$$('div[role="button"][aria-label^="More options for"]');
        const moreoptionsbutton = moreoptionsellipses[index];

        if (!moreoptionsbutton) {
            console.log(`Button at index ${index} is detached or no longer available.`);
            continue; // Move to the next iteration if the element is detached
        }

        // Scroll into view
        await moreoptionsbutton.evaluate((ellipsebutton) => ellipsebutton.scrollIntoView());

        // Wait for 2 seconds before the next action
        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));

        // Click on the element
        try {
            await moreoptionsbutton.click();
            console.log(`Clicked on the More Options for INDEX ${index}`);
        } catch (error) {
            console.log(`Error clicking the button at index ${index}: ${error.message}`);
        }

        // Take a screenshot
        await page.screenshot({ path: `./listmoreplacesimages/scrollintoviewlisting_${index}.png` });
        console.log(`Screenshot taken for More Options at INDEX ${index}`);
    }
} else {
    console.log("No MORE OPTIONS ELLIPSE buttons found.");
}
