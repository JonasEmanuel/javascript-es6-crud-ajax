class UsuarioService {


    constructor() {
        this.url = "http://localhost:9000";
        this.xhr = new XMLHttpRequest();
    }

    findAll() {
        return new Promise((resolve, reject) => {
            this.xhr.open("GET", this.url + "/usuario/list");
            this.xhr.onreadystatechange = () => {
                if (this.xhr.readyState == 4) {
                    if (this.xhr.status == 200) {
                        resolve(JSON.parse(this.xhr.responseText));
                    } else {
                        reject(new Error(""));
                    }
                }
            }
            this.xhr.send();
        });


    }

    create(usuario) {
        return new Promise((resolve, reject) => {
            this.xhr.open("POST", this.url + "/usuario/create");
            this.xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            this.xhr.setRequestHeader('Content-Type', 'application/json');
            this.xhr.onreadystatechange = () => {
                if (this.xhr.readyState == 4) {
                    if (this.xhr.status == 200) {
                        resolve("Usuário criado com sucesso!");
                    } else {
                        reject("FALHA");
                    }
                }
            }
            this.xhr.send(JSON.stringify(usuario));
        });
    }
}