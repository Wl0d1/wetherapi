
import { useState} from "react";

const useFSearchAutocomplete = () => {
  const [search, setSearch] = useState('')

  const API_KEY = "AIzaSyCS6ssOg_1inTGb5ed9e7QFx3oj3atRMV4";
  const API_URL = `  https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initMap
  `;

  const onSearchAutocomplete = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((search) => setSearch(search));
  };
};

// import React from 'react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';
 
// class LocationSearchInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { address: '' };
//   }
 
//   handleChange = address => {
//     this.setState({ address });
//   };
 
//   handleSelect = address => {
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(latLng => console.log('Success', latLng))
//       .catch(error => console.error('Error', error));
//   };
 
//   render() {
//     return (
//       <PlacesAutocomplete
//         value={this.state.address}
//         onChange={this.handleChange}
//         onSelect={this.handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: 'Search Places ...',
//                 className: 'location-search-input',
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active
//                   ? 'suggestion-item--active'
//                   : 'suggestion-item';
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                 return (
//                   <div
//                     {...getSuggestionItemProps(suggestion, {
//                       className,
//                       style,
//                     })}
//                   >
//                     <span>{suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     );
//   }
// }