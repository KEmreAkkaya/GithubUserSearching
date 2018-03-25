# Github User Searching Site
This project is created to search users on Github.
This project has JavaScript-Ajax/CSS/HTML contents.It hasn't RubyOnRails.
This project has CDN link for JS/JSON/JQuery/Bootstrap/fontawesome.

The goal of the this project is to search username on Github like www.github.com/username. If username exists,we'll go user's page ,if not we'll go error page .

Firstly , I created index.html for homepage.This page has point that user will make searching.So, We can get social media or homepage etc.

Secondly,I created error.html for error message.After I created CSS file for homepage and error page .

Thirdly,I created Redirect() function in JavaScript file for button in index.html .If you press the button,page will redirect user's page on Github or error page.So, add() function in JavaScript file stored your searching user in localStorage.If you want to see searched user,You must enter F12> Application>Storage >Local Storage in Chrome Browser .For IE Edge, You must enter same thing.Other required comments are in JS and HTML pages.

When I tested my all files,I found some error.

Firstly,I am used Github API(api.github.com/users) for searching user.Altough there isn't any user on Github,page alerts that user's page is found. Database of API find user's page but user isn't on Github.

Secondly,I tested for CSRF vulnerabilities on limited time.I think index.html includes this vulnerabilities .After I didn't use cookie,php,aspx etc.So,I didn't use XSS,SQL Injection,LFI/RFI,Command Injection,Path Traversal etc. to test.

That's all!

-------------------------------------------------------------------------------------------------------------

//Açıklama-1:Normalde Same Origin Policy ve Cross-Origin-Resource Sharing(CORS) sebebiyle veri çekmek için api.github.com/users üzerinden Ajax kullanarak yaptım .Yine bu işlemleri cross-domainin HTTP response'sinin 404 veya 200 OK durumuna bakarak yapılabilirdik.  

//Açıklama-2:Veritabanına bağlanmak için Php ,node.js ve Ruby on Rails kullanılabilir.Userları kaydetmek için ayrıca cookie,IndexedSQL,WebSql kullanılabilir.
