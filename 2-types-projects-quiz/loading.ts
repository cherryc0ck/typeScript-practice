{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (state: ResourceLoadState, response?: Object, reson?: string) => {
    if (state.state === 'loading') {
      console.log('loading...');
    } else if (state.state === 'success') {
      console.log('loaded');
    } else if (state.state === 'fail') {
      console.log('no network');
    } else {
      throw new Error (`no state: ${state}`);
    }
  };



  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
