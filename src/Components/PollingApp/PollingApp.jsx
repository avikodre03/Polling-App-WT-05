import React, { useEffect, useState } from 'react'
import './PollingApp.css'
import axios from 'axios';

import PollsTable from '../PollsTable/PollsTable';
const PollingApp = () => {
    const [poll, setPoll] = useState([])
    const [page, setpage] = useState(1)
    const [countdown, setcountdown] = useState(10)

    useEffect(() => {
        const fetchData = () => (axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`).then((res) => {
            let pollData = res.data.hits;

            const newPost = pollData.map((ele) => {
                return ele
            })
            console.log("ele", newPost)
                ;
            setcountdown(10)
            setPoll((prevPosts) => [...prevPosts, ...newPost]);
        }).catch(() => {
            alert("Polling data not found...")
        })
        )

        const interval = setInterval(() => {
            setpage((prevPage) => prevPage + 1);
            fetchData();

        }, 10000);

        return () => clearInterval(interval);

    }, [page])

    useEffect(() => {
        if (countdown > 0) {
            const interval = setInterval(() => {
                setcountdown((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [countdown]);

    return (
        <div className='PollingApp'>

            <h1>POLLING APP</h1>
            <p>New Post countdown : {countdown}</p>

            <PollsTable poll={poll} />

        </div>
    )
}

export default PollingApp