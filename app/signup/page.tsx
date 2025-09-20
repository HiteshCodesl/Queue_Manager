"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Signup(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const router = useRouter();

    const signUpReq = async(e: React.FormEvent) => {
      e.preventDefault();
       const response = await axios.post('/api/auth/register', {
        email, password, name})
console.log("response status", response.status)
console.log("credentials", name, email, password)

       if(response.status == 200){
        await signIn('credentials',{
           email,
           password,
           redirect:true,
           callbackUrl:'/'
        })

       }else{
        console.log("signup failed")
       }
    }
      
    return(
        <>
         <div className="flex justify-center h-screen items-center ">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
          <CardDescription className="font-semibold">
            Enter your email below to signup into your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={signUpReq}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label id="email">Email</Label>
                <Input
                className="font-semibold"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) =>setEmail(e.target.value)}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label id="name">Name</Label>
                <Input
                className="font-semibold"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label id="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input 
                className="font-semibold" id="password" 
                type="password" 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}
                required />
              </div>
              <Button type='submit' className="w-full btn-primary">
                Signup
              </Button>
    
            </div>
            <div className="mt-4 text-center text-sm font-semibold">
              Don&apos;t have an account?{" "}
              <a href="/login" className="underline underline-offset-4">
                Sign in
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
         </div>
        </>
    )
}