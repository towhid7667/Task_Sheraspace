import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useNavigate } from "react-router-dom";

const PreviewModal = ({ setShowModal, viewPdf, userData }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
const {name, skills} = userData;
const navigate = useNavigate()




const saveUser = () => {
    fetch("https://assignment-server-towhid7667.vercel.app/userInfo",
                {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(userData),
                })
                .then(res => res.json())
                    .then(result =>{
                        if(result.acknowledged){
                            navigate("/success")
                            setShowModal(false);
                        }
                       

                      
                    })
}

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none py-10">
        <div className="relative w-11/12  mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
            {/*body*/}
            <div className="relative px-10 flex-auto">
              <div className="flex flex-row gap-5 items-center justify-center">
                <div className="flex flex-col justify-center items-center p-10 border-black border-2 h-56">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={userData?.img} alt=''/>
                    </div>
                    <hr />
                  </div>
                  <h1>{name}</h1>
                  <h2>Software Engineer</h2>
                </div>
              
              <div className=" py-10 px-3 border-black border-2 h-56">
                <h1>Selected Skills</h1>
                <ol className="border-black border-2 w-[240px] flex flex-col p-2  h-32 overflow-y-auto">
                  
                    {
                        skills?.map((skill, i) => <li key={i}>{i+1}. {skill}</li> )
                    }
        
                </ol>
              </div>
              </div>
            </div>

            <div
              className="scale-75 h-[800px]"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.3)",
              }}
            >
              {viewPdf && (
                <>
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
                    <Viewer
                      fileUrl={viewPdf}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </Worker>
                </>
              )}

              {/* if we dont have pdf or viewPdf state is null */}
              {!viewPdf && <>No pdf file selected</>}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-red-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {saveUser()}}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default PreviewModal;
