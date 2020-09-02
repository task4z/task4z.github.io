import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllQuestions } from 'src/app/models/all-questions.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
  }

  getQuestions(): Observable<AllQuestions[]> {
    return this.http.get<AllQuestions[]>('../../../assets/db.json');
  }
}
