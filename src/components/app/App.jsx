import { MenuPage, HomePage, ContactsPage } from '../pages';
import {Route, Routes} from 'react-router-dom';

const App = () => {
    return ( 
        <>
            <Routes>    
                <Route path="/" element={<HomePage/>}/>
                <Route path="/menu" element={<MenuPage/>}/> 
                <Route path="/contacts" element={<ContactsPage/>}/>
            </Routes>
        </>
    )
}

export default App