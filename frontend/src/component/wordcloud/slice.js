export function sliceData(content, word)
{
    const splitContent = content.split('\n')
    let i = 0;
    return splitContent.map((data) => {
        let isWord = data.toLowerCase().indexOf(word);
        if (isWord !== -1) {
            i += 1;
            return {id: i, questions: data};
        }
    }).filter(
        (element) => element !== undefined
    );
}

export const columns = [
    { field: 'id', headerName: '#', width: 70 },
    {
        field: 'questions',
        headerName: 'Questions',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 630,
    },
];

export const subQuestion = '질문들'