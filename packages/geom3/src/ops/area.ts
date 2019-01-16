import { defmulti, MultiFn1O } from "@thi.ng/defmulti";
import { PI } from "@thi.ng/math";
import { signedArea2, Vec } from "@thi.ng/vectors3";
import {
    AABB,
    Circle,
    Ellipse,
    Group,
    IShape,
    Polygon,
    Rect,
    Triangle,
    Type
} from "../api";
import { dispatch } from "../internal/dispatch";
import { polyArea } from "../internal/poly-area";

/**
 * Returns the possibly signed (unsigned by default) surface area of given
 * `shape`. For groups calls `area()` for each child and returns sum of
 * unsigned areas.
 *
 * In general, for polygons and triangles, the sign of the result can be
 * used as indication of the shapes orientation (clockwise /
 * counterclockwise).
 *
 * For curves, lines, point clouds and rays the function returns 0.
 *
 * Implemented for:
 *
 * - AABB
 * - Circle
 * - Cubic
 * - Ellipse
 * - Group
 * - Line
 * - Points
 * - Polygon
 * - Polyline
 * - Quad
 * - Quadratic
 * - Ray
 * - Rect
 * - Triangle
 *
 * @param shape
 * @param signed true, if signed area
 */
export const area: MultiFn1O<IShape, boolean, number> = defmulti(dispatch);

area.addAll({

    [Type.AABB]:
        ({ size: [w, h, d] }: AABB) =>
            2 * ((w * h) + (w * d) + (h * d)),

    [Type.CIRCLE]:
        ($: Circle) =>
            PI * $.r * $.r,

    [Type.ELLIPSE]:
        ($: Ellipse) =>
            PI * $.r[0] * $.r[1],

    [Type.GROUP]:
        ({ children }: Group) =>
            children.reduce((sum, $) => sum + area($, false), 0),

    [Type.POINTS]:
        () => 0,

    [Type.POLYGON]:
        ($: Polygon, signed?) => {
            const area = polyArea($.points);
            return signed ? area : Math.abs(area);
        },

    [Type.RECT]:
        ($: Rect) =>
            $.size[0] * $.size[1],

    [Type.TRIANGLE]:
        ($: Triangle, signed?) => {
            const area = 0.5 * signedArea2(...<[Vec, Vec, Vec]>$.points);
            return signed ? area : Math.abs(area);
        },

});

area.isa(Type.ARC, Type.POINTS);
area.isa(Type.CUBIC, Type.POINTS);
area.isa(Type.LINE, Type.POINTS);
area.isa(Type.POLYLINE, Type.POINTS);
area.isa(Type.QUAD, Type.POLYGON);
area.isa(Type.QUADRATIC, Type.POINTS);
area.isa(Type.RAY, Type.POINTS);
