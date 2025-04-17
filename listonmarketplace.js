const dotenv= require('dotenv');
dotenv.config();


const path=require('path');
const fs= require("fs")
const { timeout, TimeoutError }=require( 'puppeteer');
const os=require("os");
const {platform} =require("process");


async function  createMarketplaceListing(page,browser){

    try{
        
        function getAppDataDir(appName = 'fbyebotfreebee3.0') {
            const home = os.homedir();

            if (platform === 'win32') {
                return path.join(process.env.APPDATA || path.join(home, 'AppData', 'Roaming'), appName);
            }

            // Linux and macOS
            return path.join(home, '.config', appName);
        }

        const appDir = getAppDataDir(); // e.g., ~/.config/fbyebot or %APPDATA%\fbyebot

        // Ensure folder exists
        if (!fs.existsSync(appDir)) {
            fs.mkdirSync(appDir, { recursive: true });
        }
        fs.chmodSync(appDir,0o755)



        const marketplacelistingimgs = path.join(appDir, 'marketplacelistingimgs');

        if (!fs.existsSync(marketplacelistingimgs)) {
           fs.mkdirSync(marketplacelistingimgs, { recursive: true });
        }
           fs.chmodSync(marketplacelistingimgs,0o755)



        



        console.log( "Just landed on the home page, Now want to Navigate to marketplace ")
        // wait for 30 seconds before screenshot of the CREATE LISTING PAGE 
        
        
        console.log("wait for 4 seconds then check whether this worked")
        
        await page.evaluate(()=>{
            return new Promise(resolve => setTimeout(resolve, 4000))
        }); 


        

        console.log("The first Function worked")
        
        // /These were commmented out for production but for testing or trouble shooting uncomments these 
        // Listen for console messages from the browser context


        page.on('console', (msg) =>{
            if(msg.text().includes("here textareas")){
                console.log('PAGE LOG:', msg.text())
            }
        //     else if(msg.text().includes("nextbuttonclicked ")){
        //         console.log('PAGE LOG:', msg.text())

        //     }
        //     else if(msg.text().includes("Next Button for listing Not found")){
        //         console.log('PAGE LOG:', msg.text())

        //     }
        //     else if(msg.text().includes("span for next button ")){
        //         console.log('PAGE LOG:', msg.text())

        //     }
        //     else if(msg.text().includes("already Clicked on the share to marketplace Button")){
        //         console.log('PAGE LOG:', msg.text())

        //     }
        //     else if(msg.text().includes("Here are the share to marketplace spans    ")){
        //         console.log('PAGE LOG:', msg.text())

        //     }
        //     else if(msg.text().includes("Span with required Marketplace sharing not Found   ")){
        //         console.log('PAGE LOG:', msg.text())

        //     }
        //     else if(msg.text().includes("Here is the share to marketplace innerHTML inside the span for loop AND MATCHES    ")){
        //         console.log('PAGE LOG:', msg.text())

        //     } else if(msg.text().includes("here textareas TEXT AREAS SPACE WITH TH FORMATTED DESCRIPTION "   )){
        //         console.log('PAGE LOG:', msg.text())

        //     }
        //     else if(msg.text().includes("Already Clicked and fillled the Desciption Input"   )){
        //         console.log('PAGE LOG:', msg.text())

        
        //     }
        //     else if(msg.text().includes("No description Text Area"   )){
        //         console.log('PAGE LOG:', msg.text())

        //     }
            
        //     else if(msg.text().includes("Description Text Area not Found  "   )){
        //         console.log('PAGE LOG:', msg.text())

        //     }     

        //     else if(msg.text().includes("here textareas content"   )){
        //         console.log('PAGE LOG:', msg.text())

        //     }     
            
        //     else if(msg.text().includes("here textareas value"   )){
        //         console.log('PAGE LOG:', msg.text())

        //     }
        //     else if(msg.text().includes("just did a scroll"   )){
        //         console.log('PAGE LOG:', msg.text())

        //     }     
        //     else if(msg.text().includes("scrollable div is right here"   )){
        //         console.log('PAGE LOG:', msg.text())

        //     }
        //     else if(msg.text().includes("whole document height"   )){
        //         console.log('PAGE LOG:', msg.text())

        //     }     
        //     else if(msg.text().includes("scrollabledivs lenghts here is the number of scrollable divs length  ")){
        //         console.log('PAGE LOG:', msg.text())

            // } ,  
            else if(msg.text().includes("now within category options ")){
                console.log('PAGE LOG:', msg.text())

            }   
             else if(msg.text().includes("found the right category to click option  ")){
                 console.log('PAGE LOG:', msg.text())

             }                   
        //     else if(msg.text().includes("Clicked the More Details Button, waitting to Expand forr More ")){
        //         console.log('PAGE LOG:', msg.text())


        //     }   
        //     else if(msg.text().includes("More Details Button Not Found ")){
        //         console.log('PAGE LOG:', msg.text())

        //     }          
        //     else if(msg.text().includes("span for next button ")){
        //         console.log('PAGE LOG:', msg.text())

        //     }   
        //     else if(msg.text().includes("nextbuttonclicked ")){
        //         console.log('PAGE LOG:', msg.text())

        //     }   
        //     else if(msg.text().includes("Next Button for listing Not found")){
        //         console.log('PAGE LOG:', msg.text())

        //     }  
        //     else if(msg.text().includes("here is the sharetomoregroups container")){
        //         console.log('PAGE LOG:', msg.text())

        //     }  
        //     else if(msg.text().includes("here is the height of the sharetomoregroups Container ")){
        //         console.log('PAGE LOG:', msg.text())

        //     }  

        //     else if(msg.text().includes("Condition Options cliked  successfully.")){
        //         console.log('PAGE LOG:', msg.text())

        //     }  

        //     else if(msg.text().includes("Condition Options Button not Found ")){
        //         console.log('PAGE LOG:', msg.text())

        //     }  

        //     else if(msg.text().includes("Selected Condition Options cliked  successfully.")){
        //         console.log('PAGE LOG:', msg.text())

        //     } 
        //     else if(msg.text().includes("no Conditon Option Selected Option")){
        //         console.log('PAGE LOG:', msg.text())

        //     } 
        //     else if(msg.text().includes("Here is the pop up container  ")){
        //         console.log('PAGE LOG:', msg.text())

        //     } 
        //     else if(msg.text().includes("EACH LOOP OF CLOSE POPUP BUTTON ")){
        //         console.log('PAGE LOG:', msg.text())

        //     } 
        //     else if(msg.text().includes("here is the CRAZY POP UP")){
        //         console.log('PAGE LOG:', msg.text())

        //     } 

        //     else if(msg.text().includes("NO POP UP LISTE IN THE POP CONTAINER ")){
        //         console.log('PAGE LOG:', msg.text())

        //     } 
            


            else{

            }
            
        })                                       
        





        
        // Define the folder path

        const rootfolderpath=process.env.root


        // Function to read the details from the folder
        const readFolderContents = () => {
            // Get list of all files in the folder
            const files = fs.readdirSync(rootfolderpath);

            // Separate the text file and image files
            const txtFile = files.find(file => file.endsWith('.txt'));
            const imageFiles = files.filter(file => !file.endsWith('.txt'));

            // const folderImages = files.filter(file => file.endsWith('.jpg'));
            const imagepaths=[];
            const imagetextpaths=[];

            for(const imagepath of imageFiles){
                
                const folderimagePaths=path.join(rootfolderpath,imagepath);

            
                imagepaths.push(folderimagePaths);
            
            
            
            }


            // Read the content of the text file
            const txtFilePath = path.join(rootfolderpath, txtFile);
            const fileContent = fs.readFileSync(txtFilePath, 'utf8');

            


            // const imagetextContent=imagetextpaths;
            // const folderimagestxtfile=fs.readdirSync(folderPath,)



            // Return both text content and image file paths
            return {
                rootfoldertxtContent: fileContent,
                imagestxtfilepaths:imagetextpaths,
                imagespaths:imagepaths,
            };
        };

        // Read  ROOT folder contents
        const {rootfoldertxtContent,imagestxtfilepaths,imagespaths}=readFolderContents();

        
        // const productsfolders=[];

        // for(let i=0; i<imagespaths.length; i++){

        //     const randomnumber=Math.floor(Math.random()*imagespaths.length)

        //     console.log("Here is the RANDOM NUMBER TO BE USED FOR PRODUCTS SHUFFLING+ "  + randomnumber);
            
        //     productsfolders.push(imagespaths[randomnumber])
        // }





        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));  // Zufälliger Index zwischen 0 und i
              [array[i], array[j]] = [array[j], array[i]];    // Tauschen der Elemente
            }
            return array;
        
        
        }
          

        const productsfolders=shuffleArray(imagespaths);
          
        

        console.log("Here is the shuffled products list : first length + :" + productsfolders.length + "  \n\n"  )


        for(const product of productsfolders){
            console.log(product);
        }





        for(const productfolder of productsfolders){

             //only wait for 15 seconds before beginning to post for the next product in our catalogue 
             console.log("only wait for 15 seconds before beginning to post for the next product in our catalogue"); 




            // // wait for 30 seconds before screenshot of the CREATE LISTING PAGE 
            await page.evaluate(async()=>{
                return new Promise(resolve => setTimeout(resolve, 5000))
            }); 


            console.log("Beginningo of the Listing of a NEW NEXT PRODUCT Here is the product's Path       " + productfolder );    

           

            // Get the current time
            const currentTime = await page.evaluate(() => {
                return new Date().toLocaleString();
            });

            
            console.log("here is the TIME STAMP OF PAGE of starting to POST IN MARKETPLACE ] " + currentTime   + "  \n\n:")
            
            // console.log('Current Time:', currentTime + "  \n\n:");

          
          
          


            // console.log("I AM WAITING FOR 90 SECONDS BEFORE i CONTINUE TO THE NEXT PRODUCT TO POST TO MARKETPLACE ")



            const productdetailspath=path.join(productfolder,'details.txt')

            const foldervalue=fs.readFileSync(productdetailspath,'utf8');

            
            
            
            // console.log("here is the value of the folderv + foldervalue)   \n\n"); 


            // console.log("Welcome to the Create Marketplace Listing Function THE BEGINNING  Here is the function PAGE  " + page)


            // console.log("Welcome to the Create Marketplace Listing Function THE BEGINNING  Here is the function BROWSER  " + browser)


            // page.setCacheEnabled(false)
            
            const originalurl=page.url();
            
            
            
            
            // console.log("About to sTART CREATING A MARKETPLACE LISTING ")
            // console.log("here is the original url of homne page " , originalurl)




            // await page.waitForSelector('a[aria-label="Create new listing"] span[')

            // wait for 30 seconds before screenshot of the CREATE LISTING PAGE 
                // await page.evaluate(async()=>{
                //     return new Promise(resolve => setTimeout(resolve, 1000))
                // }); 
    



                // await page.waitForSelector('a[aria-label="Marketplace"][href="/marketplace/?ref=app_tab"][role="link"]',{timeout:90000})


                // const marketplace=await page.waitForSelector('a[aria-label="Marketplace"][href="/marketplace/?ref=app_tab"][role="link"]', {timeout:90000});
                
            
                await page.evaluate(async()=>{
                    return new Promise(resolve => setTimeout(resolve, 2000))
                }); 
    


                await page.goto("https://web.facebook.com/marketplace/?ref=app_tab", { waitUntil: 'networkidle2', timeout:80000 });
                
            
                await page.evaluate(async()=>{
                    return new Promise(resolve => setTimeout(resolve, 3000))
                }); 
        



                

                // console.log("Just waited for 5 seconds before moving on to the marketplace LInk")

                

                // await page.waitForSelector('::-p-xpath(//a[.//span[text()="Marketplace"]])',{timeout:90000});

                // // Wait for the link to be available
                // const marketplace = await page.$('::-p-xpath(//a[.//span[text()="Marketplace"]])');

                // await page.goto



                // await marketplace.click();


                console.log( "clicked maretplace span Now waiting for [Create new Listing span]  ")
                
                // wait for 30 seconds before screenshot of the CREATE LISTING PAGE 
 

            
                await page.evaluate(async()=>{
                    return new Promise(resolve => setTimeout(resolve, 3000))
                }); 
        



                
                // console.log("have waited for 30 seconds before taking the screenshot of create lising page above")


                await page.waitForSelector('::-p-xpath(//a[.//span[text()="Create new listing"]])');

                // Wait for the link to be available
                const createnewlistingbutton = await page.$('::-p-xpath(//a[.//span[text()="Create new listing"]])');

                await createnewlistingbutton.click();
              

            // Log the current URL
            console.log('I already Clicked on the CREATE NEW LISTING BUTTONS Navigated to the create Listing Route here is the new url for create listing:', page.url());

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
        
            
            await page.screenshot({path:path.join(marketplacelistingimgs, "firstmarketplaceimg.png")})



            // await page.waitForSelector('div[aria-label="Marketplace Composer"][role="main"]', {timeout:80000})





                                
            console.log("here is the folder path " + rootfolderpath)

            const filepath=path.join(rootfolderpath, "folderdetails.txt")

            // Read the content of the file
            const fileContent = fs.readFileSync(filepath, 'utf8');

            // // Assuming the content is simple text, you can log it or use it further
            // console.log('Folder listing details File Content:', fileContent);

            // If the content is like "listingtype: Item for sale", you might want to parse it
            // Example: Extract "Item for sale"
            const listingType = fileContent.split(':')[1]?.trim(); // Extract the part after "listingtype:"

            // console.log('Listing Type:', listingType);
            

            if(listingType==='Item for sale'){
                // await page.waitForXPath('//a[.//span[text()="Item for sale"]]');



                await page.waitForSelector('::-p-xpath(//a[.//span[text()="Item for sale"]])');

                // Wait for the link to be available
                const itemforsalebutton = await page.$('::-p-xpath(//a[.//span[text()="Item for sale"]])');

                const itemforsaleElementHandle=itemforsalebutton;

                // console.log("Here is the item for sale buttons" + itemforsalebutton)

                // console.log("Here is the item for sale buttons" + itemforsalebutton.length)


                // console.log("Here is the item for sale buttons' Element Handle " + itemforsaleElementHandle)

                
                // Check if the link was found and click it
                    if (itemforsalebutton) {

                        
                        // console.log("Found Item For Sale Buttom About to Click it")
                        
                        await itemforsaleElementHandle.click();

                        // console.log("Already Clicked on the Item for sale button  ")

                        await page.evaluate(async()=>{
                            return new Promise(resolve=> setTimeout(resolve,5000))
                        })

                        await page.screenshot({path:path.join(marketplacelistingimgs, "itemforsalepopup.png"), timeout:30000})
                        
                        // console.log("waited 30 seconds then took screenshot of ItemforSale Pop Up  in itemforsalepopu.png")










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
                                    await page.evaluate(async ()=>{return new Promise(resolve => setTimeout(resolve, 1000))}); 
                                                    

                                    await page.screenshot({path:path.join(marketplacelistingimgs, "mkrtplclistingpopup.png"),timeout:60000})
                                    // console.log("took a screenshot of the popup adf adf adfa sfad sfads fadsf adsf adf ")


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

                                            // console.log("Here are the evaluated add image buttons on upload images")
                                            
                                            // console.log("Button innerText                          " + button.textContent)


                                            // console.log("addImgBtn innerText                          " + addImgBtn)
                                                                        
                                            // Get the textContent of the button
                                            const buttonText = await page.evaluate(el=>el.innerText, button)

                                            // console.log('Button textContent   :', buttonText);

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
                                                const folderPath = productfolder;

                                                // console.log("here is the folder path before I accessand use the images  " + productfolder)


                                                // Function to read the details from the folder
                                                const readFolderContent = () => {
                                                    // Get list of all files in the folder
                                                    const files = fs.readdirSync(folderPath);

                                                    // Separate the text file and image files
                                                    const txtFile = files.find(file => file.endsWith('.txt'));
                                                    const imageFiles = files.filter(file => !file.endsWith('.txt'));

                                                    // const folderImages = files.filter(file => file.endsWith('.jpg'));
                                                    const imagepaths=[];
                                                    const imagetextpaths=[];

                                                    for(const imagepath of imageFiles){
                                                        
                                                        const folderimagePaths=path.join(folderPath,imagepath);

                                                        imagepaths.push(folderimagePaths);
                                                    
                                                    }


                                                    // Read the content of the text file
                                                    const txtFilePath = path.join(folderPath, txtFile);

                                                    imagetextpaths.push(txtFilePath);
                                                    

                                                    // Return both text content and image file paths
                                                    return {
                                                        rootfoldertxtContent: fileContent,
                                                        imagestxtfilepaths:imagetextpaths,
                                                        imagespaths:imagepaths,
                                                    };
                                                };




                                                // Read  ROOT folder contents
                                                const {rootfoldertxtContent,imagestxtfilepaths,imagespaths}=readFolderContent();


                                                // console.log("here is the text Content DETAILS OF  file in ROOT Folder for root  " + rootfoldertxtContent)
                                                // console.log("here is the Images txt file PATHS  v+ imagestxtfilepaths " );
                                                
                                                // console.log("here is the images files paths in Folder for root v+ imagespaths " )

                                                // console.log(imagespaths);

                                                const imagestxtfile=imagestxtfilepaths[0];

                                                const imagestxtfileContent=fs.readFileSync(imagestxtfile, "utf8");
                                                // console.log("here is the read File for the Images File text Content " + imagestxtfileContent);


                                                // Parse the txt file content into an object
                                                const data = {};

                                                imagestxtfileContent.split('\n').forEach(line => {
                                                    const [key, ...value] = line.split(':');
                                                    
                                                    if (key && value) {
                                                        data[key.trim().toLowerCase()] = value.join(':').trim();
                                                    }
                                                });

                                                // console.log(imagestxtfileContent);
                                                
                                                console.log("\n here is the for data  " + data + "\n")
                                                console.log(data)

                                                
                                                // Replace ellipses (...) with new lines (\n) in the description
                                                const formattedDescription = data.description.replace(/\.\.\./g, '\n\n');

                                                const formattedTags=data.tags.split("...");

                                                // console.log("here are the formattted tagss  formattedTags");
                                                // console.log(formattedTags);

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

                                                // console.log('Clicked button with text: button ');

                                                // console.log('Clicked addImgBtn with text: addImgBtn');
                                                // console.log('Clicked addImgBtn length:', addImgBtn.length);



                                                // // Wait for a specific timeout (e.g., 5000 milliseconds) before taking a screenshot
                                                await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1000)));



                                                // console.log("took a screenshot of the popup  After additing the images to the popup f adsf adf ")
                


                                                // Wait for the label with aria-label="Title" to be present
                                                // await page.waitForSelector('label[aria-label="Title"]');

                                                // Select all labels with aria-label="Title"
                                                // const labels = await page.$$('label[aria-label="Title"]');





                                                await page.waitForSelector(".x1i10hfl.xggy1nq.x1s07b3s.x1kdt53j.x1a2a7pz.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x9f619.xzsf02u.x1uxerd5.x1fcty0u.x132q4wb.x1a8lsjc.x1pi30zi.x1swvt13.x9desvi.xh8yej3")

                                                // Select all labels with aria-label="Title"
                                                // const labels = await page.$$(".x1i10hfl.xggy1nq.x1s07b3s.x1kdt53j.x1a2a7pz.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x9f619.xzsf02u.x1uxerd5.x1fcty0u.x132q4wb.x1a8lsjc.x1pi30zi.x1swvt13.x9desvi.xh8yej3");

                                                // await page.waitForSelector
































































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


                                                    // console.log('Span HTML:', spanHTML);
                                                    // console.log('Input Elemmtnt ' , inputasElement);
                                            
                                                    // console.log('Span Text:', spanText);



                                                    // Convert JSHandle to a value you can log
                                                    if (spanText===null  ) {
                                                        // console.log('No matching span or input found inside label');
                                                    } 
                                                    else {        
                                                        const spanHTML = await page.evaluate(el => el, inputElement);

                                                        // console.log('Span HTML:', spanHTML);

                                                        // Fill the input with text
                                                        await inputasElement.type(data.title, {delay:100});
                                                        
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
                                                        await inputasElement.type(data.price, {delay:100});
                                                        
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




                                                await page.waitForSelector('::-p-xpath(//label[.//span[text()="Category"]])')
                                                
                                                const categoryInputHandle = await page.$('::-p-xpath(//label[.//span[text()="Category"]])')



                                                if (categoryInputHandle) {

                                                    console.log("About to Click on the Category Label")
                                                        
                                                    // await categorybutton.click();

                                                    console.log("Already Clicked on the Category Label")
                                                    
                                                    
                                                    console.log(categoryInputHandle)
                                                    await categoryInputHandle.click();
                                                }
                                                else{
                                                    console.log("no Category INput found: " ,    categoryInputHandle)
                                                }

                                                // for(const labeldata of categorylabels){
                                                //      console.log("Here is the Category Labels Inner HTML " + "/n" + labeldata);

                                                // }


                                                // const categorybuttons=await page.$$("label[aria-label='Category']");

                                                // console.log("here are the cateogry Buttons  "+ categorybuttons, "   " + "And here is the catogry buttons Length : "+ categorybuttons.length )


                                                // for(const categorybutton of categorylabels){









                                                // const inputElement = await page.evaluateHandle(label => {
                                            
                                                //     const span = Array.from(label.querySelectorAll('span')).find(span => span.textContent.includes('Category'));           

                                                //     return  span? span.outerHTML : null
                                                
                                                // }, categorybutton);
                                                

                                                // // Extract input element (convert JSHandle to ElementHandle)
                                                // const inputasElement =await inputElement.asElement(); // Convert to ElementHandle
                                                
                                                

                                                // const spanText = await inputElement.jsonValue(); // Convert it into a usable value


                                                // console.log("Category INput ASElement Label ",inputasElement);
                                                // console.log("Category INput Element Label ", inputElement   )


                                                // console.log("Category INput SPAN TEXT Element Label ", spanText   )

                                                                                                    
                                                // if(spanText===null){
                                                //     // console.log("no Available Category Button Label to click")
                                                // }
                                                // else{
                                                //     // console.log("About to Click on the Category Label")
                                                    
                                                //     // await categorybutton.click();

                                                //     // console.log("Already Clicked on the Category Label")
                                                    
                                                    
                                                // }


                                                                            
    
                                                // wait for 30 seconds before starting to scroll the joined groups 
                                                await page.evaluate(()=>{
                                                    return new Promise(resolve => setTimeout(resolve, 5000))
                                                }); 
                                            
                                                console.log("Now waiting 5 seconds after cliking on the Category Label now waiting for the Grouplist");


                                                console.log("Here is the Category Details , ", data.category)
                                                // console.log("here is the details about the Data to Enter into the File "  + data+ "   "+  data.category);
                                                const categoryalloptions=data.category

                                                console.log("All category options");
                                                
                                                const categorysteps= categoryalloptions.split(",").map(option=>option.trim())
                                                
                                                console.log("Here is the number of Categorysteps Length ", categorysteps, "Categorysteps Length", categorysteps.length)


                                                const categoryoptions=await page.$$('div[role="button"]');
                                                const categoryradiobuttons=await page.$$('div[role="radio"]');

                                   

                                                try{

                                                    for(i=0; i<categorysteps.length; i++){
                                                        console.log("\n Index Number of Category Step  ", i  + "\n")
                                                        //Step 1 Process 
                                                        await page.waitForSelector(`::-p-xpath(//div[@role="button" or @role="radio"][.//span[text()='${categorysteps[i]}']])`)
                                                        const selectstep1category=await page.$(`::-p-xpath(//div[@role="button" or @role="radio"][.//span[text()='${categorysteps[i]}']])`)
    
                                                        if(selectstep1category){
                                                            console.log("select category index",  i  ," found  ")

                                                            console.log("Here is the Step 1 selected Category ")
                                                            console.log("About to Click on the Step 1 Category select  ")
                                                            selectstep1category.click();
        
                                                            console.log("Just already clicked on the Radio/Button Category and want to wait 5 Seconds before proceeding ")
        
    
                                                        }
                                                        else{ 
                                                            console.log("Unfortunatley select category index",  i  ," NOT found  ")

                                                        }

                                                        // wait for 30 seconds before starting to scroll the joined groups 
                                                        await page.evaluate(()=>{
                                                            return new Promise(resolve => setTimeout(resolve, 5000))
                                                        }); 
                                                    } 


                                                }
                                                catch(error){
                                                    if(error.name="TimeoutError"){
                                                        console.log("iN cATCH eRROR, Unfortunatley select category indeX NOT found  " + error)

                                                    }
                                                    else{console.log("Different unexpected Category Error" + error)}
                                                }






                                                console.log("categoryoptions list is here   " +  categoryoptions.length);

                                                for(const categoryoption of categoryoptions){
                                                   await page.evaluate(async(data,categoryoption)=>{
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

                                            // }


                                        

                                            console.log("Already clicked on the Category "  + data + "   "+  data.category);

                                            // wait for 30 seconds before starting to scroll the joined groups 
                                            await page.evaluate(()=>{
                                                return new Promise(resolve => setTimeout(resolve, 1000))
                                            }); 
                                            









                                                // Wait for the label with aria-label="Condition" to be present
                                                // await page.waitForSelector('label[aria-label="Condition"]');

                                                // Select all labels with aria-label="Title"
                                                // const conditionlabels = await page.$$('label[aria-label="Condition"]');

                                                // console.log(conditionlabels + "  here are the condition labels  ")



























                                                // Iterate through each label (if you expect multiple labels)
                                                const conditionlabels = await page.$$("label");

                                                console.log(`number of Condition   Labels =  :-" ${categorylabels.length}`)


                                                // for(const labeldata of conditionlabels){
                                                //      console.log("Here is the Conditons Labels Inner HTML " + "/n" + labeldata);

                                                // }


                                                // const categorybuttons=await page.$$("label[aria-label='Category']");

                                                // console.log("here are the cateogry Buttons  "+ categorybuttons, "   " + "And here is the catogry buttons Length : "+ categorybuttons.length )


                                                // for(const categorybutton of categorylabels){









                                                //     const inputElement = await page.evaluateHandle(label => {
                                                
                                                //         const span = Array.from(label.querySelectorAll('span')).find(span => span.textContent.includes('Category'));           
   
                                                //         return  span? span.outerHTML : nullF
                                                   
                                                //     }, categorybutton);
                                                    

                                                //     // Extract input element (convert JSHandle to ElementHandle)
                                                //     const inputasElement =await inputElement.asElement(); // Convert to ElementHandle
                                                    
                                                    

                                                //     const spanText = await inputElement.jsonValue(); // Convert it into a usable value


                                                //     console.log("Category INput ASElement Label ",inputasElement);
                                                //     console.log("Category INput Element Label ", inputElement   )


                                                //     console.log("Category INput SPAN TEXT Element Label ", spanText   )

                                                                                                        
                                                //     if(spanText===null){
                                                //         console.log("no Available Category Button Label to click")
                                                //     }
                                                //     else{
                                                //         console.log("About to Click on the Category Label")
                                                        
                                                //         await categorybutton.click();

                                                //         console.log("Already Clicked on the Category Label")
                                                        
                                                        
                                                //     }























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
                                                    

                                                    await page.screenshot({path:path.join(marketplacelistingimgs, "addimagesstep.png"),timeout:60000})


                                                    //Select the Descripton Element and fill it with the Description
                                                    await page.waitForSelector('::-p-xpath(//label[.//span[text()="Description"]]//textarea)');



                                                    console.log("here textareas TEXT AREAS SPACE WITH TH FORMATTED DESCRIPTION +   formattedDescription ");
                                                    

                                                    await page.click('::-p-xpath(//label[.//span[text()="Description"]]//textarea)');


                                                    console.log("Already Clicked on the Description text Area")

                                                    await page.type('::-p-xpath(//label[.//span[text()="Description"]]//textarea)', formattedDescription, { delay: 20 });

                                                    console.log("Successffully clicked and fillled the Desciption Input text Areas ")





                                                    // await for More Details to Expand after .click();
                                                    await page.evaluate(()=>{
                                                        return new Promise(resolve=> setTimeout(resolve, 500))
                                                    })



                                                    await page.screenshot({path:path.join(marketplacelistingimgs, "addimagestep.png"), timout:3000})

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



                                                    await page.screenshot({path:path.join(marketplacelistingimgs, "addimagestep.png"), timout:3000})

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


                                                    await page.screenshot({path:path.join(marketplacelistingimgs, "mrktplacescroll.png")})


                                                    // console.log("have waited for 30 seconds before taking the screenshot of marketplace scrolling to the bottom mrktplcscrolle")




                                                    await page.evaluate(async()=>{
                        
                                                        await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 100ms
                                                        
                                                    })





                                                try{
                                                    await page.waitForSelector("div[aria-label=Next]");

                                                    const nextbuttons=await page.$$("div[aria-label=Next]")
    
                                                    console.log("Next Button ElementHandles List              " + nextbuttons)
    
                                                    for(const nextbutton of nextbuttons){
    
                                                        console.log("Next Button ElementHandle inside for loop              " + nextbutton)
                                                        
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
    

                                                }catch(error){
                                                    if(error.name='TimeoutError'){

                                                        await page.screenshot({path:path.join(marketplacelistingimgs, "sharetogroupslist.png"), timeout:3000})


                                                        console.log( "No NEXT BTUTTON FOUND NOW LOOKING FOR PUBLISH BUTTON AFTER TIMEOUT OF FINDING NEXT BUTTON" );
                                                        // console.log("Already Taken screenshot after Clickinng  Next Now I am in shareto moregroupslist PNG list to Suggested Groups  ")
        
        
                                                        await page.waitForSelector('div[role="button"][aria-label="Publish"]', {timeout:9000});
        
                                                        const publishbutton=await page.$('div[role="button"][aria-label="Publish"]')
                                                        const publishbuttons=await page.$$('div[role="button"][aria-label="Publish"]')


                                                        const publishbuttontextcontent=await page.evaluate((el)=>{el.innerHTML},publishbutton )

                                                        console.log(" \n  Here is the publishbutton RIGHT HERE " + publishbutton);
        
                                                        console.log("   Here is the publishbutton Content RIGHT HERE " + publishbuttontextcontent )
                                                        console.log("   Here are the  the publishbuttons  LENGTH " + publishbuttons + "\n\n" );

                                                        
        
        
        
                                                        console.log('Popup container not found ON first page Publish post to marketplace wait 5 seconds click publish');

                                                        //wait for 30 seconds after clicking the Next button before taking screenshot
                                                        await page.evaluate(()=>{
                                                            return new Promise(resolve=> setTimeout(resolve,5000))
                                                            
                                                        })
    
    

                                                        //Wait for the publish button to be available
                                                        const publishButton = await page.$('::-p-xpath(//div[.//span[text()="Publish"]])');
                                                        const publishButtons = await page.$$('::-p-xpath(//div[.//span[text()="Publish"]])');



                                                        const publishButtontextcontent=await page.evaluate((el)=>{el.textContent},publishButton )

                                                        console.log(" \n Here is the PublishButton RIGHT HERE " + publishButton);
                                                        console.log("   Here is the  publishButton RIGHT HERE " + publishButtontextcontent )
                                                        console.log("   Here is the publishButtons   LENGTH " + publishButtons + "\n");

                                                        
        




                                                        // Scroll into view to avoid click issues
                                                        await page.evaluate((el) => (el.scrollIntoView()),publishbutton);


                                                        await publishbutton.click();
    
                                                        console.log(" I just clickedo n the the  PUBLISH BUTTON ")
    
                                                        //wait for 30 seconds after clicking the Next button before taking screenshot
                                                        await page.evaluate(()=>{
                                                            return new Promise(resolve=> setTimeout(resolve,20000))
                                                        })
                                                    
        
        
                                                        await page.screenshot({path:path.join(marketplacelistingimgs, "finishedpostingcreenshot.png"), timeout:30000})
                                                        //console.log( of after clicking the Next Button);
        
                                                        console.log(" SUCCESSFULLY POSTED TO MARKETPLACE  CONGRATULATIONS YEGON YOU FINALLY PROVED THAT YOU COULD DO IT  Taken screenshot TO finishedpostingscreenshot.png  \n\n ")
        
                                                        // Get the current time
                                                        const currentTime = await page.evaluate(() => {
                                                            return new Date().toLocaleString();
                                                        });
        
                                                        
                                                        console.log("\n\n here is the TIME STAMP OF PAGE of JUST FINISHED POSTING PRODUCT  ] " + currentTime)
                                                        
                                                        console.log('Current Time:', currentTime + "  \n:");
        
                                                        //wait for 30 seconds after clicking the Next button before taking screenshot
                                                        await page.evaluate(()=>{
                                                            return new Promise(resolve=> setTimeout(resolve,3000))
                                                        })
        
                                                        
                                                        console.log("After waiting for 3 seconds after successfully posting I am moving to the next Procut to Post in marketplace ")
                                                        
        
                                                    }
                                                    else{
                                                        console.log("different Error Looking for NEXT BUTTON ENCOUNTERED")
                                                    }



                                                }
                                                
                                              





































































                                            await page.screenshot({path:path.join(marketplacelistingimgs, "afternextscreenshot.png"), timeout:30000})
                                            //console.log( of after clicking the Next Button);
                                            // console.log("Already Taken screenshot after Clicking Next Button")






                                            // Wait for the element with the specified classes to appear
                                            await page.waitForSelector('.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xr9ek0c.xjpr12u.xzboxd6.x14l7nz5');

                                            // Select all elements with the specified classes
                                            const sharetogroupsbuttonsclasses = await page.$$('.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xr9ek0c.xjpr12u.xzboxd6.x14l7nz5');



                                            // console.log("Share To Groups Buttons classes List example using 1[1]:  " +  sharetogroupsbuttonsclasses[1]);

                                            
                                            // console.log("Share To Groups Buttons classes List Length: ", sharetogroupsbuttonsclasses.length + "    " + "\n\n");



                                            console.log("Share To Groups Buttons classes List example using 3[3]:  " +  sharetogroupsbuttonsclasses[3]);



                                            console.log("Share To Groups Buttons classes List Length: ", sharetogroupsbuttonsclasses.length + "    " + "\n\n");

                                            // Ensure the array has at least 3 elementsy
                                            if (sharetogroupsbuttonsclasses.length > 3) {


                                                const divbuttons= await sharetogroupsbuttonsclasses[3].$$('div[role=checkbox]');

                                                console.log("Total Number of Suggested Groups to share to: " + divbuttons.length);
                                                console.log("List of Suggested Share To Groups Buttons to be clicked: , divbuttons[1]");
                                                    
                                
                                                let alloweddivbuttons=[];
                                                let trackrandom=[];

                                                if(divbuttons.length<21){


                                                    console.log("Suggested Groups tto share Listiing to Are less than 21 so jusst Select all of them        +  " + divbuttons );
                                                    console.log("Suggested Groups to share to are less than 21 so select all of them the length     " + divbuttons.length);


                                                    for(const divbutton of divbuttons){

                                                        alloweddivbuttons.push(divbutton)
                                                    }

                                                }
                                                else{
                                                    console.log("Suggested Groups Are more than 20 so Select Randlomly 20 oof them       +   +  divbuttons");
                                                    console.log("Suggested Groups Are more than 20 so Select RRandlomly 20 oof them here is the length     " + divbuttons.length);


                                                    const maxToPick=Math.min(30,divbuttons.length)
                                                    
                                                    for(let i=0; alloweddivbuttons.length<maxToPick; i++){

                                                        
                                                        let randomnumber=Math.floor(Math.random()*divbuttons.length)
                                                        

                                                        while(trackrandom.includes(randomnumber)){
                                                            randomnumber=Math.floor(Math.random()*divbuttons.length);
                                                            // console.log("HHere iis the RANNDOM NUMBEER(Dupclicate Number that was causing Repetitons) TO BE USEED + "  + randomnumber);

                                                        }


                                                        // console.log("HHere iis the RANNDOM NUMBEER TO BE USEED + "  + randomnumber);
                                                        
                                                        trackrandom.push(randomnumber)
                                                                                                                
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
                                                                return new Promise(resolve=> setTimeout(resolve,500))
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
                                                    
                                                    console.log("here is the sharetomoregroups container  " + sharetomoregroupscontainers[0] + "   And her is the lenght os the containers for share to more groups   " + sharetomoregroupscontainers.length + "    share to more groups container [1] scroll heights  " +  sharetomoregroupscontainers[1].scrollHeight + "   share to more groups container[2] scroll heights   " +  sharetomoregroupscontainers[2] + "   share to more groups container[3] scroll heights   " +  sharetomoregroupscontainers[3]) 
                                            
                                                    let totalHeight = 0;
                                                    let distance = 200; // scroll step in pixels

                                                    console.log("here is the height of the sharetomoregroups Container   " + sharetomoregroupscontainers[1].scrollHeight)

                                                    while (totalHeight < sharetomoregroupscontainers[1].scrollHeight) {
                                                        sharetomoregroupscontainers[1].scrollBy(0, distance);
                                                        totalHeight += distance;
                                                        await new Promise(resolve => setTimeout(resolve, 500)); // wait for 100ms


                                                    
                                                    }

                                                })



                                                await page.screenshot({path:path.join(marketplacelistingimgs, "sharetogroupslistscroll.png"), timeout:30000})

                                                //console.log( of after clicking the Next Button);
                                                // console.log("Already Taken screenshot after Clickinng  Next Now I am in shareto moregroupslist PNG list to Suggested Groups  ")





                                                await page.screenshot({path:path.join(marketplacelistingimgs, "sharetogroupslist.png"), timeout:30000})


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
                                                            return new Promise(resolve=> setTimeout(resolve,15000))
                                                        })
                                                    }
                                                    else{
                                                        console.log("No POPUP LISTED INSIDE THE POPUP CONTAINER");
                                                        
                                                        await publishbutton.click();

                                                        console.log(" I just clickedo n the the  PUBLISH BUTTON ")

                                                        //wait for 30 seconds after clicking the Next button before taking screenshot
                                                        await page.evaluate(()=>{
                                                            return new Promise(resolve=> setTimeout(resolve,15000))
                                                        })
                                                    }
                                                } else {
                                                    console.log('Popup container not found');



                                                    await publishbutton.click();

                                                    console.log(" I just clickedo n the the  PUBLISH BUTTON ")

                                                    //wait for 30 seconds after clicking the Next button before taking screenshot
                                                    await page.evaluate(()=>{
                                                        return new Promise(resolve=> setTimeout(resolve,15000))
                                                    })
                                                }


                                                await page.screenshot({path:path.join(marketplacelistingimgs, "finishedpostingcreenshot.png"), timeout:30000})
                                                //console.log( of after clicking the Next Button);

                                                console.log(" SUCCESSFULLY POSTED TO MARKETPLACE  CONGRATULATIONS YEGON YOU FINALLY PROVED THAT YOU COULD DO IT  Taken screenshot TO finishedpostingscreenshot.png  \n\n ")

                                                // Get the current time
                                                const currentTime = await page.evaluate(() => {
                                                    return new Date().toLocaleString();
                                                });

                                                
                                                console.log("\n\n here is the TIME STAMP OF PAGE of JUST FINISHED POSTING PRODUCT  ] " + currentTime)
                                                
                                                console.log('Current Time:', currentTime + "  \n:");

                                                //wait for 30 seconds after clicking the Next button before taking screenshot
                                                await page.evaluate(()=>{
                                                    return new Promise(resolve=> setTimeout(resolve,1000))
                                                })

                                                
                                                console.log("After waiting for 3 seconds after successfully posting I am moving to the next Procut to Post in marketplace ")
                                                
                                        
                                            }
                                            catch(err){
                                                console.log(err)
                                            }
                                        
                                
                                
                                        }
                                    }
                                    
                    }
                    else {
                        console.log("Item for Sale Button Element not found.");
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



        }
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

module.exports={
    createMarketplaceListing
}












































































































































