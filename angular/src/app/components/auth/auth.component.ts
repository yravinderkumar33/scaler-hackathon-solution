import { Component, Inject, OnInit } from '@angular/core';
import { TAB_ID } from 'src/app/providers/tab-id.provider';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(@Inject(TAB_ID) readonly tabId: number) { }
  ngOnInit(): void {
  }

  login() {
    console.log({ tabId: this.tabId });
    chrome.tabs.sendMessage(this.tabId, {
      type: "AUTHENTICATE",
      payload: {
        success: true
      },
    });
  }

}
