let trueGameOver = Object.assign(Runner.instance_.gameOver, {});

document.addEventListener("keydown", (ev) => {

    switch (ev.key) {

        case "ArrowLeft":

            Runner.instance_.currentSpeed -= 2;

            break;

        case "ArrowRight":

            Runner.instance_.currentSpeed += 2;

            break;

        case "p":

            alert("Game paused, click enter to resume");

            break;

        case "g":

            if (Runner.instance_.gameOver != trueGameOver) {

                Runner.instance_.gameOver = trueGameOver;

                document.title = 'dino (god mod disabled)';

            } else {

                Runner.instance_.gameOver = () => {};

                document.title = 'dino (god mod enabled)';

            }

            break;

        default:

            break;

    }

})