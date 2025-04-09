import dotenv from 'dotenv';
dotenv.config();


import path from 'path';
import fs, { unwatchFile } from "fs"
import { timeout } from 'puppeteer';


export async function listInmorePlaces(page,browser){

    try{
        
        console.log( "Just landed on the home page, Now want to Navigate to marketplace ")
        // wait for 30 seconds before screenshot of the CREATE LISTING PAGE 
        
        
        
        await page.evaluate(async()=>{
            return new Promise(resolve => setTimeout(resolve, 3000))
        }); 



        // Listen for console messages from the browser context
        page.on('console', (msg) =>{
            if(msg.text().includes("here textareas")){
                console.log('PAGE LOG:', msg.text())
            }
            else if(msg.text().includes("nextbuttonclicked ")){
                console.log('PAGE LOG:', msg.text())

            }
            else if(msg.text().includes("Next Button for listing Not found")){
                console.log('PAGE LOG:', msg.text())

            }
            else if(msg.text().includes("span for next button ")){
                console.log('PAGE LOG:', msg.text())

            }
            else if(msg.text().includes("already Clicked on the share to marketplace Button")){
                console.log('PAGE LOG:', msg.text())

            }
            else if(msg.text().includes("Here are the share to marketplace spans    ")){
                console.log('PAGE LOG:', msg.text())

            }
            else if(msg.text().includes("Span with required Marketplace sharing not Found   ")){
                console.log('PAGE LOG:', msg.text())

            }
            else if(msg.text().includes("Here is the share to marketplace innerHTML inside the span for loop AND MATCHES    ")){
                console.log('PAGE LOG:', msg.text())

            } else if(msg.text().includes("here textareas TEXT AREAS SPACE WITH TH FORMATTED DESCRIPTION "   )){
                console.log('PAGE LOG:', msg.text())

            }
            else if(msg.text().includes("Already Clicked and fillled the Desciption Input"   )){
                console.log('PAGE LOG:', msg.text())

        
            }
            else if(msg.text().includes("No description Text Area"   )){
                console.log('PAGE LOG:', msg.text())

            }
            
            else if(msg.text().includes("Description Text Area not Found  "   )){
                console.log('PAGE LOG:', msg.text())

            }     

            else if(msg.text().includes("here textareas content"   )){
                console.log('PAGE LOG:', msg.text())

            }     
            
            else if(msg.text().includes("here textareas value"   )){
                console.log('PAGE LOG:', msg.text())

            }
            else if(msg.text().includes("just did a scroll"   )){
                console.log('PAGE LOG:', msg.text())

            }     
            else if(msg.text().includes("scrollable div is right here"   )){
                console.log('PAGE LOG:', msg.text())

            }
            else if(msg.text().includes("whole document height"   )){
                console.log('PAGE LOG:', msg.text())

            }     
            else if(msg.text().includes("scrollabledivs lenghts here is the number of scrollable divs length  ")){
                console.log('PAGE LOG:', msg.text())

            }   
            else if(msg.text().includes("now within category options ")){
                console.log('PAGE LOG:', msg.text())

            }   
            else if(msg.text().includes("found the right category to click option  ")){
                console.log('PAGE LOG:', msg.text())

            }                   
            else if(msg.text().includes("Clicked the More Details Button, waitting to Expand forr More ")){
                console.log('PAGE LOG:', msg.text())


            }   
            else if(msg.text().includes("More Details Button Not Found ")){
                console.log('PAGE LOG:', msg.text())

            }          
            else if(msg.text().includes("span for next button ")){
                console.log('PAGE LOG:', msg.text())

            }   
            else if(msg.text().includes("nextbuttonclicked ")){
                console.log('PAGE LOG:', msg.text())

            }   
            else if(msg.text().includes("Next Button for listing Not found")){
                console.log('PAGE LOG:', msg.text())

            }  
            else if(msg.text().includes("here is the sharetomoregroups container")){
                console.log('PAGE LOG:', msg.text())

            }  
            else if(msg.text().includes("here is the height of the sharetomoregroups Container ")){
                console.log('PAGE LOG:', msg.text())

            }  

            else if(msg.text().includes("Condition Options cliked  successfully.")){
                console.log('PAGE LOG:', msg.text())

            }  

            else if(msg.text().includes("Condition Options Button not Found ")){
                console.log('PAGE LOG:', msg.text())

            }  

            else if(msg.text().includes("Selected Condition Options cliked  successfully.")){
                console.log('PAGE LOG:', msg.text())

            } 
            else if(msg.text().includes("no Conditon Option Selected Option")){
                console.log('PAGE LOG:', msg.text())

            } 
            else if(msg.text().includes("Here is the pop up container  ")){
                console.log('PAGE LOG:', msg.text())

            } 
            else if(msg.text().includes("EACH LOOP OF CLOSE POPUP BUTTON ")){
                console.log('PAGE LOG:', msg.text())

            } 
            else if(msg.text().includes("here is the CRAZY POP UP")){
                console.log('PAGE LOG:', msg.text())

            } 

            else if(msg.text().includes("NO POP UP LISTE IN THE POP CONTAINER ")){
                console.log('PAGE LOG:', msg.text())

            } 

            else if(msg.text().includes("scrollable whole container  ")){
                console.log('PAGE LOG:', msg.text())

            } 
            else if(msg.text().includes("just did a scroll")){
                console.log('PAGE LOG:', msg.text())

            } 



            



            else{

            }
            
        })                                       
        



        // for(const productfolder of productsfolders){

             //only wait for 15 seconds before beginning to post for the next product in our catalogue 
             console.log("only wait for 15 seconds before beginning to post for the next product in our catalogue"); 




            // // wait for 30 seconds before screenshot of the CREATE LISTING PAGE 
            await page.evaluate(async()=>{
                return new Promise(resolve => setTimeout(resolve, 5000))
            }); 


            // console.log("Beginningo of the Listing of a NEW NEXT PRODUCT Here is the product's Path       " + productfolder );    

           

            // Get the current time
            const currentTime = await page.evaluate(() => {
                return new Date().toLocaleString();
            });

            
            console.log("here is the TIME STAMP OF PAGE of starting to POST IN MARKETPLACE ] " + currentTime   + "  \n\n:")
            
            
            
            const originalurl=page.url();

            // console.log("About to sTART CREATING A MARKETPLACE LISTING ")
            // console.log("here is the original url of homne page " , originalurl)


            // await page.goto("https://www.facebook.com/marketplace/create/", { waitUntil: 'networkidle2', timeout:80000 });
            // await page.waitForSelector('a[aria-label="Create new listing"] span[')

            // wait for 30 seconds before screenshot of the CREATE LISTING PAGE 
                await page.evaluate(async()=>{
                    return new Promise(resolve => setTimeout(resolve, 1000))
                }); 
    

                // await page.waitForSelector('::-p-xpath(//a[.//span[text()="Marketplace"]])');

                // Wait for the link to be available
                // const marketplace = await page.$('::-p-xpath(//a[.//span[text()="Marketplace"]])');


                await page.waitForSelector('a[aria-label="Marketplace"][href="/marketplace/?ref=app_tab"][role="link"]',{timeout:90000})


                const marketplace=await page.waitForSelector('a[aria-label="Marketplace"][href="/marketplace/?ref=app_tab"][role="link"]', {timeout:90000});
                

                await marketplace.click();


                console.log( "clicked maretplace span Now wainting for [Create new Listing span]  ")
            
                // wait for 30 seconds before screenshot of the CREATE LISTING PAGE 
                await page.evaluate(async()=>{
                    return new Promise(resolve => setTimeout(resolve, 5000))
                }); 

                await page.screenshot({path:"./listmoreplacesimages/firstmarketplaceimg.png"})
                
                // console.log("have waited for 30 seconds before taking the screenshot of create lising page above")


                //await selling button to be clicked 

                await page.waitForSelector("::-p-xpath(//a[.//span[text()='Selling']])")



                // Wait for the link to be available
                const sellingbutton = await page.$("::-p-xpath(//a[.//span[text()='Selling']])" );

                await sellingbutton.click();
              

            // Log the current URL
            console.log('I already clicked on the SELLING on the SELLING BUTTON Navigated to the create Listing Route here is the new url for SELLING :  ', page.url());

            page.on('framenavigation', async ()=>{
                // await page.waitForNavigation();
                console.log('navigation just occured')
            })
            // Listen for navigation events
            // await page.waitForNavigation({timeout:300000});



            // wait for 30 seconds before screenshot of the CREATE LISTING PAGE 
            await page.evaluate(async()=>{
                return new Promise(resolve => setTimeout(resolve, 5000))
            }); 
        
            
            await page.waitForSelector('div[aria-label="Hide"][role="button"')

            const listingshidebuttons=await page.$$('div[aria-label="Hide"][role="button"');

            listingshidebuttons[0].click();

            console.log("Just hid the dublicate Listings");
























            await page.evaluate(async()=>{


                // let scrollabledivs=document.querySelectorAll(".xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.xx8ngbg.xwo3gff.x1oyok0e.x1odjw0f.x1e4zzel.x1n2onr6.xq1qtft");
                
                console.log("scrollable whole container  " +  document.body.scrollHeight);
                
                // let scrollablediv=scrollabledivs[1];

                // console.log("scrollable div is right here   " + scrollablediv.scrollHeight +'       ' + scrollablediv.clientHeight); 

                // console.log("whole document height" + scrollablediv.textContent);
            

                let totalHeight = 0;
                let distance = 200; // scroll step in pixels
        
                while (totalHeight < document.body.scrollHeight) {
                    window.scrollBy(0, distance);
                    totalHeight += distance;
                    await  new Promise(resolve => setTimeout(resolve, 1000)); 


                    console.log("just did a scroll")

                            
                    // new Promise(resolve => setTimeout(resolve, 5000)); // wait for 100ms
                }


            })








            // const documentHeight= await page.evaluate(() => document.body.scrollHeight);

            // console.log("Document Height of the document  outside the while loop" + documentHeight)
    
            // const screenHeight= await page.evaluate(() => window.innerHeight);
            
            // console.log("SCREEN  Height of the document  inside the while loop FOR THE WHOLE SCREEN" + screenHeight);
            
            
    
            // let totalHeight = 0;
            // let distance =200; // scroll step in pixels
            // let previousHeight = 0;
            // let maxScrolls = 200; // Safety limit in case of infinite scroll
            // let scrolls = 0;
            
    
            // // wait for 30 seconds before starting to scroll the joined groups 
            // await page.evaluate(()=>{
            //     return new Promise(resolve => setTimeout(resolve, 5000))
            // }); 
    
    
            // while (scrolls < maxScrolls) {
    
            //     let viewportHeight= await page.evaluate(() => document.body.scrollHeight);
                
            //     console.log("Document Height of the document  inside the  TOP OF while loop loop TOP HEIGHT  <br> " + viewportHeight)
    
    
    
            //     console.log("here is the distane length  + " + distance)
     
            //     // Scroll by the defined distance
            //     await page.evaluate((distance) => {
            //         window.scrollBy(0, distance);
            //     }, distance);
     
                
            //     // wait for 30 seconds before starting to scroll the joined groups 
            //     await page.evaluate(()=>{
            //         return new Promise(resolve => setTimeout(resolve, 6000))
            //     }); 
    
                
            //     // console.log("New Document Height after change in Scroll AFTRa NEW SCROLL  " + viewportHeight)
    
    
            //     // Get the new scroll height
            //     previousHeight += distance;
    
       
            //     // console.log("New Document Height of the document after a Scroll Happended  <br>" + previousHeight)
    
            //     let newviewportHeight= await page.evaluate(() => document.body.scrollHeight);
             
                
            //     // console.log("New Document Height after change in Scroll AFTRa NEW SCROLL  " + viewportHeight)
    
    
            //     console.log("New Document Height after change in Scroll AFTRa NEW SCROLL  " + newviewportHeight)
    
    
            //     console.log("scrolls if it will break the loop + scrolls " + scrolls )
    
    
    
    
            //     // Break the loop if no new content is loaded
            //     if (previousHeight >= newviewportHeight) {
            //         console.log("No more content to load" + previousHeight);
            //         break;
            //     }
            
    
            //     // previousHeight = newHeight;
            //     scrolls++;
    
    
            //     // wait for 30 seconds before starting to scroll the joined groups 
            //     await page.evaluate(()=>{
            //         return new Promise(resolve => setTimeout(resolve, 1000))
            //     }); 
    
    
    
            //     await page.screenshot({ path: "./userscache/images/groupsscroll.png" });
    
            //     console.log("already taken a screenshot of the groups link did you see the screenshot after SCROLL")
        
    
    
            //     console.log("scrolls if the loop still goes on + scrolls " + scrolls )
            // }
            
    































                
                // wait for 30 seconds before starting to scroll the joined groups 
                await page.evaluate(()=>{
                    return new Promise(resolve => setTimeout(resolve, 5000))
                }); 


                await page.screenshot({path:"./listmoreplacesimages/mrktplacescroll.png"})

                console.log("Already taken Screen shot After Clicking Selling Button and Scrolling to the bottom of all Listings")

                // console.log("have waited for 30 seconds before taking the screenshot of marketplace scrolling to the bottom mrktplcscrolle")

                await page.evaluate(async()=>{
                    await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 100ms
                    
                })


                await page.waitForSelector('div[role="button"][aria-label^="More options for"]');

                let moreoptionsellipses=await page.$$('div[role="button"][aria-label^="More options for"]');

                console.log("here is number of MORE OPTIONS ELLIPSES BUTTONS  " + moreoptionsellipses.length);


                if(moreoptionsellipses.length>0){
                    for(let index=0; index<moreoptionsellipses.length; index++){
                        
                        //wait for 2 seconds before moving to the next Listed Item
                        await page.evaluate(async()=>{
                            await new Promise(resolve=>setTimeout(resolve,2000)) 
                        })


                        // Re-fetch the button to ensure it's still valid
                        moreoptionsellipses = await page.$$('div[role="button"][aria-label^="More options for"]');
                        const moreoptionsbutton = moreoptionsellipses[index];

                        if (!moreoptionsbutton) {
                            console.log(`Button at index ${index} is detached or no longer available.`);
                            continue; // Move to the next iteration if the element is detached
                        }


                        await page.evaluate((ellipsebutton)=>{
                            ellipsebutton.scrollIntoView();
                        },moreoptionsellipses[index])


                        //wait for 2 seconds before moving to the next Listed Item
                        await page.evaluate(async()=>{
                            await new Promise(resolve=>setTimeout(resolve,1000)) 
                        })


                        // Wait for 2 seconds before the next action
                        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 500)));

                        // Click on the element
                        try {
                            await moreoptionsbutton.click();
                            console.log(`Clicked on the More Options for INDEX ${index}`);
                        } catch (error) {
                            console.log(`Error clicking the button at index ${index}: ${error.message}`);
                        }
                        // await moreoptionsbutton.click()


                        //wait for 2 seconds before moving to the next Listed Item
                        await page.evaluate(async()=>{
                            await new Promise(resolve=>setTimeout(resolve,1000)) 
                        })


                        console.log('Already clicked on the More Options for INDEX ' + index + '  ......for each lisingtin inside loop about to take screen shot')


                        await page.screenshot({path:"./listmoreplacesimages/scrollintoviewlisting.png"})



                        console.log('Already TAKEN SCREENSHOT on the More Options for ' + index + '  ......for each lisingtin inside loop about to take screen shot')


                    }
                }
                else{
                    console.log("MORE OPTIONS ELLISPSE LESS THAN 0 LENGTH")
                }





                // await page.waitForSelector('div[aria-label="Marketplace Composer"][role="main"]', {timeout:80000})


                // await page.waitForSelector('::-p-xpath(//a[.//span[text()="Item for sale"]])');

                // Wait for the link to be available
                // const itemforsalebutton = await page.$('::-p-xpath(//a[.//span[text()="Item for sale"]])');

                // const itemforsaleElementHandle=itemforsalebutton;

                // await page.evaluate(async()=>{


                //     let scrollabledivs=document.querySelectorAll(".xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.xx8ngbg.xwo3gff.x1oyok0e.x1odjw0f.x1e4zzel.x1n2onr6.xq1qtft");
                    
                //     console.log("scrollabledivs lenghts here is the number of scrollable divs length    " + scrollabledivs.length);
                    
                //     let scrollablediv=scrollabledivs[1];

                //     console.log("scrollable div is right here   " + scrollablediv.scrollHeight +'       ' + scrollablediv.clientHeight); 

                //     console.log("whole document height" + scrollablediv.textContent);
                

                //     let totalHeight = 0;
                //     let distance = 200; // scroll step in pixels
            
                //     while (totalHeight < scrollablediv.scrollHeight) {
                //         scrollablediv.scrollBy(0, distance);
                //         totalHeight += distance;
                //         await  new Promise(resolve => setTimeout(resolve, 1000)); 


                //         console.log("just did a scroll")

                                
                //         // new Promise(resolve => setTimeout(resolve, 5000)); // wait for 100ms
                //     }


                // })

                
            //     // wait for 30 seconds before starting to scroll the joined groups 
            //     await page.evaluate(()=>{
            //         return new Promise(resolve => setTimeout(resolve, 1000))
            //     }); 


            //     await page.screenshot({path:"./listmoreplacesimages/mrktplacescroll.png"})


            //     // console.log("have waited for 30 seconds before taking the screenshot of marketplace scrolling to the bottom mrktplcscrolle")

            //     await page.evaluate(async()=>{

            //         await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 100ms
                    
            //     })

            // //wait for 30 seconds after clicking the Next button before taking screenshot
            // await page.evaluate(()=>{
            //     return new Promise(resolve=> setTimeout(resolve,2000))
            // })

            await page.screenshot({path:"./listmoreplacesimages/afternextscreenshot.png", timeout:30000})
            //console.log( of after clicking the Next Button);
            // console.log("Already Taken screenshot after Clicking Next Button")


        // Wait for the element with the specified classes to appear
        await page.waitForSelector('.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xr9ek0c.xjpr12u.xzboxd6.x14l7nz5');

        // Select all elements with the specified classes
        const sharetogroupsbuttonsclasses = await page.$$('.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xr9ek0c.xjpr12u.xzboxd6.x14l7nz5');

        // console.log("Share To Groups Buttons classes List example using 1[1]:   sharetogroupsbuttonsclasses[1]");

        // console.log("Share To Groups Buttons classes List Length: ", sharetogroupsbuttonsclasses.length);


        // Ensure the array has at least 3 elementsy
        if (sharetogroupsbuttonsclasses.length > 3) {


            const divbuttons= await sharetogroupsbuttonsclasses[3].$$('div[role=button]');

            console.log("Total Number of Suggested Groups to share to: " + divbuttons.length);
            console.log("List of Suggested Share To Groups Buttons to be clicked: , divbuttons[1]");
                

            let alloweddivbuttons=[];

            if(divbuttons.length<21){


                console.log("Suggested Groups tto share Listiing to Are less than 21 so jusst Select all of them        + divbuttons ");
                console.log("Suggested Groups to share to are less than 21 so select all of them the length     " + divbuttons.length);


                for(const divbutton of divbuttons){

                    alloweddivbuttons.push(divbutton)
                }

            }
            else{
                console.log("Suggested Groups Are more than 20 so Select Randlomly 20 oof them       +  divbuttons");
                console.log("Suggested Groups Are more than 20 so Select RRandlomly 20 oof them here is the length     " + divbuttons.length);



                for(let i=0; alloweddivbuttons.length<50; i++){

                    const randomnumber=Math.floor(Math.random()*divbuttons.length)

                    // console.log("HHere iis the RANNDOM NUMBEER TO BE USEED + "  + randomnumber);
                    
                    alloweddivbuttons.push(divbuttons[randomnumber])
                }

            }
            
            console.log("Here is a   lilist  of tthe allowwed Groupps to share to     + alloweddivbuttons  ")
            console.log("Here is a   lilist  of tthe allowwed Groupps to share to Length    " + alloweddivbuttons.length)


            for(const eachgroupbutton of alloweddivbuttons){

                
                // try{
                //     (async(eachgroupbutton)=>{

                        const spans=await eachgroupbutton.$$('span');

                        // console.log("herer are the spans inside each Grououp Button to Click to share to              " + spans);

                        for(const eachgroupspan of spans){

                            const spaninnerhtml=await page.evaluate(el=>el.textContent, eachgroupspan)

                            // console.log("Eaach spaan inside iinnerHttML forr ach nGroup Button  " + spaninnerhtml);
                        }

                        // console.log("about to clicked on each Group to be shared to  button ")

                        await eachgroupbutton.click()

                        
                        //wait for 30 seconds after clicking the Next button before taking screenshot
                        await page.evaluate(()=>{
                            return new Promise(resolve=> setTimeout(resolve,1500))
                        })

                        
                //     })(eachgroupbutton);
                    
                // }
                // catch(err){
                //     console.log("Here is  an error tyring to share to suggested groupps  " + err)
                //     continue
                // }


            } 

        }
        else {
            console.log("Not enough elements found for sharetogroupsbuttonsclasses. to help find tthe sharet to more groups Class Div");
        }
    

        //wait for 30 seconds after clicking the Next button before taking screenshot
        await page.evaluate(()=>{
            return new Promise(resolve=> setTimeout(resolve,3000))
        })


        await page.waitForSelector(".xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.xx8ngbg.xwo3gff.x1oyok0e.x1odjw0f.x1e4zzel.x1n2onr6.xq1qtft")

        await page.evaluate(async()=>{

            const sharetomoregroupscontainers=document.querySelectorAll(".xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.xx8ngbg.xwo3gff.x1oyok0e.x1odjw0f.x1e4zzel.x1n2onr6.xq1qtft")
            
            console.log("here is the sharetomoregroups container  " + sharetomoregroupscontainers[0] + "  And her is the lenght os the containers for share to more groups   " + sharetomoregroupscontainers.length + "   share to more groups container [1] scroll heights  " +  sharetomoregroupscontainers[1].scrollHeight + "share to more groups container[2] scroll heights   " +  sharetomoregroupscontainers[2] + "share to more groups container[3] scroll heights   " +  sharetomoregroupscontainers[3]) 
    
            let totalHeight = 0;
            let distance = 200; // scroll step in pixels

            console.log("here is the height of the sharetomoregroups Container   " + sharetomoregroupscontainers[1].scrollHeight)

            while (totalHeight < sharetomoregroupscontainers[1].scrollHeight) {
                sharetomoregroupscontainers[1].scrollBy(0, distance);
                totalHeight += distance;
                await new Promise(resolve => setTimeout(resolve, 500)); // wait for 100ms


            
            }

        })

        await page.screenshot({path:"./listmoreplacesimages/sharetogroupslistscroll.png", timeout:30000})

        //console.log( of after clicking the Next Button);
        // console.log("Already Taken screenshot after Clickinng  Next Now I am in shareto moregroupslist PNG list to Suggested Groups  ")


        await page.screenshot({path:"./listmoreplacesimages/sharetogroupslist.png", timeout:30000})


        //console.log( of after clicking the Next Button);
        // console.log("Already Taken screenshot after Clickinng  Next Now I am in shareto moregroupslist PNG list to Suggested Groups  ")


        await page.waitForSelector('div[role="button"][aria-label="Publish"]', {timeout:90000});

        const publishbutton=await page.$('div[role="button"][aria-label="Publish"]')

        console.log(" \n\n  Here is the PUBLISH BUTTON RIGHT HERE " + publishbutton.textContent );




        // Wait for the popup container to appear
        // await page.waitForSelector('.x78zum5.xdt5ytf.xe8uvvx.x193iq5w');

        // Select the popup container
        const popupContainer = await page.$('.x78zum5.xdt5ytf.xe8uvvx.x193iq5w');

        console.log(popupContainer + "  here is the pop up POP UP container ");

        if (popupContainer) {
            // Select the buttons inside the popup container that have the aria-label "Close"
            const popupbuttons = await popupContainer.$$('div[aria-label="Close"]');

            // Optional: Do something with the buttons, like clicking the first one
            if (popupbuttons.length > 0) {

                console.log("here is the CRAZY POP UP" + popupbuttons.length);
                
                for(let i=0; i<popupbuttons.length; i++ ) {

                    console.log("EACH LOOP OF CLOSE POPUP BUTTON ");
                    await popupbuttons[i].click()

                    //wait for 30 seconds after clicking the Next button before taking screenshot
                    await page.evaluate(()=>{
                        return new Promise(resolve=> setTimeout(resolve,10))
                    })
                }

                const availablepopups=await popupContainer.$$('div[aria-label="Close"]');

                if(availablepopups.length>0){
                    //wait for 30 seconds after clicking the Next button before taking screenshot
                    await page.evaluate(()=>{
                        return new Promise(resolve=> setTimeout(resolve,2000))
                    })
                }

                await publishbutton.click();

                console.log(" I just clickedo n the the  PUBLISH BUTTON ")

                //wait for 30 seconds after clicking the Next button before taking screenshot
                await page.evaluate(()=>{
                    return new Promise(resolve=> setTimeout(resolve,30000))
                })
            }
            else{
                console.log("No POPUP LISTED INSIDE THE POPUP CONTAINER");
                
                await publishbutton.click();

                console.log(" I just clickedo n the the  PUBLISH BUTTON ")

                //wait for 30 seconds after clicking the Next button before taking screenshot
                await page.evaluate(()=>{
                    return new Promise(resolve=> setTimeout(resolve,30000))
                })
            }
        } else {
                console.log('Popup container not found');



                await publishbutton.click();

                console.log(" I just clickedo n the the  PUBLISH BUTTON ")

                //wait for 30 seconds after clicking the Next button before taking screenshot
                await page.evaluate(()=>{
                    return new Promise(resolve=> setTimeout(resolve,30000))
                })
        }


        await page.screenshot({path:"./listmoreplacesimages/finishedpostingcreenshot.png", timeout:30000})
        //console.log( of after clicking the Next Button);

        console.log(" SUCCESSFULLY POSTED TO MARKETPLACE  CONGRATULATIONS YEGON YOU FINALLY PROVED THAT YOU COULD DO IT  Taken screenshot TO finishedpostingscreenshot.png  \n\n ")

        // Get the current time
        const currentTime2 = await page.evaluate(() => {
            return new Date().toLocaleString();
        });

        
        console.log("here is the TIME STAMP OF PAGE of JUST FINISHED POSTING PRODUCT  ] " + currentTime)
        
        console.log('Current Time:', currentTime2 + "  \n:");

        //wait for 30 seconds after clicking the Next button before taking screenshot
        await page.evaluate(()=>{
            return new Promise(resolve=> setTimeout(resolve,1000))
        })

        
        console.log("After waiting for 3 seconds after successfully posting I am moving to the next Procut to Post in marketplace ")
        
                                    
                  
    }
    catch(err){
        console.log("final big error")
        console.log(err);
        // Perform alternative actions here
        
        if (err.name === 'TimeoutError') {
            console.log('Post text area button not found within the timeout period.');
            console.log("It's a time out error")
        }
        else {
            throw err;
        }
    }
    finally{
        if(page){
                console.log("Here is the page to be FINALLY closed")

                // const puppeteer = require('puppeteer');

                // Get the current time
                const currentTime = await page.evaluate(() => {
                    return new Date().toLocaleString();
                });

                
                console.log("here is the TIME STAMP OF PAGE CLOSING  + :" + currentTime)
                
                console.log('Current Time:', currentTime);

                await page.close();  // Close browser if it was successfully launched

                console.log("Here is the BROWSER to be FINALLY closed")
    
                await browser.close();  // Close browser if it was successfully launched
            
        }
        else if(browser) {
            console.log("Here is the BROWSER to be FINALLY closed")

            await browser.close();  // Close browser if it was successfully launched
        }
    }


}





