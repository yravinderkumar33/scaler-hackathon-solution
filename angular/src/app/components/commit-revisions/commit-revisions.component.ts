import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commit-revisions',
  templateUrl: './commit-revisions.component.html',
  styleUrls: ['./commit-revisions.component.scss']
})
export class CommitRevisionsComponent implements OnInit {

  async getActiveTabURL() {
    const tabs = await chrome.tabs.query({
      currentWindow: true,
      active: true
    });

    return tabs[0];
  }

  data = [
    {
      version: "v1",
      timeTaken: "10 Mins"
    },
    {
      version: "v2",
      timeTaken: "45 Mins"
    },
    {
      version: "v3",
      timeTaken: "15 Mins"
    },
    {
      version: "v4",
      timeTaken: "2 Mins"
    }
  ]

  constructor() { }

  async fetchRevisions() {
    const currentTab = await this.getActiveTabURL();
    const currentUrl = currentTab.url;
    const regex = /.*\/class\/(.*)\/assignment\/problems\/(.*)\/.*/;
    const [, classId, problemId] = currentUrl.match(regex) || [];
    if (classId && problemId) {
      const key = `${classId}_${problemId}`
      chrome.storage.sync.get([key], (data) => {
        this.data = data[key] ? JSON.parse(data[key]) : [];;
      });
    }
  }

  ngOnInit(): void {
    // this.fetchRevisions();
  }

}
