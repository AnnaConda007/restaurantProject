const sendForm = () => {

    function valid(inputType, regex, name=false, phone=false, time=false) {
        inputType.addEventListener("input", () => {
            let newValue = inputType.value.replace(regex, "");
           if(name==true) {
            newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);}

            if(phone==true){
                newValue = newValue.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
            }
            inputType.value = newValue;
        });
    }

valid(document.getElementById("name"),/[^а-яА-Я]/g, true, false, false)
valid(document.getElementById("phone"),/[^0-9]/g,false,true, false)
valid(document.getElementById("guests"),/[^0-9]/g, false, false, false)
valid(document.getElementById("time"),/[^0-9]/g, false,false,true)

}

export default sendForm