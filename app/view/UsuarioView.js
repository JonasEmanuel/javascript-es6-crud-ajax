class UsuarioView {
    constructor(elemento) {
        this.elemento = elemento;
    }

    template(data) {
            return `<table class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Senha (Criptografada)</th>
                        </tr>
                    </thead>
                    <tbody>
                            ${data.map(n =>
                                 `
                                    <tr>
                                        <th>${n.id}</th>
                                        <th>${n.nome}</th>
                                        <th>${n.email}</th>
                                        <th>${n.senha}</th>
                                    </tr>
                                 `
                                ).join('')
                            }
                        </tr>
                    </tbody>
                </table>`;
    }

    update(data) {
        this.elemento.innerHTML = this.template(data);
    }
}