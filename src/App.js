import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Companies from './components/Companies';
import Duties from './components/Duties';

function App() {
    const [loading, setLoading] = useState(true);
    const [experiences, setExperiences] = useState([]);
    const [value, setValue] = useState(0);

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
    const selectCompany = (i) => {
        setValue(i);
    };
    const { title, company, dates, duties } = experiences[value];
    return (
        <section className='section'>
            <div className='title'>
                <h2>experience</h2>
                <div className='underline'></div>
            </div>
            <div className='jobs-center'>
                <div className='btn-container'>
                    {experiences.map((exp, index) => {
                        return (
                            <Companies
                                exp={exp}
                                key={exp.id}
                                index={index}
                                value={value}
                                selectCompany={selectCompany}
                            />
                        );
                    })}
                </div>
                <article className='job-info'>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className='job-date'>{dates}</p>
                    {duties.map((duty, index) => {
                        return <Duties key={index} duty={duty} />;
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
