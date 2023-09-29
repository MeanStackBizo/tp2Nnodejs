"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class server {
    constructor(port) {
        this.port = port;
    }
    ;
    start() {
        var content = `import express = require(express)
                import { Request,Response } from express;
        
        export default class server{
            constructor(private port:number){};
        
            public start():void
            {
                const app = express();
                app.get('/',(req:Request,res:Response)=>{
                    res.send(TypeScript start);
                });
                app.listen(this.port,()=>{
                    console.log(Server Start);
                    
                })
            }
        }`;
        const app = express();
        app.get('/', (req, res) => {
            res.send(`TypeScript start <br> this is code <br> ${content}`);
        });
        app.listen(this.port, () => {
            console.log("Server Start");
        });
    }
}
exports.default = server;
