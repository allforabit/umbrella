import { IObjectOf } from "@thi.ng/api";
import { TAU } from "@thi.ng/math";
import { ReadonlyVec } from "@thi.ng/vectors";
import { endShape } from "./end-shape";

export const circularArc = (
    ctx: CanvasRenderingContext2D,
    attribs: IObjectOf<any>,
    pos: ReadonlyVec,
    r: number,
    start = 0,
    end = TAU,
    antiCCW = false
) => {
    ctx.beginPath();
    ctx.arc(pos[0], pos[1], r, start, end, antiCCW);
    endShape(ctx, attribs);
};

export const ellipticArc = (
    ctx: CanvasRenderingContext2D,
    attribs: IObjectOf<any>,
    pos: ReadonlyVec,
    r: ReadonlyVec,
    axis = 0,
    start = 0,
    end = TAU,
    ccw = false
) => {
    ctx.beginPath();
    ctx.ellipse(pos[0], pos[1], r[0], r[1], axis, start, end, ccw);
    endShape(ctx, attribs);
};
