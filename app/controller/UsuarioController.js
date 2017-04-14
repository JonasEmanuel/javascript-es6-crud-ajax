class UsuarioController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this.usuarioView = new UsuarioView($(".usuarioList"));
        this.usuarioService = new UsuarioService();
        this.nome = $("#nome");
        this.email = $("#email");
        this.senha = $("#senha");
        this.list();

    }

    clearForm() {
        this.nome = "";
        this.email = "";
        this.senha = "";
    }

    create(event) {
        event.preventDefault();
        let usuario = new Usuario(this.nome.value, this.email.value, this.senha.value);
        if (!ValidatorHelper.validEmail(usuario.email)) {
            new Error("Email inválido!");
        } else {

            this.usuarioService.create(usuario)
                .then(x => this.list())
                .catch(x => console.log(x));
        }

    }

    list() {
        this.usuarioService.findAll()
            .then(data => {
                this.usuarioView.update(data);
            });
    }



}