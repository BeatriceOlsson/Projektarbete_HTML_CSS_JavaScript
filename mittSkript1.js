function dropDownFunction() {
    const menyDropDown=document.getElementsByClassName("drop-down")[0];
    if(menyDropDown.style.display === "none"){
        menyDropDown.style.display="block";
    } else {
        menyDropDown.style.display="none";
    }
};

function readText() {
    const textContainer=document.getElementById("text");
    if(textContainer.classList.contains("open")){
        textContainer.classList.remove("open");
        document.querySelector(".read-more").innerText = "Läs Mer";
    } else {
        textContainer.classList.add("open");
        document.querySelector(".read-more").innerText = "Läs Mindre";
    }
};