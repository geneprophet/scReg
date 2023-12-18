// defaultsession指的是默认展示的track有哪些
// 可以根据传参动态修改这个参数，设置展示哪些track
// 没有展示的track，用户还能通过左上角菜单（open track selector）自己添加
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
      // {
      //   type: 'VariantTrack',
      //   configuration: 'brain_track',
      //   displays: [
      //     {
      //       type: 'LinearBasicDisplay',
      //       // configuration: 'vcf-LinearBasicDisplay',
      //     },
      //   ],
      // },
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
      {
        type: 'MultiQuantitativeTrack',
        configuration: 'microarray_multi',
        displays: [
          {
            type: 'MultiLinearWiggleDisplay',
            displayId: 'microarray_multi-MultiLinearWiggleDisplay',
          },
        ],
      },
      {
        type: 'VariantTrack',
        configuration: 'skbr3_bedpe_arcs',
        displays: [
          {
            type: 'LinearPairedArcDisplay',
            displayId: 'skbr3_bedpe_arcs-LinearPairedArcDisplay',
          },
          {
            type: 'LinearVariantDisplay',
            displayId: 'skbr3_bedpe_arcs-LinearVariantDisplay',
          },
          {
            type: 'ChordVariantDisplay',
            displayId: 'skbr3_bedpe_arcs-ChordVariantDisplay',
          },
        ],
      },
      {
        type: 'MultiQuantitativeTrack',
        configuration: 'microarray_multi_groups',
        displays: [
          {
            type: 'MultiLinearWiggleDisplay',
            displayId: 'microarray_multi_groups-MultiLinearWiggleDisplay',
          },
        ],
      },
      {
        type: 'QuantitativeTrack',
        configuration: 'my_wiggle_track',
        displays: [
          {
            type: 'LinearWiggleDisplay',
            displayId: 'my_wiggle_track-LinearWiggleDisplay',
          },
        ],
      },
    ],
  },
};
export default defaultSession;
