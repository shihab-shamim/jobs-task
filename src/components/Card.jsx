import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Card = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [attach,setAttach]=useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data =>{
        const photoUrl=data.attach[0]
       
        
        
        const imageFile ={image:photoUrl}
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_API}`,imageFile,{
          headers:{
            'content-type':'multipart/form-data'
          }
        })
        console.log(res.data.data.url)
        if(res.data.data.url){
            const attachUrl={url:res.data.data.url}
            console.log('attach',attachUrl)
            const attachRes  = await axios.post('https://server-chi-jet.vercel.app/attach',attachUrl)
            if(attachRes .data.insertedId){
                setIsOpen(false)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Uploaded Success",
                    showConfirmButton: false,
                    timer: 1000
                  });
                  window.location.reload();
            }
        }
        
    
        
      
      };
      useEffect(() => {
        const fetchAttachments = async () => {
          try {
            const {data} = await axios.get('https://server-chi-jet.vercel.app/attach');
            setAttach(data)
           
          } catch (error) {
            console.error("Error fetching attachments:", error);
          }
        };
      
        fetchAttachments();
      }, [isOpen]);
      
    return (
        <div className="post bg-[#FFFFFF] px-2 py-4 border-r-gray-800 mt-12">
      <div className="flex justify-between">
      <div className="flex items-center gap-2 ">
        <img src="client.png" alt="Sadik Istiak" className="w-8 h-8 rounded-full" />
        <span className="font-bold text-gray-500">Client Name</span>
      </div>
      <div className="flex items-center gap-2 ">
        <img src="sadik.png" alt="Sadik Istiak" className="w-8 h-8 rounded-full" />
        <span className="font-bold text-gray-500">Sadik  Istiak</span>
      </div>
      </div>
      <div className="flex justify-between items-center gap-2">
      <p className="flex items-center gap-2 mt-4 "> <img src="icon.png" alt="" className="w-4 h-4" /> Lorem ipsum dolor sit amet.</p>
    <p className="flex items-center gap-2 px-2  bg-slate-200 rounded-sm "><img src="icon1.png" alt="" className="w-4 h-4" />1/2</p>
      </div>
      <div className="flex justify-around mt-8">
        <img src="gril.png" alt="" className="w-8 h-8" />
        <img src="boy.png" alt="" className="w-8 h-8" />
        <p className="text-gray-800 w-8 h-8 rounded-full p-1 bg-[#F2F4F7]">12+</p>
        <p className="flex items-center text-gray-600 font-bold"><img src="sms.png" className="w-8" alt="" /> 15</p>
        <p className="flex items-center text-gray-600 font-bold"><a onClick={() => setIsOpen(true)} href="#"><img src="att.png" className="w-6" alt="" /></a> {attach.length}</p>
        <p className="flex items-center text-gray-600 font-bold"><img src="cl.png" className="w-6" alt="" /> 30-12-2024</p>
        
      </div>
      <div className="relative flex justify-center">
     

      {isOpen && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
              <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
              Upload The Attachments 
              </h3>

              <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                

                
              <div>
  <label htmlFor="image" className="block text-sm text-gray-500 dark:text-gray-300">
    Attachments 
  </label>

  <input name="attach" {...register('attach',{required:true})}
    type="file"
    className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
  />

</div>

               

                

              

                <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                  >
                    Cancel
                  </button>

                  <button onClick={handleSubmit(onSubmit)}
                    type="button"
                    className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    );
};

export default Card;