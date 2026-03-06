"use client"
import { AppInput } from "@/components/app-input";
import { BackButton } from "@/components/back-button";
import { Button } from "@/components/button";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    return (
        <main className="p-4 flex flex-col items-center justify-center w-full h-screen gap-32">
            <div className="w-full" >
                <BackButton href="/" />
            </div>
            <div className="">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={100}
                    height={20}
                    priority
                />
            </div>
            <div className="flex flex-col gap-4">
                <AppInput

                    type="text"
                    placeholder="Nombre de usuario"
                    setValue={setName}
                    value={name}
                />
                <AppInput

                    type="password"
                    placeholder="Contraseña"
                    setValue={setPassword}
                    value={password}

                />
            </div>
            <Button href="/home" color="rose">
                Iniciar
            </Button>
        </main>
    );
}