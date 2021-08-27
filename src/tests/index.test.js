import {printerError} from "./index";

test('should work', () => {
    
    let str = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    expect(printerError(str)).toBe('3/56')
})

test('should work too', () => {

    const str2 = 'abbbcceeh'
    expect(printerError(str2)).toBe('0/9')
})