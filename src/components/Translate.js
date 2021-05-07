import React, {useState} from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Dutch",
        value: "nl"
    },
    {
        label: "French",
        value: "fr"
    },
    {
        label: "Spanish",
        value: "sp"
    },
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('');
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown label="Select a language" selected={language} onSelectedChange={setLanguage} options={options}/>
                <Convert text={text} language={language}/>
        </div>
    )
}

export default Translate;