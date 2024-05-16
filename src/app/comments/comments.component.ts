import { Component } from "@angular/core";

@Component({
  selector: "app-comments",
  standalone: true,
  imports: [],
  template: `
    <h3>comentarios del lorem</h3>
    <img
      src="https://www.dictionary.com/e/wp-content/uploads/2018/03/This-is-Fine-300x300.jpg"
    />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde rem impedit
      omnis ipsum mollitia, pariatur tempora quod architecto harum similique
      placeat eum? Similique id blanditiis cum culpa voluptate accusantium
      excepturi?
    </p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;
  }`,
})
export class CommentsComponent {}
