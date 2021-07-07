import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { useState } from 'react';
import { ExclamationIcon, XIcon } from '@heroicons/react/outline'
interface Props{
title? :string;
description? : string;
okText? : string;
cancelText? : string;
}

const ConfirmationBox:React.FC<Props>=(props) => {
    const[isOpen, setIsOpen] = useState(false);
    return(
        <>
        <button className=" py-3 px-5 bg-blue-300 border-4 border-red-400 uppercase md:mx-10
        fixed top-60 left-36  sm:top-80 lg:left-96 justify-center" onClick={()=>{setIsOpen(!isOpen)}}>
            click to show pop up
        </button>
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog open={isOpen} onClose={setIsOpen}>
            <Transition.Child 
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-70"
            entered="opacity-70"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-70"
            leaveTo="opacity-0"
            >
        <Dialog.Overlay  className="fixed top-0 bottom-0 left-0 right-0 bg-gray-500">
        </Dialog.Overlay>
        </Transition.Child>

        <Transition.Child
        as={Fragment}
        enter="transition-transform duration-300"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0 top-40"
        entered="translate-y-0 top-40"
        leave="transition-transform duration-300"
        leaveFrom="translate-y-0 top-40"
        leaveTo="-translate-y-full top-0">
        <div className={"fixed top-0 transform  h-auto pb-10  left-28 right-28 md:left-40 md:right-40 lg:left-96 lg:right-96 bg-white rounded-2xl"}>
           <button className="float-right" onClick={()=>{setIsOpen(!isOpen)}}>
           <XIcon className=" pt-2 pr-2 m-3  text-gray-500 hover:text-gray-700 w-8 h-8"></XIcon>  
           </button>
           
            <div className="flex justify-center">
            <ExclamationIcon className="text-red-500 w-28 mt-10 ml-6 h-28"></ExclamationIcon>  
            </div>
            <Dialog.Title className="text-center text-3xl font-semibold my-3 tracking-wide text-gray-800">
                {props.title}
            </Dialog.Title>
            <Dialog.Description>
                {props.description && <p className="text-center font-medium tracking-normal text-gray-800 p-3 
                break-words
                ">
                    {props.description}
                        </p>}
            </Dialog.Description>
            <div className="flex flex-row justify-center items-center mt-2">
                <button className ="w-28 text-center py-2 border-4 border-gray-600 bg-gray-500 rounded-xl mr-2 mt-5 text-white font-semibold hover:bg-gray-400" onClick={()=>{setIsOpen(!isOpen)}}>
                    {props.cancelText}
                </button>
                <button  className ="w-28 text-center py-2 border-4 border-red-800 bg-red-600 text-white rounded-xl ml-2 mt-5 fonr-semibold hover:bg-red-600 ">
                    {props.okText}
                </button>
            </div>
        </div>
        
        </Transition.Child>
        
        </Dialog>
        </Transition.Root>
        </>
    );

}

ConfirmationBox.defaultProps={
    title : "Are you sure ? ",
    okText: "OK",
    cancelText: "Cancel"
}
export default React.memo(ConfirmationBox);