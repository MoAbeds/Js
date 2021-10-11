import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchCode } from './switch_weather_codes';
import classnames from 'classnames';
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


 class WeatherList extends Component {

  /** This Method For Check if Weather is true will Render Elements
   *  but Before that Check if the length is odd or Even (this is just to Render The carousel NThing Fansy ) */

  RenderCards(){
    const {weather} = this.props;
   
  if(weather){
    if((this.props.weather.length %2) ===0 ){

      return(

        <React.Fragment>
          {weather.map((weather =>(
           <Link to={`/weather/${weather.city.id}`}>
            <button className={classnames({"btnclicktoid":this.props.changeStyle},{"btnclicktoidnew":!this.props.changeStyle}) }>

              <h5 className={classnames({"cityName":this.props.changeStyle},{"cityNamenew":!this.props.changeStyle}) } >{weather.city.name},{weather.city.country}</h5>

                <div className="weathericoncard" >{switchCode(weather.list[0].weather[0].id)}</div>

                  <div className="tempo" >

                      <h3 className={classnames({"maintempcard":this.props.changeStyle},{"maintempcardnew":!this.props.changeStyle}) }>{weather.list[0].main.temp.toFixed()}°</h3>
                      <p className={classnames({"weathercarddescription":this.props.changeStyle},{"weathercarddescriptionnew":!this.props.changeStyle}) }>{weather.list[0].weather[0].description}</p></div>

                    <div  className="maxtempdiv">

                        <i class="fas fa-sort-up"></i>
                        <h5 className={classnames({"maxtempcardtext":this.props.changeStyle},{"maxtempcardtextnew":!this.props.changeStyle}) } >{weather.list[0].main.temp_max.toFixed()}</h5>
                        <p className='maxpred'>Max</p>

                </div>

                  <div className={classnames({"mintempdiv":this.props.changeStyle},{"mintempdivnew":!this.props.changeStyle}) }  >

                    <i class="fas fa-sort-down"></i>
                    <h5 className={classnames({"mintempcard":this.props.changeStyle},{"mintempcardnew":!this.props.changeStyle}) }>{weather.list[0].main.temp_min.toFixed()}</h5>
                    <p className='minpgreen' >Min</p>
      
            </div>
            </button>
        </Link> 
        
          )))}

        </React.Fragment>
      )

    }else{

      return(

        <React.Fragment>

          {weather.map((weather =>(

        <Link to={`/weather/${weather.city.id}`}>
          <button className={classnames({"btnclicktoid":this.props.changeStyle},{"btnclicktoidnew":!this.props.changeStyle}) }>

            <h5 className={classnames({"cityName":this.props.changeStyle},{"cityNamenew":!this.props.changeStyle}) } >{weather.city.name},{weather.city.country}</h5>

              <div className="weathericoncard" >{switchCode(weather.list[0].weather[0].id)}</div>

                <div className="tempo" >

                    <h3 className={classnames({"maintempcard":this.props.changeStyle},{"maintempcardnew":!this.props.changeStyle}) }>{weather.list[0].main.temp.toFixed()}°</h3>
                    <p className={classnames({"weathercarddescription":this.props.changeStyle},{"weathercarddescriptionnew":!this.props.changeStyle}) }>{weather.list[0].weather[0].description}</p></div>

                  <div  className="maxtempdiv">

                      <i class="fas fa-sort-up"></i>
                      <h5 className={classnames({"maxtempcardtext":this.props.changeStyle},{"maxtempcardtextnew":!this.props.changeStyle}) } >{weather.list[0].main.temp_max.toFixed()}</h5>
                      <p className='maxpred'>Max</p>

              </div>

                <div className={classnames({"mintempdiv":this.props.changeStyle},{"mintempdivnew":!this.props.changeStyle}) }  >

                  <i class="fas fa-sort-down"></i>
                  <h5 className={classnames({"mintempcard":this.props.changeStyle},{"mintempcardnew":!this.props.changeStyle}) }>{weather.list[0].main.temp_min.toFixed()}</h5>
                  <p className='minpgreen' >Min</p>

              </div>
              </button>
              </Link> 

          )))}

        </React.Fragment>
      )
    }
    


  }
    
    
  }
  
  render() {
     return (
        
    
            <React.Fragment>
             
                    <CarouselProvider
                    naturalSlideWidth={300}
                    naturalSlideHeight={125}
                    totalSlides={3}
                    touchEnabled={true}
                    >    
                      <Slider>
                        {this.RenderCards()}
                       </Slider>

                      <div className="backbtncoursel" >

                      <ButtonBack><i class="fas fa-chevron-circle-left"></i></ButtonBack>

                      </div>

                      <div className={classnames({"nextbtncoursel":this.props.changeStyle},{"nextbtncourselnew":!this.props.changeStyle}) }   >

                      <ButtonNext><i class="fas fa-chevron-circle-right"></i></ButtonNext>

                    </div>

                     </CarouselProvider>

                </React.Fragment>

    )
  }
   
    
}

const mapStateToProps = state => ({
    weather: state.weather.weather,
    changeStyle: state.weather.changeStyle
})


export default connect (mapStateToProps)(WeatherList);