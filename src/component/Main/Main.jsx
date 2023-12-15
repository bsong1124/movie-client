import {Routes, Route} from 'react-router-dom'
import TopRated from '../../Pages/TopRated'

const Main = () => {
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<TopRated />} />
            </Routes>
        </main>
    )
}

export default Main