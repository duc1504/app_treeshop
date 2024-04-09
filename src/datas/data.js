const data = [
  {
    id:1,
    Category:'Cây trồng',
    Status:['Hàng mới về','Ưa bóng','Ưa tối'],
    Products:[
      {
        id: '1',
        name: 'Macchiato',
        description: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price.',
        price: '250000đ',
       
        status: 'Hàng mới về',
        image: require('../images/tree1.png'),
        time: '20/10/2023',
      },
      {
        id: '2',
        name: 'Cappuccino',
        description: 'Excellent service and high-quality furniture. I am very satisfied with the fast delivery and the accurate representation of products on the app. The color options are fantastic, and the prices are very reasonable.',
       
        status: 'Ưa bóng',
        price: '430000đ',
        image: require('../images/tree2.png'),
        time: '21/10/2023',
      },
      {
        id: '3',
        name: 'Latte',
        description: 'I love the furniture I ordered! The delivery was quick, and the products exceeded my expectations. The colors are vibrant, and the quality is remarkable for the affordable price. I highly recommend this app for furniture shopping.',
       
        status: 'Ưa tối',
        price: '210000đ',
        image: require('../images/tree3.png'),
        time: '22/10/2023',
      },
      {
        id: '4',
        name: 'Espresso',
        description: 'Outstanding experience! The delivery was on time, and the furniture matches the images perfectly. The color options are diverse, and the quality is exceptional. Affordable prices make it even better. I will definitely shop here again.',
       
        status: 'Hàng mới về',
        price: '650000đ',
        image: require('../images/tree4.png'),
        time: '23/10/2023',
      },
      {
        id: '5',
        name: 'Americano',
        description: 'Impressive furniture collection with quick delivery. The products mirror the app\'s images accurately, and the color choices are delightful. Despite the low prices, the quality is top-notch. A reliable option for anyone looking for stylish and affordable furniture.',
      
        status: 'Ưa bóng',
        price: '220000đ',
        image: require('../images/tree5.png'),
        time: '24/10/2023',
      },
      {
        id: '6',
        name: 'Mocha',
        description: 'Great experience with this furniture app. The products are exactly as described and pictured. Fast delivery and high-quality items at affordable prices. I am a satisfied customer!',
       
        status: 'Hàng mới về',
        price: '320000đ',
        image: require('../images/tree6.png'),
        time: '25/10/2023',
      },
      {
        id: '7',
        name: 'Flat White',
        description: 'Amazing furniture choices and fast delivery. The items look stunning and are of good quality. The app\'s interface is user-friendly, making the shopping experience',
       
        status: 'Ưa bóng',
        price: '380000đ',
        image: require('../images/tree7.png'),
        time: '26/10/2023',
      },
      {
        id: '8',
        name: 'Affogato',
        description: 'Highly satisfied with the furniture I purchased. The delivery was prompt, and the products are well-made. The variety of colors and styles cater to different preferences. Affordable prices for such great quality!',
       
        status: 'Hàng mới về',
        price: '290000đ',
        image: require('../images/tree8.png'),
        time: '27/10/2023',
      },
    ],
  },
  {
    id:2,
    Category:'Chậu cây trồng',
    Products:[
      {
        id: '1',
        name: 'Macchiato',
        description: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price.',
        price: '250000đ',
        trangthai:'Ưa bóng',
        image: require('../images/tree7.png'),
        time: '20/10/2023',
      },
      {
        id: '2',
        name: 'Cappuccino',
        description: 'Excellent service and high-quality furniture. I am very satisfied with the fast delivery and the accurate representation of products on the app. The color options are fantastic, and the prices are very reasonable.',
        trangthai:'Ưa tối',
        price: '430000đ',
        image: require('../images/tree2.png'),
        time: '21/10/2023',
      },
      {
        id: '3',
        name: 'Latte',
        description: 'I love the furniture I ordered! The delivery was quick, and the products exceeded my expectations. The colors are vibrant, and the quality is remarkable for the affordable price. I highly recommend this app for furniture shopping.',
        trangthai:'Ưa bóng',
        price: '210000đ',
        image: require('../images/tree3.png'),
  
        time: '22/10/2023',
      },
      {
        trangthai:'Ưa bóng',
        id: '4',
        name: 'Espresso',
        description: 'Outstanding experience! The delivery was on time, and the furniture matches the images perfectly. The color options are diverse, and the quality is exceptional. Affordable prices make it even better. I will definitely shop here again.',
        price: '650000đ',
        image: require('../images/tree4.png'),
  
        time: '23/10/2023',
      },
      {
        id: '5',
        trangthai:'Ưa tối',
        name: 'Americano',
        description: 'Impressive furniture collection with quick delivery. The products mirror the app\'s images accurately, and the color choices are delightful. Despite the low prices, the quality is top-notch. A reliable option for anyone looking for stylish and affordable furniture.',
        price: '220000đ',
        image: require('../images/tree5.png'),
        time: '24/10/2023',
      },
      {
          id: '6',
          trangthai: 'Ưa bóng',
          name: 'Mocha',
          description: 'Great experience with this furniture app. The products are exactly as described and pictured. Fast delivery and high-quality items at affordable prices. I am a satisfied customer!',
          price: '320000đ',
          image: require('../images/tree6.png'),
          time: '25/10/2023',
        },
        {
          id: '7',
          trangthai: 'Ưa bóng',
          name: 'Flat White',
          description: 'Amazing furniture choices and fast delivery. The items look stunning and are of good quality. The apps interface is user-friendly, making the shopping experience',
          price: '380000đ',
          image: require('../images/tree1.png'),
          time: '26/10/2023',
        },
        {
          id: '8',
          trangthai: 'Ưa tối',
          name: 'Affogato',
          description: 'Highly satisfied with the furniture I purchased. The delivery was prompt, and the products are well-made. The variety of colors and styles cater to different preferences. Affordable prices for such great quality!',
          price: '290000đ',
          image: require('../images/tree8.png'),
          time: '27/10/2023',
        },
    ],
  }

    
  ];
  
  export default data;
  