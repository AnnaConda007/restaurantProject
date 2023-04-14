const sendForm = () => {

    function valid(inputType, regex, upper=false, time="false") {
        inputType.addEventListener("input", () => {
            let newValue = inputType.value.replace(regex, "");
           if(upper==true) {
            newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);}

            if(time==true){
                newValue = newValue.slice(0,2) + " " + newValue.slice(2);
            }


            inputType.value = newValue;
        });
    }

valid(document.getElementById("name"),/[^а-яА-Я]/g, true)
valid(document.getElementById("phone"),/[^0-9]/g)
valid(document.getElementById("guests"),/[^0-9]/g)
valid(document.getElementById("time"),/[^0-9]/g, false,true)

}

export default sendForm