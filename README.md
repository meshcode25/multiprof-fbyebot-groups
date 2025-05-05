GNU nano 7.2                                                            README.md                                                                     

# multiprofile-fbyebot-windows
fbyebot_multiprofile_windows
=======
# fbyebot
fbyebot
# fbyebot
fbyebot

Fbyebot is a Facebook Automation Tool, you can automate listing to marketplace, Automate looping all your groups and posting in each, or list the already listed products on marketplace to more groups.

Steps to Set Up this Tool:

1. First here is what you will need-:1.
  1.Create two simple .txt files name them however you like i.e
     file 1(listing type file):-(the first file you just type the following -: "listingType:Item for sale" or "listingType:Vehicle for Sale  " or "listingType:House for Sale/Rent")
     file 2(product description/details file):-(the other file you  will follow the following pattern (EXACTLY like below-otherwise might not work )for i.e listingType:Item for sale-:
        title: AUDI SQ5/RSQ5
        price: 4900000
        category: Auto parts, Cars & Car parts, Parts 
        condition: New
       description: 🚀🔥 Audi SQ5/RSQ5 – Power Meets Prestige 🔥🚀 ... Looking for SUV muscle wrapped in luxury?... The Audi SQ5 is your perfect blend of speed, space & sophistication. ...                              Schedule a test drive today. ... 🔥Asking 4.9M...🤙Call/Whatsapp 0715633999 for viewing
        tags:audi...audi rsq5...audi sq5...audi...rsq5...q5...peugeot...peugeot 308...308...Mazda...mazda demio...demio...honda fit...fit...shuttle...honda fit

   2. so for the second file(product details file) like you can see the important fields to fill are the following:-
         1.title: (which shouldn't be too long-too)
          2.price:(no prefixes or anyting currenty signs just numbers)
          3.category:(each category, subcategory(if your product has subcategory in fb while listing), more subcategory(if your product in facebooks requires it) - so for this step important to                 notice that each category to subcategory to more subcategory are separated by a comma i.e category,subcategory,another subcategory
          4.condition:(can be New or Used-Like-New or Used etc. according to what you would choose for the product)
          5. description:(this is the most important part- to stress(so know it's next like, the three dots(...) determine that/stand for next line, so just type your first line then three                   dots(...) then type your next line etc.
          6.tags:(these help you listing to rand better on fb markeplace searches, so add as many keywords you would like to be found on- after each keyword add three dots(...) to separate
    3. You will need a folder(parent products folder-containing 1 or more folders conatining the product's images and productdetails.txt(the file, I mentioned above(the product description file)         so the parent product folder will have all the folders(each folder representing the product to be posted and the (Listing Type file the listingtypefile.txt) 

   4.Now after you clone this repository- open in a text editor and create a new file (.env) file then inside it add/write (root="add the path to the parent product folder(which should contain         all folders representing each product and 1 listingtypefile.txt")
   5. Also on the .env file add username: "your FB username" and password: "Your FB password"
   6. And that's it,  then  go to your terminal  install all the dependencies and just type node app.js to run the application and then Boom it should open a new Browser and go to Facebook, then you can enter you username and password and the from their it takes over the Automatic posting to Facebook Marketplace;


In case of any difficulty, question, suggestion,complain or appreciation, I would be glad to hear from your experience using the Fbyebot Facebook Automation Software

My email: yegonk247@gmail.com
my Whatsapp: +254706727834
other Email: meshcode75@gmail.com

# fbyebot_multiprofile
