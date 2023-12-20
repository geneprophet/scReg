// tracks 就是genome browser的一条可视化轨迹
// 比如多种细胞类型的scATAC数据每一个都是一条track
// 拱形图也是个track
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
  {
    type: 'QuantitativeTrack',
    trackId: 'my_wiggle_track',
    name: 'My Wiggle Track',
    assemblyNames: ['hg19'],
    category: ['ENCODE bigWigs', 'subcategory'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        // uri: 'https://www.encodeproject.org/files/ENCFF303QSJ/@@download/ENCFF303QSJ.bigWig',
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipocyte.bw',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'skbr3_bedpe_arcs',
    name: 'SKBR3 BEDPE arcs',
    assemblyNames: ['hg19'],
    category: ['SKBR3'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        // uri: 'https://jbrowse.org/genomes/hg19/skbr3/reads_lr_skbr3.fa_ngmlr-0.2.3_mapped.bam.sniffles1kb_auto_l8_s5_noalt.bedpe',
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_lung-Cilliated_Cell.bedpe',
      },
    },
  },
  {
    type: 'FeatureTrack',
    trackId: 'snp151.bed4',
    name: 'snp151.bed4',
    assemblyNames: ['hg19'],
    category: ['Variation'],
    adapter: {
      type: 'BigBedAdapter',
      bigBedLocation: {
        locationType: 'UriLocation',
        uri: 'https://hgdownload.soe.ucsc.edu/gbdb/hg19/vai/snp151.bed4.bb',
      },
    },
  },
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Adipocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Airway_Goblet_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Airway_Goblet_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Alveolar_Capillary_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Alveolar_Capillary_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Alveolar_Capillary_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Alveolar_Capillary_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Alveolar_Capillary_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Alveolar_Capillary_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Alveolar_Capillary_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Alveolar_Capillary_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Alveolar_Capillary_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Alveolar_Type_1_AT1_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Alveolar_Type_1_AT1_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Alveolar_Type_2_AT2_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Alveolar_Type_2_AT2_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Alverolar_Type_2_Immune.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Alverolar_Type_2_Immune.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Alverolar_Type_2_Immune.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Alverolar_Type_2_Immune.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Alverolar_Type_2_Immune.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Astrocyte_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Astrocyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Atrial_Cardiomyocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Atrial_Cardiomyocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Basal_Epidermal_Skin.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Basal_Epidermal_Skin.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Basal_Epidermal_Skin.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Basal_Epidermal_Skin.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Basal_Epithelial_Mammary.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Basal_Epithelial_Mammary.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Basal_Epithelial_Mammary.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Basal_Epithelial_Mammary.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Blood_Brain_Barrier_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Cardiac_Fibroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Cardiac_Pericyte_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Cardiac_Pericyte_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Cardiac_Pericyte_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Cardiac_Pericyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Cardiac_Pericyte_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Cardiac_Pericyte_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Cardiac_Pericyte_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Cardiac_Pericyte_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Cardiac_Pericyte_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Cardiac_Pericyte_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Cardiac_Pericyte_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Cardiac_Pericyte_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Cardiac_Pericyte_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Cardiac_Pericyte_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Cardiac_Pericyte_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Cardiac_Pericyte_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Cardiac_Pericyte_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Chief_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Chief_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Chief_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Chief_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Chief_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Cilliated_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Club_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Club_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_CNS_Enteric_Neuron.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_CNS_Enteric_Neuron.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_CNS_Enteric_Neuron.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_CNS_Enteric_Neuron.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_CNS_Enteric_Neuron.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_CNS_Enteric_Neuron.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_CNS_Enteric_Neuron.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_CNS_Enteric_Neuron.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_CNS_Enteric_Neuron.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_CNS_Enteric_Neuron.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Colon_Epithelial_Cell_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Colon_Epithelial_Cell_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Colon_Epithelial_Cell_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Colon_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Colon_Epithelial_Cell_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Colon_Epithelial_Cell_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Colonic_Goblet_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Colonic_Goblet_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Cortical_Epithelial_like.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Eccrine_Epidermal_Skin.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Eccrine_Epidermal_Skin.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Eccrine_Epidermal_Skin.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Endocardial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Endocardial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Endocardial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Endocardial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Endocardial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Endothelial_Cell_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Endothelial_Cell_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Endothelial_Cell_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Endothelial_Cell_Myocardial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Endothelial_Exocrine_Tissues.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Endothelial_Exocrine_Tissues.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Endothelial_Exocrine_Tissues.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Enterochromaffin_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Enterochromaffin_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Enterochromaffin_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Esophageal_Epithelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Esophageal_Epithelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Esophageal_Epithelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Esophageal_Epithelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Esophageal_Epithelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Fibroblast_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Fibroblast_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Fibroblast_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Fibroblast_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Fibroblast_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Fibroblast_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Fibroblast_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Fibroblast_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Fibroblast_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Fibroblast_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Fibroblast_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Fibroblast_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Fibroblast_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Fibroblast_Gastrointestinal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Fibroblast_Gastrointestinal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Fibroblast_Gastrointestinal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Fibroblast_Gastrointestinal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Fibroblast_Gastrointestinal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Fibroblast_Gastrointestinal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Fibroblast_Gastrointestinal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Fibroblast_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Fibroblast_Liver_Adrenal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Fibroblast_Liver_Adrenal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Fibroblast_Liver_Adrenal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Fibroblast_Liver_Adrenal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Fibroblast_Liver_Adrenal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Fibroblast_Peripheral_Nerve.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Fibroblast_Sk_Muscle_Associated.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Fibroblast_Sk_Muscle_Associated.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Fibroblast_Sk_Muscle_Associated.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Fibroblast_Sk_Muscle_Associated.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Fibroblast_Sk_Muscle_Associated.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Fibroblast_Sk_Muscle_Associated.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Fibroblast_Sk_Muscle_Associated.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Fibroblast_Sk_Muscle_Associated.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Foveolar_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Foveolar_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Foveolar_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Cerebrum_adult_GABAergic_Neuron_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Cerebrum_adult_GABAergic_Neuron_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Gastric_Neuroendocrine_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Gastric_Neuroendocrine_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Gastric_Neuroendocrine_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Gastric_Neuroendocrine_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Cerebrum_adult_Glutamatergic_Neuron_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Cerebrum_adult_Glutamatergic_Neuron_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Granular_Epidermal_Skin.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Granular_Epidermal_Skin.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Granular_Epidermal_Skin.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Granular_Epidermal_Skin.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Hepatocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Hepatocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Hepatocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Keratinocyte_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Keratinocyte_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Keratinocyte_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Keratinocyte_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Keratinocyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Keratinocyte_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Luteal_Cell_Ovarian.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Macrophage_General_Alveolar.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Macrophage_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Mammary_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Mammary_Epithelial.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Mammary_Luminal_Epithelial_Cell_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Mammary_Luminal_Epithelial_Cell_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Mammary_Luminal_Epithelial_Cell_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Mammary_Luminal_Epithelial_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Mast_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Melanocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Melanocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Melanocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Memory_B_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Intestine_adult_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Microglia.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Microglia.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Myoepithelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Myoepithelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Myoepithelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Myoepithelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Myoepithelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Naive_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Natural_Killer_T_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Oligodendrocyte_Precursor.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Cerebrum_adult_Oligodendrocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Pancreatic_Acinar_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Pancreatic_Acinar_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Pancreatic_Acinar_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Pancreatic_Acinar_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Pancreatic_Acinar_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Pancreatic_Acinar_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Pancreatic_Alpha_Cell_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Pancreatic_Alpha_Cell_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Pancreatic_Alpha_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Pancreatic_Alpha_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Pancreatic_Beta_Cell_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Pancreatic_Beta_Cell_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Pancreatic_Beta_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Pancreatic_Beta_Cell_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Pancreatic_Delta_Gamma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Pancreatic_Delta_Gamma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Pancreatic_Delta_Gamma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Pancreatic_Delta_Gamma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Paneth_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Paneth_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Parietal_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Pericyte_Esophageal_Muscularis.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Pericyte_General_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Pericyte_General_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Pericyte_General_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Pericyte_General_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Peripheral_Nerve_Stromal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Peripheral_Nerve_Stromal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Peripheral_Nerve_Stromal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Peripheral_Nerve_Stromal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Peripheral_Nerve_Stromal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Peripheral_Nerve_Stromal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Peripheral_Nerve_Stromal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Peripheral_Nerve_Stromal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Peripheral_Nerve_Stromal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Peripheral_Nerve_Stromal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Peripheral_Nerve_Stromal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Peripheral_Nerve_Stromal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Plasma_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Satellite_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Satellite_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Schwann_Cell_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Small_Intestinal_Enterocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Small_Intestinal_Enterocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Small_Intestinal_Enterocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Small_Intestinal_Enterocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Small_Intestinal_Enterocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Small_Intestinal_Enterocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Small_Intestinal_Goblet_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Small_Intestinal_Goblet_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Smooth_Muscle_Colon_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Smooth_Muscle_Colon_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Smooth_Muscle_Colon_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Smooth_Muscle_Colon_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Smooth_Muscle_Colon_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Smooth_Muscle_Colon_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Smooth_Muscle_Colon_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Smooth_Muscle_Colon_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Smooth_Muscle_Colon_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Smooth_Muscle_Colon_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Smooth_Muscle_Colon_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Smooth_Muscle_Colon_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Smooth_Muscle_Colon_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Smooth_Muscle_Colon_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Smooth_Muscle_Colon_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Smooth_Muscle_Colon_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Smooth_Muscle_Colon_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Smooth_Muscle_Colon_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Smooth_Muscle_Colon_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Smooth_Muscle_Colon_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Smooth_Muscle_Esophageal_Mucosal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Smooth_Muscle_Esophageal_Mucosal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Smooth_Muscle_Esophageal_Mucosal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Smooth_Muscle_Esophageal_Mucosal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Smooth_Muscle_Esophageal_Mucosal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Smooth_Muscle_Esophageal_Mucosal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Smooth_Muscle_Esophageal_Mucosal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Smooth_Muscle_Esophageal_Mucosal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Smooth_Muscle_Esophageal_Mucosal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Smooth_Muscle_Esophageal_Mucosal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Smooth_Muscle_Esophageal_Mucosal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Smooth_Muscle_Esophageal_Mucosal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Smooth_Muscle_Esophageal_Muscularis_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Smooth_Muscle_Esophageal_Muscularis_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Smooth_Muscle_Esophageal_Muscularis_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Smooth_Muscle_GE_Junction.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Smooth_Muscle_GE_Junction.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Smooth_Muscle_GE_Junction.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Smooth_Muscle_GE_Junction.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Smooth_Muscle_GE_Junction.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Smooth_Muscle_GE_Junction.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Smooth_Muscle_GE_Junction.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Smooth_Muscle_GE_Junction.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Smooth_Muscle_GE_Junction.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Smooth_Muscle_GE_Junction.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Smooth_Muscle_General_Gastrointestinal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Smooth_Muscle_General_Gastrointestinal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Smooth_Muscle_General_Gastrointestinal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Smooth_Muscle_General_Gastrointestinal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Smooth_Muscle_General_Gastrointestinal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Smooth_Muscle_General.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Smooth_Muscle_Uterine.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Smooth_Muscle_Uterine.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Smooth_Muscle_Uterine.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Smooth_Muscle_Uterine.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Smooth_Muscle_Uterine.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Smooth_Muscle_Uterine.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Smooth_Muscle_Uterine.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Smooth_Muscle_Uterine.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Smooth_Muscle_Uterine.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Smooth_Muscle_Vaginal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Smooth_Muscle_Vaginal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Smooth_Muscle_Vaginal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Smooth_Muscle_Vaginal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Smooth_Muscle_Vaginal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Smooth_Muscle_Vaginal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Smooth_Muscle_Vaginal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Smooth_Muscle_Vaginal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Smooth_Muscle_Vaginal.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Liver_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_T_Lymphocyte_1_CD8+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Islet_Cb_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_T_Lymphocyte_2_CD4+.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Thyroid_Follicular_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Thyroid_Follicular_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Thyroid_Follicular_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Transitional_Zone_Cortical_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Tuft_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Tuft_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Type_I_Skeletal_Myocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Type_I_Skeletal_Myocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Type_II_Skeletal_Myocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Type_II_Skeletal_Myocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Lung_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Thyroid_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Vascular_Smooth_Muscle_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adipose_Omentum_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Aorta_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Artery_Tibial_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Sigmoid_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Colon_Transverse_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Gejunction_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Mucosa_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Esophagus_Muscularis_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Mammary_Tissue_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Muscle_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Nerve_Tibial_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Ovary_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Pancreas_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Skin_Sun_Exposed_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Small_Intestine_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Stomach_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Uterus_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Vagina_adult_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heart_Lv_adult_Ventricular_Cardiomyocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Heartatrial_Appendage_adult_Ventricular_Cardiomyocyte.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Zona_Fasciculata_Cortical_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/adult_Adrenal_Gland_adult_Zona_Glomerulosa_Cortical_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Pancreas_fetal_Acinar_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Adrenal_Gland_fetal_Adrenocortical_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Thymus_fetal_Antigen_Presenting_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Cerebrum_fetal_Astrocytes_Oligodendrocytes.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Cerebellum_fetal_Astrocytes.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Cerebrum_fetal_Astrocytes.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Lung_fetal_Bronchiolar_And_Alveolar_Epithelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Cardiomyocytes_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Cardiomyocytes.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Cerebrum_fetal_Cerebrum_Unknown_3.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Adrenal_Gland_fetal_Chromaffin_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Intestine_fetal_Chromaffin_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Lung_fetal_Ciliated_Epithelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Pancreas_fetal_Ductal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Elf3_Agbl2_Positive_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Artery_Aorta_fetal_Endocardial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_Lv_fetal_Endocardial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heartatrial_Appendage_fetal_Endocardial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Liver_fetal_Endocardial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Muscle_fetal_Endocardial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Endocardial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Intestine_fetal_ENS_Glia.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Stomach_fetal_ENS_Glia.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Intestine_fetal_ENS_Neurons.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Stomach_fetal_ENS_Neurons.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Epicardial_Fat_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Stomach_fetal_Epithelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Adrenal_Gland_fetal_Erythroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Erythroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Liver_fetal_Erythroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Placenta_fetal_Erythroblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Cerebrum_fetal_Excitatory_Neurons.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Placenta_fetal_Extravillous_Trophoblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Eye_fetal_Eye_Unknown_6.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Eye_fetal_Ganglion_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Stomach_fetal_Goblet_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Cerebellum_fetal_Granule_Neurons.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Heart_Unknown_10.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Liver_fetal_Hematopoietic_Stem_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Liver_fetal_Hepatoblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Eye_fetal_Horizontal_Cells_Amacrine_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Placenta_fetal_Igfbp1_Dkk1_Positive_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Cerebellum_fetal_Inhibitory_Interneurons.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Cerebrum_fetal_Inhibitory_Neurons.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Intestine_fetal_Intestinal_Epithelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Intestine_fetal_Intestine_Unknown_4.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Intestine_fetal_Intestine_Unknown_8.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Pancreas_fetal_Islet_Endocrine_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Kidney_fetal_Kidney_Unknown_14.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Kidney_fetal_Kidney_Unknown_7.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Cerebrum_fetal_Limbic_System_Neurons.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Intestine_fetal_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Lung_fetal_Lymphatic_Endothelial_Cell.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Muscle_fetal_Lymphoid_And_Myeloid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Pancreas_fetal_Lymphoid_And_Myeloid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Lymphoid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Intestine_fetal_Lymphoid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Liver_fetal_Lymphoid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Lung_fetal_Lymphoid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Placenta_fetal_Lymphoid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Adrenal_Gland_fetal_Megakaryocytes.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Liver_fetal_Megakaryocytes.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Lung_fetal_Megakaryocytes.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Spleen_fetal_Megakaryocytes.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Kidney_fetal_Mesangial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Intestine_fetal_Mesothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Kidney_fetal_Metanephric_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Muscle_fetal_Muscle_Unknown_7.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Adrenal_Gland_fetal_Myeloid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Myeloid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Intestine_fetal_Myeloid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Kidney_fetal_Myeloid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Liver_fetal_Myeloid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Lung_fetal_Myeloid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Placenta_fetal_Myeloid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Spleen_fetal_Myeloid_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Lung_fetal_Neuroendocrine_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Placenta_fetal_Paep_Mecom_Positive_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Pancreas_fetal_Pancreas_Unknown_1.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Stomach_fetal_Parietal_And_Chief_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Eye_fetal_Photoreceptor_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Cerebellum_fetal_Purkinje_Neurons.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Eye_fetal_Retinal_Pigment_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Eye_fetal_Retinal_Progenitors_And_Muller_Glia.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Muscle_fetal_Satellite_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Adrenal_Gland_fetal_Schwann_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Schwann_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Muscle_fetal_Schwann_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Muscle_fetal_Skeletal_Muscle_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Cerebrum_fetal_Skor2_Npsr1_Positive_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Smooth_Muscle_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Intestine_fetal_Smooth_Muscle_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Muscle_fetal_Smooth_Muscle_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Placenta_fetal_Smooth_Muscle_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Liver_fetal_Stellate_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Adrenal_Gland_fetal_Stromal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Eye_fetal_Stromal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Stromal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Intestine_fetal_Stromal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Kidney_fetal_Stromal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Lung_fetal_Stromal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Muscle_fetal_Stromal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Pancreas_fetal_Stromal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Placenta_fetal_Stromal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Spleen_fetal_Stromal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Stomach_fetal_Stromal_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Adrenal_Gland_fetal_Sympathoblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Placenta_fetal_Syncytiotrophoblast_And_Villous_Cytotrophoblasts.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Thymus_fetal_Thymic_Epithelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Thymus_fetal_Thymocytes.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Placenta_fetal_Trophoblast_Giant_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Kidney_fetal_Ureteric_Bud_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Adrenal_Gland_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Cerebrum_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Eye_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Heart_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Intestine_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Kidney_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Liver_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Lung_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Muscle_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Pancreas_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Placenta_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Spleen_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Stomach_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/Chromatin_accessibility/fetal_Thymus_fetal_Vascular_Endothelial_Cells.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal_Gland-Adrenal_Adrenocortical_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal_Gland-Adrenal_Chromaffin_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal_Gland-Adrenal_Erythroblasts.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal_Gland-Adrenal_Megakaryocytes_Unsure.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal_Gland-Adrenal_Myeloid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal_Gland-Adrenal_Schwann_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal_Gland-Adrenal_Stromal_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal_Gland-Adrenal_Sympathoblasts.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Adrenal_Gland-Adrenal_Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Cerebellum-Cerebellum_Astrocytes.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Cerebellum-Cerebellum_Granule_Neurons.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Cerebellum-Cerebellum_Inhibitory_Interneurons_Unsure.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Cerebellum-Cerebellum_Purkinje_Neurons.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Cerebrum-Cerebrum_Astrocytes.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Cerebrum-Cerebrum_Cerebrum_Unknown.3.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Cerebrum-Cerebrum_Excitatory_Neurons.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Cerebrum-Cerebrum_Inhibitory_Neurons.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Cerebrum-Cerebrum_Limbic_System_Neurons.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Cerebrum-Cerebrum_Skor2_Npsr1_Positive_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Cerebrum-Cerebrum_Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Eye_Ganglion_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Eye_Horizontal_Cells_Amacrine_Cells_Unsure.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Eye_Photoreceptor_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Eye_Retinal_Pigment_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Eye_Retinal_Progenitors_And_Muller_Glia.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Eye_Stromal_Cells_Unsure.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Eye_Unknown_6.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Eye-Eye_Vascular_Endothelial_Cells_Unsure.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Cardiomyocytes_Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Cardiomyocytes.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Elf3_Agbl2_Positive_Cells_Unsure.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Endocardial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Epicardial_Fat_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Erythroblasts.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Heart_Unknown.10.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Lymphatic_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Lymphoid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Myeloid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Schwann_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Smooth_Muscle_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Stromal_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Heart-Heart_Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Chromaffin_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Ens_Glia.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Ens_Neurons.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Intestinal_Epithelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Intestine_Unknown.4.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Intestine_Unknown.8.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Lymphatic_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Lymphoid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Mesothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Myeloid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Smooth_Muscle_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Stromal_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Intestine-Intestine_Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Kidney-Kidney_Mesangial_Cells_Unsure.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Kidney-Kidney_Mesangial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Kidney-Kidney_Metanephric_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Kidney-Kidney_Myeloid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Kidney-Kidney_Stromal_Cells_Unsure.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Kidney-Kidney_Unknown_14.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Kidney-Kidney_Unknown_7.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Kidney-Kidney_Ureteric_Bud_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Kidney-Kidney_Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Liver-Liver_Erythroblasts.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Liver-Liver_Hematopoietic_Stem_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Liver-Liver_Hepatoblasts.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Liver-Liver_Lymphoid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Liver-Liver_Megakaryocytes.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Liver-Liver_Myeloid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Liver-Liver_Stellate_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Liver-Liver_Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Lung-Lung_Bronchiolar_And_Alveolar_Epithelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Lung-Lung_Ciliated_Epithelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Lung-Lung_Lymphatic_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Lung-Lung_Lymphoid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Lung-Lung_Megakaryocytes.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Lung-Lung_Myeloid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Lung-Lung_Neuroendocrine_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Lung-Lung_Stromal_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Lung-Lung_Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Muscle-Muscle_Lymphoid_And_Myeloid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Muscle-Muscle_Satellite_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Muscle-Muscle_Schwann_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Muscle-Muscle_Skeletal_Muscle_Cells_Unsure.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Muscle-Muscle_Skeletal_Muscle_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Muscle-Muscle_Smooth_Muscle_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Muscle-Muscle_Stromal_Cells_Unsure.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Muscle-Muscle_Stromal_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Muscle-Muscle_Unknown_7.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Muscle-Muscle_Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Pancreas-Pancreas_Acinar_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Pancreas-Pancreas_Ductal_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Pancreas-Pancreas_Islet_Endocrine_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Pancreas-Pancreas_Lymphoid_Myeloid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Pancreas-Pancreas_Pancreas_Unknown.1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Pancreas-Pancreas_Stromal_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Pancreas-Pancreas_Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Placenta_Erythroblasts.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Placenta_Extravillous_Trophoblasts.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Placenta_Igfbp1_Dkk1_Positive_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Placenta_Lymphoid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Placenta_Myeloid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Placenta_Paep_Mecom_Positive_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Placenta_Smooth_Muscle_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Placenta_Stromal_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Placenta_Syncytiotrophoblast_And_Villous_Cytotrophoblasts_Unsure.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Placenta_Syncytiotrophoblasts_And_Villous_Cytotrophoblasts.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Placenta_Trophoblast_Giant_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Placenta-Placenta_Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Spleen-Spleen_Megakaryocytes.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Spleen-Spleen_Myeloid_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Spleen-Spleen_Stromal_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Spleen-Spleen_Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Stomach-Stomach_Ens_Glia.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Stomach-Stomach_Ens_Neurons_Unsure.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Stomach-Stomach_Epithelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Stomach-Stomach_Goblet_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Stomach-Stomach_Parietal_And_Chief_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Stomach-Stomach_Stromal_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Stomach-Stomach_Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Thymus-Thymic_Epithelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Thymus-Thymocytes.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Thymus-Thymus_Antigen_Presenting_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/fetal/coaccessibility_Thymus-Vascular_Endothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Adipocyte.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Alveolar_Capillary_Endothelial_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Blood_Brain_Barrier_Endothelial_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Cardiac_Fibroblasts.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Cardiac_Pericyte_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Cardiac_Pericyte_3.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Cardiac_Pericyte_4.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Chief_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Endothelial_Cell_General_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Endothelial_Cell_General_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Endothelial_Cell_General_3.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Endothelial_Cell_Myocardial.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Enterocyte.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Fibroblast_Epithelial.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Fibroblast_General.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Fibroblast_Peripheral_Nerve.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Fibroblast_Sk_Muscle_Associated.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Foveolar_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Luteal_Cell_Ovarian.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Lymphatic_Endothelial_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Macrophage_Gen_Or_Alv.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Macrophage_General.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Mast_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Memory_B_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Mesothelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Naive_T_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Natural_Killer_T_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Nerve_Stromal.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Pericyte_General_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Pericyte_General_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Pericyte_General_3.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Pericyte_General_4.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Pericyte_Muscularis.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Plasma_B.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Schwann_Cell_General.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Smooth_Muscle_General.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Smooth_Muscle_Vaginal.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Vascular_Smooth_Muscle_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adipose_Omentum-Vascular_Smooth_Muscle_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_Gland-Cortical_Epithelial_Like.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_Gland-Endothelial_Exocrine_Tissues.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_Gland-Enteric_Neuron.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_Gland-Fasciculata.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_Gland-Fibroblast_Liver_Adrenal.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_Gland-Glomerulosa.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Adrenal_Gland-Transitional_Cortical.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Artery_Aorta-Alveolar_Type_2_AT2_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Artery_Aorta-Endocardial_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Artery_Aorta-T_Lymphocyte_1_CD8.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Artery_Aorta-T_Lymphocyte_2_CD4.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Artery_Tibial-Alveolar_Type_2_Immune.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Artery_Tibial-Smooth_Muscle_Colon_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Artery_Tibial-Smooth_Muscle_Ge_Junction.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Cerebrum-GABAergic_Neuron_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Cerebrum-GABAergic_Neuron_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Cerebrum-Glutamatergic_Neuron_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Cerebrum-Glutamatergic_Neuron_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Sigmoid-Colon_Epithelial_Cell_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Sigmoid-Fibroblast_Gastrointestinal.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Sigmoid-Melanocyte.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Sigmoid-Smooth_Muscle_Colon_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Sigmoid-Smooth_Muscle_Esophageal_Mucosal.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Sigmoid-Smooth_Muscle_Esophageal_Muscularis_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Sigmoid-Smooth_Muscle_Esophageal_Muscularis_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Sigmoid-Smooth_Muscle_General_Gastrointestinal.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Sigmoid-Smooth_Muscle_Uterine.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Transverse-Astrocyte_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Transverse-Colon_Epithelial_Cell_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Transverse-Colon_Epithelial_Cell_3.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Transverse-Colonic_Goblet_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Transverse-Enterochromaffin_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Transverse-Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Transverse-Oligodendrocyte_Precursor.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Transverse-Paneth_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Transverse-Si_Goblet.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Colon_Transverse-Tuft_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_Gejunction-Airway_Goblet_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_Gejunction-Myoepithelial_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_Mucosa-Esophageal_Epithelial_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_Mucosa-Keratinocyte_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_Mucosa-Mammary_Basal_Epi.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_Mucosa-Skin_Basal_Epidermal.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_Mucosa-Skin_Granular_Epidermal.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_Muscularis-Follicular.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_Muscularis-Satellite_Cells.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Esophagus_Muscularis-Type_I_Skeletal_Myocyte.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Heart_Lv-A_Cardiomyocyte.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Heart_Lv-Cardiac_Pericyte_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Heart_Lv-Ventricular_Cardiomyocyte.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Heartatrial_Appendage-Alveolar_Type_1_AT1_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_Cb-Acinar.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_Cb-Alpha_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_Cb-Alpha_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_Cb-Beta_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_Cb-Beta_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_Cb-Delta_Gamma.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_Cb-Gastric_Neuroendocrine.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Islet_Cb-Hepatocyte.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Lung-Cilliated_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Lung-Club_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Mammary_Tissue-Mammary_Epithelial.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Mammary_Tissue-Mammary_Luminal_Epithelial_Cell_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Mammary_Tissue-Microglia.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Mammary_Tissue-Skin_Eccrine_Epidermal.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Muscle-Type_II_Skeletal_Myocyte.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Pancreas-Ductal_Cell.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Skin_Sun_Exposed-Astrocyte_1.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Skin-Keratinocyte_2.bedpe',
      },
    },
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
        uri: 'http://screg.sdfmu.edu.cn/result/co-accessibility/adult/coaccessibility_Stomach-Parietal_Cell.bedpe',
      },
    },
  },
];
export default tracks;
