"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export function InteractiveTerminal() {
  const [history, setHistory] = useState<{ command: string; output: string[] }[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { t, lang } = useLanguage();

  const commands = {
    help: lang === "ru" 
      ? ["Доступные команды:", "help - справка", "services - список услуг", "connect - связаться с оператором", "clear - очистить лог"]
      : ["Available commands:", "help - show this message", "services - list services", "connect - contact operator", "clear - clear log"],
    services: lang === "ru"
      ? ["[ЗАГРУЗКА УСЛУГ...]", "-> AI-Автоматизация", "-> Telegram-боты", "-> Интеграции систем", "Введите 'connect' для связи."]
      : ["[LOADING SERVICES...]", "-> AI-Automation", "-> Telegram Bots", "-> System Integrations", "Type 'connect' to initiate link."],
    connect: lang === "ru"
      ? ["ИНИЦИАЛИЗАЦИЯ...", "ОШИБКА: НЕТ СВЯЗИ СО СПУТНИКОМ.", "ОБРАТИТЕСЬ В СЕКТОР 4."]
      : ["INITIALIZING...", "ERROR: NO SATELLITE UPLINK.", "CONTACT SECTOR 4 OVERSEER."],
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    // @ts-ignore
    const output = commands[trimmed] || (lang === "ru" ? [`Команда не найдена: ${trimmed}. Введите 'help'.`] : [`Command not found: ${trimmed}. Type 'help'.`]);
    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // Auto-scroll to bottom
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="w-full text-left font-data-mono text-data-mono text-[#553E16] mt-4 flex flex-col h-[300px]" onClick={() => inputRef.current?.focus()}>
      <div className="flex-1 overflow-y-auto custom-scrollbar mb-4 pr-2">
        {history.map((entry, i) => (
          <div key={i} className="mb-2">
            <div className="opacity-70">{">"} {entry.command}</div>
            {entry.output.map((line, j) => (
              <div key={j} className="ml-2 whitespace-pre-wrap">{line}</div>
            ))}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="opacity-70">{">"}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="bg-transparent outline-none flex-1 uppercase placeholder:text-[#553E16]/50 placeholder:normal-case"
          placeholder={lang === "ru" ? "Чем я могу помочь? (команда help)" : "How can I help? (command help)"}
          autoFocus
        />
      </div>
    </div>
  );
}
