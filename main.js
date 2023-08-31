var model = document.querySelector('model-viewer');
var status_new = true;

console.log(model.loaded);



function animateCube(screen) {
    // status_new = !status;
    if (status_new) {
        status_new = false;
        var rect = document.querySelector('.placeholder').getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
        const modelViewer = document.querySelector('model-viewer');
        // modelViewer.play({ repetitions: 1 });
        // modelViewer.setAttribute('autoplay', '')
        var document_width = document.querySelector('.placeholder').clientWidth - 90;
        var content_height = rect.top - 80;


        anime({
            targets: 'model_view',
            // backgroundColor: '#FFF',
            easing: 'easeInOutQuad',
            translateX: -document_width,
            translateY: content_height,
            duration: 1500,
            width: 600,
            height: 600,
        })

        anime({
                targets: '.title',
                // backgroundColor: '#FFF',
                easing: 'easeInOutQuad',
                // duration: 1500,
                opacity: 0,
                width: 0,
                height: 0
            })
            // document.querySelector('.title').style.display = 'none'
        modelViewer.addEventListener('finished', () => {
            console.log('done');
            modelViewer.setAttribute('camera-controls', '');
        });
        setTimeout(() => {
            modelViewer.setAttribute('camera-controls', '');
        }, 1500);
    }

    // $('.bottom_content')[0].style.position = 'absolute';
    // $('.bottom_content')[0].style.top = 0;
    // $('.content')[0].style.display = 'block';

    // $('.bottom_content')[0].animate({ position: 'absolute', top: 0, background: 'red' }, 1500)
    // $('.model_view')[0].animate({ marginTop: 0 }, 1500)
}