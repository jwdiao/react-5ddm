import React, { useState, useRef } from 'react'

// redux
import { useStore } from 'react-redux'
import { signUp, send } from '@/store/actions/user'
import Toast from '@/components/Toast'

import '../style.scss'

const sTime = 60
let syTime = sTime

export default () => {
  const store = useStore()
  const _signUp = args => signUp(args)(store.dispatch, store.getState)
  const [paused, setPaused] = useState(true)
  const [time, setTime] = useState(sTime)
  const [username, password, mobile, rePassword, code] = [useRef(), useRef(), useRef(), useRef(), useRef()]

  const tick = () => {
    if (syTime === 1) {
      setTime(sTime)
      setPaused(true)
    } else {
      syTime = syTime - 1
      setTime(syTime)
      setPaused(false)
    }
    setTimeout(() => tick(), 1000)
  }

  const start = async () => {
    if (!paused) return
    const m = mobile.current
    if (!m.value) {
      Toast.error('请输入手机号')
      m.focus()
      return false
    } else if (!/^[1][0-9]{10}$/.test(m.value)) {
      Toast.error('手机号不正确')
      m.focus()
      return false
    }
    const _send = args => send(args)(store.dispatch, store.getState)
    let [, data] = await _send({ to: m.value })
    if (data.code === 1) {
      tick()
    }
  }

  const submit = async event => {
    event.preventDefault()
    const u = username.current
    const m = mobile.current
    const p = password.current
    const r = rePassword.current
    const c = code.current

    if (!u.value) {
      Toast.error('请输入用户名')
      u.focus()
      return false
    }

    if (!m.value) {
      Toast.error('请输入手机号')
      m.focus()
      return false
    } else if (!/^[1][0-9]{10}$/.test(m.value)) {
      Toast.error('手机号不正确')
      m.focus()
      return false
    }

    if (!p.value) {
      Toast.error('请输入密码')
      p.focus()
      return false
    }

    if (p.value !== r.value) {
      Toast.error('两次输入的密码不一至')
      r.focus()
      return false
    }

    if (!code.value) {
      Toast.error('请输入验证码')
      c.focus()
      return false
    }

    let [, success] = await _signUp({
      username: u.value,
      password: p.value,
      mobile: m.value,
      code: c.value
    })
    if (success) {
      setTimeout(() => {
        window.location.reload()
        return false
      }, 300)
    }
  }

  return (
    <form onSubmit={submit}>
      <input type="text" ref={username} placeholder="请输入账号" />
      <input type="password" ref={password} placeholder="请输入密码" />
      <input type="password" ref={rePassword} placeholder="再输入一次密码" />
      <div styleName="validate">
        <input type="text" ref={mobile} placeholder="请输入手机号" />
        <div onClick={start}>{time > 1 && time < sTime ? time : '发送验证码'}</div>
      </div>
      <input type="text" ref={code} placeholder="请输入验证" />
      <button type="submit">注册</button>
    </form>
  )
}
