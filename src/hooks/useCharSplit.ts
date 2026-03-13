"use client";

import { useEffect, useRef } from "react";

/**
 * NOT A HOTEL方式: テキストを1文字ずつ<span class="char">でラップし、
 * 各文字にdelayを設定してフェードインアニメーションを実現する。
 */
export function useCharSplit() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.charSplit === "done") return;

    const text = el.textContent || "";
    el.innerHTML = "";

    let charIndex = 0;
    for (const char of text) {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = char === " " ? "\u00A0" : char;
      // 改行文字はbrに
      if (char === "\n") {
        el.appendChild(document.createElement("br"));
        continue;
      }
      span.style.transitionDelay = `${charIndex * 50}ms`;
      el.appendChild(span);
      charIndex++;
    }

    el.dataset.charSplit = "done";
  }, []);

  return ref;
}
