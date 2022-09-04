const params = new URL("https://example.com?code=GreenMonkey").searchParams; 
const code = params.get("title"); 
let new_text = null; 
switch(code) { case 'GreenMonkey': 
new_text = 'Hello World';
break; 
case 'PinkPanda': 
new_text = 'Goodbye world'; 
break; 
case 'BlueCat': 
new_text = 'Aloha world'; 
break; 
default: new_text = '';
} 
document.querySelector(".title").textContent = new_text;
