import {Routes, Route} from 'react-router-dom'
import Movies from '../../Pages/Movies'

const Main = () => {
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<Movies />} />
            </Routes>
        </main>
    )
}

export default Main