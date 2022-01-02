import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private aciveRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.aciveRoute.snapshot.params['id']);
    this.aciveRoute.params.subscribe((params: Params) => { this.server = this.serversService.getServer(+params['id']) ; } );
  }
  onEdit() {
    this.route.navigate(['servers', this.server.id, 'edit'], { queryParamsHandling: 'preserve'});
  }
}
