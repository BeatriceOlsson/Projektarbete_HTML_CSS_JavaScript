function dropDownFunction() {
    const menyDropDown=document.getElementsByClassName("drop-down")[0];
    if(menyDropDown.style.display === "none"){
        menyDropDown.style.display="block";
    }else{
        menyDropDown.style.display="none";
    }
};