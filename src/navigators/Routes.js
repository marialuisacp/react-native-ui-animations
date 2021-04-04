import StepsScreen from '../screens/steps/Steps';
import LoginScreen from '../screens/login/Login';

export const initialRoute = 'Welcome';
export const routes = [
  {
    name: 'Welcome',
    component: StepsScreen,
  }, {
    name: 'Login',
    component: LoginScreen,
    options: { headerShown: false },
  }
];