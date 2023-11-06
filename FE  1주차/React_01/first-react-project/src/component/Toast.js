import React from 'react';
import "./Toast.css";
import ToastMessage from './ToastMessage';
import ToastButton from './ToastButton';

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