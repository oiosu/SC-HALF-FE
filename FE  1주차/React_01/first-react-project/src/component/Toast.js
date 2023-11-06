import React from 'react';
import "./Toast.css";
import ToastMessage from './ToastMessage';
import ToastButton from './ToastButton';

// import 안의 세부 로직 , named export ,  export path 

const Toast = ({ message, children }) => {
    return (
        <div className={`toast toast-${message.title}`}>
            {children}
            <ToastMessage message={message} />
            <ToastButton />
        </div>
    );
};

export default Toast;