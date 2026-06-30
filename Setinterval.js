let imge=document.querySelectorAll(".imge");

imge.forEach(e => {
    e.style.display="none";
});
imge[0].style.display="block";
let curr=0;
setInterval(()=>{
    imge[curr].style.display="none";
    curr++;
    if(curr===imge.length){
        curr=0;
    }

    imge[curr].style.display="block";
    
},1000)