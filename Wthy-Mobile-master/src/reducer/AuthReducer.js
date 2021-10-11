import { SIGNUPUSER,LOGIN_USER,LOGIN_USER_FAIL
    ,LOGIN_USER_SUCCESS,SIGNUPUSER_FAIL
    ,SIGNUPUSER_SUCCESS,
    SIGN_OUT,FETCH_PROFILE,GET_WEATHER,SIGNUPLOGINSUCC,GET_WEATHER_BY_ID
  } from '../Actions/types'



const initialState = {
    
    user: null,
    error: null,
    signUpLoading: false,
    LoginLoading: false,
    Profile:null,
    weather: [
      {
        "cod": "200",
        "message": 0.0042,
        "cnt": 5,
        "list": [
          {
            "dt": 1553580000,
            "main": {
              "temp": 4.61,
              "temp_min": 4.61,
              "temp_max": 6.52,
              "pressure": 1020.71,
              "sea_level": 1020.71,
              "grnd_level": 977.99,
              "humidity": 87,
              "temp_kf": -1.91
            },
            "weather": [
              {
                "id": 800,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "clouds": {
              "all": 92
            },
            "wind": {
              "speed": 3.41,
              "deg": 23.5012
            },
            "rain": {
              "3h": 0.06
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2019-03-26 06:00:00"
          },
          {
            "dt": 1553590800,
            "main": {
              "temp": 3.06,
              "temp_min": 3.06,
              "temp_max": 4.49,
              "pressure": 1022.25,
              "sea_level": 1022.25,
              "grnd_level": 979.22,
              "humidity": 69,
              "temp_kf": -1.43
            },
            "weather": [
              {
                "id": 800,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "clouds": {
              "all": 36
            },
            "wind": {
              "speed": 3.16,
              "deg": 21.5012
            },
            "rain": {
              "3h": 0.02
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2019-03-26 09:00:00"
          },
          {
            "dt": 1553601600,
            "main": {
              "temp": 0.65,
              "temp_min": 0.65,
              "temp_max": 1.61,
              "pressure": 1024.76,
              "sea_level": 1024.76,
              "grnd_level": 981.34,
              "humidity": 60,
              "temp_kf": -0.95
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 3.01,
              "deg": 29.5002
            },
            "rain": {
              
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2019-03-26 12:00:00"
          },
          {
            "dt": 1553612400,
            "main": {
              "temp": 5.17,
              "temp_min": 5.17,
              "temp_max": 5.65,
              "pressure": 1026.11,
              "sea_level": 1026.11,
              "grnd_level": 983.11,
              "humidity": 47,
              "temp_kf": -0.48
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.88,
              "deg": 41.0024
            },
            "rain": {
              
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2019-03-26 15:00:00"
          },
          {
            "dt": 1553623200,
            "main": {
              "temp": 10.1,
              "temp_min": 10.1,
              "temp_max": 10.1,
              "pressure": 1025.45,
              "sea_level": 1025.45,
              "grnd_level": 983.17,
              "humidity": 45,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.97,
              "deg": 35.0023
            },
            "rain": {
              
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2019-03-26 18:00:00"
          }
        ],
        "city": {
          "id": 4298960,
          "name": "London",
          "coord": {
            "lat": 37.129,
            "lon": -84.0833
          },
          "country": "US",
          "population": 7993
        }
      
      }
    ],

    cardWeather: [

      {
        "cod": "200",
        "message": 0.0042,
        "cnt": 5,
        "list": [
          {
            "dt": 1553580000,
            "main": {
              "temp": 4.61,
              "temp_min": 4.61,
              "temp_max": 6.52,
              "pressure": 1020.71,
              "sea_level": 1020.71,
              "grnd_level": 977.99,
              "humidity": 87,
              "temp_kf": -1.91
            },
            "weather": [
              {
                "id": 800,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "clouds": {
              "all": 92
            },
            "wind": {
              "speed": 3.41,
              "deg": 23.5012
            },
            "rain": {
              "3h": 0.06
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2019-03-26 06:00:00"
          },
          {
            "dt": 1553590800,
            "main": {
              "temp": 3.06,
              "temp_min": 3.06,
              "temp_max": 4.49,
              "pressure": 1022.25,
              "sea_level": 1022.25,
              "grnd_level": 979.22,
              "humidity": 69,
              "temp_kf": -1.43
            },
            "weather": [
              {
                "id": 800,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "clouds": {
              "all": 36
            },
            "wind": {
              "speed": 3.16,
              "deg": 21.5012
            },
            "rain": {
              "3h": 0.02
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2019-03-26 09:00:00"
          },
          {
            "dt": 1553601600,
            "main": {
              "temp": 0.65,
              "temp_min": 0.65,
              "temp_max": 1.61,
              "pressure": 1024.76,
              "sea_level": 1024.76,
              "grnd_level": 981.34,
              "humidity": 60,
              "temp_kf": -0.95
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 3.01,
              "deg": 29.5002
            },
            "rain": {
              
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2019-03-26 12:00:00"
          },
          {
            "dt": 1553612400,
            "main": {
              "temp": 5.17,
              "temp_min": 5.17,
              "temp_max": 5.65,
              "pressure": 1026.11,
              "sea_level": 1026.11,
              "grnd_level": 983.11,
              "humidity": 47,
              "temp_kf": -0.48
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.88,
              "deg": 41.0024
            },
            "rain": {
              
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2019-03-26 15:00:00"
          },
          {
            "dt": 1553623200,
            "main": {
              "temp": 10.1,
              "temp_min": 10.1,
              "temp_max": 10.1,
              "pressure": 1025.45,
              "sea_level": 1025.45,
              "grnd_level": 983.17,
              "humidity": 45,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.97,
              "deg": 35.0023
            },
            "rain": {
              
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2019-03-26 18:00:00"
          }
        ],
        "city": {
          "id": 4298960,
          "name": "London",
          "coord": {
            "lat": 37.129,
            "lon": -84.0833
          },
          "country": "US",
          "population": 7993
        }
      
      }

    ]

    
    

    


}


export default function (state = initialState,action){
    switch (action.type){


        case LOGIN_USER:
        return { ...state, LoginLoading: true, error: '' };

        case LOGIN_USER_SUCCESS:
        return { ...state, user: action.payload,LoginLoading:false  };

      case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed.',LoginLoading: false };



        /** SIGNOUT USER */


      case SIGN_OUT: 
      return initialState
       

        /** Signup user */
       
            case SIGNUPUSER:
            return { ...state, signUpLoading: true, error: '' };

            case SIGNUPLOGINSUCC:
            return { ...state, user: action.payload,signUpLoading:false };
    
          case SIGNUPUSER_FAIL:
            return { ...state, error: 'Authentication Failed.', signUpLoading: false };
        

            case FETCH_PROFILE: 
            return {
              ...state,
              Profile: action.payload
    
            }



            case GET_WEATHER:
            return {
                ...state,
                weather: [action.payload,...state.weather],
                cardWeather: [action.payload,...state.cardWeather]


            }
            

               
        case GET_WEATHER_BY_ID:
        return {
            ...state,
            weather: [action.payload,...state.weather],
        }



            


        default: 
        return state
    }}