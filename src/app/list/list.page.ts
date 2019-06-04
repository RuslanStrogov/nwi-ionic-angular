import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    items: any[] = [];

    constructor(private storage: Storage) {
        this.items = [];
    }

    ngOnInit() {
        this.initItems();
    }

    initItems() {
        this.storage.get('items').then((items) => {
            if(items) {
                this.items = JSON.parse(items);
            }
        });
    }

    dateToString(date) {
        return date.toTimeString().substr(0, 8);
    }

    addItem(form) {
        // Set current date
        form.value.date = this.dateToString(new Date());
        // Add item to list
        this.items.push(form.value);
        // Save to storage list
        this.storage.set('items', JSON.stringify(this.items));
        // Reset form
        form.reset();
    }

}
