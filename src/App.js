import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Companies from './components/Companies';
import { FaAngleDoubleRight } from 'react-icons/fa';

function App() {
    const [loading, setLoading] = useState(true);
    const [experiences, setExperiences] = useState([]);
    const [index, setIndex] = useState(0);

    const fetchData = async () => {
        try {
            const url = 'https://course-api.com/react-tabs-project';
            const response = await axios.get(url);
            if (response.status >= 400) {
                const error = new Error(response.statusText);
                throw error;
            }
            setExperiences(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    const selectCompany = (order) => {
        if (order === 3) {
            setIndex(0);
        } else if (order === 2) {
            setIndex(1);
        } else if (order === 1) {
            setIndex(2);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <main>
                <div className='loading'>
                    <h1>loading...</h1>
                </div>
            </main>
        );
    }
    return (
        <section className='section'>
            <div className='title'>
                <h2>experience</h2>
                <div className='underline'></div>
            </div>
            <div className='job-center'>
                <div className='btn-container'>
                    {experiences.map((experience) => {
                        return (
                            <Companies
                                company={experience.company}
                                order={experience.order}
                                selectCompany={selectCompany}
                                key={experience.id}
                            />
                        );
                    })}
                </div>
                <article className='job-info'>
                    <h3>{experiences[index].title}</h3>
                    <h4>{experiences[index].company}</h4>
                    <p className='job-date'>{experiences[index].dates}</p>
                    {experiences[index].duties.map((duty, index) => {
                        return (
                            <div className='job-desc' key={index}>
                                <FaAngleDoubleRight className='job-icon' />
                                <p>{duty}</p>
                            </div>
                        );
                    })}
                </article>
            </div>
            <button className='btn' type='button'>
                more info
            </button>
        </section>
    );
}

export default App;
