const {expect} = require("chai");
const { it } = require("mocha");
const {exampleFunction, sum, sub, div, mul} = require("../src/functions");
describe("테스트 작성 예", () => {
    before(() =>{})
    after(() =>{})
    describe("example function spec", () => {
        it('should return true',  () => {
            const result = exampleFunction();
            expect(result).to.be.equals(true);
        });
    })
    describe("sum function spec", () => {
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
                sum(undefined,b);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                sum(a,undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                sum(undefined,undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        })
    })
    describe("subtract function spec", () => {
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
                sub(undefined,b);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                sub(a,undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                sub(undefined,undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
    })
    describe(" divide function spec", () => {
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
                div(undefined,b);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                div(a,undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                div(undefined,undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
    })
    describe("multiply function spec", () => {
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
                mul(undefined,b);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                mul(a,undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&bparam",()=>{
            const a=1;
            const b=1;
            let isThrowError;
            try{
                mul(undefined,undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
    })