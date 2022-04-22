import colorConverter from 'color-convert'


export function convert(color: any) {
    return colorConverter.hsl.hex(color)
   }