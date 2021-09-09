const Card = ({job}) => {
    console.log(job)
    return (
        <div className="listed-item" data-role="Frontend" data-level="Senior" data-languages="HTML CSS JavaScript">
            <div className="roundmask">
                <a href="#"><img src={require(`${job.logo}`).default} alt="Photosnap Logo"/></a>
            </div>
            <div className="listed-item-l">
                <div className="top-line">
                    <p className="item-name">{job.company}</p>
                    {job.new && <button className="btn_green_background tag-on-item-name">New!</button>}
                    {job.featured &&<button className="btn_dark_background tag-on-item-name">Featured</button>}
                </div>
                <h1 className="color_fifth category">{job.position}</h1>
                <div className="bottom-line">
                    <span>{job.postedAt}</span>
                    <p className="info-separator">·</p>
                    <span>{job.contract}</span>
                    <p className="info-separator">·</p>
                    <span>{job.location}</span>
                </div>
            </div>
            <div className="listed-item-r">
                <div className="tags">

                    {/*// <!-- Role -->*/}
                    <button className="item-role"><p>{job.role}</p></button>
                    {/*// <!-- Level -->*/}
                    <button className="item-role"><p>{job.level}</p></button>
                    {/*// <!-- Languages -->*/}
                    {job.languages.map((language) => <button className="item-role"><p>{language}</p></button>)}
                    {/*// <!-- Tools -->*/}
                    {job.tools.map((tool) => <button className="item-role"><p>{tool}</p></button>)}
                </div>
            </div>
        </div>
    );
};

export default Card;
