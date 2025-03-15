window.addEventListener(
    'load',
    main_function
);

function najal(kuda) {
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

}
 
function main_function() {
    console.log('Страница готова');
    input.addEventListener(
        'click',
        (event) => {
            najal(kuda);
        }
    );
}
