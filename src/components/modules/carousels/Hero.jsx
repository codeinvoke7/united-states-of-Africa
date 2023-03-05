import { Carousel, CarouselItem } from './components';
import PropTypes from 'prop-types';
import { usafLogo } from 'assets/icons';

export default function Hero({ ...rest }) {
  return (
    <div className="" {...rest}>
      <Carousel>
        <CarouselItem className={Carousel}>
          <img src={usafLogo} className="w-full" />
        </CarouselItem>

        <CarouselItem>
          <img src={usafLogo} className="w-full" />
        </CarouselItem>

        <CarouselItem className={Carousel}>
          <img src={usafLogo} className="w-full" />
        </CarouselItem>

        <CarouselItem>
          <img src={usafLogo} className="w-full" />
        </CarouselItem>

        <CarouselItem className={Carousel}>
          <img src={usafLogo} className="w-full" />
        </CarouselItem>

        <CarouselItem>
          <img src={usafLogo} className="w-full" />
        </CarouselItem>

        <CarouselItem className={Carousel}>
          <img src={usafLogo} className="w-full" />
        </CarouselItem>

        <CarouselItem>
          <img src={usafLogo} className="w-full" />
        </CarouselItem>

        <CarouselItem className={Carousel}>
          <img src={usafLogo} className="w-full" />
        </CarouselItem>

        <CarouselItem>
          <img src={usafLogo} className="w-full" />
        </CarouselItem>
      </Carousel>
    </div>
  );
}

Hero.propTypes = {
  children: PropTypes.any
};
