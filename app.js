#!/usr/bin/env node

// import dotenv from 'dotenv';
// dotenv.config();

// Or import puppeteer from 'puppeteer-core';
// import { fileURLToPath } from 'url';




const dotenv = require('dotenv');
dotenv.config();

const puppeteer = require('puppeteer'); // or puppeteer-core
const path = require('path');
const fs = require('fs');
const os = require('os');
const { platform } = require('process');

// // To get __dirname and __filename in CommonJS
// const fileur = __filename || require('url').fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const fileURLToPath =require('')

// Import your own module (also must be CommonJS!)
// // you’ll need to update these files too
// const { postTogroups } = require('./posttogroups.js'); 
// const { listInmorePlaces }= require('./listinmoreplaces.js');

const { createMarketplaceListing } =require( './listonmarketplace.js');













(async ()=>{

    try{

            console.log('jUST STARTED THE APP.JSON BEGINNING ')




        const dataFile = path.join(os.homedir(), '.install_date.json');
        const MAX_DAYS = 15

        function getDaysSince(dateStr) {
            const installed = new Date(dateStr);
            const now = new Date();
            const diffTime = now.getTime() - installed.getTime();
            // return Math.floor(diffTime / (1000 * 60 * 60 * 24));
            return Math.floor(diffTime / (1000 * 60 * 60 ));
            
        }

        async function checkTrialPeriod() {
            if (!fs.existsSync(dataFile)) {
                // First run: store the current date
                const data = { installedOn: new Date().toISOString() };
                fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
                return true;
            }

            // File exists: check the date
            const raw = fs.readFileSync(dataFile);
            const { installedOn } = JSON.parse(raw);
            const daysPassed = getDaysSince(installedOn);

            if (daysPassed > MAX_DAYS) {
                // console.log(`⛔ Trial expired (${daysPassed} days). Please contact developer.`);
                console.log(`⛔ CRITICAL ERROR ENCOUNTERED!! ⛔. Please contact developer.`);

                return false;
            }

            // console.log(`✅ Trial valid. Day ${daysPassed} of ${MAX_DAYS}`);
            console.log(`✅ NO CRITICAL ERRORS ENCOUNTERED`);


            return true;
        }











        const trialOk = await checkTrialPeriod();
        
        if (!trialOk) {
            return (`⛔ CRITICAL ERROR ENCOUNTERED!! ⛔. Please contact developer.`);
        }














        // Detect platform and set Chrome path accordingly
        function getChromeExecutablePath() {

            const platform = os.platform();

            if (platform === 'win32') {
                // Windows
                const winChromePaths = [
                    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
                ];

                for (const p of winChromePaths) {
                    if (fs.existsSync(p)) return p;
                }
            }
            else if (platform === 'darwin') {
                // macOS
                return '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
            }
            else if (platform === 'linux') {
                // Linux
                const linuxChromePaths = [
                    '/usr/bin/google-chrome',
                    '/usr/bin/chromium-browser',
                    '/usr/bin/chromium'
                ];
        
                for (const p of linuxChromePaths) {
                    if (fs.existsSync(p)) return p;
                }
            }

            return null; // fallback if none found
        }

        const chromePath = getChromeExecutablePath();

        if (!chromePath) {

            console.error("❌ Could not find Chrome/Chromium on this system.");
            process.exit(1);
        }


        // Rest of your bot code here...


        const browser = await puppeteer.launch({
            headless: false, // Optional: Run in non-headless mode to see the browser
            args: [
                    '--disable-setuid-sandbox',
                    '--no-sandbox', // Optional argument for running in CI/CD environments
                    '--disable-notifications' // This argument disables browser notifications
            ],
            executablePath:chromePath,
            // userDataDir: './usercache/yegonk247'
            

            // userDataDir: './usercache/yegonk247'
            // userDataDir: './usercache/manukiruii'
            // userDataDir: './usercache/meshcode'
            // userDataDir: './usercache/kiprotichkiproperties'
            // userDataDir: './usercache/meslelu'
            // userDataDir: './usercache/valorinecherop'
        });

        const page = await browser.newPage();



        // // Enable popup blocker
        // await page.setPopupBlockerEnabled(true);
        



        // Set screen size.
        await page.setViewport({width: 1500, height: 730});


        // // // Allow notifications for the page
        // const context = browser.defaultBrowserContext();
        // await context.overridePermissions('https://facebook.com/', ['notifications']);




        function getAppDataDir(appName = 'fbyebotfreebee3.0') {
            const home = os.homedir();

            if (platform === 'win32') {
                return path.join(process.env.APPDATA || path.join(home, 'AppData', 'Roaming'), appName);
            }

            // Linux and macOS
            return path.join(home, '.config', appName);
        }

        const appDir = getAppDataDir(); // e.g., ~/.config/fbyebot or %APPDATA%\fbyebot


    
        // Where to store user files (can be current dir or ~/.config/appname)
        const envPath = path.join(appDir, '.env');
        const cookiesPath = path.join(appDir, 'cookies.json');
        
        // Ensure folder exists
        if (!fs.existsSync(appDir)) {
            fs.mkdirSync(appDir, { recursive: true });
        }
        fs.chmodSync(appDir,0o755)
        
        // Create default .env if missing
        if (!fs.existsSync(envPath)) {
            fs.writeFileSync(envPath, 'EMAIL=\nPASSWORD=\nYOURPRODUCTSROOTFOLDER=\n');
            console.log('.env file created. Please fill in your credentials.');
        }
        fs.chmodSync(envPath,0o755)
        
        // Create default cookies.json if missing
        if (!fs.existsSync(cookiesPath)) {
            fs.writeFileSync(cookiesPath, JSON.stringify([], null, 2));
            console.log('cookies.json file created.');
        }
        fs.chmodSync(cookiesPath,0o755)
        
        // Load env
        dotenv.config({ path: envPath });
        
        // Use cookies.json
        // const cookies = JSON.parse(fs.readFileSync(cookiesPath, 'utf-8'));


        // Load cookies from the cookie.json file
        const cookies = JSON.parse(fs.readFileSync(cookiesPath));

                

        const cacheDir = path.join(appDir, 'usercache', 'images');

        if (!fs.existsSync(cacheDir)) {
          fs.mkdirSync(cacheDir, { recursive: true });
        }
        
        // const screenshotPath = path.join(cacheDir, 'home.png');
        // await page.screenshot({ path: screenshotPath });
        

        const marketplacelistingimgs = path.join(appDir, 'marketplacelistingimgs');

        if (!fs.existsSync(marketplacelistingimgs)) {
          fs.mkdirSync(marketplacelistingimgs, { recursive: true });
        }




        

        // Load cookies from the cookie.json file
        // const cookies = JSON.parse(fs.readFileSync('./cookies/kiprotichkiproperties.json'));

        // Load cookies from the cookie.json file
        // const cookies = JSON.parse(fs.readFileSync('./cookies/yegonk247.json'));


        // Load cookies from the cookie.json file
        // const cookies = JSON.parse(fs.readFileSync('./cookies/juan.json'))


        // Load cookies from the cookie.json file
        // const cookies = JSON.parse(fs.readFileSync('./cookies/valitaly.json'));




        // Load cookies from the cookie.json file
        // const cookies = JSON.parse(fs.readFileSync('./cookies/kiprotichmesh1.json'));


        // Load cookies from the cookie.json file
        // const cookies = JSON.parse(fs.readFileSync('./cookies/meshackwanjohi.json'));


        // Load cookies from the cookie.json file
        // const cookies = JSON.parse(fs.readFileSync('./cookies/meslelu.json'));



        // Load cookies from the cookie.json file
        // const cookies = JSON.parse(fs.readFileSync('./cookies/marioneliza.json'));

        // Load cookies from the cookie.json file
        // const cookies = JSON.parse(fs.readFileSync('./cookies/megastrength.json'));








        try{

            // Set the cookies in the page
            await page.setCookie(...cookies);


            await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle2', timeout:30000 });



            await page.waitForSelector("a[aria-label='Home'][role='link']")
    
            const homebutton=await page.$('a[aria-label="Home"][role="link"]')

            if(homebutton){
                console.log("Wow! Yess! Just landed on the Home page")


                    
                // await page.evaluate(async()=>{
                //     return new Promise(resolve => setTimeout(resolve, 5000))
                // }); 

                
                //await postTogroups(page,browser);


                await createMarketplaceListing(page,browser);

                // await listInmorePlaces(page,browser);

                // await browser.close();
            }
            else{
                //wait for redirect after clicking the loginbutton
                await page.waitForNavigation({timeout:300000});
                console.log("Error catch No Home Page Found")

            }




            // *****************This logging in part comment out for now***********

                // Type into search box.
                // await page.locator('#email').fill(`${process.env.email}`);

                // await page.locator('#pass').fill(`${process.env.password}`);
                // await page.locator('#pass').fill(`${process.env.password}`);

                // Wait and click on first result.
                // await page.locator('#loginbutton').click();


            
    

        }
        catch(error){
            console.log("Caough ERror AFter trying to use Cookies \n" + error);
            console.log(error);

            if(error.name==="TimeoutError"){
                // Navigate the page to a URL.Navigate to the website
                await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle2', timeout:30000 });

                // await page.setCookie(...cookies);

                
                // Navigate the page to a URL.Navigate to the website
                // await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle2', timeout:80000 });
                // await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle2', timeout:30000 });
                

                // Perform actions on the page


                //  wait for 30 seconds before starting to scroll the joined groups 
                //  await page.evaluate(async()=>{
                //     return new Promise(resolve => setTimeout(resolve, 300000))
                // }); 

                //wait for redirect after clicking the loginbutton
                await page.waitForNavigation({timeout:300000});

                // await page.waitForNavigation({ waitUntil: 'networkidle2' });

                // For example, take a screenshot
                // await page.screenshot({ path: './cookieshomelogin.png' });
                await page.screenshot({ path: './cookieshomelogin.png' });

                // console.log("Aleaady taken a screen shot of the Home page after login using cookies found in cookieshomelogin.png ")
                console.log("Aleaady taken a screen shot of the Home page after login using cookies found in cookieshomelogin.png ")


                //  await page.screenshot({ path: "./userscache/images/home.png" });
                await page.screenshot({ path: path.join(cacheDir, "home.png" )});




















                // let isCached = false;

                // // Listen for responses and check if they come from cache
                // page.on('response', response => {
                //     const status = response.status();
                //     const fromCache = response.fromCache();

                //     // Check if any resource was served from cache
                //     if (fromCache) {
                //         isCached = true;
                //     }
                // });

                // // Navigate the page to a URL.Navigate to the website
                // await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle2', timeout:80000 });
                        
                // // Check if cookies are available
                // const cookies = await page.cookies();
            
                // if (cookies.length > 0 || isCached) {
                //     console.log('Cookies or cache found, no need to login.');
                //     // Continue with the script


                //     console.log(cookies);


                // } else {

                //             // Navigate the page to a URL.
                //             // await page.goto('https://www.facebook.com/login/', {waitUntil:'networkidle2', timeout:30000});

                //             // console.log("Just took a Login Success screenshot  markerplacelisttinfg to home.png")
                //                 // wait for 30 seconds before starting to scroll the joined groups 

                //             // Wait for the email input to be available
                //             await page.waitForSelector('#email');
                //             // Wait for the email input to be available
                //             await page.waitForSelector('#pass');

                //             // Wait for the login button submit to be available
                //             // await page.waitForSelector('#loginbutton');

                //             //console.log email from process.env file
                //             console.log(process.env.email)
                //             console.log(process.env.password)

                //             // Type into search box.
                //             await page.locator('#email').fill(`${process.env.email}`);

                //             //take screen shot 
                //             //take screen shot 
                // // 
                //             // Wait and click on first result.
                //             // await page.locator('#loginbutton').click();

                //             //wait for redirect after clicking the loginbutton
                //             await page.waitForNavigation({timeout:60000});

                //             // wait for 30 seconds before starting to scroll the joined groups 
                //             await page.evaluate(async()=>{
                //                 return new Promise(resolve => setTimeout(resolve, 10000))
                //             }); 
                        
                //             // Continue with your tasks
                //             console.log('Waited for 2 minutes');

                //             console.log("Login Successfull")

                //             //wait for redirect after clicking the loginbutton
                //             // await page.waitForNavigation({timeout:60000});

                //             await page.screenshot({ path: "./marketplacelistingimgs/homepage.png" });

                //             console.log("Just took a Login Success screenshot  markerplacelisttinfg to home.png")
                //                 // wait for 30 seconds before starting to scroll the joined groups 

























                // *****************This one is the copy of the Above for logging in***********

                // console.log('No cookies or cache found, redirecting to login...');
                console.log('No cookies or cache found, redirecting to login...');
                
                // Navigate the page to a URL.
                // await page.goto('https://www.facebook.com/login/', {waitUntil:'networkidle2', timeout:30000});

                await page.screenshot({ path: path.join(marketplacelistingimgs, "homepage.png" )});
                // await page.screenshot({ path: "./marketplacelistingimgs/homepage.png" });

                console.log("Just took a Login Success screenshot  markerplacelisttinfg to home.png")
                    // wait for 30 seconds before starting to scroll the joined groups 

                // Wait for the email input to be available
                // await page.waitForSelector('#email');


                // Wait for the email input to be available
                // await page.waitForSelector('#pass');

                // Wait for the login button submit to be available
                // await page.waitForSelector('#loginbutton');

                //console.log email from process.env file
                console.log(process.env.email)
                console.log(process.env.password)




                



                try{
                    await page.waitForSelector("a[aria-label='Home'][role='link'")

                    const homebutton=await page.$('a[aria-label="Home"][role="link"]')

                    if(homebutton){
                        console.log("Wow! Yess! Just landed on the Home page")
                    }
                    else{
                        //wait for redirect after clicking the loginbutton
                        await page.waitForNavigation({timeout:300000});

                    }
                    

                }
                catch(error){
                    if(error.name==="TimeoutError"){
                        //wait for redirect after clicking the loginbutton
                        await page.waitForNavigation({timeout:300000});
                    }
                    else{
                        console.log("Different Error Encountered");
                    }
                }










                // await page.evaluate(async()=>{
                //     return new Promise(resolve => setTimeout(resolve, 5000))
                // }); 


                // // }


                
                // await page.evaluate(async()=>{
                //     return new Promise(resolve => setTimeout(resolve, 5000))
                // }); 

                
                //await postTogroups(page,browser);


                await createMarketplaceListing(page,browser);

                // await listInmorePlaces(page,browser);

                // await browser.close();

                
            }   
            else{
                console.log("It's just another stupid error   ,  \n", error)
                console.log(error)
            }
        }

            
    }
    catch(err){
        console.log("I just created an error during login")
        console.log(err);
    }
})()
// Launch the browser and open a new blank page
