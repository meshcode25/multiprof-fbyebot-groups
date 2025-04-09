import dotenv from 'dotenv';
dotenv.config();

// import { timeout } from 'puppeteer-core';
// import { parseEnv } from 'util';

// import { time } from 'console';
// import { zip } from 'puppeteer-core/lib/esm/third_party/rxjs/rxjs.js';
// import puppeteer, { ElementHandle, PageEvent } from 'puppeteer';


import path from 'path';
import fs from "fs"
import { createTracing } from 'trace_events';
import { TimeoutError } from 'puppeteer';


export async function postTogroups(page,browser){


    try{

        console.log("Here is the page to be FINALLY closed aT THE BEGINNING  " + page)

        console.log("Here is the browser to be FINALLY closed" + browser)



        
        
        // Listen for console messages from the browser context
        page.on('console', (msg) =>
            {
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
                
                else if(msg.text().includes("DIVTEXTAREAS  divtexttextarea    " )){
                    console.log('PAGE LOG:', msg.text())

                }
                else if(msg.text().includes("Here is the DIVTEXTAREA's DETAILS TO USE    " )){
                    console.log('PAGE LOG:', msg.text())

                }
                else if(msg.text().includes("Just SUCCESSFULLY FILLED THE CREATE PUBLIC POST TEXT AREA")){
                    console.log('PAGE LOG:', msg.text())

                }
                else if(msg.text().includes("DIVTEXTAREAS NOT FOUND, THROUGH ERROR  ")){
                    console.log('PAGE LOG:', msg.text())

                }
                else if(msg.text().includes("here textareas value"   )){
                    console.log('PAGE LOG:', msg.text())

                }

                else{
                
                } 
            })                                       
        






        // page.setCacheEnabled(false)
        
        const originalurl=page.url();
        console.log("About to post to Groups")
        console.log("here is the origin url of homne page " , originalurl)

        await page.goto("https://web.facebook.com/groups/joins/?nav_source=tab&ordering=viewer_added", { waitUntil: 'networkidle2', timeout:80000 });


        // Log the current URL
        console.log('No navigation occorred after clicking Groups Link hence :Current URL:', page.url());

        page.on('framenavigation', async ()=>{
            // await page.waitForNavigation();
            console.log('navigation just occured')
        })
        // Listen for navigation events
        // await page.waitForNavigation({timeout:300000});


        console.log("waiting for 2 Minutes second minutes before Iswart wanting to wait for the  Class slecorss sSSSSSSSSSSSelectors  of my groups")


         // wait for 30 seconds before starting to scroll the joined groups 
         await page.evaluate(async()=>{
            return new Promise(resolve => setTimeout(resolve, 4000))
        }); 
       


        console.log("i don't think a navigation occurred  to groups url" , page.url())
        
        

        await page.waitForSelector('.x8gbvx8.x78zum5.x1q0g3np.x1a02dak.x1nhvcw1.x1rdy4ex.xcud41i.x4vbgl9.x139jcc6', {timeout:120000});

        await page.waitForSelector('.x9f619.x78zum5.x1r8uery.xdt5ytf.x1iyjqo2.xs83m0k.x150jy0e.x1e558r4.xjkvuk6.x1iorvi4.xnpuxes', {timeout:120000});

        await page.waitForSelector('a[aria-label="View group"]', {timeout:120000});
        



        await page.waitForFunction(() => {
            return Array.from(document.querySelectorAll('a')).some(a => 
                Array.from(a.querySelectorAll('span')).some(span => span.textContent.includes('View group'))
            );
        });





        await page.screenshot({ path: "./userscache/images/groups.png" });


        console.log("already taken a screenshot of the groups link did you see the screenshot in groups.png")

        console.log("already taken a screenshot of the groups link did you see the screenshot 222222  in groups.png")
        


        // wait for 30 seconds before starting to scroll the joined groups 
        await page.evaluate(()=>{
            return new Promise(resolve => setTimeout(resolve, 4000))
        }); 
       
    
        
        
        const documentHeight= await page.evaluate(() => document.body.scrollHeight);

        console.log("Document Height of the document  outside the while loop" + documentHeight)

        const screenHeight= await page.evaluate(() => window.innerHeight);
        
        console.log("SCREEN  Height of the document  inside the while loop FOR THE WHOLE SCREEN" + screenHeight);
        
        

        let totalHeight = 0;
        let distance =300; // scroll step in pixels
        let previousHeight = 0;
        let maxScrolls = 50; // Safety limit in case of infinite scroll
        let scrolls = 0;
        

        // wait for 30 seconds before starting to scroll the joined groups 
        await page.evaluate(()=>{
            return new Promise(resolve => setTimeout(resolve, 3000))
        }); 


        while (scrolls < maxScrolls) {

            let viewportHeight= await page.evaluate(() => document.body.scrollHeight);
            
            console.log("Document Height of the document  inside the  TOP OF while loop loop TOP HEIGHT  <br> " + viewportHeight)



            console.log("here is the distane length  + " + distance)
 
            // Scroll by the defined distance
            await page.evaluate((distance) => {
                window.scrollBy(0, distance);
            }, distance);
 
            
            // wait for 30 seconds before starting to scroll the joined groups 
            await page.evaluate(()=>{
                return new Promise(resolve => setTimeout(resolve, 800))
            }); 

            
            // console.log("New Document Height after change in Scroll AFTRa NEW SCROLL  " + viewportHeight)


            // Get the new scroll height
            previousHeight += distance;

   
            // console.log("New Document Height of the document after a Scroll Happended  <br>" + previousHeight)

            let newviewportHeight= await page.evaluate(() => document.body.scrollHeight);
         
            
            // console.log("New Document Height after change in Scroll AFTRa NEW SCROLL  " + viewportHeight)


            console.log("New Document Height after change in Scroll AFTRa NEW SCROLL  " + newviewportHeight)


            console.log("scrolls if it will break the loop + scrolls " + scrolls )




            // Break the loop if no new content is loaded
            if (previousHeight >= newviewportHeight) {
                console.log("No more content to load" + previousHeight);
                break;
            }
        

            // previousHeight = newHeight;
            scrolls++;


            // wait for 30 seconds before starting to scroll the joined groups 
            await page.evaluate(()=>{
                return new Promise(resolve => setTimeout(resolve, 600))
            }); 



            await page.screenshot({ path: "./userscache/images/groupsscroll.png" });

            console.log("already taken a screenshot of the groups link did you see the screenshot after SCROLL")
    


            console.log("scrolls if the loop still goes on + scrolls " + scrolls )
        }
        






       const joinedgroups= await page.$$('a[aria-label="View group"]')

       console.log("here are the joined groups " + joinedgroups.length);

       for(const joinedgroup of joinedgroups){
            
            const linkhtml=await page.evaluate(el=> el.href,joinedgroup)
            // console.log(linkhtml);
        }





        const joinedgroupslinks = await page.evaluate( async () => {

            // wait for 30 seconds before starting to scroll the joined groups 
            await new Promise(resolve => setTimeout(resolve, 3000)); 
        

            // const containe = document.querySelectorAll('.x8gbvx8.x78zum5.x1q0g3np.x1a02dak.x1nhvcw1.x1rdy4ex.xcud41i.x4vbgl9.x139jcc6');
            // const containers = document.querySelectorAll('.x9f619.x78zum5.x1r8uery.xdt5ytf.x1iyjqo2.xs83m0k.x150jy0e.x1e558r4.xjkvuk6.x1iorvi4.xnpuxes');
            // console.log(containers.length);
       
            // let totalHeight = 0;
            // let distance = 400; // scroll step in pixels
    
            // while (totalHeight < document.body.scrollHeight) {
            //     window.scrollBy(0, distance);
            //     totalHeight += distance;
            //     // await  new Promise(resolve => setTimeout(resolve, 1000)); 

                
            //     // wait for 30 seconds before starting to scroll the joined groups 
            //     await page.evaluate(()=>{
            //         return new Promise(resolve => setTimeout(resolve, 10000))
            //     }); 
                            
            //     // new Promise(resolve => setTimeout(resolve, 5000)); // wait for 100ms
            // }


            // const containerlinks=containers.forEach(container)
            let links = [];
    
    
            // const hrefs=Array.from(document.querySelectorAll('a')).filter(a => 
            //     Array.from(a.querySelectorAll('span')).some(span => span.textContent.includes('View group'))
            // );
            

            const hrefs=Array.from(document.querySelectorAll('a')).filter(a => {
                
                return Array.from(a.querySelectorAll('span')).some(span => 
                    span.textContent.includes('View group')
                );
                
                
            }) 
                


            hrefs.forEach(link => {
                links.push(link.href);
            });
        
            // console.log('Group Links:', groupLinks);
            return links;
        });




        console.log("here are the joined groups links");
        console.log("here is the number of the joined groups " + joinedgroupslinks.length);
        // console.log(joinedgroupslinks);



                                                                                                                
        // console.log("Here are the rest from 100-200 links ")

        // for(let i=100; i<200; i++){
        //     console.log(joinedgroupslinks[i]);
        // }


                                                                  
        // console.log("Here are the rest from 200-300 links ")

        // for(let i=200; i<300; i++){
        //     console.log(joinedgroupslinks[i]);
        
        // }

        // console.log("Here are the rest from 300-400 links ")

        for(let i=30; i<100; i++){
            console.log(joinedgroupslinks[i]);
        
        }

        // console.log("Here are the rest from 401-440 links ")

        // for(let i=401; i<440; i++){
        //     console.log(joinedgroupslinks[i]);
        
        // }


        // wait for 30 seconds before starting to scroll the joined groups 
        await page.evaluate(()=>{new Promise(resolve => setTimeout(resolve, 3000))}); 
       

        await page.screenshot({path:"./userscache/images/joinedgroup.png"})


        // console.log("Here is the page to be FINALLY closed aT THE BEGINNING  " + page)

        // console.log("Here is the Browser to be FINALLY closed" + browser)


        // await page.screenshot({path:"./userscache/images/closepage.png"})

        // await page.close();

        // // await page.screenshot({path:"./userscache/images/closedpage.png"})


        // await browser.close();





        for(let i=90; i<130; i++){
            // console.log(grouplink);

                // setTimeout(()=>{

            // },60000)
                
            // await page.goto();

            
            
            try{

                                
                //wait for 30 seconds after clicking the Next button before taking screenshot
                await page.evaluate(()=>{
                    return new Promise(resolve=> setTimeout(resolve,10000))
                })

                console.log("\n About to move to the next gropu to post" + "Group Link Index =  i="  + i + "\n" )

                // Get the current time
                const currentTime = await page.evaluate(() => {
                    return new Date().toLocaleString();
                });
                
                  
                console.log("\n\n here is the TIME STAMP OF PAGE of JUST the BEGINNING OF  POSTING PRODUCT  ] " + currentTime)
                                            
                console.log('Current Time:', currentTime + "  \n:");


                console.log(joinedgroupslinks[i]);
           
                //first go to facebook homepage
                await page.goto(`https://web.facebook.com/`, { waitUntil: 'networkidle2', timeout:80000 }); // Wait until the network is idle
       

                // await page.goto("https://www.facebook.com/groups"); // Go to any Facebook page

                // await page.waitForTimeout(3000); // Wait a bit

                if (page.url().includes("facebook.com/login")) {
                    await page.goto("https://www.facebook.com/login"); // Redirect to login page
                    
                    console.log("\n\n ⚠️ Logged out! Redirecting to login... \n\n");

                    break;
                } else {
                    console.log("✅ Still logged in! Proceeding to next group.");
                }





                //wait for 30 seconds after clicking the Next button before taking screenshot
                await page.evaluate(()=>{
                    return new Promise(resolve=> setTimeout(resolve,2000))
                })

                //wait for 30 seconds then got to the indifvidual group page
                await page.goto(`${joinedgroupslinks[i]}`, { waitUntil: 'networkidle2', timeout:80000 }); // Wait until the network is idle
       
                // wait for 30 seconds before starting to scroll the joined groups 
                // await page.evaluate(()=>{new Promise(resolve => setTimeout(resolve, 5000))}); 
            

                //wait for 30 seconds after clicking the Next button before taking screenshot
                await page.evaluate(()=>{
                    return new Promise(resolve=> setTimeout(resolve,1000))
                })

                await page.screenshot({path:"./userscache/images/mygroups.png", timeout:30000})
                //console.log( of after clicking the Next Button);
                console.log("Already Taken screenshot After each Group changes URL to group ")

                // Wait for the div with the specified aria-label to be available
                await page.waitForSelector('div[aria-label="Sell Something"]');

                // Find the div element


                const sellSomethingButton= await page.evaluate(async ()=>{

                    const sellSomethingDiv = document.querySelector('div[aria-label="Sell Something"]');

                    // return sellSomethingDiv ? sellSomethingDiv.textContent : null;

                    // const sellSomethingDiv = document.querySelector('div[aria-label="Sell Something"]');
                    // console.log(sellSomethingDiv);
                    return sellSomethingDiv ? sellSomethingDiv.innerHTML : null;

                })
                
                // console.log(sellSomethingButton);
            
                // Perform an action on the div, for example, click it
                if (sellSomethingButton) {

                    // wait for 30 seconds before starting to scroll the joined groups 
                    await page.evaluate(async ()=>{return new Promise(resolve => setTimeout(resolve, 4000))}); 
                                    
                    await page.waitForSelector('div[aria-label="Sell Something"]');

                    console.log("here is the sell something button " + sellSomethingButton);
            
                    await page.click('div[aria-label="Sell Something"]');

                    console.log('Div with aria-label "Sell Something" clicked.');

                    
                    
                    // wait for 30 seconds before starting to scroll the joined groups 
                    await page.evaluate(async ()=>{return new Promise(resolve => setTimeout(resolve, 1000))}); 
                
                    
                    // await page.waitForSelector('div[role="button"]');
                    await page.waitForFunction(() => {
                        return Array.from(document.querySelectorAll('span')).some(span => span.innerHTML.includes('Item for sale'));
                    });
                    




                    const folderpath=process.env.root
                    
                    console.log("here is the folder path " + folderpath)

                    const filepath=path.join(folderpath, "folderdetails.txt")

                    // Read the content of the file
                    const fileContent = fs.readFileSync(filepath, 'utf8');

                    // Assuming the content is simple text, you can log it or use it further
                    console.log('Folder listing details File Content:', fileContent);

                    // If the content is like "listingtype: Item for sale", you might want to parse it
                    // Example: Extract "Item for sale"
                    const listingType = fileContent.split(':')[1]?.trim(); // Extract the part after "listingtype:"

                    console.log('Listing Type:', listingType);

                    // if(listingType==="Item for Sale")


                    if(listingType==='Item for sale'){

                        // wait for 30 seconds before starting to scroll the joined groups 
                        await page.evaluate(async ()=>{return new Promise(resolve => setTimeout(resolve, 3000))}); 
                                        

                        // Wait for the buttons to be available
                        await page.waitForSelector('div[role="button"]');



                        // Retrieve buttons as ElementHandles
                        const listingTypeButtons = await page.$$('div[role="button"]');

                        // Filter buttons based on the text content inside
                        for (const button of listingTypeButtons) {
                            const textContent = await page.evaluate(el => el.innerText, button);

                            if (textContent.includes('Item for sale')) {
                                try {
                                    // wait for 30 seconds before starting to scroll the joined groups 
                                    await page.evaluate(async ()=>{return new Promise(resolve => setTimeout(resolve, 2000))}); 
                                
                                    await button.click(); // Click the button
                                    console.log('Clicked button with text:', textContent);

                                    // wait for 30 seconds before starting to scroll the joined groups 
                                    await page.evaluate(async ()=>{return new Promise(resolve => setTimeout(resolve, 2000))}); 
                                
                                    await page.screenshot({path:"./userscache/images/itemforsalebutton.png",timeout:60000})
                                    
                                } catch (error) {
                                    if(error==="TimeoutError"){
                                        console.log("timout error on the posting page")
                                        // continue;
                                    }
                                        console.error('Error clicking button:', error);
                                }
                             
                            }
                        }



                        //Now start posting to the group

                        // Wait for the buttons to be available
                        await page.waitForSelector('div[role="button"]');      
                        
                        

                        // Wait for the modal to appear
                        // await page.waitForSelector('#:r66:', { visible: true });


                        // await page.waitForSelector('div[role="button"]');
                        await page.waitForFunction(() => {
                            return Array.from(document.querySelectorAll('span')).some(span => span.innerHTML.includes('or drag and drop'));
                        });

                        // await page.waitForFunction(() => {
                        //     return Array.from(document.querySelectorAll('a')).some(a => 
                        //         Array.from(a.querySelectorAll('span')).some(span => span.textContent.includes('View group'))
                        //     );
                        // });

                        // wait for 30 seconds before starting to scroll the joined groups 
                        await page.evaluate(async ()=>{return new Promise(resolve => setTimeout(resolve, 2000))}); 
                                        

                        await page.screenshot({path:"./userscache/images/listingpopup.png",timeout:60000})
                        console.log("took a screenshot of the popup adf adf adfa sfad sfads fadsf adsf adf ")


                        // Retrieve buttons as ElementHandles
                        // Retrieve buttons as ElementHandles
                        const addImageButton = await page.$$('div[role="button"]');
                        // console.log("Here are the buttons on upload images")
                        // console.log(addImageButton);

                        // Filter buttons based on the text content inside
                        console.log("AddImageButton  Length   " + addImageButton.length);
                        
                        for (const button of addImageButton) {
                            
                            const addImgBtn = await page.evaluate(el => el.innerText, button);
                            
                            
                            
                            if (addImgBtn.includes('or drag and drop')) {
                                console.log("Here are the evaluated add image buttons on upload images")
                                
                                console.log("Button innerText                          " + button.textContent)


                                console.log("addImgBtn innerText                          " + addImgBtn)
                                                            
                                // Get the textContent of the button
                                const buttonText = await page.evaluate(el=>el.innerText, button)

                                console.log('Button textContent   :', buttonText);

                                // console.log("Button to be clicked Length  "  + button.length)
                                // console.log("Add ImgBtn to clicked Length  "  + addImgBtn.length)
                                
                                // console.log("Button to be clicked    "  + button)
                                // console.log("Add ImgBtn to clicked   "  + addImgBtn)

                            

                                try {
                                    // await button.click(), // Trigger the click to open the file chooser

                                    // await page.waitForTimeout(20000); // 2000ms = 2 seconds delay
                                    
                                    // await button.click(); // Click the button

                                    
                                    //Upload a file using Puppeteer
                                    // const [fileChooser] = await Promise.all([
                                    // ]);
                                    // await page.awaitSelector('')
    
                                    // await page.waitForSelector('div[role="button"]');
                                    await page.waitForFunction(() => {
                                        return Array.from(document.querySelectorAll('span')).some(span => span.innerHTML.includes('or drag and drop'));
                                    });

                                    await page.waitForSelector('div[role="button"]', {visible: true});


                                    // Upload a file using Puppeteer
                                    const [fileChooser] = await Promise.all([
                                        page.waitForFileChooser({timeout:60000}), // Wait for the file chooser to be triggered                                        
                                        await button.click(), // Trigger the click to open the file chooser
    
                                    ]);
    

                                    
                                    
                                    // Define the folder path
                                    const folderPath = process.env.root;

                                    // Function to read the details from the folder
                                    const readFolderContents = () => {
                                        // Get list of all files in the folder
                                        const files = fs.readdirSync(folderPath);

                                        // Separate the text file and image files
                                        const txtFile = files.find(file => file.endsWith('.txt'));
                                        const imageFiles = files.filter(file => !file.endsWith('.txt'));

                                        // const folderImages = files.filter(file => file.endsWith('.jpg'));
                                        const imagepaths=[];
                                        const imagetextpaths=[];

                                        for(const imagepath of imageFiles){
                                            
                                            const folderimagePaths=path.join(folderpath,imagepath);

                                            const readfolderImagespaths= fs.readdirSync(folderimagePaths)

                                            // console.log(readfolderImagespaths);
                                            // console.log(folderimagePaths);


                                            // Separate the text file and image files
                                            const imagestxtFile = readfolderImagespaths.find(file => file.endsWith('.txt'));
                                            const imagesfilesPaths = readfolderImagespaths.filter(file => !file.endsWith('.txt'));

                                            // console.log(imagestxtFile);
                                            // console.log(imagesfilesPaths);

                                            
                                            for(const eachimagepath of imagesfilesPaths){
                                                const absolutimagePath=path.join(folderimagePaths,eachimagepath);
                                                // console.log("Absolute Image Path for each Image File " + absolutimagePath);

                                                imagepaths.push(absolutimagePath);
                                            }


                                            // for(const eachimagetextFile of imagestxtFile){
                                                
                                            // }


                                            const absolutimagetextPath=path.join(folderimagePaths,imagestxtFile);
                                            // console.log("Absolute .TXT FILE FOR Each Folder for Imags txt File .txt " +  absolutimagetextPath);

                                            imagetextpaths.push(absolutimagetextPath);
                                        
                                        
                                        
                                        }


                                        // Read the content of the text file
                                        const txtFilePath = path.join(folderPath, txtFile);
                                        const fileContent = fs.readFileSync(txtFilePath, 'utf8');

                                        


                                        // const imagetextContent=imagetextpaths;
                                        // const folderimagestxtfile=fs.readdirSync(folderPath,)



                                        // Return both text content and image file paths
                                        return {
                                            rootfoldertxtContent: fileContent,
                                            imagestxtfilepaths:imagetextpaths,
                                            imagespaths:imagepaths,
                                            // images: imageFiles.map(image => path.join(folderPath, image))
                                        };
                                    };

                                    // Read  ROOT folder contents
                                    const {rootfoldertxtContent,imagestxtfilepaths,imagespaths}=readFolderContents();


                                    // console.log("here is the text Content DETAILS OF  file in ROOT Folder for root  " + rootfoldertxtContent)
                                    // console.log("here is the Images txt file PATHS  " + imagestxtfilepaths);
                                    
                                    // console.log("here is the images files paths in Folder for root " + imagespaths)
                                    console.log(imagespaths);


                                    const imagestxtfileContent=fs.readFileSync(imagestxtfilepaths[0], "utf8");
                                    // console.log("here is the read File for the Images File text Content " + imagestxtfileContent);


                                    // Parse the txt file content into an object
                                    const data = {};

                                    imagestxtfileContent.split('\n').forEach(line => {
                                        const [key, ...value] = line.split(':');
                                        
                                        if (key && value) {
                                            data[key.trim().toLowerCase()] = value.join(':').trim();
                                        }
                                    });

                                    console.log(imagestxtfileContent);
                                    
                                    console.log("here is the for data  " + data)
                                    console.log(data)

                                    
                                    // Replace ellipses (...) with new lines (\n) in the description
                                    const formattedDescription = data.description.replace(/\.\.\./g, '\n\n\n');

                                    // console.log("here is the formatted data" + formattedDescription)
                                    // console.log(formattedDescription);

                                    // console.log("Here is the formatted description " + formattedDescription )f
                                    
                                    // Upload multiple files (provide the absolute paths to the images)                                            
                                    await fileChooser.accept(imagespaths);    
                                    
                                    // "/home/y/fbyebot1.0/phones/451780393_122123902634349689_981859647559599175_n.jpg",                                    
                                    // "/home/y/Bilder /Screenshot from 2024-08-27 23-36-23.png",    
                                    // "/home/y/fbyebot1.0/phones/451833410_122123902592349689_2546841386593894967_n.jpg",

                                    // Set file paths to be uploaded
                                    // await fileChooser.accept(['/absolute/path/to/your/file.txt']);

                                    console.log('Clicked button with text:', button);

                                    console.log('Clicked addImgBtn with text:', addImgBtn);
                                    console.log('Clicked addImgBtn length:', addImgBtn.length);



                                    // // Wait for a specific timeout (e.g., 5000 milliseconds) before taking a screenshot
                                    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));


                                    await page.screenshot({path:"./userscache/images/addimgbtn.png",timeout:60000})
                                























































































                                    const labels = await page.$$("label");

                                    console.log(`number of Title Labels =  :-" ${labels.length}`)


                                    // for(const labeldata of labels){
                                    //     console.log("Here is the Title  Label Inner HTML " + "/n" + labeldata);

                                    // }

                                    




                                    // Iterate through each label (if you expect multiple labels)
                                    for (const label of labels) {
                                        // Find the input inside the label
                                        const inputElement = await page.evaluateHandle(label => {
                                    
                                            const span = Array.from(label.querySelectorAll('span')).find(span => span.textContent.includes('Title'));           

                                            const input = label.querySelector('input');

                                            return {
                                                span:input && span? span.outerHTML : null,
                                                input:input? input :null
                                            }
                                                
                                        }, label);

                                        // console.log(inputElement);
                                        // const spanHTML = await page.evaluate(el => el.outerHTML, inputElement);


                                        // Extract spanHTML
                                        const spanHTML = await inputElement.getProperty('span');
                                        const spanText = await spanHTML.jsonValue(); // Convert it into a usable value

                                        // Extract input element (convert JSHandle to ElementHandle)
                                        const inputHandle = await inputElement.getProperty('input');
                                        const inputasElement = inputHandle.asElement(); // Convert to ElementHandle



                                        // const spanHTML = await page.evaluate(el => el, inputElement.span);
                                        // const input=await page.evaluate(el => el, inputElement.input);


                                        console.log('Span HTML:', spanHTML);
                                        console.log('Input Elemmtnt ' , inputasElement);
                                
                                        console.log('Span Text:', spanText);



                                        // Convert JSHandle to a value you can log
                                        if (spanText===null  ) {
                                            console.log('No matching span or input found inside label');
                                        } 
                                        else {        
                                            const spanHTML = await page.evaluate(el => el, inputElement);

                                            // console.log('Span HTML:', spanHTML);

                                            // Fill the input with text
                                            await inputasElement.fill(data.title);
                                            

                                            // wait for 30 seconds before starting to scroll the joined groups 
                                            await page.evaluate(()=>{
                                                return new Promise(resolve => setTimeout(resolve, 8000))
                                            }); 
                                        



                                            console.log("Input field filled successfully.");

                                            // return;
                                        }
                                        
                                    }



                                        // if (inputElement) {

                                        // }

                                    // Wait for the label with aria-label="Title" to be present


                                    // await page.waitForSelector('label[aria-label="Price"]');
                                    //Here is the modified text with dots after each class and no spaces:  

                                    await page.waitForSelector(".x1i10hfl.xggy1nq.x1s07b3s.x1kdt53j.x1a2a7pz.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x9f619.xzsf02u.x1uxerd5.x1fcty0u.x132q4wb.x1a8lsjc.x1pi30zi.x1swvt13.x9desvi.xh8yej3")

                                    // "x1i10hfl.xggy1nq.x1s07b3s.x1kdt53j.x1a2a7pz.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x9f619.xzsf02u.x1uxerd5.x1fcty0u.x132q4wb.x1a8lsjc.x1pi30zi.x1swvt13.x9desvi.xh8yej3"
                                    // Select all labels with aria-label="Title"
                                    // const pricelabels = await page.$$('label[aria-label="Price"]');

                                    // console.log(pricelabels + "here are the price labels ")

                                    // Iterate through each label (if you expect multiple labels)
                                    const pricelabels = await page.$$("label");

                                    console.log(`number of Price  Labels =  :-" ${pricelabels.length}`)


                                    // for(const labeldata of pricelabels){
                                    //     console.log("Here is the Price Labels Inner HTML " + "/n" + labeldata);

                                    // }

                                    












                                    // Iterate through each label (if you expect multiple labels)
                                    for (const label of pricelabels) {
                                        // Find the input inside the label
                                        const inputElement = await page.evaluateHandle(label => {
                                    
                                            const span = Array.from(label.querySelectorAll('span')).find(span => span.textContent.includes('Price'));           


                                            const input = label.querySelector('input');

                                            return {
                                                span:  input && span? span.outerHTML : null,
                                                input:  input? input : null
                                            }
                                       
                                        }, label);


                                        // console.log(inputElement);


                                        // Extract spanHTML
                                        const spanHTML = await inputElement.getProperty('span');
                                        const spanText = await spanHTML.jsonValue(); // Convert it into a usable value

                                        // Extract input element (convert JSHandle to ElementHandle)
                                        const inputHandle = await inputElement.getProperty('input');
                                        const inputasElement =await inputHandle.asElement(); // Convert to ElementHandle


                                        // console.log("Price input Handle  : ", inputasElement);

                                        // console.log("Price input Span Text  : ", spanText);




                                         // Convert JSHandle to a value you can log
                                        if (spanText===null  ) {
                                            // console.log('No matching span or input found inside label');
                                        } 
                                        else {        
                                            // const spanHTML = await page.evaluate(el => el, inputElement);

                                            // console.log('Span HTML:', spanHTML);

                                            // Fill the input with text
                                            await inputasElement.fill(data.price);
                                            


                                            // wait for 30 seconds before starting to scroll the joined groups 
                                            await page.evaluate(()=>{
                                                return new Promise(resolve => setTimeout(resolve, 5000))
                                            }); 
                                        

                                            console.log("PRICES INPUT  field filled successfully.");

                                            // return;
                                        }

                                        
                                    }



                                    await page.waitForSelector(".x9f619.x1n2onr6.x78zum5.xdt5ytf.x193iq5w.xeuugli.x2lah0s.x1t2pt76.x1xzczws.x1cvmir6.x1vjfegm.xwn1f64")
                        

                                    const mrktplcform= await page.$$(".x9f619.x1n2onr6.x78zum5.xdt5ytf.x193iq5w.xeuugli.x2lah0s.x1t2pt76.x1xzczws.x1cvmir6.x1vjfegm.xwn1f64");

                                    // console.log(" mrktplcform " )
                                    // console.log("here is the number of marketplaceforms Classes  " + mrktplcform.length);






                                    // Iterate through each label (if you expect multiple labels)
                                    const categorylabels = await page.$$("label");

                                    console.log(`number of Category   Labels =  :-" ${categorylabels.length}`)


                                    // for(const labeldata of categorylabels){
                                    //      console.log("Here is the Category Labels Inner HTML " + "/n" + labeldata);

                                    // }


                                    // const categorybuttons=await page.$$("label[aria-label='Category']");

                                    // console.log("here are the cateogry Buttons  "+ categorybuttons, "   " + "And here is the catogry buttons Length : "+ categorybuttons.length )


                                    for(const categorybutton of categorylabels){









                                        const inputElement = await page.evaluateHandle(label => {
                                    
                                            const span = Array.from(label.querySelectorAll('span')).find(span => span.textContent.includes('Category'));           

                                            return  span? span.outerHTML : null
                                       
                                        }, categorybutton);
                                        

                                        // Extract input element (convert JSHandle to ElementHandle)
                                        const inputasElement =await inputElement.asElement(); // Convert to ElementHandle
                                        
                                        

                                        const spanText = await inputElement.jsonValue(); // Convert it into a usable value


                                        // console.log("Category INput ASElement Label ",inputasElement);
                                        // console.log("Category INput Element Label ", inputElement   )


                                        // console.log("Category INput SPAN TEXT Element Label ", spanText   )

                                                                                            
                                        if(spanText===null){
                                            // console.log("no Available Category Button Label to click")
                                        }
                                        else{
                                            console.log("About to Click on the Category Label")
                                            
                                            await categorybutton.click();

                                            console.log("Already Clicked on the Category Label")
                                            
                                            
                                        }


                                                                    

                                        // wait for 30 seconds before starting to scroll the joined groups 
                                        await page.evaluate(()=>{
                                            return new Promise(resolve => setTimeout(resolve, 1000))
                                        }); 
                                    

                                        // console.log("here is the details about the Data to Enter into the File "  + data+ "   "+  data.category);

                                        const categoryoptions=await page.$$('div[role="button"]');

                                        // console.log("categoryoptions list is here   " +  categoryoptions.length);

                                        for(const categoryoption of categoryoptions){
                                            

                                            page.evaluate(async(data,categoryoption)=>{
                                                const spans=categoryoption.querySelectorAll('span');

                                                console.log("now within category options")
                                                for(const span of spans){
                                                    if(span.textContent===data.category){
                                                        categoryoption.click();
                                                        console.log("found the right category to click option")

                                                    }
                                                    else{
                                                        console.log("Within the category Spans but Right Category not Found")
                                                    }
                                                }
                                            },data,categoryoption)
                                        }

                                    }


                                

                                    console.log("Already clicked on the Category "  + data + "   "+  data.category);

                                    // wait for 30 seconds before starting to scroll the joined groups 
                                    await page.evaluate(()=>{
                                        return new Promise(resolve => setTimeout(resolve, 1000))
                                    }); 
                                    








                                    // Iterate through each label (if you expect multiple labels)
                                    const conditionlabels = await page.$$("label");

                                    console.log(`number of Condition   Labels =  :-" ${categorylabels.length}`)


                                    // for(const labeldata of conditionlabels){
                                    //      console.log("Here is the Conditons Labels Inner HTML " + "/n" + labeldata);

                                    // }


                                    // Iterate through each label (if you expect multiple labels)
                                    for (const label of conditionlabels) {
                                                                
                                        // console.log(label + "  here are the condition labels inside the loop function  ")



                                        await page.evaluateHandle(async (el)=>{
                                            const span = el.querySelector('span');
                        
                                            if (span && span.textContent === 'Condition') {
                                            
                                                // console.log("here is the Condition Options " + span.textContent)
                                                // Fill the input with text
                                                await el.click();
                                                
                                                // console.log("here are the details about tyhe contions options " + span.outerHTML); // Output the details for debugging
                                                console.log("Condition Options cliked  successfully.");
                                            


                                                return el; // Return the outer HTML of the div
                                            }
                                            else{
                                                console.log("Condition Options Button not Found ");

                                                return null; // Return null if no matching div is found
                                            }


                                        },label)

                                    }


                                    await page.evaluate(() => {
                                        console.log("wait for 100ms. for the return promose one");
                                        return new Promise(resolve => setTimeout(resolve, 100));
                                        
                                    });

                                    
                                    // await page.waitForFunction()
                                    await page.waitForSelector('div[role=option]')

                                    const options=await page.$$('div[role=option');

                                    // console.log("here are the options " + options);

                                    for(const option of options){

                                        await page.evaluateHandle(async(optionhandle,data)=>{
                                        
                                            const selectoption= optionhandle.querySelector('span');

                                            if (selectoption && selectoption.innerHTML === data.condition) {

                                                // console.log("here is the Condition selected Options " + selectoption.textContent)
                                                // Fill the input with text
                                                await optionhandle.click();

                                                console.log("Already clicked the select Condition" )                                                
                                                // console.log("here are the details the Selected options " + selectoption.outerHTML); // Output the details for debugging
                                                console.log("Selected Condition Options cliked  successfully.");
                                            }
                                            else{
                                                // console.log("no Conditon Option Selected Option")
                                            }                                            


                                        },option,data)

                                        

                                        // return selectcondition;

                                    }
                                









                                    //********Here is the more details parts of the >Posting to use for Posting to use before Descritipn part ********

                                    // console.log("here is the Select Condition of The Item " + selectcondition)

                                    // await selectcondition.click();
                                    // await page.evaluate(()=>{
                                    //     return new Promise(resolve=> setTimeout(resolve, 10000))
                                    // })

                                    // await page.waitForSelector('div[role=button]');

                                    // const moredetailsbuttonhandles=await page.$$('div[role=button]');


                                    // for(const moredetailbutton of moredetailsbuttonhandles){
                                        
                                    //     await page.evaluateHandle(async (moredetailsbtnHandle)=>{
                                    //         const span=moredetailsbtnHandle.querySelector('span');

                                    //         if(span && span.innerHTML==="More details"){
                                    //             moredetailsbtnHandle.click();
                                    //             console.log("Clicked the More Details Button, waitting to Expand forr More ")
                                    //             return;
                                    //         }
                                    //         else{
                                    //             console.log("More Details Button Not Found ")
                                    //         }

                                    //     }, moredetailbutton)
                                    // }




                                    // // await for More Details to Expand after .click();
                                    // await page.evaluate(()=>{
                                    //     return new Promise(resolve=> setTimeout(resolve, 5000))
                                    // })



                                    //********Here is the End of the  more details parts of the >Posting to use for Posting to use before Descritipn part ********


























                                        await page.screenshot({path:"./marketplacelistingimgs/addimagesstep.png",timeout:60000})


                                        //Select the Descripton Element and fill it with the Description
                                        await page.waitForSelector('::-p-xpath(//label[.//span[text()="Description"]]//textarea)');
                        


                                        console.log("here textareas TEXT AREAS SPACE WITH TH FORMATTED DESCRIPTION +   formattedDescription ");
                                        

                                        await page.click('::-p-xpath(//label[.//span[text()="Description"]]//textarea)');


                                        console.log("Already Clicked on the Description text Area")

                                        await page.fill('::-p-xpath(//label[.//span[text()="Description"]]//textarea)', formattedDescription);

                                        console.log("Successffully clicked and fillled the Desciption Input text Areas ")





                                        // await for More Details to Expand after .click();
                                        await page.evaluate(()=>{
                                            return new Promise(resolve=> setTimeout(resolve, 5000))
                                        })



                                        await page.screenshot({path:"./marketplacelistingimgs/addimagestep.png", timout:3000})

                                        console.log("Already taken a screenshot to addimagesstep.png after descritpion filling ")










                                        //Select the Product Tags Element and fill it with the Product Tags
                                        await page.waitForSelector('::-p-xpath(//label[.//span[text()="Product tags"]]//div//div//div//textarea)');
                        


                                        console.log("here textareas TEXT AREAS SPACE For Product Tags +   formattedDescription ");
                                        

                                        await page.click('::-p-xpath(//label[.//span[text()="Product tags"]]//div//div//div//textarea)');


                                        console.log("Already Clicked on the Product Text Areas text Area")



                                        for(const productTag of formattedTags){

                                            await page.type('::-p-xpath(//label[.//span[text()="Product tags"]]//div//div//div//textarea)', productTag, { delay: 15 });

                                            await page.keyboard.press('Enter');

                                            // await for More Details to Expand after .click();
                                            await page.evaluate(()=>{
                                                return new Promise(resolve=> setTimeout(resolve, 100))
                                            })
                                            // console.log("just finished adding on prodcut Tag, now Going to next Product Tag")
                                        }

                                        
                                        // console.log("\n\n Successffully clicked and fillled the Product Tags  Input text Areas \n\n")





                                        // await page.type('::-p-xpath(//label[.//span[text()="Product tags"]]//div//div//div//textarea)', formattedDescription, { delay: 20 });

                                        console.log("Successffully clicked and fillled the Product Tags ARea Input text Areas ")





                                        // await for More Details to Expand after .click();
                                        await page.evaluate(()=>{
                                            return new Promise(resolve=> setTimeout(resolve, 500))
                                        })



                                        await page.screenshot({path:"./marketplacelistingimgs/addimagestep.png", timout:3000})

                                        console.log("Already taken a screenshot to addimagesstep.png after PRODUCT TAGS filling ")


























































                                        await page.evaluate(async()=>{


                                            let scrollabledivs=document.querySelectorAll(".xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.xx8ngbg.xwo3gff.x1oyok0e.x1odjw0f.x1e4zzel.x1n2onr6.xq1qtft");
                                            
                                            console.log("scrollabledivs lenghts here is the number of scrollable divs length    " + scrollabledivs.length);
                                            
                                            let scrollablediv=scrollabledivs[1];

                                            console.log("scrollable div is right here   " + scrollablediv.scrollHeight +'       ' + scrollablediv.clientHeight); 

                                            console.log("whole document height" + scrollablediv.textContent);
                                        

                                            let totalHeight = 0;
                                            let distance = 200; // scroll step in pixels
                                    
                                            while (totalHeight < scrollablediv.scrollHeight) {
                                                scrollablediv.scrollBy(0, distance);
                                                totalHeight += distance;
                                                await  new Promise(resolve => setTimeout(resolve, 600)); 


                                                // console.log("just did a scroll")

                                                        
                                                // new Promise(resolve => setTimeout(resolve, 5000)); // wait for 100ms
                                            }


                                        })

                                        
                                        // wait for 30 seconds before starting to scroll the joined groups 
                                        await page.evaluate(()=>{
                                            return new Promise(resolve => setTimeout(resolve, 1000))
                                        }); 


                                        console.log("Just finished Scrolling  just did a scroll")


                                        await page.screenshot({path:"./marketplacelistingimgs/mrktplacescroll.png"})


                                        // console.log("have waited for 30 seconds before taking the screenshot of marketplace scrolling to the bottom mrktplcscrolle")




                                        await page.evaluate(async()=>{
            
                                            await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 100ms
                                            
                                        })






                                    
                                    await page.waitForSelector("div[aria-label=Next]");

                                    const nextbuttons=await page.$$("div[aria-label=Next]")

                                    // console.log("Next Button ElementHandles List              " + nextbuttons)

                                    for(const nextbutton of nextbuttons){

                                        // console.log("Next Button ElementHandle inside for loop              " + nextbutton)
                                        
                                        await page.evaluateHandle(async(buttonHandle)=>{
                                            
                                            const span=buttonHandle.querySelector("span");

                                            // console.log("span for next button "+ buttonHandle + span.textContent)


                                            if(span && span.textContent==="Next"){

                                                // Wait for the popup container to appear
                                                // await page.waitForSelector('.x78zum5.xdt5ytf.xe8uvvx.x193iq5w');

                                                // Select the popup container
                                                const popupContainer = document.querySelector('.x78zum5.xdt5ytf.xe8uvvx.x193iq5w');

                                                console.log("Here is the pop up container  "   +  "   \n" + popupContainer)

                                                if (popupContainer) {

                                                    // Select the buttons inside the popup container that have the aria-label "Close"
                                                    const popupbuttons= Array.from(popupContainer.querySelectorAll( `div[aria-label="Close"]`));

                                                    // Optional: Do something with the buttons, like clicking the first one
                                                    if (popupbuttons.length > 0) {

                                                        console.log("here is the CRAZY POP UP  " + popupbuttons.length);
                                                        
                                                        for(let i=0; i<popupbuttons.length; i++ ) {

                                                            console.log("EACH LOOP OF CLOSE POPUP BUTTON  " + popupbuttons[i]);
                                                            
                                                            await popupbuttons[i].click()

                                                            console.log("EACH LOOP OF CLOSE POPUP BUTTON  EACH POPUP BUTTON JUST CLICKED  " + popupbuttons[i]);

                                                            //wait for 30 seconds after clicking the Next button before taking screenshot
                                                            await new Promise(resolve=> setTimeout(resolve,10))
                                                        }

                                                        const availablepopups=Array.from(document.querySelectorAll( `div[aria-label="Close"]`));


                                                        if(availablepopups.length>0){
                                                            //wait for 30 seconds after clicking the Next button before taking screenshot
                                                            await  new Promise(resolve=> setTimeout(resolve,2000))
                                                        }

                                                        await buttonHandle.click();
                                                
                                                        console.log("nextbuttonclicked   CLICKED"+ buttonHandle + span.textContent)

                                                        //wait for 30 seconds after clicking the Next button before taking screenshot
                                                        await  new Promise(resolve=> setTimeout(resolve,2000))
                                                    }
                                                    else{
                                                        console.log("NO POP UP LISTE IN THE POP CONTAINER " );
                                               
                                                        await buttonHandle.click();
                                                
                                                        console.log("nextbuttonclicked   CLICKED"+ buttonHandle + span.textContent)

                                                        //wait for 30 seconds after clicking the Next button before taking screenshot
                                                        await  new Promise(resolve=> setTimeout(resolve,2000))
                                               
                                                    }
                                                } else {
                                                    console.log('Popup container not found');



                                                    await buttonHandle.click();
                                                
                                                    console.log("nextbuttonclicked   CLICKED"+ buttonHandle + span.textContent)


                                                    //wait for 30 seconds after clicking the Next button before taking screenshot
                                                    await  new Promise(resolve=> setTimeout(resolve,2000))
                                                }


                                            }
                                            else{
                                                console.log("Next Button for listing Not found");
                                            }


                                        }, nextbutton )
                                    }

                                    //wait for 30 seconds after clicking the Next button before taking screenshot
                                    await page.evaluate(()=>{
                                        return new Promise(resolve=> setTimeout(resolve,2000))
                                    })
































































             




























                                    // //The Next button starts Here 
                                    // await page.waitForSelector("div[aria-label=Next]");
                                    // const nextbuttons=await page.$$("div[aria-label=Next]")

                                    // console.log("Next Button ElementHandles List              " + nextbuttons)

                                    // for(const nextbutton of nextbuttons){

                                    //     console.log("Next Button ElementHandle inside for loop              " + nextbutton)
                                        
                                    //     await page.evaluateHandle(async(buttonHandle)=>{
                                            
                                    //         const span=buttonHandle.querySelector("span");

                                    //         console.log("span for next button "+ buttonHandle + span.textContent)


                                    //         if(span && span.textContent==="Next"){
                                    //             await buttonHandle.click();
                                    //             console.log("nextbuttonclicked "+ buttonHandle + span.textContent)
                                    //         }
                                    //         else{
                                    //             console.log("Next Button for listing Not found");
                                    //         }


                                    //     }, nextbutton )
                                    // }

                                    // //wait for 30 seconds after clicking the Next button before taking screenshot
                                    // await page.evaluate(()=>{
                                    //     return new Promise(resolve=> setTimeout(resolve,15000))
                                    // })

                                    // await page.screenshot({path:"./userscache/images/afternextscreenshot.png", timeout:30000})
                                    // //console.log( of after clicking the Next Button);
                                    // console.log("Already Taken screenshot after Clicking Next Button")
















                                    await page.waitForSelector('div[role=button');

                                    const sharetomarketplacebuttons= await page.$$('div[role=button');

                                    // console.log("Here are the Share to Market place Buttons     " + sharetomarketplacebuttons);
                                    
                                    
                                    for(const sharetomktplcbtn of sharetomarketplacebuttons){
                                        
                                        // console.log("Here is the Share to Market place Button inside the for loop     " + sharetomktplcbtn);

                                        await page.evaluateHandle(async(sharetomktplcHandle)=>{
                                            
                                            const spans=Array.from(sharetomktplcHandle.querySelectorAll('span'));

                                            // console.log("Here are the share to marketplace spans    " + spans)

                                            // console.log("Here are the share to marketplace span's Text Content    " + spans.textContent)



                                            
                                            for(const span of spans){

                                                // console.log("Here is the share to marketplace span inside the span for loop    " + span)

                                                // console.log("Here is the share to marketplace span Content inside the span for loop    " + span.textContent)


                                                if(span.textContent.includes("Marketplace items are public and can be seen by anyone on or off Facebook.")){

                                                    console.log("Here is the share to marketplace innerHTML inside the span for loop AND MATCHES    " + span.textContent)

                                                    await sharetomktplcHandle.click()

                                                    console.log("already Clicked on the share to marketplace Button");

                                                    return;
                                                
                                                }
                                                else{
                                                   

                                                   console.log("Span with required Marketplace sharing not Found ");
                                                }
                                            }



                                        }, sharetomktplcbtn)

                                    }




                                // Wait for the element with the specified classes to appear
                                await page.waitForSelector('.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xr9ek0c.xjpr12u.xzboxd6.x14l7nz5');

                                // Select all elements with the specified classes
                                const sharetogroupsbuttonsclasses = await page.$$('.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xr9ek0c.xjpr12u.xzboxd6.x14l7nz5');

                                console.log("Share To Groups Buttons classes List example using 1[1]:  ", sharetogroupsbuttonsclasses[1]);


                                console.log("Share To Groups Buttons classes List Length: ", sharetogroupsbuttonsclasses.length);



                                // Ensure the array has at least 3 elementsy
                                if (sharetogroupsbuttonsclasses.length > 4) {


                                    const divbuttons= await sharetogroupsbuttonsclasses[4].$$('div[role=button]');

                                    console.log("Total Number of Suggested Groups to share to: " + divbuttons.length);
                                    console.log("List of Suggested Share To Groups Buttons to be clicked: ", divbuttons[1]);
                                        
                       
                                    let alloweddivbuttons=[];

                                    if(divbuttons.length<21){


                                        console.log("Suggested Groups tto share Listiing to Are less than 21 so jusst Select all of them       " + divbuttons);
                                        console.log("Suggested Groups to share to are less than 21 so select all of them the length     " + divbuttons.length);


                                        for(const divbutton of divbuttons){

                                            alloweddivbuttons.push(divbutton)
                                        }

                                    }
                                    else{
                                        console.log("Suggested Groups Are more than 20 so Select Randlomly 20 oof them      " + divbuttons);
                                        console.log("Suggested Groups Are more than 20 so Select RRandlomly 20 oof them here is the length     " + divbuttons.length);



                                        for(let i=0; alloweddivbuttons.length<20; i++){

                                            const randomnumber=Math.floor(Math.random()*divbuttons.length)

                                            console.log("HHere iis the RANNDOM NUMBEER TO BE USEED + "  + randomnumber);
                                            
                                            alloweddivbuttons.push(divbuttons[randomnumber])
                                        }

                                    }
                                    
                                    console.log("Here is a   lilist  of tthe allowwed Groupps to share to    " + alloweddivbuttons)
                                    console.log("Here is a   lilist  of tthe allowwed Groupps to share to Length    " + alloweddivbuttons.length)


                                    for(const eachgroupbutton of alloweddivbuttons){

                                        
                                        // try{
                                        //     (async(eachgroupbutton)=>{

                                                const spans=await eachgroupbutton.$$('span');

                                                console.log("herer are the spans inside each Grououp Button to Click to share to              " + spans);

                                                for(const eachgroupspan of spans){

                                                    const spaninnerhtml=await page.evaluate(el=>el.textContent, eachgroupspan)

                                                    // console.log("Eaach spaan inside iinnerHttML forr ach nGroup Button  " + spaninnerhtml);
                                                }

                                                console.log("about to clicked on each Group to be shared to  button ")

                                                await eachgroupbutton.click()

                                                
                                                //wait for 30 seconds after clicking the Next button before taking screenshot
                                                await page.evaluate(()=>{
                                                    return new Promise(resolve=> setTimeout(resolve,5000))
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



                                await page.evaluate(async()=>{
         
                                    let totalHeight = 0;
                                    let distance = 100; // scroll step in pixels
                            
                                    while (totalHeight < document.body.scrollHeight) {
                                        window.scrollBy(0, distance);
                                        totalHeight += distance;
                                        await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 100ms
                                    }

                                })


                                await page.screenshot({path:"./userscache/images/sharetogroupslist.png", timeout:30000})


                                //console.log( of after clicking the Next Button);
                                console.log("Already Taken screenshot after Clickinng  Share to Suggested Groups  ")

                            


                                //wait for 30 seconds after clicking the Next button before taking screenshot
                                await page.evaluate(()=>{
                                    return new Promise(resolve=> setTimeout(resolve,5000))
                                })

                                await page.screenshot({path:"./userscache/images/sharetomarketplacescreenshot.png", timeout:30000})
                                //console.log( of after clicking the Next Button);
                                console.log("Already Taken screenshot after Clicking Share to Marketplace Button")











                                // BEGINNING OF JOIN GROUPS WHIHC ARE SUGGESTED AFTER ADDING LISTING TO OTHER GROUPS AND ALSO TO MARKETPLCE NOW i IWLLL KEEP IT COMMENTED OUT WHEN NEEDED i WILL COME UNCOMMENT IT AND WORK ON I-

                                // // Wait for the element with the specified classes to appear
                                // await page.waitForSelector('.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x1gslohp.x12nagc.xzboxd6.x14l7nz5');

                                // // Select all elements with the specified classes
                                // const suggestedtojoingroupclasses = await page.$$('.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x1gslohp.x12nagc.xzboxd6.x14l7nz5');



                                // console.log("suggested to join group classes  To Groups  List:  ", suggestedtojoingroupclasses);


                                // console.log("suggested to join group classes  To Groups  List:  : ", suggestedtojoingroupclasses.length);





                                // // Ensure the array has at least 3 elementsy
                                // if (suggestedtojoingroupclasses.length > 5) {


                                //     const divbuttonsgroupsuggested= await suggestedtojoingroupclasses[5].$$('div[role=button]');

                                //     console.log("Number of Suggested Groups to Join JOIN : " + divbuttonsgroupsuggested.length);
                                //     console.log("Number of Suggested Groups to Join JOIN : ", divbuttonsgroupsuggested);
                                        
                       
                                // //    let alloweddivbuttons=[];

                                //     for(const eachgroupbutton of divbuttonsgroupsuggested){

                                //         const spans=await eachgroupbutton.$$('span');

                                //         console.log("herer are the spans inside each Suggested to Join  Grouop Button CLASSSS " + spans);

                                //         for(const eachgroupspan of spans){

                                //             const spaninnerhtml=await page.evaluate(el=>el.textContent, eachgroupspan);

                                //             if(spaninnerhtml==='Join group'){
                                //                 console.log("Eaach spaan inside iinnerHttML forr ach nGroup Button FOR SUGGESTED GROUPS TO JOIN SPANS" + spaninnerhtml);





                                //                 console.log("About to Click On Join Group Button for each         Suggeted Group     ")

                                //                 await eachgroupbutton.click()



                                //                 //wait for 30 seconds after clicking the Next button before taking screenshot
                                //                 await page.evaluate(()=>{
                                //                     return new Promise(resolve=> setTimeout(resolve,10000))
                                //                 })



                                //                 await page.screenshot({path:"./userscache/images/clickedonjoinsuggestedgroup.png", timeout:30000})
                                //                 //console.log( of after clicking the Next Button);
                                //                 console.log("Already Taken screenshot after Clicking Join Group for Suggsted Groupss")

                                    

                                //             }
                                            

                                //         }

                                        
                                //     } 
                                        

                                    

                                // }
                                // else {
                                //     console.log("Not enough elements found for sharetogroupsbuttonsclasses. to help find tthe sharet to more groups Class Div");
                                // }
                            
                                 // END OF JOIN GROUPS WHIHC ARE SUGGESTED AFTER ADDING LISTING TO OTHER GROUPS AND ALSO TO MARKETPLCE NOW i IWLLL KEEP IT COMMENTED OUT WHEN NEEDED i WILL COME UNCOMMENT IT AND WORK ON I-




                                // await page.evaluate(async()=>{
         
                                //     let totalHeight = 0;
                                //     let distance = 100; // scroll step in pixels
                            
                                //     while (totalHeight < document.body.scrollHeight) {
                                //         window.scrollBy(0, distance);
                                //         totalHeight += distance;
                                //         await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 100ms
                                //     }

                                // })








                                await page.waitForSelector('div[aria-label="Post"]');

                                const postbuttons=await page.$$('div[aria-label="Post"]')


                                console.log( 'HERE IS THE LIST OF POST BUTTONS     ' + postbuttons )


                                console.log( 'HERE IS THE LIST OF POST BUTTONS   length  ' + postbuttons.length )

                                for( const postbutton of postbuttons){

                                    const spans=await postbutton.$$('span')

                                    console.log( 'HERE IS THE LIST OF SPANS INSIDE EACH OF THE THE POST BUTTON     ' + spans )

                                    console.log( 'HERE IS THE LIST OF SPANS INSIDE EACH OF THE POST BUTTON    length  ' + spans.length )
        
                                    for(const span of spans){
                                        const spanContent=await page.evaluate(el=> el.textContent,span)

                                        if(spanContent==="Post"){
                                            console.log("Here is the POST BUTTON with text Content Post :  " +  spanContent)

                                            
                                            await page.waitForSelector('div[aria-label="Post"]');
                                            
                                            const updatedpostbutton=await page.$('div[aria-label="Post"]')


                                            
                                            if(updatedpostbutton){
                                                console.log("Updated Post Button is Available About to Click on it but doesnät have click ")
                                                // await updatedpostbutton.click();


                                                console.log(" ABOUT TO CLICK ON the POST BUTTON TO FINISH THIS PROcCES   ")

                                                await postbutton.click();
    
    
                                                //wait for redirect after clicking the loginbutton
                                                await page.waitForNavigation({timeout:60000});
    
    


                                                console.log(" ALREADY CLICKED ON THE POST BUTTON AND WAITED FOR THE NAVIGATION   ")
    
                                                break;



                                            }
                                            else{
                                                console.log('post button final could not be found ')
                                            }


                                        }
                                        else{
                                            console.log("THIS SPAN INSIDE THE POST BUTTON DOENT contain 'POST' TEXT CONTENT ");
                                        }
                                    }

                                    // const postbuttonContent= page.evaluate
                                }




                                //wait for 30 seconds after clicking the Next button before taking screenshot
                                await page.evaluate(()=>{
                                    return new Promise(resolve=> setTimeout(resolve,3000))
                                })

                                await page.screenshot({path:"./userscache/images/finishedposting.png", timeout:30000})
                                //console.log( of after clicking the Next Button);
                                console.log("FINISHED POSTING AND Already Taken screenshot after FINISHED MOVE TO NEXT GROUP")

                                  
                                // Get the current time
                                const currentTime = await page.evaluate(() => {
                                    return new Date().toLocaleString();
                                });

                                console.log("\n here is the TIME STAMP OF PAGE of JUST FINISHED POSTING PRODUCT  ] " + currentTime)
                                            
                                console.log('Current Time:', currentTime + "  \n:");





                                    







                                    


                                }
                                catch (error) {
                                    if(error==="TimeoutError"){
                                        console.log("timeout Error for clicking Add Image Button ")
                                        continue;
                                    }
                                    console.error('Error clicking button:', error);
                                    console.log("Add Image Button Error ")
                                }
                             
                            }
                            else{
                                // console.log("The add Image button not Found ")
                            }
                        }






















                    
                    }
                    else if(listingType==='Vehicle for sale'){
                        console.log("here is vehicle for sale", listingTypeButtons[i]);
                        listingTypeButtons[i].click()


                    }
                    else if(listingType==='Home for sale or rent'){
                        console.log("here is Home for Sale or Rent",listingTypeButtons[i]);
                        listingTypeButtons[i].click()


                    }
                    else if(listingType==='Event for sale'){
                        console.log("here is the Event list", listingTypeButtons[i]);
                        listingTypeButtons[i].click()

                    }
                
                } else {
                    console.log('Div with aria-label "Sell Something" not found.');

                    console.log("THIS IS EXACTLY WHAT I AM LOOKING FOR NOW ITS TIME TO WRITE SOMTHING HERE")
                
                // wait for write something button
                // await page.waitForSelector('::-p-xpath(//a[.//span[text()="Marketplace"]])',{timeout:90000});

                // Wait for the link to be available
                // const marketplace = await page.$('::-p-xpath(//a[.//span[text()="Marketplace"]])');


                }
        
            
            }
            catch (error) {
                if (error.name === 'TimeoutError') {

                    console.log('Timout Error Thisis s a timout error I wonder what couldnt be fournd for the Selector.' + `\n\n` + error );
                    // Perform alternative actions here




                        // Define the folder path
                        const folderPath = process.env.root;

                        // Function to read the details from the folder
                        const readFolderContents = () => {
                            // Get list of all files in the folder
                            const files = fs.readdirSync(folderPath);

                            // Separate the text file and image files
                            const txtFile = files.find(file => file.endsWith('.txt'));
                            const imageFiles = files.filter(file => !file.endsWith('.txt'));

                            // const folderImages = files.filter(file => file.endsWith('.jpg'));
                            const imagepaths=[];
                            const imagetextpaths=[];

                            console.log("here is the number of products in folder " +  imageFiles.length)
                            
                            const randomproduct=Math.floor(Math.random()*imageFiles.length)

                            console.log("here is the Random Product " + randomproduct);

                            const productfolderspaths=path.join(folderPath,imageFiles[randomproduct]);

                            const readproductfolderpaths=fs.readdirSync(productfolderspaths);


                            // Separate the text file and image files
                            const producttxtFile = readproductfolderpaths.find(file => file.endsWith('.txt'));
                            const productimagesPaths = readproductfolderpaths.filter(file => !file.endsWith('.txt'));



                            for(const eachimagepath of productimagesPaths){
                                const absolutimagePath=path.join(productfolderspaths,eachimagepath);
                                // console.log("Absolute Image Path for each Image File " + absolutimagePath);

                                imagepaths.push(absolutimagePath);
                            }


                            // Read the content of the text file
                            const txtFilePath = path.join(productfolderspaths,  producttxtFile);
                            const fileContent = fs.readFileSync(txtFilePath, 'utf8');

                            
                            // Return both text content and image file paths
                            return {
                                producttxtfilepath:txtFilePath,
                                imagespaths:imagepaths,
                            };
                        };




                        // Read  ROOT folder contents
                        const {producttxtfilepath,imagespaths}=readFolderContents();



                        // console.log("here is the text Content DETAILS OF  file in ROOT Folder for root  " + rootfoldertxtContent)
                        // console.log("here is the Images txt file PATHS  " + imagestxtfilepaths);
                        
                        // console.log("here is the images files paths in Folder for root " + imagespaths)
                        console.log(imagespaths);


                        const imagestxtfileContent=fs.readFileSync(producttxtfilepath, "utf8");
                        // console.log("here is the read File for the Images File text Content " + imagestxtfileContent);


                        // Parse the txt file content into an object
                        const data = {};

                        imagestxtfileContent.split('\n').forEach(line => {
                            const [key, ...value] = line.split(':');
                            
                            if (key && value) {
                                data[key.trim().toLowerCase()] = value.join(':').trim();
                            }
                        });

                        console.log(imagestxtfileContent);
                        
                        console.log(" \n here is the for data  " + data + "\n")
                        
                        
                        // Replace ellipses (...) with new lines (\n) in the description
                        const formattedDescription = data.description.replace(/\.\.\./g, '\n');



                    try{
                      
                        
                        
                        // wait for write something button
                        // await page.waitForSelector('::-p-xpath(//div[role="button"] [.//span[text()="Marketplace"]])',{timeout:90000});
                        
                        // await page.waitForSelector('div[role="button"]');

                        await page.evaluate(()=>{
                            return new Promise(resolve=> setTimeout(resolve,3000))
                        })

                        console.log("\n Just TOOK A SCREEN SHOT BEFORE LOOOKING FOR Write something....  \n")

                        await page.screenshot({path: "./userscache/images/testbeforepost.png"})



                        await page.waitForSelector('::-p-xpath(//div[@role="button" and .//span[text()="Write something..."]])' , { timeout: 90000 });
                        
                        
                        const postSomethingButton=await page.$('::-p-xpath(//div[@role="button" and .//span[text()="Write something..."]])', { timeout: 90000 });
                        
                        
                        console.log("Here is the PostSomethingButton Write Something...  ", postSomethingButton);



                        // Wait for the link to be available
                        // const marketplace = await page.$('::-p-xpath(//a[.//span[text()="Marketplace"]])');


                        // Perform an action on the div, for example, click it
                        // if (postSomethingButton) {
                        // console.log(postSomethingButton);
                
                        await postSomethingButton.click();

                        console.log('Div with Write something "Write Something" clicked.');
                
                        // wait for 30 seconds after clicking the Next button before taking screenshot
                        await page.evaluate(()=>{
                            return new Promise(resolve=> setTimeout(resolve,3000))
                        })

                
                        console.log(" postSomethingButton " ); 

                        await page.screenshot({path: "./userscache/images/postfromgroup.png"})

                        console.log("just clicked on the WRITE SOMETHING BUTTON")




                        // wait for 30 seconds after clicking the Next button before taking screenshot
                        await page.evaluate(()=>{
                            return new Promise(resolve=> setTimeout(resolve,3000))
                        })

                

                        //    const textareas= await page.$$('div[role="textbox"]', {timeout:30000})
                    
                        async function findCreatepostorWriteSomething(page){

                            try{
                   
                                console.log("NOW looking for Create a public post... [textbox]")
                   
                                console.log("Here is the page on console.log( PAGE)  BELOW \n")

                                console.log(page + "\n");


                                await page.waitForSelector('div[aria-label="Create a public post…"][role="textbox"]', {timeout:30000})
                                
                                const createpublicpostextarea=await page.$('div[aria-label="Create a public post…"][role="textbox"]', {timeout:30000})
                
                                console.log("just clicked on the CREAT PUBLIC POST All text areas ");
    
                                console.log("just clicked on the CREAT PUBLIC POST All text areas ");


                                console.log("\n\n create public post textareas below ")

                                console.log(createpublicpostextarea);

                                
                                await page.evaluate((divtextarea,formattedDescription)=>{
                                    
                                    console.log(" DIVTEXTAREAS  divtexttextarea  ", divtextarea)
                        
                                    

                                    console.log("Here is the DIVTEXTAREA's DETAILS TO USE    ", formattedDescription)

                                    if (divtextarea) {
                                        
                                        divtextarea.focus();

                                        // document.execCommand("insertText",false,`${formattedDescription}`);

                                        // divtextarea.type(`${formattedDescription}`,{delay:0})
                                        
                                        console.log("Just SUCCESSFULLY FILLED THE CREATE PUBLIC POST TEXT AREA i MEAN SUCCESSFULLY FOCUSED ON THE DIV")
                                    }
                                    else{
              
                                      console.log("DIVTEXTAREAS NOT FOUND, THROUGH ERROR  ", divtextarea)

                                    }
                                },createpublicpostextarea,formattedDescription)

                                // await createpublicpostextarea.fill(formattedDescription);
                                // await page.keyboard.insertText(formattedDescription);



                                // await createpublicpostextarea.type(`${formattedDescription}`,{delay:0})


                                for (const line of formattedDescription.split("\n")) {
                                    await createpublicpostextarea.type(line,{delay:0}); // Type the line
                                    await page.keyboard.press("Enter"); // Press Enter to create a new line
                                    await page.keyboard.press("Enter"); // Press Enter to create a new line

                                }



                                await page.evaluate(()=>{
                                    new Promise(resolve=>setTimeout(resolve, 10000))
                                })
                                
                                console.log("just clicked and Typed  on the CREAT PUBLIC POST text Area \n\n");

                            }
                            catch(error){


                                console.log('ERROR FINDING CREATE PUBLIC POST....NOW LOOKING FOR WRITE SOMETHING...', error)




                                console.log("Here is the page on console.log( PAGE)  BELOW \n")

                                console.log(page + "\n");


                                if(error.name==="TimeoutError"){

                                    console.log("NOW looking for Write something [textbox]")

                                    await page.waitForSelector('div[aria-label="Write something..."][role="textbox"]', {timeout:40000})


                                    const createpublicpostextarea=await page.$('div[aria-label="Write something..."][role="textbox"]', {timeout:40000})
                




                                    // await page.waitForSelector('::-p-xpath(//div[@aria-label="Write something..." and @role="textbox"])', { timeout: 40000 });

                                    // const createpublicpostextarea = await page.$('::-p-xpath(//div[@aria-label="Write something..."  and @role="textbox"])', { timeout: 40000 });

                                    if (createpublicpostextarea) {
                                        console.log("Found the createpublicpostextarea  text area using XPath.");
                                        // await createPublicPostTextarea.click();
                                    }


                                    console.log("just FOUND the WRITE SOMETHING All text areas  " + createpublicpostextarea.length  );


                                    console.log("\n\n create WRITE SOMETHING textareas below ")

                                    console.log(createpublicpostextarea);

                                    // await createpublicpostextarea.fill(formattedDescription);

                                    
                                    
                                    
                                    
                                    await page.evaluate((divtextarea,formattedDescription)=>{
                                            console.log("Here is the DIVTEXTAREA's DETAILS TO USE    ", formattedDescription)
                                        console.log("DIVTEXTAREAS  divtexttextarea   ", divtextarea)
                                       
                                        if (divtextarea) {

                                            divtextarea.focus();
                                    
                                            // divtextarea.innerText = `${formattedDescription}`;

                                            // divtextarea.type(`${formattedDescription}`,{delay:0});


                                            console.log("Just SUCCESSFULLY FILLED THE CREATE PUBLIC POST TEXT AREA i I MEAND SUCCESSUFULL Y FOCUSED ON THE DIV")
                                    
                                        }else{
                                            console.log("DIVTEXTAREAS NOT FOUND, THROUGH ERROR  ", divtextarea)
                                        }
                                    },createpublicpostextarea,formattedDescription)

                                    



                                    // await createpublicpostextarea.fill(formattedDescription);
                                    // await page.keyboard.insertText(formattedDescription);

                                    
                                    // createpublicpostextarea.type(`${formattedDescription}`,{delay:0});


                                    for (const line of formattedDescription.split("\n")) {
                                        await createpublicpostextarea.type(line,{delay:0}); // Type the line
                                        await page.keyboard.press("Enter"); // Press Enter to create a new line
                                        await page.keyboard.press("Enter"); // Press Enter to create a new line
    
                                    }


                                    // await page.evaluate(()=>{
                                    //     new Promise(resolve=>setTimeout(resolve, 5000))
                                    // })
                                    

                                    await page.evaluate(()=>{
                                        return new Promise(resolve=> setTimeout(resolve,10000))
                                    
                                    })


                                    console.log("just clicked and Typed  on the Write Something.... text Area \n\n");

                                    // continue;
                                }
                                else{
                                    console.log("Note a timeoutError" + error);
                                }
                            }
                        }
                        

                        await findCreatepostorWriteSomething(page)
                        

                        // console.log(textareas);

                        





                        await page.waitForSelector('div[role="button"][aria-label="Photo/video"]', {timeout:90000})
                
                        
                        const publicpostImgButton=await page.$('div[role="button"][aria-label="Photo/video"]', {timeout:90000})
                
                        console.log(publicpostImgButton);

                        await publicpostImgButton.click();

                        await page.evaluate(()=>{
                            return new Promise(resolve=> setTimeout(resolve,5000))
                        
                        })

                        console.log("just clicked on the SELECT IMAGE FOR PUBLIC POST ");

                        await page.screenshot({path: "./userscache/images/selectimgpublicpost.png"})


                        console.log("just took screenshot for await page.screenshot({path: /userscache/images/selectimgpublicpost.png")


                        await page.waitForSelector('::-p-xpath(//div[@role="button" and .//span[text()="Add photos/videos"]])', { timeout: 90000 })
                        
                        const addImgsButton=await page.$('::-p-xpath(//div[@role="button" and .//span[text()="Add photos/videos"]])', { timeout: 90000 });


                        // await addImgsButton.click();
                        



                        //wait for 30 seconds after clicking the Next button before taking screenshot
                        await page.evaluate(()=>{
                            return new Promise(resolve=> setTimeout(resolve,4000))
                        })


                        // Upload a file using Puppeteer
                        const [fileChooser] = await Promise.all([
                            
                            // Wait for the file chooser to be triggered                                        
                            page.waitForFileChooser({timeout:60000}),

                            // await button.click(), // Trigger the click to open the file chooser

                            await addImgsButton.click()

                        ]);
                            
            
                        // Upload multiple files (provide the absolute paths to the images)                                            
                        await fileChooser.accept(imagespaths);    
                        

                        // console.log('Clicked button with text:', button);

                        // console.log('Clicked addImgBtn with text:', addImgBtn);
                        console.log('Clicked addImgBtn length:', addImgsButton.length);


                        // // Wait for a specific timeout (e.g., 5000 milliseconds) before taking a screenshot
                        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 4000)));

                        await page.screenshot({path: "./userscache/images/imageselected.png"})
                                                
                        console.log("took screenshot for ./userscache/images/imageselected.png.png")



                        await page.waitForSelector('::-p-xpath(//div[@role="button" and @aria-label="Post" and .//span[text()="Post"]])')

                        const postButton=await page.$('::-p-xpath(//div[@role="button" and @aria-label="Post" and .//span[text()="Post"]])')

                        console.log("here is the POST BUTTON below  \n"  );

                        console.log(postButton);

                        await postButton.click();
                       
                        console.log("Just clicked on the POST BUTTON + \n  Now waiting 30 seconds before going to the next group to POST " + postButton);

                        // // Wait for a specific timeout (e.g., 5000 milliseconds) before taking a screenshot
                        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 15000)));


                        console.log("Just took a screenshot({path: ./userscache/images/publicpostclick.png})  \n " + postButton);

                        // Get the current time
                        const currentTime = await page.evaluate(() => {
                            return new Date().toLocaleString();
                        });


                        console.log("\n\n here is the TIME STAMP OF PAGE of JUST FINISHED POSTING PRODUCT  ] " + currentTime)
                                            
                        console.log('Current Time:', currentTime + "  \n:");


                        await page.screenshot({path: "./userscache/images/publicpostclick.png"})

                        continue;






                    
                    
                    }
                    catch (error) {
                        // Perform alternative actions here
                        if (error.name === 'TimeoutError') {
                            console.log('On Write something... stage area button not found within the timeout period.' + error  );
                            
                            await page.evaluate(()=>{
                                return new Promise(resolve=> setTimeout(resolve,4000))
                            })
    
                            console.log("\n Just TOOK A SCREEN shot BEFORE throwing error on write something not found  LOOOKING FOR Write something....  \n")
    
                            await page.screenshot({path: "./userscache/images/testaftererror.png"})
    
    
                            
                            
                            continue;
                        }
                        else {
                            throw error;
                        }
                    }

                    continue;
                }
                else{
                    console.log("No post text are found ");
                
                    console.log(error)
                }
            }
        
        
        }

        // page.setCacheEnabled(true);

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
            await page.close();  // Close browser if it was successfully launched
        }
        else if(browser) {
            console.log("Here is the BROWSER to be FINALLY closed")

            await browser.close();  // Close browser if it was successfully launched
        }
    }


}
