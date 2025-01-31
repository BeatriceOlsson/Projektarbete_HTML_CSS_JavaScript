function dropDownFunction() { //Dropdown function i menyn
    if(menyDropDown.style.display === "block"){     //Kollar status kopplat till stilen om det är licla med block
        menyDropDown.style.display="none";
    } else {
        menyDropDown.style.display="block";
    }
};
const menyDropDown=document.getElementsByClassName("drop-down")[0];    //hemtar status av drop down. [0] behövs för att hämta datta

function readText() { //Read more på index
    const textContainer=document.getElementById("text");
    if(textContainer.classList.contains("open")){   //Kollar statusen på classen kopplad till id="text"
        textContainer.classList.remove("open");
        document.querySelector(".read-more").innerText = "Läs Mer"; //Stänger samt ändrar text i knapp kopplad till class
    } else {
        textContainer.classList.add("open");//Upnar drop down 
        document.querySelector(".read-more").innerText = "Läs Mindre";
    }
};

//Bute av bild på book_page
const imgBook = document.getElementById("bookImage");

const images = [
    "Bilder/36544276.jpg",
    "Bilder/7963.jpg"
];
let imageShowing=0;

imgBook?.addEventListener("click", () => {
    imageShowing = (imageShowing +1) % images.length; //Adderar och delar suman för att se om suman är licka med antal bilder
    imgBook.src = images[imageShowing]; //Byter till den bilden som motsvara plaseringen i array
});


const userSumitButtom=document.getElementById("about_me_form");
userSumitButtom?.addEventListener('submit', (event) =>{
    event.preventDefault();
    alert('Tack för ditt medelande');
});