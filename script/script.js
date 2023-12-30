const navbarE1 = document.querySelector(".navbar");

const topContainerE1 = document.querySelector(".top-container")

const bottomContainerE1 = document.querySelector(".bottom-container")

console.log("navbar height=="+navbarE1.offsetHeight);

console.log("topContainerE1.offsetTop=="+topContainerE1.offsetTop)

console.log("bottomContainerE1.offsetTop=="+bottomContainerE1.offsetTop)

window.addEventListener("scroll", () => {

    console.log("window.scrollY=="+window.scrollY)
    console.log("scrollHeight=="+ (bottomContainerE1.offsetTop - navbarE1.offsetHeight - 40) )

    if (window.scrollY >
        bottomContainerE1.offsetTop - navbarE1.offsetHeight - 40) 
        {
            console.log("Yesssss")
            navbarE1.classList.add("active")
        } else {
            console.log("Noooooo")
            navbarE1.classList.remove("active")
    }

}
)


document.querySelector('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
        
    });
});