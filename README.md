# cpd-log-simple-express-app
 
CPD Log
I built this app to help myself (or other leaders) track their continuous professional development.  Previous logs I have maintained were fully manual in gsheets or markdown - I wanted something database related, powerful but simple in presentation that I could adapt for use.

Link to project: https://twm-cpd-log.thewoodenman.repl.co
![image](https://user-images.githubusercontent.com/85075266/190810840-640e46d1-4a72-4f7c-bc36-9d1f551d424c.png)


How It's Made:
Tech used: HTML, CSS, JavaScript, Bootstrap, EJS, node.js, express, mongoDB

I built this as a simple CRUD app that grabs your data from a form sent to the back-end then uploads it to mongodb.  I used a combination of EJS and Bootstrap for the front-end which worked extremely well, bootstrap is lightweight and totally compatible, it was possible to make a simple, clean UI quickly and effectively.  

Optimizations
(optional)

After writing the simple app and getting it working, I realised that I could make it better by installing passport.js for authentication and researched google oauth functionality - that required a named domain which is something I did look into. 

I started out by having a verbose and unwieldy entry-log format, but after researching more about bootstrap - I realised I could make an accordion/collapsible UI that hides the details of logs.  This allows the user to browse headings by date/title and only expand the ones they wanted to read.

Lessons Learned:
Bootstrap was a really nice lightweight framework to use, but there is a learning curve.  Taking it from "working" to "ok" and "ok" to good was just a question of how much time I wanted to spend going over the documentation.  That's all good and I could probably spend a bit more time making it better - but getting authenticaiton set up was more important. - I will go back and make it look nicer when I get more time. Generally I prioritise functionality over form.

Examples:
Take a look at these couple examples that I have in my own portfolio:

Tab-Safe: 

RESTful API: 
