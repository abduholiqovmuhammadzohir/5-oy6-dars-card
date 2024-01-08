const btn = document.getElementById('btn');
const name = document.getElementById('name');
const rasm = document.getElementById('rasm');
const desc = document.getElementById('description');
const tbody = document.getElementById('tbody');

function validate() {
    if (!name.value) {
        name.focus();
        name.style.outlineColor = 'red';
        return false;
    } else {
        name.style.outlineColor = 'lightgray';
    }
    if (!rasm.value) {
        rasm.focus();
        rasm.style.outlineColor = 'red';
        return false;
    } else {
        rasm.style.outlineColor = 'lightgray';
    }
    if (!desc.value) {
        desc.focus();
        desc.style.outlineColor = 'red';
        alert("Izoh kiritilmadi")
        return false

    } else {
        desc.style.outlineColor = 'lightgray';
    }

    return true;

}

function clear() {
    name.value = '';
    rasm.value = '';
    desc.value = '';
}

btn && btn.addEventListener('click', function () {
    if (validate()) {
        const user = {
            id: Date.now(),
            name: name.value,
            rasm: rasm.value,
            desc: desc.value,
        }

        let dataLocalStorage = [];
        if (localStorage.getItem('users')) {
            dataLocalStorage = JSON.parse(localStorage.getItem('users'));
        }

        dataLocalStorage.push(user);
        localStorage.setItem('users', JSON.stringify(dataLocalStorage));
        const tr = createRowOptimised(user, dataLocalStorage.lenght + 1);
        tbody.innerHTML += tr;
        clear();

    }
})

function createRow(user, index) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.innerHTML = user.name;

    const tdRasm = document.createElement('td');
    tdRasm.innerHTML = user.rasm;

    const tdDesc = document.createElement('td');
    tdDesc.innerHTML = user.desc;

    tr.appendChild(tdNo);
    tr.appendChild(tdName);
    tr.appendChild(tdRasm);
    tr.appendChild(tdDesc);

    return tr;

}

function createRowOptimised(user, index) {
    return `
            <tr>
                <td>${user.rasm}</td>
                <td>${user.name}</td>
                <td>${user.desc}</td>
            </tr>
    `
}

document.addEventListener('DOMContentLoaded', function () {
    let data = [];
    if (localStorage.getItem('users')) {
        data = JSON.parse(localStorage.getItem('users'))
    };

    if (data.lenght && tbody) {
        data.forEach((element, index) => {
            const tr = createRowOptimised(element, index + 1);
            // tbody.appendChild(tr);
            tbody.innerHTML += tr;
        });
    }
    const deleteButtons = document.querySelectorAll('spam.delete');

    if (deleteButtons.length) {
        deleteButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const elId = this.getAttribute('data-id').slice(5);
                if (elTd) {
                    let isDelete = confirm("Rostan ham o'chiroqchimisiz");
                    if (isDelete) {
                        data = data.filter(el => {
                            return el.id != elId
                        })
                        localStorage.setItem('users', JSON.stringify(data));
                        window.location.rellod()
                    }
                }
            })
        });
    }
});

