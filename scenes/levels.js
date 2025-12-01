// En un archivo levels.js (o en main.js)
const levels = [
    {
        title: '[Level 1]',
        objectiveText: 'Annihilate the 35 zombies!.',
        image1: 'Z',
        image2: 'Za',
        nextGameScene: 'MainSceneA1',
        nextObjectiveData: 1 // Índice del siguiente nivel en el array
    },
    {
        title: '[Level 2]',
        objectiveText: 'Annihilate the 52 zombies!',
        image: 'Z1',
        nextGameScene: 'MainSceneA2',
        nextObjectiveData: 2
    },
    {
        title: '[Level 3]',
        objectiveText: 'Annihilate the 68 zombies!',
        image: 'Z2',
        nextGameScene: 'MainSceneA3', // Tendrás que crear esta escena
        nextObjectiveData: 3
    },
     {
        title: '[Level 4]',
        objectiveText: 'Annihilate the 78 zombies… including the Mutant Zombie Mini-Boss!',
        image: 'Z3',
        nextGameScene: 'MainSceneA4', // Tendrás que crear esta escena
        nextObjectiveData: 4
    },
    {
        title: '[Level 5]',
        objectiveText: 'Annihilate the 88 zombies!.',
        image: 'Z3',
        nextGameScene: 'MainSceneA5', // Tendrás que crear esta escena
        nextObjectiveData: 5
    },
    {
        title: '[Level 6]',
        objectiveText: 'Annihilate the 112 zombies… including the Mutant Zombie Mini-Boss! .',
        image: 'Z3',
        nextGameScene: 'MainSceneA6', // Tendrás que crear esta escena
        nextObjectiveData: 6
    }
    // ... y así sucesivamente
];

export default levels;