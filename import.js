// import.js – AUTO‑PATH für MXU/ECO

export async function ECO_IMPORT() {

    // Ordner-Tiefe bestimmen
    const depth = location.pathname.split("/").length - 2;
    const ROOT = "../".repeat(depth);

    // Dynamische Imports
    const MXU = await import(ROOT + "MXU_fullSync.js");
    const RESPO = await import(ROOT + "respo.js");
    const AXINXA = await import(ROOT + "AXINXA.js");
    const TXT = await import(ROOT + "txt/raw.txt");

    return { MXU, RESPO, AXINXA, TXT };
}


https://iki1uc.github.io/MXU/INDEX.html

https://iki1uc.github.io/MXU/ID.html

https://iki1uc.github.io/MXU/ATOM.html

https://iki1uc.github.io/MXU/BOERSE.html (iki1uc.github.io in Bing)

https://iki1uc.github.io/MXU/MARKT.html

https://iki1uc.github.io/MXU/SELF.html

https://iki1uc.github.io/MXU/toolomatter.html (iki1uc.github.io in Bing)

https://iki1uc.github.io/MXU/self.html

https://iki1uc.github.io/MXU/DOM/DOM.html (iki1uc.github.io in Bing)

https://iki1uc.github.io/MXU/MARKT/markt.html (iki1uc.github.io in Bing)

https://iki1uc.github.io/MXU/BOERSE/boerse.html (iki1uc.github.io in Bing)

https://iki1uc.github.io/MXU/EVO/EVO.html (iki1uc.github.io in Bing)

https://iki1uc.github.io/MXU/EOS/EOS.html (iki1uc.github.io in Bing)

https://iki1uc.github.io/MXU/funktion/funktion.html (iki1uc.github.io in Bing)

https://iki1uc.github.io/MXU/respo/respo.html (iki1uc.github.io in Bing)

https://iki1uc.github.io/MXU/tool48/pyramide.html (iki1uc.github.io in Bing)

https://iki1uc.github.io/MXU/UI/UI.html (iki1uc.github.io in Bing)

https://iki1uc.github.io/MXU/UPD/upd.html (iki1uc.github.io in Bing)

https://iki1uc.github.io/MXU/UPG/upg.html (iki1uc.github.io in Bing)
