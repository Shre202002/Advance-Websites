let string= "";
// let p =Array.from(string);
let input_number = document.querySelectorAll(".numeric")
// console.log(Array.from(input_number));
Array.from(input_number).forEach((input_value) => {
    input_value.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('#data_input').value = string
        }
        else if (e.target.innerHTML == "Ac") {
            string = " "
            document.querySelector('#data_input').value = string
        }
        else if (string == 'Del'){ 
            string = string.substring(length,);
            document.querySelector('#data_input').value = string

        }
        else {
            string = string + e.target.innerHTML
            //  console.log(string);
            document.querySelector('#data_input').value = string;
        }

    })
})
// console.log(p);