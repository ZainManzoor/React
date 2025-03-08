import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * This is the main application file.
 * This file is used to render the main application.
 * We will have three major portions. 
 * 1- Header
 *  1.1- Logo
 *  1.2- Navigation
 *  1.3- Search
 * 2- Main Content
 *  2.1- Sidebar
 *  2.2- RestaurantsContainer
 *      2.2.1- RestaurantCard
 * 3- Footer
 *  3.1- CopyRight
 *  3.2- Links (Like social media links)
 *  3.3- Contact Us
 */

/** Food Cards Response  */
const response = [
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "4923",
                            "name": "Anna Ka Dosa",
                            "cloudinaryImageId": "b2076e206275b6c3a0703bd1e9df0fa9",
                            "locality": "Kalkaji",
                            "areaName": "Greater Kailash New",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "South Indian",
                                "Indian",
                                "Chaat",
                                "Desserts"
                            ],
                            "avgRating": 4.3,
                            "parentId": "5062",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "86K+",
                            "promoted": true,
                            "adTrackingId": "cid=25901909~p=0~adgrpid=25901909#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=4923~eid=9071f2d2-a198-4882-ba4c-a9ebbb79e18e~srvts=1741381331419~collid=80424",
                            "sla": {
                                "deliveryTime": 31,
                                "lastMileTravel": 9.6,
                                "serviceability": "SERVICEABLE",
                                "slaString": "30-35 mins",
                                "lastMileTravelString": "9.6 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-03-14 00:00:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹49",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "1.6K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "25901909"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=4923&source=collection&query=Dosa",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "540378",
                            "name": "BTW",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/17/2a8e4ff0-d814-4260-9760-e041fd7dccd6_c1b5477b-50cd-46d3-b20d-e4b66706ad6b.jpeg_compressed",
                            "locality": "Da Block",
                            "areaName": "Laxmi Nagar",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "South Indian",
                                "Beverages",
                                "Continental",
                                "Street Food"
                            ],
                            "avgRating": 3.9,
                            "parentId": "10314",
                            "avgRatingString": "3.9",
                            "totalRatingsString": "1.6K+",
                            "sla": {
                                "deliveryTime": 36,
                                "lastMileTravel": 7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "35-40 mins",
                                "lastMileTravelString": "7.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-03-14 00:00:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                    "description": "pureveg"
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹50",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "206"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=540378&source=collection&query=Dosa",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "182686",
                            "name": "Madras Vyanjan",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/20/fc379863-9bb5-4af3-bfec-c4457baca4df_4288c149-df7b-4f54-af69-e9ff01d92efe.jpg",
                            "locality": "Ramesh Nagar",
                            "areaName": "Greater Kailash New",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "South Indian"
                            ],
                            "avgRating": 3.6,
                            "veg": true,
                            "parentId": "22335",
                            "avgRatingString": "3.6",
                            "totalRatingsString": "187",
                            "sla": {
                                "deliveryTime": 39,
                                "lastMileTravel": 7.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "35-40 mins",
                                "lastMileTravelString": "7.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-03-08 23:59:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                    "description": "pureveg"
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "₹125 OFF",
                                "subHeader": "ABOVE ₹499",
                                "discountTag": "FLAT DEAL",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=182686&source=collection&query=Dosa",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "145584",
                            "name": "Thalis Of Nation",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/6/980a9d58-7c9d-45b8-a31e-d619ab5fdb3f_88c620f6-0e46-425e-a846-2fb25747ff3c.jpg",
                            "locality": "Ramesh Nagar",
                            "areaName": "Greater Kailash New",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "North Indian",
                                "South Indian",
                                "Thalis",
                                "Indian"
                            ],
                            "avgRating": 3.5,
                            "parentId": "22336",
                            "avgRatingString": "3.5",
                            "totalRatingsString": "495",
                            "sla": {
                                "deliveryTime": 39,
                                "lastMileTravel": 7.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "35-40 mins",
                                "lastMileTravelString": "7.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-03-08 23:59:00",
                                "opened": true
                            },
                            "badges": {
                                "textExtendedBadges": [
                                    {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "description": "",
                                                    "shortDescription": "options available",
                                                    "fontColor": "#7E808C"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "₹125 OFF",
                                "subHeader": "ABOVE ₹499",
                                "discountTag": "FLAT DEAL",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=145584&source=collection&query=Dosa",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "108232",
                            "name": "Yummy world",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/28/06f5f49a-aa6f-4582-a91d-4ce3c9be1cfe_fdb0fc94-c857-444a-9d88-a5a1b45ee2c3.JPG",
                            "locality": "Ramesh Nagar",
                            "areaName": "Greater Kailash New",
                            "costForTwo": "₹299 for two",
                            "cuisines": [
                                "Snacks",
                                "Healthy Food",
                                "Beverages"
                            ],
                            "avgRating": 3.6,
                            "veg": true,
                            "parentId": "22334",
                            "avgRatingString": "3.6",
                            "totalRatingsString": "1.0K+",
                            "sla": {
                                "deliveryTime": 41,
                                "lastMileTravel": 7.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "40-45 mins",
                                "lastMileTravelString": "7.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-03-08 23:59:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textExtendedBadges": {},
                                    "textBased": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "₹125 OFF",
                                "subHeader": "ABOVE ₹499",
                                "discountTag": "FLAT DEAL",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=108232&source=collection&query=Dosa",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "272036",
                            "name": "Urban Meal",
                            "cloudinaryImageId": "phw0hupxy4iy8ld74j17",
                            "locality": "D Block",
                            "areaName": "Greater Kailash New",
                            "costForTwo": "₹500 for two",
                            "cuisines": [
                                "American"
                            ],
                            "avgRating": 4.3,
                            "parentId": "220079",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "164",
                            "sla": {
                                "deliveryTime": 40,
                                "lastMileTravel": 7.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "35-40 mins",
                                "lastMileTravelString": "7.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-03-14 00:00:00",
                                "opened": true
                            },
                            "badges": {
                                "textExtendedBadges": [
                                    {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "description": "",
                                                    "shortDescription": "options available"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "50% OFF",
                                "subHeader": "UPTO ₹100",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=272036&source=collection&query=Dosa",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            }
        ];

// Logo Component
const Logo = () => {
    return (
        <div className="logo">
            <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="Logo" />
        </div>
    )
}

// Navigation Component
const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    )
} 



// Header Component
const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <Navigation />
        </div>
    )
}

/// ********* Body Objects ********* ///
// Search Component
const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
        </div>
    )
}

// Restaurant Card Component
const RestaurantCard = (props) => {
    const {data} = props;

    return (
        <div className="restaurant-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" + data.card.card.info.cloudinaryImageId} alt="Logo" />
            <h3>{data.card.card.info.name}</h3>
            <p>{data.card.card.info.cuisines}</p>
            <button>Order Now</button>
        </div>
    )
}

// Restaurant Container Component 
const RestaurantsContainer = () => (
    <div className="restaurants-container">
        {
            response.map(data => <RestaurantCard key={data.card.card.info.id} data={data}/>)
        }
    </div>
)

// MainContent Component
const MainContent = () => {
    return (
        <div>
            <RestaurantsContainer />
        </div>
    )
}

// Body Component
const Body = () => {
    return (
        <div className='body'>
            <MainContent />
        </div>
    )
}



// AppLayout Component
const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

// Footer
const Footer = () => {
    return (
        <div></div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);