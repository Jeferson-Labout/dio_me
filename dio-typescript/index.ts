interface IAnimal{
    nome: String,
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
    // executarRugido( alturaEmDecibeis: number):void;

}
interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}
interface ICanino extends IAnimal{
    porte: 'pequeno'|'medio'|'grande';
}


type IDomestico = IFelino | ICanino;

const animal : IDomestico ={
     nome: 'Elefante',
     tipo: 'terrestre',
     domestico:true,
     porte: 'pequeno'
    //  executarRugido : (alturaEmDecibeis ) => (`${alturaEmDecibeis}dB`)
}

const felino: IDomestico ={
    nome: 'Leão',
    tipo:'terrestre',
    visaoNoturna: true,
    // executarRugido : (alturaEmDecibeis ) => (`${alturaEmDecibeis}dB`)
    domestico:true,
    porte: 'pequeno'
}

