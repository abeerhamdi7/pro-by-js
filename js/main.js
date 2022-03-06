   const bin=document.querySelectorAll(".icon-bin");
  // const container=document.querySelector(".container");
   
   const big=document.querySelector(".bigcontainer");
   const task=document.querySelector(".task");
   const upload=document.querySelector(".icon-upload");
   const input=document.querySelector("input");



   
  /* heart.forEach(item=>{
    item.style.display="none";
    
 });*/

 /*task.addEventListener("click",(eo) => {
    
    if(eo.target.className=="icon-bin col"){
        console.log("y");
        //bin.style.display="none";
        bin.forEach(item=>{
            item.style.display="none";
            heart.forEach(item=>{
                item.style.display="inline";
                item.style.color="red";
                
             })
            
         })
        }
            
         });*/

         //when click bin
         task.addEventListener("click",(eo) => {
            if(eo.target.className=="icon-bin col")
            {
                eo.target.parentElement.parentElement.remove();
            }
            else if(eo.target.className=="icon-angry2 col"){
                eo.target.classList.add("dn"); 

                eo.target.parentElement.innerHTML +=`<span class="icon-heart col"></span>`;
                
                }
                else if(eo.target.className=="icon-heart col"){
                eo.target.parentElement.parentElement.querySelector("P").
                    classList.add("mediumline");
              
                    
                    eo.target.classList.add("dn"); 
                    eo.target.parentElement.innerHTML +=`<span class="icon-angry2 col"></span>`;
                    
              
                    
                    
                    
                   }
               else if(eo.target.className=="icon-star col-1"){
                eo.target.classList.add("star");
                task.prepend(eo.target.parentElement.parentElement);
                    
             
                    
            }
           
            
         })
         //when click upload
        upload.addEventListener("click",(eo) => {
            
        task.innerHTML +=`<div class="task1 col-7 border-bottom border-5 rounded mb-5 ">
        <div class="row justify-content-between align-items-center fs-4">
           <span class="icon-star col-1"></span>
           <p class="col-9  fw-bold lang="ar">${input.value}</p>
           <span class="icon-bin col"> </span>
           <span class="icon-angry2 col"></span>
        </div>
       </div>`;
       input.value=" ";
       


            
        })
        



    
    
    
    

    /*bin.forEach(item=>{
    item.addEventListener("click",(eo) => {
       bin.style.display="none";
       heart.style.display="inline";
       heart.style.color="red";
      // heart.classList.toggle("bigcontainer");
  });*/
 


  

     
       
       
       
       
 