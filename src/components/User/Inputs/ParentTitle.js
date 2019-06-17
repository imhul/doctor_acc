import React from 'react';

const ParentTitle = (inputData) => {
    const data = inputData.inputData;
    return (
        <div 
            className="child" 
            style={ data.isChild ? {display: "block"} : {display: "none"} }
            className={`parent ${data.Owner === null ? 'parent' : 'child' }`}
        >
            <h3 id={data.Id}>
                {`${data.Title}`}
            </h3>
        </div>
    )
};

export default ParentTitle;