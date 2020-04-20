import React, {Component} from 'react';
import ReactBootstrapCarousel from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import './Banner.css'

const styles = { height: 400, width: "100%" };

class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
          autoplay: true
        };
      }

      onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
      };
      visiableOnSelect = active => {
        console.log(`visiable onSelect active=${active}`);
      };
      slideNext = () => {
        this.slider.slideNext();
      };
      slidePrev = () => {
        this.slider.slidePrev();
      };
      goToSlide = () => {
        this.slider.goToSlide(1);
      };
      autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
      };
   

    render(){
        return (
          <div className="banner">
            <ReactBootstrapCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              leftIcon={this.state.leftIcon}
              rightIcon={this.state.rightIcon}
              onSelect={this._onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
                 <div style={{ ...styles, backgroundColor: "white", opacity:0.5 }}>
                    <div className="carousel-center">It does not matter how slowly you go as long as you do not stop.</div>
                    <div className="carousel-caption">Confucius</div>
                </div>

                <div style={{ ...styles, backgroundColor: "white", opacity:0.5 }}>
                    <div className="carousel-center">If you really want to kill morale, have layoffs every two months for the next two years.</div>
                    <div className="carousel-caption">Tom Peters</div>
                </div>

                <div style={{ ...styles, backgroundColor: "white", opacity:0.5 }}>
                    <div className="carousel-center">Test fast, fail fast, adjust fast.</div>
                    <div className="carousel-caption">Tom Peters</div>
                </div>

                <div style={{ ...styles, backgroundColor: "white", opacity:0.5 }}>
                    <div className="carousel-center">An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage.</div>
                    <div className="carousel-caption">Jack Welch</div>
                </div>
            </ReactBootstrapCarousel>
          </div>

        );
    }

}

export default Banner;