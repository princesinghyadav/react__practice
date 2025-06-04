import { useReducer } from "react"

const initState = {
  name: "",
  age: "",
  gender: "",
  address: {
    building: "",
    street: "",
    city: "",
    state: "",
    coordinates: {
      latitude: "",
      longitude: "",
    },
  },
};


function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_NAME":{
        return {
            ...state,
            ...payload
        }
    }
    case "UPDATE_AGE":{
        return {
            ...state,
            ...payload
        }
    }
    case "UPDATE_GENDER": {
      return {
        ...state,
        ...payload,
      };
    }
    case "UPDATE_ADDRESS_BUILDING_NAME": {
      return {
        ...state,
        address: {
          ...state.address,
          ...payload,
        },
      };
    }
    case "UPDATE_ADDRESS_STATE_NAME": {
      return {
        ...state,
        address: {
          ...state.address,
          ...payload,
        },
      };
    }
    case "UPDATE_ADDRESS_CITY_NAME": {
      return {
        ...state,
        address: {
          ...state.address,
          ...payload,
        },
      };
    }
    case "UPDATE_ADDRESS_STATE_NAME": {
      return {
        ...state,
        address: {
          ...state.address,
          ...payload,
        },
      };
    }
    case 'UPDATE_ADDRESS_STREET_NAME':{
      return {
        ...state,
        address:{
          ...state.address,
          ...payload,
        },
      }
    }
    case "UPDATE_ADDRESS_COORDINATES_LATITUDE": {
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            ...payload,
          },
        },
      };
    }
    case 'UPDATE_ADDRESS_COORDINATES_LONGITUDE':{
      return {
        ...state,
        adress: {
          ...state.address,
          coordinates : {
            ...state.address.coordinates,
            ...payload,
          }
        }
      }
    }
    default: {
      throw new Error(`action type is invalid`);
    }
  }
}
export default function  Formreducer(){
 const [userDetails, dispatch] = useReducer(reducer, initState);
  
 function handleSubmit(e:any){
  e.preventDefault()
console.log(userDetails)
   
 }
 const {
    name,
    age,
    gender,
    address: {
      building,
      street,
      city,
      state,
      coordinates: { latitude, longitude },
    },
  } = userDetails;

  
    return (

        <div className="styling">
       <form onSubmit={handleSubmit} className="form">

        <label htmlFor="name">
          Name :
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => {
              dispatch({
                type: "UPDATE_NAME",
                payload: {
                  [e.target.id]: e.target.value, // { name : "batman" }
                },
              });
            }}
          />
        </label>

        <label htmlFor="age">
          Age :
          <input
            id="age"
            type="number"
            value={age}
            placeholder="Age"
            onChange={(e) => {
              dispatch({
                type: "UPDATE_AGE",
                payload: {
                  [e.target.id]: +e.target.value,
                },
              });
            }}
          />
        </label>

        <label htmlFor="gender">
          Gender :
          <select
            id="gender"
            value={gender}
            onChange={function (e) {
              dispatch({
                type: "UPDATE_GENDER",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          >
            <option value="">---Select Gender---</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </label>

        <label htmlFor="building">
          Address - Building Name :
          <input
            id="building"
            type="text"
            value={building}
            placeholder="Building Name"
            onChange={(e) => {
              dispatch({
                type: "UPDATE_ADDRESS_BUILDING_NAME",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
        </label>

        <label htmlFor="street">
         <input id="street"
                placeholder="Enter the street "
                value={street}
                type="text"
                onChange={(e)=>{
                  dispatch({
                    type:'UPDATE_ADDRESS_STREET_NAME',
                    payload: {
                      [e.target.id]:e.target.value,
                    },
                  })
                }}
         />
        </label>

        <label htmlFor="city">
         <input id="city"
                placeholder="Enter the city"
                value={city}
                type="text"
                onChange={(e)=>{
                  dispatch({
                    type:'UPDATE_ADDRESS_CITY_NAME',
                    payload: {
                      [e.target.id]:e.target.value,
                    },
                  })
                }}
         />
        </label>

        <label htmlFor="state">
         <input id="state"
                placeholder="Enter the state "
                value={state}
                type="text"
                onChange={(e)=>{
                  dispatch({
                    type:'UPDATE_ADDRESS_STATE_NAME',
                    payload: {
                      [e.target.id]:e.target.value,
                    },
                  })
                }}
         />
        </label>

        <label htmlFor="latitude" > 
          Address - Coordinates - Latitude :
          <input
            id="latitude"
            type="text"
            value={latitude}
            placeholder="Latitude"
            onChange={(e) => {
              dispatch({
                type: "UPDATE_ADDRESS_COORDINATES_LATITUDE",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
        </label>

        <label htmlFor="longitude" > 
          Address - Coordinates - Longitude :
          <input
            id="longitude"
            type="text"
            value={longitude}
            placeholder="longitude"
            onChange={(e) => {
              dispatch({
                type: "UPDATE_ADDRESS_COORDINATES_LONGITUDE",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
        </label>

        <button type="submit">SUbmit</button>
      </form>
        </div>
    )
}