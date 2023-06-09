import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  constructor(){
    console.clear();
  }

  treeMethod<T>(){
    console.log('Inner Tree');
  }

  ngOnInit(): void {
    this.treeMethod();
  }
}
