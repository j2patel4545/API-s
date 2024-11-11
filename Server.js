import express from 'express';
import cors from 'cors';

const app = express();
const port = 8500;

app.use(cors()); // Enable CORS if needed

app.get("/", (req, res) => {
  res.json([
    {
      "id": 1,
      "Product_Name": "Floral Printed Maxi Dress",
      "Price": 25.99,
      "Description": "Elegant floral dress with a flowing fit and flare style.",
      "Image_Link": "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25091562/2023/9/21/21d594dc-b90a-4a3a-9a86-8a95e49758071695286352086CHANSIFloralPrintedGeorgetteFitFlareMaxiGownEthnicDress1.jpg"
    },
    {
      "id": 2,
      "Product_Name": "Longline Open Front Jacket",
      "Price": 32.50,
      "Description": "Stylish longline jacket with open front, versatile for layering.",
      "Image_Link": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29535742/2024/5/15/f94546aa-486b-4c0d-bbcd-5d1737db5ee71715763886694ANDWomenViscoseRayonLonglineOpenFrontJacket1.jpg"
    },
    {
      "id": 3,
      "Product_Name": "Sleeveless A-line Dress",
      "Price": 18.75,
      "Description": "Chic A-line dress, perfect for casual outings and gatherings.",
      "Image_Link": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21972748/2023/2/14/221c5634-9c6c-4f93-90c2-0cee48ee16371676375243031Dresses1.jpg"
    }
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
