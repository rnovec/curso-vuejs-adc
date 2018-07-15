import Inicio from './componentes/Inicio'
import Usuarios from './componentes/Usuarios'
import InfoUsuario from './componentes/InfoUsuario'

export const rutas = [
    {
        path:'/',
        component: Inicio
    },
    {
        path: '/usuarios',
        component: Usuarios,
        name: 'usuarios',
        children: [
            {
                path:':id',
                component:InfoUsuario,
                name: 'infousuario'
            }
        ]
    },
    {
        path: '/users',
        redirect: '/usuarios'
    },
    {
        path: '*',
        redirect : '/'
    }
]