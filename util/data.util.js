const { getRandomBetween } = require('./random.util');

const names = [
    'Lucía',
    'Mateo',
    'Valentina',
    'Sebastián',
    'Camila',
    'Martín',
    'Isabella',
    'Tomás',
    'Sofía',
    'Joaquín',
    'Valeria',
    'Gabriel',
    'Mía',
    'Matías',
    'Ximena',
    'Samuel',
    'Emma',
    'Benjamín',
    'Luciana',
    'Alejandro',
    'Victoria',
    'Daniel',
    'Florencia',
    'Emilio',
    'Catalina',
    'Emilia',
    'Julia',
    'Ignacio',
    'Antonella',
    'Felipe',
    'Renata',
    'Diego',
    'Renzo',
    'David',
    'Bianca',
    'Adrián',
    'Abril',
    'Eduardo',
    'Amanda',
    'Elena',
    'Celeste',
    'Adriana',
    'Luna',
    'Rodrigo',
    'Carmen',
    'Esteban',
    'Valentina',
    'Agustín',
    'Julieta',
    'Javier',
    'Emiliano',
    'María',
    'Daniela',
    'Luis',
    'Carolina',
    'Hugo',
    'Ana',
    'Juan',
    'Andrea',
    'Jorge',
    'Daniella',
    'Mariano',
    'Clara',
    'Pablo',
    'Rocío',
    'Fernando',
    'Laura',
    'Manuel',
    'Paula',
    'Raúl',
    'Mariana',
    'Marcos',
    'Natalia',
    'Ricardo',
    'Gabriela',
    'Andrés',
    'Giselle',
    'Gustavo',
    'Isabel',
    'Santiago',
    'Olivia',
    'Alejandra',
    'Juana',
    'Francisco',
    'Alessandra',
    'Carlos',
    'Danielle',
    'Roberto',
    'Valerie',
    'Rafael',
    'Adela',
    'José',
    'Ingrid',
    'Héctor',
    'Patricia',
    'Jaime',
    'Marina',
    'Nicolás',
    'Juliana',
    'Armando',
    'Renée',
    'Mario',
    'Estefanía'
  ];

const getRandomName = () => {
    const index = getRandomBetween(0, names.length - 1);
    return names[index];
};

module.exports = {
 getRandomName
};

