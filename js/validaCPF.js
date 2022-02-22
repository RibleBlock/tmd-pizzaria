
class ValidaCPF {
    constructor(cpfEnviado) {

        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: () => {
                return cpfEnviado.replace(/\D+/g, '');
            },
            configurable: false
        }); 
    }

    isSequece() {
        const sequecia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequecia === this.cpfLimpo;
    }

    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);

        let i = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac+=(Number(val) * i);
            i--;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : digito;
    }

    validar() {
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequece()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);
        
        const cpfNovo = cpfParcial + digito1 + digito2;
        return cpfNovo === this.cpfLimpo;
    }
}
