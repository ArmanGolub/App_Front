import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuth } from '@/providers';
import { MainLayout } from '@/layouts';
import {
  ApplicationsPage,
  ControlPanelPage,
  ArticlesPage,
  SignInPage,
  NewsPage,
  FactsPage,
  ApplicationPage,
  OrganizationPage,
  OrganizationsPage,
} from '@/pages';
import { ProtectedRoute } from '@/components';

const Router = () => {
  const { token } = useAuth();

  return (
    <Routes>
      <Route path="/auth/*">
        <Route path="sign-in" element={<SignInPage />} />

        <Route path="*" element={<Navigate to="sign-in" />} />
      </Route>

      <Route element={<ProtectedRoute isAllowed={Boolean(token)} redirectTo="/auth/sign-in" />}>
        <Route path="/*" element={<MainLayout />}>
          <Route path="news" element={<NewsPage />}>
            <Route index element={<ArticlesPage />} />
            <Route path="facts" element={<FactsPage />} />
          </Route>

          <Route path="applications">
            <Route index element={<ApplicationsPage />} />
            <Route path=":applicationId" element={<ApplicationPage />} />
          </Route>

          <Route path="resources">
            <Route index element={<OrganizationsPage />} />
            <Route path=":resourceId" element={<OrganizationPage />} />
          </Route>

          <Route path="control-panel" element={<ControlPanelPage />} />

          <Route path="*" element={<Navigate to="news" />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
