const btn = document.getElementById('btn');
const name = document.getElementById('name');
const rasm = document.getElementById('rasm');
const desc = document.getElementById('description');
const cards = document.getElementById('cards_one')

function validate() {
    if (!name.value) {
        name.focus();
        name.style.borderColor = "red";
        return false;
    } else {
        name.style.borderColor = "light-gray";
    }

    if (!name.value.trim()) {
        name.value = "";
        alert("Probellardan iborat bo'lishi mumkin emas!!");
        name.focus();
        name.style.borderColor = "red";
        return false;
    } else {
        name.style.borderColor = "light-gray";
    }
    if (name.value.length <= 4) {
        alert("Ishoralar soni 4 tadan kam bo'lishi mumkin emas!!!");
        name.value = "";
        name.focus();
        name.style.borderColor = "red";
        return false;
    } else {
        name.style.borderColor = "light-gray";
    }

    if (!desc.value) {
        desc.focus();
        desc.style.borderColor = "red";
        return false;
    } else {
        desc.style.borderColor = "yellow";
    }
    if (!desc.value.trim()) {
        desc.value = "";
        alert("Probellardan iborat bo'lishi mumkin emas!!");
        desc.focus();
        desc.style.borderColor = "red";
        return false;
    } else {
        desc.style.borderColor = "light-gray";
    }
    if (desc.value.length <= 4 || desc.value.length >= 50) {
        alert("Ishoralar soni 4 tadan kam bo'lishi  yoki 50 tadan ko'p mumkin emas!!!");
        desc.value = "";
        desc.focus();
        desc.style.borderColor = "red";
        return false;
    } else {
        desc.style.borderColor = "light-gray";
    }

    if (!rasm.value) {
        rasm.focus();
        rasm.style.borderColor = "red";
        return false;
    } else {
        rasm.style.borderColor = "Green";
    }
    if (!rasm.value.trim()) {
        rasm.value = "";
        alert("Probellardan iborat bo'lishi mumkin emas!!");
        rasm.focus();
        rasm.style.borderColor = "red";
        return false;
    } else {
        rasm.style.borderColor = "light-gray";
    }
    if (rasm.value.length <= 4) {
        alert("Ishoralar soni 4 tadan kam bo'lishi mumkin emas!!!");
        rasm.value = "";
        rasm.focus();
        rasm.style.borderColor = "red";
        return false;
    } else {
        rasm.style.borderColor = "light-gray";
    }

    if (rasm.value.slice(0, 8) !== "https://" && rasm.value.length <= 15) {
        alert("Siz notog'ri link yubordingiz iltimos qaytadan urinib ko'ring...");
        rasm.value = "";
        rasm.focus();
        return false
    }

    return true;
}


function createElements(data) {
    return `
    <div  class="card_one" style="width: 18rem;">
    <img id="cardes" src="${data.img}" width="250px" height="200px class="card-img-top">
    <div class="card-body">
      <h3 class="card-title">${data.name}</h3>
      <p class="card-text">${data.desc}</p>
    </div>
  </div>
    `
}

function clear() {
    name.value = "";
    desc.value = "";
    rasm.value = "";
}

document.addEventListener('DOMContentLoaded', function () {
    let data = []
    if (localStorage.getItem("elements")) {
        data = JSON.parse(localStorage.getItem('elements'))
    }
    data.forEach(element => {
        let card = createElements(element);
        cards.innerHTML += card
    });


})


btn && btn.addEventListener("click", function () {
    if (validate()) {
        const element = {
            name: name.value,
            desc: desc.value,
            img: rasm.value
        }
        let data = [];
        if (localStorage.getItem('elements')) {
            data = JSON.parse(localStorage.getItem('elements'))
        }
        data.push(element)
        localStorage.setItem('elements', JSON.stringify(data))

        let card = createElements(element)
        cards.innerHTML += card
        clear();
    };
});