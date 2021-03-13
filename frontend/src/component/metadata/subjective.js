export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'fullName', headerName: 'Full name', width: 200 },
    {
        field: 'answer',
        headerName: 'Answer',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 430,
    },
];

export const rows = [
    { id: 1, fullName: 'Snow Jon', answer: 'apple'},
    { id: 2, fullName: 'Lannister Cersei', answer: 'apple'},
    { id: 3, fullName: 'Lannister Jaime', answer: 'apple'},
    { id: 4, fullName: 'Stark Arya', answer: 'water'},
    { id: 5, fullName: 'Targaryen Daenerys', answer: 'apple'},
    { id: 6, fullName: 'Melisandre', answer: 'apple'},
    { id: 7, fullName: 'Clifford Ferrara', answer: 'lemon'},
    { id: 8, fullName: 'Frances Rossini', answer: 'apple'},
    { id: 9, fullName: 'Roxie Harvey', answer: 'apple'},
];

export const subQuestion = '사과를 뜻하는 영단어를 작성하시오.'