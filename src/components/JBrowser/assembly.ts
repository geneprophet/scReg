// assembly设置的是基因组的版本， 比如hg19就是GRCh37，hg38就是GRCh38
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

const assembly_hg38 = {
  name: 'hg38',
  aliases: ['GRCh38'],
  sequence: {
    type: 'ReferenceSequenceTrack',
    trackId: 'GRCh38-ReferenceSequenceTrack',
    adapter: {
      type: 'BgzipFastaAdapter',
      fastaLocation: {
        uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz',
      },
      faiLocation: {
        uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz.fai',
      },
      gziLocation: {
        uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz.gzi',
      },
    },
  },
  refNameAliases: {
    adapter: {
      type: 'RefNameAliasAdapter',
      location: {
        uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/hg38_aliases.txt',
      },
    },
  },
};

export default assembly;
