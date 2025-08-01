import Shape1 from "../assets/shape-1.png";
import Shape2 from "../assets/shape-2.png";
import Shape3 from "../assets/shape-3.png";
import Shape4 from "../assets/shape-4.png";

const accordionList = [
  {
    id: 0,
    title: "How do I know which glasses suit my face shape?",
    answer:
      "We offer a face shape guide on our website and in-store consultations to help you choose the most flattering frames for your features.",
  },
  {
    id: 1,
    title: "Can I add my prescription to the glasses I order?",
    answer:
      "Yes, you can upload your prescription during checkout or provide it later via email. We offer both single vision and progressive lenses.",
  },
  {
    id: 2,
    title: "Do you offer blue light blocking lenses?",
    answer:
      "Absolutely! You can add blue light protection to any of our prescription or non-prescription lenses when placing your order.",
  },
  {
    id: 3,
    title: "How long does it take to receive my order?",
    answer:
      "Orders typically take 5–7 business days for processing and delivery, depending on your location and lens type.",
  },
  {
    id: 4,
    title: "What is your return and exchange policy?",
    answer:
      "We offer a 14-day return or exchange window for unused items. Prescription lenses are non-refundable, but we will remake them if there's an issue.",
  },
  {
    id: 5,
    title: "Do you have physical stores I can visit?",
    answer:
      "Yes, we have several retail locations. You can visit our Store Locator page to find one near you.",
  },
  {
    id: 6,
    title: "Can I try the frames before purchasing?",
    answer:
      "Yes, we offer an in-store try-on experience. For online shoppers, we also provide virtual try-on using your camera or photo.",
  },
  {
    id: 7,
    title: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping costs and times vary depending on the destination.",
  },
  {
    id: 8,
    title: "How can I contact customer support?",
    answer:
      "You can reach us via live chat, email, or phone. Visit our Contact Us page for full details.",
  },
];

const allProductList = [];

const blogList = [
  {
    id: 0,
    imgSrc: "assets/images/blogs-blog-1.png",
    category: "Electronic",
    date: "June 21, 2023",
    title:
      "An electronic product is a device that uses electricity to perform a function.",
    desc: "Electronic products often contain a range of components, including processors, memory, and input/output devices, and they may be powered by batteries or plugged into an electrical outlet. Many electronic products rely on software programs to function and may be connected to the internet.",
  },
  {
    id: 1,
    imgSrc: "assets/images/blogs-blog-2.png",
    category: "Furniture",
    date: "June 21, 2023",
    title:
      "There are many furniture blogs that provide information and inspiration on furniture",
    desc: "These blogs often feature articles on a variety of topics related to furniture, such as how to choose the right furniture for your space, how to care for different types of furniture, and how to mix and match different styles to create a cohesive look...",
  },
  {
    id: 2,
    imgSrc: "assets/images/blogs-blog-3.png",
    category: "Fashion",
    date: "June 21, 2023",
    title:
      "Fashion refers to the styles and trends in clothing footwear, accessories ersonal expression",
    desc: "Electronic products often contain a range of components, including processors, memory, and input/output devices, and they may be powered by batteries or plugged into an electrical outlet. Many electronic products rely on software programs to function and may be connected to the internet.",
  },
  {
    id: 3,
    imgSrc: "assets/images/blogs-blog-4.png",
    category: "Food",
    date: "June 22, 2023",
    title: "Exploring Culinary Delights: A Journey into Exquisite Tastes",
    desc: "Food is not just sustenance; it's an art, a culture, and a way of life. From street food stalls to Michelin-starred restaurants, this blog dives into the rich tapestry of flavors, ingredients, and culinary traditions that make up our global food landscape.",
  },
  {
    id: 4,
    imgSrc: "assets/images/blogs-blog-5.png",
    category: "Travel",
    date: "June 22, 2023",
    title: "Wanderlust Chronicles: Tales of Adventures and Discoveries",
    desc: "Embark on a virtual journey to faraway lands, hidden gems, and breathtaking landscapes. This travel blog captures the spirit of exploration, offering insights into unforgettable destinations, travel tips, and personal stories from globetrotters around the world.",
  },
];

