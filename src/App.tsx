/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';
import Home from './pages/Home';
import About from './pages/About';
import Industries from './pages/Industries';
import Products from './pages/Products';
import Community from './pages/Community';
import Support from './pages/Support';
import PostDetail from './pages/PostDetail';
import Dashboard from './pages/admin/Dashboard';
import Posts from './pages/admin/Posts';
import Settings from './pages/admin/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="industries" element={<Industries />} />
          <Route path="products" element={<Products />} />
          <Route path="community" element={<Community />} />
          <Route path="community/:id" element={<PostDetail />} />
          <Route path="support" element={<Support />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<Posts />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
