import React, { useRef } from 'react';
import { X, Download } from 'lucide-react';

const Modal = ({ onClose }) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    return (
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='relative mt-10 flex flex-col gap-5 text-white bg-indigo-600 rounded-xl px-20 py-10 mx-4' onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className='place-self-end'><X size={30} /></button>
                <h1 className='text-3xl font-extrabold'>DOWNLOAD FREE EBOOK</h1>
                <p className='text-3xl font-bold max-w-md text-center'>
                    Want to Learn How to Crack Web Development Interviews Like a Pro!
                </p>
                <form action="">
                    <input
                        type="email"
                        placeholder='Enter your email'
                        required
                        className='w-full px-4 py-3 text-black border-gray-300 rounded-md'
                    />
                    <button className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-black'>
                        <Download />Download eBook
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
