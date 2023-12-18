import React, { useEffect, useState } from 'react';
import '@fontsource/roboto';
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view';
import assembly from './assembly';
import tracks from './tracks';
import defaultSession from './defaultSession';
import aggregateTextSearchAdapters from './aggregateTextSearchAdapters';

export default function View(props: any) {
  // const [location, setLocation] = useState();
  const [location, setLocation] = useState('10:29838737..29838819');
  useEffect(() => {
    if (props.data) {
      setLocation(
        props.data.chr + ':' + props.data.start + '..' + props.data.end,
      );
    }
  }, [props]);
  const state = createViewState({
    assembly,
    aggregateTextSearchAdapters,
    tracks,
    // location: '10:29838737..29838819',
    location: location,
    defaultSession,
    configuration: {
      theme: {
        palette: {
          primary: {
            main: '#311b92',
          },
          secondary: {
            main: '#51557E',
          },
          tertiary: {
            main: '#f57c00',
          },
          quaternary: {
            main: '#d50000',
          },
          bases: {
            A: { main: '#98FB98' },
            C: { main: '#87CEEB' },
            G: { main: '#DAA520' },
            T: { main: '#DC143C' },
          },
        },
      },
    },
  });
  return <JBrowseLinearGenomeView viewState={state} />;
}
