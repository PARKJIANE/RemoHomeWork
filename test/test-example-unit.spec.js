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
        it("should throw error by a param",()=>{
            let isThrowError;
            try{
                sum();
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by b param",()=>{
            let isThrowError;
            try{
                sum();
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&b param",()=>{
            let isThrowError;
            try{
                sum();
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
        it("should throw error by a param",()=>{
            let isThrowError;
            try{
                sub();
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by b param",()=>{
            let isThrowError;
            try{
                sub();
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&b param",()=>{
            let isThrowError;
            try{
                sub();
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
       
        it("should throw error by a param",()=>{
            let isThrowError;
            try{
                div();
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by b param",()=>{
            let isThrowError;
            try{
                div();
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&b param",()=>{
            let isThrowError;
            try{
                div();
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
        it("should throw error by a param",()=>{
            let isThrowError;
            try{
                mul();
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        
        it("should throw error by b param",()=>{
            let isThrowError;
            try{
                mul();
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&b param",()=>{
            let isThrowError;
            try{
                mul();
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
    })