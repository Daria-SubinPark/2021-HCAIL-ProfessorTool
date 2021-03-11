import React, { useMemo, useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { v4 as uuidv4 } from 'uuid';

import { content as initialContent } from './data';
import { tokenizeWords } from './nlp';
import {sliceData} from "./slice";

export const initialSettings = {
    content: {
        allowNumbers: false,
        maxWords: 100,
        stemmer: null,
        stopwordsInput: '',
    },
    wordcloud: {
        colors: [
            '#1f77b4',
            '#ff7f0e',
            '#2ca02c',
            '#d62728',
            '#9467bd',
            '#8c564b',
            '#e377c2',
            '#7f7f7f',
            '#bcbd22',
            '#17becf',
        ],
        fontFamily: 'times new roman',
        fontSizes: [8, 64],
        padding: 1,
        rotations: 2,
        rotationAngles: [-90, 0],
        spiral: 'archimedean',
        scale: 'linear',
        transitionDuration: 500,
        // Non-configurable
        deterministic: true,
        enableOptimizations: true,
        enableTooltip: true,
    },
};

const Wordcloud = () => {
    const [content, setContent] = useState(initialContent);
    const [settings, setSettings] = useState(initialSettings);
    const [selectedWord, setSelectedWord] = useState(null);
    const [randomSeed, setRandomSeed] = useState(uuidv4());
    const [sentence, setSentences] = useState([]);

    const { content: contentSettings, wordcloud: wordcloudSettings } = settings;

    const wordcloudCallbacks = useMemo(
        () => ({
            onWordClick: (word) => setSelectedWord(word.text),
        }),
        [],
    );

    const words = useMemo(() => tokenizeWords(content, contentSettings), [
        content,
        contentSettings,
    ]);

    const wordcloudOptions = useMemo(
        () => ({
            ...wordcloudSettings,
            randomSeed,
        }),
        [wordcloudSettings, randomSeed],
    );

    useEffect(()=>
    {
        setSentences(sliceData(content, selectedWord));
        console.log(sentence)
    },[selectedWord])


    return (
        <ReactWordcloud
            options={wordcloudOptions}
            words={words}
            callbacks={wordcloudCallbacks}
        />
    );
}

export default Wordcloud;
