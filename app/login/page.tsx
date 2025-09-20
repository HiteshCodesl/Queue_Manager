"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const loginReq = async(e: React.FormEvent) =>{
        e.preventDefault();

    const res = await signIn('credentials', {
       email,
       password, 
       redirect:false, 
    })
      if (res?.error) {
      console.error("Login failed:", res.error);
      alert("Invalid credentials!");
    } else {
      router.push("/");
    }
    }
    
    return (
        <>
          <div className="flex justify-center h-screen align-center items-center">
     <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription className="font-semibold">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={loginReq}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label id="email">Email</Label>
                <Input
                className="font-semibold"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="m@example.com"
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
                className="font-semibold" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                required />
              </div>
              <Button type="submit" className="w-full btn-primary">
                Login
              </Button>
    
            </div>
            <div className="mt-4 text-center text-sm font-semibold">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>  
          </div> 
        </>
    )
}