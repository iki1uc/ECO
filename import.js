// import.js – AUTO-PATH für alle Module

export async function ECO_IMPORT() {

    // Ordner-Tiefe bestimmen
    const depth = location.pathname.split("/").length - 2;
    const ROOT = "../".repeat(depth);

    // Dynamische Imports
    const MXU = await import(ROOT + "MXU_fullSync.js");
    const RESPO = await import(ROOT + "respo.js");
    const AXINXA = await import(ROOT + "AXINXA.js");
    const TXT = await import(ROOT + "txt/raw.txt");
    const NC = await import(ROOT + "NCCheck.js");

    return { MXU, RESPO, AXINXA, TXT, NC };
}
