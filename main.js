var app = new Vue ({

  el:'#app',

  data: {
    product: "Socks",
    brand:"Vue Master William",
    description:"A pair of warm fuzzy socks",
    image:"./assets/vmSocks-green-onWhite.jpg",
    alt:"William Socks",
    inStock:true,
    inventory:9,
    details:["80% cotton"," 20% plyester","Gender Neutrel"],
    cart:0,
    variants:[
     {
        variantId:1,
      variantColor:"green",
      variantImage:"./assets/vmSocks-green-onWhite.jpg",

    },

    {
     variantId:2,
      variantColor:"blue",
      variantImage:"./assets/vmSocks-blue-onWhite.jpg",

    }

    ]
  },
  methods:{

    AddToCart(){
      this.cart+=1;
      console.log('William');
    },

updateProduct(variantImage){

  this.image=variantImage


  }





  },

  computed:{

    title(){

   return this.brand + ' ' + this.product

    }
  }






});
