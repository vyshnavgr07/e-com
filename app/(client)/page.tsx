import Container from "@/components/header/Container";
import { Button } from "@/components/ui/button";
import ImageSlider from '../../components/imageSlider/ImageSlider'
import HomeBanner from '../../components/HomeBanner'
import img1 from '../../public/img1.jpg'
import img2 from '../../public/img2.jpg'
import img3 from '../../public/img3.jpg'
import ProductGrid from '../../components/products/ProductsGrid'
export default function Home() {
  const images=[img1,img2,img3]
 return (
   <div>
<Container className="py-10">
  <HomeBanner/>
  <div className="w-full  mt-10 h-auto aspect-[5/3] sm:h-[300px] md:h-[400px] ">
  <ImageSlider imageUrls={images} />
</div>
<ProductGrid/>
</Container>
   </div>
  );
}
