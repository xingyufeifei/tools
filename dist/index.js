// import React from 'react';
// import ReactDOM from 'react-dom';
// import reportWebVitals from './reportWebVitals';
// import './styles/index.scss';
// import Button from "./components/Button";
// import Mask from './components/Mask';
// import Card from './components/Card';
// ReactDOM.render(
//   <React.StrictMode>
//     <Button size='lg' btnType="link" href="https://www.baidu.com">点击我</Button>
//     <Button size='df' btnType="primary"  style={{margin:"0 10px"}}>点击我</Button>
//     <Button size='sm' btnType="danger"  style={{margin:"0 10px"}}>点击我</Button>
//     <Button size='lg' btnType="default" >点击我</Button>
//     {/* <Mask></Mask> */}
//     <Card
//      title="卡片"
//      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
//      style={{width:200,margin:20}}
//      >
//       <p>1</p>
//       <p>2</p>
//       <p>3</p>
//       <p>4</p>
//     </Card>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
export { default as Button } from "./components/Button";
export { default as Mask } from "./components/Mask";
export { default as Card } from "./components/Card";
