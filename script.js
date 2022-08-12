somar(10)
function somar(n){
    let md3 = 0;
    let md5 = 0;
     
      for(i=0;i<=n;i++){
        if(i % 3 === 0)
            md3 += i;
          if(i % 5 === 0)
            md5 += i  
               
      }
      console.log(md3 + md5)
      
}
