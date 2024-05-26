import React, { useState, useEffect } from 'react';
import './RightGrid.css';
import { addItem } from "../component/redux/slices/paramslice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const RightGrid = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    classes: '1',
    subject: 'ENG',
    chapter: '3',
    board: 'CBSE',
  });
  const [showClassOptions, setShowClassOptions] = useState(false);
  const [showSubjectOptions, setShowSubjectOptions] = useState(false);
  const [showChapterOptions, setShowChapterOptions] = useState(false);
  const [showBoardOptions, setShowBoardOptions] = useState(false);
  const dispatch = useDispatch();
  const handleClassClick = () => {
    setShowClassOptions(!showClassOptions);
    setShowSubjectOptions(false);
    setShowChapterOptions(false);
    setShowBoardOptions(false);
  };
  const selectedParams = useSelector((state) => state.cart);
  const handleSubjectClick = () => {
    setShowClassOptions(false);
    setShowSubjectOptions(!showSubjectOptions);
    setShowChapterOptions(false);
    setShowBoardOptions(false);
  };

  const handleChapterClick = () => {
    setShowClassOptions(false);
    setShowSubjectOptions(false);
    setShowChapterOptions(!showChapterOptions);
    setShowBoardOptions(false);
  };

  const handleBoardClick = () => {
    setShowClassOptions(false);
    setShowSubjectOptions(false);
    setShowChapterOptions(false);
    setShowBoardOptions(!showBoardOptions);
  };

  const handleOptionSelect = (option) => {
    const updatedOptions = { ...selectedOptions, ...option };
    setSelectedOptions(updatedOptions);
    dispatch(addItem(updatedOptions));
    console.log(selectedParams.board);
    console.log(selectedParams.chapter);
    console.log(selectedParams.classes);
    console.log(selectedParams.subject);
  };

  return (
    <div className="right-grid">
      {/* Render items */}
      <div className="header">
        <h2>The Selected Params</h2>
      </div>
      <div className="slab class-slab" onClick={handleClassClick}>
        {showClassOptions ? (
          <div className="options">
            {[...Array(9).keys()].map((num) => (
              <div key={num} className="option" onClick={() => handleOptionSelect({ classes: num + 1 })}>
                Class {num + 1}
              </div>
            ))}
          </div>
        ) : (
          <div>Class: {selectedOptions.classes}</div>
        )}
      </div>
      <div className="slab subject-slab" onClick={handleSubjectClick}>
        {showSubjectOptions ? (
          <div className="options">
            {['Sci', 'Hin', 'Eng', 'Math'].map((subject) => (
              <div key={subject} className="option" onClick={() => handleOptionSelect({ subject })}>
                {subject}
              </div>
            ))}
          </div>
        ) : (
          <div>Subject: {selectedOptions.subject}</div>
        )}
      </div>
      <div className="slab chapter-slab" onClick={handleChapterClick}>
        {showChapterOptions ? (
          <div className="options">
            {[...Array(20).keys()].map((num) => (
              <div key={num} className="option" onClick={() => handleOptionSelect({ chapter: num + 1 })}>
                Chapter {num + 1}
              </div>
            ))}
          </div>
        ) : (
          <div>Chapter: {selectedOptions.chapter}</div>
        )}
      </div>
      <div className="slab board-slab" onClick={handleBoardClick}>
        {showBoardOptions ? (
          <div className="options">
            {['HBSE', 'CBSE', 'ICSE', 'BBSE'].map((board) => (
              <div key={board} className="option" onClick={() => handleOptionSelect({ board })}>
                {board}
              </div>
            ))}
          </div>
        ) : (
          <div>Board: {selectedOptions.board}</div>
        )}
      </div>
    </div>
  );
};

export default RightGrid;
