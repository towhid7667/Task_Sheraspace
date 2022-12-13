import React, { useState } from 'react';
import PreviewModal from './PreviewModal';
import { useForm } from 'react-hook-form';
const ApplyForm = ({user}) => {

    const [userData, setUserData] = useState({})
    const { register, handleSubmit,  } = useForm();
    const [pdfFile, setPdfFile]=useState(null);
    const [pdfFileError, setPdfFileError]=useState('');
    const [showModal, setShowModal] = React.useState(false);
  

    const [viewPdf, setViewPdf]=useState(null);
  
    const fileType=['application/pdf'];
    const handlePdfFileChange=(e)=>{
        let selectedFile=e.target.files[0];
        if(selectedFile){
          if(selectedFile&&fileType.includes(selectedFile.type)){
            let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) =>{
                  setPdfFile(e.target.result);
                  setPdfFileError('');
                }
          }
          else{
            setPdfFile(null);
            setPdfFileError('Please select valid pdf file');
          }
        }
        else{
          console.log('select your file');
        }
      }


  
      const onSubmit = data => {
        
        if(pdfFile!==null){
            setViewPdf(pdfFile);
          }
          else{
            setViewPdf(null);
          }
        
      
        // console.log(data.name)
        // console.log(data.checked)

        const newUser = {
            
            name : data.name,
            email : data.email,
            phone : data.phone,
            url : data.url,
            skills : data.checked,
            cv : `${pdfFile}`,
            img : `${user?.picture}`

        }
        console.log(newUser)
        setUserData(newUser)
        setShowModal(true)
    }
console.log(userData)
    // const skills = ["PHP", "PYTHON", "SQL",  "HTML",  "CSS",  "JAVASCRIPT",  "REACT"];
    const skills = "PHP PYTHON SQL HTML CSS JAVASCRIPT REACT".split(" ")
    return (
        <div className='flex flex-col justify-center items-center  p-10 border shadow-sm  rounded-lg my-10'>
      <h1 className='text-red-400 text-2xl font-semibold'>Apply For Position</h1>
      <form onSubmit={handleSubmit(onSubmit)}  className='  flex flex-col items-start justify-center'>
        <div>
        <div className='flex items-center gap-3 my-3'>
          <label htmlFor="name">Name</label>
          <input readOnly type="text" {...register("name", { required: true })} placeholder="Type Your Name" value={user?.name} className='input input-bordered lg:w-[500px] w-full'/>
        </div>
        <div className='flex items-center gap-3 my-3'>
          <label htmlFor="email">Email</label>
          <input readOnly type="text" {...register("email", { required: true })} placeholder="Type Your Email" value={user?.email} className='input input-bordered w-full'/>
        </div>
        <div className='flex items-center gap-3 my-3'>
          <label htmlFor="phone">Phone</label>
          <input {...register("phone", { required: true })} type="number"  placeholder="Type Your Phone" className='input input-bordered w-full'/>
        </div>
        <div className='flex items-center gap-3 my-3'>
          <label htmlFor="linkedin">Linkedin</label>
          <input {...register("url", { required: true })} type="text"  placeholder="Type Your Linkedin URL" className='input input-bordered w-full'/>
        </div>
        </div>
        <p>
          Select your Skills <span>(Select minimum one to submit)</span>
        </p>
        <div className='flex flex-col justify-start gap-2'>
           {
            skills.map(
              (skill, i) => <label key={i} className='flex'><input className='checkbox checkbox-accent mx-2' type="checkbox" value={ skill} name="sameName" {...register('checked')} />{skill}</label>
            )
          }
        </div>

        <div className='flex items-center gap-3 my-3'>
        <label htmlFor="CV">CV(PDF format Only)</label>
            <input className='text-red-400'  type="file"  id="" accept="application/pdf"  required onChange={handlePdfFileChange}/>
            {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
        </div>
  
        <input className='px-4 py-2 border bg-red-400 text-white shadow-sm  rounded-lg font-semibold hover:bg-red-700' value='Preview'  type="submit"/>
        
      </form>
      {showModal &&
            <PreviewModal setShowModal={setShowModal}  userData = {userData} viewPdf ={viewPdf}></PreviewModal>
      }
      
    </div>
    );
};

export default ApplyForm;