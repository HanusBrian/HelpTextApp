import { Injectable } from '@angular/core';

import { HelptextData } from './helptextData';

@Injectable()

export class HelpTextService {
    getHelptextArray(): Promise<Object[]> {
        return Promise.resolve(HelptextData);
    }
}