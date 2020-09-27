const Screens = {
  OnboardingStack: 'OnboardingStack',
  AppStack: 'AppStack',
  WelcomeScreen: 'WelcomeScreen',
  HomeScreen: 'HomeScreen',
  ButtonOptionScreen: 'ButtonOptionScreen',
};

const regex = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  name: /^[A-Za-z\s]+$/
}

export { Screens, regex };
