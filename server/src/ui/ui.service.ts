import { Injectable } from '@nestjs/common';
import * as fs from "fs";
import * as Path from "path";
import HelloWorld from "./UI/HelloWorld";

@Injectable()
export class UiService {


    getUI() {

        //const path = Path.join(__dirname, '../../', '/src/ui/UI/HelloWorld.tsx')
        //const file = fs.readFileSync(path,"utf8")
        //console.log(file)

        return HelloWorld
    }
}