const ornamentList = [
  {
    id: 0,
    imgSrc: "assets/images/img-1.jpg",
    category: "Ring",
    name: "Flower Shaped Diamond Ring",
    price: 640.0,
    oldPrice: 780.0,
    isInWishlist: false,
  },
  {
    id: 1,
    imgSrc: "assets/images/img-2.jpg",
    category: "Ring",
    name: "Crown Shaped Diamond Ring",
    price: 950.0,
    oldPrice: 980.0,
    isInWishlist: false,
  },
  {
    id: 2,
    imgSrc: "assets/images/img-3.jpg",
    category: "Necklace",
    name: "Diamond Cross Necklace",
    price: 760.0,
    oldPrice: 820.0,
    isInWishlist: false,
  },
  {
    id: 3,
    imgSrc: "assets/images/img-4.jpg",
    category: "Necklace",
    name: "Sapphire Diamond Necklace",
    price: 830.0,
    oldPrice: 880.0,
    isInWishlist: false,
  },
  {
    id: 4,
    imgSrc: "assets/images/img-5.jpg",
    category: "Hair Clip",
    name: "Diamond Ingraved Ribbon",
    price: 450.0,
    oldPrice: 480.0,
    isInWishlist: false,
  },
  {
    id: 5,
    imgSrc: "assets/images/img-6.jpg",
    category: "Ring",
    name: "Diamond Engagement Ring",
    price: 800.0,
    oldPrice: 850.0,
    isInWishlist: false,
  },
  {
    id: 6,
    imgSrc: "assets/images/img-7.jpg",
    category: "Bracelet",
    name: "Diamond Ingraved Bracelet",
    price: 640.0,
    oldPrice: 780.0,
    isInWishlist: false,
  },
  {
    id: 7,
    imgSrc: "assets/images/img-8.jpg",
    category: "Bracelet",
    name: "Diamond Leather Bracelet",
    price: 640.0,
    oldPrice: 780.0,
    isInWishlist: false,
  },
];

const allCakeList = [
  {
    id: 0,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-1.png",
    name: "Homemade Strawberry Cake",
    price: 150.0,
    oldPrice: 180.0,
  },
  {
    id: 1,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-2.png",
    name: "Homemade Chocolate Cake",
    price: 70.0,
    oldPrice: 85.0,
  },
  {
    id: 2,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-3.png",
    name: "Homemade Red Velvet Cake",
    price: 75.0,
    oldPrice: 85.0,
  },
  {
    id: 3,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-4.png",
    name: "Homemade Caramel Cake",
    price: 80.0,
    oldPrice: 90.0,
  },
  {
    id: 4,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-1.png",
    name: "Homemade Strawberry Cake",
    price: 150.0,
    oldPrice: 180.0,
  },
  {
    id: 5,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-2.png",
    name: "Homemade Chocolate Cake",
    price: 70.0,
    oldPrice: 85.0,
  },

  {
    id: 6,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-5.png",
    name: "Homemade Pumpkin Cake",
    price: 50.0,
    oldPrice: 60.0,
  },
  {
    id: 7,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-6.png",
    name: "Homemade Pound Cake",
    price: 40.0,
    oldPrice: 50.0,
  },
  {
    id: 8,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-7.png",
    name: "Homemade Chocolate Pie",
    price: 70.0,
    oldPrice: 80.0,
  },
  {
    id: 9,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-8.png",
    name: "Homemade Chocolate Doughnut",
    price: 60.0,
    oldPrice: 70.0,
  },
  {
    id: 10,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-5.png",
    name: "Homemade Pumpkin Cake",
    price: 50.0,
    oldPrice: 60.0,
  },
  {
    id: 11,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-6.png",
    name: "Homemade Pound Cake",
    price: 40.0,
    oldPrice: 50.0,
  },

  {
    id: 12,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-9.png",
    name: "Chocolate Chips Cup Cake",
    price: 40.0,
    oldPrice: 50.0,
  },
  {
    id: 13,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-10.png",
    name: "Dark Chocolate Cup Cake",
    price: 50.0,
    oldPrice: 60.0,
  },
  {
    id: 14,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-11.png",
    name: "Strawberry Cup Cup Cake",
    price: 40.0,
    oldPrice: 50.0,
  },
  {
    id: 15,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-12.png",
    name: "Chocolate Cream Cup Cake",
    price: 45.0,
    oldPrice: 50.0,
  },
  {
    id: 16,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-9.png",
    name: "Chocolate Chips Cup Cake",
    price: 40.0,
    oldPrice: 50.0,
  },
  {
    id: 17,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-10.png",
    name: "Dark Chocolate Cup Cake",
    price: 50.0,
    oldPrice: 60.0,
  },

  {
    id: 18,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-13.png",
    name: "Homemade Strawberry Cake",
    price: 430.0,
    oldPrice: 450.0,
  },
  {
    id: 19,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-14.png",
    name: "Homemade Blueberry Cake",
    price: 380.0,
    oldPrice: 400.0,
  },
  {
    id: 20,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-15.png",
    name: "Homemade Fruit Cake",
    price: 450.0,
    oldPrice: 480.0,
  },
  {
    id: 21,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-16.png",
    name: "Two Layered Vanilla Cake",
    price: 500.0,
    oldPrice: 530.0,
  },
  {
    id: 22,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-17.png",
    name: "Homemade Black Forest Cake",
    price: 330.0,
    oldPrice: 340.0,
  },
  {
    id: 23,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-18.png",
    name: "Homemade Vanilla Cake",
    price: 120.0,
    oldPrice: 130.0,
  },
  {
    id: 24,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-19.png",
    name: "Homemade Chocolate Cake",
    price: 250.0,
    oldPrice: 280.0,
  },
  {
    id: 25,
    isInWishlist: false,
    imgSrc: "assets/images/fz-product-20.png",
    name: "Homemade Oats Cake",
    price: 280.0,
    oldPrice: 290.0,
  },
];

