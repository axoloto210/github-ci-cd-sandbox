import { describe } from "node:test";
import { addTwo } from "..";


describe('引数に2を加算',()=>{
    test('3 + 2',()=>{
        expect(addTwo(3)).toBe(5)
    })

    test('4 + 2', () =>{
        expect(addTwo(4)).toBe(6)
    })
})