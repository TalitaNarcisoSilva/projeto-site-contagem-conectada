const formulario = document.getElementById("newsletter");

formulario.addEventListener("submit", function (event) {
    //impede que a página recarregue
    event.preventDefault();

    //pega o valor do input
    const titulo = document.getElementById("nome");
    const data = document.getElementById("data");
    const descricao = document.getElementById("descricao");
    const rua = document.getElementById("rua")
    const numero = document.getElementById("numero")
    const cidade = document.getElementById("cidade")
    const cep = document.getElementById("cep")
    const latitude = document.getElementById("latitude")
    const longitude = document.getElementById("longitude")

    if (titulo.value.trim() == "") {
        titulo.classList.add("is-invalid");
        titulo.classList.remove("is-valid");
    } else {
        titulo.classList.add("is-valid");
        titulo.classList.remove("is-invalid");
    }

    if (data.value.trim() == "") {
        data.classList.add("is-invalid");
        data.classList.remove("is-valid");
    } else {
        data.classList.add("is-valid");
        data.classList.remove("is-invalid");
    }

    if (descricao.value.trim() == "") {
        descricao.classList.add("is-invalid");
        descricao.classList.remove("is-valid")
    } else {
        descricao.classList.add("is-valid");
        descricao.classList.remove("is-invalid");
    }

    if (rua.value.trim() == "") {
        rua.classList.add("is-invalid");
        rua.classList.remove("is-valid");
    } else {
        data.classList.add("is-valid");
        data.classList.remove("is-invalid");
    }
)

}