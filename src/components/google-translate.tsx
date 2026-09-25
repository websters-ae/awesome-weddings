import { useEffect } from "react";

export function GoogleTranslate() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("google_translate_script")) return;

    const inline = document.createElement("script");
    inline.id = "google_translate_script";
    inline.text =
      "function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'en,ar',autoDisplay:false},'google_translate_element');}";
    document.head.appendChild(inline);

    const loader = document.createElement("script");
    loader.id = "google_translate_loader";
    loader.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    loader.async = true;
    document.head.appendChild(loader);

    const style = document.createElement("style");
    style.id = "google_translate_styles";
    style.textContent =
      "#google_translate_element{position:absolute;left:-9999px;top:-9999px;visibility:hidden}.goog-te-banner-frame{display:none!important}body{top:0!important}.skiptranslate>iframe{display:none!important}";
    document.head.appendChild(style);

    if (!document.getElementById("google_translate_element")) {
      const container = document.createElement("div");
      container.id = "google_translate_element";
      container.setAttribute("aria-hidden", "true");
      document.body.appendChild(container);
    }
  }, []);

  return null;
}
