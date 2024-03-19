import React from 'react';
import './doginfo.css';
import Picture from './picture/Picture';
import Owner from './owner/Owner';
import AllInfos from './allInfos/AllInfos';

const DogInfo = () => {
    return (
        <div className="doginfo-container">
            <div className="top-section">
                <div className="picture-section">
                    <Picture />
                </div>
                <div className="owner-section">
                    <Owner />
                </div>
            </div>
            <div className="bottom-section">
                <AllInfos />
            </div>
        </div>
    );
};

export default DogInfo;
