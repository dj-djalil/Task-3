import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {


@Input() item! :any ;
  constructor() { }


  ngOnInit(): void {

  }

}
