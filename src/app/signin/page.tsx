"use client";

import { userLogin } from "@/application/factory/user-factory";
import { UserDto } from "@/domain/user/user.dto";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import { FormEvent, useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: UserDto = {
      email,
      password,
    };

    try {
      console.log(user)
      const response = await userLogin(user);
      setCookie(null, 'authToken', response.token, {
        maxAge: 24 * 60 * 60,
        path: '/',
      });

      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Erro no login. Verifique suas credenciais.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-[28rem] bg-white p-16 border-r-4 shadow-custom">
      <p className="text-xl font-medium text-black mb-20">Bem-vindo de volta</p>
      
      <label className="w-full text-[#777777] self-start custom-focus transition duration-150 ease-linear">
        Email
        <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="focus:outline-none text-sm text-[#404040] py-4 w-full border-b border-[#a0a0a0] mb-12 transition duration-150 ease-linear" 
          type="text" 
          name="email"
        />
      </label>
      
      <label className="w-full text-[#777777] self-start custom-focus transition duration-150 ease-linear">
        Senha
        <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          className="focus:outline-none text-sm text-[#404040] py-4 w-full border-b border-[#a0a0a0] mb-12 transition duration-150 ease-linear" 
          type="password" 
          name="password"
        />
      </label>
      
      <button type="submit" className="text-xs leading-8 font-bold uppercase w-full py-4 cursor-pointer bg-[#8d3dc8] text-white rounded mt-2 transition duration-150 ease-linear hover:bg-[#81259d] focus:outline-none">
        Continuar
      </button>
      
      <Link href={"#"} className="text-[#81259d] mt-4">Ainda não tenho conta</Link>
    </form>
  );
}
