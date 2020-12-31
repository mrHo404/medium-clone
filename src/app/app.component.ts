import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Store} from '@ngrx/store'
import {getCurrentUserAction} from './auth/store/actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(
      'HERE',
      this.route.url.subscribe(() => console.log)
    )
    this.store.dispatch(getCurrentUserAction())
  }
}
