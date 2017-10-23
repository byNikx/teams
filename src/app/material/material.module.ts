import { NgModule } from '@angular/core';
import {
	MatButtonModule, MatIconModule, MatToolbarModule,
	MatListModule, MatCardModule, MatProgressSpinnerModule,
	MatDialogModule, MatCheckboxModule, MatRadioModule,
	MatTabsModule, MatSelectModule, MatSliderModule,
	MatTableModule, MatExpansionModule, MatSidenavModule,
	MatGridListModule, MatFormFieldModule, MatTooltipModule,
	MatMenuModule
} from '@angular/material';

const Mat_MODULES = [
	MatButtonModule, MatIconModule, MatToolbarModule,
	MatListModule, MatCardModule, MatProgressSpinnerModule,
	MatDialogModule, MatCheckboxModule, MatRadioModule,
	MatTabsModule, MatSelectModule, MatSliderModule,
	MatTableModule, MatTableModule, MatExpansionModule,
	MatSidenavModule, MatGridListModule, MatFormFieldModule,
	MatSliderModule,MatMenuModule, MatTooltipModule
]

@NgModule({
  imports: [].concat(Mat_MODULES),
  exports:[].concat(Mat_MODULES),
  declarations: []
})
export class MaterialModule { }
