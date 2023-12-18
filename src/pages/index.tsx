import React, { useEffect, useState } from 'react';
import styles from './index.less';
import View from '@/components/JBrowser';
import { Col, Row } from 'antd';
export default function IndexPage() {
  useEffect(() => {
    console.log(window.location.href);
  }, [window.location.href]);
  // 目前data只传送了snp的位置信息，后续还可以传送可视化的数据都有那些track等参数
  const data = {
    chr: 1,
    start: 55055000,
    end: 56061000,
  };
  return (
    <div>
      <Row justify={'center'}>
        <h1 className={styles.title}>Page index</h1>
      </Row>
      <View data={data}></View>
    </div>
  );
}
