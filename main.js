const knob = document.querySelector('.knob');
const innerCircles = document.querySelectorAll('.inner-circle');
const slider = document.querySelector('.slider');

function calculateDegree(e) {
    const x1 = window.innerWidth / 2;
    const y1 = window.innerHeight / 2;
    const x2 = e.clientX;
    const y2 = e.clientY;

    const deltaX = x1 - x2;
    const deltaY = y1 - y2;

    const rad = Math.atan2(deltaY, deltaX);

    let deg = rad * (180 / Math.PI);

    if (deg > -130 && deg < -70) {
        deg = -130;
    } else if (deg > -70 && deg < 0) {
        deg = 0
    }

    return deg;

}

knob.addEventListener("mousedown", function () {
    knob.addEventListener("mousemove", rotate);
    function rotate(e) {
        const result = Math.floor(calculateDegree(e));
        console.log(result)
        knob.style.transform = `rotate(${result}deg)`;

        const angleRange = 240 / innerCircles.length;

        innerCircles.forEach((innerCircle, index) => {
            console.log('indice', index)
            const minAngle = -45 + index * angleRange;
            const maxAngle = minAngle + angleRange;

            if (result >= minAngle && result < maxAngle) {
                innerCircle.style.backgroundColor = "green";
            } else if (result >= -180 && result <= -130) {
                innerCircle.style.backgroundColor = "#da4375"
            }

            else {
                innerCircle.style.backgroundColor = ""; // Restaurar el color por defecto
            }
        });

    }
    knob.addEventListener("mouseup", function () {
        knob.removeEventListener("mousemove", rotate);
    })
})




