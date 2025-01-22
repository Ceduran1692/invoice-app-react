export const invoice= {
    id: 10,
    name: 'componentes PC',
    client:{
        name:'Pepe',
        lastname:'Doe',
        address: {
            country: 'USA',
            city:' Los Angeles',
            street: 'test',
            number: 123,
        },
    },
    company:{
        name: 'New EGG',
        fiscalNumber:'1234567'
    },
    items:[
        {
            product:'CPU Intel I7',
            price: 499,
            quantity:1
        },
        {
            product:'Redragon Keyboard',
            price: 60,
            quantity:1
        },
        {
            product:'Monitor Asus',
            price: 350,
            quantity:3
        },
    ],
    
}