import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzI18nService } from '../i18n/nz-i18n.service';

import { DateRangePickerComponent } from './date-range-picker.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nz-week-picker',
  templateUrl: './date-range-picker.component.html',
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => NzWeekPickerComponent)
  } ],
  host: {
    '[class.ant-calendar-picker]': 'true'
  }
})

export class NzWeekPickerComponent extends DateRangePickerComponent {
  showWeek: boolean = true;

  constructor(i18n: NzI18nService, cdr: ChangeDetectorRef) {
    super(i18n, cdr);
  }
}
