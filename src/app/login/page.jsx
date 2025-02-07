import { signIn } from "next-auth/react";

export default function Login() {

    const handleSignIn = ()=>{
        signIn("azure-ad")
    }

    return (
        <>
            <div className="w-full min-h-screen py-8">
                <div className='w-[70%] m-auto my-auto min-h-[90vh] bg-slate-200 shadow-xl px-10 py-10 flex flex-col justify-center items-center gap-3 rounded-xl'>
                    <div className="text-5xl font-bold mb-10">Login</div>
                    <div className="flex flex-col gap-10">
                        <div className="text-2xl font-semibold">Login Throught the Microsoft</div>
                        <button className="bg-white px-5 py-3 rounded-xl flex justify-center items-center gap-4 hover:bg-slate-300  font-bold focus:ring-2 focus:ring-blue-500" onClick={handleSignIn()}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/512px-Microsoft_icon.svg.png" alt="Microsoft Image" className='w-[25px] h-[25px]' />
                            <div  className='text-blue-500'>Login With Your Microsoft Account</div></button>
                    </div>
                </div>
            </div>
        </>
    );
}