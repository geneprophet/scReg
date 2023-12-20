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
  const [location, setLocation] = useState('1:55055000..56061000');
  const [alltracks, setAlltracks] = useState(tracks);
  const [allsessions, setAllsessions] = useState(defaultSession);
  const [allviews, setAllviews] = useState(defaultSession.view.tracks);
  useEffect(() => {
    if (props.data.type == 'bw') {
      // console.log(props.data.taskid);
      setLocation(
        props.data.chr + ':' + props.data.start + '..' + props.data.end,
      );
      // add taskid track
      const new_track = {
        type: 'QuantitativeTrack',
        trackId: props.data.taskid,
        name: props.data.taskid,
        assemblyNames: ['hg19'],
        category: ['Your Tasks'],
        adapter: {
          type: 'BigWigAdapter',
          bigWigLocation: {
            uri:
              'http://screg.sdfmu.edu.cn/taskout/' +
              props.data.type +
              '/' +
              props.data.taskid +
              '.bw',
            locationType: 'UriLocation',
          },
        },
      };
      // setAlltracks(current => [...current, new_track])
      setAlltracks([...alltracks, new_track]);
    } else if (props.data.type == 'bedpe') {
      setLocation(
        props.data.chr + ':' + props.data.start + '..' + props.data.end,
      );
      const new_track = {
        type: 'VariantTrack',
        trackId: props.data.taskid,
        name: props.data.taskid,
        assemblyNames: ['hg19'],
        category: ['Your Tasks'],
        adapter: {
          type: 'BedpeAdapter',
          bedpeLocation: {
            uri:
              'http://screg.sdfmu.edu.cn/taskout/' +
              props.data.type +
              '/' +
              props.data.taskid +
              '.bedpe',
            locationType: 'UriLocation',
          },
        },
        displays: [
          {
            type: 'LinearPairedArcDisplay',
            displayId: props.data.taskid + '-LinearPairedArcDisplay',
          },
          {
            type: 'LinearVariantDisplay',
            displayId: props.data.taskid + '-LinearVariantDisplay',
          },
          {
            type: 'ChordVariantDisplay',
            displayId: props.data.taskid + '-ChordVariantDisplay',
          },
        ],
      };
      setAlltracks([...alltracks, new_track]);
    }
  }, [props.data.taskid]);
  useEffect(() => {
    if (props.data.type == 'bw') {
      const new_view = {
        type: 'QuantitativeTrack',
        configuration: props.data.taskid,
        displays: [
          {
            type: 'LinearWiggleDisplay',
            displayId: props.data.taskid,
          },
        ],
      };
      setAllviews([...allviews, new_view]);
      setAllsessions({
        ...allsessions,
        view: {
          id: 'linearGenomeView',
          type: 'LinearGenomeView',
          tracks: allviews,
        },
      });
    } else if (props.data.type == 'bedpe') {
      const new_view = {
        type: 'VariantTrack',
        configuration: props.data.taskid,
        displays: [
          {
            type: 'LinearPairedArcDisplay',
            displayId: props.data.taskid + '-LinearPairedArcDisplay',
          },
          {
            type: 'LinearVariantDisplay',
            displayId: props.data.taskid + '-LinearVariantDisplay',
          },
          {
            type: 'ChordVariantDisplay',
            displayId: props.data.taskid + '-ChordVariantDisplay',
          },
        ],
      };
      setAllviews([...allviews, new_view]);
      setAllsessions({
        ...allsessions,
        view: {
          id: 'linearGenomeView',
          type: 'LinearGenomeView',
          tracks: allviews,
        },
      });
    }
  }, [alltracks]);
  const state = createViewState({
    assembly: assembly,
    aggregateTextSearchAdapters: aggregateTextSearchAdapters,
    tracks: alltracks,
    // location: '10:29838737..29838819',
    location: location,
    defaultSession: allsessions,
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
