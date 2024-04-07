const productsData = [
    {
        "id": 1,
        "title": "Rustic Wedding Centerpieces",
        "price": 90000,
        "description": "Beautiful rustic centerpieces perfect for adding a touch of charm to your wedding decor. Made from natural wood and adorned with delicate faux flowers.",
        "category": "wedding decorations",
        "image": "https://i.postimg.cc/Fz0MszHy/IMG-20240405-WA0040.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Elegant Candle Holders Set",
        "price": 2498.77,
        "description": "Set of three elegant candle holders crafted with intricate metalwork. These candle holders will create a romantic atmosphere for your wedding reception.",
        "category": "wedding decorations",
        "image": "https://i.postimg.cc/wxJ8kfQ1/IMG-20240405-WA0042.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Fairy Light Curtain Backdrop",
        "price": 5818.77,
        "description": "Transform your venue with this stunning fairy light curtain backdrop. Perfect for photo booths or creating a magical ambiance behind the head table.",
        "category": "wedding decorations",
        "image": "https://i.postimg.cc/SxgwKwkv/IMG-20240405-WA0048.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Vintage Table Numbers",
        "price": 1332.33,
        "description": "Set of ten vintage-style table numbers with ornate gold frames. These elegant table numbers will add a touch of sophistication to your wedding reception.",
        "category": "wedding decorations",
        "image": "https://i.postimg.cc/LsrQYS7N/IMG-20240405-WA0058.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 57819.55,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 13997.52,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 831.71,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "image": "",
        "rating": {
            "rate": 3,
            "count": 400
        }
    },
    {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 915.31,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "",
        "rating": {
            "rate": 1.9,
            "count": 100
        }
    },
    {
        "id": 9,
        "title": "Baby Shower Balloon Arch Kit",
        "price": 13327.71,
        "description": "Create a magical atmosphere at your baby shower with this balloon arch kit! Features 2 ways to arrange balloons: side-to-side or head-to-toe. Includes 6 swing speeds, 16 soothing songs & nature sounds. Easy to assemble and machine-washable, plush seat pad for added comfort.",
        "category": "baby shower decorations",
        "image": "https://i.postimg.cc/1zCPL884/IMG-20240405-WA0033.jpg",
        "rating": {
            "rate": 3.3,
            "count": 203
        }
    },
    {
        "id": 10,
        "title": "Adorable Diaper Cake Centerpiece",
        "price": 2075.36,
        "description": "Add charm to your baby shower decor with this adorable diaper cake centerpiece! Large capacity with removable organizer inserts and inner dividers for customization. Versatile design for storing diapers, baby essentials, or crafting supplies.",
        "category": "baby shower decorations",
        "image": "https://i.postimg.cc/FzcYryST/IMG-20240405-WA0133.jpg",
        "rating": {
            "rate": 2.9,
            "count": 470
        }
    },
    {
        "id": 11,
        "title": "Cute Baby Shower Banner Set",
        "price": 2236.39,
        "description": "Welcome your little one with this cute baby shower banner set! Features 4-in-1 carrier suitable for infants 8-32 pounds. Offers 4 ways to carry baby, including facing in narrow seat for newborns and facing out narrow seat for babies with head control.",
        "category": "baby shower decorations",
        "image": "https://i.postimg.cc/J4vXWhB6/IMG-20240405-WA0095.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 12,
        "title": "Charming Baby Shower Table Decorations",
        "price": 996.73,
        "description": "Enhance your baby shower table setting with these charming bibs! Set includes coordinating fiber-filled drooler bibs made with cotton-poly blend. Machine-washable and affordable, perfect for a high-quality value pack.",
        "category": "baby shower decorations",
        "image": "https://i.postimg.cc/TwJjdXXy/IMG-20240405-WA0080.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
    {
        "id": 13,
        "title": "Sweet Baby Shower Photo Props",
        "price": 1663.73,
        "description": "Capture precious moments at your baby shower with these sweet photo props! Includes a variety of adorable props like bibs, pacifiers, and baby bottles. Perfect for creating memorable photos to cherish for years to come.",
        "category": "baby shower decorations",
        "image": "https://i.postimg.cc/NF0XQ94V/IMG-20240405-WA0091.jpg",
        "rating": {
            "rate": 2.9,
            "count": 250
        }
    },
    {
        "id": 14,
        "title": "Delicate Baby Shower Tablecloth",
        "price": 1832.44,
        "description": "Complete your baby shower decor with this delicate tablecloth! Made with Pampers Aqua Pure wipes that are 99% water for gentle cleaning. Includes dermatologically tested cleansers and pH-balancing ingredients for baby's delicate skin.",
        "category": "baby shower decorations",
        "image": "https://i.postimg.cc/vT8rDSQ0/IMG-20240405-WA0081.jpg",
        "rating": {
            "rate": 2.2,
            "count": 140
        }
    },
    {
        "id": 15,
        "title": "Birthday Party Decoration Set - Rainbow Theme",
        "price": 2498.77,
        "description": "Make your birthday party vibrant with this rainbow-themed decoration set! Includes balloons, banners, confetti, and more. Perfect for all ages.",
        "category": "birthday decorations",
        "image": "https://i.postimg.cc/kX4NmZY4/IMG-20240405-WA0082.jpg",
        "rating": {
            "rate": 2.6,
            "count": 235
        }
    },
    {
        "id": 16,
        "title": "Happy Birthday Balloon Bouquet",
        "price": 1245.88,
        "description": "Surprise your loved one with this delightful balloon bouquet! Features colorful helium balloons with 'Happy Birthday' prints. Includes a weight to keep them in place.",
        "category": "birthday decorations",
        "image": "https://i.postimg.cc/0j5Q7TKJ/IMG-20240405-WA0025.jpg",
        "rating": {
            "rate": 2.9,
            "count": 340
        }
    },
    {
        "id": 17,
        "title": "Gold Glitter Happy Birthday Cake Topper",
        "price": 665.41,
        "description": "Add a touch of glamour to your birthday cake with this gold glitter 'Happy Birthday' cake topper! Made of high-quality materials, it's reusable and food-safe.",
        "category": "birthday decorations",
        "image": "https://i.postimg.cc/gkFdFF2y/IMG-20240405-WA0027.jpg",
        "rating": {
            "rate": 3.8,
            "count": 679
        }
    },
    {
        "id": 18,
        "title": "Birthday Party Hats and Crowns - Pack of 12",
        "price": 872.08,
        "description": "Get everyone into the party spirit with these fun birthday hats and crowns! Pack includes assorted designs and colors suitable for kids and adults.",
        "category": "birthday decorations",
        "image": "https://i.postimg.cc/HnfkFVPb/IMG-20240405-WA0112.jpg",
        "rating": {
            "rate": 4.7,
            "count": 130
        }
    },
    {
        "id": 19,
        "title": "Birthday Confetti Balloons - Pack of 20",
        "price": 1083.59,
        "description": "Create an enchanting atmosphere with these confetti-filled balloons! Pack includes 20 clear balloons filled with colorful confetti. Perfect for any birthday celebration.",
        "category": "birthday decorations",
        "image": "https://i.postimg.cc/Mp1n2mwH/IMG-20240405-WA0106.jpg",
        "rating": {
            "rate": 4.5,
            "count": 146
        }
    },
    {
        "id": 20,
        "title": "Sparkling Confetti Party Poppers",
        "price": 828.08,
        "description": "Add a touch of sparkle to the festivities with these confetti party poppers! Simply twist and pop for a burst of colorful confetti. Safe and easy to use, they're perfect for all ages.",
        "category": "birthday decorations",
        "image": "https://i.postimg.cc/Xv7BfyMv/IMG-20240405-WA0126.jpg",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    }
];

export default productsData;
