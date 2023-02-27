import { CallToActionCarouselItem } from './components';

const carouselsData = [];

export default function CallToActionCarousel() {
  return (
    <div className="">
      {carouselsData.map((carouselData, index) => (
        <CallToActionCarouselItem key={JSON.stringify(carouselData + index)} {...carouselData} />
      ))}
    </div>
  );
}
