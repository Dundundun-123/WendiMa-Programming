function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

$(document).ready(function () {
    $.ajax({
        url: "cats.json", 
        dataType: "json",
        success: async function (data) {
            let wrapper = $(".wrapper");
            let i = 0;

            while (true) { 
                let theCat = data[i];

                changeBackground(wrapper, theCat); 

                await sleep(3000);

                i = (i + 1) % data.length;
            }
        },
    });
});

function changeBackground(element, cat) {
    element.css("background-image", `url(img/${cat.path})`);

    if (window.innerWidth <= 500) {
        console.log("yep");
        element.css("background-position", cat.position); 
    }

    element.find("#cat-title").text(cat.title); 
    element.find("#cat-description").text(cat.description); 
}
