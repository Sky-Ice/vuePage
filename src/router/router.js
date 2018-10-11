import IndexPage from './../page/Index.vue'
import DetailPage from './../page/Detail.vue'

import DetailAnalysisPage from './../page/detail/Analysis.vue'
import DetailCountPage from './../page/detail/Count.vue'
import DetailForecastPage from './../page/detail/Forecast.vue'
import DetailPublishPage from './../page/detail/Publish.vue'

export const routes = [
  {
    path: '/',
    component: IndexPage
  },
  {
    path: '/detail',
    component: DetailPage,
    redirect: '/detail/count',
    children: [
      {path: 'analysis', component: DetailAnalysisPage},
      {path: 'count', component: DetailCountPage},
      {path: 'forecast', component: DetailForecastPage},
      {path: 'publish', component: DetailPublishPage}
    ]
  }
]
