const carts = require('../models/cartSchema')



//add to cart logic
exports.addToCart=async(req,res)=>{

	const {id,title,price,image,quantity}=req.body

	try{                                
		// //check if product already in cart if yess icrement quantity
		const product=await carts.findOne({id})
		 if(product){
			product.quantity+=1
		product.grandTotal=product.quantity*product.price

			product.save()
		res.status(200).json("your request has been noted")
		}                                  
	else{
			// //if item not present im cart
			const addProduct= new carts({id,title,price,image,quantity,grandTotal:price})
			await addProduct.save()
			 res.status(200).json("course added to cart")
	}


		
	
	}catch(error)
	{
		res.status(401).json(error)
	}
}

exports.getCartItems=async(req,res)=>{
	try{
		const allCartItems=await carts.find()
		res.status(200).json(allCartItems)
	}
	catch(error){
		res.status(401).json(error)
	}
}

//to remove item from cart
exports.removeCartItem= async(req,res)=>{
	const{id}=req.params
	try{
		
		const removeCartItem=await carts.deleteOne({id})

		if(removeCartItem)
		{
		const allItems=await carts.find()
			res.status(200).json(allItems)
		}else{
			res.status(404).json("item not found")
		}
	}
	catch(error){
		res.status(200).json(error)
	}
}