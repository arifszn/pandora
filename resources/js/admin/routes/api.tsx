import { API_URL } from '../../shared/utils';

type Routes = {
  [name: string]: string;
};

export const apiRoutes: Routes = {
  login: `${API_URL}/admin/login`,
};
