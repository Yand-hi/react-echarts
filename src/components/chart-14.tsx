import React from 'react';

export const Chart14 = () => {
  return (
    <table>
      <thead>
      <tr>
        <th colSpan={2}>类型</th>
        <th>单数</th>
        <th>总计</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td rowSpan={3}>入室盗窃</td>
        <td>撬门入室</td>
        <td>20</td>
        <td rowSpan={3}>70</td>
      </tr>
      <tr>
        <td>技术开锁</td>
        <td>20</td>
      </tr>
      <tr>
        <td>撬防护栏</td>
        <td>30</td>
      </tr>
      <tr>
        <td rowSpan={2}>抢夺</td>
        <td>飞车抢夺</td>
        <td>22</td>
        <td rowSpan={2}>44</td>
      </tr>
      <tr>
        <td>持械抢夺</td>
        <td>22</td>
      </tr>
      <tr>
        <td rowSpan={3}>扒窃</td>
        <td>公交车扒窃</td>
        <td>40</td>
        <td rowSpan={3}>68</td>
      </tr>
      <tr>
        <td>火车站扒窃</td>
        <td>22</td>
      </tr>
      <tr>
        <td>步行街扒窃</td>
        <td>45</td>
      </tr>
      <tr>
        <td rowSpan={2}>诈骗</td>
        <td>电信诈骗</td>
        <td>32</td>
        <td rowSpan={2}>102</td>
      </tr>
      <tr>
        <td>网络诈骗</td>
        <td>80</td>
      </tr>
      </tbody>
    </table>
  );
};