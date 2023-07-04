const express=require('express')

const wishlistController=require('../controllers/wishlistControllers')

const productControllers=require('../controllers/productControllers')

const cartControllers=require('../controllers/cartControllers')

const router=new express.Router()

router.get('/products/all-products',productControllers.getAllProducts)

//api to get particular product
router.get('/products/view-product/:id',productControllers.viewProduct)

//api to add product to wishlist
router.post('/wishlist/add-to-wishlist',wishlistController.addToWishlist)

//to get all wishlist items
router.get('/wishlist/get-items',wishlistController.getWishlistItems)

//to remove wishlist items
router.delete('/wishlist/remove-wishlist-item/:id',wishlistController.removeWishlistItem)

//add item to cart
router.post('/cart/add-to-cart',cartControllers.addToCart)

//to get all cart items
router.get('/cart/get-cart',cartControllers.getCartItems)

//to remove cart items
router.delete('/cart/remove-cart-item/:id',cartControllers.removeCartItem)

module.exports=router
