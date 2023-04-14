const sendForm = () => {

    function valid({ inputType, regex, name = false, phone = false, time = false }) {
        inputType.addEventListener("input", () => {
            let newValue = inputType.value.replace(regex, "");
            if (name == true) {
                newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
            }
            if (phone == true) {
                newValue = newValue.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
            }

            if (time == true) {
                newValue = newValue.replace(/(\d{2})(\d{2})/, "$1 $2")
            }
            inputType.value = newValue;
        });
    }


    valid({
        inputType: document.getElementById("name"),
        regex: /[^а-яА-Я]/g,
        name: true,
        phone: false,
        time: false
    })

    valid({
        inputType: document.getElementById("phone"),
        regex: /[^0-9]/g,
        name: false,
        phone: true,
        time: false
    })

    valid({
        inputType: document.getElementById("guests"),
        regex: /[^0-9]/g,
        name: false,
        phone: false,
        time: false
    })

    valid({
        inputType: document.getElementById("time"),
        regex: /[^0-9]/g,
        name: false,
        phone: false,
        time: true
    })

    document.querySelector(".").addEventListener("click", (e) => {
        e.preventDefault()
    })
}

export default sendForm