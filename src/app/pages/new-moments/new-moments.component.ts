import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/interfaces/Moment';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.scss'],
})
export class NewMomentsComponent implements OnInit {
  public btnText = 'Share';

  constructor(
    private momentService: MomentService,
    private messageService: MessagesService,
    private route: Router
  ) {}

  ngOnInit = (): void => {};

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    //Enviar ara o service
    await this.momentService.createMoment(formData).subscribe();

    //exibir message
    this.messageService.add('Added moment with success.');

    //redirect
    this.route.navigate(['/']);
  }
}
