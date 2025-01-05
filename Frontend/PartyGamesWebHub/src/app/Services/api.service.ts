import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8181';

  constructor(private http: HttpClient) {}

  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  getUser(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`);
  }

  loginUser(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/loginUser`, data);
  }

  registerUser(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/registerUser`, data);
  }

  fetchFriends(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}/friends`);
  }

  fetchPendingRequests(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}/pending-friend-requests`);
  }

  sendFriendRequest(userId: string, friendId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}/send-friend-request/${friendId}`);
  }

  acceptFriendRequest(userId: string, requestId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}/accept-friend-request/${requestId}`);
  }

  rejectFriendRequest(userId: string, requestId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}/reject-friend-request/${requestId}`);
  }

  removeFriend(userId: string, friendId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}/remove-friend/${friendId}`);
  }
  
  getUserStatistics(): Observable<any> {
    const mockStatistics = {
      gameCount: 4,
      friendCount: 6,
      avgRating: 3.8,
      accountCreated: '2024-08-12',
    };
    return of(mockStatistics);
  }
}
