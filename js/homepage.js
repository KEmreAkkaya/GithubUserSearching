
function Redirect()
	{
 				var user=document.getElementById("user").value;
		  		var url1="https://api.github.com/users/"+user;
		  		//alert(url1);
                var url2="https://github.com/"+user;
                //alert(url2);
                

                // AJAX  ile Get methoduyla, (api.github.com/users) API'si yardımıyla veri bulma işlemi gerçekleştirdik.
                //Eğer veri bulunduysa bizi github sayfasına yönlendir.Değilse hata sayfasına yönlendir.
				$.ajax({
		        url: url1,
		        type: 'GET',
		        data: "",
		        contentType: "application/json; charset=utf-8",
		        dataType: "json",
		        success: function (data) {
		        	add(user);
		        	alert("Page is found .We'll redirect you ..");
            	    window.location=url2;
        			},
        		error: function(data) {
        			alert("Page NOT found .We'll redirect you ..");
        			window.location="error.html";}
    			});

	}

function add(uname)
{        // Girilen isimleri localstorage'a set ettik ve sakladık .LocalStorage a girmek için F12 > Application >Local Storage > ...
       
       
        if(window.localStorage) //eğer localStorage destekleniyorsa  butona kaç kere tıklandığını say.
        {
	        if (localStorage.clickcount) 
	        {

	        	var count=Number(localStorage.clickcount);
	        	try
	        	{
	        	localStorage.setItem(count, uname); // Localstorage ekledik.Bellek taşması olursa hata mesajı ürettik.

	        	}
	        	catch(err)
	        	{
	        		alert("Set Error");
	        	} 
	            localStorage.clickcount = Number(localStorage.clickcount)+1;   //Sayıya dönüştürme işlemi Number ile yapıldı.

	        } 
	       
	    }
	    else
	    {
        alert("Not Support Your Browser");
    	} 
    	return uname;
}


