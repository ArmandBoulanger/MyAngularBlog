import { Component } from '@angular/core';
import {POST_MOCKED} from '../mocks/post.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postMocked = POST_MOCKED;
}
