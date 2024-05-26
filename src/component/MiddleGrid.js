import React, { useState, useEffect } from 'react';
import './MiddleGrid.css';
import { useDispatch, useSelector } from "react-redux";
import { clickItem } from "../component/redux/slices/paramslice";
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Button from "@material-ui/core/Button";

const MiddleGrid = () => {
    const [questions, setQuestions] = useState([
        { ans: "dehli", quest: "Which is the capital of Bharat/India" },
    ]);
    const [searchText, setSearchText] = useState('');
    const [tempQuestions, setTempQuestions] = useState([]);

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    const dispatch = useDispatch();
    const selectedParams = useSelector((state) => state.cart);

    useEffect(() => {
        if (selectedParams.clickbutton === 'clicked') {
            callclick();
        }
    }, [selectedParams.clickbutton]);

    const callclick = async () => {
        const confirmReset = window.confirm("Do you want to start a new chat?");
        if (confirmReset) {
            setTempQuestions([...questions]);
            console.log(questions);
            dispatch(clickItem({ clickbutton: 'notclicked' }));
            console.log(tempQuestions);
            try {
                const response = await axios.post('http://localhost:8080/Chats/save', questions);
                console.log('Questions sent successfully:', response.data);
            } catch (error) {
                console.error('Error sending questions:', error);
            }
            setQuestions([]);
        } else {
            dispatch(clickItem({ clickbutton: 'notclicked' }));
        }
    };

    const handleSearch = () => {
        if (searchText && searchText.length > 0) {
            const newItem = { quest: searchText, ans: 'random' };
            const requestData = {
                classes: selectedParams.classes,
                subject: selectedParams.subject,
                chapter: selectedParams.chapter,
                board: selectedParams.board
            };

            axios.post('http://localhost:8080/Chats/findans', { questAns: newItem, paramsSelected: requestData })
                .then(response => {
                    const answer = response.data.ans;
                    const newItemWithAns = { quest: searchText, ans: answer };
                    setQuestions(prevQuestions => [...prevQuestions, newItemWithAns]);
                    setSearchText('');
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    };

    const handleThumbDown = () => {
        const lastIndex = questions.length - 1;
        const newItem = { quest: questions[lastIndex].quest, ans: 'random' };
        const requestData = {
            classes: selectedParams.classes,
            subject: selectedParams.subject,
            chapter: selectedParams.chapter,
            board: selectedParams.board
        };

        axios.post('http://localhost:8080/Chats/findans', { questAns: newItem, paramsSelected: requestData })
            .then(response => {
                const answer = response.data.ans;
                const updatedQuestions = [...questions];
                updatedQuestions[lastIndex].ans = answer;
                setQuestions(updatedQuestions);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleThumbUp = () => {
        const lastIndex = questions.length - 1;
        const newItem = { quest: questions[lastIndex].quest, ans: questions[lastIndex].ans };
        const requestData = {
            classes: selectedParams.classes,
            subject: selectedParams.subject,
            chapter: selectedParams.chapter,
            board: selectedParams.board
        };
        axios.post('http://localhost:8080/like/upans', { questAns: newItem, paramsSelected: requestData })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="middle-grid">
            {questions.map((item, index) => (
                <>
                    <div
                        key={`${index}-${item.quest}`}
                        className={`rectangular-slab ${'green'}`}
                    >
                        {item.quest}
                    </div>
                    <div
                        key={`${index}-${item.ans}`}
                        className={`rectangular-slab ${'yellow'}`}
                    >
                        {item.ans}
                    </div>
                </>
            ))}
            <div
                className={`rectangular-slab ${'feedback'}`}>
                <Button onClick={handleThumbUp} style={{ marginRight: '1px', marginLeft: '100px' }}>
                    <ThumbUpIcon />
                </Button>
                <Button onClick={handleThumbDown}>
                    <ThumbDownIcon />
                </Button>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search..." className="search-slab" value={searchText}
                    onChange={handleChange} />
                <button className="search-icon" onClick={handleSearch}><SearchIcon></SearchIcon></button>
            </div>
        </div>
    );
};

export default MiddleGrid;
