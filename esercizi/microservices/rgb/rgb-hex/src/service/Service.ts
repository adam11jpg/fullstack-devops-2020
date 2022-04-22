import colorConverter from 'color-convert'
 interface TtfHex {
    readonly hex: string;
}
 interface TtfRgb {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
}
export function convert(color: TtfRgb) {
return colorConverter.rgb.hex(color.red, color.green , color.blue)
}
