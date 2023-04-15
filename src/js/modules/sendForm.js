const sendForm = () => {

    function valid({ input, regex, name, phone, time }) {
        input.addEventListener("input", () => {
            let newValue = input.value.replace(regex, "");
            if (name == true) {
                newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
            }
            if (phone == true) {
                newValue = newValue.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
            }

            if (time == true) {
                newValue = newValue.replace(/(\d{2})(\d{2})/, "$1 $2")
            }
            input.value = newValue;
        });
    }

    valid({
        input: document.getElementById("name"),
        regex: /[^а-яА-Я]/g,
        name: true,
        phone,
        time
    })

    valid({
        input: document.getElementById("phone"),
        regex: /[^0-9]/g,    
        name,
        phone: true,
        time
    })

    valid({
        input: document.getElementById("guests"),
        regex: /[^0-9]/g,
        name,
        phone,
        time
    })

    valid({
        input: document.getElementById("time"),
        regex: /[^0-9]/g,
        name,
        phone,
        time: true
    })

    document.querySelector(".form").addEventListener("click", (e) => {
        e.preventDefault()
    })
}

export default sendForm