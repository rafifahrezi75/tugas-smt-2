function input(angka) {
    document.form.textarea.value = document.form.textarea.value + angka;
}

function hitung() {
    let hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}

function clean() {
    document.form.textarea.value = "";
}

function del() {
    let del = document.form.textarea.value;
    document.form.textarea.value = del.substring(0, del.length - 1);
}