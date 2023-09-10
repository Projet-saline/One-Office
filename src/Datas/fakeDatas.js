import faker from 'faker';

export const lastYears = ['2020', '2021', '2022', '2023'];
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
            // data: lastYears.map(() => faker.datatype.number({ min: 15, max: 60 })),
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
            label: 'Premium',
            data: lastYears.map(() => faker.datatype.number({ min: 80, max: 500 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Freemium',
            data: lastYears.map(() => faker.datatype.number({ min: 120, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
