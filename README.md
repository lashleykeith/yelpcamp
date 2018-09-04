# yelpcamp

## Current issues
The issue with this app is that I made the updates in the video https://www.youtube.com/watch?v=RHd4rP9U9SA&t=124s.  I am trying to udate this with the geocoder.

- This app is not loading the images.  To run this app first go into the home folder and type `node app.js`.
- Go to `localhost:4900` in your browser.
- You will see this page click `View All Campgrounds`
![screenshot_1](https://user-images.githubusercontent.com/21030885/45027301-015b6400-b07c-11e8-9fc7-1efaf9d5350b.jpg)
- Click Sign Up and fill in the information and on the admin code section center `secretcode123`.
![screenshot_3](https://user-images.githubusercontent.com/21030885/45027314-0b7d6280-b07c-11e8-8d4c-dca4adfc6e5a.jpg)
- Go to Create New Campground and enter all the information.
![screenshot_4](https://user-images.githubusercontent.com/21030885/45027322-10daad00-b07c-11e8-81ad-b873b401474c.jpg)
## Error
- you will notice that there is an error.  It claims that it is an invalid address.
![screenshot_6](https://user-images.githubusercontent.com/21030885/45027336-16d08e00-b07c-11e8-8eda-4d5f407cce59.jpg)
- There are two places that this error might be in.  One is in `routes/campgrounds.js`  the other is `views\campgrounds\new.ejs`.
