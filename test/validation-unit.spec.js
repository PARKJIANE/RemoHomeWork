const {expect} = require("chai");
const { it } = require("mocha");
const {exampleFunction, validation, sum, sub, div, mul} = require("../src/functions");
describe("테스트 작성 예", () => {
    before(() =>{})
    after(() =>{})
    describe("example function spec", () => {
        it('should return true',  () => {
            const result = exampleFunction();
            expect(result).to.be.equals(true);
        });
    }) 
    })
    describe("validation function spec", () => { 
            it('1+1 = 2', () => {
            const aParam = 1;
            const bParam = 1;
            const expectResult = 2;
            const result = sum(aParam, bParam);
            expect(result).to.be.equals(expectResult);
        })  
        it("should throw error by aparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                validation(undefined,b);
            }catch(error) {
                isThrowError=error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                validation(a,undefined);
            }catch(error) {
                isThrowError=error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                validation(undefined,undefined);
            }catch(error) {
                isThrowError=error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        })
    describe("validation function spec", () => {
        it('1-1 = 0', () => {
            const aParam = 1;
            const bParam = 1;
            const expectResult = 0;
            const result = sub(aParam, bParam);
            expect(result).to.be.equals(expectResult);
        })
        it("should throw error by aparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                validation(undefined,b);
            }catch(error) {
                isThrowError=error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                validation(a,undefined);
            }catch(error) {
                isThrowError=error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                validation(undefined,undefined);
            }catch(error) {
                isThrowError=error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
    })
    describe("validation function spec", () => {
        it('1/1 = 1', () => {
            const aParam = 1;
            const bParam = 1;
            const expectResult = 1;
            const result = div(aParam, bParam);
            expect(result).to.be.equals(expectResult);
        })
        it("should throw error by aparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                validation(undefined,b);
            }catch(error) {
                isThrowError=error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                validation(a,undefined);
            }catch(error) {
                isThrowError=error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                validation(undefined,undefined);
            }catch(error) {
                isThrowError=error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
    })
    describe("validation function spec", () => {
        it('1*1 = 1', () => {
            const aParam = 1;
            const bParam = 1;
            const expectResult = 1;
            const result = mul(aParam, bParam);
            expect(result).to.be.equals(expectResult);
        })
        it("should throw error by aparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                validation(undefined,b);
            }catch(error) {
                isThrowError=error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                validation(a,undefined);
            }catch(error) {
                isThrowError=error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                validation(undefined,undefined);
            }catch(error) {
                isThrowError=error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
    })