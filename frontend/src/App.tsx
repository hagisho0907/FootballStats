import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/common/Layout';
import { HomePage } from './pages/HomePage';
import { CalendarPage } from './pages/CalendarPage';
import { StatsPage } from './pages/StatsPage';
import { AIBuddyPage } from './pages/AIBuddyPage';
import { SupportPage } from './pages/SupportPage';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/ai-buddy" element={<AIBuddyPage />} />
              <Route path="/support" element={<SupportPage />} />
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;