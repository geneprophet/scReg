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
    trackId: 'brain_track',
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
    type: 'QuantitativeTrack',
    trackId: 'my_wiggle_track',
    name: 'My Wiggle Track',
    assemblyNames: ['hg19'],
    category: ['ENCODE bigWigs'],
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
    type: 'MultiQuantitativeTrack',
    trackId: 'microarray_multi',
    name: 'MultiWig',
    category: ['ENCODE bigWigs'],
    assemblyNames: ['hg19'],
    adapter: {
      type: 'MultiWiggleAdapter',
      bigWigs: [
        'https://www.encodeproject.org/files/ENCFF055ZII/@@download/ENCFF055ZII.bigWig',
        'https://www.encodeproject.org/files/ENCFF826HEW/@@download/ENCFF826HEW.bigWig',
        'https://www.encodeproject.org/files/ENCFF858LIM/@@download/ENCFF858LIM.bigWig',
        'https://www.encodeproject.org/files/ENCFF425TNW/@@download/ENCFF425TNW.bigWig',
        'https://www.encodeproject.org/files/ENCFF207RBY/@@download/ENCFF207RBY.bigWig',
        'https://www.encodeproject.org/files/ENCFF289CTN/@@download/ENCFF289CTN.bigWig',
        'https://www.encodeproject.org/files/ENCFF884IEG/@@download/ENCFF884IEG.bigWig',
        'https://www.encodeproject.org/files/ENCFF495SBQ/@@download/ENCFF495SBQ.bigWig',
        'https://www.encodeproject.org/files/ENCFF959EZF/@@download/ENCFF959EZF.bigWig',
        'https://www.encodeproject.org/files/ENCFF926YZX/@@download/ENCFF926YZX.bigWig',
        'https://www.encodeproject.org/files/ENCFF269CHA/@@download/ENCFF269CHA.bigWig',
        'https://www.encodeproject.org/files/ENCFF857KTJ/@@download/ENCFF857KTJ.bigWig',
        'https://www.encodeproject.org/files/ENCFF109KCQ/@@download/ENCFF109KCQ.bigWig',
        'https://www.encodeproject.org/files/ENCFF942TZX/@@download/ENCFF942TZX.bigWig',
        'https://www.encodeproject.org/files/ENCFF140HPM/@@download/ENCFF140HPM.bigWig',
        'https://www.encodeproject.org/files/ENCFF305JRR/@@download/ENCFF305JRR.bigWig',
        'https://www.encodeproject.org/files/ENCFF739FDJ/@@download/ENCFF739FDJ.bigWig',
        'https://www.encodeproject.org/files/ENCFF518OJP/@@download/ENCFF518OJP.bigWig',
        'https://www.encodeproject.org/files/ENCFF810HHS/@@download/ENCFF810HHS.bigWig',
        'https://www.encodeproject.org/files/ENCFF939JSB/@@download/ENCFF939JSB.bigWig',
        'https://www.encodeproject.org/files/ENCFF041TAK/@@download/ENCFF041TAK.bigWig',
      ],
    },
  },
  {
    type: 'MultiQuantitativeTrack',
    trackId: 'microarray_multi_groups',
    name: 'MultiWig (groups)',
    category: ['ENCODE bigWigs'],
    assemblyNames: ['hg19'],
    adapter: {
      type: 'MultiWiggleAdapter',
      subadapters: [
        {
          type: 'BigWigAdapter',
          name: 'k1',
          bigWigLocation: {
            uri: 'https://www.encodeproject.org/files/ENCFF055ZII/@@download/ENCFF055ZII.bigWig',
          },
          group: 'group1',
        },
        {
          type: 'BigWigAdapter',
          name: 'k2',
          bigWigLocation: {
            uri: 'https://www.encodeproject.org/files/ENCFF826HEW/@@download/ENCFF826HEW.bigWig',
          },
          group: 'group2',
        },
      ],
    },
  },
];
export default tracks;
