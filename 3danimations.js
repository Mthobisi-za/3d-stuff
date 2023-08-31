var animation_state = true;

function addClass(clas_s, new_Class) {
    document.querySelector('.' + clas_s).classList.add(new_Class);
}

async function animateCube() {
    let first = async() => {
        anime({
            targets: '.title',
            translateY: -270,
            opacity: 0
        });
    }

    let second = async() => {
        // $('.apprearing_message')[0].style.display = 'flex';
        $(".apprearing_message").toggle("slow", function() {
            // Animation complete.
            $(".apprearing_message")[0].style.display = 'flex'
        });
        // $('.apprearing_message')[0].animate({ position: 'absolute', top: 0, background: 'red' }, 1500);
        $('.apprearing_message')[0].style.position = 'absolute';
        $('.apprearing_message')[0].style.top = 0
        $('.apprearing_message')[0].style.background = '#fff'
            // $('.first_content_column')[0].style.display = 'flex'
        $(".first_content_column").toggle("slow", function() {
            // Animation complete.
            $('.first_content_column')[0].style.display = 'flex'
        });
    }
    let third = async() => {
        var rect = document.querySelector('.cube_object_placeholder').getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
        var document_width = document.querySelector('.cube_object_placeholder').clientWidth - 300;
        var content_height = rect.top - 300;

        anime({
            targets: '.model_viewer',
            // backgroundColor: '#FFF',
            easing: 'easeInOutQuad',
            translateX: document_width,
            translateY: -content_height,
            duration: 1500,
            width: 600,
            height: 600,
        })
        document.querySelector('.model_viewer').setAttribute('camera-controls', '');

    }


    let fourth = async() => {
        addClass('subtitle', 'animate__zoomIn')
    }

    first().then(() => {
            if (animation_state) {
                animation_state = false;
                second().then(third().then(fourth()));

            }
        })
        //cube_object_placeholder
}