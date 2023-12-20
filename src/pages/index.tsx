import React, { useEffect, useState } from 'react';
import styles from './index.less';
import View from '@/components/JBrowser';
import { Col, Row } from 'antd';
export default function IndexPage(props: any) {
  // 新增根据不同的例子展示不同的位置的结果
  if (props.match.params.taskid == 'figR_result') {
    const data = {
      chr: 'X',
      start: '20017867',
      end: '20774281',
      type: props.match.params.type,
      taskid: props.match.params.taskid,
    };
    return (
      <div>
        <Row justify={'center'}>
          <h1 className={styles.title}>Page index</h1>
        </Row>
        <View data={data}></View>
      </div>
    );
  } else if (props.match.params.taskid == 'abc_EnhancerPredictions') {
    const data = {
      chr: '22',
      start: '16974562',
      end: '21497428',
      type: props.match.params.type,
      taskid: props.match.params.taskid,
    };
    return (
      <div>
        <Row justify={'center'}>
          <h1 className={styles.title}>Page index</h1>
        </Row>
        <View data={data}></View>
      </div>
    );
  } else if (props.match.params.taskid == 'chr19_Microglia_coaccessibility') {
    const data = {
      chr: '19',
      start: '15380171',
      end: '15414778',
      type: props.match.params.type,
      taskid: props.match.params.taskid,
    };
    return (
      <div>
        <Row justify={'center'}>
          <h1 className={styles.title}>Page index</h1>
        </Row>
        <View data={data}></View>
      </div>
    );
  } else if (
    props.match.params.taskid ==
    'link_rna_atac_ka30_knn30_s0_corr_spearmanr_cluster_r10'
  ) {
    const data = {
      chr: '1',
      start: '55055000',
      end: '56061000',
      type: props.match.params.type,
      taskid: props.match.params.taskid,
    };
    return (
      <div>
        <Row justify={'center'}>
          <h1 className={styles.title}>Page index</h1>
        </Row>
        <View data={data}></View>
      </div>
    );
  } else if (props.match.params.taskid == 'looppredictor_predicted_result') {
    const data = {
      chr: '1',
      start: '63866058',
      end: '72734772',
      type: props.match.params.type,
      taskid: props.match.params.taskid,
    };
    return (
      <div>
        <Row justify={'center'}>
          <h1 className={styles.title}>Page index</h1>
        </Row>
        <View data={data}></View>
      </div>
    );
  } else {
    const data = {
      chr: '1',
      start: '55055000',
      end: '56061000',
      type: props.match.params.type,
      taskid: props.match.params.taskid,
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

  // useEffect(() => {
  //   // 如果url结尾taskid为none,则跳到默认可视化页面
  //   // 如果taskid不为node,则根据tasktype跳到对应的task的可视化页面
  //   console.log(props.match.params.taskid);
  //   console.log(props.match.params.type);
  // }, [window.location.href,props]);

  // return (
  //   <div>
  //     <Row justify={'center'}>
  //       <h1 className={styles.title}>Page index</h1>
  //     </Row>
  //     <View data={data}></View>
  //   </div>
  // );
}
