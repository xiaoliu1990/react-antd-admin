import React, { useState } from 'react';
import { Card, Tree, TreeSelect   } from 'antd';

function TreeIndex() {
  let treeData=[
    { id: 1, pId: 0, value: '1', title: '0-0' },
    { id: 2, pId: 1, value: '2', title: '0-0-0' },
    { id: 3, pId: 1, value: '3', title: '0-0-1' },
    { id: 4, pId: 1, value: '4', title: '0-0-2' },
    { id: 5, pId: 2, value: '5', title: '0-0-2' }
  ];
  let treeData1=[
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
        },
        {
          title: '0-0-1',
          key: '0-0-1',
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    }
  ];
  return (
    <Card className="card-no-border">
      <TreeSelect treeDataSimpleMode style={{ width: '100%' }} treeData={treeData}/> 
      <br/>
      <Tree showLine defaultExpandAll treeData={treeData1}/>
    </Card>
  );
}

export default TreeIndex;
