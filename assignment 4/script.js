if(!localStorage.getItem('counter')){
    localStorage.setItem('counter','1');
  }
    sessionStorage.setItem('counter','1');

    const localCounter= document.getElementById("localCounter");  
    localCounter.textContent=localStorage.getItem('counter');

    const sessionCounter= document.getElementById("sessionCounter");  
    sessionCounter.textContent=sessionStorage.getItem('counter');

    const button1=document.getElementById("localButton");
    button1.onclick= function(){
      const count=parseInt(localStorage.getItem('counter'))+1;
      localStorage.setItem('counter',count.toString());
      localCounter.textContent=localStorage.getItem('counter');
    }

    const button2=document.getElementById("sessionButton");
    button2.onclick= function(){
      const count=parseInt(sessionStorage.getItem('counter'))+1;
      sessionStorage.setItem('counter',count.toString());
      sessionCounter.textContent=sessionStorage.getItem('counter');
    }