let galleryArray = [
    ["Italy", "A boat in a canal of Venice", "./img/Venice.jpg"],
    ["Spain", "A warm beach in Madrid", "./img/Madrid.jpg"],
    ["Greece", "The beautiful coast and characteristic buildings of Santorini", "./img/Santorini.jpg"],
    ["New Zealand", "Where the epic journey of some hobbits was filmed", "./img/NewZealand.jpg"],
    ["Australia", "The city coastline of Sydney", "./img/Sydney.jpg"],
];

// let packContainer = document.getElementById("package-container");

function buildGallery() {
    // let galleryNumber = 0;

    // if (galleryNumber < galleryArray.length) {

    // }

    for (el = 0; el < galleryArray.length; el++) {
        document.write('<div class="gallery-item-container">');
        document.write('<div class="gallery-package-name">' + galleryArray[el][0] + '</div>');
        document.write('<img class="gallery-img" src="' + galleryArray[el][2] + '" alt="' + galleryArray[el][0] + '"></a>');

        document.write('<div><button type="Buy this package"></div>');
        document.write('</div>');
        document.write();
    };
};

// function updateGallery {

// }


buildGallery();