import React from 'react';
import CompanyMenu from '../../../data/CompanyMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const HVACSurfaceCalorimeter = (props) => {

    const dataPath = CompanyMenu.pageData[0].tescor.pageData[0].HVACSurfaceCalorimeter;
    
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${CompanyMenu.pageData[0].tescor.backgroundImage})`}}
        > 
        <div className="backgroundGradient"></div>
        <ItemButtonGenerator
            sectionData = {dataPath}
            pageTitle   = {dataPath.title}
            pageBody    = {dataPath.body}
            items       = {dataPath.items}
            data        = {dataPath.items}
        />
        </div>
    )  
}

export default HVACSurfaceCalorimeter;