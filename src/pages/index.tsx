import React, { useEffect, useState } from 'react';
import styles from './index.less';
import View from '@/components/JBrowser';
import { Col, Row } from 'antd';
export default function IndexPage(props: any) {
  useEffect(() => {
    console.log(window.location.href);
  }, [window.location.href]);
  const [taskid, setTaskid] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [data, setData] = useState({
    chr: 1,
    start: 55055000,
    end: 56061000,
    type: props.match.params.type,
    taskid: props.match.params.taskid,
  });
  useEffect(() => {
    // 如果url结尾taskid为none,则跳到默认可视化页面
    // 如果taskid不为node,则根据tasktype跳到对应的task的可视化页面
    console.log(props.match.params.taskid);
    console.log(props.match.params.type);
    setTaskid(props.match.params.taskid);
  }, [props]);

  return (
    <div>
      <Row justify={'center'}>
        <h1 className={styles.title}>Page index</h1>
      </Row>
      <View data={data}></View>
    </div>
  );
}
