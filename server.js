const express = require('express')
//== import

//gọi hàm express
const app = express()

//tạo port
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! With me')
})

app.get('/about', (req, res) => {
    res.send(`<table>
                <tr>
                    <th>Họ<th>
                    <th>Tên<th>
                <tr>
                <tr>
                    <td>Trương<td>
                    <td>Hường<td>
                <tr>
              <table>`)
})
//gọi app chạy trên port nào, 2 tham số truyền vào là port và callback sau khi port hoạt động trả về cosole
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})