{
  /*
    * Union Types: OR
  */  
  
  
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login (): LoginState {
    return {
      response: {
        body: 'logged in!',
      }
    }
  } 


  function printLoginState (state: LoginState) {
    if ('response' in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  };
  printLoginState(login());
}