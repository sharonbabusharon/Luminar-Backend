const products=require('../models/productSchema')

exports.getAllProducts=async(req,res)=>{
	try{
		const allProducts=await products.find()
		res.status(200).json(allProducts)
	}catch(error)
	{
		res.status(401).json(error)
	}
}

//get details of a particular product
exports.viewProduct=async(req,res)=>{

		//logic
		//get id  from request
		const id=req.params.id
		
	try{
		//CHECK IF ID IN MONGODB
		const product = await products.findOne({id})
		if(product)
		{
			res.status(200).json(product)
		}else
		{
			res.status(404).json("item not found")
		}
	}
	catch(error){
		res.status(401).json(error)
	}
}