$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01.UspsLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Users ability to login",
  "description": "",
  "id": "users-ability-to-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@usps"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should able to login using Sign-On Feature",
  "description": "",
  "id": "users-ability-to-login;user-should-able-to-login-using-sign-on-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Navigate to USPS home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to usps login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Fill with valid \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Hover over the username from home page and varify the login by username",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "users-ability-to-login;user-should-able-to-login-using-sign-on-feature;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 13,
      "id": "users-ability-to-login;user-should-able-to-login-using-sign-on-feature;;1"
    },
    {
      "cells": [
        "urbaneagles123",
        "Eagles@123"
      ],
      "line": 14,
      "id": "users-ability-to-login;user-should-able-to-login-using-sign-on-feature;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4135140100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to login using Sign-On Feature",
  "description": "",
  "id": "users-ability-to-login;user-should-able-to-login-using-sign-on-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@usps"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Navigate to USPS home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to usps login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Fill with valid \"urbaneagles123\" and \"Eagles@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Hover over the username from home page and varify the login by username",
  "keyword": "Then "
});
formatter.match({
  "location": "UspsLoginSteps.navigate_to_USPS_com_home_page()"
});
formatter.result({
  "duration": 4344243800,
  "status": "passed"
});
formatter.match({
  "location": "UspsLoginSteps.navigate_to_usps_login_page()"
});
formatter.result({
  "duration": 560340200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "urbaneagles123",
      "offset": 17
    },
    {
      "val": "Eagles@123",
      "offset": 38
    }
  ],
  "location": "UspsLoginSteps.fill_with_valid_and(String,String)"
});
formatter.result({
  "duration": 4196323200,
  "status": "passed"
});
formatter.match({
  "location": "UspsLoginSteps.click_on_sign_in_button()"
});
formatter.result({
  "duration": 4955723700,
  "status": "passed"
});
formatter.match({
  "location": "UspsLoginSteps.hover_over_the_username_from_home_page_and_varify_the_login_by_username()"
});
formatter.result({
  "duration": 11500,
  "status": "passed"
});
formatter.after({
  "duration": 48200,
  "status": "passed"
});
formatter.uri("02.UspsLookupZipcode.feature");
formatter.feature({
  "line": 2,
  "name": "Users ability to lookup city using zipcode",
  "description": "",
  "id": "users-ability-to-lookup-city-using-zipcode",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@usps"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should able to get city information using lookup zipcode feature",
  "description": "",
  "id": "users-ability-to-lookup-city-using-zipcode;user-should-able-to-get-city-information-using-lookup-zipcode-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Go to USPS home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Hover over mail \u0026 ship and click on lookup a zipcode",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click on cities by zipcode",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Insert a valid \"\u003cZipcode\u003e\" and submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Varify it return valid cityname against the zipcode",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "users-ability-to-lookup-city-using-zipcode;user-should-able-to-get-city-information-using-lookup-zipcode-feature;",
  "rows": [
    {
      "cells": [
        "Zipcode"
      ],
      "line": 13,
      "id": "users-ability-to-lookup-city-using-zipcode;user-should-able-to-get-city-information-using-lookup-zipcode-feature;;1"
    },
    {
      "cells": [
        "11218"
      ],
      "line": 14,
      "id": "users-ability-to-lookup-city-using-zipcode;user-should-able-to-get-city-information-using-lookup-zipcode-feature;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3370295300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to get city information using lookup zipcode feature",
  "description": "",
  "id": "users-ability-to-lookup-city-using-zipcode;user-should-able-to-get-city-information-using-lookup-zipcode-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@usps"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Go to USPS home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Hover over mail \u0026 ship and click on lookup a zipcode",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click on cities by zipcode",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Insert a valid \"11218\" and submit",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Varify it return valid cityname against the zipcode",
  "keyword": "Then "
});
formatter.match({
  "location": "UspsLookupZipCodeSteps.go_to_USPS_home_page()"
});
formatter.result({
  "duration": 3868689200,
  "status": "passed"
});
formatter.match({
  "location": "UspsLookupZipCodeSteps.hover_over_mail_ship_and_click_on_lookup_a_zipcode()"
});
formatter.result({
  "duration": 3233061700,
  "status": "passed"
});
formatter.match({
  "location": "UspsLookupZipCodeSteps.click_on_cities_by_zipcode()"
});
formatter.result({
  "duration": 4122444500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11218",
      "offset": 16
    }
  ],
  "location": "UspsLookupZipCodeSteps.insert_a_valid_and_submit(String)"
});
formatter.result({
  "duration": 2200401300,
  "status": "passed"
});
formatter.match({
  "location": "UspsLookupZipCodeSteps.varify_it_return_valid_cityname_against_the_zipcode()"
});
formatter.result({
  "duration": 222363300,
  "status": "passed"
});
formatter.after({
  "duration": 141100,
  "status": "passed"
});
formatter.uri("03.UspsCalculatePrice.feature");
formatter.feature({
  "line": 2,
  "name": "Users ability to calculate a shiping price",
  "description": "",
  "id": "users-ability-to-calculate-a-shiping-price",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@usps"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should able to calculate using calculate a price feature",
  "description": "",
  "id": "users-ability-to-calculate-a-shiping-price;user-should-able-to-calculate-using-calculate-a-price-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to USPS.com home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Hover over mail \u0026 ship and click on Calculate a price",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on calculate postcard price",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Fill with \"\u003cSmall\u003e\" and \"\u003cLarge\u003e\" quantities and click on calculate",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Varify the total price is correct",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "users-ability-to-calculate-a-shiping-price;user-should-able-to-calculate-using-calculate-a-price-feature;",
  "rows": [
    {
      "cells": [
        "Small",
        "Large"
      ],
      "line": 12,
      "id": "users-ability-to-calculate-a-shiping-price;user-should-able-to-calculate-using-calculate-a-price-feature;;1"
    },
    {
      "cells": [
        "2",
        "2"
      ],
      "line": 13,
      "id": "users-ability-to-calculate-a-shiping-price;user-should-able-to-calculate-using-calculate-a-price-feature;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3448096600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should able to calculate using calculate a price feature",
  "description": "",
  "id": "users-ability-to-calculate-a-shiping-price;user-should-able-to-calculate-using-calculate-a-price-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@usps"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to USPS.com home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Hover over mail \u0026 ship and click on Calculate a price",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on calculate postcard price",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Fill with \"2\" and \"2\" quantities and click on calculate",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Varify the total price is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "UspsCalculatePriceSteps.navigate_to_USPS_com_home_page()"
});
formatter.result({
  "duration": 3367058500,
  "status": "passed"
});
formatter.match({
  "location": "UspsCalculatePriceSteps.hover_over_mail_ship_and_click_on_Calculate_a_price()"
});
formatter.result({
  "duration": 3318862600,
  "status": "passed"
});
formatter.match({
  "location": "UspsCalculatePriceSteps.click_on_calculate_postcard_price()"
});
formatter.result({
  "duration": 1855759200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    },
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "UspsCalculatePriceSteps.fill_with_and_quantities_and_click_on_calculate(String,String)"
});
formatter.result({
  "duration": 181510000,
  "status": "passed"
});
formatter.match({
  "location": "UspsCalculatePriceSteps.varify_the_total_price_is_correct()"
});
formatter.result({
  "duration": 1157230400,
  "status": "passed"
});
formatter.after({
  "duration": 104400,
  "status": "passed"
});
formatter.uri("04.UspsTrackingShipment.feature");
formatter.feature({
  "line": 2,
  "name": "Users ability to track a shipment",
  "description": "",
  "id": "users-ability-to-track-a-shipment",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@usps"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should able to track using tracking feature with valid and invalid information",
  "description": "",
  "id": "users-ability-to-track-a-shipment;user-should-able-to-track-using-tracking-feature-with-valid-and-invalid-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to USPS.com home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Hover over to track and manage and click on tracking",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Insert valid \"\u003cvalidTrackingNumber\u003e\" and click on track button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify valid tracking information",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Insert invalid \"\u003cinValidTrackingNumber\u003e\" and click on track button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify invalid tracking information",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "users-ability-to-track-a-shipment;user-should-able-to-track-using-tracking-feature-with-valid-and-invalid-information;",
  "rows": [
    {
      "cells": [
        "validTrackingNumber",
        "inValidTrackingNumber"
      ],
      "line": 13,
      "id": "users-ability-to-track-a-shipment;user-should-able-to-track-using-tracking-feature-with-valid-and-invalid-information;;1"
    },
    {
      "cells": [
        "9374889727009082699535",
        "11001902004365000245082310"
      ],
      "line": 14,
      "id": "users-ability-to-track-a-shipment;user-should-able-to-track-using-tracking-feature-with-valid-and-invalid-information;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3393616200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to track using tracking feature with valid and invalid information",
  "description": "",
  "id": "users-ability-to-track-a-shipment;user-should-able-to-track-using-tracking-feature-with-valid-and-invalid-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@usps"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to USPS.com home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Hover over to track and manage and click on tracking",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Insert valid \"9374889727009082699535\" and click on track button",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify valid tracking information",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Insert invalid \"11001902004365000245082310\" and click on track button",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify invalid tracking information",
  "keyword": "Then "
});
formatter.match({
  "location": "UspsCalculatePriceSteps.navigate_to_USPS_com_home_page()"
});
formatter.result({
  "duration": 3420968400,
  "status": "passed"
});
formatter.match({
  "location": "UspsTrackingSteps.hover_over_to_track_and_manage_and_click_on_tracking()"
});
formatter.result({
  "duration": 3165068700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9374889727009082699535",
      "offset": 14
    }
  ],
  "location": "UspsTrackingSteps.insert_valid_and_click_on_track_button(String)"
});
formatter.result({
  "duration": 3315481700,
  "status": "passed"
});
formatter.match({
  "location": "UspsTrackingSteps.verify_valid_tracking_information()"
});
formatter.result({
  "duration": 2564360700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11001902004365000245082310",
      "offset": 16
    }
  ],
  "location": "UspsTrackingSteps.insert_invalid_and_click_on_track_button(String)"
});
formatter.result({
  "duration": 6005595200,
  "status": "passed"
});
formatter.match({
  "location": "UspsTrackingSteps.verify_invalid_tracking_information()"
});
formatter.result({
  "duration": 2170801100,
  "status": "passed"
});
formatter.after({
  "duration": 92700,
  "status": "passed"
});
formatter.uri("05.UspsShoppingCart.feature");
formatter.feature({
  "line": 2,
  "name": "Users ability to add goods on shopping cart.",
  "description": "",
  "id": "users-ability-to-add-goods-on-shopping-cart.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@usps"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3395074200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should able to modify shopping cart.",
  "description": "",
  "id": "users-ability-to-add-goods-on-shopping-cart.;user-should-able-to-modify-shopping-cart.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Visit to USPS.com home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Hover over postal Store and Click on Stamps.",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on U.S. Flag",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Add to Cart.",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on keep shopping.",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Cards \u0026 Envelopes link.",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Crafty Gingham Magnetic Note List.",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on Add to cart.",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on View cart.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Clear shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Varify the Shoppoing cart is clear.",
  "keyword": "Then "
});
formatter.match({
  "location": "UspsShoppingCartSteps.visit_to_USPS_com_home_page()"
});
formatter.result({
  "duration": 3616275300,
  "status": "passed"
});
formatter.match({
  "location": "UspsShoppingCartSteps.hover_over_postal_Store_and_Click_on_Stamps()"
});
formatter.result({
  "duration": 1406894300,
  "status": "passed"
});
formatter.match({
  "location": "UspsShoppingCartSteps.click_on_U_S_Flag()"
});
formatter.result({
  "duration": 3150383900,
  "status": "passed"
});
formatter.match({
  "location": "UspsShoppingCartSteps.click_on_Add_to_Cart()"
});
formatter.result({
  "duration": 1114287900,
  "status": "passed"
});
formatter.match({
  "location": "UspsShoppingCartSteps.click_on_keep_shopping()"
});
formatter.result({
  "duration": 2442902500,
  "status": "passed"
});
formatter.match({
  "location": "UspsShoppingCartSteps.click_on_Cards_Envelopes_link()"
});
formatter.result({
  "duration": 2805603400,
  "status": "passed"
});
formatter.match({
  "location": "UspsShoppingCartSteps.click_on_Crafty_Gingham_Magnetic_Note_List()"
});
formatter.result({
  "duration": 2562566000,
  "status": "passed"
});
formatter.match({
  "location": "UspsShoppingCartSteps.click_on_Add_to_cart()"
});
formatter.result({
  "duration": 1121725700,
  "status": "passed"
});
formatter.match({
  "location": "UspsShoppingCartSteps.click_on_View_cart()"
});
formatter.result({
  "duration": 3602365600,
  "status": "passed"
});
formatter.match({
  "location": "UspsShoppingCartSteps.click_on_Clear_shopping_cart()"
});
formatter.result({
  "duration": 3817580600,
  "status": "passed"
});
formatter.match({
  "location": "UspsShoppingCartSteps.varify_the_Shoppoing_cart_is_clear()"
});
formatter.result({
  "duration": 2148370100,
  "status": "passed"
});
formatter.after({
  "duration": 112800,
  "status": "passed"
});
formatter.uri("06.UspsScheduleAPickup.feature");
formatter.feature({
  "line": 2,
  "name": "Users ability to request a pickup",
  "description": "",
  "id": "users-ability-to-request-a-pickup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@usps"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3432301200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should able to schedule a pickup request using Schedule a Pickup service",
  "description": "",
  "id": "users-ability-to-request-a-pickup;user-should-able-to-schedule-a-pickup-request-using-schedule-a-pickup-service",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Visit Usps Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Hover over mail and ship and click on Schedule a pickup",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Insert Pickup location details.",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on check availability",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify if service is available",
  "keyword": "Then "
});
formatter.match({
  "location": "UspsScheduleAPickupSteps.visit_Usps_Homepage()"
});
formatter.result({
  "duration": 3794717300,
  "status": "passed"
});
formatter.match({
  "location": "UspsScheduleAPickupSteps.hover_over_mail_and_ship_and_click_on_Schedule_a_pickup()"
});
formatter.result({
  "duration": 3723929800,
  "status": "passed"
});
formatter.match({
  "location": "UspsScheduleAPickupSteps.insert_Pickup_location_details()"
});
formatter.result({
  "duration": 1053634000,
  "status": "passed"
});
formatter.match({
  "location": "UspsScheduleAPickupSteps.click_on_check_availability()"
});
formatter.result({
  "duration": 2099489500,
  "status": "passed"
});
formatter.match({
  "location": "UspsScheduleAPickupSteps.verify_if_service_is_available()"
});
formatter.result({
  "duration": 1067958500,
  "status": "passed"
});
formatter.after({
  "duration": 41800,
  "status": "passed"
});
});