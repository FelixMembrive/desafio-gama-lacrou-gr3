import React from "react";
import { CloseCircle } from "react-ionicons";

interface IModalProps {
  buttonStyle?: string;
  buttonText: string;
  title?: string;
  titleStyle?: string;
  children?: React.ReactNode;
  onShow?: any;
}

export default function Modal(props: IModalProps) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div
        className={
          "h-12 rounded-lg flex items-center justify-center px-8 drop-shadow-[0px_1px_6px_rgba(0,0,0,0.4)] " +
          props.buttonStyle
        }
        onClick={() => {
          setShowModal(true)
          props.onShow
        }}
      >
        {props.buttonText}
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-4 max-w-3xl">
              {/*content*/}
              <div className="p-2 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col">
                    <button
                      className="ml-auto bg-transparent border-0 text-black float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black h-6 w-6 opacity-30 text-xl block outline-none focus:outline-none">
                        <CloseCircle color={"#00000"} />
                      </span>
                    </button>
                  <h3 className="text-2xl font-semibold self-center text-center mt-6 ">{props.title}</h3>
                </div>
                {/*body*/}
                  {props.children}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
