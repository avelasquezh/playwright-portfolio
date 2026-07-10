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
    Backpack: {
        BTN: 'add-to-cart-sauce-labs-backpack',
        Name: 'Sauce Labs Backpack',
    },

    BikeLight: {
        BTN: 'add-to-cart-sauce-labs-bike-light',
        Name: 'Sauce Labs Bike Light',
    },

    BoltTShirt: {
        BTN: 'add-to-cart-Sauce-Labs-Bolt-T-Shirt',
        Name: 'Sauce Labs Bolt T-Shirt',
    },

    FleeceJacket: {
        BTN: 'add-to-cart-Sauce-Labs-Fleece-Jacket',
        Name: 'Sauce Labs Fleece Jacket',
    },

    Onesie: {
        BTN: 'add-to-cart-Sauce-Labs-Onesie',
        Name: 'Sauce Labs Onesie',
    },

    TShirtRed: {
        BTN: 'add-to-cart-Test.allTheThings()-T-Shirt-(Red)',
        Name: 'Test.allTheThings() T-Shirt (Red)',
    },    
}
export const apiData = {
    newPost:{
        title: 'Playwright Portfolio test',
        body: 'API Testing',
        userId: 1
    }
}
