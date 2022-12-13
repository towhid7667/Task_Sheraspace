import React from 'react';

const ApplyForm = ({user}) => {



    return (
        <div className='flex flex-col justify-center items-center lg:w-6/12 md:w-8/12 w-11/12 p-10 border shadow-sm  rounded-lg my-10'>
      <h1 className='text-red-400 text-2xl font-semibold'>Apply For Position</h1>
      <form action="" className='  flex flex-col items-start justify-center'>
        <div>
        <div className='flex items-center gap-3 my-3'>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Type Your Name" value={user?.name} className='input input-bordered lg:w-[500px] w-full'/>
        </div>
        <div className='flex items-center gap-3 my-3'>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Type Your Email" value={user?.email} className='input input-bordered w-full'/>
        </div>
        <div className='flex items-center gap-3 my-3'>
          <label htmlFor="phone">Phone</label>
          <input type="text" placeholder="Type Your Phone" className='input input-bordered w-full'/>
        </div>
        <div className='flex items-center gap-3 my-3'>
          <label htmlFor="linkedin">Linkedin</label>
          <input type="url" placeholder="Type Your Linkedin URL" className='input input-bordered w-full'/>
        </div>
        </div>
        <p>
          Select your Skills <span>(Select minimum one to submit)</span>
        </p>
        <div className='flex flex-col justify-start gap-2'>
          <div className='flex items-center gap-1'>
            <input name="skills" type="checkbox" className="checkbox checkbox-accent" />
            <label htmlFor="PHP">PHP</label>
          </div>
          <div className='flex items-center gap-1'>
            <input name="skills" type="checkbox" className="checkbox checkbox-accent" />
            <label htmlFor="python">Python</label>
          </div>
          <div className='flex items-center gap-1'>
            <input name="skills" type="checkbox" className="checkbox checkbox-accent" />
            <label htmlFor="sql">SQL</label>
          </div>
          <div className='flex items-center gap-1'>
            <input name="skills" type="checkbox" className="checkbox checkbox-accent" />
            <label htmlFor="css">CSS</label>
          </div>
          <div className='flex items-center gap-1'>
            <input name="skills" type="checkbox" className="checkbox checkbox-accent" />
            <label htmlFor="html5">HTML5</label>
          </div>
          <div className='flex items-center gap-1'>
            <input name="skills" type="checkbox" className="checkbox checkbox-accent" />
            <label htmlFor="javascript">JavaScript</label>
          </div>
          <div className='flex items-center gap-1'>
            <input name="skills" type="checkbox" className="checkbox checkbox-accent" />
            <label htmlFor="react">React</label>
          </div>
        </div>

        <div className='flex items-center gap-3 my-3'>
        <label htmlFor="CV">CV(PDF format Only)</label>
            <input type="file" name="" id="" accept="application/pdf"/>
        </div>
        <input type="submit" value="Preview" />
      </form>
    </div>
    );
};

export default ApplyForm;