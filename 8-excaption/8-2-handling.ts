class NetWorkClient {
  tryConnect(): void {
    throw new Error("no network");
  }
}

class UserService {
  constructor(private client: NetWorkClient) {}

  login() {
    this.client.tryConnect();
    // login...
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    try {
      this.userService.login();
    } catch (error) {
      // show dialog to user
    }
  }
}

// 중요한 것은 에러가 발생했을 때 try, catch문의 위치를 잘 잡는게 중요하다. 문제가 발생했을 때 그것을 user나 내부적으로 잘 처리해야하기 때문에 적절한 위치를 잡는게 중요하다.
const client = new NetWorkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
