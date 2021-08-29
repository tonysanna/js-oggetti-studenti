var utente = {
    nome = 'Tony',
    cognome = 'Sanna',
    eta = 24
};

for(var chiave in utente) {
    console.log(chiave + ' : ' + utente[chiave]);
};

var studenti = 
[
    {
        nome = 'michele',
        cognome = 'neri',
        eta = 25
    },

    {
        nome = 'alex',
        cognome = 'blu',
        eta = 27
    },

    {
        nome = 'frank',
        cognome = 'rossi',
        eta = 21
    },

    {
        nome = 'sacha',
        cognome = 'blu',
        eta = 40
    },

];

for(let i = 0; i < studenti.length; i++) {
    var studente = studenti[i];
    console.log(studente.nome, studente.cognome);
};

var nuovoAlunno = {};
nuovoAlunno.nome = prompt('inserisci il nome');
nuovoAlunno.cognome = prompt('inserisci il cognome');
nuovoAlunno.eta = parseInt(prompt('inserisci la tua eta'));
console.log(nuovoAlunno);
studenti.push(nuovoAlunno);
console.log(studenti);