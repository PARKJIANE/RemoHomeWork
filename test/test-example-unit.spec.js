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
            var a=aParam;
            var b=bParam;
            var c=a&&b;
            const result = sum(aParam, bParam);
            expect(result).to.be.equals(expectResult);
        })
        it("should throw error by aparam",()=>{
            let isThrowError;
            try{
                sum(a === undefined);
            }catch(error) {
                isThrowError = error;
            }
            if(a=undefined) ()=> {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })
        it("should throw error by bparam",()=>{
            let isThrowError;
            try{
                sum(b === undefined);
            }catch(error) {
                isThrowError = error;
            }
            if(b=undefined) ()=> {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })
        it("should throw error by a&bparam",()=>{
            let isThrowError;
            try{
                sum(c === undefined);
            }catch(error) {
                isThrowError = error;
            }
            if(c=undefined) ()=> {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })
        })

    })
    describe("subtract function spec", () => {
        it('1-1 = 0', () => {
            const aParam = 1;
            const bParam = 1;
            const expectResult = 0;
            var a=aParam;
            var b=bParam;
            var c=a&&b;
            const result = sub(aParam, bParam);
            expect(result).to.be.equals(expectResult);
        })
        it("should throw error by a param",()=>{
            let isThrowError;
            try{
                sub(a===undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by b param",()=>{
            let isThrowError;
            try{
                sub(b===undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&b param",()=>{
            let isThrowError;
            try{
                sub(c===undefined);
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
            var a=aParam;
            var b=bParam;
            var c=a&&b;
            const result = div(aParam, bParam);
            expect(result).to.be.equals(expectResult);
        })
       
        it("should throw error by a param",()=>{
            let isThrowError;
            try{
                div(a===undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by b param",()=>{
            let isThrowError;
            try{
                div(b===undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&b param",()=>{
            let isThrowError;
            try{
                div(c===undefined);
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
            var a=aParam;
            var b=bParam;
            var c=a&&b;
            const result = mul(aParam, bParam);
            expect(result).to.be.equals(expectResult);
        })
        it("should throw error by a param",()=>{
            let isThrowError;
            try{
                mul(a===undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        
        it("should throw error by b param",()=>{
            let isThrowError;
            try{
                mul(b===undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
        it("should throw error by a&b param",()=>{
            let isThrowError;
            try{
                mul(c===undefined);
            }catch(error) {
                isThrowError = error;
            }
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
        })
    })