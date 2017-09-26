import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-simple-modal',
    templateUrl: 'simple-modal.html',
    styles: [`
            .modal-body { height: 350px; }
        `]
})

export class SimpleModalComponent {
    @Input() title: string;
}
