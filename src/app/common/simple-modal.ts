import { Component, Input } from '@angular/core';

@Component({
    selector: 'simple-modal',
    templateUrl: 'simple-modal.html',
    styles: [`
            .modal-body { height: 300px; }
        `]
})

export class SimpleModalComponent {
    @Input() title: string;

     
}