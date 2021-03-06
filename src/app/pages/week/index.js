import React, { useEffect } from 'react'
import useReactRouter from 'use-react-router'

// redux
import { useStore, useSelector } from 'react-redux'
import { week } from '@/store/actions/list'
import { getList } from '@/store/reducers/list'

import Loading from '@/components/Ui/Loading'
import ItemS from '@/components/Week/ItemS'

import Shell from '@/components/Shell'
import Meta from '@/components/Meta'

import './style.scss'

export default Shell(() => {
  const {
    match: {
      params: { id }
    }
  } = useReactRouter()
  const store = useStore()
  const info = useSelector(state => getList(state, 'week'))

  useEffect(() => {
    const getData = _ => week()(store.dispatch, store.getState)
    if (!info.data) {
      getData()
    }
  }, [info.data, store.dispatch, store.getState])

  const getArea = (weekData = []) => {
    let cn = []
    let jp = []
    weekData.map(item => {
      if (item.area === '日本') {
        jp.push(item)
      } else if (item.area === '大陆') {
        cn.push(item)
      }
    })
    return [cn, jp]
  }

  const getEveryWeek = weekData => {
    // isCN  1 日本  其他为中国
    let data = {}
    let [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday] = [[], [], [], [], [], [], []]
    weekData.map(item => {
      const day = item.weekday
      if (day === 1) {
        Monday.push(item)
      } else if (day === 2) {
        Tuesday.push(item)
      } else if (day === 3) {
        Wednesday.push(item)
      } else if (day === 4) {
        Thursday.push(item)
      } else if (day === 5) {
        Friday.push(item)
      } else if (day === 6) {
        Saturday.push(item)
      } else if (day === 7) {
        Sunday.push(item)
      }
    })
    data.Monday = Monday
    data.Tuesday = Tuesday
    data.Wednesday = Wednesday
    data.Thursday = Thursday
    data.Friday = Friday
    data.Saturday = Saturday
    data.Sunday = Sunday
    return data
  }
  const { data = [], loading } = info
  const weekCn = ['一', '二', '三', '四', '五', '六', '日']
  const weekEng = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const weekType = getArea(data)
  const weekData = id === '0' || id === '1' ? getEveryWeek(weekType[id], id) : getEveryWeek(data)
  const today = new Date().getDay() - 1
  const title = id === '1' ? '日本' : id === '0' ? '国产' : ''
  return (
    <div className="wp mt20">
      <Meta title={`${title}新番时间表`}>
        <meta name="keywords" content={`${title}新番时间表,${title}动漫时间表`} />
        <meta name="description" content={`${title}新番时间表`} />
      </Meta>
      {loading ? <Loading /> : null}
      <ul styleName="list">
        {weekCn.map((item, index) => (
          <li key={item} styleName={today === index ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
      <ul styleName="weeklist">
        {weekEng.map((obj, index) => (
          <ItemS key={obj} data={weekData[weekEng[index]]} type={2} />
        ))}
      </ul>
    </div>
  )
})
