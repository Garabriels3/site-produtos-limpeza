import { Injectable, inject } from '@angular/core';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  private storage: Storage = inject(Storage);

  getImageUrl(path: string): Observable<string> {
    return from(getDownloadURL(ref(this.storage, path)));
  }
}
