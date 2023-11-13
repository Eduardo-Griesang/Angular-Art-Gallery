import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ArtsApiService {

  constructor() { }

  artsAPI = axios.create({baseURL: "http://localhost:8000/art"})

  getArts () {
    const response = this.artsAPI.get('/').then((res) => {res.data})

    return response
  }
}
