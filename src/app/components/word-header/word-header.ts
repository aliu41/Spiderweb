import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faToggleOff,faFloppyDisk, faArrowRotateBackward, faArrowRotateForward, faMagnifyingGlass, faUser, faWindowMinimize, faWindowClose, faWindowRestore } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-word-header',
  imports: [FontAwesomeModule],
  templateUrl: './word-header.html',
  styleUrl: './word-header.scss',
})
export class WordHeader {
  protected readonly icons = {
    faToggleOff: faToggleOff,
    faFloppyDisk: faFloppyDisk,
    faArrowRotateBackward: faArrowRotateBackward,
    faArrowRotateForward: faArrowRotateForward,
    faMagnifyingGlass: faMagnifyingGlass,
    faUser: faUser,
    faWindowMinimize: faWindowMinimize,
    faWindowClose: faWindowClose,
    faWindowRestore: faWindowRestore
  }
}
