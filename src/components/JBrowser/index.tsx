import React, { useEffect, useState } from 'react';
import '@fontsource/roboto';
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view';
const assembly = {
  name: 'hg19',
  sequence: {
    type: 'ReferenceSequenceTrack',
    trackId: 'refseq_track',
    adapter: {
      type: 'BgzipFastaAdapter',
      fastaLocation: {
        // uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/hg19.fa.gz',
        uri: 'https://jbrowse.org/genomes/hg19/fasta/hg19.fa.gz',
        locationType: 'UriLocation',
      },
      faiLocation: {
        // uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/hg19.fa.gz.fai',
        uri: 'https://jbrowse.org/genomes/hg19/fasta/hg19.fa.gz.fai',
        locationType: 'UriLocation',
      },
      gziLocation: {
        // uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/hg19.fa.gz.gzi',
        uri: 'https://jbrowse.org/genomes/hg19/fasta/hg19.fa.gz.gzi',
        locationType: 'UriLocation',
      },
    },
  },
  aliases: ['GRCh37'],
  refNameAliases: {
    adapter: {
      type: 'RefNameAliasAdapter',
      location: {
        // uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/hg19_aliases.txt',
        uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/hg19/hg19_aliases.txt',
        locationType: 'UriLocation',
      },
    },
  },
};

