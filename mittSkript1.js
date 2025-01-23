function dropDownFunction() {
    const menyDropDown=document.getElementsByClassName("drop-down")[0];
    console.log(menyDropDown.style);
    if(menyDropDown.style.display === "block"){
        menyDropDown.style.display="none";
    } else {
        menyDropDown.style.display="block";
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

