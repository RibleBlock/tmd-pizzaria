
class Pizza {
    constructor(tamanho, msaborres, categoria) {
        this.tamanho = tamanho;
        this.msaborres = msaborres;
        this.categoria = categoria;
        this.quantSabores = 0;
    }
}

class Sabor {
    constructor(nome, ingredientes, categoria) {
        this.nome = nome;
        this.ingredientes = ingredientes;
        this.categoria = categoria;
    }
    
}