import { Routes, Route, Navigate } from 'react-router-dom'
import Signin from '../pages/Signin/Signin'
import Signup from '../pages/Signup/Signup'
import Home from '../pages/Home/Home'
import Produtos from '../pages/Home/Produtos/Produtos'


// HomePage
// SidebarComponent
function RoutesComponent() {

    const isAuthenticated = true
    function loginRedirect(component) {
        if (isAuthenticated) {
            return <Navigate to='/home' replace />
        }

        return component
    }

    return (
        <>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/home' Component={Home} />  
                <Route path='/login' Component={Signin}/>
                <Route path='/cadastro' element={loginRedirect(<Signup />)} />
                
                {/* {condicao ? seVerdade : falso} */}
                {isAuthenticated ?
                    (
                        <>
                            <Route path='/' Component={Home} />
                            <Route path='/home' Component={Home} />   
                            <Route path='*' element={<Navigate replace to='/home' />} />
                            <Route path='/produtos' Component={Produtos} />                         
                        </>
                    )
                    : (
                        <>
                            <Route path='*' element={<Navigate replace to='/login' />} />
                        </>
                    )
                }
            </Routes>
        </>
    )
}

export default RoutesComponent