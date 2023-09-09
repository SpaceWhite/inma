"use client";
import * as React from "react";
import Doctor from "./icon/doctor";
import Language from "./ui/language";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const translations = {
  en: [
    "Hi, Welcome to Inma",
    "Your international medical aid platform",
    "Getting started",
  ],
  es: [
    "Hola, bienvenido a Nnma",
    "Su plataforma de ayuda médica internacional",
    "cómo empezar",
  ],
  jp: [
    "こんにちは、Inmaへようこそ",
    "あなたの国際医療支援プラットフォーム",
    "開始",
  ],
  cn: [
    "你好，欢迎来到英玛",
    "您的国际医疗援助平台",
    "开始",
  ],
  kr: [
    "안녕하세요, Inma에 오신 것을 환영합니다",
    "국제 의료 지원 플랫폼",
    "시작하기",
  ],
}

function Welcome() {

  const [language, setLanguage] = React.useState("en");

  const router = useRouter();

  async function setWelcomeCookie(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setCookie("welcome", "done");

    router.refresh();
  }

  return (
    <div className="bg-white">
      <Language value={language} onChange={setLanguage}/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-2">
          <div className="text-left">
            <div className="w-48 h-48">
              <Doctor/>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {translations[language as keyof typeof translations][0]}
            </h1>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              {translations[language as keyof typeof translations][1]}
            </h1>
            <div className="mt-10 flex items-center gap-x-6">
              <form onSubmit={setWelcomeCookie}>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                {translations[language as keyof typeof translations][2]}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
