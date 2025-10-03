import type {Route} from './+types/collections';
import {redirect} from 'react-router';

export async function loader() {
  // Redirect to the home page
  return redirect('/');
}

export default function Collections() {
  // This component will never render because of the redirect in the loader
  return null;
}
