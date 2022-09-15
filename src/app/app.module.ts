import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteWithHighlightComponent } from './auto-complete-with-highlight/auto-complete-with-highlight.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { HighlightPipe } from './auto-complete-with-highlight/highlight.pipe';
import { CustomisedAutoCompleteComponent } from './customised-auto-complete/customised-auto-complete.component';
import { TestTemplateComponent } from './test-template/test-template.component';
import { TestTemplateChild1Component } from './test-template-child1/test-template-child1.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteWithHighlightComponent,
    HighlightPipe,
    CustomisedAutoCompleteComponent,
    TestTemplateComponent,
    TestTemplateChild1Component,
    AutoCompleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
