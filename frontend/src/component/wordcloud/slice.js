export function sliceData(content, word)
{
    const splitContent = content.split('.')

    return splitContent.map((data) => {
        let isWord = data.toLowerCase().indexOf(word);
        if (isWord != -1) {
            return data;
        }
    })
}