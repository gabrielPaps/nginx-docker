export default (app) =>{
    app.get('/products', (req, res) => {
        res.send('products!')
    })
}