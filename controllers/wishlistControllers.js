const wishlists=require('../models/wishlistSchema')


//add to wishlist logic

exports.addToWishlist=async(req,res)=>{

//using destructuring

const {id,title,price,image}=req.body

try{
	//check if  a product is found in mongodb
	const item=await wishlists.findOne({id})
	if(item){
		res.status(403).json("item already present in wishlist")
	}else{

		//add item to wishlist
		const newProduct=new wishlists({id,title,price,image})

		//to store in mongodb
		await newProduct.save()
		res.status(200).json("product added to wishlist")
	}

}
catch(error)
{
	res.status(401).json(error)
}
}

//to get wishlist data
exports.getWishlistItems=async (req,res)=>{
	try{
		const allWishlistItems=await wishlists.find()
		res.status(200).json(allWishlistItems)
	}
	catch(error){
		res.status(401).json(error)
	}
}

///to removve an item from wishlist
exports.removeWishlistItem=async(req,res)=>{
	
	const {id}=req.params
	try{
		const removeWishlistItem=await wishlists.deleteOne({id})
		//show the rest of the wishlist items
		if(removeWishlistItem)
		{
			const allItems=await wishlists.find()
			res.status(200).json(allItems)
		}
	}catch(error)
	{
		res.status(401).json(error)
	}
}