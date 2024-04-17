//criar uma classe com nome, idade, tipo (gurreiro, mago, monge, ninja)

class classeHeroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        
    }

    escrever(){
        let ataque
        switch(this.tipo){
            case "Mago":
                ataque = "magia"
                break
            case "Guerreiro":
                ataque = "espada"
                break
            case "Monge":
                ataque = "artes marciais"
                break
            case "Ninja":
                ataque = "shuriken"
                break
            default:
                ataque = "nulo"
        }

        console.log(`O ${this.tipo} de nome ${this.nome}, de idade ${this.idade}, atacou usando ${ataque}`)
    }
}


let heroi = new classeHeroi("J4uM", 23, "Mago")
let heroiG = new classeHeroi("Robert", 52, "Guerreiro")
let heroiMong = new classeHeroi("Chun li", 20, "Monge")
let heroiN = new classeHeroi("Donatello", 17, "Ninja")
heroi.escrever()
heroiG.escrever()
heroiMong.escrever()
heroiN.escrever()