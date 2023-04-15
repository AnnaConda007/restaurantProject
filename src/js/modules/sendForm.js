const sendForm = () => {

    function valid({ inputId, regex, name, phone, time }) {
        inputId.addEventListener("input", () => {
            let newValue = inputId.value.replace(regex, "");
            if (name === true) {
                newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
            }
            if (phone === true) {
                newValue = newValue.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
            }

            if (time === true) {
                newValue = newValue.replace(/(\d{2})(\d{2})/, "$1 $2")
            }
            inputId.value = newValue;
        });
    }

    valid({
        inputId: document.getElementById("name"),
        regex: /[^а-яА-Я]/g,
        name: true,
        phone,
        time
    })

    valid({
        inputId: document.getElementById("phone"),
        regex: /[^0-9]/g,    
        name,
        phone: true,
        time
    })

    valid({
        inputId: document.getElementById("guests"),
        regex: /[^0-9]/g,
        name,
        phone,
        time
    })

    valid({
        inputId: document.getElementById("time"),
        regex: /[^0-9]/g,
        name,
        phone,
        time: true
    })

    document.querySelector(".form__button").addEventListener("submit", (e) => {
      
    })
}

export default sendForm