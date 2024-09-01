// section reveal
window.addEventListener("scroll", () => {
    let vertReveal = [...document.querySelectorAll(".vert-reveal")];
    vertReveal.forEach((e) => {
        if (e.getBoundingClientRect().top <= window.innerHeight - 100) {
            e.classList.add("reveal-vert");
        } else {
            e.classList.remove("reveal-vert");
        }
    });

    let hrzReveal = [...document.querySelectorAll(".hrz-reveal")];
    hrzReveal.forEach((e) => {
        if (e.getBoundingClientRect().top <= window.innerHeight - 100) {
            e.classList.add("reveal-hrz");
        } else {
            e.classList.remove("reveal-hrz");
        }
    });
    
    let hrzOppReveal = [...document.querySelectorAll(".hrz-opp-reveal")];
    hrzOppReveal.forEach((e) => {
        if (e.getBoundingClientRect().top <= window.innerHeight - 100) {
            e.classList.add("reveal-hrz-opp");
        } else {
            e.classList.remove("reveal-hrz-opp");
        }
    });
    
    
    let scaleReveal = [...document.querySelectorAll(".scale-reveal")];
    scaleReveal.forEach((e) => {
        if (e.getBoundingClientRect().top <= window.innerHeight - 100) {
            e.classList.add("reveal-scale");
        } else {
            e.classList.remove("reveal-scale");
        }
    });
    
    let rotateReveal = [...document.querySelectorAll(".rotate-reveal")];
    rotateReveal.forEach((e) => {
        if (e.getBoundingClientRect().top <= window.innerHeight - 100) {
            e.classList.add("reveal-rotate");
        } else {
            e.classList.remove("reveal-rotate");
        }
    });
    
    let rotateOppReveal = [...document.querySelectorAll(".rotate-opp-reveal")];
    rotateOppReveal.forEach((e) => {
        if (e.getBoundingClientRect().top <= window.innerHeight - 100) {
            e.classList.add("reveal-rotate-opp");
        } else {
            e.classList.remove("reveal-rotate-opp");
        }
    });
});

// drop down menu
const lItem = document.querySelector("#li-drop-down-span");
const headerCaret = document.querySelector("#header-fa-caret");
let checkCaret = true;

headerCaret.addEventListener("click", () => {
    if (checkCaret) {
        checkCaret = false;
        lItem.style.visibility = "hidden";
        document.querySelector(".li-drop-down").style.cursor = "default";
        document.querySelector("#drop-down-nav").style.display = "flex";
        document.querySelector("#drop-down-nav").style.opacity = "1";
        document.querySelector("#drop-down-nav").style.top = "0rem";
        document.querySelector("#header-fa-caret").classList.replace("fa-caret-down", "fa-caret-up");
    } else {
        checkCaret = true;
        lItem.style.visibility = "visible";
        document.querySelector(".li-drop-down").style.cursor = "pointer";
        document.querySelector("#drop-down-nav").style.display = "none";
        document.querySelector("#drop-down-nav").style.opacity = "0";
        document.querySelector("#drop-down-nav").style.top = "1.7rem";
        document.querySelector("#header-fa-caret").classList.replace("fa-caret-up", "fa-caret-down");
    }
});

lItem.addEventListener("click", ()=> {
    checkCaret = false;
    lItem.style.visibility = "hidden";
    document.querySelector(".li-drop-down").style.cursor = "default";
    document.querySelector("#drop-down-nav").style.display = "flex";
    document.querySelector("#drop-down-nav").style.opacity = "1";
    document.querySelector("#drop-down-nav").style.top = "0rem";
    document.querySelector("#header-fa-caret").classList.replace("fa-caret-down", "fa-caret-up");
});

document.addEventListener("click", (e) => {
    if(e.target != document.querySelector("#drop-down-nav") && e.target != lItem && e.target != headerCaret){
        checkCaret = true;
        lItem.style.visibility = "visible";
        document.querySelector(".li-drop-down").style.cursor = "pointer";
        document.querySelector("#drop-down-nav").style.display = "none";
        document.querySelector("#drop-down-nav").style.opacity = "0";
        document.querySelector("#drop-down-nav").style.top = "1.7rem";
        document.querySelector("#header-fa-caret").classList.replace("fa-caret-up", "fa-caret-down");
    }
});

