var animation_state_second_screen = true;

function addClass_second_screen(clas_s, new_Class) {
    document.querySelector('.' + clas_s).classList.add(new_Class);
}

async function animateCube_second_screen() {
    let first = async() => {
        anime({
            targets: '.second_title',
            translateY: -270,
            opacity: 0,
            delay: 100
        });
        $('.model_viewer_second')[0].style.zIndex = 11
    }

    let second = async() => {
        // $('.apprearing_message')[0].style.display = 'flex';
        $(".apprearing_message").toggle("slow", function() {
            // Animation complete.
            $(".apprearing_message")[0].style.display = 'flex'
        });
        // // $('.apprearing_message')[0].animate({ position: 'absolute', top: 0, background: 'red' }, 1500);
        // $('.apprearing_message')[0].style.position = 'absolute';
        // $('.apprearing_message')[0].style.top = 0
        // $('.apprearing_message')[0].style.background = '#fff'
        //     // $('.first_content_column')[0].style.display = 'flex'
        $(".second_content_column").toggle("slow", function() {
            // Animation complete.
            $('.second_content_column')[0].style.display = 'flex'
        });

        // $(".apprearing_message")[0].style.display = 'flex';
        //$('.first_content_column')[0].style.display = 'flex';
        $('.apprearing_message')[0].style.position = 'absolute';
        $('.apprearing_message')[0].style.top = '10vh'
        $('.apprearing_message')[0].style.background = '#fff';
        //first_content_column
    }
    let third = async() => {
        var rect = document.querySelector('.cube_object_placeholder_second').getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
        // var document_width = document.querySelector('.cube_object_placeholder').clientWidth - 300;
        var content_height = rect.top - 100;
        var content_x = (rect.left) - 300;
        anime({
            targets: '.model_viewer_second',
            // backgroundColor: '#FFF',
            easing: 'easeInOutQuad',
            translateX: content_x,
            translateY: -content_height,
            duration: 1500,
            width: 600,
            height: 600,

        })
        document.querySelector('.model_viewer_second').setAttribute('camera-controls', '');

    }


    let fourth = async() => {
        addClass_second_screen('subtitle', 'animate__zoomIn')
    }

    first().then(() => {
        if (animation_state_second_screen) {
            animation_state_second_screen = false;
            second().then(third().then(fourth()));

        }
    })

}


function hideCude_second_screen() {

    animation_state_second_screen = true;
    // alert('run')
    let first = async() => {
        // $(".apprearing_message").toggle("slow", function() {
        //     // Animation complete.
        //     // $(".apprearing_message")[0].style.display = 'none'
        // });
        // $('.apprearing_message')[0].style.position = 'absolute';
        // $('.apprearing_message')[0].style.top = 0
        // $('.apprearing_message')[0].style.background = '#fff'
        // $(".first_content_column").toggle("slow", function() {
        //     // Animation complete.
        //     // $('.first_content_column')[0].style.display = 'none'
        // });
        $(".apprearing_message")[0].style.display = 'none'
        $('.second_content_column')[0].style.display = 'none'
        $('.apprearing_message')[0].style.background = 'transparent'
        anime({
            targets: '.second_title',
            translateY: 0,
            opacity: 1,
            duration: 1500,
            delay: 500
        });
        $('.model_viewer_second')[0].style.zIndex = 0
    }
    let third = async() => {
        var screen = localStorage.getItem('screen');
        if (screen === 2) {

        }
        var rect = document.querySelector('.achor_second_cube').getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
        // var document_width = document.querySelector('.achor_first_cube').clientWidth;
        var content_y = rect.top;
        var content_x = rect.left;
        anime({
                targets: '.model_viewer_second',
                // backgroundColor: '#FFF',
                easing: 'easeInOutQuad',
                translateX: content_x,
                translateY: content_y,
                duration: 1500,
                width: 400,
                height: 400,
            })
            // document.querySelector('.model_viewer_second').setAttribute('camera-controls', '');
        document.querySelector('.model_viewer_second').removeAttribute('camera-controls')

    }
    first().then(third())

}