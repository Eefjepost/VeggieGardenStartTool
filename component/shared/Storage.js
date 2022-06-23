import React from 'react';
import {createGlobalState} from 'react-hooks-global-state';


export const { useGlobalState, setGlobalState } = createGlobalState({selected: '', geolocation: 'Northern Hemisphere'});



