import './App.css';
import { Register } from './routes/register/Register';
import { Login } from './routes/login/Login';
import { Navbar } from './components/navbar/Navbar';
import { Dashboard } from './routes/dashboard/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Sidebar } from './components/sidebar/Sidebar';
import { Create } from './routes/create/Create';
import { SinglePost } from './routes/singlepost/SinglePost';
import { PostPreview } from './routes/postpreview/PostPreview';
import { Edit } from './routes/edit/Edit';
import { PreviewEdit } from './routes/editpreview/PreviewEdit';
import { Home } from './routes/home/Home';
function App() {
  
  return (
    <div className="App">
  <BrowserRouter>
        <Navbar />
        <div className='page'>

        
          <Sidebar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create" element={<Create />} />
            <Route path='/singlepost/:postid' element={<SinglePost />} />
            <Route path='previewpost' element={<PostPreview />} />
            <Route path='/dashboard/:id/edit' element={<Edit />} />
            <Route path='/editpreview/:id' element={<PreviewEdit />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
