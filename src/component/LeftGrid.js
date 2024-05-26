import React, { useState, useEffect } from 'react';
import './LeftGrid.css';
import axios from 'axios';
import { clickItem } from "../component/redux/slices/paramslice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const LeftGrid = () => {
    const [data, setData] = useState([
        {
            id: "2",
            questionsAndAnswers: [{
                quest: 'first chat',
                ans: ''
            }
            ]
        }
    ]);
    const dispatch = useDispatch();
    const selectedParams = useSelector((state) => state.cart);
    useEffect(() => {
        // Fetch data when the component mounts
        // fetchData();
    }, []);

    // Function to fetch data from the API
    const fetchData = () => {
        // Replace 'API_ENDPOINT' with the actual API endpoint URL
        axios.get('http://localhost:8080/Chats/findall')
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    // Function to handle the task
    const handleTask = () => {
        // Dispatch action to update click status
        dispatch(clickItem('clicked'));
        console.log(selectedParams.clickbutton);
        fetchData();
    };

    return (
        <div className="left-grid">
            <button className="top-slab" onClick={handleTask}>
                New chat
            </button>
            {/* Add your left grid content here */}
            {data.map(item => (
                <div key={item.id} className="item">
                    {item.questionsAndAnswers[0].quest}
                    {/* console.log(item.questionsAndAnswers[0].quest) */}
                </div>

            ))}
        </div>
    );
};

export default LeftGrid;
