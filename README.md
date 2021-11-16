# Setting up Content Previews

This is a demo app for the [**Content Previews**](https://training.contentful.com/student/path/882023-setting-up-content-previews) course on our Learning Center.




# Requirements

 - Node.js
 - Contentful API keys



# Step 1

Create an empty space in Contentful and note the API keys (delivery, preview and management).
From the Contentful web app go to  SPACE SETTINGS --> API keys....


# Step 2
After downloading this repo, open the project's location on your computer and run "npm install" from your terminal window to install the dependencies.

# Step 3
After installing the dependencies run the "npm run setup" command to configure the app.
type in the keys at the prompt. 


**![](https://lh4.googleusercontent.com/gV77Phr6-Pg9z8VyKu4nvkN4Kq4r9BLLFUXfiFP4cBHyMB5mwCm0SzI9zQtfbygAAQMWt749G8XrFETx8Qs6UaxqkWnXtzH-lqvjCZv2vrT-0MmyXe3_MEPrWF5aSxguOposws2y=s0)**


# Step 4
Run the app with "npm run dev".

# Step 5
Open the link **[http://localhost:9009/](http://localhost:9009/)** on your browser.

# Step 6
Setup preview on the Contentful web app, your preview **URL** should be a combination of your app's **URL** and your preview secret (from step **3**) for example: http://localhost:9009/api/preview?secret=testing&slug={entry.fields.slug}

Go to the Contentful Web app --> SPACE SETTINGS --> Content preview.

Setup preview for the Post content model and use a url like the below;

[http://localhost:9009/api/preview?secret=](http://localhost:9009/api/preview?secret=your)your-preview-secret&slug={entry.fields.slug}

**![](https://lh5.googleusercontent.com/pteeUdPY97uJGVZvIPbvWGnC48YZvb0CfE3g0EI4mAsQ4_trTLuqpQWA86yLGnDym9wnp526UT77fFu6w-SfJYA2SHto_umHh53M00BDI2eMk_j4c9NMc8hWjY2eJjxQfnYHJHRY=s0)**



