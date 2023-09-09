"use server";

import {cookies} from "next/headers";

export async function setLanguageCookie(language: string) {
  cookies().set("language", language);
}
