require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

// API 라우트
app.get('/api/bulletins', async (req, res) => {
  try {
    const pool = require('./db')
    const result = await pool.query('SELECT * FROM bulletins ORDER BY date DESC')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.get('/api/albums', async (req, res) => {
  try {
    const pool = require('./db')
    const result = await pool.query('SELECT * FROM albums ORDER BY created_at DESC')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// React 빌드 파일 서비스
app.use(express.static(path.join(__dirname, '../client/dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, '0.0.0.0', () => {
  console.log(`서버 실행중: ${PORT}번 포트`)
})
