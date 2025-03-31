import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { importProvidersFrom } from '@angular/core';

export const MATERIAL_IMPORTS = [
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
];

export const MATERIAL_PROVIDERS = [
    importProvidersFrom(...MATERIAL_IMPORTS), // ✅ Provides Angular Material components
    provideNativeDateAdapter(), // ✅ Provides date adapter for Material Datepicker
];