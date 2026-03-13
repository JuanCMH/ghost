"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Progress } from "@/components/progress";
import { AppInput } from "@/components/app-input";
import { BackButton } from "@/components/back-button";
import { Button } from "@/components/button";
import { Message } from "@/components/message";
import { getGhostById, type GhostType } from "@/lib/ghost-data";
import {
  useGhostStore,
  useGhostStoreHydrated,
  type GhostChatMessage,
} from "@/lib/ghost-store";
import { getGhostFakeReply, getGhostProfile } from "@/lib/ghost-personalities";

const CHAT_PROGRESS_TARGET = 500;
const EMPTY_MESSAGES: GhostChatMessage[] = [];

const getCurrentTime = () => {
  return new Date().toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const createChatMessage = ({
  from,
  role,
  user,
  text,
}: Omit<GhostChatMessage, "id" | "date">): GhostChatMessage => {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    from,
    role,
    user,
    text,
    date: getCurrentTime(),
  };
};

function GhostConversation({
  selectedGhost,
}: {
  selectedGhost: GhostType | null;
}) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const hasHydrated = useGhostStoreHydrated();
  const messages = useGhostStore((state) => {
    if (!selectedGhost) {
      return EMPTY_MESSAGES;
    }

    return state.ghostMessages[selectedGhost.id] ?? EMPTY_MESSAGES;
  });
  const initializeGhostMessages = useGhostStore(
    (state) => state.initializeGhostMessages,
  );
  const addGhostMessage = useGhostStore((state) => state.addGhostMessage);

  const ghostName = selectedGhost?.name ?? "Fantasma desconocido";
  const ghostImage = selectedGhost?.image ?? "/ghost-logo.jpeg";
  const ghostRarity = selectedGhost?.rarity ?? "misterioso";
  const profile = getGhostProfile(selectedGhost?.id, ghostName);
  const fallbackGreeting = useMemo(() => {
    return createChatMessage({
      from: "ghost",
      role: "assistant",
      user: ghostName,
      text: selectedGhost
        ? profile.greeting
        : "No encuentro a ese fantasma ahora mismo, pero sigo aquí.",
    });
  }, [ghostName, profile.greeting, selectedGhost]);
  const messageCount = hasHydrated ? messages.length : 0;
  const percentage = Math.round(
    (Math.min(messageCount, CHAT_PROGRESS_TARGET) / CHAT_PROGRESS_TARGET) * 100,
  );

  useEffect(() => {
    if (!hasHydrated || !selectedGhost) {
      return;
    }

    initializeGhostMessages(selectedGhost.id, [fallbackGreeting]);
  }, [fallbackGreeting, hasHydrated, initializeGhostMessages, selectedGhost]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedMessage = message.trim();
    if (!trimmedMessage || !selectedGhost || isLoading) {
      return;
    }

    const userMessage = createChatMessage({
      from: "user",
      role: "user",
      user: "Tú",
      text: trimmedMessage,
    });

    const nextMessages = [...messages, userMessage];
    addGhostMessage(selectedGhost.id, userMessage);
    setMessage("");
    setIsLoading(true);

    window.setTimeout(() => {
      const fakeReply = getGhostFakeReply(
        selectedGhost.id,
        ghostName,
        trimmedMessage,
        nextMessages.filter((entry) => entry.from === "ghost").length,
      );

      addGhostMessage(
        selectedGhost.id,
        createChatMessage({
          from: "ghost",
          role: "assistant",
          user: ghostName,
          text: fakeReply,
        }),
      );
      setIsLoading(false);
    }, 700);
  };

  return (
    <main className="p-4 flex flex-col h-full min-h-screen">
      <div className="w-full flex justify-between">
        <BackButton href="/home" />
      </div>
      <div className="mt-8 flex items-end w-full gap-2">
        <Image src={ghostImage} alt={ghostName} width={150} height={150} />
        <div className="flex flex-col gap-4 mb-4 w-full">
          <h2 className="text-xl">{ghostName}</h2>
          <p className="text-sm capitalize text-gray-500">
            Rareza: {ghostRarity}
          </p>
          <Progress percentage={percentage} color="rose" />
        </div>
      </div>
      <div className="mt-6 flex-1 overflow-y-auto px-2">
        <div className="flex flex-col gap-3 pb-6">
          {(hasHydrated ? messages : [fallbackGreeting]).map((entry) => (
            <Message
              key={entry.id}
              user={entry.user}
              text={entry.text}
              date={entry.date}
              from={entry.from}
            />
          ))}
          {isLoading ? (
            <Message
              user={ghostName}
              text="Estoy pensando..."
              date={getCurrentTime()}
              from="ghost"
            />
          ) : null}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 mb-8 mx-4 mt-4"
      >
        <AppInput
          placeholder={`Escribe a ${ghostName}...`}
          value={message}
          setValue={setMessage}
          type="text"
        />
        <Button
          type="submit"
          color="rose"
          disabled={!selectedGhost || isLoading || !message.trim()}
          className="w-auto px-5 text-base"
        >
          Enviar
        </Button>
      </form>
    </main>
  );
}

export default function Catalog() {
  const searchParams = useSearchParams();
  const ghostId = searchParams.get("ghost");

  const selectedGhost = useMemo(() => {
    return getGhostById(ghostId);
  }, [ghostId]);

  return (
    <GhostConversation
      key={selectedGhost?.id ?? "ghost-unknown"}
      selectedGhost={selectedGhost}
    />
  );
}
