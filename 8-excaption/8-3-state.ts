{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

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
        // if(error instanceof OfflineError){} <= 이러한 문장이 불가능하다. error는 any type으로 전달이 되기 때문에 타입을 확인할 수 없다.
        // 따라서 세부적인 error type을 나누어서 적용하고 싶다면 errorState를 적용하는 것이 좋다.
      }
    }
  }

  // 중요한 것은 에러가 발생했을 때 try, catch문의 위치를 잘 잡는게 중요하다. 문제가 발생했을 때 그것을 user나 내부적으로 잘 처리해야하기 때문에 적절한 위치를 잡는게 중요하다.
  const client = new NetWorkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
