import React, { useState, useEffect } from 'react';
import { Test } from './components/Test';
import { VideoPlayer } from './components/VideoPlayer';

import { VideosPage } from './components/VideosPage';

import { contents } from './resources/contents';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './style.css';
import './App.css';

export default function App() {
  // console.log(contents);
  const LanguageOptions = [
    'English',
    'Tamil',
    'Hindi',
    'Telugu',
    'Kannada',
    'Bengali',
    'Malayalam',
  ];

  const ContentEnglishOptions = [
    { value: '0', label: 'Welness Program' },
    { value: '1', label: 'Yoga' },
    { value: '2', label: 'Herbal Mask & Sanitizer Preparation' },
  ];

  const ContentTamilOptions = [
    { value: '0', label: 'ஆரோக்கிய திட்டம்' },
    { value: '1', label: 'யோகா' },
    { value: '2', label: 'ஹெர்பல் மாஸ்க் & சானிடைசர் தயாரிப்பு' },
  ];

  const [ContentOptions, setContentOptions] = useState(ContentEnglishOptions);

  const ContentTeluguOptions = [
    { value: '0', label: 'సంక్షేమ కార్యక్రమం' },
    { value: '1', label: 'యోగా' },
    { value: '2', label: 'హెర్బల్ మాస్క్ & శానిటైజర్ తయారీ' },
  ];

  const ContentMalayalamOptions = [
    { value: '0', label: 'വെൽഫെയർ പ്രോഗ്രാം' },
    { value: '1', label: 'യോഗ' },
    { value: '2', label: 'ഹെർബൽ മാസ്‌കും സാനിറ്റൈസറും തയ്യാറാക്കൽ' },
  ];

  const ContentHindiOptions = [
    { value: '0', label: 'कल्याण कार्यक्रम' },
    { value: '1', label: 'योग' },
    { value: '2', label: 'हर्बल मास्क और सैनिटाइज़र तैयार करना' },
  ];

  const ContentKannadaOptions = [
    { value: '0', label: 'ಕಲ್ಯಾಣ ಕಾರ್ಯಕ್ರಮ' },
    { value: '1', label: 'ಯೋಗ' },
    { value: '2', label: 'ಹರ್ಬಲ್ ಮಾಸ್ಕ್ ಮತ್ತು ಸ್ಯಾನಿಟೈಸರ್ ತಯಾರಿ' },
  ];

  const ContentBengaliOptions = [
    { value: '0', label: 'কল্যাণ কর্মসূচি' },
    { value: '1', label: 'যোগব্যায়াম' },
    { value: '2', label: 'ভেষজ মাস্ক এবং স্যানিটাইজার প্রস্তুতি' },
  ];

  const defaultLanguageOption = LanguageOptions[0];
  const defaultContentOption = ContentEnglishOptions[0];

  const [doneLanguageSelection, setDoneLanguageSelection] = useState(false);
  const [doneContentSelection, setDoneContentSelection] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState(LanguageOptions[0]);
  const [selectedContent, setSelectedContent] = useState(ContentOptions[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedLanguageObject, setSelectedLanguageObject] = useState(
    contents.english
  );
  const [selectedContentObject, setselectedContentObject] = useState(
    selectedLanguageObject.topics
  );
  const [goButton, setGoButton] = useState('Go');
  const [contentPlaceholder, setContentPlaceholder] = useState(
    'Select Your Content'
  );

  const onLanguageSelect = (e) => {
    // setSelectedLanguage(e.value);
    console.log(e.value);
    // console.log(ContentTamilOptions);

    switch (e.value) {
      case 'English':
        setGoButton('Go');
        setContentPlaceholder('Select Your Content');
        setSelectedLanguageObject(contents.english);
        setContentOptions(ContentEnglishOptions);
        break;
      case 'Tamil':
        setGoButton('செல்');
        setContentPlaceholder(() => 'தலைப்பைத் தேர்ந்தெடுக்கவும்');
        setSelectedLanguageObject(contents.tamil);
        setContentOptions(ContentTamilOptions);

        break;
      case 'Hindi':
        setGoButton('ठीक है');
        setContentPlaceholder('विषय का चयन करें');
        setSelectedLanguageObject(contents.hindi);
        setContentOptions(ContentHindiOptions);
        break;
      case 'Malayalam':
        setGoButton('ശരി');
        setContentPlaceholder('വിഷയം തിരഞ്ഞെടുക്കുക');
        setSelectedLanguageObject(contents.malayalam);
        setContentOptions(ContentMalayalamOptions);
        break;
      case 'Telugu':
        setGoButton('అవును');
        setContentPlaceholder('అంశాన్ని ఎంచుకోండి');
        setSelectedLanguageObject(contents.telugu);
        setContentOptions(ContentTeluguOptions);
        break;
      case 'Kannada':
        setGoButton('ಹೌದು');
        setContentPlaceholder('ವಿಷಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ');
        setSelectedLanguageObject(contents.kannada);
        setContentOptions(ContentKannadaOptions);
        break;
      case 'Bengali':
        setGoButton('হ্যাঁ');
        setContentPlaceholder('বিষয় নির্বাচন করুন');
        setSelectedLanguageObject(contents.bengali);
        setContentOptions(ContentBengaliOptions);
        break;
      default:
        setGoButton('Go');
    }

    // console.log(ContentTamilOptions.label);
  };

  const onContentSelect = (e) => {
    // setselectedContent(e.value);
    // console.log('test', e.value);
    setSelectedIndex(e.value);
    // console.log(e.selectedIndex);
    // switch (e.value) {
    //   case 'C':
    //     break;
    //   case 'C++':
    //     setselectedContentObject(selectedLanguageObject.cpp);
    //     break;
    //   case 'Java':
    //     setselectedContentObject(selectedLanguageObject.java);
    //     break;
    //   case 'Malayalam':
    //     break;
    //   default:
    //     setGoButton('JavaScript');
    // }
  };

  const handleLanguageSubmission = (e) => {
    e.preventDefault();
    // setSelectedContent(ContentOptions[0].label);
    // setSelectedIndex(ContentOptions[0].value);
    // console.log(e);
    // console.log('yes');
    setDoneLanguageSelection(true);
  };

  const handleContentSubmission = (e) => {
    e.preventDefault();
    // console.log('yes');
    setDoneContentSelection(true);
  };

  // useEffect(() => {
  //   setContentPlaceholder("Select Your Content")

  // }, []);

  return (
    <div id="pageWrapper" className=' '>
    <div className=" m-4 grid grid-cols-1 ">
      <div id="formContainer" className=' max-w-xl mx-auto '>
      {/* {console.log(selectedContentObject)} */}
      {!doneLanguageSelection ? (
        <div className='m-4'  id="languageSelection">
          <p>
            {' '}
            <b >Choose your Language :</b>
          </p>
          <Dropdown
            className='mt-4'
            options={LanguageOptions}
            onChange={onLanguageSelect}
            value={defaultLanguageOption}
            placeholder="Select an option"
          />
          {/* <p>You have selected {selectedLanguage}</p> */}
          <br />
          <button
             className={`  bg-blue-500 text-white py-1 px-1 rounded-md  min-w-[300px]`}
            onClick={handleLanguageSubmission}
          >
            {' '}
            {goButton}
          </button>
        </div>
      ) : (
        <></>
      )}

      {!doneContentSelection ? (
        doneLanguageSelection ? (
          <div id="contentSelection" className='m-4' >
            <p >
              <b> {contentPlaceholder} </b>
            </p>

            <Dropdown
              className='mt-4'
              options={ContentOptions}
              onChange={onContentSelect}
              value={ContentOptions[0]}
              placeholder={contentPlaceholder}
            />
            <br />
            {/* <p>You have selected {selectedContent}</p> */}

            <button  className={` bg-blue-500 text-white py-1 px-1 rounded-md  min-w-[300px]`} onClick={handleContentSubmission}> {goButton}</button>
          </div>
        ) : (
          <> </>
        )
      ) : (
        <></>
      )}
      </div>
      <br />

      <div id="videoContainer" className='  '>
      {doneContentSelection ? (
        <>
          <VideosPage
            content={selectedLanguageObject.topics}
            topicNumber={selectedIndex}
          />
        </>
      ) : (
        <></>
      )}
      </div>
      </div>
    </div>
  );
}