// menu toggle
if (window.innerWidth <= 800) {
    let toggle = true;

    document.querySelector(".h-bottom-nbar").addEventListener("click", () => {
        if (toggle == true) {
            toggle = false;
            
            document.querySelector(".h-bottom-nav").classList.add("h-bottom-nav-toggle");
            document.querySelector(".neutral-nbar").style.display = "none";
            document.querySelector(".bottom-nbar").classList.add("h-menu-nbar-toggle");
            document.querySelector(".top-nbar").classList.add("h-menu-nbar-toggle");
            document.querySelector(".bottom-nbar").style.transform = "rotate(45deg)";
            document.querySelector(".top-nbar").style.transform = "rotate(-45deg)";
            document.querySelector(".top-nbar").style.top = "0.6rem";
        } else if (toggle == false) {
            toggle = true;
            
            document.querySelector(".h-bottom-nav").classList.remove("h-bottom-nav-toggle");
            document.querySelector(".neutral-nbar").style.display = "block";
            document.querySelector(".bottom-nbar").classList.remove("h-menu-nbar-toggle");
            document.querySelector(".top-nbar").classList.remove("h-menu-nbar-toggle");
            document.querySelector(".bottom-nbar").style.transform = "rotate(0deg)";
            document.querySelector(".top-nbar").style.transform = "rotate(0deg)";
            document.querySelector(".top-nbar").style.top = "0rem";
        }
    })
};

// header background change

window.addEventListener("scroll", () => {
    let header = document.querySelector(".header").getBoundingClientRect().bottom;
    let romESc = document.querySelector(".rom-esc").getBoundingClientRect().top;
   if (header >= (romESc - 1/2*window.innerHeight)) {
    document.querySelector(".header").style.background = "rgb(255,255,255)";
    document.querySelector(".header").style.boxShadow = "1px 1px 3px black";
   } else {
    document.querySelector(".header").style.background = "rgba(255,255,255, 0.2)";
    document.querySelector(".header").style.boxShadow = "0px 0px 0px transparent";
   }
});

//newsletter subscription
function subscribe() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "regnantugboga@gmail.com",
        Password: "2AB9795659A5CB93CBAE3CE34C2A53152B1A",
        To: 'regnanttycoon@gmail.com',
        From: "regnantugboga@gmail.com",
        Subject: "S-Florida Charters Newsletter Subscription",
        Body: "Someone has just subscribed to S-Florida Charters newsletter" + "<br>" + "<br>"
            + "<br> EMAIL: " + " " + document.querySelector("#subscription-email").value + "<br>" + "<br>" + "<br>"
    }).then(() => {
        window.location.reload(true);
    })
}

// footer drop down link
const footerCaret = document.querySelector("#footer-fa-caret");
let footerCaretCheck = true;

footerCaret.addEventListener("click", () => {
    if (footerCaretCheck) {
        footerCaretCheck = false;
        document.querySelector(".li-drop-down-footer-div").style.display = "flex";
        document.querySelector("#footer-fa-caret").classList.replace("fa-caret-down", "fa-caret-up");
    } else {
        footerCaretCheck = true;
        document.querySelector(".li-drop-down-footer-div").style.display = "none";
        document.querySelector("#footer-fa-caret").classList.replace("fa-caret-up", "fa-caret-down");
    }
});

document.querySelector(".span-drop-down-footer").addEventListener("click", () => {
    footerCaretCheck = false;
    document.querySelector(".li-drop-down-footer-div").style.display = "flex";
    document.querySelector("#footer-fa-caret").classList.replace("fa-caret-down", "fa-caret-up");
});

document.addEventListener("click", (e) => {
    if (e.target != document.querySelector(".li-drop-down-footer-div") && e.target != document.querySelector(".span-drop-down-footer") && e.target != footerCaret) {
        footerCaretCheck = true;
        document.querySelector(".li-drop-down-footer-div").style.display = "none";
        document.querySelector("#footer-fa-caret").classList.replace("fa-caret-up", "fa-caret-down");
    }
});