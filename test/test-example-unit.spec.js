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
            const a=aParam;
            const b=bParam;
            const c= a<0 && b<0;
            const result = sum(aParam, bParam);
            expect(result).to.be.equals(expectResult);
        })
        it("should throw error by aparam",()=>{
            let aParam=1;
            let a=aParam;
            let isThrowError;
            try{
                sum(a);
            }catch(error) {
                isThrowError = error;
            }
            if(a=undefined) ()=> {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })
        it("should throw error by bparam",()=>{
            let bParam=1;
            let b=bParam;
            let isThrowError;
            try{
                sum(b);
            }catch(error) {
                isThrowError = error;
            }
            if(b=undefined) ()=> {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })
        it("should throw error by a&bparam",()=>{
            let aParam=1;
            let bParam=1;
            let a=aParam;
            let b=bParam;
            let c= a<0 && b<0;
            try{
                sum(c);
            }catch(error) {
                isThrowError = error;
            }
            if(c=a<0 && b<0) ()=> {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘다 마이너스");
            }
        })
        })

    })
    describe("subtract function spec", () => {
        it('1-1 = 0', () => {
            const aParam = 1;
            const bParam = 1;
            const expectResult = 0;
            const a=aParam;
            const b=bParam;
            const c=a<0 && b<0;
            const result = sub(aParam, bParam);
            expect(result).to.be.equals(expectResult);
        })
        it("should throw error by a param",()=>{
            let aParam=1;
            let a=aParam;
            let isThrowError;
            try{
                sub(a);
            }catch(error) {
                isThrowError = error;
            }
            if(a=undefined) () => {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })
        it("should throw error by b param",()=>{
            let bParam=1;
            let b=bParam;
            let isThrowError;
            try{
                sub(b);
            }catch(error) {
                isThrowError = error;
            }
            if(b=undefined) () => {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })
        it("should throw error by a&b param",()=>{
            let aParam=1;
            let bParam=1;
            let a=aParam;
            let b=bParam;
            let c= a<0 && b<0;
            let isThrowError;
            try{
                sub(c);
            }catch(error) {
                isThrowError = error;
            }
            if(c=a<0 && b<0) () => {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })

    })
    describe(" divide function spec", () => {
        it('1/1 = 1', () => {
            const aParam = 1;
            const bParam = 1;
            const expectResult = 1;
            const a=aParam;
            const b=bParam;
            const c=a<0 && b<0;
            const result = div(aParam, bParam);
            expect(result).to.be.equals(expectResult);
        })
       
        it("should throw error by a param",()=>{
            let aParam=1;
            let a=aParam;
            let isThrowError;
            try{
                div(a);
            }catch(error) {
                isThrowError = error;
            }
            if(a=undefined) () => {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })
        it("should throw error by b param",()=>{
            let bParam=1;
            let b=bParam;
            let isThrowError;
            try{
                div(b);
            }catch(error) {
                isThrowError = error;
            }
            if(b=undefined) () => {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })
        it("should throw error by a&b param",()=>{
            let aParam=1;
            let bParam=1;
            let a=aParam;
            let b=bParam;
            let c= a<0 && b<0;
            let isThrowError;
            try{
                div(c);
            }catch(error) {
                isThrowError = error;
            }
            if(c=a<0 && b<0) () => {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })

    })
    describe("multiply function spec", () => {
        it('1*1 = 1', () => {
            const aParam = 1;
            const bParam = 1;
            const expectResult = 1;
            const a=aParam;
            const b=bParam;
            const c=a<0 && b<0;
            const result = mul(aParam, bParam);
            expect(result).to.be.equals(expectResult);
        })
        it("should throw error by a param",()=>{
            let aParam=1;
            let a=aParam;
            let isThrowError;
            try{
                mul(a);
            }catch(error) {
                isThrowError = error;
            }
            if(a=undefined) () => {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })
        
        it("should throw error by b param",()=>{
            let bParam=1;
            let b=bParam;
            let isThrowError;
            try{
                mul(b);
            }catch(error) {
                isThrowError = error;
            }
            if(b=undefined) () => {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })
        it("should throw error by a&b param",()=>{
            let aParam=1;
            let bParam=1;
            let a=aParam;
            let b=bParam;
            let c= a<0 && b<0;
            let isThrowError;
            try{
                mul(c);
            }catch(error) {
                isThrowError = error;
            }
            if(c=a<0 && b<0) () => {
            expect(isThrowError).to.be.not.a("undefined");
            expect(isThrowError.message).to.be.equals("둘중에 하나 언디파인");
            }
        })
    })