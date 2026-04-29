export const loginData ={
        
    user:{
        validUser: process.env.VALID_USER!,
        lockedUser: process.env.LOCKED_USER!,
        problemUser: process.env.PROBLEM_USER!,
        glitchedUser: process.env.GLITCHED_USER!,
        errorUser: process.env.ERROR_USER!,
        visualUser: process.env.VISUAL_USER!,
        voidUser: '',
    },

    password:{
        validPassword: process.env.VALID_PASSWORD!,
        wrongPassword: process.env.INVALID_PASSWORD!,
        voidPassword: '',
    }
}

export const checkoutData ={
    name: {
        validName: 'ana',
        voidName: '',
    },

    lastName: {
        validLastName: 'bush',
        voidLastName: '',
    },

    postalCode: {
        validPostalCode: '150011',
        voidPostalCode: '',
    },
}
export const inventoryProducts = {
    sauceLabsBackpack: {
        sauceLabsBackpackBTN: 'add-to-cart-sauce-labs-backpack',
        sauceLabsBackpackName: 'Sauce Labs Backpack',
    },

    sauceLabsBikeLight: {
        sauceLabsBikeLightBTN: 'add-to-cart-Sauce-Labs-Bike-Light',
        sauceLabsBikeLightName: 'Sauce Labs Bike Light',
    },

    sauceLabsBoltTShirt: {
        sauceLabsBoltTShirtBTN: 'add-to-cart-Sauce-Labs-Bolt-T-Shirt',
        sauceLabsBoltTShirtName: 'Sauce Labs Bolt T-Shirt',
    },

    sauceLabsFleeceJacket: {
        sauceLabsFleeceJacketBTN: 'add-to-cart-Sauce-Labs-Fleece-Jacket',
        sauceLabsFleeceJacketName: 'Sauce Labs Fleece Jacket',
    },

    sauceLabsOnesie: {
        sauceLabsOnesieBTN: 'add-to-cart-Sauce-Labs-Onesie',
        sauceLabsOnesieName: 'Sauce Labs Onesie',
    },

    testAllTheThingsTShirtRed: {
        testAllTheThingsTShirtRedBTN: 'add-to-cart-Test.allTheThings()-T-Shirt-(Red)',
        testAllTheThingsTShirtRedName: 'Test.allTheThings() T-Shirt (Red)',
    },    
}