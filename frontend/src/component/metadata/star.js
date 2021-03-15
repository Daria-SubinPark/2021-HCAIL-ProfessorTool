export const starQuestion = '오늘 수업을 얼마나 이해했나요?'

export const starAnswerNumber = [1,2,3,5,2]

export const starAnswer = ['★1','★2','★3','★4','★5']

export const starColumns = [
    { field: 'id', headerName: '#', width: 70 },
    { field: 'star', headerName: '★', width: 100 },
    {
        field: 'answer',
        headerName: 'Reason',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 530,
    },
];

export const starRows = [
    { id: 1, star: 2, answer: 'aldkjfkkgkhkk'},
    { id: 2, star: 4, answer: 'aldkjfkkgkhkk'},
    { id: 3, star: 4, answer: 'aldkjfkkgkhkk'},
    { id: 4, star: 5, answer: 'aldkjfkkgkhkk'},
    { id: 5, star: 3, answer: 'aldkjfkkgkhkk'},
    { id: 6, star: 4, answer: 'aldkjfkkgkhkk'},
    { id: 7, star: 5, answer: 'aldkjfkkgkhkk'},
    { id: 8, star: 4, answer: 'aldkjfkkgkhkk'},
    { id: 9, star: 4, answer: 'aldkjfkkgkhkk'},
];