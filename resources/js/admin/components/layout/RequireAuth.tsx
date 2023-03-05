import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { webRoutes } from '../../routes/web';
import { RootState } from '../../store';

export type RequireAuthProps = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  const admin = useSelector((state: RootState) => state.admin);
  let location = useLocation();

  if (!admin) {
    return (
      <Navigate to={webRoutes.login.url} state={{ from: location }} replace />
    );
  }

  return children;
};

export default RequireAuth;
