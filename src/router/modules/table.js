/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/user',
  component: Layout,
  name: 'User',
  meta: {
    title: 'User',
    icon: 'user'
  },
  children: [
    {
      path: 'user',
      component: () => import('@/views/table/complex-table'),
      name: 'User',
      meta: { title: 'User' }
    }
  ]
}
export default tableRouter
