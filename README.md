# dleete.dev

## About
[dleete.dev](https://www.dleete.dev/) is my personal page. The first time I wrote it, I wrote it in ViteJS.

Recently, I wanted to remake the page to pratice with NextJS and app routing down the line, and so I bootstrapped with NextJS and wrote everything in ReactJS and TailwindCSS.

This site serves two purposes:
- A way to conviniently send anyone to my pages without linking each individually
- Practice with everything dev ops related

## Changelog
### 9/12 Rebuilt
So what a process that was...

Tons of things to talk about. I rebuilt all of the components on the ViteJS version of the site, but I wanted to do more. I ended up building a couple extra components, and I wanted to weave in making an API call.

The components came out nice!
- The profile picture now splits with a table that *should* down the line have access to a constantly updating cache for my most recently listened songs
- I also want to see if I could build something that keeps everything in the viewport but still messes with scrolling. Turns out, wheel events were the answer!

I also spent about a day learning how to call to my spotify API, fetch data from a few of the different scopes, and then process the data to send to my mongodb cluster.

However, in hindsight, this was not the move. After discussing with a few friends, I seems to obvious to me now that using my mongodb cluster as a semi-permanent cache doesn't really make sense after I decided to scale back on what I wanted to do with it.

So to summarize a bit:
- Basic website was rebuilt with a few added nicer components
- The website now renders mobile and desktop differently
- I learned how to build custom hooks, created [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes), and called and fetched from an API with an [OAuth protocol](https://developer.spotify.com/documentation/web-api/concepts/authorization).

The Todo List and problems:
- My API calls aren't automated, and currently, I have to boot up my local server, run a script, and go get my auth token, put in my auth token, all to fetch data from one scope.
  - This isn't ideal. :)
- I want to add an infinite spin animation to my profile pic, but I also didn't feel like going through the hassle of adding a state right this minute
- I should add a couple fields to the table generated from Spotify
- Been having trouble calling [multiple scopes](https://developer.spotify.com/documentation/web-api/concepts/scopes) at once (but I suspect it's because I need a token per call or something like that)
- Cache abstraction -> the information on the [MongoDB](https://www.mongodb.com/) cluster shouldn't really be there right now. It should just be a dictionary or I should look into using something like redis.

Some of the silly problems I ran into while I was working through it but managed to figure out:
- Had an ambiguous class error -> was a problem with divs in page.js and how there wasn't a proper parent div
- Tailwindcss wasn't applying to certain components -> I had messed up the way that tailwind recognizes components by adding an extra layer to the directory where components are supposed to be
- Spotify API
  - Couldn't call personal stats -> Needed OAuth
  - Needed to implement OAuth but no idea how -> Like 12 hours, google, blogs, and more.
- Had trouble storing information in MongoDB
  - I had been parsing the json files incorrectly leading to misformatted inputs and returns from all of the different GET and POST requests
- Trouble calling Spotify API -> [Postman](https://www.postman.com/) helped me demystfy what was being sent and what was coming back

All in all, the website looks cleaner imo. At the very least, it renders mobile, so it's absolutely an improvement.

I'll keep working on the site, but I'll have to put this to the side for a bit to focus on other things in life.

Final extra npm package list:
- [tsparticles](https://particles.js.org/)
- [@tsparticles/engine](https://www.npmjs.com/package/@tsparticles/engine)
- [@tsparticles/react](https://github.com/tsparticles/react)
- [nextjs-simple-typewriter](https://github.com/SoloReverse/nextjs-simple-typewriter)
- [axios](https://www.npmjs.com/package/axios)
- [MongoDB](https://www.npmjs.com/package/mongodb)
- [ReactIcons](https://www.npmjs.com/package/react-icons)
### 9/9 Rebuild
The idea of rebuilding my website really sat on my mind, and I have a couple ideas for how I want to build it...better? First things first, we'll return to status quo and just refactor the website with a fresh project.
That means:
- We bootstrapped our project with NextJS
- We grabbed the following packages:
  - [tsparticles](https://particles.js.org/)
  - [@tsparticles/engine](https://www.npmjs.com/package/@tsparticles/engine)
  - [@tsparticles/react](https://github.com/tsparticles/react)
  - [nextjs-simple-typewriter](https://github.com/SoloReverse/nextjs-simple-typewriter)
Also, we're using tailwindcss now.

I also made a little to-do list for myself, but we'll hammer out the todos over the following week without spoiling anything!
### 9/5 Deployment
I wanted to learn how to deploy a website to a custom domain, so I learned how to deploy w/ Vercel...and it wasn't too bad to use! Very happy with the switch.
### 8/26 Resume Update
I updated my resume ever so slightly, and now that I look at the site, I realize that I have a ton of stuff I want to add to this site...

But if I want to do that, I'm probably going to just rebuild the project, so I can build some of these components differently and use tailwindcss.

We put that off until some time in the future when my head isn't already full of other things I want to build xp
### 7/19 v1.1
After many failed attempts, I finally managed to create a custom workflow and deploy the the website on gitpages.

This project probably took me just over a day in overall time from the moment I decided to build this website to first successful deployment.

In that time, I spent the majority of it remembering HTML and CSS syntax, learning about react components, and learning javascript. It likely took me about 18 hours to build the actual site, as what I wanted the site to be and look like changed as I created a number of components and deleted a few more.

The final site looks really basic, and that's how I intend for it to stay for the most part. That said, while I can't seem to put my finger on it quite yet, I feel like I'd like to add something more in place of the button (or add more functionality to it since all it does is hide the biotext and spin).

Overall, given that this was my second website and first attempt with react, I'm content with how it turned out. That said, my code is absolutely a mess, and when I decide to revisit this website, I'll probably refactor my code. More often than not, I'll end up updating my resume a few more times over the next couple of weeks over working on this site though.

On a final note, I wanted to express that for as many mistakes as I made and how messy the code turned out, I really did enjoy building it (so much so that I ruined my sleep schedule over it)! Even if I don't actively work on this website, I have plans to build another for a personal project in the near future.
