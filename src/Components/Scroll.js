import react from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solidbalck', height:'700px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;