
import { animate, style, transition, trigger } from '@angular/animations';


export function routerTransition() {
    return slideToLeft();
}
export function slideToLeft() {
    return trigger('routerTransition', [
        transition(':enter', [
            style({ transform: 'translateX(100%)', position: 'fixed', width: '100%' }),
            animate('0.1s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)', position: 'fixed', width: '100%' }),
            animate('0.1s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
