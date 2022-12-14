const products = require("./products.json");

//Start pending order
exports.chatbot = async (req, res) => {
  try {
    function inArray(needle, haystack) {
      return needle.some((i) => haystack.includes(i));
    }

    let data = req.body.query;
    data = data.split(" ");

    let firstText = ["hello", "hi", "hey"];
    if (inArray(firstText, data)) {
      return res.status(200).json({
        success: true,
        message: ["Success"],
        n: 0,
        data: "Hi, my name is Chatty. How can I assist you today?",
        entities: [],
      });
    }

    let laptop = ["order laptop", "laptop", "purchase laptop", "buy laptop"];
    if (inArray(laptop, data)) {
      return res.status(200).json({
        success: true,
        message: ["Success"],
        n: 0,
        data: products.products[0].laptop,
        entities: [],
      });
    }

    let shoe = [
      "order shoe",
      "shoe",
      "purchase shoe",
      "buy shoe",
      "order shoes",
      "shoes",
      "purchase shoes",
      "buy shoes",
      "order sneaker",
      "sneaker",
      "purchase sneaker",
      "buy sneaker",
      "order sneakers",
      "sneakers",
      "purchase sneakers",
      "buy sneakers",
    ];
    if (inArray(shoe, data)) {
      return res.status(200).json({
        success: true,
        message: ["Success"],
        n: 0,
        data: products.products[0].shoe,
        entities: [],
      });
    }

    let watch = [
      "order watch",
      "watch",
      "purchase watch",
      "buy watch",
      "order watches",
      "watches",
      "purchase watches",
      "buy watches",
    ];
    if (inArray(watch, data)) {
      return res.status(200).json({
        success: true,
        message: ["Success"],
        n: 0,
        data: products.products[0].watch,
        entities: [],
      });
    }


    let mobile = [
        "mobile",
        "mobile phone",
        "mobile phones",
        "phone",
        "phones"
    ];
    if (inArray(mobile, data)) {
      return res.status(200).json({
        success: true,
        message: ["Success"],
        n: 0,
        data: products.products[0].mobile,
        entities: [],
      });
    }

    let furniture = [
        "bed",
        "cupboard",
        "desk",
        "computer table",
        "dressing table",
        "side table",
        "furniture"
    ];
    if (inArray(furniture, data)) {
      return res.status(200).json({
        success: true,
        message: ["Success"],
        n: 0,
        data: products.products[0].furniture,
        entities: [],
      });
    }

    let perfume = [
        "perfume",
        "perfumes"
    ];
    if (inArray(perfume, data)) {
      return res.status(200).json({
        success: true,
        message: ["Success"],
        n: 0,
        data: products.products[0].perfume,
        entities: [],
      });
    }

    let secondText = ["order", "product", "item", "purchase", "ma"];
    if (inArray(secondText, data)) {
      return res.status(200).json({
        success: true,
        message: ["Success"],
        n: 0,
        data: "Which product do you want to purchase",
        entities: [],
      });
    }

    // else{
    //     return res.status(200).json({
    //         success: true,
    //         message: ["Success"],
    //         n: 0,
    //         data: "I am not able to understand what you are trying to say",
    //         entities: [],
    //       });
    // }
    // console.log(products);
  } catch (e) {
    if (e.errors) {
      return res.status(422).json({
        success: false,
        message: [e.errors[0].message],
        n: 0,
        data: [],
        entities: [e.errors[0].path.toLowerCase()],
      });
    }
    return res.status(500).json({
      success: false,
      message: [e.message],
      n: 0,
      data: [],
      entities: [],
    });
  }
};