const tracks = [
  {
    type: 'FeatureTrack',
    trackId: 'ncbi_gff_hg19_2',
    name: 'NCBI RefSeq',
    assemblyNames: ['hg19'],
    category: ['Annotation'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        // uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/GRCh37_latest_genomic.sort.gff.gz',
        uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/hg19/ncbi_refseq/GRCh37_latest_genomic.sort.gff.gz',
        locationType: 'UriLocation',
      },
      index: {
        location: {
          // uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/GRCh37_latest_genomic.sort.gff.gz.tbi',
          uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/hg19/ncbi_refseq/GRCh37_latest_genomic.sort.gff.gz.tbi',
          locationType: 'UriLocation',
        },
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'my_track',
    name: 'Brain-related Trait Variants',
    category: ['Variants'],
    assemblyNames: ['hg19'],
    adapter: {
      type: 'VcfTabixAdapter',
      vcfGzLocation: {
        uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/annotation.sorted.vcf.gz',
        locationType: 'UriLocation',
      },
      index: {
        location: {
          uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/annotation.sorted.vcf.gz.tbi',
          locationType: 'UriLocation',
        },
        indexType: 'TBI',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: '1000genomes_indels',
    name: '1000 genomes',
    assemblyNames: ['hg19'],
    category: ['1000 genomes'],
    adapter: {
      type: 'VcfTabixAdapter',
      vcfGzLocation: {
        // uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/NA12878_high_quality_variant.vcf.gz',
        uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/hg19/NA12878/NA12878_high_quality_variant.vcf.gz',
        locationType: 'UriLocation',
      },
      index: {
        location: {
          // uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/NA12878_high_quality_variant.vcf.gz.tbi',
          uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/hg19/NA12878/NA12878_high_quality_variant.vcf.gz.tbi',
          locationType: 'UriLocation',
        },
        indexType: 'TBI',
      },
    },
  },
  {
    trackId: "my_wiggle_track",
    name: "My Wiggle Track",
    assemblyNames: ["hg19"],
    type: "QuantitativeTrack",
    adapter: {
      type: "BigWig",
      bigWigLocation: {
        uri: "https://www.encodeproject.org/files/ENCFF826HEW/@@download/ENCFF826HEW.bigWig",
        locationType: "UriLocation"
      }
    }
  },
  { type: "VariantTrack",
    trackId: "skbr3_bedpe_arcs",
    name: "SKBR3 BEDPE arcs",
    assemblyNames: [ "hg19" ],
    category: [ "SKBR3" ],
    adapter: {
      type: "BedpeAdapter",
      bedpeLocation: {
        locationType: "UriLocation",
        uri: "https://jbrowse.org/genomes/hg19/skbr3/reads_lr_skbr3.fa_ngmlr-0.2.3_mapped.bam.sniffles1kb_auto_l8_s5_noalt.bedpe"
      }
    },
  },
  {
    type: "MultiQuantitativeTrack",
    trackId: "microarray_multi",
    name: "MultiWig",
    category: ["ENCODE bigWigs"],
    assemblyNames: ["hg19"],
    adapter: {
      type: "MultiWiggleAdapter",
      bigWigs: [
        "https://www.encodeproject.org/files/ENCFF055ZII/@@download/ENCFF055ZII.bigWig",
        "https://www.encodeproject.org/files/ENCFF826HEW/@@download/ENCFF826HEW.bigWig",
        "https://www.encodeproject.org/files/ENCFF858LIM/@@download/ENCFF858LIM.bigWig",
        "https://www.encodeproject.org/files/ENCFF425TNW/@@download/ENCFF425TNW.bigWig",
        "https://www.encodeproject.org/files/ENCFF207RBY/@@download/ENCFF207RBY.bigWig",
        "https://www.encodeproject.org/files/ENCFF289CTN/@@download/ENCFF289CTN.bigWig",
        "https://www.encodeproject.org/files/ENCFF884IEG/@@download/ENCFF884IEG.bigWig",
        "https://www.encodeproject.org/files/ENCFF495SBQ/@@download/ENCFF495SBQ.bigWig",
        "https://www.encodeproject.org/files/ENCFF959EZF/@@download/ENCFF959EZF.bigWig",
        "https://www.encodeproject.org/files/ENCFF926YZX/@@download/ENCFF926YZX.bigWig",
        "https://www.encodeproject.org/files/ENCFF269CHA/@@download/ENCFF269CHA.bigWig",
        "https://www.encodeproject.org/files/ENCFF857KTJ/@@download/ENCFF857KTJ.bigWig",
        "https://www.encodeproject.org/files/ENCFF109KCQ/@@download/ENCFF109KCQ.bigWig",
        "https://www.encodeproject.org/files/ENCFF942TZX/@@download/ENCFF942TZX.bigWig",
        "https://www.encodeproject.org/files/ENCFF140HPM/@@download/ENCFF140HPM.bigWig",
        "https://www.encodeproject.org/files/ENCFF305JRR/@@download/ENCFF305JRR.bigWig",
        "https://www.encodeproject.org/files/ENCFF739FDJ/@@download/ENCFF739FDJ.bigWig",
        "https://www.encodeproject.org/files/ENCFF518OJP/@@download/ENCFF518OJP.bigWig",
        "https://www.encodeproject.org/files/ENCFF810HHS/@@download/ENCFF810HHS.bigWig",
        "https://www.encodeproject.org/files/ENCFF939JSB/@@download/ENCFF939JSB.bigWig",
        "https://www.encodeproject.org/files/ENCFF041TAK/@@download/ENCFF041TAK.bigWig"
      ]
    }
  },
  {
    type: "MultiQuantitativeTrack",
    trackId: "microarray_multi_groups",
    name: "MultiWig (groups)",
    category: ["ENCODE bigWigs"],
    assemblyNames: ["hg19"],
    adapter: {
      type: "MultiWiggleAdapter",
      subadapters: [
        {
          type: "BigWigAdapter",
          name: "k1",
          bigWigLocation: {
            uri: "https://www.encodeproject.org/files/ENCFF055ZII/@@download/ENCFF055ZII.bigWig"
          },
          group: "group1"
        },
        {
          type: "BigWigAdapter",
          name: "k2",
          bigWigLocation: {
            "uri": "https://www.encodeproject.org/files/ENCFF826HEW/@@download/ENCFF826HEW.bigWig"
          },
          group: "group2"
        }
      ]
    }
  }
];

const aggregateTextSearchAdapters = [
  {
    type: 'TrixTextSearchAdapter',
    textSearchAdapterId: 'hg19-index',
    ixFilePath: {
      uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/indexes/trix/aggregate.ix',
      locationType: 'UriLocation',
    },
    ixxFilePath: {
      uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/indexes/trix/aggregate.ixx',
      locationType: 'UriLocation',
    },
    metaFilePath: {
      uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/indexes/trix/aggregate_meta.json',
      locationType: 'UriLocation',
    },
    assemblyNames: ['hg19'],
  },
];

const defaultSession = {
  name: 'My session',
  view: {
    id: 'linearGenomeView',
    type: 'LinearGenomeView',
    tracks: [
      {
        type: 'ReferenceSequenceTrack',
        configuration: 'refseq_track',
        displays: [
          {
            type: 'LinearReferenceSequenceDisplay',
            configuration: 'refseq_track-LinearReferenceSequenceDisplay',
          },
        ],
      },
      {
        type: 'FeatureTrack',
        configuration: 'ncbi_gff_hg19_2',
        displays: [
          {
            type: 'LinearBasicDisplay',
            configuration: 'ncbi_gff_hg19_2-LinearBasicDisplay',
          },
        ],
      },
      {
        type: 'VariantTrack',
        configuration: 'my_track',
        displays: [
          {
            type: 'LinearBasicDisplay',
            // configuration: 'vcf-LinearBasicDisplay',
          },
        ],
      },
      {
        type: 'VariantTrack',
        configuration: '1000genomes_indels',
        displays: [
          {
            type: 'LinearBasicDisplay',
            // configuration: 'vcf-LinearBasicDisplay',
          },
        ],
      },
      // {
      //   type: "MultiQuantitativeTrack",
      //   configuration: "microarray_multi",
      //   displays: [
      //     {
      //       type: "MultiLinearWiggleDisplay",
      //       displayId: "microarray_multi-MultiLinearWiggleDisplay",
      //     }
      //   ],
      // },
      {
        type: 'VariantTrack',
        configuration: 'skbr3_bedpe_arcs',
        displays: [
          {
            type: "LinearPairedArcDisplay",
            displayId: "skbr3_bedpe_arcs-LinearPairedArcDisplay"
          },
          {
            type: "LinearVariantDisplay",
            displayId: "skbr3_bedpe_arcs-LinearVariantDisplay"
          },
          {
            type: "ChordVariantDisplay",
            displayId: "skbr3_bedpe_arcs-ChordVariantDisplay" } ]
      },
      {
        type: "MultiQuantitativeTrack",
        configuration: "microarray_multi_groups",
        displays: [
          {
            type: "MultiLinearWiggleDisplay",
            displayId: "microarray_multi_groups-MultiLinearWiggleDisplay"
          }
        ]
      },
      {
        type: "QuantitativeTrack",
        configuration: "my_wiggle_track",
        displays: [
          {
            type: "LinearWiggleDisplay",
            displayId: "my_wiggle_track-LinearWiggleDisplay"
          }
        ]
      }
    ],
  },
};

export default function View(props: any) {
  // const [location, setLocation] = useState();
  const [location,setLocation] = useState('10:29838737..29838819');
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
