import faker from 'faker';

export const lastYears = ['2020', '2021', '2022', '2023'];
export const horaire = ['00', '01', '02', '03', '04', '05', '06'];
export const allSubject = [
    'Voix', 
    'Violon', 
    'Piano', 
    'Violoncelle', 
    'Alto', 
    'Musique de chambre', 
    'Trombone', 
    'Flûte', 
    'Clarinette',
    'Hautbois'
];

export const classData = {
    labels: lastYears,
    datasets: [
        {
            label: 'Professeurs',
            data: [5, 15, 15, 10, 4, 4, 1, 6, 1, 2],
            data: lastYears.map(() => faker.datatype.number({ min: 15, max: 60 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Eleves',
            data: lastYears.map(() => faker.datatype.number({ min: 80, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export const statusData = {
    labels: lastYears,
    datasets: [
        {
            label: 'Inscriptions Freenium',
            data: lastYears.map(() => faker.datatype.number({ min: 500, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Désinscriptions Freemium',
            data: lastYears.map(() => -faker.datatype.number({ min: 100, max: 400 })), 
            borderColor: '#fc5c46',
            backgroundColor: 'rgba(252, 92, 70, 0.5)',
        },
        {
            label: 'Inscriptions Premium',
            data: lastYears.map(() => faker.datatype.number({ min: 200, max: 500 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Désinscriptions Premium',
            data: lastYears.map(() => -faker.datatype.number({ min: 80, max: 100 })), // Les valeurs seront négatives
            borderColor: 'rgb(255, 206, 86)',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
        },
    ],
};

export const professorsData = {
    labels: allSubject,
    datasets: [
        {
            label: 'Professeurs',
            data: allSubject.map(() => faker.datatype.number({ min: 2, max: 12 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};  

export const heureData = {
    labels: horaire,
    datasets:[
        {
            fill: true,
            label: 'horraire : AM',
            data: horaire.map(() => faker.datatype.number({ min: 0, max: 6 })),
            backgroundColor: 'rgba(128, 194, 255, 0.5)',
            borderColor: 'rgb(53, 162, 235)',
        },
        {
            fill: true,
            label: 'horraire : PM',
            data: horaire.map(() => faker.datatype.number({ min: 0, max: 6 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ]
};

export const studyData = {
    
    someData: faker.datatype.number({ min: 1, max: 100 }),
    someOtherData: faker.datatype.string(),
  };
  