import logo from './logo.svg';
import './App.css';
import {memo, useEffect, useState} from "react";
import data from './data.json'
import Card from "./Card";

const App = memo(() => {
    const filterButtons = ['Frontend', 'Backend', 'Junior']
    return (
        <>
            <div id="header-color"/>
            <img src={require('./images/bg-header-desktop.svg').default} id="header-desktop" alt="Header image"/>
            <div className="vertical-flex">
                <div className="filters-section tags hidden" id="filters-heading">
                    {/*<button id="Frontend-tag" className="top-tag hidden" onClick="removeFilterTag('data-role','Frontend'); hideTag('Frontend-tag'); checkTagFilters()"><p>Frontend</p></button>*/}
                    {/*<button id="Backend-tag" className="top-tag hidden" onClick="removeFilterTag('data-role','Backend'); hideTag('Backend-tag'); checkTagFilters()"><p>Backend</p></button>*/}
                    {/*<button id="Fullstack-tag" className="top-tag hidden" onClick="removeFilterTag('data-role','Fullstack'); hideTag('Fullstack-tag'); checkTagFilters()"><p>Fullstack</p></button>*/}
                    {/*<button id="Junior-tag" className="top-tag hidden" onClick="removeFilterTag('data-level','Junior'); hideTag('Junior-tag');checkTagFilters()"><p>Junior</p></button>*/}
                    {/*<button id="Midweight-tag" className="top-tag hidden" onClick="removeFilterTag('data-level','Midweight'); hideTag('Midweight-tag');checkTagFilters()"><p>Midweight</p></button>*/}
                    {/*<button id="Senior-tag" className="top-tag hidden" onClick="removeFilterTag('data-level','Senior'); hideTag('Senior-tag');checkTagFilters()"><p>Senior</p></button>*/}
                    {/*<button id="Python-tag" className="top-tag hidden" onClick="removeFilterTag('data-languages','Python'); hideTag('Python-tag');checkTagFilters()"><p>CSS</p></button>*/}
                    {/*<button id="Ruby-tag" className="top-tag hidden" onClick="removeFilterTag('data-languages','Ruby'); hideTag('Ruby-tag');checkTagFilters()"><p>CSS</p></button>*/}
                    {/*<button id="JavaScript-tag" className="top-tag hidden" onClick="removeFilterTag('data-languages','JavaScript'); hideTag('JavaScript-tag');checkTagFilters()"><p>JavaScript</p>*/}
                    {/*</button>*/}
                    {/*<button id="HTML-tag" className="top-tag hidden" onClick="removeFilterTag('data-languages','HTML'); hideTag('HTML-tag');checkTagFilters()"><p>HTML</p></button>*/}
                    {/*<button id="CSS-tag" className="top-tag hidden" onClick="removeFilterTag('data-languages','CSS'); hideTag('CSS-tag');checkTagFilters()"><p>CSS</p></button>*/}
                    {/*<button id="React-tag" className="top-tag hidden" onClick="removeFilterTag('data-languages','React'); hideTag('React-tag');checkTagFilters()"><p>React</p></button>*/}
                    {/*<button id="Sass-tag" className="top-tag hidden" onClick="removeFilterTag('data-languages','Sass'); hideTag('Sass-tag');checkTagFilters()"><p>Sass</p></button>*/}
                    {/*<button id="Vue-tag" className="top-tag hidden" onClick="removeFilterTag('data-languages','Vue'); hideTag('Vue-tag');checkTagFilters()"><p>Vue</p></button>*/}
                    {/*<button id="Django-tag" className="top-tag hidden" onClick="removeFilterTag('data-languages','Django'); hideTag('Django-tag');checkTagFilters()"><p>Django</p></button>*/}
                    {/*<button id="RoR-tag" className="top-tag hidden" onClick="removeFilterTag('data-languages','RoR'); hideTag('RoR-tag');checkTagFilters()"><p>RoR</p></button>*/}
                    {filterButtons

                        .map(but => <button id={but + "-tag"} className="top-tag hidden" onClick="removeFilterTag('data-languages','RoR'); hideTag('RoR-tag');checkTagFilters()"><p>{but}</p></button>)}
                    {/*// <!--Clear Filter-->*/}
                </div>
                <button id="clear-button" className="hidden" onClick="clearFilters()">Clear</button>
                {data.map((elem, index) => <Card job={elem} key={`job-${index}`}/>)}

            </div>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">G. Seclen Alfaro</a>.
            </div>
        </>
    );
})

export default App;
