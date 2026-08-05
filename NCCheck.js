// NC‑Kern‑Check
export function NC_CHECK(sync) {

    const nc = sync.nc || {};

    return {
        raw: nc.raw ? "OK" : "FAIL",
        evo: nc.evo ? "OK" : "FAIL",
        tokens: nc.tokens ? "OK" : "FAIL",
        meta: nc.meta ? "OK" : "FAIL",
        layers: nc.layers ? "OK" : "FAIL",
        alive: (nc.raw && nc.evo && nc.tokens) ? "LEBT" : "LEICHE"
    };
}
