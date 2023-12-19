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
  // {
  //   type: 'VariantTrack',
  //   trackId: 'brain_track',
  //   name: 'Brain-related Trait Variants',
  //   category: ['Variants'],
  //   assemblyNames: ['hg19'],
  //   adapter: {
  //     type: 'VcfTabixAdapter',
  //     vcfGzLocation: {
  //       uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/annotation.sorted.vcf.gz',
  //       locationType: 'UriLocation',
  //     },
  //     index: {
  //       location: {
  //         uri: 'https://ngdc.cncb.ac.cn/braincatalog/file/jbrowse/annotation.sorted.vcf.gz.tbi',
  //         locationType: 'UriLocation',
  //       },
  //       indexType: 'TBI',
  //     },
  //   },
  // },
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
        uri: 'https://www.encodeproject.org/files/ENCFF303QSJ/@@download/ENCFF303QSJ.bigWig',
        locationType: 'UriLocation',
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
        uri: 'https://jbrowse.org/genomes/hg19/skbr3/reads_lr_skbr3.fa_ngmlr-0.2.3_mapped.bam.sniffles1kb_auto_l8_s5_noalt.bedpe',
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
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Adipocyte.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Alveolar_Capillary_Endothelial_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Blood_Brain_Barrier_Endothelial_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Cardiac_Fibroblasts.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Cardiac_Pericyte_2.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Cardiac_Pericyte_3.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Cardiac_Pericyte_4.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Chief_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Ductal_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Endothelial_Cell_General_1.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Endothelial_Cell_General_2.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Endothelial_Cell_General_3.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Endothelial_Cell_Myocardial.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Enterocyte.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Fibroblast_Epithelial.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Fibroblast_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Fibroblast_Sk_Muscle_Associated.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Fibroblast_Peripheral_Nerve.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Foveolar_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Luteal_Cell_Ovarian.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Lymphatic_Endothelial_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Macrophage_Gen_Or_Alv.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Macrophage_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Mast_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Memory_B_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Mesothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Naive_T_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Natural_Killer_T_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Nerve_Stromal.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Pericyte_General_1.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Pericyte_General_2.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Pericyte_General_3.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Pericyte_General_4.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Pericyte_Muscularis.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Plasma_B.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Schwann_Cell_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Smooth_Muscle_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Smooth_Muscle_Vaginal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adipose_Omentum__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adipose_Omentum'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_T_Lymphocyte_2_CD4+.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Vascular_Smooth_Muscle_1.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adipose_Omentum_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Adipocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Cardiac_Pericyte_4.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Cortical_Epithelial_Like.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Endothelial_Exocrine_Tissues.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Endothelial_Cell_General_1.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Enteric_Neuron.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Fasciculata.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Fibroblast_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Fibroblast_Liver_Adrenal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Fibroblast_Peripheral_Nerve.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Glomerulosa.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_T_Lymphocyte_1_CD8+.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Transitional_Cortical.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Adrenal_Gland__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Adrenal_Gland'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Adrenal_Gland_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Adipocyte.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Alveolar_Type_2_AT2_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Blood_Brain_Barrier_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Cardiac_Pericyte_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Chief_Cell',
    name: 'Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Chief_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Endocardial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Enteric_Neuron',
    name: 'Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Enteric_Neuron.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Fibroblast_Peripheral_Nerve.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Mesothelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Nerve_Stromal',
    name: 'Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Nerve_Stromal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Aorta__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Aorta'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Aorta_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Adipocyte.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Alveolar_Type_2_Immune.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Cardiac_Pericyte_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Ductal_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Schwann_Cell_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Smooth_Muscle_Colon_2.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Smooth_Muscle_Ge_Junction.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Artery_Tibial__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Artery_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Artery_Tibial_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Adipocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Cardiac_Pericyte_3.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Colon_Epithelial_Cell_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Enteric_Neuron',
    name: 'Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Enteric_Neuron.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Fibroblast_Epithelial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Fibroblast_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Fibroblast_Gastrointestinal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Fibroblast_Peripheral_Nerve.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Mast_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Melanocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Mesothelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Schwann_Cell_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Smooth_Muscle_Colon_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Smooth_Muscle_Colon_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Smooth_Muscle_Ge_Junction.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Smooth_Muscle_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Smooth_Muscle_General_Gastrointestinal.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Smooth_Muscle_Esophageal_Mucosal.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Smooth_Muscle_Esophageal_Muscularis_1.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Smooth_Muscle_Esophageal_Muscularis_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Smooth_Muscle_Uterine.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Smooth_Muscle_Vaginal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Sigmoid__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Sigmoid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Sigmoid_Vascular_Smooth_Muscle_2.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Astrocyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Colon_Transverse__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Blood_Brain_Barrier_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Colon_Epithelial_Cell_1',
    name: 'Colon_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Colon_Epithelial_Cell_1.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Colon_Epithelial_Cell_2.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Colon_Epithelial_Cell_3.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Colonic_Goblet_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Ductal_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Enteric_Neuron',
    name: 'Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Enteric_Neuron.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Enterochromaffin_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Enterocyte',
    name: 'Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Enterocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Fibroblast_Gastrointestinal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Fibroblast_Sk_Muscle_Associated.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Macrophage_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Mesothelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Natural_Killer_T_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Oligodendrocyte_Precursor.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Paneth_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Schwann_Cell_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Si_Goblet.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Smooth_Muscle_Colon_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Smooth_Muscle_Colon_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Smooth_Muscle_Ge_Junction.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Colon_Transverse__Smooth_Muscle_General_Gastrointestinal',
    name: 'Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Smooth_Muscle_General_Gastrointestinal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Smooth_Muscle_Esophageal_Mucosal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Colon_Transverse__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Smooth_Muscle_Esophageal_Muscularis_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Colon_Transverse__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Smooth_Muscle_Esophageal_Muscularis_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Colon_Transverse__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Smooth_Muscle_Uterine.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Smooth_Muscle_Vaginal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_T_Lymphocyte_2_CD4+.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Tuft_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Colon_Transverse__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Colon_Transverse'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Colon_Transverse_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Adipocyte.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Airway_Goblet_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Cardiac_Pericyte_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Fibroblast_Epithelial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Fibroblast_Gastrointestinal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Fibroblast_Sk_Muscle_Associated.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Fibroblast_Peripheral_Nerve.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Gejunction__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Mesothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Myoepithelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Nerve_Stromal',
    name: 'Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Nerve_Stromal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Smooth_Muscle_Colon_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Smooth_Muscle_Colon_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Smooth_Muscle_Ge_Junction.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Gejunction__Smooth_Muscle_General_Gastrointestinal',
    name: 'Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Smooth_Muscle_General_Gastrointestinal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Gejunction__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Smooth_Muscle_Esophageal_Mucosal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Gejunction__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Smooth_Muscle_Esophageal_Muscularis_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Gejunction__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Smooth_Muscle_Esophageal_Muscularis_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Gejunction__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Smooth_Muscle_Uterine.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Smooth_Muscle_Vaginal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Gejunction__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Gejunction_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Airway_Goblet_Cell',
    name: 'Airway_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Airway_Goblet_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Chief_Cell',
    name: 'Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Chief_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Endothelial_Cell_Myocardial.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Esophageal_Epithelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Fibroblast_Epithelial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Fibroblast_Liver_Adrenal',
    name: 'Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Fibroblast_Liver_Adrenal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Fibroblast_Peripheral_Nerve.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Keratinocyte_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Macrophage_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Mammary_Basal_Epi.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Myoepithelial_Cells',
    name: 'Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Myoepithelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Nerve_Stromal',
    name: 'Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Nerve_Stromal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Schwann_Cell_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Skin_Basal_Epidermal.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Skin_Granular_Epidermal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Smooth_Muscle_Ge_Junction.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Smooth_Muscle_Esophageal_Mucosal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Mucosa__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Smooth_Muscle_Esophageal_Muscularis_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Mucosa__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Smooth_Muscle_Vaginal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Mucosa__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Mucosa_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Muscularis__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Alveolar_Capillary_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Enterocyte',
    name: 'Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Enterocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Fibroblast_Gastrointestinal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Fibroblast_Sk_Muscle_Associated.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Fibroblast_Peripheral_Nerve.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Follicular.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Foveolar_Cell',
    name: 'Foveolar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Foveolar_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Mesothelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Nerve_Stromal',
    name: 'Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Nerve_Stromal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Plasma_B.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Satellite_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Smooth_Muscle_Colon_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Smooth_Muscle_Colon_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Smooth_Muscle_Ge_Junction.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Muscularis__Smooth_Muscle_General_Gastrointestinal',
    name: 'Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Smooth_Muscle_General_Gastrointestinal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Muscularis__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Smooth_Muscle_Esophageal_Mucosal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Muscularis__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Smooth_Muscle_Esophageal_Muscularis_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Muscularis__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Smooth_Muscle_Esophageal_Muscularis_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Esophagus_Muscularis__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Smooth_Muscle_Uterine.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Smooth_Muscle_Vaginal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_T_Lymphocyte_2_CD4+.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Type_I_Skeletal_Myocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Esophagus_Muscularis__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Esophagus_Muscularis_Vascular_Smooth_Muscle_2.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_A_Cardiomyocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Adipocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Alveolar_Capillary_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Blood_Brain_Barrier_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Cardiac_Fibroblasts.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Cardiac_Pericyte_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Cardiac_Pericyte_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Ductal_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Endocardial_Cell',
    name: 'Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Endocardial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Nerve_Stromal',
    name: 'Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Nerve_Stromal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heart_Lv__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heart_Lv'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Vascular_Smooth_Muscle_2.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heart_Lv_Ventricular_Cardiomyocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__A_Cardiomyocyte',
    name: 'A_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_A_Cardiomyocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Adipocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Heartatrial_Appendage__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Alveolar_Capillary_Endothelial_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Alveolar_Type_1_AT1_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Heartatrial_Appendage__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Blood_Brain_Barrier_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Cardiac_Pericyte_1',
    name: 'Cardiac_Pericyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Cardiac_Pericyte_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Cardiac_Pericyte_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Ductal_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Endocardial_Cell',
    name: 'Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Endocardial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Endothelial_Exocrine_Tissues',
    name: 'Endothelial_Exocrine_Tissues',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Endothelial_Exocrine_Tissues.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Follicular',
    name: 'Follicular',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Follicular.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Mesothelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Heartatrial_Appendage__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Smooth_Muscle_Esophageal_Muscularis_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Heartatrial_Appendage__Ventricular_Cardiomyocyte',
    name: 'Ventricular_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Heartatrial_Appendage_Ventricular_Cardiomyocyte.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Acinar.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Alpha_1.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Alpha_2.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Beta_1.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Beta_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Cardiac_Fibroblasts.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Delta_Gamma.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Ductal_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Fibroblast_General.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Gastric_Neuroendocrine.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Hepatocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Mesothelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Islet_Cb__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Islet_Cb'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Islet_Cb_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Cardiac_Pericyte_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Ductal_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Endocardial_Cell',
    name: 'Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Endocardial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Endothelial_Exocrine_Tissues',
    name: 'Endothelial_Exocrine_Tissues',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Endothelial_Exocrine_Tissues.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Fibroblast_Liver_Adrenal',
    name: 'Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Fibroblast_Liver_Adrenal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Hepatocyte',
    name: 'Hepatocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Hepatocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Liver__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Liver'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Liver_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Alveolar_Capillary_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Alveolar_Type_1_AT1_Cell',
    name: 'Alveolar_Type_1_AT1_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Alveolar_Type_1_AT1_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Alveolar_Type_2_AT2_Cell',
    name: 'Alveolar_Type_2_AT2_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Alveolar_Type_2_AT2_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Alveolar_Type_2_Immune',
    name: 'Alveolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Alveolar_Type_2_Immune.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Chief_Cell',
    name: 'Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Chief_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Cilliated_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Club_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Ductal_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Enterocyte',
    name: 'Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Enterocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Esophageal_Epithelial_Cell',
    name: 'Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Esophageal_Epithelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Gastric_Neuroendocrine',
    name: 'Gastric_Neuroendocrine',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Gastric_Neuroendocrine.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Smooth_Muscle_Esophageal_Mucosal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Lung__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Lung'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Lung_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Adipocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Fibroblast_Epithelial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Fibroblast_Sk_Muscle_Associated.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Fibroblast_Peripheral_Nerve.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Mammary_Basal_Epi',
    name: 'Mammary_Basal_Epi',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Mammary_Basal_Epi.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Mammary_Epithelial.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Mammary_Luminal_Epithelial_Cell_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Mast_Cell.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Microglia.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Myoepithelial_Cells',
    name: 'Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Myoepithelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Skin_Basal_Epidermal',
    name: 'Skin_Basal_Epidermal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Skin_Basal_Epidermal.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Skin_Eccrine_Epidermal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Skin_Granular_Epidermal',
    name: 'Skin_Granular_Epidermal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Skin_Granular_Epidermal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Smooth_Muscle_Colon_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Mammary_Tissue__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Mammary_Tissue'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Mammary_Tissue_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Adipocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Blood_Brain_Barrier_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Cardiac_Pericyte_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Ductal_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Endocardial_Cell',
    name: 'Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Endocardial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Enteric_Neuron',
    name: 'Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Enteric_Neuron.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Fibroblast_Epithelial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Fibroblast_Sk_Muscle_Associated.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Fibroblast_Peripheral_Nerve.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Nerve_Stromal',
    name: 'Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Nerve_Stromal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Satellite_Cells',
    name: 'Satellite_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Satellite_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Type_I_Skeletal_Myocyte',
    name: 'Type_I_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Type_I_Skeletal_Myocyte.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Type_II_Skeletal_Myocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Muscle__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Muscle'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Muscle_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Adipocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Alveolar_Type_2_Immune',
    name: 'Alveolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Alveolar_Type_2_Immune.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Blood_Brain_Barrier_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Cardiac_Pericyte_1',
    name: 'Cardiac_Pericyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Cardiac_Pericyte_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Enteric_Neuron',
    name: 'Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Enteric_Neuron.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Fibroblast_Epithelial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Fibroblast_Sk_Muscle_Associated.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Fibroblast_Peripheral_Nerve.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Keratinocyte_1',
    name: 'Keratinocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Keratinocyte_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Microglia',
    name: 'Microglia',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Microglia.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Nerve_Stromal',
    name: 'Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Nerve_Stromal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Nerve_Tibial__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Nerve_Tibial'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Nerve_Tibial_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Alveolar_Type_2_Immune',
    name: 'Alveolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Alveolar_Type_2_Immune.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Blood_Brain_Barrier_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Cardiac_Pericyte_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Club_Cell',
    name: 'Club_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Club_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Ductal_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Enteric_Neuron',
    name: 'Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Enteric_Neuron.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Mesothelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Smooth_Muscle_Colon_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Smooth_Muscle_Ge_Junction.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Smooth_Muscle_Esophageal_Mucosal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Smooth_Muscle_Esophageal_Muscularis_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Smooth_Muscle_Uterine.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Smooth_Muscle_Vaginal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Ovary__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Ovary'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Ovary_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Acinar',
    name: 'Acinar',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Acinar.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Adipocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Alpha_1',
    name: 'Alpha_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Alpha_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Alpha_2',
    name: 'Alpha_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Alpha_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Alveolar_Capillary_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Blood_Brain_Barrier_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Beta_1',
    name: 'Beta_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Beta_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Beta_2',
    name: 'Beta_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Beta_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Delta_Gamma',
    name: 'Delta_Gamma',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Delta_Gamma.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Ductal_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Enteric_Neuron',
    name: 'Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Enteric_Neuron.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Fibroblast_Epithelial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Fibroblast_Liver_Adrenal',
    name: 'Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Fibroblast_Liver_Adrenal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Fibroblast_Peripheral_Nerve.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Hepatocyte',
    name: 'Hepatocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Hepatocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Mesothelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Smooth_Muscle_Colon_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Pancreas__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Pancreas'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Pancreas_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Adipocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Esophageal_Epithelial_Cell',
    name: 'Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Esophageal_Epithelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Fibroblast_Epithelial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Fibroblast_Peripheral_Nerve.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Keratinocyte_1',
    name: 'Keratinocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Keratinocyte_1.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Keratinocyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Mammary_Basal_Epi',
    name: 'Mammary_Basal_Epi',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Mammary_Basal_Epi.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Mammary_Luminal_Epithelial_Cell_1',
    name: 'Mammary_Luminal_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Mammary_Luminal_Epithelial_Cell_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Melanocyte',
    name: 'Melanocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Melanocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Mesothelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Myoepithelial_Cells',
    name: 'Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Myoepithelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Nerve_Stromal',
    name: 'Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Nerve_Stromal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Skin_Basal_Epidermal',
    name: 'Skin_Basal_Epidermal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Skin_Basal_Epidermal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Skin_Eccrine_Epidermal',
    name: 'Skin_Eccrine_Epidermal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Skin_Eccrine_Epidermal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Skin_Granular_Epidermal',
    name: 'Skin_Granular_Epidermal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Skin_Granular_Epidermal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Adipocyte.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Astrocyte_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Esophageal_Epithelial_Cell',
    name: 'Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Esophageal_Epithelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Fibroblast_Epithelial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Fibroblast_Sk_Muscle_Associated.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Fibroblast_Peripheral_Nerve.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Gastric_Neuroendocrine',
    name: 'Gastric_Neuroendocrine',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Gastric_Neuroendocrine.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Keratinocyte_1',
    name: 'Keratinocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Keratinocyte_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Keratinocyte_2',
    name: 'Keratinocyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Keratinocyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Mammary_Basal_Epi',
    name: 'Mammary_Basal_Epi',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Mammary_Basal_Epi.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Mammary_Epithelial',
    name: 'Mammary_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Mammary_Epithelial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Mammary_Luminal_Epithelial_Cell_1',
    name: 'Mammary_Luminal_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Mammary_Luminal_Epithelial_Cell_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Melanocyte',
    name: 'Melanocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Melanocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Myoepithelial_Cells',
    name: 'Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Myoepithelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Nerve_Stromal',
    name: 'Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Nerve_Stromal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Skin_Basal_Epidermal',
    name: 'Skin_Basal_Epidermal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Skin_Basal_Epidermal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Skin_Eccrine_Epidermal',
    name: 'Skin_Eccrine_Epidermal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Skin_Eccrine_Epidermal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Skin_Granular_Epidermal',
    name: 'Skin_Granular_Epidermal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Skin_Granular_Epidermal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Smooth_Muscle_Esophageal_Mucosal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Skin_Sun_Exposed__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Skin_Sun_Exposed_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Adipocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Colon_Epithelial_Cell_2',
    name: 'Colon_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Colon_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Colon_Epithelial_Cell_3',
    name: 'Colon_Epithelial_Cell_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Colon_Epithelial_Cell_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Colonic_Goblet_Cell',
    name: 'Colonic_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Colonic_Goblet_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Delta_Gamma',
    name: 'Delta_Gamma',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Delta_Gamma.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Enteric_Neuron',
    name: 'Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Enteric_Neuron.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Enterochromaffin_Cell',
    name: 'Enterochromaffin_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Enterochromaffin_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Enterocyte',
    name: 'Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Enterocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Esophageal_Epithelial_Cell',
    name: 'Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Esophageal_Epithelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Paneth_Cell',
    name: 'Paneth_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Paneth_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Si_Goblet',
    name: 'Si_Goblet',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Si_Goblet.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Smooth_Muscle_Colon_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Smooth_Muscle_Colon_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Smooth_Muscle_Ge_Junction.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Smooth_Muscle_Esophageal_Mucosal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'Adult_abc__Small_Intestine__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Smooth_Muscle_Uterine.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Tuft_Cell',
    name: 'Tuft_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Tuft_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Small_Intestine__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Small_Intestine'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Small_Intestine_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Adipocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Alveolar_Capillary_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Alveolar_Type_2_Immune',
    name: 'Alveolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Alveolar_Type_2_Immune.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Chief_Cell',
    name: 'Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Chief_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Delta_Gamma',
    name: 'Delta_Gamma',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Delta_Gamma.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Ductal_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Enterochromaffin_Cell',
    name: 'Enterochromaffin_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Enterochromaffin_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Enterocyte',
    name: 'Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Enterocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Fibroblast_Epithelial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Fibroblast_Gastrointestinal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Fibroblast_Liver_Adrenal',
    name: 'Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Fibroblast_Liver_Adrenal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Fibroblast_Peripheral_Nerve.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Foveolar_Cell',
    name: 'Foveolar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Foveolar_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Gastric_Neuroendocrine',
    name: 'Gastric_Neuroendocrine',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Gastric_Neuroendocrine.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Mesothelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Nerve_Stromal',
    name: 'Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Nerve_Stromal.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Parietal_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Smooth_Muscle_Colon_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Smooth_Muscle_Colon_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Smooth_Muscle_Ge_Junction.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Smooth_Muscle_General_Gastrointestinal',
    name: 'Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Smooth_Muscle_General_Gastrointestinal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Smooth_Muscle_Esophageal_Mucosal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Smooth_Muscle_Esophageal_Muscularis_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Smooth_Muscle_Esophageal_Muscularis_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Smooth_Muscle_Uterine.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Type_II_Skeletal_Myocyte',
    name: 'Type_II_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Type_II_Skeletal_Myocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Stomach__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Stomach'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Stomach_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Adipocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Alveolar_Capillary_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Cardiac_Pericyte_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Follicular',
    name: 'Follicular',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Follicular.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Plasma_B',
    name: 'Plasma_B',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Plasma_B.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Thyroid__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Thyroid'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Thyroid_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Blood_Brain_Barrier_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Cardiac_Pericyte_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Ductal_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Enteric_Neuron',
    name: 'Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Enteric_Neuron.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Fibroblast_Epithelial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Fibroblast_Gastrointestinal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Pericyte_General_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Smooth_Muscle_Colon_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Smooth_Muscle_Colon_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Smooth_Muscle_Ge_Junction.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Smooth_Muscle_Esophageal_Mucosal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Smooth_Muscle_Esophageal_Muscularis_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Smooth_Muscle_Esophageal_Muscularis_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Smooth_Muscle_Uterine.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Smooth_Muscle_Vaginal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Uterus__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Uterus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Uterus_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Adipocyte.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Alveolar_Capillary_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Cardiac_Fibroblasts.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Cardiac_Pericyte_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Cardiac_Pericyte_4.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Endothelial_Cell_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Endothelial_Cell_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Endothelial_Cell_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Endothelial_Cell_Myocardial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Fibroblast_Epithelial.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Fibroblast_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Fibroblast_Gastrointestinal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Fibroblast_Peripheral_Nerve.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Luteal_Cell_Ovarian.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Lymphatic_Endothelial_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Macrophage_Gen_Or_Alv',
    name: 'Macrophage_Gen_Or_Alv',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Macrophage_Gen_Or_Alv.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Macrophage_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Mammary_Luminal_Epithelial_Cell_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Mast_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Memory_B_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Mesothelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Naive_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Natural_Killer_T_Cell.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Nerve_Stromal',
    name: 'Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Nerve_Stromal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Pericyte_General_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Pericyte_General_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Pericyte_General_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Pericyte_Muscularis',
    name: 'Pericyte_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Pericyte_Muscularis.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Schwann_Cell_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Smooth_Muscle_Colon_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Smooth_Muscle_Colon_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Smooth_Muscle_General.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Smooth_Muscle_Esophageal_Mucosal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Smooth_Muscle_Esophageal_Muscularis_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Smooth_Muscle_Esophageal_Muscularis_2.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Smooth_Muscle_Esophageal_Muscularis_3.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Smooth_Muscle_Uterine.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Smooth_Muscle_Vaginal.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_T_Lymphocyte_1_CD8+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_T_Lymphocyte_2_CD4+.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Vascular_Smooth_Muscle_1.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Adult_abc__Vagina__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_abc', 'Vagina'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Adult_abc_Vagina_Vascular_Smooth_Muscle_2.bedpe',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Adipose_Omentum__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Adipose_Omentum__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Chief_Cell',
    name: 'Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Chief_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Foveolar_Cell',
    name: 'Foveolar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Foveolar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Pancreatic_Acinar_Cell',
    name: 'Pancreatic_Acinar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Pancreatic_Acinar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Peripheral_Nerve_Stromal',
    name: 'Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Small_Intestinal_Enterocyte',
    name: 'Small_Intestinal_Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Small_Intestinal_Enterocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Adipose_Omentum__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adipose_Omentum__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adipose_Omentum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adipose_Omentum_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__CNS_Enteric_Neuron',
    name: 'CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Cortical_Epithelial_Like',
    name: 'Cortical_Epithelial_Like',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Cortical_Epithelial_Like.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Endothelial_Exocrine_Tissues',
    name: 'Endothelial_Exocrine_Tissues',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Endothelial_Exocrine_Tissues.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Fibroblast_Liver_Adrenal',
    name: 'Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Fibroblast_Liver_Adrenal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Transitional_Zone_Cortical_Cell',
    name: 'Transitional_Zone_Cortical_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Transitional_Zone_Cortical_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Zona_Fasciculata_Cortical_Cell',
    name: 'Zona_Fasciculata_Cortical_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Zona_Fasciculata_Cortical_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Adrenal_Gland__Zona_Glomerulosa_Cortical_Cell',
    name: 'Zona_Glomerulosa_Cortical_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Adrenal_Gland_Zona_Glomerulosa_Cortical_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Alveolar_Type_2_AT2_Cell',
    name: 'Alveolar_Type_2_AT2_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Alveolar_Type_2_AT2_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Chief_Cell',
    name: 'Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Chief_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__CNS_Enteric_Neuron',
    name: 'CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Endocardial_Cell',
    name: 'Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Endocardial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Pancreatic_Acinar_Cell',
    name: 'Pancreatic_Acinar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Pancreatic_Acinar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Peripheral_Nerve_Stromal',
    name: 'Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Aorta__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Aorta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Aorta_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Alverolar_Type_2_Immune',
    name: 'Alverolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Alverolar_Type_2_Immune.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Artery_Tibial__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Smooth_Muscle_Ge_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Artery_Tibial__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Artery_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Artery_Tibial_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Cerebrum__GABAergic_Neuron_1',
    name: 'GABAergic_Neuron_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Cerebrum_GABAergic_Neuron_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Cerebrum__GABAergic_Neuron_2',
    name: 'GABAergic_Neuron_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Cerebrum_GABAergic_Neuron_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Cerebrum__Glutamatergic_Neuron_1',
    name: 'Glutamatergic_Neuron_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Cerebrum_Glutamatergic_Neuron_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Cerebrum__Glutamatergic_Neuron_2',
    name: 'Glutamatergic_Neuron_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Cerebrum_Glutamatergic_Neuron_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__CNS_Enteric_Neuron',
    name: 'CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Colon_Epithelial_Cell_1',
    name: 'Colon_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Colon_Epithelial_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Melanocyte',
    name: 'Melanocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Melanocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Sigmoid__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Sigmoid__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Sigmoid__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Smooth_Muscle_Ge_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Sigmoid__Smooth_Muscle_General_Gastrointestinal',
    name: 'Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Smooth_Muscle_General_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Sigmoid__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Sigmoid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Sigmoid_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Astrocyte_2',
    name: 'Astrocyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Astrocyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__CNS_Enteric_Neuron',
    name: 'CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Colon_Epithelial_Cell_1',
    name: 'Colon_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Colon_Epithelial_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Colon_Epithelial_Cell_2',
    name: 'Colon_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Colon_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Colon_Epithelial_Cell_3',
    name: 'Colon_Epithelial_Cell_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Colon_Epithelial_Cell_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Colonic_Goblet_Cell',
    name: 'Colonic_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Colonic_Goblet_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Enterochromaffin_Cell',
    name: 'Enterochromaffin_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Enterochromaffin_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Oligodendrocyte_Precursor',
    name: 'Oligodendrocyte_Precursor',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Oligodendrocyte_Precursor.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Paneth_Cell',
    name: 'Paneth_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Paneth_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Small_Intestinal_Enterocyte',
    name: 'Small_Intestinal_Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Small_Intestinal_Enterocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Small_Intestinal_Goblet_Cell',
    name: 'Small_Intestinal_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Small_Intestinal_Goblet_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Smooth_Muscle_Ge_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Colon_Transverse__Smooth_Muscle_General_Gastrointestinal',
    name: 'Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Smooth_Muscle_General_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Tuft_Cell',
    name: 'Tuft_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Tuft_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Colon_Transverse__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Colon_Transverse'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Colon_Transverse_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Airway_Goblet_Cell',
    name: 'Airway_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Airway_Goblet_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Myoepithelial_Cells',
    name: 'Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Myoepithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Peripheral_Nerve_Stromal',
    name: 'Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Smooth_Muscle_Ge_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Gejunction__Smooth_Muscle_General_Gastrointestinal',
    name: 'Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Smooth_Muscle_General_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Gejunction__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Gejunction'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Gejunction_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Airway_Goblet_Cell',
    name: 'Airway_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Airway_Goblet_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Basal_Epidermal_Skin',
    name: 'Basal_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Basal_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Basal_Epithelial_Mammary',
    name: 'Basal_Epithelial_Mammary',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Basal_Epithelial_Mammary.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Chief_Cell',
    name: 'Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Chief_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Esophageal_Epithelial_Cell',
    name: 'Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Esophageal_Epithelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Fibroblast_Liver_Adrenal',
    name: 'Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Fibroblast_Liver_Adrenal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Granular_Epidermal_Skin',
    name: 'Granular_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Granular_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Keratinocyte_1',
    name: 'Keratinocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Keratinocyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Mucosa__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Myoepithelial_Cells',
    name: 'Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Myoepithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Peripheral_Nerve_Stromal',
    name: 'Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Mucosa__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Mucosa__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Smooth_Muscle_Ge_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Mucosa__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Mucosa'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Mucosa_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Foveolar_Cell',
    name: 'Foveolar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Foveolar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Pancreatic_Acinar_Cell',
    name: 'Pancreatic_Acinar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Pancreatic_Acinar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Peripheral_Nerve_Stromal',
    name: 'Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Satellite_Cells',
    name: 'Satellite_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Satellite_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Small_Intestinal_Enterocyte',
    name: 'Small_Intestinal_Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Small_Intestinal_Enterocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Smooth_Muscle_Ge_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Esophagus_Muscularis__Smooth_Muscle_General_Gastrointestinal',
    name: 'Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Smooth_Muscle_General_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Thyroid_Follicular_Cell',
    name: 'Thyroid_Follicular_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Thyroid_Follicular_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Type_I_Skeletal_Myocyte',
    name: 'Type_I_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Type_I_Skeletal_Myocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Esophagus_Muscularis__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Esophagus_Muscularis'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Esophagus_Muscularis_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Atrial_Cardiomyocyte',
    name: 'Atrial_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Atrial_Cardiomyocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Cardiac_Pericyte_1',
    name: 'Cardiac_Pericyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Cardiac_Pericyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Endocardial_Cell',
    name: 'Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Endocardial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Peripheral_Nerve_Stromal',
    name: 'Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heart_Lv__Ventricular_Cardiomyocyte',
    name: 'Ventricular_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heart_Lv'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heart_Lv_Ventricular_Cardiomyocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Alveolar_Type_1_AT1_Cell',
    name: 'Alveolar_Type_1_AT1_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Alveolar_Type_1_AT1_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Atrial_Cardiomyocyte',
    name: 'Atrial_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Atrial_Cardiomyocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Cardiac_Pericyte_1',
    name: 'Cardiac_Pericyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Cardiac_Pericyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Endocardial_Cell',
    name: 'Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Endocardial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__Endothelial_Exocrine_Tissues',
    name: 'Endothelial_Exocrine_Tissues',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Endothelial_Exocrine_Tissues.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Heartatrial_Appendage__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Thyroid_Follicular_Cell',
    name: 'Thyroid_Follicular_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Thyroid_Follicular_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Heartatrial_Appendage__Ventricular_Cardiomyocyte',
    name: 'Ventricular_Cardiomyocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Heartatrial_Appendage'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Heartatrial_Appendage_Ventricular_Cardiomyocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Gastric_Neuroendocrine_Cell',
    name: 'Gastric_Neuroendocrine_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Gastric_Neuroendocrine_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Hepatocyte',
    name: 'Hepatocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Hepatocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Pancreatic_Acinar_Cell',
    name: 'Pancreatic_Acinar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Pancreatic_Acinar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Pancreatic_Alpha_Cell_1',
    name: 'Pancreatic_Alpha_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Pancreatic_Alpha_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Pancreatic_Alpha_Cell_2',
    name: 'Pancreatic_Alpha_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Pancreatic_Alpha_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Pancreatic_Beta_Cell_1',
    name: 'Pancreatic_Beta_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Pancreatic_Beta_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Pancreatic_Beta_Cell_2',
    name: 'Pancreatic_Beta_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Pancreatic_Beta_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Pancreatic_Delta_Gamma_Cell',
    name: 'Pancreatic_Delta_Gamma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Pancreatic_Delta_Gamma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Islet_Cb__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Islet_Cb'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Islet_Cb_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Endocardial_Cell',
    name: 'Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Endocardial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Endothelial_Exocrine_Tissues',
    name: 'Endothelial_Exocrine_Tissues',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Endothelial_Exocrine_Tissues.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Fibroblast_Liver_Adrenal',
    name: 'Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Fibroblast_Liver_Adrenal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Hepatocyte',
    name: 'Hepatocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Hepatocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Liver__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Liver_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Alveolar_Type_1_AT1_Cell',
    name: 'Alveolar_Type_1_AT1_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Alveolar_Type_1_AT1_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Alveolar_Type_2_AT2_Cell',
    name: 'Alveolar_Type_2_AT2_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Alveolar_Type_2_AT2_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Alverolar_Type_2_Immune',
    name: 'Alverolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Alverolar_Type_2_Immune.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Chief_Cell',
    name: 'Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Chief_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Cilliated_Cell',
    name: 'Cilliated_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Cilliated_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Club_Cell',
    name: 'Club_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Club_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Esophageal_Epithelial_Cell',
    name: 'Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Esophageal_Epithelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Gastric_Neuroendocrine_Cell',
    name: 'Gastric_Neuroendocrine_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Gastric_Neuroendocrine_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Small_Intestinal_Enterocyte',
    name: 'Small_Intestinal_Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Small_Intestinal_Enterocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Lung__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Lung_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Basal_Epidermal_Skin',
    name: 'Basal_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Basal_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Basal_Epithelial_Mammary',
    name: 'Basal_Epithelial_Mammary',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Basal_Epithelial_Mammary.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Eccrine_Epidermal_Skin',
    name: 'Eccrine_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Eccrine_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Granular_Epidermal_Skin',
    name: 'Granular_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Granular_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Mammary_Epithelial',
    name: 'Mammary_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Mammary_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Mammary_Luminal_Epithelial_Cell_1',
    name: 'Mammary_Luminal_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Mammary_Luminal_Epithelial_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Microglia',
    name: 'Microglia',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Microglia.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Myoepithelial_Cells',
    name: 'Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Myoepithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Mammary_Tissue__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Mammary_Tissue'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Mammary_Tissue_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__CNS_Enteric_Neuron',
    name: 'CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Endocardial_Cell',
    name: 'Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Endocardial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Peripheral_Nerve_Stromal',
    name: 'Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Satellite_Cells',
    name: 'Satellite_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Satellite_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Type_I_Skeletal_Myocyte',
    name: 'Type_I_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Type_I_Skeletal_Myocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Type_II_Skeletal_Myocyte',
    name: 'Type_II_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Type_II_Skeletal_Myocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Muscle__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Muscle_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Alverolar_Type_2_Immune',
    name: 'Alverolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Alverolar_Type_2_Immune.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Cardiac_Pericyte_1',
    name: 'Cardiac_Pericyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Cardiac_Pericyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__CNS_Enteric_Neuron',
    name: 'CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Keratinocyte_1',
    name: 'Keratinocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Keratinocyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Microglia',
    name: 'Microglia',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Microglia.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Peripheral_Nerve_Stromal',
    name: 'Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Nerve_Tibial__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Nerve_Tibial__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Nerve_Tibial'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Nerve_Tibial_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Alverolar_Type_2_Immune',
    name: 'Alverolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Alverolar_Type_2_Immune.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Club_Cell',
    name: 'Club_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Club_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__CNS_Enteric_Neuron',
    name: 'CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Smooth_Muscle_Ge_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Ovary__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Ovary'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Ovary_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__CNS_Enteric_Neuron',
    name: 'CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Fibroblast_Liver_Adrenal',
    name: 'Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Fibroblast_Liver_Adrenal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Hepatocyte',
    name: 'Hepatocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Hepatocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Pancreatic_Acinar_Cell',
    name: 'Pancreatic_Acinar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Pancreatic_Acinar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Pancreatic_Alpha_Cell_1',
    name: 'Pancreatic_Alpha_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Pancreatic_Alpha_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Pancreatic_Alpha_Cell_2',
    name: 'Pancreatic_Alpha_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Pancreatic_Alpha_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Pancreatic_Beta_Cell_1',
    name: 'Pancreatic_Beta_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Pancreatic_Beta_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Pancreatic_Beta_Cell_2',
    name: 'Pancreatic_Beta_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Pancreatic_Beta_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Pancreatic_Delta_Gamma_Cell',
    name: 'Pancreatic_Delta_Gamma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Pancreatic_Delta_Gamma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Pancreas__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Pancreas_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Basal_Epidermal_Skin',
    name: 'Basal_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Basal_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Basal_Epithelial_Mammary',
    name: 'Basal_Epithelial_Mammary',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Basal_Epithelial_Mammary.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Eccrine_Epidermal_Skin',
    name: 'Eccrine_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Eccrine_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Esophageal_Epithelial_Cell',
    name: 'Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Esophageal_Epithelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Granular_Epidermal_Skin',
    name: 'Granular_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Granular_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Keratinocyte_1',
    name: 'Keratinocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Keratinocyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Keratinocyte_2',
    name: 'Keratinocyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Keratinocyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Mammary_Luminal_Epithelial_Cell_1',
    name: 'Mammary_Luminal_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Mammary_Luminal_Epithelial_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Melanocyte',
    name: 'Melanocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Melanocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Myoepithelial_Cells',
    name: 'Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Myoepithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Peripheral_Nerve_Stromal',
    name: 'Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Astrocyte_1',
    name: 'Astrocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Astrocyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Basal_Epidermal_Skin',
    name: 'Basal_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Basal_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Basal_Epithelial_Mammary',
    name: 'Basal_Epithelial_Mammary',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Basal_Epithelial_Mammary.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Eccrine_Epidermal_Skin',
    name: 'Eccrine_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Eccrine_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Esophageal_Epithelial_Cell',
    name: 'Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Esophageal_Epithelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Fibroblast_Sk_Muscle_Associated',
    name: 'Fibroblast_Sk_Muscle_Associated',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Fibroblast_Sk_Muscle_Associated.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Gastric_Neuroendocrine_Cell',
    name: 'Gastric_Neuroendocrine_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Gastric_Neuroendocrine_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Granular_Epidermal_Skin',
    name: 'Granular_Epidermal_Skin',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Granular_Epidermal_Skin.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Keratinocyte_1',
    name: 'Keratinocyte_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Keratinocyte_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Keratinocyte_2',
    name: 'Keratinocyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Keratinocyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Mammary_Epithelial',
    name: 'Mammary_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Mammary_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Skin_Sun_Exposed__Mammary_Luminal_Epithelial_Cell_1',
    name: 'Mammary_Luminal_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Mammary_Luminal_Epithelial_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Skin_Sun_Exposed__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Melanocyte',
    name: 'Melanocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Melanocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Myoepithelial_Cells',
    name: 'Myoepithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Myoepithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Peripheral_Nerve_Stromal',
    name: 'Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Skin_Sun_Exposed__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Skin_Sun_Exposed'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Skin_Sun_Exposed_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__CNS_Enteric_Neuron',
    name: 'CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Colon_Epithelial_Cell_1',
    name: 'Colon_Epithelial_Cell_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Colon_Epithelial_Cell_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Colon_Epithelial_Cell_3',
    name: 'Colon_Epithelial_Cell_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Colon_Epithelial_Cell_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Colonic_Goblet_Cell',
    name: 'Colonic_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Colonic_Goblet_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Enterochromaffin_Cell',
    name: 'Enterochromaffin_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Enterochromaffin_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Esophageal_Epithelial_Cell',
    name: 'Esophageal_Epithelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Esophageal_Epithelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Pancreatic_Delta_Gamma_Cell',
    name: 'Pancreatic_Delta_Gamma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Pancreatic_Delta_Gamma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Paneth_Cell',
    name: 'Paneth_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Paneth_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Small_Intestinal_Enterocyte',
    name: 'Small_Intestinal_Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Small_Intestinal_Enterocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Small_Intestinal_Goblet_Cell',
    name: 'Small_Intestinal_Goblet_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Small_Intestinal_Goblet_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Adult_scATAC__Small_Intestine__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Smooth_Muscle_Ge_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Tuft_Cell',
    name: 'Tuft_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Tuft_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Small_Intestine__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Small_Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Small_Intestine_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Alverolar_Type_2_Immune',
    name: 'Alverolar_Type_2_Immune',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Alverolar_Type_2_Immune.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Chief_Cell',
    name: 'Chief_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Chief_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Enterochromaffin_Cell',
    name: 'Enterochromaffin_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Enterochromaffin_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Fibroblast_Liver_Adrenal',
    name: 'Fibroblast_Liver_Adrenal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Fibroblast_Liver_Adrenal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Foveolar_Cell',
    name: 'Foveolar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Foveolar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Gastric_Neuroendocrine_Cell',
    name: 'Gastric_Neuroendocrine_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Gastric_Neuroendocrine_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Pancreatic_Acinar_Cell',
    name: 'Pancreatic_Acinar_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Pancreatic_Acinar_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Pancreatic_Delta_Gamma_Cell',
    name: 'Pancreatic_Delta_Gamma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Pancreatic_Delta_Gamma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Parietal_Cell',
    name: 'Parietal_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Parietal_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Peripheral_Nerve_Stromal',
    name: 'Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Small_Intestinal_Enterocyte',
    name: 'Small_Intestinal_Enterocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Small_Intestinal_Enterocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Smooth_Muscle_Ge_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Smooth_Muscle_General_Gastrointestinal',
    name: 'Smooth_Muscle_General_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Smooth_Muscle_General_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Type_II_Skeletal_Myocyte',
    name: 'Type_II_Skeletal_Myocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Type_II_Skeletal_Myocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Stomach__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Stomach_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Plasma_Cell',
    name: 'Plasma_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Plasma_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Thyroid_Follicular_Cell',
    name: 'Thyroid_Follicular_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Thyroid_Follicular_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Thyroid__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Thyroid'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Thyroid_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Blood_Brain_Barrier_Endothelial_Cell',
    name: 'Blood_Brain_Barrier_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Blood_Brain_Barrier_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Cardiac_Pericyte_2',
    name: 'Cardiac_Pericyte_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Cardiac_Pericyte_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__CNS_Enteric_Neuron',
    name: 'CNS_Enteric_Neuron',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_CNS_Enteric_Neuron.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Pericyte_General_4',
    name: 'Pericyte_General_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Pericyte_General_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Smooth_Muscle_Ge_Junction',
    name: 'Smooth_Muscle_Ge_Junction',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Smooth_Muscle_Ge_Junction.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Uterus__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Uterus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Uterus_Vascular_Smooth_Muscle_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Adipocyte',
    name: 'Adipocyte',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Adipocyte.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Alveolar_Capillary_Endothelial_Cell',
    name: 'Alveolar_Capillary_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Alveolar_Capillary_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Cardiac_Fibroblasts',
    name: 'Cardiac_Fibroblasts',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Cardiac_Fibroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Cardiac_Pericyte_3',
    name: 'Cardiac_Pericyte_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Cardiac_Pericyte_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Cardiac_Pericyte_4',
    name: 'Cardiac_Pericyte_4',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Cardiac_Pericyte_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Endothelial_Cell_General_1',
    name: 'Endothelial_Cell_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Endothelial_Cell_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Endothelial_Cell_General_2',
    name: 'Endothelial_Cell_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Endothelial_Cell_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Endothelial_Cell_General_3',
    name: 'Endothelial_Cell_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Endothelial_Cell_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Endothelial_Cell_Myocardial',
    name: 'Endothelial_Cell_Myocardial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Endothelial_Cell_Myocardial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Fibroblast_Epithelial',
    name: 'Fibroblast_Epithelial',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Fibroblast_Epithelial.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Fibroblast_Gastrointestinal',
    name: 'Fibroblast_Gastrointestinal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Fibroblast_Gastrointestinal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Fibroblast_General',
    name: 'Fibroblast_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Fibroblast_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Fibroblast_Peripheral_Nerve',
    name: 'Fibroblast_Peripheral_Nerve',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Fibroblast_Peripheral_Nerve.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Luteal_Cell_Ovarian',
    name: 'Luteal_Cell_Ovarian',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Luteal_Cell_Ovarian.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Macrophage_General',
    name: 'Macrophage_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Macrophage_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Macrophage_General_Alveolar',
    name: 'Macrophage_General_Alveolar',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Macrophage_General_Alveolar.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Mammary_Luminal_Epithelial_Cell_2',
    name: 'Mammary_Luminal_Epithelial_Cell_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Mammary_Luminal_Epithelial_Cell_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Mast_Cell',
    name: 'Mast_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Mast_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Memory_B_Cell',
    name: 'Memory_B_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Memory_B_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Naive_T_Cell',
    name: 'Naive_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Naive_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Natural_Killer_T_Cell',
    name: 'Natural_Killer_T_Cell',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Natural_Killer_T_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Pericyte_Esophageal_Muscularis',
    name: 'Pericyte_Esophageal_Muscularis',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Pericyte_Esophageal_Muscularis.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Pericyte_General_1',
    name: 'Pericyte_General_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Pericyte_General_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Pericyte_General_2',
    name: 'Pericyte_General_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Pericyte_General_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Pericyte_General_3',
    name: 'Pericyte_General_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Pericyte_General_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Peripheral_Nerve_Stromal',
    name: 'Peripheral_Nerve_Stromal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Peripheral_Nerve_Stromal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Schwann_Cell_General',
    name: 'Schwann_Cell_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Schwann_Cell_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Smooth_Muscle_Colon_1',
    name: 'Smooth_Muscle_Colon_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Smooth_Muscle_Colon_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Smooth_Muscle_Colon_2',
    name: 'Smooth_Muscle_Colon_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Smooth_Muscle_Colon_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Smooth_Muscle_Esophageal_Mucosal',
    name: 'Smooth_Muscle_Esophageal_Mucosal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Smooth_Muscle_Esophageal_Mucosal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Smooth_Muscle_Esophageal_Muscularis_1',
    name: 'Smooth_Muscle_Esophageal_Muscularis_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Smooth_Muscle_Esophageal_Muscularis_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Smooth_Muscle_Esophageal_Muscularis_2',
    name: 'Smooth_Muscle_Esophageal_Muscularis_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Smooth_Muscle_Esophageal_Muscularis_2.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Smooth_Muscle_Esophageal_Muscularis_3',
    name: 'Smooth_Muscle_Esophageal_Muscularis_3',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Smooth_Muscle_Esophageal_Muscularis_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Smooth_Muscle_General',
    name: 'Smooth_Muscle_General',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Smooth_Muscle_General.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Smooth_Muscle_Uterine',
    name: 'Smooth_Muscle_Uterine',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Smooth_Muscle_Uterine.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Smooth_Muscle_Vaginal',
    name: 'Smooth_Muscle_Vaginal',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Smooth_Muscle_Vaginal.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__T_Lymphocyte_1_CD8+',
    name: 'T_Lymphocyte_1_CD8+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_T_Lymphocyte_1_CD8+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__T_Lymphocyte_2_CD4+',
    name: 'T_Lymphocyte_2_CD4+',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_T_Lymphocyte_2_CD4+.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Vascular_Smooth_Muscle_1',
    name: 'Vascular_Smooth_Muscle_1',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Vascular_Smooth_Muscle_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Adult_scATAC__Vagina__Vascular_Smooth_Muscle_2',
    name: 'Vascular_Smooth_Muscle_2',
    assemblyNames: ['hg19'],
    category: ['Adult_scATAC', 'Vagina'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Adult_scATAC_Vagina_Vascular_Smooth_Muscle_2.bw',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Adrenal_Gland_Adrenal_Adrenocortical_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Adrenal_Gland_Adrenal_Chromaffin_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Adrenal_Gland_Adrenal_Erythroblasts.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Adrenal_Gland_Adrenal_Megakaryocytes_Unsure.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Adrenal_Gland_Adrenal_Myeloid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Adrenal_Gland_Adrenal_Schwann_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Adrenal_Gland_Adrenal_Stromal_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Adrenal_Gland_Adrenal_Sympathoblasts.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Adrenal_Gland_Adrenal_Vascular_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Cerebellum_Cerebellum_Astrocytes.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Cerebellum_Cerebellum_Granule_Neurons.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Cerebellum_Cerebellum_Inhibitory_Interneurons_Unsure.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Cerebellum_Cerebellum_Purkinje_Neurons.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Cerebrum_Cerebrum_Astrocytes.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Cerebrum_Cerebrum_Cerebrum_Unknown.3.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Cerebrum_Cerebrum_Excitatory_Neurons.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Cerebrum_Cerebrum_Inhibitory_Neurons.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Cerebrum_Cerebrum_Limbic_System_Neurons.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Cerebrum_Cerebrum_Skor2_Npsr1_Positive_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Cerebrum_Cerebrum_Vascular_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Eye_Eye_Unknown_6.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Eye_Eye_Ganglion_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Eye_Eye_Horizontal_Cells_Amacrine_Cells_Unsure.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Eye_Eye_Photoreceptor_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Eye_Eye_Retinal_Pigment_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Eye_Eye_Retinal_Progenitors_And_Muller_Glia.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Eye_Eye_Stromal_Cells_Unsure.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Eye_Eye_Vascular_Endothelial_Cells_Unsure.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Cardiomyocytes.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Cardiomyocytes_Vascular_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Elf3_Agbl2_Positive_Cells_Unsure.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Endocardial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Epicardial_Fat_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Erythroblasts.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Heart_Unknown.10.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Lymphatic_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Lymphoid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Myeloid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Schwann_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Smooth_Muscle_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Stromal_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Heart_Heart_Vascular_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Intestine_Intestine_Chromaffin_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Intestine_Intestine_Ens_Glia.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Intestine_Intestine_Ens_Neurons.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Intestine_Intestine_Intestinal_Epithelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Intestine_Intestine_Intestine_Unknown.4.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Intestine_Intestine_Intestine_Unknown.8.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Intestine_Intestine_Lymphatic_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Intestine_Intestine_Lymphoid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Intestine_Intestine_Mesothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Intestine_Intestine_Myeloid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Intestine_Intestine_Smooth_Muscle_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Intestine_Intestine_Stromal_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Intestine_Intestine_Vascular_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Kidney_Kidney_Unknown_14.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Kidney_Kidney_Unknown_7.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Kidney_Kidney_Mesangial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Kidney_Kidney_Mesangial_Cells_Unsure.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Kidney_Kidney_Metanephric_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Kidney_Kidney_Myeloid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Kidney_Kidney_Stromal_Cells_Unsure.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Kidney_Kidney_Ureteric_Bud_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Kidney_Kidney_Vascular_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Liver_Liver_Erythroblasts.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Liver_Liver_Hematopoietic_Stem_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Liver_Liver_Hepatoblasts.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Liver_Liver_Lymphoid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Liver_Liver_Megakaryocytes.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Liver_Liver_Myeloid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Liver_Liver_Stellate_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Liver_Liver_Vascular_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Lung_Lung_Bronchiolar_And_Alveolar_Epithelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Lung_Lung_Ciliated_Epithelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Lung_Lung_Lymphatic_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Lung_Lung_Lymphoid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Lung_Lung_Megakaryocytes.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Lung_Lung_Myeloid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Lung_Lung_Neuroendocrine_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Lung_Lung_Stromal_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Lung_Lung_Vascular_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Muscle_Muscle_Lymphoid_And_Myeloid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Muscle_Muscle_Unknown_7.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Muscle_Muscle_Satellite_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Muscle_Muscle_Schwann_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Muscle_Muscle_Skeletal_Muscle_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Muscle_Muscle_Skeletal_Muscle_Cells_Unsure.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Muscle_Muscle_Smooth_Muscle_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Muscle_Muscle_Stromal_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Muscle_Muscle_Stromal_Cells_Unsure.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Muscle_Muscle_Vascular_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Pancreas_Pancreas_Acinar_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Pancreas_Pancreas_Ductal_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Pancreas_Pancreas_Islet_Endocrine_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Pancreas_Pancreas_Lymphoid_Myeloid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Pancreas_Pancreas_Pancreas_Unknown.1.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Pancreas_Pancreas_Stromal_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Pancreas_Pancreas_Vascular_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Placenta_Placenta_Erythroblasts.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Placenta_Placenta_Extravillous_Trophoblasts.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Placenta_Placenta_Igfbp1_Dkk1_Positive_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Placenta_Placenta_Lymphoid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Placenta_Placenta_Myeloid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Placenta_Placenta_Paep_Mecom_Positive_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Placenta_Placenta_Smooth_Muscle_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Placenta_Placenta_Stromal_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Placenta_Placenta_Syncytiotrophoblast_And_Villous_Cytotrophoblasts_Unsure.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Placenta_Placenta_Syncytiotrophoblasts_And_Villous_Cytotrophoblasts.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Placenta_Placenta_Trophoblast_Giant_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Placenta_Placenta_Vascular_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Spleen_Spleen_Megakaryocytes.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Spleen_Spleen_Myeloid_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Spleen_Spleen_Stromal_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Spleen_Spleen_Vascular_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Stomach_Stomach_Ens_Glia.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Stomach_Stomach_Ens_Neurons_Unsure.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Stomach_Stomach_Epithelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Stomach_Stomach_Goblet_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Stomach_Stomach_Parietal_And_Chief_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Stomach_Stomach_Stromal_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Stomach_Stomach_Vascular_Endothelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Thymus_Thymus_Antigen_Presenting_Cells.bedpe',
      },
    },
  },
  {
    type: 'VariantTrack',
    trackId: 'Fetal_abc__Thymus__Thymus_Thymic_Epithelial_Cells',
    name: 'Thymus_Thymic_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_abc', 'Thymus'],
    adapter: {
      type: 'BedpeAdapter',
      bedpeLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Thymus_Thymus_Thymic_Epithelial_Cells.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Thymus_Thymocytes.bedpe',
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
        uri: 'http://screg.sdfmu.edu.cn/ABC/Fetal_abc_Thymus_Thymic_Epithelial_Cells.bedpe',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__Adrenocortical_Cells',
    name: 'Adrenocortical_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Adrenal_Gland_Adrenocortical_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__Chromaffin_Cells',
    name: 'Chromaffin_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Adrenal_Gland_Chromaffin_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__Erythroblasts',
    name: 'Erythroblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Adrenal_Gland_Erythroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__Megakaryocytes',
    name: 'Megakaryocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Adrenal_Gland_Megakaryocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__Myeloid_Cells',
    name: 'Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Adrenal_Gland_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__Schwann_Cells',
    name: 'Schwann_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Adrenal_Gland_Schwann_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__Stromal_Cells',
    name: 'Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Adrenal_Gland_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__Sympathoblasts',
    name: 'Sympathoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Adrenal_Gland_Sympathoblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Adrenal_Gland__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Adrenal_Gland'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Adrenal_Gland_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebellum__Astrocytes',
    name: 'Astrocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebellum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Cerebellum_Astrocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebellum__Granule_Neurons',
    name: 'Granule_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebellum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Cerebellum_Granule_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebellum__Inhibitory_Interneurons',
    name: 'Inhibitory_Interneurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebellum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Cerebellum_Inhibitory_Interneurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebellum__Purkinje_Neurons',
    name: 'Purkinje_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebellum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Cerebellum_Purkinje_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__Astrocytes',
    name: 'Astrocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Cerebrum_Astrocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__Astrocytes_Oligodendrocytes',
    name: 'Astrocytes_Oligodendrocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Cerebrum_Astrocytes_Oligodendrocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__Cerebrum_Unknown_3',
    name: 'Cerebrum_Unknown_3',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Cerebrum_Cerebrum_Unknown_3.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__Excitatory_Neurons',
    name: 'Excitatory_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Cerebrum_Excitatory_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__Inhibitory_Neurons',
    name: 'Inhibitory_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Cerebrum_Inhibitory_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__Limbic_System_Neurons',
    name: 'Limbic_System_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Cerebrum_Limbic_System_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__Skor2_Npsr1_Positive_Cells',
    name: 'Skor2_Npsr1_Positive_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Cerebrum_Skor2_Npsr1_Positive_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Cerebrum__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Cerebrum'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Cerebrum_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__Eye_Unknown_6',
    name: 'Eye_Unknown_6',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Eye_Eye_Unknown_6.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__Ganglion_Cells',
    name: 'Ganglion_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Eye_Ganglion_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__Horizontal_Cells_Amacrine_Cells',
    name: 'Horizontal_Cells_Amacrine_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Eye_Horizontal_Cells_Amacrine_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__Photoreceptor_Cells',
    name: 'Photoreceptor_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Eye_Photoreceptor_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__Retinal_Pigment_Cells',
    name: 'Retinal_Pigment_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Eye_Retinal_Pigment_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__Retinal_Progenitors_And_Muller_Glia',
    name: 'Retinal_Progenitors_And_Muller_Glia',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Eye_Retinal_Progenitors_And_Muller_Glia.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__Stromal_Cells',
    name: 'Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Eye_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Eye__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Eye'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Eye_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Cardiomyocytes',
    name: 'Cardiomyocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Cardiomyocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Cardiomyocytes_Vascular_Endothelial_Cells',
    name: 'Cardiomyocytes_Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Cardiomyocytes_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Elf3_Agbl2_Positive_Cells',
    name: 'Elf3_Agbl2_Positive_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Elf3_Agbl2_Positive_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Endocardial_Cell',
    name: 'Endocardial_Cell',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Endocardial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Epicardial_Fat_Cells',
    name: 'Epicardial_Fat_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Epicardial_Fat_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Erythroblasts',
    name: 'Erythroblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Erythroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Heart_Unknown_10',
    name: 'Heart_Unknown_10',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Heart_Unknown_10.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Lymphoid_Cells',
    name: 'Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Lymphoid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Myeloid_Cells',
    name: 'Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Schwann_Cells',
    name: 'Schwann_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Schwann_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Smooth_Muscle_Cells',
    name: 'Smooth_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Smooth_Muscle_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Stromal_Cells',
    name: 'Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Heart__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Heart'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Heart_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__Chromaffin_Cells',
    name: 'Chromaffin_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Intestine_Chromaffin_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__Ens_Glia',
    name: 'Ens_Glia',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Intestine_Ens_Glia.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__Ens_Neurons',
    name: 'Ens_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Intestine_Ens_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__Intestinal_Epithelial_Cells',
    name: 'Intestinal_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Intestine_Intestinal_Epithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__Intestine_Unknown_4',
    name: 'Intestine_Unknown_4',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Intestine_Intestine_Unknown_4.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__Intestine_Unknown_8',
    name: 'Intestine_Unknown_8',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Intestine_Intestine_Unknown_8.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Intestine_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__Lymphoid_Cells',
    name: 'Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Intestine_Lymphoid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__Mesothelial_Cells',
    name: 'Mesothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Intestine_Mesothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__Myeloid_Cells',
    name: 'Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Intestine_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__Smooth_Muscle_Cells',
    name: 'Smooth_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Intestine_Smooth_Muscle_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__Stromal_Cells',
    name: 'Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Intestine_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Intestine__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Intestine'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Intestine_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__Kidney_Unknown_14',
    name: 'Kidney_Unknown_14',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Kidney_Kidney_Unknown_14.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__Kidney_Unknown_7',
    name: 'Kidney_Unknown_7',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Kidney_Kidney_Unknown_7.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__Mesangial_Cells',
    name: 'Mesangial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Kidney_Mesangial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__Metanephric_Cells',
    name: 'Metanephric_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Kidney_Metanephric_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__Myeloid_Cells',
    name: 'Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Kidney_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__Stromal_Cells',
    name: 'Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Kidney_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__Ureteric_Bud_Cells',
    name: 'Ureteric_Bud_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Kidney_Ureteric_Bud_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Kidney__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Kidney'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Kidney_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__Erythroblasts',
    name: 'Erythroblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Liver_Erythroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__Hematopoietic_Stem_Cells',
    name: 'Hematopoietic_Stem_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Liver_Hematopoietic_Stem_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__Hepatoblasts',
    name: 'Hepatoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Liver_Hepatoblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__Lymphoid_Cells',
    name: 'Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Liver_Lymphoid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__Megakaryocytes',
    name: 'Megakaryocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Liver_Megakaryocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__Myeloid_Cells',
    name: 'Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Liver_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__Stellate_Cells',
    name: 'Stellate_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Liver_Stellate_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Liver__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Liver'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Liver_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__Bronchiolar_And_Alveolar_Epithelial_Cells',
    name: 'Bronchiolar_And_Alveolar_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Lung_Bronchiolar_And_Alveolar_Epithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__Ciliated_Epithelial_Cells',
    name: 'Ciliated_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Lung_Ciliated_Epithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__Lymphatic_Endothelial_Cell',
    name: 'Lymphatic_Endothelial_Cell',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Lung_Lymphatic_Endothelial_Cell.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__Lymphoid_Cells',
    name: 'Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Lung_Lymphoid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__Megakaryocytes',
    name: 'Megakaryocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Lung_Megakaryocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__Myeloid_Cells',
    name: 'Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Lung_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__Neuroendocrine_Cells',
    name: 'Neuroendocrine_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Lung_Neuroendocrine_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__Stromal_Cells',
    name: 'Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Lung_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Lung__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Lung'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Lung_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__Lymphoid_And_Myeloid_Cells',
    name: 'Lymphoid_And_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Muscle_Lymphoid_And_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__Muscle_Unknown_7',
    name: 'Muscle_Unknown_7',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Muscle_Muscle_Unknown_7.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__Satellite_Cells',
    name: 'Satellite_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Muscle_Satellite_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__Schwann_Cells',
    name: 'Schwann_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Muscle_Schwann_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__Skeletal_Muscle_Cells',
    name: 'Skeletal_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Muscle_Skeletal_Muscle_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__Smooth_Muscle_Cells',
    name: 'Smooth_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Muscle_Smooth_Muscle_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__Stromal_Cells',
    name: 'Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Muscle_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Muscle__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Muscle'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Muscle_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__Acinar_Cells',
    name: 'Acinar_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Pancreas_Acinar_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__Ductal_Cells',
    name: 'Ductal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Pancreas_Ductal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__Islet_Endocrine_Cells',
    name: 'Islet_Endocrine_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Pancreas_Islet_Endocrine_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__Lymphoid_And_Myeloid_Cells',
    name: 'Lymphoid_And_Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Pancreas_Lymphoid_And_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__Pancreas_Unknown_1',
    name: 'Pancreas_Unknown_1',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Pancreas_Pancreas_Unknown_1.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__Stromal_Cells',
    name: 'Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Pancreas_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Pancreas__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Pancreas'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Pancreas_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__Erythroblasts',
    name: 'Erythroblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Placenta_Erythroblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__Extravillous_Trophoblasts',
    name: 'Extravillous_Trophoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Placenta_Extravillous_Trophoblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__Igfbp1_Dkk1_Positive_Cells',
    name: 'Igfbp1_Dkk1_Positive_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Placenta_Igfbp1_Dkk1_Positive_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__Lymphoid_Cells',
    name: 'Lymphoid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Placenta_Lymphoid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__Myeloid_Cells',
    name: 'Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Placenta_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__Paep_Mecom_Positive_Cells',
    name: 'Paep_Mecom_Positive_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Placenta_Paep_Mecom_Positive_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__Smooth_Muscle_Cells',
    name: 'Smooth_Muscle_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Placenta_Smooth_Muscle_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__Stromal_Cells',
    name: 'Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Placenta_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId:
      'Fetal_scATAC__Placenta__Syncytiotrophoblast_And_Villous_Cytotrophoblasts',
    name: 'Syncytiotrophoblast_And_Villous_Cytotrophoblasts',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Placenta_Syncytiotrophoblast_And_Villous_Cytotrophoblasts.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__Trophoblast_Giant_Cells',
    name: 'Trophoblast_Giant_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Placenta_Trophoblast_Giant_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Placenta__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Placenta'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Placenta_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Spleen__Megakaryocytes',
    name: 'Megakaryocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Spleen'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Spleen_Megakaryocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Spleen__Myeloid_Cells',
    name: 'Myeloid_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Spleen'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Spleen_Myeloid_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Spleen__Stromal_Cells',
    name: 'Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Spleen'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Spleen_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Spleen__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Spleen'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Spleen_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__Ens_Glia',
    name: 'Ens_Glia',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Stomach_Ens_Glia.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__Ens_Neurons',
    name: 'Ens_Neurons',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Stomach_Ens_Neurons.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__Epithelial_Cells',
    name: 'Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Stomach_Epithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__Goblet_Cells',
    name: 'Goblet_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Stomach_Goblet_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__Parietal_And_Chief_Cells',
    name: 'Parietal_And_Chief_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Stomach_Parietal_And_Chief_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__Stromal_Cells',
    name: 'Stromal_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Stomach_Stromal_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Stomach__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Stomach'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Stomach_Vascular_Endothelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Thymus__Antigen_Presenting_Cells',
    name: 'Antigen_Presenting_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Thymus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Thymus_Antigen_Presenting_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Thymus__Thymic_Epithelial_Cells',
    name: 'Thymic_Epithelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Thymus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Thymus_Thymic_Epithelial_Cells.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Thymus__Thymocytes',
    name: 'Thymocytes',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Thymus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Thymus_Thymocytes.bw',
      },
    },
  },
  {
    type: 'QuantitativeTrack',
    trackId: 'Fetal_scATAC__Thymus__Vascular_Endothelial_Cells',
    name: 'Vascular_Endothelial_Cells',
    assemblyNames: ['hg19'],
    category: ['Fetal_scATAC', 'Thymus'],
    adapter: {
      type: 'BigWigAdapter',
      bigWigLocation: {
        locationType: 'UriLocation',
        uri: 'http://screg.sdfmu.edu.cn/scATAC/Fetal_scATAC_Thymus_Vascular_Endothelial_Cells.bw',
      },
    },
  },
];
export default tracks;
