import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'ADIL AHMED YASSIN',
      email: 'adilahmed@gmail.com',
      password:  bcrypt.hashSync('yassinemran0911', 8),
      isAdmin: true,
    },
    {
      name: 'emo',
      email: 'emo@gmail.com',
      password: bcrypt.hashSync('100', 8),
      isAdmin: false,
    },
  ],
  products:[
      {
      
      name:'Slim Shirt',
      category: 'Shirts',
      image:'/images/slim.jpg',
      price: 80,
      brand: 'H&M',
      rating: 4.5,
      numReviews: 10,
      countInStock:10,
      description: 'high quality product',
  },
      {
   
          name:'Fit Shirt',
          category: 'Shirts',
          image:'/images/shirt.jpg',
          price: 90,
          brand: 'Nike',
          rating: 4.5,
          numReviews: 10,
          countInStock:1,
          description: 'high quality product',
      },
      {
       
          name:'Best Pants',
          category: 'Pants',
          image:'/images/pant.jpg',
          price: 88,
          brand: 'Nike',
          rating: 4.5,
          numReviews: 10,
          description: 'high quality product',
          countInStock:950,
        
      },
      {
   
          name:' Hat',
          category: 'Hat',
          image:'/images/hat1.jpg',
          price: 152,
          brand: 'Nike',
          rating: 4.5,
          numReviews: 10,
          countInStock:8,
          description: 'high quality product',
      },
      {
    
          name:' Glass',
          category: 'Glass',
          image:'/images/glass.jpg',
          price: 152,
          brand: 'Nike',
          rating: 4.5,
          numReviews: 10,
          countInStock:6,
          description: 'high quality product',
      },
      {
    
          name:'Jacket',
          category: 'Jacket',
          image:'/images/jacket.jpg',
          price: 100,
          brand: 'Nike',
          rating: 4.5,
          numReviews: 10,
          countInStock:30,
          description: 'high quality product',
      },



  ],
};
export default data;