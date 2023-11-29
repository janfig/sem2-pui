import {Injectable} from '@angular/core';

export interface User {
  login: string,
  email: string,
  password: string,
}

@Injectable()
export class MockUserService {
  private users!: User[]

  loggedUser: User | null

  constructor() {
    this.loggedUser = null
    this.users = mockUsers
  }

  login(login: string, password: string): User|null {
    return this.loggedUser = this.users.find(user => user.login == login && user.password == password) || null
  }
}

const mockUsers: User[] = [
  {
    login: "asd",
    password: "asd",
    email: "zbyszard@example.com"
  }
]
