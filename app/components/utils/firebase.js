import { getAuth } from 'firebase/auth';
import app from '../../backend/firebase.config';

// Get Auth instance from the existing app
export const auth = getAuth(app);

export default app; 