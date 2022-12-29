import {Controller, Get, Req, Res} from '@nestjs/common';
import {UiService} from "./ui.service";

@Controller('ui')
export class UiController {
    constructor(private readonly uiService: UiService) {}

    @Get()
    getUI() {
        return this.uiService.getUI()
    }
}
