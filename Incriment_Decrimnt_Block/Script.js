let i = document.querySelector("#inc");
let d = document.querySelector('#dec');
let count = 0;
// let f_size = ["20px", "30px", '40px', '50px', ]
let f_color = ["red", 'yellow', 'pink', 'green', 'blue']
let n = 0;

i.addEventListener('click', function () {
    document.querySelector("#num").innerHTML = ++count;

    if (count % 10 == 0) {
        document.querySelector("#num").style.fontSize = `${count}px`;
        document.querySelector("#num").style.fontSize = f_color[n];
        n++;
    }

})

d.addEventListener('click', function () {
    document.querySelector("#num").innerText = --count;
    if (count < 10) {
        if (count % 10 == 0) {
            document.querySelector("#num").style.fontSize = f_size[n];
            document.querySelector("#num").style.fontSize = f_color[n];
            n--;
        }


    }

})
// console.log(i)