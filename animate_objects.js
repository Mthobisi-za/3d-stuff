function show_hide_values(screen) {
    console.log('clicked');
    location.href = "#";
    document.querySelector('.first_content_column').style.display = 'none';
    document.querySelector('.second_content_column').style.display = 'none';
    document.querySelector('.third_content_columnn').style.display = 'none';
    if (screen == 1) {
        document.querySelector('.apprearing_message').style.display = 'block';
        document.querySelector('.first_content_column').style.display = 'block';
        location.href = "#first_content_column";
    } else if (screen == 2) {
        document.querySelector('.apprearing_message').style.display = 'block';
        document.querySelector('.second_content_column').style.display = 'block';
        location.href = "#second_content_column";
    } else {
        document.querySelector('.apprearing_message').style.display = 'block';
        document.querySelector('.third_content_columnn').style.display = 'block';
        location.href = "#third_content_columnn";
    }
}