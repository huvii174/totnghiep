/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/static',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'Charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'static',
      component: () => import('@/views/charts/mix-chart'),
      name: 'Static',
      meta: { title: 'Static', noCache: true }
    }
  ]
}

export default chartsRouter
