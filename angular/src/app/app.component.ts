import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    chrome.runtime.onMessage.addListener((message, sender, response) => {
      const { type, payload } = message;
      console.log(message);
      response({ acknowledged: true });
    })
  }
}
