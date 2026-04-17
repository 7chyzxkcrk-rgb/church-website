require('dotenv').config()
const express = require('express')
const cors = require('cors')
const pool = require('./db')

const app = express()
app.use(cors())
app.use(express.json())

// 테스트
app.get('/', (req, res) => {
  res.json({ message: '순천수정교회 서버 작동중!' })
})

// 주보 목록
app.get('/api/bulletins', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bulletins ORDER BY date DESC')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// 앨범 목록
app.get('/api/albums', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM albums ORDER BY created_at DESC')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`서버 실행중: ${PORT}번 포트`)
})
