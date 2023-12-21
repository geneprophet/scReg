// tracks 就是genome browser的一条可视化轨迹
// 比如多种细胞类型的scATAC数据每一个都是一条track
// 拱形图也是个track
// @ts-ignore
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
  // {
  //   type: 'QuantitativeTrack',
  //   trackId: 'my_wiggle_track',
  //   name: 'My Wiggle Track',
  //   assemblyNames: ['hg19'],
  //   category: ['ENCODE bigWigs', 'subcategory'],
  //   adapter: {
  //     type: 'BigWigAdapter',
  //     bigWigLocation: {
  //       locationType: 'UriLocation',
  //       // uri: 'https://www.encodeproject.org/files/ENCFF303QSJ/@@download/ENCFF303QSJ.bigWig',
  //       // uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipocyte.bw',
  //       uri:'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Megakaryocytes.bw',
  //     },
  //   },
  // },
  // {
  //   type: 'VariantTrack',
  //   trackId: 'skbr3_bedpe_arcs',
  //   name: 'SKBR3 BEDPE arcs',
  //   assemblyNames: ['hg19'],
  //   category: ['SKBR3'],
  //   adapter: {
  //     type: 'BedpeAdapter',
  //     bedpeLocation: {
  //       locationType: 'UriLocation',
  //       // uri: 'https://jbrowse.org/genomes/hg19/skbr3/reads_lr_skbr3.fa_ngmlr-0.2.3_mapped.bam.sniffles1kb_auto_l8_s5_noalt.bedpe',
  //       uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_lung-Cilliated_Cell.bedpe',
  //     },
  //   },
  // },

  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Adipocyte',
    name: 'adult_Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Airway_Goblet_Cell',
    name: 'adult_Airway_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Airway_Goblet_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Airway_Goblet_Cell',
    name: 'adult_Airway_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Airway_Goblet_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Adipose_Omentum__adult_Alveolar_Capillary_Endothelial_Cell',
    name: 'adult_Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Alveolar_Capillary_Endothelial_Cell',
    name: 'adult_Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heart_Lv__adult_Alveolar_Capillary_Endothelial_Cell',
    name: 'adult_Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Alveolar_Capillary_Endothelial_Cell',
    name: 'adult_Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Alveolar_Capillary_Endothelial_Cell',
    name: 'adult_Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Pancreas__adult_Alveolar_Capillary_Endothelial_Cell',
    name: 'adult_Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Alveolar_Capillary_Endothelial_Cell',
    name: 'adult_Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Alveolar_Capillary_Endothelial_Cell',
    name: 'adult_Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Alveolar_Capillary_Endothelial_Cell',
    name: 'adult_Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Alveolar_Type_1_AT1_Cell',
    name: 'adult_Alveolar_Type_1_AT1_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alveolar_Type_1_AT1_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Alveolar_Type_1_AT1_Cell',
    name: 'adult_Alveolar_Type_1_AT1_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alveolar_Type_1_AT1_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Alveolar_Type_2_AT2_Cell',
    name: 'adult_Alveolar_Type_2_AT2_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alveolar_Type_2_AT2_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Alveolar_Type_2_AT2_Cell',
    name: 'adult_Alveolar_Type_2_AT2_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alveolar_Type_2_AT2_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Alverolar_Type_2_Immune',
    name: 'adult_Alverolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alverolar_Type_2_Immune.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Alverolar_Type_2_Immune',
    name: 'adult_Alverolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alverolar_Type_2_Immune.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Alverolar_Type_2_Immune',
    name: 'adult_Alverolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alverolar_Type_2_Immune.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Alverolar_Type_2_Immune',
    name: 'adult_Alverolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alverolar_Type_2_Immune.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Alverolar_Type_2_Immune',
    name: 'adult_Alverolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Alverolar_Type_2_Immune.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Astrocyte_1',
    name: 'adult_Astrocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Astrocyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Astrocyte_2',
    name: 'adult_Astrocyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Astrocyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Atrial_Cardiomyocyte',
    name: 'adult_Atrial_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Atrial_Cardiomyocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Atrial_Cardiomyocyte',
    name: 'adult_Atrial_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Atrial_Cardiomyocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Basal_Epidermal_Skin',
    name: 'adult_Basal_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Basal_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Basal_Epidermal_Skin',
    name: 'adult_Basal_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Basal_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Basal_Epidermal_Skin',
    name: 'adult_Basal_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Basal_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Basal_Epidermal_Skin',
    name: 'adult_Basal_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Basal_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Basal_Epithelial_Mammary',
    name: 'adult_Basal_Epithelial_Mammary',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Basal_Epithelial_Mammary.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Basal_Epithelial_Mammary',
    name: 'adult_Basal_Epithelial_Mammary',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Basal_Epithelial_Mammary.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Basal_Epithelial_Mammary',
    name: 'adult_Basal_Epithelial_Mammary',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Basal_Epithelial_Mammary.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Basal_Epithelial_Mammary',
    name: 'adult_Basal_Epithelial_Mammary',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Basal_Epithelial_Mammary.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Adipose_Omentum__adult_Blood_Brain_Barrier_Endothelial_Cell',
    name: 'adult_Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Artery_Aorta__adult_Blood_Brain_Barrier_Endothelial_Cell',
    name: 'adult_Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Blood_Brain_Barrier_Endothelial_Cell',
    name: 'adult_Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heart_Lv__adult_Blood_Brain_Barrier_Endothelial_Cell',
    name: 'adult_Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Blood_Brain_Barrier_Endothelial_Cell',
    name: 'adult_Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Blood_Brain_Barrier_Endothelial_Cell',
    name: 'adult_Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Nerve_Tibial__adult_Blood_Brain_Barrier_Endothelial_Cell',
    name: 'adult_Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Blood_Brain_Barrier_Endothelial_Cell',
    name: 'adult_Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Pancreas__adult_Blood_Brain_Barrier_Endothelial_Cell',
    name: 'adult_Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Blood_Brain_Barrier_Endothelial_Cell',
    name: 'adult_Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Cardiac_Fibroblasts',
    name: 'adult_Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Cardiac_Pericyte_1',
    name: 'adult_Cardiac_Pericyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Cardiac_Pericyte_1',
    name: 'adult_Cardiac_Pericyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Cardiac_Pericyte_1',
    name: 'adult_Cardiac_Pericyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Cardiac_Pericyte_2',
    name: 'adult_Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Cardiac_Pericyte_3',
    name: 'adult_Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Cardiac_Pericyte_4',
    name: 'adult_Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Cardiac_Pericyte_4',
    name: 'adult_Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Cardiac_Pericyte_4',
    name: 'adult_Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Cardiac_Pericyte_4',
    name: 'adult_Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Cardiac_Pericyte_4',
    name: 'adult_Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Cardiac_Pericyte_4',
    name: 'adult_Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Cardiac_Pericyte_4',
    name: 'adult_Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Cardiac_Pericyte_4',
    name: 'adult_Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Cardiac_Pericyte_4',
    name: 'adult_Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Cardiac_Pericyte_4',
    name: 'adult_Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Cardiac_Pericyte_4',
    name: 'adult_Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Cardiac_Pericyte_4',
    name: 'adult_Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Chief_Cell',
    name: 'adult_Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Chief_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Chief_Cell',
    name: 'adult_Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Chief_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Chief_Cell',
    name: 'adult_Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Chief_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Chief_Cell',
    name: 'adult_Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Chief_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Chief_Cell',
    name: 'adult_Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Chief_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Cilliated_Cell',
    name: 'adult_Cilliated_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cilliated_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Club_Cell',
    name: 'adult_Club_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Club_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Club_Cell',
    name: 'adult_Club_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Club_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_CNS_Enteric_Neuron',
    name: 'adult_CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_CNS_Enteric_Neuron',
    name: 'adult_CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_CNS_Enteric_Neuron',
    name: 'adult_CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_CNS_Enteric_Neuron',
    name: 'adult_CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_CNS_Enteric_Neuron',
    name: 'adult_CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_CNS_Enteric_Neuron',
    name: 'adult_CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_CNS_Enteric_Neuron',
    name: 'adult_CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_CNS_Enteric_Neuron',
    name: 'adult_CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_CNS_Enteric_Neuron',
    name: 'adult_CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_CNS_Enteric_Neuron',
    name: 'adult_CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Colon_Epithelial_Cell_1',
    name: 'adult_Colon_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Colon_Epithelial_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Colon_Epithelial_Cell_1',
    name: 'adult_Colon_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Colon_Epithelial_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Colon_Epithelial_Cell_1',
    name: 'adult_Colon_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Colon_Epithelial_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Colon_Epithelial_Cell_2',
    name: 'adult_Colon_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Colon_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Colon_Epithelial_Cell_3',
    name: 'adult_Colon_Epithelial_Cell_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Colon_Epithelial_Cell_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Colon_Epithelial_Cell_3',
    name: 'adult_Colon_Epithelial_Cell_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Colon_Epithelial_Cell_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Colonic_Goblet_Cell',
    name: 'adult_Colonic_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Colonic_Goblet_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Colonic_Goblet_Cell',
    name: 'adult_Colonic_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Colonic_Goblet_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Cortical_Epithelial_like',
    name: 'adult_Cortical_Epithelial_like',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Cortical_Epithelial_like.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Ductal_Cells',
    name: 'adult_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Eccrine_Epidermal_Skin',
    name: 'adult_Eccrine_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Eccrine_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Eccrine_Epidermal_Skin',
    name: 'adult_Eccrine_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Eccrine_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Eccrine_Epidermal_Skin',
    name: 'adult_Eccrine_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Eccrine_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Endocardial_Cell',
    name: 'adult_Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endocardial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Endocardial_Cell',
    name: 'adult_Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endocardial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Endocardial_Cell',
    name: 'adult_Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endocardial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Endocardial_Cell',
    name: 'adult_Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endocardial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Endocardial_Cell',
    name: 'adult_Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endocardial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Endothelial_Cell_General_1',
    name: 'adult_Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Endothelial_Cell_General_2',
    name: 'adult_Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Endothelial_Cell_General_3',
    name: 'adult_Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Mucosa__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Endothelial_Cell_Myocardial',
    name: 'adult_Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Endothelial_Exocrine_Tissues',
    name: 'adult_Endothelial_Exocrine_Tissues',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Exocrine_Tissues.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Endothelial_Exocrine_Tissues',
    name: 'adult_Endothelial_Exocrine_Tissues',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Exocrine_Tissues.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Endothelial_Exocrine_Tissues',
    name: 'adult_Endothelial_Exocrine_Tissues',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Endothelial_Exocrine_Tissues.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Enterochromaffin_Cell',
    name: 'adult_Enterochromaffin_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Enterochromaffin_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Enterochromaffin_Cell',
    name: 'adult_Enterochromaffin_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Enterochromaffin_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Enterochromaffin_Cell',
    name: 'adult_Enterochromaffin_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Enterochromaffin_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Esophageal_Epithelial_Cell',
    name: 'adult_Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Esophageal_Epithelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Esophageal_Epithelial_Cell',
    name: 'adult_Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Esophageal_Epithelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Esophageal_Epithelial_Cell',
    name: 'adult_Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Esophageal_Epithelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Esophageal_Epithelial_Cell',
    name: 'adult_Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Esophageal_Epithelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Esophageal_Epithelial_Cell',
    name: 'adult_Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Esophageal_Epithelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Fibroblast_Epithelial',
    name: 'adult_Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Fibroblast_Epithelial',
    name: 'adult_Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Fibroblast_Epithelial',
    name: 'adult_Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Fibroblast_Epithelial',
    name: 'adult_Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Fibroblast_Epithelial',
    name: 'adult_Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Fibroblast_Epithelial',
    name: 'adult_Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Fibroblast_Epithelial',
    name: 'adult_Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Fibroblast_Epithelial',
    name: 'adult_Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Fibroblast_Epithelial',
    name: 'adult_Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Fibroblast_Epithelial',
    name: 'adult_Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Fibroblast_Epithelial',
    name: 'adult_Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Fibroblast_Epithelial',
    name: 'adult_Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Fibroblast_Epithelial',
    name: 'adult_Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Fibroblast_Gastrointestinal',
    name: 'adult_Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Fibroblast_Gastrointestinal',
    name: 'adult_Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Fibroblast_Gastrointestinal',
    name: 'adult_Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Fibroblast_Gastrointestinal',
    name: 'adult_Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Fibroblast_Gastrointestinal',
    name: 'adult_Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Fibroblast_Gastrointestinal',
    name: 'adult_Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Fibroblast_Gastrointestinal',
    name: 'adult_Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Fibroblast_General',
    name: 'adult_Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Fibroblast_Liver_Adrenal',
    name: 'adult_Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Liver_Adrenal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Fibroblast_Liver_Adrenal',
    name: 'adult_Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Liver_Adrenal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Fibroblast_Liver_Adrenal',
    name: 'adult_Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Liver_Adrenal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Fibroblast_Liver_Adrenal',
    name: 'adult_Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Liver_Adrenal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Fibroblast_Liver_Adrenal',
    name: 'adult_Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Liver_Adrenal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Mucosa__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Skin_Sun_Exposed__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Fibroblast_Peripheral_Nerve',
    name: 'adult_Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Adipose_Omentum__adult_Fibroblast_Sk_Muscle_Associated',
    name: 'adult_Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Fibroblast_Sk_Muscle_Associated',
    name: 'adult_Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Fibroblast_Sk_Muscle_Associated',
    name: 'adult_Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Fibroblast_Sk_Muscle_Associated',
    name: 'adult_Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Mammary_Tissue__adult_Fibroblast_Sk_Muscle_Associated',
    name: 'adult_Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Fibroblast_Sk_Muscle_Associated',
    name: 'adult_Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Nerve_Tibial__adult_Fibroblast_Sk_Muscle_Associated',
    name: 'adult_Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Skin_Sun_Exposed__adult_Fibroblast_Sk_Muscle_Associated',
    name: 'adult_Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Foveolar_Cell',
    name: 'adult_Foveolar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Foveolar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Foveolar_Cell',
    name: 'adult_Foveolar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Foveolar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Foveolar_Cell',
    name: 'adult_Foveolar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Foveolar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Cerebrum__adult_GABAergic_Neuron_1',
    name: 'adult_GABAergic_Neuron_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_GABAergic_Neuron_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Cerebrum__adult_GABAergic_Neuron_2',
    name: 'adult_GABAergic_Neuron_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_GABAergic_Neuron_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Gastric_Neuroendocrine_Cell',
    name: 'adult_Gastric_Neuroendocrine_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Gastric_Neuroendocrine_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Gastric_Neuroendocrine_Cell',
    name: 'adult_Gastric_Neuroendocrine_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Gastric_Neuroendocrine_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Skin_Sun_Exposed__adult_Gastric_Neuroendocrine_Cell',
    name: 'adult_Gastric_Neuroendocrine_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Gastric_Neuroendocrine_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Gastric_Neuroendocrine_Cell',
    name: 'adult_Gastric_Neuroendocrine_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Gastric_Neuroendocrine_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Cerebrum__adult_Glutamatergic_Neuron_1',
    name: 'adult_Glutamatergic_Neuron_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Glutamatergic_Neuron_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Cerebrum__adult_Glutamatergic_Neuron_2',
    name: 'adult_Glutamatergic_Neuron_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Glutamatergic_Neuron_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Granular_Epidermal_Skin',
    name: 'adult_Granular_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Granular_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Granular_Epidermal_Skin',
    name: 'adult_Granular_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Granular_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Granular_Epidermal_Skin',
    name: 'adult_Granular_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Granular_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Granular_Epidermal_Skin',
    name: 'adult_Granular_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Granular_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Hepatocyte',
    name: 'adult_Hepatocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Hepatocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Hepatocyte',
    name: 'adult_Hepatocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Hepatocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Hepatocyte',
    name: 'adult_Hepatocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Hepatocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Keratinocyte_1',
    name: 'adult_Keratinocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Keratinocyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Keratinocyte_1',
    name: 'adult_Keratinocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Keratinocyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Keratinocyte_1',
    name: 'adult_Keratinocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Keratinocyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Keratinocyte_1',
    name: 'adult_Keratinocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Keratinocyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Keratinocyte_2',
    name: 'adult_Keratinocyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Keratinocyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Keratinocyte_2',
    name: 'adult_Keratinocyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Keratinocyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Luteal_Cell_Ovarian',
    name: 'adult_Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Lymphatic_Endothelial_Cell',
    name: 'adult_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Mucosa__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Skin_Sun_Exposed__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Macrophage_General_Alveolar',
    name: 'adult_Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Macrophage_General',
    name: 'adult_Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Mammary_Epithelial',
    name: 'adult_Mammary_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Mammary_Epithelial',
    name: 'adult_Mammary_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Mammary_Tissue__adult_Mammary_Luminal_Epithelial_Cell_1',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Mammary_Luminal_Epithelial_Cell_1',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Skin_Sun_Exposed__adult_Mammary_Luminal_Epithelial_Cell_1',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Mucosa__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Mammary_Tissue__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Nerve_Tibial__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Skin_Sun_Exposed__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Small_Intestine__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Mammary_Luminal_Epithelial_Cell_2',
    name: 'adult_Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Mast_Cell',
    name: 'adult_Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Melanocyte',
    name: 'adult_Melanocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Melanocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Melanocyte',
    name: 'adult_Melanocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Melanocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Melanocyte',
    name: 'adult_Melanocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Melanocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Memory_B_Cell',
    name: 'adult_Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Intestine__adult_Mesothelial_Cells',
    name: 'adult_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Microglia',
    name: 'adult_Microglia',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Microglia.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Microglia',
    name: 'adult_Microglia',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Microglia.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Myoepithelial_Cells',
    name: 'adult_Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Myoepithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Myoepithelial_Cells',
    name: 'adult_Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Myoepithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Myoepithelial_Cells',
    name: 'adult_Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Myoepithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Myoepithelial_Cells',
    name: 'adult_Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Myoepithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Myoepithelial_Cells',
    name: 'adult_Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Myoepithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Naive_T_Cell',
    name: 'adult_Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Natural_Killer_T_Cell',
    name: 'adult_Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Oligodendrocyte_Precursor',
    name: 'adult_Oligodendrocyte_Precursor',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Oligodendrocyte_Precursor.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Cerebrum__adult_Oligodendrocyte',
    name: 'adult_Oligodendrocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Oligodendrocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Pancreatic_Acinar_Cell',
    name: 'adult_Pancreatic_Acinar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Acinar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Pancreatic_Acinar_Cell',
    name: 'adult_Pancreatic_Acinar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Acinar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Pancreatic_Acinar_Cell',
    name: 'adult_Pancreatic_Acinar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Acinar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Pancreatic_Acinar_Cell',
    name: 'adult_Pancreatic_Acinar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Acinar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Pancreatic_Acinar_Cell',
    name: 'adult_Pancreatic_Acinar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Acinar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Pancreatic_Acinar_Cell',
    name: 'adult_Pancreatic_Acinar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Acinar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Pancreatic_Alpha_Cell_1',
    name: 'adult_Pancreatic_Alpha_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Alpha_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Pancreatic_Alpha_Cell_1',
    name: 'adult_Pancreatic_Alpha_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Alpha_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Pancreatic_Alpha_Cell_2',
    name: 'adult_Pancreatic_Alpha_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Alpha_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Pancreatic_Alpha_Cell_2',
    name: 'adult_Pancreatic_Alpha_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Alpha_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Pancreatic_Beta_Cell_1',
    name: 'adult_Pancreatic_Beta_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Beta_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Pancreatic_Beta_Cell_1',
    name: 'adult_Pancreatic_Beta_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Beta_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Pancreatic_Beta_Cell_2',
    name: 'adult_Pancreatic_Beta_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Beta_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Pancreatic_Beta_Cell_2',
    name: 'adult_Pancreatic_Beta_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Beta_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Pancreatic_Delta_Gamma_Cell',
    name: 'adult_Pancreatic_Delta_Gamma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Delta_Gamma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Pancreatic_Delta_Gamma_Cell',
    name: 'adult_Pancreatic_Delta_Gamma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Delta_Gamma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Pancreatic_Delta_Gamma_Cell',
    name: 'adult_Pancreatic_Delta_Gamma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Delta_Gamma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Pancreatic_Delta_Gamma_Cell',
    name: 'adult_Pancreatic_Delta_Gamma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pancreatic_Delta_Gamma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Paneth_Cell',
    name: 'adult_Paneth_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Paneth_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Paneth_Cell',
    name: 'adult_Paneth_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Paneth_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Parietal_Cell',
    name: 'adult_Parietal_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Parietal_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Adipose_Omentum__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Artery_Tibial__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Sigmoid__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Mucosa__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Mammary_Tissue__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Skin_Sun_Exposed__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Pericyte_Esophageal_Muscularis',
    name: 'adult_Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Pericyte_General_1',
    name: 'adult_Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Pericyte_General_2',
    name: 'adult_Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Pericyte_General_3',
    name: 'adult_Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Pericyte_General_4',
    name: 'adult_Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Peripheral_Nerve_Stromal',
    name: 'adult_Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Peripheral_Nerve_Stromal',
    name: 'adult_Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Peripheral_Nerve_Stromal',
    name: 'adult_Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Peripheral_Nerve_Stromal',
    name: 'adult_Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Peripheral_Nerve_Stromal',
    name: 'adult_Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Peripheral_Nerve_Stromal',
    name: 'adult_Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Peripheral_Nerve_Stromal',
    name: 'adult_Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Peripheral_Nerve_Stromal',
    name: 'adult_Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Peripheral_Nerve_Stromal',
    name: 'adult_Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Peripheral_Nerve_Stromal',
    name: 'adult_Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Peripheral_Nerve_Stromal',
    name: 'adult_Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Peripheral_Nerve_Stromal',
    name: 'adult_Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Plasma_Cell',
    name: 'adult_Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Satellite_Cells',
    name: 'adult_Satellite_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Satellite_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Satellite_Cells',
    name: 'adult_Satellite_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Satellite_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Schwann_Cell_General',
    name: 'adult_Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Small_Intestinal_Enterocyte',
    name: 'adult_Small_Intestinal_Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Small_Intestinal_Enterocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Small_Intestinal_Enterocyte',
    name: 'adult_Small_Intestinal_Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Small_Intestinal_Enterocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Small_Intestinal_Enterocyte',
    name: 'adult_Small_Intestinal_Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Small_Intestinal_Enterocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Small_Intestinal_Enterocyte',
    name: 'adult_Small_Intestinal_Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Small_Intestinal_Enterocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Small_Intestinal_Enterocyte',
    name: 'adult_Small_Intestinal_Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Small_Intestinal_Enterocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Small_Intestinal_Enterocyte',
    name: 'adult_Small_Intestinal_Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Small_Intestinal_Enterocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Small_Intestinal_Goblet_Cell',
    name: 'adult_Small_Intestinal_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Small_Intestinal_Goblet_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Small_Intestine__adult_Small_Intestinal_Goblet_Cell',
    name: 'adult_Small_Intestinal_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Small_Intestinal_Goblet_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Smooth_Muscle_Colon_1',
    name: 'adult_Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Smooth_Muscle_Colon_1',
    name: 'adult_Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Smooth_Muscle_Colon_1',
    name: 'adult_Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Smooth_Muscle_Colon_1',
    name: 'adult_Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Smooth_Muscle_Colon_1',
    name: 'adult_Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Smooth_Muscle_Colon_1',
    name: 'adult_Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Smooth_Muscle_Colon_1',
    name: 'adult_Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Smooth_Muscle_Colon_1',
    name: 'adult_Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Smooth_Muscle_Colon_1',
    name: 'adult_Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Smooth_Muscle_Colon_1',
    name: 'adult_Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Smooth_Muscle_Colon_2',
    name: 'adult_Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Smooth_Muscle_Colon_2',
    name: 'adult_Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Smooth_Muscle_Colon_2',
    name: 'adult_Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Smooth_Muscle_Colon_2',
    name: 'adult_Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Smooth_Muscle_Colon_2',
    name: 'adult_Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Smooth_Muscle_Colon_2',
    name: 'adult_Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Smooth_Muscle_Colon_2',
    name: 'adult_Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Smooth_Muscle_Colon_2',
    name: 'adult_Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Smooth_Muscle_Colon_2',
    name: 'adult_Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Smooth_Muscle_Colon_2',
    name: 'adult_Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Sigmoid__adult_Smooth_Muscle_Esophageal_Mucosal',
    name: 'adult_Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Smooth_Muscle_Esophageal_Mucosal',
    name: 'adult_Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Smooth_Muscle_Esophageal_Mucosal',
    name: 'adult_Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Mucosa__adult_Smooth_Muscle_Esophageal_Mucosal',
    name: 'adult_Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Smooth_Muscle_Esophageal_Mucosal',
    name: 'adult_Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Smooth_Muscle_Esophageal_Mucosal',
    name: 'adult_Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Smooth_Muscle_Esophageal_Mucosal',
    name: 'adult_Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Skin_Sun_Exposed__adult_Smooth_Muscle_Esophageal_Mucosal',
    name: 'adult_Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Small_Intestine__adult_Smooth_Muscle_Esophageal_Mucosal',
    name: 'adult_Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Smooth_Muscle_Esophageal_Mucosal',
    name: 'adult_Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Smooth_Muscle_Esophageal_Mucosal',
    name: 'adult_Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Smooth_Muscle_Esophageal_Mucosal',
    name: 'adult_Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Sigmoid__adult_Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Mucosa__adult_Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Stomach__adult_Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Uterus__adult_Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Vagina__adult_Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Sigmoid__adult_Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Stomach__adult_Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Uterus__adult_Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Vagina__adult_Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Adipose_Omentum__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Artery_Tibial__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Sigmoid__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Mucosa__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heart_Lv__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Nerve_Tibial__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Pancreas__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Small_Intestine__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Stomach__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Uterus__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Vagina__adult_Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'adult_Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Smooth_Muscle_GE_Junction',
    name: 'adult_Smooth_Muscle_GE_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_GE_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Smooth_Muscle_GE_Junction',
    name: 'adult_Smooth_Muscle_GE_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_GE_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Smooth_Muscle_GE_Junction',
    name: 'adult_Smooth_Muscle_GE_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_GE_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Smooth_Muscle_GE_Junction',
    name: 'adult_Smooth_Muscle_GE_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_GE_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Smooth_Muscle_GE_Junction',
    name: 'adult_Smooth_Muscle_GE_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_GE_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Smooth_Muscle_GE_Junction',
    name: 'adult_Smooth_Muscle_GE_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_GE_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Smooth_Muscle_GE_Junction',
    name: 'adult_Smooth_Muscle_GE_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_GE_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Smooth_Muscle_GE_Junction',
    name: 'adult_Smooth_Muscle_GE_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_GE_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Smooth_Muscle_GE_Junction',
    name: 'adult_Smooth_Muscle_GE_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_GE_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Smooth_Muscle_GE_Junction',
    name: 'adult_Smooth_Muscle_GE_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_GE_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Sigmoid__adult_Smooth_Muscle_General_Gastrointestinal',
    name: 'adult_Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__adult_Smooth_Muscle_General_Gastrointestinal',
    name: 'adult_Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Smooth_Muscle_General_Gastrointestinal',
    name: 'adult_Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Smooth_Muscle_General_Gastrointestinal',
    name: 'adult_Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Stomach__adult_Smooth_Muscle_General_Gastrointestinal',
    name: 'adult_Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Smooth_Muscle_General',
    name: 'adult_Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Smooth_Muscle_Uterine',
    name: 'adult_Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Smooth_Muscle_Uterine',
    name: 'adult_Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Smooth_Muscle_Uterine',
    name: 'adult_Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Smooth_Muscle_Uterine',
    name: 'adult_Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Smooth_Muscle_Uterine',
    name: 'adult_Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Smooth_Muscle_Uterine',
    name: 'adult_Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Smooth_Muscle_Uterine',
    name: 'adult_Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Smooth_Muscle_Uterine',
    name: 'adult_Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Smooth_Muscle_Uterine',
    name: 'adult_Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Smooth_Muscle_Vaginal',
    name: 'adult_Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Smooth_Muscle_Vaginal',
    name: 'adult_Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Smooth_Muscle_Vaginal',
    name: 'adult_Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_Smooth_Muscle_Vaginal',
    name: 'adult_Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Smooth_Muscle_Vaginal',
    name: 'adult_Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_Smooth_Muscle_Vaginal',
    name: 'adult_Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Smooth_Muscle_Vaginal',
    name: 'adult_Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Smooth_Muscle_Vaginal',
    name: 'adult_Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Smooth_Muscle_Vaginal',
    name: 'adult_Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_T_Lymphocyte_1_CD8+',
    name: 'adult_T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_T_Lymphocyte_2_CD4+',
    name: 'adult_T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Thyroid_Follicular_Cell',
    name: 'adult_Thyroid_Follicular_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Thyroid_Follicular_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Thyroid_Follicular_Cell',
    name: 'adult_Thyroid_Follicular_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Thyroid_Follicular_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Thyroid_Follicular_Cell',
    name: 'adult_Thyroid_Follicular_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Thyroid_Follicular_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Adrenal_Gland__adult_Transitional_Zone_Cortical_Cell',
    name: 'adult_Transitional_Zone_Cortical_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Transitional_Zone_Cortical_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Tuft_Cell',
    name: 'adult_Tuft_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Tuft_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Tuft_Cell',
    name: 'adult_Tuft_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Tuft_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Type_I_Skeletal_Myocyte',
    name: 'adult_Type_I_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Type_I_Skeletal_Myocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Type_I_Skeletal_Myocyte',
    name: 'adult_Type_I_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Type_I_Skeletal_Myocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Type_II_Skeletal_Myocyte',
    name: 'adult_Type_II_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Type_II_Skeletal_Myocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Type_II_Skeletal_Myocyte',
    name: 'adult_Type_II_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Type_II_Skeletal_Myocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Vascular_Smooth_Muscle_1',
    name: 'adult_Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__adult_Vascular_Smooth_Muscle_2',
    name: 'adult_Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__adult_Ventricular_Cardiomyocyte',
    name: 'adult_Ventricular_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ventricular_Cardiomyocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__adult_Ventricular_Cardiomyocyte',
    name: 'adult_Ventricular_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Ventricular_Cardiomyocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Adrenal_Gland__adult_Zona_Fasciculata_Cortical_Cell',
    name: 'adult_Zona_Fasciculata_Cortical_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Zona_Fasciculata_Cortical_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Adrenal_Gland__adult_Zona_Glomerulosa_Cortical_Cell',
    name: 'adult_Zona_Glomerulosa_Cortical_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/adult_Zona_Glomerulosa_Cortical_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__fetal_Acinar_Cells',
    name: 'fetal_Acinar_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Acinar_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__fetal_Adrenocortical_Cells',
    name: 'fetal_Adrenocortical_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Adrenocortical_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Thymus__fetal_Antigen_Presenting_Cells',
    name: 'fetal_Antigen_Presenting_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Thymus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Antigen_Presenting_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__fetal_Astrocytes_Oligodendrocytes',
    name: 'fetal_Astrocytes_Oligodendrocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Astrocytes_Oligodendrocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebellum__fetal_Astrocytes',
    name: 'fetal_Astrocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebellum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Astrocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__fetal_Astrocytes',
    name: 'fetal_Astrocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Astrocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Fetal_scATAC__Lung__fetal_Bronchiolar_And_Alveolar_Epithelial_Cells',
    name: 'fetal_Bronchiolar_And_Alveolar_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Bronchiolar_And_Alveolar_Epithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Fetal_scATAC__Heart__fetal_Cardiomyocytes_Vascular_Endothelial_Cells',
    name: 'fetal_Cardiomyocytes_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Cardiomyocytes_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__fetal_Cardiomyocytes',
    name: 'fetal_Cardiomyocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Cardiomyocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__fetal_Cerebrum_Unknown_3',
    name: 'fetal_Cerebrum_Unknown_3',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Cerebrum_Unknown_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__fetal_Chromaffin_Cells',
    name: 'fetal_Chromaffin_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Chromaffin_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__fetal_Chromaffin_Cells',
    name: 'fetal_Chromaffin_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Chromaffin_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__fetal_Ciliated_Epithelial_Cells',
    name: 'fetal_Ciliated_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Ciliated_Epithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__fetal_Ductal_Cells',
    name: 'fetal_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__fetal_Elf3_Agbl2_Positive_Cells',
    name: 'fetal_Elf3_Agbl2_Positive_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Elf3_Agbl2_Positive_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Artery_Aorta__fetal_Endocardial_Cells',
    name: 'fetal_Endocardial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Endocardial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart_Lv__fetal_Endocardial_Cells',
    name: 'fetal_Endocardial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Endocardial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heartatrial_Appendage__fetal_Endocardial_Cells',
    name: 'fetal_Endocardial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Endocardial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__fetal_Endocardial_Cells',
    name: 'fetal_Endocardial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Endocardial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__fetal_Endocardial_Cells',
    name: 'fetal_Endocardial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Endocardial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__fetal_Endocardial_Cells',
    name: 'fetal_Endocardial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Endocardial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__fetal_ENS_Glia',
    name: 'fetal_ENS_Glia',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_ENS_Glia.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__fetal_ENS_Glia',
    name: 'fetal_ENS_Glia',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_ENS_Glia.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__fetal_ENS_Neurons',
    name: 'fetal_ENS_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_ENS_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__fetal_ENS_Neurons',
    name: 'fetal_ENS_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_ENS_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__fetal_Epicardial_Fat_Cells',
    name: 'fetal_Epicardial_Fat_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Epicardial_Fat_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__fetal_Epithelial_Cells',
    name: 'fetal_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Epithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__fetal_Erythroblasts',
    name: 'fetal_Erythroblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Erythroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__fetal_Erythroblasts',
    name: 'fetal_Erythroblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Erythroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__fetal_Erythroblasts',
    name: 'fetal_Erythroblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Erythroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__fetal_Erythroblasts',
    name: 'fetal_Erythroblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Erythroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__fetal_Excitatory_Neurons',
    name: 'fetal_Excitatory_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Excitatory_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__fetal_Extravillous_Trophoblasts',
    name: 'fetal_Extravillous_Trophoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Extravillous_Trophoblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__fetal_Eye_Unknown_6',
    name: 'fetal_Eye_Unknown_6',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Eye_Unknown_6.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__fetal_Ganglion_Cells',
    name: 'fetal_Ganglion_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Ganglion_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__fetal_Goblet_Cells',
    name: 'fetal_Goblet_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Goblet_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebellum__fetal_Granule_Neurons',
    name: 'fetal_Granule_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebellum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Granule_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__fetal_Heart_Unknown_10',
    name: 'fetal_Heart_Unknown_10',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Heart_Unknown_10.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__fetal_Hematopoietic_Stem_Cells',
    name: 'fetal_Hematopoietic_Stem_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Hematopoietic_Stem_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__fetal_Hepatoblasts',
    name: 'fetal_Hepatoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Hepatoblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__fetal_Horizontal_Cells_Amacrine_Cells',
    name: 'fetal_Horizontal_Cells_Amacrine_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Horizontal_Cells_Amacrine_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__fetal_Igfbp1_Dkk1_Positive_Cells',
    name: 'fetal_Igfbp1_Dkk1_Positive_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Igfbp1_Dkk1_Positive_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebellum__fetal_Inhibitory_Interneurons',
    name: 'fetal_Inhibitory_Interneurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebellum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Inhibitory_Interneurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__fetal_Inhibitory_Neurons',
    name: 'fetal_Inhibitory_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Inhibitory_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__fetal_Intestinal_Epithelial_Cells',
    name: 'fetal_Intestinal_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Intestinal_Epithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__fetal_Intestine_Unknown_4',
    name: 'fetal_Intestine_Unknown_4',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Intestine_Unknown_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__fetal_Intestine_Unknown_8',
    name: 'fetal_Intestine_Unknown_8',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Intestine_Unknown_8.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__fetal_Islet_Endocrine_Cells',
    name: 'fetal_Islet_Endocrine_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Islet_Endocrine_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__fetal_Kidney_Unknown_14',
    name: 'fetal_Kidney_Unknown_14',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Kidney_Unknown_14.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__fetal_Kidney_Unknown_7',
    name: 'fetal_Kidney_Unknown_7',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Kidney_Unknown_7.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__fetal_Limbic_System_Neurons',
    name: 'fetal_Limbic_System_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Limbic_System_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__fetal_Lymphatic_Endothelial_Cell',
    name: 'fetal_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__fetal_Lymphatic_Endothelial_Cell',
    name: 'fetal_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__fetal_Lymphatic_Endothelial_Cell',
    name: 'fetal_Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__fetal_Lymphoid_And_Myeloid_Cells',
    name: 'fetal_Lymphoid_And_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Lymphoid_And_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__fetal_Lymphoid_And_Myeloid_Cells',
    name: 'fetal_Lymphoid_And_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Lymphoid_And_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__fetal_Lymphoid_Cells',
    name: 'fetal_Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Lymphoid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__fetal_Lymphoid_Cells',
    name: 'fetal_Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Lymphoid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__fetal_Lymphoid_Cells',
    name: 'fetal_Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Lymphoid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__fetal_Lymphoid_Cells',
    name: 'fetal_Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Lymphoid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__fetal_Lymphoid_Cells',
    name: 'fetal_Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Lymphoid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__fetal_Megakaryocytes',
    name: 'fetal_Megakaryocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Megakaryocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__fetal_Megakaryocytes',
    name: 'fetal_Megakaryocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Megakaryocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__fetal_Megakaryocytes',
    name: 'fetal_Megakaryocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Megakaryocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Spleen__fetal_Megakaryocytes',
    name: 'fetal_Megakaryocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Spleen'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Megakaryocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__fetal_Mesangial_Cells',
    name: 'fetal_Mesangial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Mesangial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__fetal_Mesothelial_Cells',
    name: 'fetal_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__fetal_Metanephric_Cells',
    name: 'fetal_Metanephric_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Metanephric_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__fetal_Muscle_Unknown_7',
    name: 'fetal_Muscle_Unknown_7',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Muscle_Unknown_7.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__fetal_Myeloid_Cells',
    name: 'fetal_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__fetal_Myeloid_Cells',
    name: 'fetal_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__fetal_Myeloid_Cells',
    name: 'fetal_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__fetal_Myeloid_Cells',
    name: 'fetal_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__fetal_Myeloid_Cells',
    name: 'fetal_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__fetal_Myeloid_Cells',
    name: 'fetal_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__fetal_Myeloid_Cells',
    name: 'fetal_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Spleen__fetal_Myeloid_Cells',
    name: 'fetal_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Spleen'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__fetal_Neuroendocrine_Cells',
    name: 'fetal_Neuroendocrine_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Neuroendocrine_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__fetal_Paep_Mecom_Positive_Cells',
    name: 'fetal_Paep_Mecom_Positive_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Paep_Mecom_Positive_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__fetal_Pancreas_Unknown_1',
    name: 'fetal_Pancreas_Unknown_1',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Pancreas_Unknown_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__fetal_Parietal_And_Chief_Cells',
    name: 'fetal_Parietal_And_Chief_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Parietal_And_Chief_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__fetal_Photoreceptor_Cells',
    name: 'fetal_Photoreceptor_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Photoreceptor_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebellum__fetal_Purkinje_Neurons',
    name: 'fetal_Purkinje_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebellum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Purkinje_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__fetal_Retinal_Pigment_Cells',
    name: 'fetal_Retinal_Pigment_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Retinal_Pigment_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__fetal_Retinal_Progenitors_And_Muller_Glia',
    name: 'fetal_Retinal_Progenitors_And_Muller_Glia',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Retinal_Progenitors_And_Muller_Glia.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__fetal_Satellite_Cells',
    name: 'fetal_Satellite_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Satellite_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__fetal_Schwann_Cells',
    name: 'fetal_Schwann_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Schwann_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__fetal_Schwann_Cells',
    name: 'fetal_Schwann_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Schwann_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__fetal_Schwann_Cells',
    name: 'fetal_Schwann_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Schwann_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__fetal_Skeletal_Muscle_Cells',
    name: 'fetal_Skeletal_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Skeletal_Muscle_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__fetal_Skor2_Npsr1_Positive_Cells',
    name: 'fetal_Skor2_Npsr1_Positive_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Skor2_Npsr1_Positive_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__fetal_Smooth_Muscle_Cells',
    name: 'fetal_Smooth_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Smooth_Muscle_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__fetal_Smooth_Muscle_Cells',
    name: 'fetal_Smooth_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Smooth_Muscle_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__fetal_Smooth_Muscle_Cells',
    name: 'fetal_Smooth_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Smooth_Muscle_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__fetal_Smooth_Muscle_Cells',
    name: 'fetal_Smooth_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Smooth_Muscle_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__fetal_Stellate_Cells',
    name: 'fetal_Stellate_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Stellate_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__fetal_Stromal_Cells',
    name: 'fetal_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__fetal_Stromal_Cells',
    name: 'fetal_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__fetal_Stromal_Cells',
    name: 'fetal_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__fetal_Stromal_Cells',
    name: 'fetal_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__fetal_Stromal_Cells',
    name: 'fetal_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__fetal_Stromal_Cells',
    name: 'fetal_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__fetal_Stromal_Cells',
    name: 'fetal_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__fetal_Stromal_Cells',
    name: 'fetal_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__fetal_Stromal_Cells',
    name: 'fetal_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Spleen__fetal_Stromal_Cells',
    name: 'fetal_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Spleen'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__fetal_Stromal_Cells',
    name: 'fetal_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__fetal_Sympathoblasts',
    name: 'fetal_Sympathoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Sympathoblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Fetal_scATAC__Placenta__fetal_Syncytiotrophoblast_And_Villous_Cytotrophoblasts',
    name: 'fetal_Syncytiotrophoblast_And_Villous_Cytotrophoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Syncytiotrophoblast_And_Villous_Cytotrophoblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Thymus__fetal_Thymic_Epithelial_Cells',
    name: 'fetal_Thymic_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Thymus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Thymic_Epithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Thymus__fetal_Thymocytes',
    name: 'fetal_Thymocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Thymus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Thymocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__fetal_Trophoblast_Giant_Cells',
    name: 'fetal_Trophoblast_Giant_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Trophoblast_Giant_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__fetal_Ureteric_Bud_Cells',
    name: 'fetal_Ureteric_Bud_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Ureteric_Bud_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Spleen__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Spleen'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Thymus__fetal_Vascular_Endothelial_Cells',
    name: 'fetal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Thymus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'https://ngdc.cncb.ac.cn/targetgene/open_chromatin/fetal_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Adrenal_Gland__Adrenal_Adrenocortical_Cells',
    name: 'Adrenal_Adrenocortical_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Adrenal_Gland-Adrenal_Adrenocortical_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Adrenocortical_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Adrenocortical_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Adrenocortical_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Adrenal_Gland__Adrenal_Chromaffin_Cells',
    name: 'Adrenal_Chromaffin_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Adrenal_Gland-Adrenal_Chromaffin_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Chromaffin_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Chromaffin_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Chromaffin_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Adrenal_Gland__Adrenal_Erythroblasts',
    name: 'Adrenal_Erythroblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Adrenal_Gland-Adrenal_Erythroblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Erythroblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Erythroblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Erythroblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Adrenal_Gland__Adrenal_Megakaryocytes_Unsure',
    name: 'Adrenal_Megakaryocytes_Unsure',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Adrenal_Gland-Adrenal_Megakaryocytes_Unsure.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Megakaryocytes_Unsure-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Megakaryocytes_Unsure-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Megakaryocytes_Unsure-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Adrenal_Gland__Adrenal_Myeloid_Cells',
    name: 'Adrenal_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Adrenal_Gland-Adrenal_Myeloid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Myeloid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Myeloid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Myeloid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Adrenal_Gland__Adrenal_Schwann_Cells',
    name: 'Adrenal_Schwann_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Adrenal_Gland-Adrenal_Schwann_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Schwann_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Schwann_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Schwann_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Adrenal_Gland__Adrenal_Stromal_Cells',
    name: 'Adrenal_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Adrenal_Gland-Adrenal_Stromal_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Stromal_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Stromal_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Stromal_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Adrenal_Gland__Adrenal_Sympathoblasts',
    name: 'Adrenal_Sympathoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Adrenal_Gland-Adrenal_Sympathoblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Sympathoblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Sympathoblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Sympathoblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Adrenal_Gland__Adrenal_Vascular_Endothelial_Cells',
    name: 'Adrenal_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Adrenal_Gland-Adrenal_Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Adrenal_Gland__Adrenal_Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Cerebellum__Cerebellum_Astrocytes',
    name: 'Cerebellum_Astrocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Cerebellum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Cerebellum-Cerebellum_Astrocytes.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Cerebellum__Cerebellum_Astrocytes-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Cerebellum__Cerebellum_Astrocytes-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Cerebellum__Cerebellum_Astrocytes-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Cerebellum__Cerebellum_Granule_Neurons',
    name: 'Cerebellum_Granule_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Cerebellum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Cerebellum-Cerebellum_Granule_Neurons.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Cerebellum__Cerebellum_Granule_Neurons-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Cerebellum__Cerebellum_Granule_Neurons-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Cerebellum__Cerebellum_Granule_Neurons-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Cerebellum__Cerebellum_Inhibitory_Interneurons_Unsure',
    name: 'Cerebellum_Inhibitory_Interneurons_Unsure',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Cerebellum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Cerebellum-Cerebellum_Inhibitory_Interneurons_Unsure.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Cerebellum__Cerebellum_Inhibitory_Interneurons_Unsure-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Cerebellum__Cerebellum_Inhibitory_Interneurons_Unsure-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Cerebellum__Cerebellum_Inhibitory_Interneurons_Unsure-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Cerebellum__Cerebellum_Purkinje_Neurons',
    name: 'Cerebellum_Purkinje_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Cerebellum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Cerebellum-Cerebellum_Purkinje_Neurons.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Cerebellum__Cerebellum_Purkinje_Neurons-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Cerebellum__Cerebellum_Purkinje_Neurons-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Cerebellum__Cerebellum_Purkinje_Neurons-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Cerebrum__Cerebrum_Astrocytes',
    name: 'Cerebrum_Astrocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Cerebrum-Cerebrum_Astrocytes.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Astrocytes-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Astrocytes-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Astrocytes-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Cerebrum__Cerebrum_Cerebrum_Unknown.3',
    name: 'Cerebrum_Cerebrum_Unknown.3',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Cerebrum-Cerebrum_Cerebrum_Unknown.3.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Cerebrum_Unknown.3-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Cerebrum_Unknown.3-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Cerebrum_Unknown.3-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Cerebrum__Cerebrum_Excitatory_Neurons',
    name: 'Cerebrum_Excitatory_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Cerebrum-Cerebrum_Excitatory_Neurons.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Excitatory_Neurons-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Excitatory_Neurons-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Excitatory_Neurons-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Cerebrum__Cerebrum_Inhibitory_Neurons',
    name: 'Cerebrum_Inhibitory_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Cerebrum-Cerebrum_Inhibitory_Neurons.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Inhibitory_Neurons-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Inhibitory_Neurons-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Inhibitory_Neurons-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Cerebrum__Cerebrum_Limbic_System_Neurons',
    name: 'Cerebrum_Limbic_System_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Cerebrum-Cerebrum_Limbic_System_Neurons.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Limbic_System_Neurons-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Limbic_System_Neurons-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Limbic_System_Neurons-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Cerebrum__Cerebrum_Skor2_Npsr1_Positive_Cells',
    name: 'Cerebrum_Skor2_Npsr1_Positive_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Cerebrum-Cerebrum_Skor2_Npsr1_Positive_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Skor2_Npsr1_Positive_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Skor2_Npsr1_Positive_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Skor2_Npsr1_Positive_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Cerebrum__Cerebrum_Vascular_Endothelial_Cells',
    name: 'Cerebrum_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Cerebrum-Cerebrum_Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Cerebrum__Cerebrum_Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Eye__Eye_Ganglion_Cells',
    name: 'Eye_Ganglion_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Eye-Eye_Ganglion_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_abc__Eye__Eye_Ganglion_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Eye__Eye_Ganglion_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Eye__Eye_Ganglion_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Eye__Eye_Horizontal_Cells_Amacrine_Cells_Unsure',
    name: 'Eye_Horizontal_Cells_Amacrine_Cells_Unsure',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Eye-Eye_Horizontal_Cells_Amacrine_Cells_Unsure.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Horizontal_Cells_Amacrine_Cells_Unsure-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Horizontal_Cells_Amacrine_Cells_Unsure-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Horizontal_Cells_Amacrine_Cells_Unsure-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Eye__Eye_Photoreceptor_Cells',
    name: 'Eye_Photoreceptor_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Eye-Eye_Photoreceptor_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Photoreceptor_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Photoreceptor_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Photoreceptor_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Eye__Eye_Retinal_Pigment_Cells',
    name: 'Eye_Retinal_Pigment_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Eye-Eye_Retinal_Pigment_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Retinal_Pigment_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Retinal_Pigment_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Retinal_Pigment_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Eye__Eye_Retinal_Progenitors_And_Muller_Glia',
    name: 'Eye_Retinal_Progenitors_And_Muller_Glia',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Eye-Eye_Retinal_Progenitors_And_Muller_Glia.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Retinal_Progenitors_And_Muller_Glia-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Retinal_Progenitors_And_Muller_Glia-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Retinal_Progenitors_And_Muller_Glia-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Eye__Eye_Stromal_Cells_Unsure',
    name: 'Eye_Stromal_Cells_Unsure',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Eye-Eye_Stromal_Cells_Unsure.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Stromal_Cells_Unsure-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Stromal_Cells_Unsure-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Stromal_Cells_Unsure-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Eye__Eye_Unknown_6',
    name: 'Eye_Unknown_6',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Eye-Eye_Unknown_6.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_abc__Eye__Eye_Unknown_6-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Eye__Eye_Unknown_6-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Eye__Eye_Unknown_6-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Eye__Eye_Vascular_Endothelial_Cells_Unsure',
    name: 'Eye_Vascular_Endothelial_Cells_Unsure',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Eye-Eye_Vascular_Endothelial_Cells_Unsure.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Vascular_Endothelial_Cells_Unsure-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Vascular_Endothelial_Cells_Unsure-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Eye__Eye_Vascular_Endothelial_Cells_Unsure-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId:
      'Fetal_abc__Heart__Heart_Cardiomyocytes_Vascular_Endothelial_Cells',
    name: 'Heart_Cardiomyocytes_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Cardiomyocytes_Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Cardiomyocytes_Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Cardiomyocytes_Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Cardiomyocytes_Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Heart__Heart_Cardiomyocytes',
    name: 'Heart_Cardiomyocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Cardiomyocytes.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Cardiomyocytes-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Cardiomyocytes-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Heart__Heart_Cardiomyocytes-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Heart__Heart_Elf3_Agbl2_Positive_Cells_Unsure',
    name: 'Heart_Elf3_Agbl2_Positive_Cells_Unsure',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Elf3_Agbl2_Positive_Cells_Unsure.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Elf3_Agbl2_Positive_Cells_Unsure-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Elf3_Agbl2_Positive_Cells_Unsure-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Elf3_Agbl2_Positive_Cells_Unsure-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Heart__Heart_Endocardial_Cells',
    name: 'Heart_Endocardial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Endocardial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Endocardial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Endocardial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Endocardial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Heart__Heart_Epicardial_Fat_Cells',
    name: 'Heart_Epicardial_Fat_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Epicardial_Fat_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Epicardial_Fat_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Epicardial_Fat_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Epicardial_Fat_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Heart__Heart_Erythroblasts',
    name: 'Heart_Erythroblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Erythroblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Erythroblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Heart__Heart_Erythroblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Heart__Heart_Erythroblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Heart__Heart_Heart_Unknown.10',
    name: 'Heart_Heart_Unknown.10',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Heart_Unknown.10.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Heart_Unknown.10-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Heart_Unknown.10-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Heart_Unknown.10-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Heart__Heart_Lymphatic_Endothelial_Cells',
    name: 'Heart_Lymphatic_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Lymphatic_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Lymphatic_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Lymphatic_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Lymphatic_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Heart__Heart_Lymphoid_Cells',
    name: 'Heart_Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Lymphoid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Lymphoid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Lymphoid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Heart__Heart_Lymphoid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Heart__Heart_Myeloid_Cells',
    name: 'Heart_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Myeloid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Myeloid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Heart__Heart_Myeloid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Heart__Heart_Myeloid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Heart__Heart_Schwann_Cells',
    name: 'Heart_Schwann_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Schwann_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Schwann_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Heart__Heart_Schwann_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Heart__Heart_Schwann_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Heart__Heart_Smooth_Muscle_Cells',
    name: 'Heart_Smooth_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Smooth_Muscle_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Smooth_Muscle_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Smooth_Muscle_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Smooth_Muscle_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Heart__Heart_Stromal_Cells',
    name: 'Heart_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Stromal_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Stromal_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Heart__Heart_Stromal_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Heart__Heart_Stromal_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Heart__Heart_Vascular_Endothelial_Cells',
    name: 'Heart_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Heart-Heart_Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Heart__Heart_Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Intestine__Intestine_Chromaffin_Cells',
    name: 'Intestine_Chromaffin_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Intestine-Intestine_Chromaffin_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Chromaffin_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Chromaffin_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Chromaffin_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Intestine__Intestine_Ens_Glia',
    name: 'Intestine_Ens_Glia',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Intestine-Intestine_Ens_Glia.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Ens_Glia-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Ens_Glia-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Ens_Glia-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Intestine__Intestine_Ens_Neurons',
    name: 'Intestine_Ens_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Intestine-Intestine_Ens_Neurons.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Ens_Neurons-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Ens_Neurons-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Ens_Neurons-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Intestine__Intestine_Intestinal_Epithelial_Cells',
    name: 'Intestine_Intestinal_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Intestine-Intestine_Intestinal_Epithelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Intestinal_Epithelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Intestinal_Epithelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Intestinal_Epithelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Intestine__Intestine_Intestine_Unknown.4',
    name: 'Intestine_Intestine_Unknown.4',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Intestine-Intestine_Intestine_Unknown.4.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Intestine_Unknown.4-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Intestine_Unknown.4-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Intestine_Unknown.4-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Intestine__Intestine_Intestine_Unknown.8',
    name: 'Intestine_Intestine_Unknown.8',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Intestine-Intestine_Intestine_Unknown.8.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Intestine_Unknown.8-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Intestine_Unknown.8-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Intestine_Unknown.8-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Intestine__Intestine_Lymphatic_Endothelial_Cells',
    name: 'Intestine_Lymphatic_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Intestine-Intestine_Lymphatic_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Lymphatic_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Lymphatic_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Lymphatic_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Intestine__Intestine_Lymphoid_Cells',
    name: 'Intestine_Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Intestine-Intestine_Lymphoid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Lymphoid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Lymphoid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Lymphoid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Intestine__Intestine_Mesothelial_Cells',
    name: 'Intestine_Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Intestine-Intestine_Mesothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Mesothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Mesothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Mesothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Intestine__Intestine_Myeloid_Cells',
    name: 'Intestine_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Intestine-Intestine_Myeloid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Myeloid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Myeloid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Myeloid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Intestine__Intestine_Smooth_Muscle_Cells',
    name: 'Intestine_Smooth_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Intestine-Intestine_Smooth_Muscle_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Smooth_Muscle_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Smooth_Muscle_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Smooth_Muscle_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Intestine__Intestine_Stromal_Cells',
    name: 'Intestine_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Intestine-Intestine_Stromal_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Stromal_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Stromal_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Stromal_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Intestine__Intestine_Vascular_Endothelial_Cells',
    name: 'Intestine_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Intestine-Intestine_Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Intestine__Intestine_Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Kidney__Kidney_Mesangial_Cells_Unsure',
    name: 'Kidney_Mesangial_Cells_Unsure',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Kidney-Kidney_Mesangial_Cells_Unsure.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Mesangial_Cells_Unsure-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Mesangial_Cells_Unsure-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Mesangial_Cells_Unsure-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Kidney__Kidney_Mesangial_Cells',
    name: 'Kidney_Mesangial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Kidney-Kidney_Mesangial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Mesangial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Mesangial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Mesangial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Kidney__Kidney_Metanephric_Cells',
    name: 'Kidney_Metanephric_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Kidney-Kidney_Metanephric_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Metanephric_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Metanephric_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Metanephric_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Kidney__Kidney_Myeloid_Cells',
    name: 'Kidney_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Kidney-Kidney_Myeloid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Myeloid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Myeloid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Myeloid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Kidney__Kidney_Stromal_Cells_Unsure',
    name: 'Kidney_Stromal_Cells_Unsure',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Kidney-Kidney_Stromal_Cells_Unsure.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Stromal_Cells_Unsure-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Stromal_Cells_Unsure-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Stromal_Cells_Unsure-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Kidney__Kidney_Unknown_14',
    name: 'Kidney_Unknown_14',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Kidney-Kidney_Unknown_14.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Unknown_14-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Kidney__Kidney_Unknown_14-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Kidney__Kidney_Unknown_14-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Kidney__Kidney_Unknown_7',
    name: 'Kidney_Unknown_7',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Kidney-Kidney_Unknown_7.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_abc__Kidney__Kidney_Unknown_7-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Kidney__Kidney_Unknown_7-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Kidney__Kidney_Unknown_7-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Kidney__Kidney_Ureteric_Bud_Cells',
    name: 'Kidney_Ureteric_Bud_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Kidney-Kidney_Ureteric_Bud_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Ureteric_Bud_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Ureteric_Bud_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Ureteric_Bud_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Kidney__Kidney_Vascular_Endothelial_Cells',
    name: 'Kidney_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Kidney-Kidney_Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Kidney__Kidney_Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Liver__Liver_Erythroblasts',
    name: 'Liver_Erythroblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Liver-Liver_Erythroblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Erythroblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Liver__Liver_Erythroblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Liver__Liver_Erythroblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Liver__Liver_Hematopoietic_Stem_Cells',
    name: 'Liver_Hematopoietic_Stem_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Liver-Liver_Hematopoietic_Stem_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Hematopoietic_Stem_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Hematopoietic_Stem_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Hematopoietic_Stem_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Liver__Liver_Hepatoblasts',
    name: 'Liver_Hepatoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Liver-Liver_Hepatoblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Hepatoblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Liver__Liver_Hepatoblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Liver__Liver_Hepatoblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Liver__Liver_Lymphoid_Cells',
    name: 'Liver_Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Liver-Liver_Lymphoid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Lymphoid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Lymphoid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Liver__Liver_Lymphoid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Liver__Liver_Megakaryocytes',
    name: 'Liver_Megakaryocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Liver-Liver_Megakaryocytes.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Megakaryocytes-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Megakaryocytes-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Liver__Liver_Megakaryocytes-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Liver__Liver_Myeloid_Cells',
    name: 'Liver_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Liver-Liver_Myeloid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Myeloid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Liver__Liver_Myeloid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Liver__Liver_Myeloid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Liver__Liver_Stellate_Cells',
    name: 'Liver_Stellate_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Liver-Liver_Stellate_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Stellate_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Stellate_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Liver__Liver_Stellate_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Liver__Liver_Vascular_Endothelial_Cells',
    name: 'Liver_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Liver-Liver_Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Liver__Liver_Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Lung__Lung_Bronchiolar_And_Alveolar_Epithelial_Cells',
    name: 'Lung_Bronchiolar_And_Alveolar_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Lung-Lung_Bronchiolar_And_Alveolar_Epithelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Bronchiolar_And_Alveolar_Epithelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Bronchiolar_And_Alveolar_Epithelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Bronchiolar_And_Alveolar_Epithelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Lung__Lung_Ciliated_Epithelial_Cells',
    name: 'Lung_Ciliated_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Lung-Lung_Ciliated_Epithelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Ciliated_Epithelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Ciliated_Epithelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Ciliated_Epithelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Lung__Lung_Lymphatic_Endothelial_Cells',
    name: 'Lung_Lymphatic_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Lung-Lung_Lymphatic_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Lymphatic_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Lymphatic_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Lymphatic_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Lung__Lung_Lymphoid_Cells',
    name: 'Lung_Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Lung-Lung_Lymphoid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Lymphoid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Lung__Lung_Lymphoid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Lung__Lung_Lymphoid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Lung__Lung_Megakaryocytes',
    name: 'Lung_Megakaryocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Lung-Lung_Megakaryocytes.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Megakaryocytes-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Lung__Lung_Megakaryocytes-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Lung__Lung_Megakaryocytes-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Lung__Lung_Myeloid_Cells',
    name: 'Lung_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Lung-Lung_Myeloid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_abc__Lung__Lung_Myeloid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Lung__Lung_Myeloid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Lung__Lung_Myeloid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Lung__Lung_Neuroendocrine_Cells',
    name: 'Lung_Neuroendocrine_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Lung-Lung_Neuroendocrine_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Neuroendocrine_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Neuroendocrine_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Neuroendocrine_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Lung__Lung_Stromal_Cells',
    name: 'Lung_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Lung-Lung_Stromal_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_abc__Lung__Lung_Stromal_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Lung__Lung_Stromal_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Lung__Lung_Stromal_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Lung__Lung_Vascular_Endothelial_Cells',
    name: 'Lung_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Lung-Lung_Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Lung__Lung_Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Muscle__Muscle_Lymphoid_And_Myeloid_Cells',
    name: 'Muscle_Lymphoid_And_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Muscle-Muscle_Lymphoid_And_Myeloid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Lymphoid_And_Myeloid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Lymphoid_And_Myeloid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Lymphoid_And_Myeloid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Muscle__Muscle_Satellite_Cells',
    name: 'Muscle_Satellite_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Muscle-Muscle_Satellite_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Satellite_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Satellite_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Satellite_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Muscle__Muscle_Schwann_Cells',
    name: 'Muscle_Schwann_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Muscle-Muscle_Schwann_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Schwann_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Schwann_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Schwann_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Muscle__Muscle_Skeletal_Muscle_Cells_Unsure',
    name: 'Muscle_Skeletal_Muscle_Cells_Unsure',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Muscle-Muscle_Skeletal_Muscle_Cells_Unsure.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Skeletal_Muscle_Cells_Unsure-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Skeletal_Muscle_Cells_Unsure-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Skeletal_Muscle_Cells_Unsure-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Muscle__Muscle_Skeletal_Muscle_Cells',
    name: 'Muscle_Skeletal_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Muscle-Muscle_Skeletal_Muscle_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Skeletal_Muscle_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Skeletal_Muscle_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Skeletal_Muscle_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Muscle__Muscle_Smooth_Muscle_Cells',
    name: 'Muscle_Smooth_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Muscle-Muscle_Smooth_Muscle_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Smooth_Muscle_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Smooth_Muscle_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Smooth_Muscle_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Muscle__Muscle_Stromal_Cells_Unsure',
    name: 'Muscle_Stromal_Cells_Unsure',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Muscle-Muscle_Stromal_Cells_Unsure.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Stromal_Cells_Unsure-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Stromal_Cells_Unsure-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Stromal_Cells_Unsure-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Muscle__Muscle_Stromal_Cells',
    name: 'Muscle_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Muscle-Muscle_Stromal_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Stromal_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Stromal_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Stromal_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Muscle__Muscle_Unknown_7',
    name: 'Muscle_Unknown_7',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Muscle-Muscle_Unknown_7.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_abc__Muscle__Muscle_Unknown_7-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Muscle__Muscle_Unknown_7-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Muscle__Muscle_Unknown_7-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Muscle__Muscle_Vascular_Endothelial_Cells',
    name: 'Muscle_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Muscle-Muscle_Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Muscle__Muscle_Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Pancreas__Pancreas_Acinar_Cells',
    name: 'Pancreas_Acinar_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Pancreas-Pancreas_Acinar_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Acinar_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Acinar_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Acinar_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Pancreas__Pancreas_Ductal_Cells',
    name: 'Pancreas_Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Pancreas-Pancreas_Ductal_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Ductal_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Ductal_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Ductal_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Pancreas__Pancreas_Islet_Endocrine_Cells',
    name: 'Pancreas_Islet_Endocrine_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Pancreas-Pancreas_Islet_Endocrine_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Islet_Endocrine_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Islet_Endocrine_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Islet_Endocrine_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Pancreas__Pancreas_Lymphoid_Myeloid_Cells',
    name: 'Pancreas_Lymphoid_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Pancreas-Pancreas_Lymphoid_Myeloid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Lymphoid_Myeloid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Lymphoid_Myeloid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Lymphoid_Myeloid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Pancreas__Pancreas_Pancreas_Unknown.1',
    name: 'Pancreas_Pancreas_Unknown.1',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Pancreas-Pancreas_Pancreas_Unknown.1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Pancreas_Unknown.1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Pancreas_Unknown.1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Pancreas_Unknown.1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Pancreas__Pancreas_Stromal_Cells',
    name: 'Pancreas_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Pancreas-Pancreas_Stromal_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Stromal_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Stromal_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Stromal_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Pancreas__Pancreas_Vascular_Endothelial_Cells',
    name: 'Pancreas_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Pancreas-Pancreas_Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Pancreas__Pancreas_Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Placenta__Placenta_Erythroblasts',
    name: 'Placenta_Erythroblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Placenta-Placenta_Erythroblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Erythroblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Erythroblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Erythroblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Placenta__Placenta_Extravillous_Trophoblasts',
    name: 'Placenta_Extravillous_Trophoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Placenta-Placenta_Extravillous_Trophoblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Extravillous_Trophoblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Extravillous_Trophoblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Extravillous_Trophoblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Placenta__Placenta_Igfbp1_Dkk1_Positive_Cells',
    name: 'Placenta_Igfbp1_Dkk1_Positive_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Placenta-Placenta_Igfbp1_Dkk1_Positive_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Igfbp1_Dkk1_Positive_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Igfbp1_Dkk1_Positive_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Igfbp1_Dkk1_Positive_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Placenta__Placenta_Lymphoid_Cells',
    name: 'Placenta_Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Placenta-Placenta_Lymphoid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Lymphoid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Lymphoid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Lymphoid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Placenta__Placenta_Myeloid_Cells',
    name: 'Placenta_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Placenta-Placenta_Myeloid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Myeloid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Myeloid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Myeloid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Placenta__Placenta_Paep_Mecom_Positive_Cells',
    name: 'Placenta_Paep_Mecom_Positive_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Placenta-Placenta_Paep_Mecom_Positive_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Paep_Mecom_Positive_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Paep_Mecom_Positive_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Paep_Mecom_Positive_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Placenta__Placenta_Smooth_Muscle_Cells',
    name: 'Placenta_Smooth_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Placenta-Placenta_Smooth_Muscle_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Smooth_Muscle_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Smooth_Muscle_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Smooth_Muscle_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Placenta__Placenta_Stromal_Cells',
    name: 'Placenta_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Placenta-Placenta_Stromal_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Stromal_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Stromal_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Stromal_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId:
      'Fetal_abc__Placenta__Placenta_Syncytiotrophoblast_And_Villous_Cytotrophoblasts_Unsure',
    name: 'Placenta_Syncytiotrophoblast_And_Villous_Cytotrophoblasts_Unsure',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Placenta-Placenta_Syncytiotrophoblast_And_Villous_Cytotrophoblasts_Unsure.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Syncytiotrophoblast_And_Villous_Cytotrophoblasts_Unsure-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Syncytiotrophoblast_And_Villous_Cytotrophoblasts_Unsure-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Syncytiotrophoblast_And_Villous_Cytotrophoblasts_Unsure-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId:
      'Fetal_abc__Placenta__Placenta_Syncytiotrophoblasts_And_Villous_Cytotrophoblasts',
    name: 'Placenta_Syncytiotrophoblasts_And_Villous_Cytotrophoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Placenta-Placenta_Syncytiotrophoblasts_And_Villous_Cytotrophoblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Syncytiotrophoblasts_And_Villous_Cytotrophoblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Syncytiotrophoblasts_And_Villous_Cytotrophoblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Syncytiotrophoblasts_And_Villous_Cytotrophoblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Placenta__Placenta_Trophoblast_Giant_Cells',
    name: 'Placenta_Trophoblast_Giant_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Placenta-Placenta_Trophoblast_Giant_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Trophoblast_Giant_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Trophoblast_Giant_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Trophoblast_Giant_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Placenta__Placenta_Vascular_Endothelial_Cells',
    name: 'Placenta_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Placenta-Placenta_Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Placenta__Placenta_Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Spleen__Spleen_Megakaryocytes',
    name: 'Spleen_Megakaryocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Spleen'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Spleen-Spleen_Megakaryocytes.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Spleen__Spleen_Megakaryocytes-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Spleen__Spleen_Megakaryocytes-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Spleen__Spleen_Megakaryocytes-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Spleen__Spleen_Myeloid_Cells',
    name: 'Spleen_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Spleen'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Spleen-Spleen_Myeloid_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Spleen__Spleen_Myeloid_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Spleen__Spleen_Myeloid_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Spleen__Spleen_Myeloid_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Spleen__Spleen_Stromal_Cells',
    name: 'Spleen_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Spleen'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Spleen-Spleen_Stromal_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Spleen__Spleen_Stromal_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Spleen__Spleen_Stromal_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Spleen__Spleen_Stromal_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Spleen__Spleen_Vascular_Endothelial_Cells',
    name: 'Spleen_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Spleen'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Spleen-Spleen_Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Spleen__Spleen_Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Spleen__Spleen_Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Spleen__Spleen_Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Stomach__Stomach_Ens_Glia',
    name: 'Stomach_Ens_Glia',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Stomach-Stomach_Ens_Glia.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Ens_Glia-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Stomach__Stomach_Ens_Glia-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Stomach__Stomach_Ens_Glia-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Stomach__Stomach_Ens_Neurons_Unsure',
    name: 'Stomach_Ens_Neurons_Unsure',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Stomach-Stomach_Ens_Neurons_Unsure.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Ens_Neurons_Unsure-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Ens_Neurons_Unsure-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Ens_Neurons_Unsure-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Stomach__Stomach_Epithelial_Cells',
    name: 'Stomach_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Stomach-Stomach_Epithelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Epithelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Epithelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Epithelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Stomach__Stomach_Goblet_Cells',
    name: 'Stomach_Goblet_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Stomach-Stomach_Goblet_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Goblet_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Goblet_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Goblet_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Stomach__Stomach_Parietal_And_Chief_Cells',
    name: 'Stomach_Parietal_And_Chief_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Stomach-Stomach_Parietal_And_Chief_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Parietal_And_Chief_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Parietal_And_Chief_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Parietal_And_Chief_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Stomach__Stomach_Stromal_Cells',
    name: 'Stomach_Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Stomach-Stomach_Stromal_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Stromal_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Stromal_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Stromal_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Stomach__Stomach_Vascular_Endothelial_Cells',
    name: 'Stomach_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Stomach-Stomach_Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Stomach__Stomach_Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Thymus__Thymic_Epithelial_Cells',
    name: 'Thymic_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Thymus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Thymus-Thymic_Epithelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Thymus__Thymic_Epithelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Thymus__Thymic_Epithelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Thymus__Thymic_Epithelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Thymus__Thymocytes',
    name: 'Thymocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Thymus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Thymus-Thymocytes.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_abc__Thymus__Thymocytes-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_abc__Thymus__Thymocytes-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_abc__Thymus__Thymocytes-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Thymus__Thymus_Antigen_Presenting_Cells',
    name: 'Thymus_Antigen_Presenting_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Thymus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Thymus-Thymus_Antigen_Presenting_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Thymus__Thymus_Antigen_Presenting_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Thymus__Thymus_Antigen_Presenting_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Thymus__Thymus_Antigen_Presenting_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Thymus__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Thymus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/fetal/abc_Thymus-Vascular_Endothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_abc__Thymus__Vascular_Endothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_abc__Thymus__Vascular_Endothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_abc__Thymus__Vascular_Endothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Adipocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Adipocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Adipose_Omentum__Adipocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Adipose_Omentum__Adipocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Alveolar_Capillary_Endothelial_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Alveolar_Capillary_Endothelial_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Alveolar_Capillary_Endothelial_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Alveolar_Capillary_Endothelial_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Blood_Brain_Barrier_Endothelial_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Blood_Brain_Barrier_Endothelial_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Blood_Brain_Barrier_Endothelial_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Blood_Brain_Barrier_Endothelial_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Cardiac_Fibroblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Cardiac_Fibroblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Cardiac_Fibroblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Cardiac_Fibroblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Cardiac_Pericyte_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Cardiac_Pericyte_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Cardiac_Pericyte_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Cardiac_Pericyte_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Cardiac_Pericyte_3.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Cardiac_Pericyte_3-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Cardiac_Pericyte_3-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Cardiac_Pericyte_3-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Cardiac_Pericyte_4.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Cardiac_Pericyte_4-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Cardiac_Pericyte_4-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Cardiac_Pericyte_4-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Chief_Cell',
    name: 'Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Chief_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Chief_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Chief_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Adipose_Omentum__Chief_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Endothelial_Cell_General_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Endothelial_Cell_General_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Endothelial_Cell_General_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Endothelial_Cell_General_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Endothelial_Cell_General_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Endothelial_Cell_General_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Endothelial_Cell_General_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Endothelial_Cell_General_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Endothelial_Cell_General_3.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Endothelial_Cell_General_3-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Endothelial_Cell_General_3-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Endothelial_Cell_General_3-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Endothelial_Cell_Myocardial.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Endothelial_Cell_Myocardial-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Endothelial_Cell_Myocardial-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Endothelial_Cell_Myocardial-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Enterocyte',
    name: 'Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Enterocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Enterocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Enterocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Adipose_Omentum__Enterocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Fibroblast_Epithelial.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Fibroblast_Epithelial-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Fibroblast_Epithelial-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Fibroblast_Epithelial-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Fibroblast_General.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Fibroblast_General-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Fibroblast_General-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Fibroblast_General-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Fibroblast_Peripheral_Nerve.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Fibroblast_Peripheral_Nerve-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Fibroblast_Peripheral_Nerve-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Fibroblast_Peripheral_Nerve-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Fibroblast_Sk_Muscle_Associated.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Fibroblast_Sk_Muscle_Associated-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Fibroblast_Sk_Muscle_Associated-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Fibroblast_Sk_Muscle_Associated-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Foveolar_Cell',
    name: 'Foveolar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Foveolar_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Foveolar_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Foveolar_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Foveolar_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Luteal_Cell_Ovarian.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Luteal_Cell_Ovarian-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Luteal_Cell_Ovarian-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Luteal_Cell_Ovarian-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Lymphatic_Endothelial_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Lymphatic_Endothelial_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Lymphatic_Endothelial_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Lymphatic_Endothelial_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Macrophage_Gen_Or_Alv.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Macrophage_Gen_Or_Alv-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Macrophage_Gen_Or_Alv-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Macrophage_Gen_Or_Alv-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Macrophage_General.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Macrophage_General-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Macrophage_General-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Macrophage_General-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Mast_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Mast_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Adipose_Omentum__Mast_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Adipose_Omentum__Mast_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Memory_B_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Memory_B_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Memory_B_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Memory_B_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Mesothelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Mesothelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Mesothelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Mesothelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Naive_T_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Naive_T_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Naive_T_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Naive_T_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Natural_Killer_T_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Natural_Killer_T_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Natural_Killer_T_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Natural_Killer_T_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Nerve_Stromal',
    name: 'Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Nerve_Stromal.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Nerve_Stromal-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Nerve_Stromal-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Nerve_Stromal-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Pericyte_General_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_General_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_General_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_General_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Pericyte_General_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_General_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_General_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_General_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Pericyte_General_3.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_General_3-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_General_3-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_General_3-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Pericyte_General_4.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_General_4-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_General_4-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_General_4-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Pericyte_Muscularis.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_Muscularis-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_Muscularis-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Pericyte_Muscularis-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Plasma_B.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Plasma_B-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Adipose_Omentum__Plasma_B-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Adipose_Omentum__Plasma_B-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Schwann_Cell_General.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Schwann_Cell_General-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Schwann_Cell_General-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Schwann_Cell_General-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Adipose_Omentum__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Smooth_Muscle_Esophageal_Muscularis_3-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Smooth_Muscle_Esophageal_Muscularis_3-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Smooth_Muscle_Esophageal_Muscularis_3-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Smooth_Muscle_General.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Smooth_Muscle_General-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Smooth_Muscle_General-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Smooth_Muscle_General-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Smooth_Muscle_Vaginal.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Smooth_Muscle_Vaginal-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Smooth_Muscle_Vaginal-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Smooth_Muscle_Vaginal-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Vascular_Smooth_Muscle_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Vascular_Smooth_Muscle_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Vascular_Smooth_Muscle_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Vascular_Smooth_Muscle_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adipose_Omentum-Vascular_Smooth_Muscle_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Vascular_Smooth_Muscle_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Vascular_Smooth_Muscle_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adipose_Omentum__Vascular_Smooth_Muscle_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Cortical_Epithelial_Like',
    name: 'Cortical_Epithelial_Like',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adrenal_Gland-Cortical_Epithelial_Like.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Cortical_Epithelial_Like-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Cortical_Epithelial_Like-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Cortical_Epithelial_Like-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Endothelial_Exocrine_Tissues',
    name: 'Endothelial_Exocrine_Tissues',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adrenal_Gland-Endothelial_Exocrine_Tissues.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Endothelial_Exocrine_Tissues-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Endothelial_Exocrine_Tissues-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Endothelial_Exocrine_Tissues-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Enteric_Neuron',
    name: 'Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adrenal_Gland-Enteric_Neuron.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Enteric_Neuron-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Enteric_Neuron-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Enteric_Neuron-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Fasciculata',
    name: 'Fasciculata',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adrenal_Gland-Fasciculata.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Fasciculata-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Adrenal_Gland__Fasciculata-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Adrenal_Gland__Fasciculata-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Fibroblast_Liver_Adrenal',
    name: 'Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adrenal_Gland-Fibroblast_Liver_Adrenal.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Fibroblast_Liver_Adrenal-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Fibroblast_Liver_Adrenal-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Fibroblast_Liver_Adrenal-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Glomerulosa',
    name: 'Glomerulosa',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adrenal_Gland-Glomerulosa.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Glomerulosa-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Adrenal_Gland__Glomerulosa-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Adrenal_Gland__Glomerulosa-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Transitional_Cortical',
    name: 'Transitional_Cortical',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Adrenal_Gland-Transitional_Cortical.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Transitional_Cortical-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Transitional_Cortical-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Adrenal_Gland__Transitional_Cortical-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Alveolar_Type_2_AT2_Cell',
    name: 'Alveolar_Type_2_AT2_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Artery_Aorta-Alveolar_Type_2_AT2_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Artery_Aorta__Alveolar_Type_2_AT2_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Artery_Aorta__Alveolar_Type_2_AT2_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Artery_Aorta__Alveolar_Type_2_AT2_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Endocardial_Cell',
    name: 'Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Artery_Aorta-Endocardial_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Artery_Aorta__Endocardial_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Artery_Aorta__Endocardial_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Artery_Aorta__Endocardial_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__T_Lymphocyte_1_CD8',
    name: 'T_Lymphocyte_1_CD8',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Artery_Aorta-T_Lymphocyte_1_CD8.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Artery_Aorta__T_Lymphocyte_1_CD8-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Artery_Aorta__T_Lymphocyte_1_CD8-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Artery_Aorta__T_Lymphocyte_1_CD8-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__T_Lymphocyte_2_CD4',
    name: 'T_Lymphocyte_2_CD4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Artery_Aorta-T_Lymphocyte_2_CD4.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Artery_Aorta__T_Lymphocyte_2_CD4-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Artery_Aorta__T_Lymphocyte_2_CD4-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Artery_Aorta__T_Lymphocyte_2_CD4-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Alveolar_Type_2_Immune',
    name: 'Alveolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Artery_Tibial-Alveolar_Type_2_Immune.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Artery_Tibial__Alveolar_Type_2_Immune-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Artery_Tibial__Alveolar_Type_2_Immune-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Artery_Tibial__Alveolar_Type_2_Immune-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Artery_Tibial-Smooth_Muscle_Colon_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Artery_Tibial__Smooth_Muscle_Colon_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Artery_Tibial__Smooth_Muscle_Colon_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Artery_Tibial__Smooth_Muscle_Colon_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Artery_Tibial-Smooth_Muscle_Ge_Junction.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Artery_Tibial__Smooth_Muscle_Ge_Junction-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Artery_Tibial__Smooth_Muscle_Ge_Junction-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Artery_Tibial__Smooth_Muscle_Ge_Junction-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Cerebrum__GABAergic_Neuron_1',
    name: 'GABAergic_Neuron_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Cerebrum-GABAergic_Neuron_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Cerebrum__GABAergic_Neuron_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Cerebrum__GABAergic_Neuron_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Cerebrum__GABAergic_Neuron_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Cerebrum__GABAergic_Neuron_2',
    name: 'GABAergic_Neuron_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Cerebrum-GABAergic_Neuron_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Cerebrum__GABAergic_Neuron_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Cerebrum__GABAergic_Neuron_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Cerebrum__GABAergic_Neuron_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Cerebrum__Glutamatergic_Neuron_1',
    name: 'Glutamatergic_Neuron_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Cerebrum-Glutamatergic_Neuron_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Cerebrum__Glutamatergic_Neuron_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Cerebrum__Glutamatergic_Neuron_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Cerebrum__Glutamatergic_Neuron_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Cerebrum__Glutamatergic_Neuron_2',
    name: 'Glutamatergic_Neuron_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Cerebrum-Glutamatergic_Neuron_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Cerebrum__Glutamatergic_Neuron_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Cerebrum__Glutamatergic_Neuron_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Cerebrum__Glutamatergic_Neuron_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Colon_Epithelial_Cell_1',
    name: 'Colon_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Sigmoid-Colon_Epithelial_Cell_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Colon_Epithelial_Cell_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Colon_Epithelial_Cell_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Colon_Epithelial_Cell_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Sigmoid-Fibroblast_Gastrointestinal.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Fibroblast_Gastrointestinal-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Fibroblast_Gastrointestinal-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Fibroblast_Gastrointestinal-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Melanocyte',
    name: 'Melanocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Sigmoid-Melanocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Melanocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Colon_Sigmoid__Melanocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Colon_Sigmoid__Melanocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Sigmoid-Smooth_Muscle_Colon_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Colon_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Colon_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Colon_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Sigmoid-Smooth_Muscle_Esophageal_Mucosal.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Esophageal_Mucosal-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Esophageal_Mucosal-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Esophageal_Mucosal-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Sigmoid-Smooth_Muscle_Esophageal_Muscularis_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Esophageal_Muscularis_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Esophageal_Muscularis_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Esophageal_Muscularis_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Sigmoid-Smooth_Muscle_Esophageal_Muscularis_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Esophageal_Muscularis_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Esophageal_Muscularis_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Esophageal_Muscularis_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Smooth_Muscle_General_Gastrointestinal',
    name: 'Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Sigmoid-Smooth_Muscle_General_Gastrointestinal.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_General_Gastrointestinal-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_General_Gastrointestinal-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_General_Gastrointestinal-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Sigmoid-Smooth_Muscle_Uterine.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Uterine-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Uterine-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Uterine-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Astrocyte_2',
    name: 'Astrocyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Transverse-Astrocyte_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Astrocyte_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Astrocyte_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Astrocyte_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Colon_Epithelial_Cell_2',
    name: 'Colon_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Transverse-Colon_Epithelial_Cell_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Colon_Epithelial_Cell_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Colon_Epithelial_Cell_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Colon_Epithelial_Cell_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Colon_Epithelial_Cell_3',
    name: 'Colon_Epithelial_Cell_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Transverse-Colon_Epithelial_Cell_3.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Colon_Epithelial_Cell_3-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Colon_Epithelial_Cell_3-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Colon_Epithelial_Cell_3-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Colonic_Goblet_Cell',
    name: 'Colonic_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Transverse-Colonic_Goblet_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Colonic_Goblet_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Colonic_Goblet_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Colonic_Goblet_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Enterochromaffin_Cell',
    name: 'Enterochromaffin_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Transverse-Enterochromaffin_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Enterochromaffin_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Enterochromaffin_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Enterochromaffin_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Transverse-Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Mammary_Luminal_Epithelial_Cell_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Mammary_Luminal_Epithelial_Cell_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Mammary_Luminal_Epithelial_Cell_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Oligodendrocyte_Precursor',
    name: 'Oligodendrocyte_Precursor',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Transverse-Oligodendrocyte_Precursor.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Oligodendrocyte_Precursor-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Oligodendrocyte_Precursor-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Oligodendrocyte_Precursor-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Paneth_Cell',
    name: 'Paneth_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Transverse-Paneth_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Paneth_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Paneth_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Paneth_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Si_Goblet',
    name: 'Si_Goblet',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Transverse-Si_Goblet.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Si_Goblet-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Si_Goblet-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Colon_Transverse__Si_Goblet-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Tuft_Cell',
    name: 'Tuft_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Colon_Transverse-Tuft_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Tuft_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Colon_Transverse__Tuft_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Colon_Transverse__Tuft_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Airway_Goblet_Cell',
    name: 'Airway_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Esophagus_Gejunction-Airway_Goblet_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Esophagus_Gejunction__Airway_Goblet_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Gejunction__Airway_Goblet_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Gejunction__Airway_Goblet_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Myoepithelial_Cells',
    name: 'Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Esophagus_Gejunction-Myoepithelial_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Esophagus_Gejunction__Myoepithelial_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Gejunction__Myoepithelial_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Gejunction__Myoepithelial_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Esophageal_Epithelial_Cell',
    name: 'Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Esophagus_Mucosa-Esophageal_Epithelial_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Esophageal_Epithelial_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Esophageal_Epithelial_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Esophageal_Epithelial_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Keratinocyte_1',
    name: 'Keratinocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Esophagus_Mucosa-Keratinocyte_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Keratinocyte_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Keratinocyte_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Keratinocyte_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Mammary_Basal_Epi',
    name: 'Mammary_Basal_Epi',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Esophagus_Mucosa-Mammary_Basal_Epi.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Mammary_Basal_Epi-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Mammary_Basal_Epi-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Mammary_Basal_Epi-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Skin_Basal_Epidermal',
    name: 'Skin_Basal_Epidermal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Esophagus_Mucosa-Skin_Basal_Epidermal.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Skin_Basal_Epidermal-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Skin_Basal_Epidermal-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Skin_Basal_Epidermal-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Skin_Granular_Epidermal',
    name: 'Skin_Granular_Epidermal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Esophagus_Mucosa-Skin_Granular_Epidermal.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Skin_Granular_Epidermal-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Skin_Granular_Epidermal-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Mucosa__Skin_Granular_Epidermal-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Follicular',
    name: 'Follicular',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Esophagus_Muscularis-Follicular.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Esophagus_Muscularis__Follicular-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Muscularis__Follicular-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Muscularis__Follicular-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Satellite_Cells',
    name: 'Satellite_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Esophagus_Muscularis-Satellite_Cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Esophagus_Muscularis__Satellite_Cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Muscularis__Satellite_Cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Muscularis__Satellite_Cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Type_I_Skeletal_Myocyte',
    name: 'Type_I_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Esophagus_Muscularis-Type_I_Skeletal_Myocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Esophagus_Muscularis__Type_I_Skeletal_Myocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Muscularis__Type_I_Skeletal_Myocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Esophagus_Muscularis__Type_I_Skeletal_Myocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__A_Cardiomyocyte',
    name: 'A_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Heart_Lv-A_Cardiomyocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Heart_Lv__A_Cardiomyocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Heart_Lv__A_Cardiomyocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Heart_Lv__A_Cardiomyocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Cardiac_Pericyte_1',
    name: 'Cardiac_Pericyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Heart_Lv-Cardiac_Pericyte_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Heart_Lv__Cardiac_Pericyte_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Heart_Lv__Cardiac_Pericyte_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Heart_Lv__Cardiac_Pericyte_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Ventricular_Cardiomyocyte',
    name: 'Ventricular_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Heart_Lv-Ventricular_Cardiomyocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Heart_Lv__Ventricular_Cardiomyocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Heart_Lv__Ventricular_Cardiomyocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Heart_Lv__Ventricular_Cardiomyocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Alveolar_Type_1_AT1_Cell',
    name: 'Alveolar_Type_1_AT1_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Heartatrial_Appendage-Alveolar_Type_1_AT1_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Heartatrial_Appendage__Alveolar_Type_1_AT1_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Heartatrial_Appendage__Alveolar_Type_1_AT1_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Heartatrial_Appendage__Alveolar_Type_1_AT1_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Acinar',
    name: 'Acinar',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Islet_Cb-Acinar.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_abc__Islet_Cb__Acinar-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Acinar-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Acinar-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Alpha_1',
    name: 'Alpha_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Islet_Cb-Alpha_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_abc__Islet_Cb__Alpha_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Alpha_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Alpha_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Alpha_2',
    name: 'Alpha_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Islet_Cb-Alpha_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_abc__Islet_Cb__Alpha_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Alpha_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Alpha_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Beta_1',
    name: 'Beta_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Islet_Cb-Beta_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_abc__Islet_Cb__Beta_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Beta_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Beta_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Beta_2',
    name: 'Beta_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Islet_Cb-Beta_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_abc__Islet_Cb__Beta_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Beta_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Beta_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Delta_Gamma',
    name: 'Delta_Gamma',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Islet_Cb-Delta_Gamma.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_abc__Islet_Cb__Delta_Gamma-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Delta_Gamma-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Delta_Gamma-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Gastric_Neuroendocrine',
    name: 'Gastric_Neuroendocrine',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Islet_Cb-Gastric_Neuroendocrine.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Islet_Cb__Gastric_Neuroendocrine-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Islet_Cb__Gastric_Neuroendocrine-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Islet_Cb__Gastric_Neuroendocrine-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Hepatocyte',
    name: 'Hepatocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Islet_Cb-Hepatocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_abc__Islet_Cb__Hepatocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Hepatocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Islet_Cb__Hepatocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Cilliated_Cell',
    name: 'Cilliated_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Lung-Cilliated_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_abc__Lung__Cilliated_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Lung__Cilliated_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Lung__Cilliated_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Club_Cell',
    name: 'Club_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Lung-Club_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_abc__Lung__Club_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Lung__Club_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Lung__Club_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Mammary_Epithelial',
    name: 'Mammary_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Mammary_Tissue-Mammary_Epithelial.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Mammary_Tissue__Mammary_Epithelial-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Mammary_Tissue__Mammary_Epithelial-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Mammary_Tissue__Mammary_Epithelial-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Mammary_Luminal_Epithelial_Cell_1',
    name: 'Mammary_Luminal_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Mammary_Tissue-Mammary_Luminal_Epithelial_Cell_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Mammary_Tissue__Mammary_Luminal_Epithelial_Cell_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Mammary_Tissue__Mammary_Luminal_Epithelial_Cell_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Mammary_Tissue__Mammary_Luminal_Epithelial_Cell_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Microglia',
    name: 'Microglia',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Mammary_Tissue-Microglia.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Mammary_Tissue__Microglia-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Mammary_Tissue__Microglia-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Mammary_Tissue__Microglia-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Skin_Eccrine_Epidermal',
    name: 'Skin_Eccrine_Epidermal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Mammary_Tissue-Skin_Eccrine_Epidermal.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Mammary_Tissue__Skin_Eccrine_Epidermal-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Mammary_Tissue__Skin_Eccrine_Epidermal-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Mammary_Tissue__Skin_Eccrine_Epidermal-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Type_II_Skeletal_Myocyte',
    name: 'Type_II_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Muscle-Type_II_Skeletal_Myocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Muscle__Type_II_Skeletal_Myocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Muscle__Type_II_Skeletal_Myocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Muscle__Type_II_Skeletal_Myocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Ductal_Cell',
    name: 'Ductal_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Pancreas-Ductal_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_abc__Pancreas__Ductal_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Pancreas__Ductal_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Pancreas__Ductal_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Astrocyte_1',
    name: 'Astrocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Skin_Sun_Exposed-Astrocyte_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_abc__Skin_Sun_Exposed__Astrocyte_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_abc__Skin_Sun_Exposed__Astrocyte_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_abc__Skin_Sun_Exposed__Astrocyte_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Keratinocyte_2',
    name: 'Keratinocyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Skin-Keratinocyte_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_abc__Skin__Keratinocyte_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Skin__Keratinocyte_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Skin__Keratinocyte_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Parietal_Cell',
    name: 'Parietal_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/abc/adult/abc_Stomach-Parietal_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_abc__Stomach__Parietal_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_abc__Stomach__Parietal_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_abc__Stomach__Parietal_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Adrenal__Adrenocortical_cells',
    name: 'Adrenocortical_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Adrenal'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal-Adrenocortical_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Adrenal__Adrenocortical_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Adrenal__Adrenocortical_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__Adrenal__Adrenocortical_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Adrenal__Chromaffin_cells',
    name: 'Chromaffin_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Adrenal'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal-Chromaffin_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Adrenal__Chromaffin_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Adrenal__Chromaffin_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__Adrenal__Chromaffin_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Adrenal__Erythroblasts',
    name: 'Erythroblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Adrenal'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal-Erythroblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__Adrenal__Erythroblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__Adrenal__Erythroblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__Adrenal__Erythroblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Adrenal__Myeloid_cells',
    name: 'Myeloid_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Adrenal'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal-Myeloid_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__Adrenal__Myeloid_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__Adrenal__Myeloid_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__Adrenal__Myeloid_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Adrenal__Schwann_cells',
    name: 'Schwann_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Adrenal'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal-Schwann_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__Adrenal__Schwann_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__Adrenal__Schwann_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__Adrenal__Schwann_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Adrenal__Stromal_cells',
    name: 'Stromal_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Adrenal'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal-Stromal_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__Adrenal__Stromal_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__Adrenal__Stromal_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__Adrenal__Stromal_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Adrenal__Sympathoblasts',
    name: 'Sympathoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Adrenal'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal-Sympathoblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Adrenal__Sympathoblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__Adrenal__Sympathoblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__Adrenal__Sympathoblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Adrenal__Vascular_endothelial_cells',
    name: 'Vascular_endothelial_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Adrenal'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal-Vascular_endothelial_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Adrenal__Vascular_endothelial_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Adrenal__Vascular_endothelial_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__Adrenal__Vascular_endothelial_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__cerebellum__Astrocytes',
    name: 'Astrocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'cerebellum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_cerebellum-Astrocytes.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__cerebellum__Astrocytes-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__cerebellum__Astrocytes-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__cerebellum__Astrocytes-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__cerebellum__Granule_neurons',
    name: 'Granule_neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'cerebellum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_cerebellum-Granule_neurons.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__cerebellum__Granule_neurons-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__cerebellum__Granule_neurons-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__cerebellum__Granule_neurons-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__cerebrum__Astrocytes_Oligodendrocytes',
    name: 'Astrocytes_Oligodendrocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_cerebrum-Astrocytes_Oligodendrocytes.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Astrocytes_Oligodendrocytes-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Astrocytes_Oligodendrocytes-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Astrocytes_Oligodendrocytes-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__cerebrum__Cerebrum_Unknown_3',
    name: 'Cerebrum_Unknown_3',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_cerebrum-Cerebrum_Unknown_3.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Cerebrum_Unknown_3-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Cerebrum_Unknown_3-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Cerebrum_Unknown_3-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__cerebrum__Excitatory_neurons',
    name: 'Excitatory_neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_cerebrum-Excitatory_neurons.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Excitatory_neurons-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Excitatory_neurons-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Excitatory_neurons-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__cerebrum__Inhibitory_neurons',
    name: 'Inhibitory_neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_cerebrum-Inhibitory_neurons.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Inhibitory_neurons-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Inhibitory_neurons-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Inhibitory_neurons-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__cerebrum__Limbic_system_neurons',
    name: 'Limbic_system_neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_cerebrum-Limbic_system_neurons.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Limbic_system_neurons-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Limbic_system_neurons-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__cerebrum__Limbic_system_neurons-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__cerebrum__SKOR2_NPSR1_positive_cells',
    name: 'SKOR2_NPSR1_positive_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'cerebrum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_cerebrum-SKOR2_NPSR1_positive_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__cerebrum__SKOR2_NPSR1_positive_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__cerebrum__SKOR2_NPSR1_positive_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__cerebrum__SKOR2_NPSR1_positive_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Eye__Eye_Unknown_6',
    name: 'Eye_Unknown_6',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Eye_Unknown_6.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__Eye__Eye_Unknown_6-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__Eye__Eye_Unknown_6-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__Eye__Eye_Unknown_6-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Eye__Ganglion_cells',
    name: 'Ganglion_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Ganglion_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__Eye__Ganglion_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__Eye__Ganglion_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__Eye__Ganglion_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Eye__Horizontal_cells_Amacrine_cells_',
    name: 'Horizontal_cells_Amacrine_cells_',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Horizontal_cells_Amacrine_cells_.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Eye__Horizontal_cells_Amacrine_cells_-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Eye__Horizontal_cells_Amacrine_cells_-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__Eye__Horizontal_cells_Amacrine_cells_-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Eye__Photoreceptor_cells',
    name: 'Photoreceptor_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Photoreceptor_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Eye__Photoreceptor_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__Eye__Photoreceptor_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__Eye__Photoreceptor_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Eye__Retinal_pigment_cells',
    name: 'Retinal_pigment_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Retinal_pigment_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Eye__Retinal_pigment_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Eye__Retinal_pigment_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__Eye__Retinal_pigment_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Eye__Retinal_progenitors_and_Muller_glia',
    name: 'Retinal_progenitors_and_Muller_glia',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Eye'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Retinal_progenitors_and_Muller_glia.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Eye__Retinal_progenitors_and_Muller_glia-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Eye__Retinal_progenitors_and_Muller_glia-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__Eye__Retinal_progenitors_and_Muller_glia-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__heart__Cardiomyocytes_Vascular_endothelial_cells',
    name: 'Cardiomyocytes_Vascular_endothelial_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_heart-Cardiomyocytes_Vascular_endothelial_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__heart__Cardiomyocytes_Vascular_endothelial_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__heart__Cardiomyocytes_Vascular_endothelial_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__heart__Cardiomyocytes_Vascular_endothelial_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__heart__Cardiomyocytes',
    name: 'Cardiomyocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_heart-Cardiomyocytes.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__heart__Cardiomyocytes-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__heart__Cardiomyocytes-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__heart__Cardiomyocytes-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__heart__ELF3_AGBL2_positive_cells',
    name: 'ELF3_AGBL2_positive_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_heart-ELF3_AGBL2_positive_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__heart__ELF3_AGBL2_positive_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__heart__ELF3_AGBL2_positive_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__heart__ELF3_AGBL2_positive_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__heart__Endocardial_cells',
    name: 'Endocardial_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_heart-Endocardial_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__heart__Endocardial_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__heart__Endocardial_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__heart__Endocardial_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__heart__Epicardial_fat_cells',
    name: 'Epicardial_fat_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_heart-Epicardial_fat_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__heart__Epicardial_fat_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__heart__Epicardial_fat_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__heart__Epicardial_fat_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__heart__Heart_Unknown_10',
    name: 'Heart_Unknown_10',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_heart-Heart_Unknown_10.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__heart__Heart_Unknown_10-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__heart__Heart_Unknown_10-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__heart__Heart_Unknown_10-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__heart__Lymphatic_endothelial_cells',
    name: 'Lymphatic_endothelial_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_heart-Lymphatic_endothelial_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__heart__Lymphatic_endothelial_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__heart__Lymphatic_endothelial_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__heart__Lymphatic_endothelial_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__heart__Lymphoid_cells',
    name: 'Lymphoid_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_heart-Lymphoid_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__heart__Lymphoid_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__heart__Lymphoid_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__heart__Lymphoid_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__heart__Smooth_muscle_cells',
    name: 'Smooth_muscle_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'heart'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_heart-Smooth_muscle_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__heart__Smooth_muscle_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__heart__Smooth_muscle_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__heart__Smooth_muscle_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Intestine__ENS_glia',
    name: 'ENS_glia',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-ENS_glia.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__Intestine__ENS_glia-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__Intestine__ENS_glia-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__Intestine__ENS_glia-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Intestine__ENS_neurons',
    name: 'ENS_neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-ENS_neurons.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__Intestine__ENS_neurons-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__Intestine__ENS_neurons-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__Intestine__ENS_neurons-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Intestine__Intestinal_epithelial_cells',
    name: 'Intestinal_epithelial_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestinal_epithelial_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Intestine__Intestinal_epithelial_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Intestine__Intestinal_epithelial_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__Intestine__Intestinal_epithelial_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Intestine__Intestine_Unknown_4',
    name: 'Intestine_Unknown_4',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Unknown_4.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Intestine__Intestine_Unknown_4-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Intestine__Intestine_Unknown_4-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__Intestine__Intestine_Unknown_4-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Intestine__Intestine_Unknown_8',
    name: 'Intestine_Unknown_8',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Unknown_8.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Intestine__Intestine_Unknown_8-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Intestine__Intestine_Unknown_8-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__Intestine__Intestine_Unknown_8-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Intestine__Mesothelial_cells',
    name: 'Mesothelial_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Mesothelial_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Intestine__Mesothelial_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Intestine__Mesothelial_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__Intestine__Mesothelial_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__kidney__Kidney_Unknown_14',
    name: 'Kidney_Unknown_14',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_kidney-Kidney_Unknown_14.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__kidney__Kidney_Unknown_14-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__kidney__Kidney_Unknown_14-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__kidney__Kidney_Unknown_14-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__kidney__Kidney_Unknown_7',
    name: 'Kidney_Unknown_7',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_kidney-Kidney_Unknown_7.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__kidney__Kidney_Unknown_7-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__kidney__Kidney_Unknown_7-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__kidney__Kidney_Unknown_7-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__kidney__Mesangial_cells',
    name: 'Mesangial_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_kidney-Mesangial_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__kidney__Mesangial_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__kidney__Mesangial_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__kidney__Mesangial_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__kidney__Metanephric_cells',
    name: 'Metanephric_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_kidney-Metanephric_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__kidney__Metanephric_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__kidney__Metanephric_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__kidney__Metanephric_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__kidney__Ureteric_bud_cells',
    name: 'Ureteric_bud_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'kidney'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_kidney-Ureteric_bud_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__kidney__Ureteric_bud_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__kidney__Ureteric_bud_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__kidney__Ureteric_bud_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__liver__Hematopoietic_stem_cells',
    name: 'Hematopoietic_stem_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_liver-Hematopoietic_stem_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__liver__Hematopoietic_stem_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__liver__Hematopoietic_stem_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__liver__Hematopoietic_stem_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__liver__Hepatoblasts',
    name: 'Hepatoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_liver-Hepatoblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__liver__Hepatoblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__liver__Hepatoblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__liver__Hepatoblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__liver__Megakaryocytes',
    name: 'Megakaryocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_liver-Megakaryocytes.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__liver__Megakaryocytes-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__liver__Megakaryocytes-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__liver__Megakaryocytes-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__liver__Stellate_cells',
    name: 'Stellate_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_liver-Stellate_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__liver__Stellate_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__liver__Stellate_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__liver__Stellate_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__lung__Bronchiolar_and_alveolar_epithelial_cells',
    name: 'Bronchiolar_and_alveolar_epithelial_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_lung-Bronchiolar_and_alveolar_epithelial_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__lung__Bronchiolar_and_alveolar_epithelial_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__lung__Bronchiolar_and_alveolar_epithelial_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__lung__Bronchiolar_and_alveolar_epithelial_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__lung__Ciliated_epithelial_cells',
    name: 'Ciliated_epithelial_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_lung-Ciliated_epithelial_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__lung__Ciliated_epithelial_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__lung__Ciliated_epithelial_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__lung__Ciliated_epithelial_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__lung__Neuroendocrine_cells',
    name: 'Neuroendocrine_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_lung-Neuroendocrine_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__lung__Neuroendocrine_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__lung__Neuroendocrine_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__lung__Neuroendocrine_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__muscle__Lymphoid_and_Myeloid_cells',
    name: 'Lymphoid_and_Myeloid_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_muscle-Lymphoid_and_Myeloid_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__muscle__Lymphoid_and_Myeloid_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__muscle__Lymphoid_and_Myeloid_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__muscle__Lymphoid_and_Myeloid_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__muscle__Muscle_Unknown_7',
    name: 'Muscle_Unknown_7',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_muscle-Muscle_Unknown_7.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__muscle__Muscle_Unknown_7-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__muscle__Muscle_Unknown_7-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__muscle__Muscle_Unknown_7-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__muscle__Satellite_cells',
    name: 'Satellite_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_muscle-Satellite_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__muscle__Satellite_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__muscle__Satellite_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__muscle__Satellite_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__muscle__Skeletal_muscle_cells',
    name: 'Skeletal_muscle_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_muscle-Skeletal_muscle_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__muscle__Skeletal_muscle_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__muscle__Skeletal_muscle_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__muscle__Skeletal_muscle_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__pancreas__Acinar_cells',
    name: 'Acinar_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_pancreas-Acinar_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__pancreas__Acinar_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__pancreas__Acinar_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__pancreas__Acinar_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__pancreas__Ductal_cells',
    name: 'Ductal_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_pancreas-Ductal_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__pancreas__Ductal_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__pancreas__Ductal_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__pancreas__Ductal_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__pancreas__Islet_endocrine_cells',
    name: 'Islet_endocrine_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_pancreas-Islet_endocrine_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__pancreas__Islet_endocrine_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__pancreas__Islet_endocrine_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__pancreas__Islet_endocrine_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__pancreas__Pancreas_Unknown_1',
    name: 'Pancreas_Unknown_1',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_pancreas-Pancreas_Unknown_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__pancreas__Pancreas_Unknown_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__pancreas__Pancreas_Unknown_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__pancreas__Pancreas_Unknown_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Placenta__Extravillous_trophoblasts',
    name: 'Extravillous_trophoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Extravillous_trophoblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Placenta__Extravillous_trophoblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Placenta__Extravillous_trophoblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__Placenta__Extravillous_trophoblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Placenta__PAEP_MECOM_positive_cells',
    name: 'PAEP_MECOM_positive_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-PAEP_MECOM_positive_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Placenta__PAEP_MECOM_positive_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Placenta__PAEP_MECOM_positive_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__Placenta__PAEP_MECOM_positive_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId:
      'Fetal_coacc__Placenta__Syncytiotrophoblast_and_villous_cytotrophoblasts',
    name: 'Syncytiotrophoblast_and_villous_cytotrophoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Syncytiotrophoblast_and_villous_cytotrophoblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Placenta__Syncytiotrophoblast_and_villous_cytotrophoblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Placenta__Syncytiotrophoblast_and_villous_cytotrophoblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__Placenta__Syncytiotrophoblast_and_villous_cytotrophoblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__Placenta__Trophoblast_giant_cells',
    name: 'Trophoblast_giant_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'Placenta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Trophoblast_giant_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__Placenta__Trophoblast_giant_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__Placenta__Trophoblast_giant_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__Placenta__Trophoblast_giant_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__stomach__Epithelial_cells',
    name: 'Epithelial_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_stomach-Epithelial_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__stomach__Epithelial_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__stomach__Epithelial_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__stomach__Epithelial_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__stomach__Goblet_cells',
    name: 'Goblet_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_stomach-Goblet_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__stomach__Goblet_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__stomach__Goblet_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__stomach__Goblet_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__stomach__Parietal_and_chief_cells',
    name: 'Parietal_and_chief_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_stomach-Parietal_and_chief_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__stomach__Parietal_and_chief_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__stomach__Parietal_and_chief_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__stomach__Parietal_and_chief_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__thymus__Antigen_presenting_cells',
    name: 'Antigen_presenting_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'thymus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_thymus-Antigen_presenting_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__thymus__Antigen_presenting_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__thymus__Antigen_presenting_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__thymus__Antigen_presenting_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__thymus__Thymic_epithelial_cells',
    name: 'Thymic_epithelial_cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'thymus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_thymus-Thymic_epithelial_cells.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Fetal_coacc__thymus__Thymic_epithelial_cells-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Fetal_coacc__thymus__Thymic_epithelial_cells-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Fetal_coacc__thymus__Thymic_epithelial_cells-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_coacc__thymus__Thymocytes',
    name: 'Thymocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_coacc', 'thymus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_thymus-Thymocytes.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Fetal_coacc__thymus__Thymocytes-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Fetal_coacc__thymus__Thymocytes-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Fetal_coacc__thymus__Thymocytes-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Adipocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Adipocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Adipocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Adipocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_coacc__Adipose_omentum__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Alveolar_Capillary_Endothelial_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Alveolar_Capillary_Endothelial_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Alveolar_Capillary_Endothelial_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Alveolar_Capillary_Endothelial_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_coacc__Adipose_omentum__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Blood_Brain_Barrier_Endothelial_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Blood_Brain_Barrier_Endothelial_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Blood_Brain_Barrier_Endothelial_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Blood_Brain_Barrier_Endothelial_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Cardiac_Fibroblasts.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Cardiac_Fibroblasts-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Cardiac_Fibroblasts-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Cardiac_Fibroblasts-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Cardiac_Pericyte_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Cardiac_Pericyte_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Cardiac_Pericyte_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Cardiac_Pericyte_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Cardiac_Pericyte_3.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Cardiac_Pericyte_3-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Cardiac_Pericyte_3-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Cardiac_Pericyte_3-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Cardiac_Pericyte_4.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Cardiac_Pericyte_4-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Cardiac_Pericyte_4-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Cardiac_Pericyte_4-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Chief_Cell',
    name: 'Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Chief_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Chief_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Chief_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Chief_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Ductal_Cell_(Pancreatic)',
    name: 'Ductal_Cell_(Pancreatic)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Ductal_Cell_(Pancreatic).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Ductal_Cell_(Pancreatic)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Ductal_Cell_(Pancreatic)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Ductal_Cell_(Pancreatic)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Endothelial_Cell_(General)_1',
    name: 'Endothelial_Cell_(General)_1',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Endothelial_Cell_(General)_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Endothelial_Cell_(General)_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Endothelial_Cell_(General)_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Endothelial_Cell_(General)_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Endothelial_Cell_(General)_2',
    name: 'Endothelial_Cell_(General)_2',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Endothelial_Cell_(General)_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Endothelial_Cell_(General)_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Endothelial_Cell_(General)_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Endothelial_Cell_(General)_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Endothelial_Cell_(General)_3',
    name: 'Endothelial_Cell_(General)_3',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Endothelial_Cell_(General)_3.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Endothelial_Cell_(General)_3-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Endothelial_Cell_(General)_3-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Endothelial_Cell_(General)_3-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Endothelial_Cell_(Myocardial)',
    name: 'Endothelial_Cell_(Myocardial)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Endothelial_Cell_(Myocardial).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Endothelial_Cell_(Myocardial)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Endothelial_Cell_(Myocardial)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Endothelial_Cell_(Myocardial)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Fibroblast_(Epithelial)',
    name: 'Fibroblast_(Epithelial)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Fibroblast_(Epithelial).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Fibroblast_(Epithelial)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Fibroblast_(Epithelial)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Fibroblast_(Epithelial)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Fibroblast_(General)',
    name: 'Fibroblast_(General)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Fibroblast_(General).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Fibroblast_(General)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Fibroblast_(General)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Fibroblast_(General)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Fibroblast_(Peripheral_Nerve)',
    name: 'Fibroblast_(Peripheral_Nerve)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Fibroblast_(Peripheral_Nerve).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Fibroblast_(Peripheral_Nerve)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Fibroblast_(Peripheral_Nerve)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Fibroblast_(Peripheral_Nerve)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Fibroblast_(Sk_Muscle_Associated)',
    name: 'Fibroblast_(Sk_Muscle_Associated)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Fibroblast_(Sk_Muscle_Associated).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Fibroblast_(Sk_Muscle_Associated)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Fibroblast_(Sk_Muscle_Associated)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Fibroblast_(Sk_Muscle_Associated)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Foveolar_Cell',
    name: 'Foveolar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Foveolar_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Foveolar_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Foveolar_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Foveolar_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Luteal_Cell_(Ovarian)',
    name: 'Luteal_Cell_(Ovarian)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Luteal_Cell_(Ovarian).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Luteal_Cell_(Ovarian)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Luteal_Cell_(Ovarian)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Luteal_Cell_(Ovarian)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Lymphatic_Endothelial_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Lymphatic_Endothelial_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Lymphatic_Endothelial_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Lymphatic_Endothelial_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Macrophage_(General,Alveolar)',
    name: 'Macrophage_(General,Alveolar)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Macrophage_(General,Alveolar).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Macrophage_(General,Alveolar)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Macrophage_(General,Alveolar)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Macrophage_(General,Alveolar)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Macrophage_(General)',
    name: 'Macrophage_(General)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Macrophage_(General).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Macrophage_(General)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Macrophage_(General)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Macrophage_(General)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Mast_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Mast_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Mast_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Mast_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Memory_B_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Memory_B_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Memory_B_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Memory_B_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Mesothelial_Cell',
    name: 'Mesothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Mesothelial_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Mesothelial_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Mesothelial_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Mesothelial_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Naive_T_cell',
    name: 'Naive_T_cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Naive_T_cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Naive_T_cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Naive_T_cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Naive_T_cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Natural_Killer_T_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Natural_Killer_T_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Natural_Killer_T_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Natural_Killer_T_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Pancreatic_Acinar_Cell',
    name: 'Pancreatic_Acinar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Pancreatic_Acinar_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pancreatic_Acinar_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pancreatic_Acinar_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pancreatic_Acinar_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Pericyte_(Esophageal_Muscularis)',
    name: 'Pericyte_(Esophageal_Muscularis)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Pericyte_(Esophageal_Muscularis).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(Esophageal_Muscularis)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(Esophageal_Muscularis)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(Esophageal_Muscularis)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Pericyte_(General)_1',
    name: 'Pericyte_(General)_1',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Pericyte_(General)_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(General)_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(General)_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(General)_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Pericyte_(General)_2',
    name: 'Pericyte_(General)_2',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Pericyte_(General)_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(General)_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(General)_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(General)_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Pericyte_(General)_3',
    name: 'Pericyte_(General)_3',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Pericyte_(General)_3.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(General)_3-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(General)_3-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(General)_3-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Pericyte_(General)_4',
    name: 'Pericyte_(General)_4',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Pericyte_(General)_4.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(General)_4-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(General)_4-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Pericyte_(General)_4-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Peripheral_Nerve_Stromal',
    name: 'Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Peripheral_Nerve_Stromal.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Peripheral_Nerve_Stromal-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Peripheral_Nerve_Stromal-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Peripheral_Nerve_Stromal-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Plasma_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Plasma_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Plasma_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Plasma_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Schwann_Cell_(General)',
    name: 'Schwann_Cell_(General)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Schwann_Cell_(General).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Schwann_Cell_(General)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Schwann_Cell_(General)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Schwann_Cell_(General)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Small_Intestinal_Enterocyte',
    name: 'Small_Intestinal_Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Small_Intestinal_Enterocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Small_Intestinal_Enterocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Small_Intestinal_Enterocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Small_Intestinal_Enterocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_coacc__Adipose_omentum__Smooth_Muscle_(Esophageal_Muscularis)_3',
    name: 'Smooth_Muscle_(Esophageal_Muscularis)_3',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Smooth_Muscle_(Esophageal_Muscularis)_3.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Smooth_Muscle_(Esophageal_Muscularis)_3-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Smooth_Muscle_(Esophageal_Muscularis)_3-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Smooth_Muscle_(Esophageal_Muscularis)_3-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Smooth_Muscle_(General)',
    name: 'Smooth_Muscle_(General)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Smooth_Muscle_(General).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Smooth_Muscle_(General)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Smooth_Muscle_(General)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Smooth_Muscle_(General)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Smooth_Muscle_(Vaginal)',
    name: 'Smooth_Muscle_(Vaginal)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Smooth_Muscle_(Vaginal).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Smooth_Muscle_(Vaginal)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Smooth_Muscle_(Vaginal)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Smooth_Muscle_(Vaginal)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__T_Lymphocyte_1_(CD8+)',
    name: 'T_Lymphocyte_1_(CD8+)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-T_Lymphocyte_1_(CD8+).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__T_Lymphocyte_1_(CD8+)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__T_Lymphocyte_1_(CD8+)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__T_Lymphocyte_1_(CD8+)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__T_lymphocyte_2_(CD4+)',
    name: 'T_lymphocyte_2_(CD4+)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-T_lymphocyte_2_(CD4+).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__T_lymphocyte_2_(CD4+)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__T_lymphocyte_2_(CD4+)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__T_lymphocyte_2_(CD4+)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Vascular_Smooth_Muscle_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Vascular_Smooth_Muscle_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Vascular_Smooth_Muscle_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Vascular_Smooth_Muscle_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adipose_omentum__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adipose_omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_omentum-Vascular_Smooth_Muscle_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Vascular_Smooth_Muscle_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Vascular_Smooth_Muscle_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adipose_omentum__Vascular_Smooth_Muscle_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adrenal_gland__CNS,Enteric_Neuron',
    name: 'CNS,Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adrenal_gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_gland-CNS,Enteric_Neuron.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__CNS,Enteric_Neuron-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__CNS,Enteric_Neuron-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__CNS,Enteric_Neuron-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adrenal_gland__Cortical_Epithelial-like',
    name: 'Cortical_Epithelial-like',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adrenal_gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_gland-Cortical_Epithelial-like.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Cortical_Epithelial-like-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Cortical_Epithelial-like-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Cortical_Epithelial-like-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adrenal_gland__Endothelial_(Exocrine_Tissues)',
    name: 'Endothelial_(Exocrine_Tissues)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adrenal_gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_gland-Endothelial_(Exocrine_Tissues).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Endothelial_(Exocrine_Tissues)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Endothelial_(Exocrine_Tissues)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Endothelial_(Exocrine_Tissues)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adrenal_gland__Fibroblast_(Liver_Adrenal)',
    name: 'Fibroblast_(Liver_Adrenal)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adrenal_gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_gland-Fibroblast_(Liver_Adrenal).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Fibroblast_(Liver_Adrenal)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Fibroblast_(Liver_Adrenal)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Fibroblast_(Liver_Adrenal)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adrenal_gland__Transitional_Zone_Cortical_Cell',
    name: 'Transitional_Zone_Cortical_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adrenal_gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_gland-Transitional_Zone_Cortical_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Transitional_Zone_Cortical_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Transitional_Zone_Cortical_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Transitional_Zone_Cortical_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adrenal_gland__Zona_Fasciculata_Cortical_Cell',
    name: 'Zona_Fasciculata_Cortical_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adrenal_gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_gland-Zona_Fasciculata_Cortical_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Zona_Fasciculata_Cortical_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Zona_Fasciculata_Cortical_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Zona_Fasciculata_Cortical_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Adrenal_gland__Zona_Glomerulosa_Cortical_Cell',
    name: 'Zona_Glomerulosa_Cortical_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Adrenal_gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_gland-Zona_Glomerulosa_Cortical_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Zona_Glomerulosa_Cortical_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Zona_Glomerulosa_Cortical_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Adrenal_gland__Zona_Glomerulosa_Cortical_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Artery_aorta__Alveolar_Type_2_(AT2)_Cell',
    name: 'Alveolar_Type_2_(AT2)_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Artery_aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Artery_aorta-Alveolar_Type_2_(AT2)_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Artery_aorta__Alveolar_Type_2_(AT2)_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Artery_aorta__Alveolar_Type_2_(AT2)_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Artery_aorta__Alveolar_Type_2_(AT2)_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Artery_aorta__Endocardial_Cell',
    name: 'Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Artery_aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Artery_aorta-Endocardial_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Artery_aorta__Endocardial_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Artery_aorta__Endocardial_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Artery_aorta__Endocardial_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Artery_tibial__Alverolar_Type_2,Immune',
    name: 'Alverolar_Type_2,Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Artery_tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Artery_tibial-Alverolar_Type_2,Immune.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Artery_tibial__Alverolar_Type_2,Immune-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Artery_tibial__Alverolar_Type_2,Immune-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Artery_tibial__Alverolar_Type_2,Immune-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Artery_tibial__Smooth_Muscle_(Colon)_2',
    name: 'Smooth_Muscle_(Colon)_2',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Artery_tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Artery_tibial-Smooth_Muscle_(Colon)_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Artery_tibial__Smooth_Muscle_(Colon)_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Artery_tibial__Smooth_Muscle_(Colon)_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Artery_tibial__Smooth_Muscle_(Colon)_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Artery_tibial__Smooth_Muscle_(GE_Junction)',
    name: 'Smooth_Muscle_(GE_Junction)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Artery_tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Artery_tibial-Smooth_Muscle_(GE_Junction).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Artery_tibial__Smooth_Muscle_(GE_Junction)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Artery_tibial__Smooth_Muscle_(GE_Junction)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Artery_tibial__Smooth_Muscle_(GE_Junction)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_sigmoid__Colon_Epithelial_Cell_1',
    name: 'Colon_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_sigmoid-Colon_Epithelial_Cell_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Colon_Epithelial_Cell_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Colon_Epithelial_Cell_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Colon_Epithelial_Cell_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_sigmoid__Fibroblast_(Gastrointestinal)',
    name: 'Fibroblast_(Gastrointestinal)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_sigmoid-Fibroblast_(Gastrointestinal).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Fibroblast_(Gastrointestinal)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Fibroblast_(Gastrointestinal)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Fibroblast_(Gastrointestinal)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_sigmoid__Melanocyte',
    name: 'Melanocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_sigmoid-Melanocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Melanocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Melanocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_coacc__Colon_sigmoid__Melanocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Colon)_1',
    name: 'Smooth_Muscle_(Colon)_1',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_sigmoid-Smooth_Muscle_(Colon)_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Colon)_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Colon)_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Colon)_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Esophageal_Mucosal)',
    name: 'Smooth_Muscle_(Esophageal_Mucosal)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_sigmoid-Smooth_Muscle_(Esophageal_Mucosal).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Esophageal_Mucosal)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Esophageal_Mucosal)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Esophageal_Mucosal)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Esophageal_Muscularis)_1',
    name: 'Smooth_Muscle_(Esophageal_Muscularis)_1',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_sigmoid-Smooth_Muscle_(Esophageal_Muscularis)_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Esophageal_Muscularis)_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Esophageal_Muscularis)_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Esophageal_Muscularis)_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Esophageal_Muscularis)_2',
    name: 'Smooth_Muscle_(Esophageal_Muscularis)_2',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_sigmoid-Smooth_Muscle_(Esophageal_Muscularis)_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Esophageal_Muscularis)_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Esophageal_Muscularis)_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Esophageal_Muscularis)_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(General_Gastrointestinal)',
    name: 'Smooth_Muscle_(General_Gastrointestinal)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_sigmoid-Smooth_Muscle_(General_Gastrointestinal).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(General_Gastrointestinal)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(General_Gastrointestinal)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(General_Gastrointestinal)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Uterine)',
    name: 'Smooth_Muscle_(Uterine)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_sigmoid-Smooth_Muscle_(Uterine).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Uterine)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Uterine)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_sigmoid__Smooth_Muscle_(Uterine)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_transverse__Astrocyte_2',
    name: 'Astrocyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_transverse-Astrocyte_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Astrocyte_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Astrocyte_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Astrocyte_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_transverse__Colon_Epithelial_Cell_2',
    name: 'Colon_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_transverse-Colon_Epithelial_Cell_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Colon_Epithelial_Cell_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Colon_Epithelial_Cell_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Colon_Epithelial_Cell_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_transverse__Colon_Epithelial_Cell_3',
    name: 'Colon_Epithelial_Cell_3',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_transverse-Colon_Epithelial_Cell_3.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Colon_Epithelial_Cell_3-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Colon_Epithelial_Cell_3-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Colon_Epithelial_Cell_3-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_transverse__Colonic_Goblet_Cell',
    name: 'Colonic_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_transverse-Colonic_Goblet_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Colonic_Goblet_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Colonic_Goblet_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Colonic_Goblet_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_transverse__Enterochromaffin_Cell',
    name: 'Enterochromaffin_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_transverse-Enterochromaffin_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Enterochromaffin_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Enterochromaffin_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Enterochromaffin_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_transverse__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_transverse-Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Mammary_Luminal_Epithelial_Cell_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Mammary_Luminal_Epithelial_Cell_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Mammary_Luminal_Epithelial_Cell_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_transverse__Oligodendrocyte_Precursor',
    name: 'Oligodendrocyte_Precursor',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_transverse-Oligodendrocyte_Precursor.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Oligodendrocyte_Precursor-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Oligodendrocyte_Precursor-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Oligodendrocyte_Precursor-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_transverse__Paneth_Cell',
    name: 'Paneth_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_transverse-Paneth_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Paneth_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Paneth_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Paneth_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_transverse__Small_Intestinal_Goblet_Cell',
    name: 'Small_Intestinal_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_transverse-Small_Intestinal_Goblet_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Small_Intestinal_Goblet_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Small_Intestinal_Goblet_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Small_Intestinal_Goblet_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Colon_transverse__Tuft_Cell',
    name: 'Tuft_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Colon_transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_transverse-Tuft_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Tuft_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Tuft_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Colon_transverse__Tuft_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Esophagus_gejunction__Airway_Goblet_Cell',
    name: 'Airway_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Esophagus_gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_gejunction-Airway_Goblet_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Esophagus_gejunction__Airway_Goblet_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_gejunction__Airway_Goblet_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_gejunction__Airway_Goblet_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Esophagus_gejunction__Myoepithelial_(Skin)',
    name: 'Myoepithelial_(Skin)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Esophagus_gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_gejunction-Myoepithelial_(Skin).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Esophagus_gejunction__Myoepithelial_(Skin)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_gejunction__Myoepithelial_(Skin)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_gejunction__Myoepithelial_(Skin)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Esophagus_mucosa__Basal_Epidermal_(Skin)',
    name: 'Basal_Epidermal_(Skin)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Esophagus_mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_mucosa-Basal_Epidermal_(Skin).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Basal_Epidermal_(Skin)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Basal_Epidermal_(Skin)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Basal_Epidermal_(Skin)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Esophagus_mucosa__Basal_Epithelial_(Mammary)',
    name: 'Basal_Epithelial_(Mammary)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Esophagus_mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_mucosa-Basal_Epithelial_(Mammary).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Basal_Epithelial_(Mammary)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Basal_Epithelial_(Mammary)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Basal_Epithelial_(Mammary)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Esophagus_mucosa__Esophageal_Epithelial_Cell',
    name: 'Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Esophagus_mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_mucosa-Esophageal_Epithelial_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Esophageal_Epithelial_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Esophageal_Epithelial_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Esophageal_Epithelial_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Esophagus_mucosa__Granular_Epidermal_(Skin)',
    name: 'Granular_Epidermal_(Skin)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Esophagus_mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_mucosa-Granular_Epidermal_(Skin).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Granular_Epidermal_(Skin)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Granular_Epidermal_(Skin)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Granular_Epidermal_(Skin)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Esophagus_mucosa__Keratinocyte_1',
    name: 'Keratinocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Esophagus_mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_mucosa-Keratinocyte_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Keratinocyte_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Keratinocyte_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_mucosa__Keratinocyte_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Esophagus_muscularis__Satellite_Cell',
    name: 'Satellite_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Esophagus_muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_muscularis-Satellite_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Esophagus_muscularis__Satellite_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_muscularis__Satellite_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_muscularis__Satellite_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Esophagus_muscularis__Thyroid_Follicular_Cell',
    name: 'Thyroid_Follicular_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Esophagus_muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_muscularis-Thyroid_Follicular_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Esophagus_muscularis__Thyroid_Follicular_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_muscularis__Thyroid_Follicular_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_muscularis__Thyroid_Follicular_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Esophagus_muscularis__Type_I_Skeletal_Myocyte',
    name: 'Type_I_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Esophagus_muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_muscularis-Type_I_Skeletal_Myocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Esophagus_muscularis__Type_I_Skeletal_Myocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_muscularis__Type_I_Skeletal_Myocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Esophagus_muscularis__Type_I_Skeletal_Myocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__HeartAtrial_appendage__Alveolar_Type_1_(AT1)_Cell',
    name: 'Alveolar_Type_1_(AT1)_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'HeartAtrial_appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_HeartAtrial_appendage-Alveolar_Type_1_(AT1)_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__HeartAtrial_appendage__Alveolar_Type_1_(AT1)_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__HeartAtrial_appendage__Alveolar_Type_1_(AT1)_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__HeartAtrial_appendage__Alveolar_Type_1_(AT1)_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__HeartAtrial_appendage__Atrial_Cardiomyocyte',
    name: 'Atrial_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'HeartAtrial_appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_HeartAtrial_appendage-Atrial_Cardiomyocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__HeartAtrial_appendage__Atrial_Cardiomyocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__HeartAtrial_appendage__Atrial_Cardiomyocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__HeartAtrial_appendage__Atrial_Cardiomyocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__HeartAtrial_appendage__Cardiac_Pericyte_1',
    name: 'Cardiac_Pericyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'HeartAtrial_appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_HeartAtrial_appendage-Cardiac_Pericyte_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__HeartAtrial_appendage__Cardiac_Pericyte_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__HeartAtrial_appendage__Cardiac_Pericyte_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__HeartAtrial_appendage__Cardiac_Pericyte_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__HeartAtrial_appendage__Ventricular_Cardiomyocyte',
    name: 'Ventricular_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'HeartAtrial_appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_HeartAtrial_appendage-Ventricular_Cardiomyocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__HeartAtrial_appendage__Ventricular_Cardiomyocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__HeartAtrial_appendage__Ventricular_Cardiomyocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__HeartAtrial_appendage__Ventricular_Cardiomyocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Islet_CB__Gastric_Neuroendocrine_Cell',
    name: 'Gastric_Neuroendocrine_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Islet_CB'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_CB-Gastric_Neuroendocrine_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Gastric_Neuroendocrine_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Gastric_Neuroendocrine_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Gastric_Neuroendocrine_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Islet_CB__Hepatocyte',
    name: 'Hepatocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Islet_CB'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_CB-Hepatocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_coacc__Islet_CB__Hepatocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_coacc__Islet_CB__Hepatocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_coacc__Islet_CB__Hepatocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Islet_CB__Pancreatic_Alpha_Cell_1',
    name: 'Pancreatic_Alpha_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Islet_CB'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_CB-Pancreatic_Alpha_Cell_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Alpha_Cell_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Alpha_Cell_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Alpha_Cell_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Islet_CB__Pancreatic_Alpha_Cell_2',
    name: 'Pancreatic_Alpha_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Islet_CB'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_CB-Pancreatic_Alpha_Cell_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Alpha_Cell_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Alpha_Cell_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Alpha_Cell_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Islet_CB__Pancreatic_Beta_Cell_1',
    name: 'Pancreatic_Beta_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Islet_CB'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_CB-Pancreatic_Beta_Cell_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Beta_Cell_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Beta_Cell_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Beta_Cell_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Islet_CB__Pancreatic_Beta_Cell_2',
    name: 'Pancreatic_Beta_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Islet_CB'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_CB-Pancreatic_Beta_Cell_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Beta_Cell_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Beta_Cell_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Beta_Cell_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Islet_CB__Pancreatic_Delta,Gamma_cell',
    name: 'Pancreatic_Delta,Gamma_cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Islet_CB'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_CB-Pancreatic_Delta,Gamma_cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Delta,Gamma_cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Delta,Gamma_cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Islet_CB__Pancreatic_Delta,Gamma_cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__lung__Cilliated_Cell',
    name: 'Cilliated_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_lung-Cilliated_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_coacc__lung__Cilliated_Cell-LinearPairedArcDisplay',
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
    type: 'VariantTrack',
    trackId: 'Adult_coacc__lung__Club_Cell',
    name: 'Club_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_lung-Club_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_coacc__lung__Club_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_coacc__lung__Club_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_coacc__lung__Club_Cell-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Mammary_tissue__Eccrine_Epidermal_(Skin)',
    name: 'Eccrine_Epidermal_(Skin)',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Mammary_tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Mammary_tissue-Eccrine_Epidermal_(Skin).bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Mammary_tissue__Eccrine_Epidermal_(Skin)-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Mammary_tissue__Eccrine_Epidermal_(Skin)-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Mammary_tissue__Eccrine_Epidermal_(Skin)-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Mammary_tissue__Mammary_Epithelial',
    name: 'Mammary_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Mammary_tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Mammary_tissue-Mammary_Epithelial.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Mammary_tissue__Mammary_Epithelial-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Mammary_tissue__Mammary_Epithelial-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Mammary_tissue__Mammary_Epithelial-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Mammary_tissue__Mammary_Luminal_Epithelial_Cell_1',
    name: 'Mammary_Luminal_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Mammary_tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Mammary_tissue-Mammary_Luminal_Epithelial_Cell_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Mammary_tissue__Mammary_Luminal_Epithelial_Cell_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Mammary_tissue__Mammary_Luminal_Epithelial_Cell_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Mammary_tissue__Mammary_Luminal_Epithelial_Cell_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Mammary_tissue__Microglia',
    name: 'Microglia',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Mammary_tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Mammary_tissue-Microglia.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Mammary_tissue__Microglia-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Mammary_tissue__Microglia-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_coacc__Mammary_tissue__Microglia-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__muscle__Type_II_Skeletal_Myocyte',
    name: 'Type_II_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_muscle-Type_II_Skeletal_Myocyte.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__muscle__Type_II_Skeletal_Myocyte-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__muscle__Type_II_Skeletal_Myocyte-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__muscle__Type_II_Skeletal_Myocyte-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__Skin_sun_exposed__Astrocyte_1',
    name: 'Astrocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'Skin_sun_exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Skin_sun_exposed-Astrocyte_1.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId:
          'Adult_coacc__Skin_sun_exposed__Astrocyte_1-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId:
          'Adult_coacc__Skin_sun_exposed__Astrocyte_1-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId:
          'Adult_coacc__Skin_sun_exposed__Astrocyte_1-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__skin__Keratinocyte_2',
    name: 'Keratinocyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_skin-Keratinocyte_2.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_coacc__skin__Keratinocyte_2-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_coacc__skin__Keratinocyte_2-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_coacc__skin__Keratinocyte_2-ChordVariantDisplay',
      },
    ],
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_coacc__stomach__Parietal_Cell',
    name: 'Parietal_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_coacc', 'stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'https://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_stomach-Parietal_Cell.bedpe',
      },
    },
    displays: [
      {
        type: 'LinearPairedArcDisplay',
        displayId: 'Adult_coacc__stomach__Parietal_Cell-LinearPairedArcDisplay',
      },
      {
        type: 'LinearVariantDisplay',
        displayId: 'Adult_coacc__stomach__Parietal_Cell-LinearVariantDisplay',
      },
      {
        type: 'ChordVariantDisplay',
        displayId: 'Adult_coacc__stomach__Parietal_Cell-ChordVariantDisplay',
      },
    ],
  },
];
export default tracks;
