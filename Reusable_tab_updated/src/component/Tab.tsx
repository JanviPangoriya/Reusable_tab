import React from 'react';

interface Props{
    title: string;
    children : React.ReactNode;
}

const Tab:React.FC<Props>=(props) => {
    return(
        <>
        {props.children}
        </>
    );

}

Tab.defaultProps={
    
}
export default Tab;