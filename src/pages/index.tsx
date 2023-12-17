import React, { useEffect, useState } from 'react';
import styles from './index.less';
import View from '@/components/JBrowser';
import { Col, Row } from 'antd';
export default function IndexPage() {
  useEffect(() => {
    console.log(window.location.href);
  }, [window.location.href]);
  const data = {
    chr: 10,
    start: 28838737,
    end: 28838899,
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
