import { useRoute } from './lib/router';
import HomePage from './pages/HomePage';
import CreateProfilePage from './pages/CreateProfilePage';
import FeaturesPage from './pages/FeaturesPage';
import ExamplesPage from './pages/ExamplesPage';
import PublishPage from './pages/PublishPage';

export default function App() {
  const route = useRoute();

  switch (route.name) {
    case 'home':
      return <HomePage />;
    case 'create':
      return <CreateProfilePage />;
    case 'features':
      return <FeaturesPage />;
    case 'examples':
      return <ExamplesPage />;
    case 'publish':
      return <PublishPage />;
  }
}
