import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'cat-detail',
    templateUrl: './cat-detail.component.html',
    styleUrls: ['./cat-detail.component.scss']
})
export class CatDetailComponent implements OnInit, OnDestroy {
    private sub: any;
    id: number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
