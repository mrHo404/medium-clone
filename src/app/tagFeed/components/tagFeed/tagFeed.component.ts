import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  apiUrl: string = ''
  tagName?: string | null

  constructor(private route: ActivatedRoute) {}

  // TODO detect tag change when changing from one tag feed to another
  ngOnInit(): void {
    this.tagName = this.route.snapshot.paramMap.get('slug')
    this.apiUrl = `/articles?tag=${this.tagName}`
  }
}
