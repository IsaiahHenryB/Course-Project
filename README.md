This is a log of my progress starting from Homework7.
<!-- Homework7 -->
## homework7
I added a readme.md file to my repo as Kiki suggested so I literally had to
```bash
    $ touch
```
up on my terminal navigaion skills. :smirk:

To keep track of each

During HW7 I was able to add some responsive text sizes via the vw(viewport width) unit in css like this:
```css
 /* defining font sizes for phones*/
h1{
    font-size: 4.5vw;
}
h2{
    font-size: 4vw;
}
h3{
    font-size: 3.5vw;
}
p,a,input,textarea{
    font-size: 3vw;
}
```
I also added 

```css
 overflow-x:auto;
```

to one of the containers that contained my table <span style="color: orangered">
but I couldn't get it to work properly. It was probably because of the display: flex; on that element but it would just keep trying to condense instead of flowing into a scroll section.</span>

I was able to successfully add the Bars icon to each page and make them appear at the proper breakpoints.

I was also able to get the footer to look as close as I could get it to the mockups.

Though it took some time and some choice words, I was able to add breakpoints to the Comic Card Page along with every page that contained a form.
##homework7 (session 2)
I removed the background colors form the breakpoints.

I was also able to resolve issue with the horizontal scrolling.

Also fixed some issues with how the footer would show up.

## Homework8
I was able to use JS to make the ul show up for the navbar.

I added an absolute positioning to the hamburger button to prevent it from shifting when clicked.
## Homework9
I was able to add some functionality to the Display more button using JS. unfortunately, I couldn't immediately make use of the event parameter.

I may re-visit or remove the (event) param in the future.

## Homework10

Spent some time reorganizing my file structure and file paths (a lot of time because I didn't have a public folder)

Upon opening up the server I was unable to get any of my links from the public folder to work via localhost

Opening the html files raw is fine, but when I open them in the localhost, none of the files can be located (What i see is ugly straight up html) :/

I'm getting errors in the console that tell me so as well :frowning:

The links in the app.js for sendFile seem to work properly though.

I really hope to get all the file paths working properly but I'm at a total loss for now.

## Homework11

I was able to finally get the pages to render properly. Also I was able to properly add the partials to each page respectively.

There's one thing though, the book page don't work now :confused:

I want to mess around and figure out a way to make it function in an experimental branch.

### HW11exp
This work is all being done in a branch called Hw11exp which is not a legit branch but more of a sandbox.

I was able to experiment with a few concepts to get the index page to populate from an array.

I was also able to get the book pages to work :smiley:

However I was too lazy to populate all of the necessary information to the array to properly display all the information to the placeholder page.
I only included the number, name, author, image, and rating of the 1st 3 books in my book array. :confused: (Right now all of the other info defaults to hunter x hunter info.)

This was just a test, but I am quite satisfied with the result. :smiley:
