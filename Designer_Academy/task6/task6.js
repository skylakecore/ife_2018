let thums = document.getElementById('thumbnail').children;
let show = document.getElementById('show');
for (let i = 0; i < thums.length; i++) {
    thums[i].onclick = function() {
        show.style.backgroundImage = 'url(' + thums[i].firstElementChild.getAttribute('src') + ')';
        switch (i) {
            case 0:
                show.style.animation = 'moveX 0.5s 1 ease-out';
                break;
            case 1:
                show.style.animation = 'moveY 0.5s 1 ease-out';
                break;
            case 2:
                show.style.animation = 'enlarge1 1s 1 ease-in';
                break;
            case 3:
                show.style.animation = 'enlarge2 1s 1 ease-out';
                break;
            case 4:
                show.style.animation = 'rotateAndEnlarge 0.7s ease-in-out';
                break;
        }
    }
}
