const resimler = document.querySelectorAll("img");
const cikResim = document.querySelectorAll(".genel");

resimler.forEach((item)=>{
    item.addEventListener("click", function(){
        if(item.classList.contains("active")){
            item.classList.remove("active");
        }
        else{
            resimSil();
            item.classList.add("active");
        }
    })
})

const resimSil = function(){
    resimler.forEach((item)=>{
        item.classList.remove("active");
    })
}
