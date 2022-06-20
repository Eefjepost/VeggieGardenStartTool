import React, { useState } from "react";
import {createGlobalState} from 'react-hooks-global-state';

export const { useGlobalState, setGlobalState } = createGlobalState({selected: '', location: 'Northern Hemisphere'});



