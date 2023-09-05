var animation_state = true;

function addClass(clas_s, new_Class) {
    document.querySelector('.' + clas_s).classList.add(new_Class);
}

async function animateCube() {
    let first = async() => {
        anime({
            targets: '.achor_first_cube',
            translateY: -270,
            opacity: 0,
            delay: 100
        });
        $('.model_first')[0].style.zIndex = 11
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
        $(".first_content_column").toggle("slow", function() {
            // Animation complete.
            $('.first_content_column')[0].style.display = 'flex'
        });

        // $(".apprearing_message")[0].style.display = 'flex';
        //$('.first_content_column')[0].style.display = 'flex';
        $('.apprearing_message')[0].style.position = 'absolute';
        $('.apprearing_message')[0].style.top = '10vh'
        $('.apprearing_message')[0].style.background = '#fff';
        //first_content_column
    }
    let third = async() => {
        var rect = document.querySelector('.cube_object_placeholder').getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
        // var document_width = document.querySelector('.cube_object_placeholder').clientWidth - 300;
        var content_height = rect.top;
        var content_x = (rect.left) - 300;
        anime({
            targets: '.model_first',
            // backgroundColor: '#FFF',
            easing: 'easeInOutQuad',
            translateX: content_x,
            translateY: -content_height,
            duration: 1500,
            width: 600,
            height: 600,

        })
        document.querySelector('.model_first').setAttribute('camera-controls', '');

    }


    let fourth = async() => {
        // addClass('subtitle', 'animate__zoomIn')
    }

    first().then(() => {
        if (animation_state) {
            animation_state = false;
            second().then(third().then(fourth()));

        }
    })

}


function hideCude() {
    var screen = localStorage.getItem('screen');
    animation_state = true;
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
        $('.first_content_column')[0].style.display = 'none'
        $('.apprearing_message')[0].style.background = 'transparent'
        anime({
            targets: '.achor_first_cube',
            translateY: 0,
            opacity: 1,
            duration: 1500,
            delay: 500
        });
        $('.model_first')[0].style.zIndex = 0
    }
    let third = async() => {
        var rect = document.querySelector('.achor_first_cube').getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
        // var document_width = document.querySelector('.achor_first_cube').clientWidth;
        var content_y = rect.top;
        var content_x = rect.left;
        anime({
                targets: '.model_first',
                // backgroundColor: '#FFF',
                easing: 'easeInOutQuad',
                translateX: content_x,
                translateY: content_y,
                duration: 1500,
                width: 400,
                height: 400,
            })
            // document.querySelector('.model_first').setAttribute('camera-controls', '');
        document.querySelector('.model_first').removeAttribute('camera-controls')

    }
    first().then(third())

}