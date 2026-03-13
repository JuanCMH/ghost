"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/button";
import { AppInput } from "@/components/app-input";
import { BackButton } from "@/components/back-button";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="p-4 flex flex-col items-center w-full h-full gap-4">
      <div className="w-full">
        <BackButton href="/" />
      </div>
      <div className="h-full w-full flex flex-col justify-center gap-8">
        <Image
          src="/profile.png"
          alt="Ghost logo"
          width={150}
          height={150}
          className="mx-auto"
        />
        <div className="flex flex-col gap-4 mt-4 w-full px-8">
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
      </div>
      <div className="w-full flex px-16 pb-16">
        <Button href="/home" color="rose">
          Iniciar
        </Button>
      </div>
    </main>
  );
}
