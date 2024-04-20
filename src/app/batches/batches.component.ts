import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Batch, BatchService } from './services/batch-service.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-batches',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.scss'
})
export class BatchesComponent {
  readonly batches$!: Observable<Batch[]>;

  constructor(private batchService: BatchService) {
    this.batches$ = this.batchService.getBatches().pipe(
      (batches) => {
        return batches;
      }
    );
  }

}
