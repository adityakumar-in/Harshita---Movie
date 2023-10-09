// Setting values to CSS variables for doing Animations
function repetition(){
    function first(){
        document.documentElement.style.setProperty("--first", "block");
        document.documentElement.style.setProperty("--second", "none");
        document.documentElement.style.setProperty("--third", "none");
        document.documentElement.style.setProperty("--steps", "15");
        document.documentElement.style.setProperty("--size", "10ch");
    }
    setTimeout(first, 0);

    function second(){
        document.documentElement.style.setProperty("--first", "none");
        document.documentElement.style.setProperty("--second", "block");
        document.documentElement.style.setProperty("--third", "none");
        document.documentElement.style.setProperty("--steps", "27");
        document.documentElement.style.setProperty("--size", "23ch");
    }
    setTimeout(second, 2600);

    function third(){
        document.documentElement.style.setProperty("--first", "none");
        document.documentElement.style.setProperty("--second", "none");
        document.documentElement.style.setProperty("--third", "block");
        document.documentElement.style.setProperty("--steps", "13");
        document.documentElement.style.setProperty("--size", "10ch");
    }
    setTimeout(third, 6000);
}

repetition();
setInterval(repetition, 9000);