const productDetail = [
  {
    id: 0,
    imgSrc: "assets/images/fz-1-banner-bg-1.png",
    name: "Bento Cake Ultimate Chocolate 200gm",
    price: 750.0,
  },
];

const electricalProduct = [
  {
    id: 1,
    img: "assets/images/fz-product-21.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 2,
    img: "assets/images/fz-product-22.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 3,
    img: "assets/images/fz-product-23.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 4,
    img: "assets/images/fz-product-24.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 5,
    img: "assets/images/fz-product-25.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 6,
    img: "assets/images/fz-product-26.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 7,
    img: "assets/images/fz-product-27.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 8,
    img: "assets/images/fz-product-28.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
];

const ledBulbData = [
  {
    id: 1,
    img: "assets/images/led-bulb-1.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 2,
    img: "assets/images/led-bulb-2.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 3,
    img: "assets/images/led-bulb-3.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 4,
    img: "assets/images/led-bulb-4.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 5,
    img: "assets/images/led-bulb-1.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
];
const compactDeviceData = [
  {
    id: 1,
    img: "assets/images/compact-device-1.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 2,
    img: "assets/images/compact-device-2.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 3,
    img: "assets/images/compact-device-3.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 4,
    img: "assets/images/compact-device-4.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
  {
    id: 5,
    img: "assets/images/compact-device-1.png",
    name: "1.0mm Grey Cable - 100M",
    price: 640,
    oldPrice: 789,
  },
];

const testimonialData = [
  {
    id: 1,
    img: "assets/images/user-1.png",
    name: "Marisa Tomei",
    testimony:
      "I recently purchased the XYZ electric kettle and have been thoroughly impressed with its performance. The kettle heats up quickly and has an easy-to-use temperature control feature that allows me to make tea at the perfect temperature every time",
  },
  {
    id: 2,
    img: "assets/images/user-1.png",
    name: "Marisa Tomei",
    testimony:
      "I recently purchased the XYZ electric kettle and have been thoroughly impressed with its performance. The kettle heats up quickly and has an easy-to-use temperature control feature that allows me to make tea at the perfect temperature every time",
  },
  {
    id: 3,
    img: "assets/images/user-1.png",
    name: "Marisa Tomei",
    testimony:
      "I recently purchased the XYZ electric kettle and have been thoroughly impressed with its performance. The kettle heats up quickly and has an easy-to-use temperature control feature that allows me to make tea at the perfect temperature every time",
  },
  {
    id: 4,
    img: "assets/images/user-1.png",
    name: "Marisa Tomei",
    testimony:
      "I recently purchased the XYZ electric kettle and have been thoroughly impressed with its performance. The kettle heats up quickly and has an easy-to-use temperature control feature that allows me to make tea at the perfect temperature every time",
  },
  {
    id: 5,
    img: "assets/images/user-1.png",
    name: "Marisa Tomei",
    testimony:
      "I recently purchased the XYZ electric kettle and have been thoroughly impressed with its performance. The kettle heats up quickly and has an easy-to-use temperature control feature that allows me to make tea at the perfect temperature every time",
  },
  {
    id: 6,
    img: "assets/images/user-1.png",
    name: "Marisa Tomei",
    testimony:
      "I recently purchased the XYZ electric kettle and have been thoroughly impressed with its performance. The kettle heats up quickly and has an easy-to-use temperature control feature that allows me to make tea at the perfect temperature every time",
  },
  {
    id: 7,
    img: "assets/images/user-1.png",
    name: "Marisa Tomei",
    testimony:
      "I recently purchased the XYZ electric kettle and have been thoroughly impressed with its performance. The kettle heats up quickly and has an easy-to-use temperature control feature that allows me to make tea at the perfect temperature every time",
  },
];

const brandData = [
  "assets/images/fz-4-brand-1.png",
  "assets/images/fz-4-brand-2.png",
  "assets/images/fz-4-brand-3.png",
  "assets/images/fz-4-brand-4.png",
  "assets/images/fz-4-brand-5.png",
  "assets/images/fz-4-brand-1.png",
  "assets/images/fz-4-brand-2.png",
  "assets/images/fz-4-brand-3.png",
  "assets/images/fz-4-brand-4.png",
  "assets/images/fz-4-brand-5.png",
];
const brandData2 = [
  "assets/images/fz-5-brand-1.png",
  "assets/images/fz-5-brand-2.png",
  "assets/images/fz-5-brand-3.png",
  "assets/images/fz-5-brand-4.png",
  "assets/images/fz-5-brand-5.png",
  "assets/images/fz-5-brand-6.png",
  "assets/images/fz-5-brand-1.png",
  "assets/images/fz-5-brand-2.png",
  "assets/images/fz-5-brand-3.png",
  "assets/images/fz-5-brand-4.png",
  "assets/images/fz-5-brand-5.png",
  "assets/images/fz-5-brand-6.png",
];

const categoryData = [
  {
    id: 1,
    img: Shape1,
    category: "Square",
  },
  {
    id: 2,
    img: Shape2,
    category: "Cat-Eye",
  },
  {
    id: 3,
    img: Shape3,
    category: "Oval",
  },
  {
    id: 4,
    img: Shape4,
    category: "Round",
  },
  {
    id: 5,
    img: Shape1,
    category: "Square",
  },
  {
    id: 6,
    img: Shape2,
    category: "Cat-Eye",
  },
  {
    id: 7,
    img: Shape3,
    category: "Oval",
  },
  {
    id: 8,
    img: Shape4,
    category: "Round",
  },
];

const bannerData = [
  {
    id: 1,
    title: "We Sell The Parts That Power Your Life",
    desc: "Electronic Interfaces means access to operations support systems consisting of pre- ordering, ordering, provisioning.",
  },
  {
    id: 2,
    title: "We Sell The Parts That Power Your Life",
    desc: "Electronic Interfaces means access to operations support systems consisting of pre- ordering, ordering, provisioning.",
  },
  {
    id: 3,
    title: "We Sell The Parts That Power Your Life",
    desc: "Electronic Interfaces means access to operations support systems consisting of pre- ordering, ordering, provisioning.",
  },
];

const carPartsData = [
  {
    id: 1,
    discount: 30,
    title: "Aluminum Wheel AR-19 Tire Parts",
    img: "assets/images/fz-6-pro-1.png",
    price: 480,
    oldPrice: 780,
    category: "power-tools",
  },
  {
    id: 2,
    discount: 30,
    title: "Aluminum Wheel AR-19 Tire Parts",
    img: "assets/images/fz-6-pro-2.png",
    price: 480,
    oldPrice: 780,
    category: "hand-tools",
  },
  {
    id: 3,
    discount: 30,
    title: "Aluminum Wheel AR-19 Tire Parts",
    img: "assets/images/fz-6-pro-3.png",
    price: 480,
    oldPrice: 780,
    category: "power-tools",
  },
  {
    id: 4,
    discount: 30,
    title: "Aluminum Wheel AR-19 Tire Parts",
    img: "assets/images/fz-6-pro-4.png",
    price: 480,
    oldPrice: 780,
    category: "hand-tools",
  },
  {
    id: 5,
    discount: 30,
    title: "Aluminum Wheel AR-19 Tire Parts",
    img: "assets/images/fz-6-pro-5.png",
    price: 480,
    oldPrice: 780,
    category: "power-tools",
  },
  {
    id: 6,
    discount: 30,
    title: "Aluminum Wheel AR-19 Tire Parts",
    img: "assets/images/fz-6-pro-6.png",
    price: 480,
    oldPrice: 780,
    category: "hand-tools",
  },
  {
    id: 7,
    discount: 30,
    title: "Aluminum Wheel AR-19 Tire Parts",
    img: "assets/images/fz-6-pro-7.png",
    price: 480,
    oldPrice: 780,
    category: "power-tools",
  },
  {
    id: 8,
    discount: 30,
    title: "Aluminum Wheel AR-19 Tire Parts",
    img: "assets/images/fz-6-pro-8.png",
    price: 480,
    oldPrice: 780,
    category: "hand-tools",
  },
];

const blogData = [
  {
    id: 1,
    img: "assets/images/fz-6-blog-1.jpg",
    postedBy: "admin",
    category: "service",
    title: "Ultimate Car Accessories To Improve Your Car",
    date: "15 January, 2024",
  },
  {
    id: 2,
    img: "assets/images/fz-6-blog-2.jpg",
    postedBy: "admin",
    category: "service",
    title: "Ultimate Car Accessories To Improve Your Car",
    date: "15 January, 2024",
  },
  {
    id: 3,
    img: "assets/images/fz-6-blog-3.jpg",
    postedBy: "admin",
    category: "service",
    title: "Ultimate Car Accessories To Improve Your Car",
    date: "15 January, 2024",
  },
  {
    id: 4,
    img: "assets/images/fz-6-blog-1.jpg",
    postedBy: "admin",
    category: "service",
    title: "Ultimate Car Accessories To Improve Your Car",
    date: "15 January, 2024",
  },
];

const watchData = [
  {
    id: 1,
    img: "assets/images/fz-7-pro-1.jpg",
    category: "Smart Watch",
    title: "Apple Watch Series 3",
    slug: "#",
    price: 150,
  },
  {
    id: 2,
    img: "assets/images/fz-7-pro-2.jpg",
    category: "Smart Watch",
    title: "Apple Watch Series 3",
    slug: "#",
    price: 150,
  },
  {
    id: 3,
    img: "assets/images/fz-7-pro-3.jpg",
    category: "Smart Watch",
    title: "Apple Watch Series 3",
    slug: "#",
    price: 150,
  },
  {
    id: 4,
    img: "assets/images/fz-7-pro-4.jpg",
    category: "Smart Watch",
    title: "Apple Watch Series 3",
    slug: "#",
    price: 150,
  },
  {
    id: 5,
    img: "assets/images/fz-7-pro-5.jpg",
    category: "Smart Watch",
    title: "Apple Watch Series 3",
    slug: "#",
    price: 150,
  },
  {
    id: 6,
    img: "assets/images/fz-7-pro-6.jpg",
    category: "Smart Watch",
    title: "Apple Watch Series 3",
    slug: "#",
    price: 150,
  },
  {
    id: 7,
    img: "assets/images/fz-7-pro-7.jpg",
    category: "Smart Watch",
    title: "Apple Watch Series 3",
    slug: "#",
    price: 150,
  },
  {
    id: 8,
    img: "assets/images/fz-7-pro-8.jpg",
    category: "Smart Watch",
    title: "Apple Watch Series 3",
    slug: "#",
    price: 150,
  },
];

const blogData2 = [
  {
    id: 1,
    img: "assets/images/fz-7-blog-1.jpg",
    day: 15,
    month: "Jan",
    title: "Ultra Smart watch With Apple Logo 1",
    slug: "#",
  },
  {
    id: 2,
    img: "assets/images/fz-7-blog-2.jpg",
    day: 15,
    month: "Jan",
    title: "Ultra Smart watch With Apple Logo 1",
    slug: "#",
  },
  {
    id: 3,
    img: "assets/images/fz-7-blog-3.jpg",
    day: 15,
    month: "Jan",
    title: "Ultra Smart watch With Apple Logo 1",
    slug: "#",
  },
  {
    id: 4,
    img: "assets/images/fz-7-blog-1.jpg",
    day: 15,
    month: "Jan",
    title: "Ultra Smart watch With Apple Logo 1",
    slug: "#",
  },
  {
    id: 5,
    img: "assets/images/fz-7-blog-2.jpg",
    day: 15,
    month: "Jan",
    title: "Ultra Smart watch With Apple Logo 1",
    slug: "#",
  },
  {
    id: 6,
    img: "assets/images/fz-7-blog-3.jpg",
    day: 15,
    month: "Jan",
    title: "Ultra Smart watch With Apple Logo 1",
    slug: "#",
  },
];

const brandData3 = [
  {
    id: 1,
    img: "assets/images/fz-7-brand-1.png",
    slug: "#",
  },
  {
    id: 2,
    img: "assets/images/fz-7-brand-2.png",
    slug: "#",
  },
  {
    id: 3,
    img: "assets/images/fz-7-brand-3.png",
    slug: "#",
  },
  {
    id: 4,
    img: "assets/images/fz-7-brand-4.png",
    slug: "#",
  },
  {
    id: 5,
    img: "assets/images/fz-7-brand-1.png",
    slug: "#",
  },
  {
    id: 6,
    img: "assets/images/fz-7-brand-1.png",
    slug: "#",
  },
  {
    id: 7,
    img: "assets/images/fz-7-brand-1.png",
    slug: "#",
  },
  {
    id: 8,
    img: "assets/images/fz-7-brand-1.png",
    slug: "#",
  },
];

const bannerData2 = [
  {
    id: 1,
    title: "Top Quality Bicycle",
    img: "assets/images/fz-8-banner-img-1.png",
    productImg: "assets/images/fz-8-pro-1.png",
    productName: "Ember e6100",
    productPrice: 780,
  },
  {
    id: 2,
    title: "Top Quality Bicycle",
    img: "assets/images/fz-8-banner-img-2.png",
    productImg: "assets/images/fz-8-pro-1.png",
    productName: "Ember e6100",
    productPrice: 780,
  },
];
const cycleData = [
  {
    id: 1,
    img: "assets/images/fz-8-pro-4.png",
    slug: "ShopDetails",
    title: "Mountain E-Bike, S3",
    price: 650,
  },
  {
    id: 2,
    img: "assets/images/fz-8-pro-5.png",
    slug: "ShopDetails",
    title: "Mountain E-Bike, S3",
    price: 650,
  },
  {
    id: 3,
    img: "assets/images/fz-8-pro-6.png",
    slug: "ShopDetails",
    title: "Mountain E-Bike, S3",
    price: 650,
  },
  {
    id: 4,
    img: "assets/images/fz-8-pro-7.png",
    slug: "ShopDetails",
    title: "Mountain E-Bike, S3",
    price: 650,
  },
  {
    id: 5,
    img: "assets/images/fz-8-pro-8.png",
    slug: "ShopDetails",
    title: "Mountain E-Bike, S3",
    price: 650,
  },
  {
    id: 6,
    img: "assets/images/fz-8-pro-9.png",
    slug: "ShopDetails",
    title: "Mountain E-Bike, S3",
    price: 650,
  },
];

const cycleBlogData = [
  {
    id: 1,
    img: "assets/images/fz-8-blog-1.jpg",
    slug: "blogDetails",
    category: "Road Bike",
    title: "The key to getting really fast riding a mountain bike",
    date: "Jan 17, 2023",
    comments: 0,
  },
  {
    id: 2,
    img: "assets/images/fz-8-blog-2.jpg",
    slug: "blogDetails",
    category: "Road Bike",
    title: "The key to getting really fast riding a mountain bike",
    date: "Jan 17, 2023",
    comments: 0,
  },
  {
    id: 3,
    img: "assets/images/fz-8-blog-3.jpg",
    slug: "blogDetails",
    category: "Road Bike",
    title: "The key to getting really fast riding a mountain bike",
    date: "Jan 17, 2023",
    comments: 0,
  },
];

const brandData4 = [
  "assets/images/fz-8-brand-1.png",
  "assets/images/fz-8-brand-2.png",
  "assets/images/fz-8-brand-3.png",
  "assets/images/fz-8-brand-4.png",
  "assets/images/fz-8-brand-5.png",
  "assets/images/fz-8-brand-1.png",
  "assets/images/fz-8-brand-2.png",
  "assets/images/fz-8-brand-3.png",
];

const categoryData2 = [
  {
    id: 1,
    img: "assets/images/fz-9-category1.png",
    name: "Rompers",
    quantity: 5,
    slug: "#",
  },
  {
    id: 2,
    img: "assets/images/fz-9-category2.png",
    name: "Bodysuits",
    quantity: 7,
    slug: "#",
  },
  {
    id: 3,
    img: "assets/images/fz-9-category3.png",
    name: "Onesies",
    quantity: 8,
    slug: "#",
  },
  {
    id: 4,
    img: "assets/images/fz-9-category4.png",
    name: "Jumpsuits",
    quantity: 3,
    slug: "#",
  },
  {
    id: 5,
    img: "assets/images/fz-9-category1.png",
    name: "Rompers",
    quantity: 5,
    slug: "#",
  },
  {
    id: 6,
    img: "assets/images/fz-9-category2.png",
    name: "Bodysuits",
    quantity: 7,
    slug: "#",
  },
  {
    id: 7,
    img: "assets/images/fz-9-category3.png",
    name: "Onesies",
    quantity: 8,
    slug: "#",
  },
  {
    id: 8,
    img: "assets/images/fz-9-category4.png",
    name: "Jumpsuits",
    quantity: 3,
    slug: "#",
  },
];

const kidsClothingData = [
  {
    id: 1,
    img: "assets/images/fz-9-product1.png",
    name: "Jumpsuits",
    price: 10,
    category: ["hot-sale"],
  },
  {
    id: 2,
    img: "assets/images/fz-9-product2.png",
    name: "Onesies",
    price: 14,
    category: ["new-arrival", "offer"],
  },
  {
    id: 3,
    img: "assets/images/fz-9-product3.png",
    name: "Rain Wear",
    price: 15,
    category: ["new-arrival"],
  },
  {
    id: 4,
    img: "assets/images/fz-9-product4.png",
    name: "Jumpsuits",
    price: 10,
    category: ["hot-sale", "offer"],
  },
  {
    id: 5,
    img: "assets/images/fz-9-product5.png",
    name: "Onesies",
    price: 13,
    category: ["new-arrival", "hot-sale", "offer"],
  },
  {
    id: 6,
    img: "assets/images/fz-9-product6.png",
    name: "Rain Wear",
    price: 12,
    category: ["new-arrival", "hot-sale"],
  },
  {
    id: 7,
    img: "assets/images/fz-9-product7.png",
    name: "Jumpsuits",
    price: 10,
    category: ["hot-sale", "offer"],
  },
  {
    id: 8,
    img: "assets/images/fz-9-product8.png",
    name: "Onesies",
    price: 17,
    category: ["new-arrival"],
  },
];

const kidsBlogData = [
  {
    id: 1,
    img: "assets/images/fz-9-blog-1.jpg",
    category: "Fashion",
    title: "Trend Alert: Faux Fur | 8 of the best fluffy hand bags",
    date: "Jan 17, 2023",
    comments: 0,
  },
  {
    id: 2,
    img: "assets/images/fz-9-blog-2.jpg",
    category: "Fashion",
    title: "Why are Versace Jeans Couture bags so popular?",
    date: "Jan 17, 2023",
    comments: 0,
  },
  {
    id: 3,
    img: "assets/images/fz-9-blog-1.jpg",
    category: "Fashion",
    title: "Trend Alert: Faux Fur | 8 of the best fluffy hand bags",
    date: "Jan 17, 2023",
    comments: 0,
  },
  {
    id: 4,
    img: "assets/images/fz-9-blog-2.jpg",
    category: "Fashion",
    title: "Why are Versace Jeans Couture bags so popular?",
    date: "Jan 17, 2023",
    comments: 0,
  },
];

const kidsBrandData = [
  "assets/images/fz-9-brand1.png",
  "assets/images/fz-9-brand2.png",
  "assets/images/fz-9-brand3.png",
  "assets/images/fz-9-brand4.png",
  "assets/images/fz-9-brand5.png",
  "assets/images/fz-9-brand6.png",
  "assets/images/fz-9-brand1.png",
  "assets/images/fz-9-brand2.png",
  "assets/images/fz-9-brand3.png",
  "assets/images/fz-9-brand4.png",
  "assets/images/fz-9-brand5.png",
  "assets/images/fz-9-brand6.png",
];

const bagShopData = [
  {
    id: 1,
    img: "assets/images/feature-product-10.png",
    name: "Duffel Handbag",
    price: 300,
    category: ["offer"],
    discount: 30,
  },
  {
    id: 2,
    img: "assets/images/feature-product-10-2.png",
    name: "Duffel Handbag",
    price: 300,
    category: ["new-arrival"],
  },
  {
    id: 3,
    img: "assets/images/feature-product-10-3.png",
    name: "Duffel Handbag",
    price: 300,
    category: ["hot-sale"],
  },
  {
    id: 4,
    img: "assets/images/feature-product-10-4.png",
    name: "Duffel Handbag",
    price: 300,
    category: ["offer"],
    discount: 30,
  },
  {
    id: 5,
    img: "assets/images/feature-product-10-5.png",
    name: "Duffel Handbag",
    price: 300,
    category: ["hot-sale"],
  },
  {
    id: 6,
    img: "assets/images/feature-product-10-6.png",
    name: "Duffel Handbag",
    price: 300,
    category: ["new-arrival"],
  },
  {
    id: 7,
    img: "assets/images/feature-product-10-7.png",
    name: "Duffel Handbag",
    price: 300,
    category: ["hot-sale"],
  },
  {
    id: 8,
    img: "assets/images/feature-product-10-8.png",
    name: "Duffel Handbag",
    price: 300,
    category: ["new-arrival"],
  },
];

const bagBrandData = [
  "assets/images/fz-10-brand-1.png",
  "assets/images/fz-10-brand-2.png",
  "assets/images/fz-10-brand-3.png",
  "assets/images/fz-10-brand-4.png",
  "assets/images/fz-10-brand-5.png",
  "assets/images/fz-10-brand-1.png",
  "assets/images/fz-10-brand-2.png",
  "assets/images/fz-10-brand-3.png",
  "assets/images/fz-10-brand-4.png",
  "assets/images/fz-10-brand-5.png",
];

const ccTvCategoryData = [
  {
    id: 1,
    img: "assets/images/category-cctv-1.png",
    name: "Demo CCTV",
  },
  {
    id: 2,
    img: "assets/images/category-cctv-2.png",
    name: "Bullet CCTV",
  },
  {
    id: 3,
    img: "assets/images/category-cctv-3.png",
    name: "C-Mount CCTV",
  },
  {
    id: 4,
    img: "assets/images/category-cctv-4.png",
    name: "Infrared CCTV",
  },
  {
    id: 5,
    img: "assets/images/category-cctv-1.png",
    name: "Demo CCTV",
  },
  {
    id: 6,
    img: "assets/images/category-cctv-2.png",
    name: "Bullet CCTV",
  },
  {
    id: 7,
    img: "assets/images/category-cctv-3.png",
    name: "C-Mount CCTV",
  },
  {
    id: 8,
    img: "assets/images/category-cctv-4.png",
    name: "Infrared CCTV",
  },
];

const ccTvShopData = [
  {
    id: 1,
    img: "assets/images/feature-cctv1.png",
    name: "Dome CCTV",
    price: 200,
  },
  {
    id: 2,
    img: "assets/images/feature-cctv2.png",
    name: "Bullet CCTV",
    price: 100,
  },
  {
    id: 3,
    img: "assets/images/feature-cctv3.png",
    name: "C-Mount CCTV",
    price: 260,
  },
  {
    id: 4,
    img: "assets/images/feature-cctv4.png",
    name: "PTZ Pan-Tilt CCTV",
    price: 150,
  },
  {
    id: 5,
    img: "assets/images/feature-cctv5.png",
    name: "Day/Night CCTV",
    price: 290,
  },
  {
    id: 6,
    img: "assets/images/feature-cctv6.png",
    name: "Infrared CCTV",
    price: 160,
  },
  {
    id: 7,
    img: "assets/images/feature-cctv7.png",
    name: "Wireless CCTV",
    price: 430,
  },
  {
    id: 8,
    img: "assets/images/feature-cctv8.png",
    name: "HD CCTV",
    price: 290,
  },
];

const ccTvBlogData = [
  {
    id: 1,
    img: "assets/images/blog-img1.png",
    title:
      "Know About The CCTV Camera Types And Specifications That You Can Avail",
  },
  {
    id: 2,
    img: "assets/images/blog-img2.png",
    title: "Cctvs Are An Indispensable Part Of Our Lives In The Modern Era.",
  },
  {
    id: 3,
    img: "assets/images/blog-img1.png",
    title:
      "Know About The CCTV Camera Types And Specifications That You Can Avail",
  },
  {
    id: 4,
    img: "assets/images/blog-img2.png",
    title: "Cctvs Are An Indispensable Part Of Our Lives In The Modern Era.",
  },
  {
    id: 5,
    img: "assets/images/blog-img1.png",
    title:
      "Know About The CCTV Camera Types And Specifications That You Can Avail",
  },
];

const ccTvCompanyData = [
  "assets/images/footer-img1.png",
  "assets/images/footer-img2.png",
  "assets/images/footer-img3.png",
  "assets/images/footer-img4.png",
  "assets/images/footer-img1.png",
  "assets/images/footer-img2.png",
  "assets/images/footer-img3.png",
  "assets/images/footer-img4.png",
];

const bagShopBannerData = [
  {
    id: 1,
    img: "assets/images/fz-12-banner-img-1.jpg",
    title: "New Handbag",
    productName: "Tote Bag",
    productImg: "assets/images/fz-12-banner-prod-1.jpg",
    price: 380,
  },
  {
    id: 2,
    img: "assets/images/fz-12-banner-img-2.jpg",
    title: "Shoulder Bag",
    productName: "Tote Bag",
    productImg: "assets/images/fz-12-banner-prod-2.jpg",
    price: 380,
  },
  {
    id: 3,
    img: "assets/images/fz-12-banner-img-3.jpg",
    title: "Lunch Box Bag",
    productName: "Tote Bag",
    productImg: "assets/images/fz-12-banner-prod-3.jpg",
    price: 380,
  },
];

const bagShopData2 = [
  {
    id: 1,
    img: "assets/images/fz-12-prod-1.png",
    name: "Tote Bag",
    slug: "tote-bag",
    price: 280,
  },
  {
    id: 2,
    img: "assets/images/fz-12-prod-2.png",
    name: "Tote Bag",
    slug: "tote-bag",
    price: 280,
  },
  {
    id: 3,
    img: "assets/images/fz-12-prod-3.png",
    name: "Tote Bag",
    slug: "tote-bag",
    price: 280,
  },
  {
    id: 4,
    img: "assets/images/fz-12-prod-4.png",
    name: "Tote Bag",
    slug: "tote-bag",
    price: 280,
  },
  {
    id: 5,
    img: "assets/images/fz-12-prod-5.png",
    name: "Tote Bag",
    slug: "tote-bag",
    price: 280,
  },
  {
    id: 6,
    img: "assets/images/fz-12-prod-6.png",
    name: "Tote Bag",
    slug: "tote-bag",
    price: 280,
  },
  {
    id: 7,
    img: "assets/images/fz-12-prod-7.png",
    name: "Tote Bag",
    slug: "tote-bag",
    price: 280,
  },
  {
    id: 8,
    img: "assets/images/fz-12-prod-8.png",
    name: "Tote Bag",
    slug: "tote-bag",
    price: 280,
  },
];

const bagBlogData = [
  {
    id: 1,
    img: "assets/images/fz-12-blog-1.jpg",
    category: "Fashion",
    title: "Trend Alert: Faux Fur | 8 of the best fluffy hand bags",
    date: "Jan 17, 2023",
    comments: 0,
  },
  {
    id: 2,
    img: "assets/images/fz-12-blog-2.jpg",
    category: "Fashion",
    title:
      "Why are Versace Jeans Couture bags so popular? | MyBag's Complete Guide",
    date: "Jan 17, 2023",
    comments: 0,
  },
  {
    id: 3,
    img: "assets/images/fz-12-blog-1.jpg",
    category: "Fashion",
    title: "Trend Alert: Faux Fur | 8 of the best fluffy hand bags",
    date: "Jan 17, 2023",
    comments: 0,
  },
  {
    id: 4,
    img: "assets/images/fz-12-blog-2.jpg",
    category: "Fashion",
    title:
      "Why are Versace Jeans Couture bags so popular? | MyBag's Complete Guide",
    date: "Jan 17, 2023",
    comments: 0,
  },
];

const shopData2 = [
  {
    id: 1,
    img: "assets/images/fz-product-29.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
    offer: true,
  },
  {
    id: 2,
    img: "assets/images/fz-product-30.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
  },
  {
    id: 3,
    img: "assets/images/fz-product-31.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
  },
  {
    id: 4,
    img: "assets/images/fz-product-29.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
    offer: true,
  },
  {
    id: 5,
    img: "assets/images/fz-product-30.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
  },
  {
    id: 6,
    img: "assets/images/fz-product-31.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
  },
  {
    id: 7,
    img: "assets/images/fz-product-29.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
    offer: true,
  },
  {
    id: 8,
    img: "assets/images/fz-product-30.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
  },
  {
    id: 9,
    img: "assets/images/fz-product-31.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
  },
  {
    id: 10,
    img: "assets/images/fz-product-29.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
    offer: true,
  },
  {
    id: 11,
    img: "assets/images/fz-product-30.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
  },
  {
    id: 12,
    img: "assets/images/fz-product-31.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
  },
  {
    id: 13,
    img: "assets/images/fz-product-29.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
    offer: true,
  },
  {
    id: 14,
    img: "assets/images/fz-product-30.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
  },
  {
    id: 15,
    img: "assets/images/fz-product-31.png",
    name: "Lenskart Blu Hustlr Glasses",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt culpa expedita aperiam, voluptates obcaecati explicabo, incidunt deleniti eos, quisquam libero? Aliquam rerum id laboriosam eos necessitatibus provident dolore doloribus!",
    price: 589,
  },
];

export {
  accordionList,
  blogList,
  ornamentList,
  allCakeList,
  productDetail,
  electricalProduct,
  ledBulbData,
  compactDeviceData,
  testimonialData,
  brandData,
  categoryData,
  brandData2,
  bannerData,
  carPartsData,
  blogData,
  blogData2,
  brandData3,
  bannerData2,
  brandData4,
  categoryData2,
  shopData2,
  allProductList,
};
