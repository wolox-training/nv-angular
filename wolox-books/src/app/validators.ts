import { Validators } from '@angular/forms';

export const email = [null, Validators.compose([Validators.required])];
export const password = [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])];
export const name = [null, Validators.compose([Validators.required])];     

