export async function GET(request) {
    const sampleProducts={
        id: 1,
        name: "Laptop",
        price: "₹84,999",
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/d/4/-original-imaha9gqfarm6w2a.jpeg?q=70"
      }
      return new Response(JSON.stringify(products), {
        status:200
      });
    }