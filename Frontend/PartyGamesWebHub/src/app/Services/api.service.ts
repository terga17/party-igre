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

  getUser(userId: string): Observable<any> { // returns JSON object of a user
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }

  getUsers(): Observable<any> { // returns JSON of all users : response.users
    return this.http.get(`${this.apiUrl}/user`);
  }

  loginUser(data: { username: string; password: string }): Observable<any> { // returns JSON of logged in user : response.user
    return this.http.post(`${this.apiUrl}/loginUser`, data);
  }

  registerUser(data: { username: string; password: string }): Observable<any> { // returns JSON of a registered user : response.user
    return this.http.post(`${this.apiUrl}/registerUser`, data);
  }

  fetchFriends(userId: string): Observable<any> { // return JSON of users friends : response.user.friends
    return this.http.get(`${this.apiUrl}/user/${userId}/friends`);
  }

  fetchPendingRequests(userId: string): Observable<any> { // returns JSON of pending friend requests : response.pending_requests 
    return this.http.get(`${this.apiUrl}/user/${userId}/pending-friend-requests`);
  }

  sendFriendRequest(userId: string, friendId: string): Observable<any> { // sends a friend request to another user
    return this.http.get(`${this.apiUrl}/user/${userId}/send-friend-request/${friendId}`);
  }

  acceptFriendRequest(userId: string, requestId: string): Observable<any> { // accepts a friend request based on request ID
    return this.http.get(`${this.apiUrl}/user/${userId}/accept-friend-request/${requestId}`);
  }

  rejectFriendRequest(userId: string, requestId: string): Observable<any> { // rejects a friend request based on request ID
    return this.http.get(`${this.apiUrl}/user/${userId}/reject-friend-request/${requestId}`);
  }

  removeFriend(userId: string, friendId: string): Observable<any> { // removes two friends
    return this.http.get(`${this.apiUrl}/user/${userId}/remove-friend/${friendId}`);
  }

  getGames(): Observable<any> { // returns a list of games + ratings : response.games
    return this.http.get(`${this.apiUrl}/games`)
  }  

  playGame(gameId: string, userId: string): Observable<any> { // updates games played count
    return this.http.get(`${this.apiUrl}/games/${gameId}/user/${userId}/increment`)
  }  

  gamesPlayed(gameId: string, userId: string): Observable<any> { // returns playcount of a game : response.games_played
    return this.http.get(`${this.apiUrl}/games/${gameId}/user/${userId}/play-count`)
  }  

  rateGame(gameId: string, userId: string, rating: string): Observable<any> { // changes the rating for a game of a user - doesn't work, if play count is NULL for that user
    return this.http.get(`${this.apiUrl}/games/${gameId}/user/${userId}/rate/${rating}`)
  }
  
  getGameUserRating(gameId: string, userId: string): Observable<any> { // gets current users rating for a certain game
    return this.http.get(`${this.apiUrl}/games/${gameId}/user/${userId}/rating`)
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
