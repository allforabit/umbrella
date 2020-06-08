import {
    abs4,
    acos4,
    add4,
    addN4,
    asin4,
    atan_24,
    atan4,
    ceil4,
    clamp4,
    cos4,
    degrees4,
    dist,
    div4,
    divN4,
    dot4,
    exp_24,
    exp4,
    faceForward,
    floor4,
    fmod4,
    fmodN4,
    fract4,
    invSqrt4,
    log_24,
    log4,
    mag,
    max4,
    min4,
    mix4,
    mixN4,
    mul4,
    mulN4,
    neg,
    normalize,
    pow4,
    radians4,
    reflect,
    refract,
    sign4,
    sin4,
    smoothStep4,
    sqrt4,
    step4,
    sub4,
    subN4,
    tan4,
    ZERO4,
} from "@thi.ng/vectors";
import type { JSBuiltinsVec } from "../api";

export const VEC4: JSBuiltinsVec = {
    abs: (a) => abs4([], a),
    acos: (a) => acos4([], a),
    add: (a, b) => add4([], a, b),
    addnv: (a, b) => addN4([], b, a),
    addvn: (a, b) => addN4([], a, b),
    asin: (a) => asin4([], a),
    atan: (a) => atan4([], a),
    atannn: (a, b) => atan_24([], a, b),
    ceil: (a) => ceil4([], a),
    clamp: (x, a, b) => clamp4([], x, a, b),
    cos: (a) => cos4([], a),
    dec: (a) => subN4([], a, 1),
    degrees: (a) => degrees4([], a),
    dFdx: () => ZERO4,
    dFdy: () => ZERO4,
    distance: dist,
    div: (a, b) => div4([], a, b),
    divnv: (a, b) => div4(null, [a, a, a, a], b),
    divvn: (a, b) => divN4([], a, b),
    dot: (a, b) => dot4(a, b),
    exp: (a) => exp4([], a),
    exp2: (a) => exp_24([], a),
    faceForward: (a, b, c) => faceForward([], a, b, c),
    floor: (a) => floor4([], a),
    fract: (a) => fract4([], a),
    fwidth: () => ZERO4,
    inc: (a) => addN4([], a, 1),
    inversesqrt: (a) => invSqrt4([], a),
    length: mag,
    log: (a) => log4([], a),
    log2: (a) => log_24([], a),
    max: (a, b) => max4([], a, b),
    min: (a, b) => min4([], a, b),
    mix: (a, b, t) => mix4([], a, b, t),
    mixn: (a, b, t) => mixN4([], a, b, t),
    mod: (a, b) => fmod4([], a, b),
    modn: (a, b) => fmodN4([], a, b),
    mul: (a, b) => mul4([], a, b),
    mulnv: (a, b) => mulN4([], b, a),
    mulvn: (a, b) => mulN4([], a, b),
    normalize: (a) => normalize([], a),
    pow: (a, b) => pow4([], a, b),
    radians: (a) => radians4([], a),
    reflect: (a, b) => reflect([], a, b),
    refract: (a, b, c) => refract([], a, b, c),
    sign: (a) => sign4([], a),
    sin: (a) => sin4([], a),
    smoothstep: (a, b, t) => smoothStep4([], a, b, t),
    sqrt: (a) => sqrt4([], a),
    step: (a, b) => step4([], a, b),
    sub: (a, b) => sub4([], a, b),
    sub1: (a) => neg([], a),
    subnv: (a, b) => sub4(null, [a, a, a, a], b),
    subvn: (a, b) => subN4([], a, b),
    tan: (a) => tan4([], a),
};
