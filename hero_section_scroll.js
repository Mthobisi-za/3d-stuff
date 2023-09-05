const scrollPercent = () => {
    var value_devided = 200 / 3;
    // console.log(document.querySelector('.scroll_parent').clientHeight)
    const bodyST = document.querySelector('.scroll_parent').scrollTop;
    const docST = document.querySelector('.scroll_parent').scrollTop;
    const docSH = document.querySelector('.scroll_parent').scrollHeight;
    const docCH = document.querySelector('.scroll_parent').clientHeight;;
    var currentScrollLocation = (docST + bodyST) / (docSH - docCH) * 100;
    // console.log((docST + bodyST) / (docSH - docCH) * 100);

    if (value_devided >= currentScrollLocation) {
        // console.log('first screen');
        animate(1)
        localStorage.setItem('screen', 1);
    } else if ((value_devided + value_devided) >= value_devided && (value_devided * 2) >= currentScrollLocation) {
        // console.log('second screen');
        localStorage.setItem('screen', 2);
        animate(2)
    } else if ((value_devided * 3) >= value_devided && (value_devided * 3) >= currentScrollLocation) {
        // console.log('third screen');
        localStorage.setItem('screen', 3);
        animate(3)
    } else if ((value_devided * 4) >= value_devided && (value_devided * 4) >= currentScrollLocation) {
        // console.log('fourth screen');
        localStorage.setItem('screen', 4);
        animate(4);
    }

    return (docST + bodyST) / (docSH - docCH) * 100
}


function animate(screen) {
    // anime({
    //     targets: '.pages',
    //     width: 0,
    //     opacity: 0
    // });
    if (screen == 1) {
        // anime({
        //     targets: '.content_sliding_section',
        //     translateX: 0
        // });
        // animateObjects(1);
        document.querySelector('.content_sliding_section').scrollLeft = 0
    } else if (screen == 2) {
        var w = (document.querySelector('.first_section').offsetWidth)
            // console.log(w);
        document.querySelector('.content_sliding_section').scrollLeft = w
            // anime({
            //     targets: '.content_sliding_section',
            //     translateX: -100
            // });
    } else if (screen == 3) {
        var w = (document.querySelector('.first_section').offsetWidth)
        var w_2 = (document.querySelector('.second_section').offsetWidth)
            // console.log(w_2);
        document.querySelector('.content_sliding_section').scrollLeft = w_2 + w;
    }
}