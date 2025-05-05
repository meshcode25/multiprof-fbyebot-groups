
// Launch the browser and open a new blank page
// app.js

async function runAutomation() {
    console.log("\n\n 🕐 Starting automation at", new Date().toLocaleString() ," \n");

    try {
        // ✅ Put all your automation code here:
        // e.g., launch Chrome, connectOverCDP, post to Facebook, etc.

        // Example placeholder:
        // await launchBrowserForProfile(profilePath);
        // await doAutomation(page);




        // #!/usr/bin/env node

        // import dotenv from 'dotenv';
        // dotenv.config();
        
        // Or import puppeteer from 'puppeteer-core';
        // import { fileURLToPath } from 'url';
        
        
        
        
        const dotenv = require('dotenv');
        dotenv.config();
        
        
        // const puppeteer = require('puppeteer-extra'); // or puppeteer-core
        const path = require('path');
        const fs = require('fs');
        const os = require('os');
        const { platform } = require('process');
        const { chromium } = require('playwright');
        const { spawn } = require('child_process');
        const { exec } = require('child_process');
        // const net = require("net")s;
        
        
        // const StealthPlugin = require('puppeteer-extra-plugin-stealth');        
        // puppeteer.use(StealthPlugin());
        
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
        
                console.log('WELCOME TO Fbyebot FB Marketplace Automation Software; The App Just Started')
        
        
        
        
                const dataFile = path.join(os.homedir(), '.einrichten_date.json');
                const max = 14
        
                function getTageSince(dateStr) {
                    const einrichten = new Date(dateStr);
                    const now = new Date();
                    const nowUTC=new Date(now.toISOString())
                    const diffZeit = nowUTC.getTime() - einrichten.getTime();
        
                    // console.log("Here isthe einrichten Uhrzeit ", einrichten),
                    // console.log("Here isthe JetztUTC Uhrzeit ", nowUTC),
                    // console.log("here is the zeit  unterschied ", diffZeit/(1000*60*60*24))
                    // return Math.floor(diffZeit / (1000 * 60 * 60 * 24));
        
                    
                    return Math.floor(diffZeit / (1000 * 60 * 60 * 24));
                    
                }
        
                async function checkProbeZeit() {
                    if (!fs.existsSync(dataFile)) {
                        // First run: store the current datea
                        const data = { einrichtenOn: new Date().toISOString() };
                        fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
                        return true;
                    }
        
                    // File exists: check the date
                    const raw = fs.readFileSync(dataFile);
                    const { einrichtenOn } = JSON.parse(raw);
                    const tagePassed = getTageSince(einrichtenOn);
        
                    if (tagePassed > max) {
                        console.log(`⛔ CRITICAL ERROR NUMBER (${tagePassed} ). PLEASE CONTACT DEVELOPER!.`);
                        console.log(`⛔ CRITICAL ERROR ENCOUNTERED!! ⛔. PLEASE CONTACT DEVELOPER!. Email: yegonk247@gmail.com or phone: +254706727834`);
        
                        return false;
                    }
        
                        console.log(`✅ VALID NUMBER.... ${tagePassed} and ${max}`);
                        console.log(`✅ NO CRITICAL ERRORS ENCOUNTERED`);
        
        
                    return true;
                }
        
        
        
        
        
        
        
        
        
        
        
                const probeOk = await checkProbeZeit();
                
                if (!probeOk) {
                    return (`⛔ CRITICAL ERROR ENCOUNTERED!! ⛔. PLEASE CONTACT DEVELOPER.`);
                }
        
                console.log(`✅ NO CRITICAL ERRORS ENCOUNTERED MAKE RUN`);
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                // Detect platform and set Chrome path accordingly
                function getChromeExecutablePath() {
        
                    const platform = os.platform();
        
                    if (platform === 'win32') {
                        // Windows
                        const winChromePaths = [
                            "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
                            "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
                        ];
        
                        for (const p of winChromePaths) {
                            if (fs.existsSync(p)) return p;
                        }
                    }
                    else if (platform === 'darwin') {
                        // macOS
                        return "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
                    }
                    else if (platform === 'linux') {
                        // Linux
                        const linuxChromePaths = [
                            '/usr/bin/google-chrome',
                            '/usr/bin/chromium-browser',
                            '/usr/bin/chromium'
                        ];
                
                        for (const p of linuxChromePaths) {
                            console.log("path to chrome ", p)
                            if (fs.existsSync(p)) return p;
                        }
                    }
        
                    return null; // fallback if none found
                }
        
                const chromePath = getChromeExecutablePath();
                console.log(chromePath);
        
                if (!chromePath) {
        
                    console.error("❌ Could not find Chrome/Chromium on this system.");
                    process.exit(1);
                }
        
        
                function getAppDataDir(appName = 'multiprofile-fbyebot-us-win') {
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
                    console.log("No AppDir Found Just Created a New AppDir  at ", appDir);
                }
                console.log("AppDir Found, Continue...")
                fs.chmodSync(appDir,0o755)
            
        
                const chromeUserDataDir = path.join(appDir, "fbyebotChromeProfiles")
        
                if(!fs.existsSync(chromeUserDataDir)){
                    fs.mkdirSync(chromeUserDataDir,{recursive:true});
                    console.log(" chromeUserDataDir not Found!! , Just Created a new chromeUserDataDir  in ", chromeUserDataDir );
                }
            
                console.log("chromeUserDataDir path Found at "  , chromeUserDataDir, " Continue... ")
                fs.chmodSync(chromeUserDataDir,0o755)
            


               //LIst of profiles to use 
               const userprofiles=[
                    "Default","Profile 1","Profile 2","Profile 3","Profile 4","Profile 5",
                    "Profile 6","Profile 7","Profile 8","Profile 9","Profile 12","Profile 10",
                    "Profile 11","Profile 12","Profile 13","Profile 14","Profile 15",
                    "Profile 16","Profile 17","Profile 18","Profile 19","Profile 20"
                ]
        
                for(const userprofile of userprofiles){
                    const chromeUserProfile = path.join(chromeUserDataDir, userprofile)
                    
                    if(!fs.existsSync(chromeUserProfile)){
                        fs.mkdirSync(chromeUserProfile,{recursive:true});
                        console.log(" chromeUserProfile  not Found, Just Created a new chromeUserDataDir  in ", chromeUserProfile );
                    }
                
                    console.log("chromeUserProfile path Found at "  , chromeUserProfile, " Continue... ")
                    fs.chmodSync(chromeUserProfile,0o755)
                
                }
        

                // // Function to get the current profile index based on a 3-hour rotation
                // function getRotatedIndex() {
                //     const totalProfiles = userprofiles.length;
                //     const now = new Date();
                //     return Math.floor(now.getHours() / 3) % totalProfiles; // Change the profile every 3 hours
                // }
        
                // Function to get the current profile index based on a 10 MInuts for testing -hour rotation
                function getRotatedIndex() {
                    const totalProfiles = userprofiles.length;
                    const now = new Date();
                    return Math.floor( (now.getMinutes()) / 10) % totalProfiles; // Change the profile every 3 hours
                }
        
                //get profile index
                const profileIndex=getRotatedIndex();
                console.log("\n Here isthe Index to select Profile Index " + profileIndex)
        



                console.log('\n 🚀 Launching Chrome with Playwright Persistent Storage... First here is the Chrome Path  '   ,chromePath , 'Here is the user--data-dir ' + chromeUserDataDir, "and here is the profile-diretory  " + userprofiles[profileIndex]);
        



                const userDataDir = path.join(chromeUserDataDir,userprofiles[profileIndex])
                
                const browser= await chromium.launchPersistentContext(userDataDir, {
                  headless: false,
                  executablePath: chromePath,
                  args: [
                    '--disable-notifications',
                    '--disable-blink-features=AutomationControlled',
                    '--disable-infobars',
                    '--no-sandbox', // Use with caution, understand the security implications
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--ignore-certificate-errors',
                    '--ignore-ssl-errors',
                    '--disable-extensions', // Sometimes extensions can interfere
                    '--disable-component-extensions-with-background-pages',
                  ]
                });
                
                // Continue with automation using `browserContext.pages()[0]` or `browserContext.newPage()`
                




        
        
        
        
        
                ///Tryinng to Spawan my Chrome profiles 
        
                const killchromes= async()=>{
                    const isWindows = process.platform === 'win32';
                    
                    const killCommand = isWindows
                      ? 'taskkill /F /IM chrome.exe /T' // Windows
                      : 'pkill chrome';                // Linux/macOS
                    
                    return new Promise((resolve,reject)=>{

                        exec(killCommand, (error, stdout, stderr) => {
                            if (error) {
                                console.error(`\n❌ Error killing Chrome: ${error.message}`);
                                resolve(resolve=> setTimeout(resolve,3000))

                                // reject(error)
                                return;
                            }
                            if (stderr) {
                                console.error(`\n⚠️ stderr: ${stderr}`);
                                resolve(resolve=> setTimeout(resolve,3000))

                                return;
                            }
                                console.log('\n ✅ Chrome processes killed');
                                resolve(resolve=> setTimeout(resolve,3000))
                        });
                        

                    })
                }        
            
                //Kill Chrome processes 
                // await killchromes()
 
        
        
                // const contexts = browser.contexts();
        
        
                // for (const context of contexts) {
                //     console.log("here next context", context)
                //     const pages = context.pages();
                //     for (const page of pages) {
                //         console.log( "Available pages  ", page.url());
                //     }
                // }
        
                // const pages=context.pages();
        
                // for(const page of page){
                //     console.log( "Available pages  ", page.url());
                    
                // }
                
                
                
        
        
        
                let page;
                
                // find the page with the new-tab URL
                for (const context of browser.contexts()) {
                    for (const p of context.pages()) {
                        if (p.url() === 'chrome://new-tab-page/') {
                            console.log('🎯 Found clean launch tab, using this page.');
                            page = p;
                            break;
                        }
                    }
                    if (page) break;
                }
                
                // fallback: if no new-tab-page found, just use the first context
                if (!page) {
                    console.warn('⚠️ No new-tab page found. Defaulting to new page in first context.');
                    const context = browser.contexts()[0];
                    page = await context.newPage();
                }
                
                // await page.goto('https://facebook.com');
                
        
                
                
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                
        
                // console.log("Here is the needed context ", context)
                
                // const page = await context.newPage();
        
                console.log('🧭 Page:', page.url());
                
                await page.goto('https://facebook.com');
        
                const url = page.url();
        
                if (url.includes('/login') || url.includes('login_attempt')) {
                    console.log('❌ Not logged in!');
                } else {
                    console.log('✅ Already logged in!');
                }
        
                console.log('🛑 Done! (Press CTRL+C to quit)');
                // })();
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                // const page = await browser.newPage();
                
                
                        
                // await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US' });
                // await page.emulateTimezone('America/Phoenix');
                // await page.setGeolocation({ latitude: 33.4484, longitude: -112.0740 });
        
        
        
                // // Enable popup blocker
                // await page.setPopupBlockerEnabled(true);
                
        
        
        
                // Set screen size.
                // await page.setViewportSize  ({width: 1500, height: 700});
        
        
                // // // Allow notifications for the page
                // const context = browser.defaultBrowserContext();
                // await context.overridePermissions('https://facebook.com/', ['notifications']);
        
        
        
        
        
            
                // Where to store user files (can be current dir or ~/.config/appname)
                const envPath = path.join(appDir, '.env');
                const cookiesPath = path.join(appDir, 'cookies.json');  
                
               
                // Create default .env if missing
                if (!fs.existsSync(envPath)) {
                    fs.writeFileSync(envPath, 'EMAIL=\nPASSWORD=\nYOURPRODUCTSROOTFOLDER=\n');
                    console.log('\n⛔ .env file created. Go to your home folder then search for .config or APPDATA(if in windows) then then it and look for folder called fbyebot-us-2.0 click it then ctr+H(linux) Ctr+Shift+ . (windows) command+shift+ .(macos) to show hidden files then click on the .env and then kindly fill up the path to your products folder.');
        
                }
                fs.chmodSync(envPath,0o755)
                
                // Create default cookies.json if missing
                if (!fs.existsSync(cookiesPath)) {
                    fs.writeFileSync(cookiesPath, JSON.stringify([], null, 2));
                    console.log('\n ⛔cookies.json file created. go to your home folder then search .config or APPDATA(if on windows), then click it and look for folder called fbyebot-us-2.0 click it then you can log in to facebook copy and paste the cookies here in the cookie.json  \n\n');
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
                    // await context.addCookies(...cookies);
        
        
                    // await page.goto('https://www.facebook.com/   ', { waitUntil: 'networkidle', timeout:30000 });
        
        
        
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
                        // await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle2', timeout:30000 });
        
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
        
        
        
        
        
        
        
        



















        console.log("✅ Automation completed.");
    } catch (err) {
        console.error("❌ Automation failed:", err);
    }

    console.log("⏳ Waiting 3 hours until next run...\n");

    // Wait for 3 hours (10 min = 600000 for testing)
    // setTimeout(runAutomation, 2 * 60 * 60 * 1000);
    // Wait for every 3 minuts to start application 
    setTimeout(runAutomation, 10 * 60 * 1000);

}

// Start the loop
runAutomation();
