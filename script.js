var arr = [
    { name: "Rose flower", image: "https://images.unsplash.com/photo-1530209925954-8aecf4eb1e43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "England", image: "https://images.unsplash.com/photo-1721212771618-64c3a8acb5c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Chaîne des Aravis, La Clusaz, France", image: "https://images.unsplash.com/photo-1721587352217-ecc89e9a0d81?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Wallpaper", image: "https://plus.unsplash.com/premium_photo-1677170014257-16e491ea6516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" },
    { name: "Montreal, QC, Canada", image: "https://plus.unsplash.com/premium_photo-1721142535501-c71b76f6ed7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "SONY", image: "https://images.unsplash.com/photo-1720048171098-dba33b2c4806?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Car Wallpapers", image: "https://images.unsplash.com/photo-1721355623035-f2584b8efd79?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Moon Cover Images", image: "https://images.unsplash.com/photo-1721296375090-f8cb95f5aeac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Images of flowers", image: "https://images.unsplash.com/photo-1508609449016-35a35cea5173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwZmxvd2VyfGVufDB8fDB8fHww" },
    { name: "Unsplash Images", image: "https://images.unsplash.com/photo-1721355623754-58380b4ab4d6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Cover Images", image: "https://images.unsplash.com/photo-1721398235746-9b016f1e0108?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "bold", image: "https://images.unsplash.com/photo-1715464502547-4c5e6880ab6e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "bold", image: "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "something", image: "https://images.unsplash.com/photo-1721419336937-86dc7d479f2c?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

function addingImages() {
    var clutter = "";
    arr.forEach(function(immu) {
        clutter += `<div class="box">
            <img class="cursor-pointer" src="${immu.image}" alt="${immu.name}">
            <div class="caption">Lorem ipsum</div>
        </div>`;
    });

    document.querySelector(".container").innerHTML = clutter;
    document.querySelector(".container").style.padding = "40px";
}

function addingSearchFunctionality() {
    var select = document.querySelector("#searchinput");

    select.addEventListener("focus", function() {
        document.querySelector(".overlay").style.display = "block";
    });

    select.addEventListener("blur", function() {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".searchdata").style.display = "none";
    });

    select.addEventListener("input", function() {
        const inputValue = select.value.toLowerCase();
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(inputValue));
        var clutter = "";
        filteredArray.forEach(function(obj) {
            clutter += `<div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
            </div>`;
        });
        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    });


    
}

addingImages();
addingSearchFunctionality();
