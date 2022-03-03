const Category=require('../models/Category')
exports.createCategory=async(req,res)=>{
    const category=Category.create(req.body)
    try {
        res.status(201).json({
            status:'succes',
            category
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            error,
        })
    }
}