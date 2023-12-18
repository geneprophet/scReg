// 这里的索引文件需要使用jbrowse 命令行工具自己制作
// https://jbrowse.org/jb2/docs/cli/#jbrowse-text-index
// 目的是为了在jbrowse内快速的搜索一些track中包含的字段
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
export default aggregateTextSearchAdapters;
