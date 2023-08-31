(function() {
    var overlay = document.querySelector('.overlay'),
        leftContent = document.querySelector('.left-content'),
        rightContent = document.querySelector('.right-content'),
        heroImg = document.querySelector('.hero-img');

    //overlay layer animation
    var firstAnim = anime.timeline({
        targets: overlay,
        easing: 'easeInOutExpo',
        duration: 1000,
        autoplay: true,
        loop: false
    });

    firstAnim
        .add({
            width: '100%',
        })
        .add({
            opacity: 0,
            easing: 'easeOutSine',
            delay: 200
        });

    //right content animation
    var contentRight = anime({
        targets: rightContent,
        left: '100%',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 2000
    });


    var rightImgAnim = anime({
        targets: heroImg,
        left: '+=150',
        easing: 'easeInQuad',
        duration: 450
    });




})();