import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commit-revisions',
  templateUrl: './commit-revisions.component.html',
  styleUrls: ['./commit-revisions.component.scss']
})
export class CommitRevisionsComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
