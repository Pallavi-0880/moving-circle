let movingCircle = document.querySelector(".circle")
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "a" || e.key === "A") {
        let currleft;
        if (!movingCircle.style.left) {
            currleft = 0
        }
        else {
            currleft = parseInt(movingCircle.style.left)
        }
        let newleft = currleft - 20;
        movingCircle.style.left = newleft + "px";
    }

    if (e.key === "d" || e.key === "D") {
        let currleft;
        if (!movingCircle.style.left) {
            currleft = 0
        }
        else {
            currleft = parseInt(movingCircle.style.left)
        }
        let newleft = currleft + 20;
        movingCircle.style.left = newleft + "px";
    }


    if (e.key === "w" || e.key === "W") {
        let currTop;
        if (!movingCircle.style.top) {
            currTop = 0
        }
        else {
            currTop = parseInt(movingCircle.style.top)
        }
        let newleft = currTop - 20;
        movingCircle.style.top = newleft + "px";
    }

    if (e.key === "s" || e.key === "S") {
        let currTop;
        if (!movingCircle.style.top) {
            currTop = 0
        }
        else {
            currTop = parseInt(movingCircle.style.top)
        }
        let newleft = currTop + 20;
        movingCircle.style.top = newleft + "px";
    }


})








