import StepsScreen from '../screens/steps/Steps';
import LoginScreen from '../screens/login/Login';
import NotesScreen from '../screens/notes/Notes';

export const initialRoute = 'Notes';
export const routes = [
  {
    name: 'Welcome',
    component: StepsScreen,
    showMenuHeader: false,
    options: { headerShown: false },
  }, {
    name: 'Login',
    component: LoginScreen,
    showMenuHeader: false,
    options: { headerShown: false },
  },
  {
    name: 'Notes',
    showMenuHeader: true,
    component: NotesScreen,
    options: { title: 'My notes' }
  }
];
