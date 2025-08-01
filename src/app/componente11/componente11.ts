import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: './componente11.html',
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionOverviewExample {
  readonly panelOpenState = signal(false);
}
