import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../Models/quote';

@Component({
  selector: 'app-volume-list',
  templateUrl: './volume-list.component.html',
  styleUrls: ['./volume-list.component.css']
})
export class VolumeListComponent implements OnInit {

  @Input()
  quote?: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
