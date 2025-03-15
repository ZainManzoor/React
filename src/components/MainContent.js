import RestaurantContainer from "./Restaurants/RestaurantContainer";
import {useState} from 'react';


/** Food Cards Response  */
let response = [
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
                }
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
                },
            },
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

const MainContent = () => {
    const [response, setResponse] = useState([
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
                    }
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
                    },
                },
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
    ]);

    return (
        <div>
            <button onClick={()=>
                {
                    const filteredData = response.filter((restaurant) => restaurant.card.card.info.avgRating > 4.0);
                    console.log('Button clicked', response)
                    setResponse(filteredData);
                }
            }> Top Rated Restaurants </button>
            <RestaurantContainer response={response}/>
        </div>
    )
}

export default MainContent;