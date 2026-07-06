import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ComingSoonPage from './pages/ComingSoonPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Week-1 stubs — all non-home routes show a coming-soon placeholder */}
      <Route path="/programs" element={<ComingSoonPage />} />
      <Route path="/programs/:slug" element={<ComingSoonPage />} />
      <Route path="/universities" element={<ComingSoonPage />} />
      <Route path="/universities/:slug" element={<ComingSoonPage />} />
      <Route path="/about" element={<ComingSoonPage />} />
      <Route path="/contact" element={<ComingSoonPage />} />
      <Route path="/apply" element={<ComingSoonPage />} />
      <Route path="/login" element={<ComingSoonPage />} />

      {/* Catch-all */}
      <Route path="*" element={<ComingSoonPage />} />
    </Routes>
  )
}
