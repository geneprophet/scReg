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
      //   type: 'FeatureTrack',
      //   configuration: 'snp151.bed4',
      //   displays: [
      //     {
      //       type: "LinearBasicDisplay",
      //       displayId: "snp151.bed4-LinearBasicDisplay"
      //     },
      //     {
      //       type: "LinearArcDisplay",
      //       displayId: "snp151.bed4-LinearArcDisplay"
      //     }
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
        type: 'VariantTrack',
        configuration: 'Adult_coacc__lung__Cilliated_Cell',
        displays: [
          {
            type: 'LinearPairedArcDisplay',
            displayId:
              'Adult_coacc__lung__Cilliated_Cell-LinearPairedArcDisplay',
          },
          {
            type: 'LinearVariantDisplay',
            displayId: 'Adult_coacc__lung__Cilliated_Cell-LinearVariantDisplay',
          },
          {
            type: 'ChordVariantDisplay',
            displayId: 'Adult_coacc__lung__Cilliated_Cell-ChordVariantDisplay',
          },
        ],
      },
      {
        type: 'QuantitativeTrack',
        configuration: 'Adult_scATAC__Adipose_Omentum__adult_Adipocyte',
        displays: [
          {
            type: 'LinearWiggleDisplay',
            displayId:
              'Adult_scATAC__Adipose_Omentum__adult_Adipocyte-LinearWiggleDisplay',
          },
        ],
      },
    ],
  },
};
export default defaultSession;
