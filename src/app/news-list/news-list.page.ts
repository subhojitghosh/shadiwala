import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {

  data:any;

  constructor() { }

  ngOnInit() {
    fetch('./assets/data/news.json')
    .then(res=>res.json())
    .then(json=>{
      this.data = json;
      console.log(this.data)
    })
  }

}
