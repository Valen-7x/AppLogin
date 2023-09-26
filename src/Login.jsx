import React from "react";
import imageGoogle from "./assets/Google.png"
import Logo from "./assets/Logo.png"
import Swal from 'sweetalert2'

export default function Login() {
    const handleSignIn = (e) => {
        e.preventDefault();
        
        // Mostrar SweetAlert de éxito
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'You have successfully signed in.',
        });
      }    
  return (
    <div className="flex flex-wrap flex-col justify-center items-center w-screen md:h-screen bg-slate-900 ">
      <div className="flex flex-col md:flex-row sm:gap-3 justify-center items-center mb-[1rem] mt-[1rem] bg-[#080C13] rounded-lg py-1 px-3 sm:w-3/5">
        <div className="flex flex-col w-full items-center justify-center">
          <h2 className="  text-center sm:text-[30px] flex-wrap font-bold text-[#EBEBEC]">
            SIGN IN <span className="text-amber-300">GAMER!</span>
          </h2>
          <p className="text-center text-[15px] flex-wrap font-bold text-[#EBEBEC] tracking-[0.8px]">
            Unlimited fun awaits you...
          </p>
          <img
            className="w-[5rem] sm:w-[7rem] mt-[1rem] md:my-8 rounded-lg"
            src={Logo}
            alt=""
          />
        </div>
        <div>
          {/* <h2 className='text-center text-[30px] flex-wrap font-bold text-[#FAFCFC]'>SIGN IN <span className='text-amber-300'>GAMER!</span></h2>
          <p className='text-center text-[15px] flex-wrap font-bold text-[#FAFCFC]'>Unlimited fun awaits you...</p> */}
          <form className="w-full" >
            <div className="w-full mt-4 mr-0 mb-0 ml-0 space-y-6 flex flex-col items-center">
              <div className="w-full">
                <p className=" pt-0 pr-2 pb-0 pl-2 mr-0 mb-0 ml-2 not-italic leading-[normal] tracking-[0.6px] font-bold text-amber-300">
                  Email
                </p>
                <input
                  placeholder="Example@gmail.com"
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="border placeholder-gray-300 pt-4 pr-4 pb-2 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-zinc-800 hover:bg-zinc-700
                         text-[#EBEBEC] rounded-[5px] border-solid border-[rgba(31,31,31,0.50)] w-full md:w-[30vw] h-12 shrink-0"
                />
              </div>
              <div className="w-full">
                <p className=" pt-0 pr-2 pb-0 pl-2 mr-0 mb-0 ml-2 not-italic leading-[normal] tracking-[0.6px] font-bold text-amber-300">
                  Password
                </p>
                <input
                 
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="border placeholder-gray-300 pt-4 pr-4 pb-2 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-zinc-800 hover:bg-zinc-700
                         text-[#EBEBEC] rounded-[5px] border-solid border-[rgba(31,31,31,0.50)]  w-full md:w-[30vw] h-12 shrink-0"
                />
              </div>
              <button
                type="submit"
                className="flex w-full h-12 flex-col items-center justify-center shrink-0 rounded-[5px] hover:bg-zinc-950 border border-solid border-amber-300 bg-gradient-to-r from-amber-400 to-amber-700 transition-colors duration-500 hover:from-amber-400 hover:to-amber-600"
              >
                <a className="text-[#EBEBEC] text-center text-sm not-italic font-bold leading-[normal] tracking-[0.7px]">
                  Sign In{" "}
                </a>
              </button>

              <button className="w-full h-12 shrink-0 border rounded-[5px] hover:bg-zinc-950 border-solid border-white  flex justify-center items-center">
                <img src={imageGoogle} className="w-6 h-6 shrink-0" />
                <p className="ms-2 text-[#EBEBEC] text-center text-sm not-italic font-medium leading-[normal] tracking-[0.7px]">
                  Sign in with Google
                </p>
              </button>

              <p className="text-[#EBEBEC] text-sm not-italic font-medium leading-[normal] tracking-[0.7px]">
                You dont have an account yet?
                <a className="text-amber-400 hover:text-amber-300">
                  Sign up
                </a>
              </p>
              <p className="text-[#EBEBEC] text-sm not-italic font-medium leading-[normal] tracking-[0.7px]">
                Go back to{" "}
                <a
                  to={"/"}
                  className="text-amber-400 hover:text-amber-300"
                >
                  home page
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
