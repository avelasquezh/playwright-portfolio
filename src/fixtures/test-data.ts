export const loginData ={
        
    user:{
        validUser: process.env.VALID_USER as string,
        lockedUser: process.env.LOCKED_USER as string,
        problemUser: process.env.PROBLEM_USER as string,
        glitchedUser: process.env.GLITCHED_USER as string,
        errorUser: process.env.ERROR_USER as string,
        visualUser: process.env.VISUAL_USER as string,
        voidUser: '',
    },

    pasword:{
        validPassword: process.env.VALID_PASSWORD as string,
        wrongPassword: process.env.INVALID_PASSWORD as string,
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