'use client'

import Image from "next/image";
import { db } from "./FirseBaseConfig"
//import { collection, addDoc } from "firebase/firestore";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-20">
      <div className="pb-10">
        <h1 className="text-5xl">FYNDER</h1>
      </div>

      <div className="text-xl pb-20">
        Find your second home at school
      </div>

      <div className=" flex p4 gap-5">
        <Link href='/Login'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Login</button>
        </Link>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Signup</button>
      </div>
    </div>
  );
}
