(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var r=n(109),o=(n(102),n(0)),i=n(2),c=n(4),s=n(9),a=n.n(s),l=n(10),u=n.n(l),f=n(50),h=n.n(f),d=n(12),b=n.n(d),p=n(13),j=n.n(p),y=n(5),x=n.n(y),g=n(7),v=n(26),m=n(33),O=n(1);function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x()(e);if(t){var o=x()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j()(this,n)}}var k=function(e){b()(r,e);var t=w(r);function r(e){return a()(this,r),t.call(this,e)}return u()(r,[{key:"_renderCell",value:function(){switch(this.props.value){case 0:return Object(O.jsx)(v.a,{onPress:this._handlePress.bind(this),children:Object(O.jsx)(m.a,{source:n(85),style:R.image})});case 1:return Object(O.jsx)(v.a,{onPress:this._handlePress.bind(this),children:Object(O.jsx)(m.a,{source:n(86),style:R.image})});case-1:return Object(O.jsx)(m.a,{source:n(87),style:R.image})}}},{key:"_handlePress",value:function(){this.props.onPress(this.props.index)}},{key:"render",value:function(){return Object(O.jsx)(c.a,{style:R.container,children:this._renderCell()})}}]),r}(o.Component),R=i.a.create({container:{flex:1,justifyContent:"center",alignItems:"center"},image:{width:75,height:75,margin:2}}),C=n(44),_=n(34);function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x()(e);if(t){var o=x()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j()(this,n)}}var T=function(e){b()(n,e);var t=P(n);function n(){return a()(this,n),t.apply(this,arguments)}return u()(n,[{key:"render",value:function(){return Object(O.jsx)(C.a,{animationType:"fade",transparent:!0,visible:this.props.visible,onRequestClose:function(){console.log("Modal has been closed.")},children:Object(O.jsx)(c.a,{style:S.centeredView,children:Object(O.jsxs)(c.a,{style:S.modalView,children:[Object(O.jsx)(g.a,{style:S.modalText,children:"You won!"}),Object(O.jsx)(_.a,{style:S.button,onPress:this.props.onPress,children:Object(O.jsx)(g.a,{style:S.buttonText,children:"Play again?"})})]})})})}}]),n}(o.Component),S=i.a.create({centeredView:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.5)",padding:20},modalView:{padding:20,paddingLeft:40,paddingRight:40,margin:20,backgroundColor:"#1F1F1F",alignItems:"center"},button:{marginTop:20,padding:10,backgroundColor:"#ffA812"},buttonText:{color:"black",fontWeight:"bold",textAlign:"center"},modalText:{color:"white",fontWeight:"bold",textAlign:"center",fontSize:30}}),W=n(41);function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x()(e);if(t){var o=x()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j()(this,n)}}var A=function(e){b()(n,e);var t=z(n);function n(){return a()(this,n),t.apply(this,arguments)}return u()(n,[{key:"render",value:function(){return Object(O.jsx)(C.a,{animationType:"fade",transparent:!0,visible:this.props.visible,onRequestClose:function(){console.log("Modal has been closed.")},children:Object(O.jsx)(c.a,{style:I.centeredView,children:Object(O.jsxs)(c.a,{style:I.modalView,children:[Object(O.jsx)(g.a,{style:I.modalText,children:"How to play"}),Object(O.jsx)(g.a,{style:I.modalContent,children:'Try to turn all the cells on the board "Off".'}),Object(O.jsx)(g.a,{style:I.modalContent,children:'Whenever you click a cell, the cells beside it will also swap between "On" and "Off".'}),Object(O.jsx)(g.a,{style:I.modalContent,children:'The game is over when all the cells are "Off".'}),Object(O.jsxs)(c.a,{style:{flexDirection:"row"},children:[Object(O.jsx)(_.a,{style:I.button,onPress:function(){return W.a.openURL("https://github.com/Sean-Stilwell/Lights_Out/issues")},children:Object(O.jsx)(g.a,{style:I.buttonText,children:"Report Issue"})}),Object(O.jsx)(_.a,{style:I.button,onPress:this.props.onPress,children:Object(O.jsx)(g.a,{style:I.buttonText,children:"Close"})})]})]})})})}}]),n}(o.Component),I=i.a.create({centeredView:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.5)",padding:20},modalView:{padding:20,paddingLeft:40,paddingRight:40,margin:20,backgroundColor:"#1F1F1F",alignItems:"center"},button:{margin:20,padding:10,backgroundColor:"#ffA812"},buttonText:{color:"black",fontWeight:"bold",textAlign:"center"},modalText:{color:"white",fontWeight:"bold",textAlign:"center",fontSize:30},modalContent:{color:"white",textAlign:"center",fontSize:20,paddingTop:15,width:400}});function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x()(e);if(t){var o=x()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j()(this,n)}}var F=function(e){b()(n,e);var t=B(n);function n(e){var r;return a()(this,n),(r=t.call(this,e)).state={board:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],youWon:!1,moves:0,help:!1},r._clickTile=r._clickTile.bind(h()(r)),r._randomize(),r}return u()(n,[{key:"_clickTile",value:function(e){var t=this.state.board;if(-1!==t[e]){if(t[e]=0===t[e]?1:0,e>=4)switch(t[e-4]){case 0:t[e-4]=1;break;case 1:t[e-4]=0}if(e<=15)switch(t[e+4]){case 0:t[e+4]=1;break;case 1:t[e+4]=0}if(e%4!==0)switch(t[e-1]){case 0:t[e-1]=1;break;case 1:t[e-1]=0}if(e%4!==3)switch(t[e+1]){case 0:t[e+1]=1;break;case 1:t[e+1]=0}this.setState({board:t,moves:this.state.moves+1,youWon:this._hasWon(),help:!1})}}},{key:"_randomize",value:function(){for(var e=this.state.board,t=0;t<e.length;t++){(t%4===0||t%4===3||t<4||t>15)&&.6,e[t]=Math.random()>.9?-1:0}for(var n=0;n<e.length;n++)Math.random()>.4&&this._clickTile(n);this.setState({board:e,youWon:this._hasWon(),moves:0,help:!1})}},{key:"_hasWon",value:function(){for(var e=0;e<this.state.board.length;e++)if(1===this.state.board[e])return!1;return console.log("You won!"),!0}},{key:"_renderRows",value:function(){for(var e=[],t=0;t<5;++t)e.push(Object(O.jsx)(c.a,{style:L.row,children:this._renderRow(t)},t));return e}},{key:"_renderRow",value:function(e){for(var t=[],n=0;n<4;++n)t.push(Object(O.jsx)(k,{index:4*e+n,value:this.state.board[4*e+n],onPress:this._clickTile},4*e+n));return t}},{key:"render",value:function(){var e=this;return Object(O.jsxs)(c.a,{style:L.container,children:[this._renderRows(),Object(O.jsx)(T,{visible:this.state.youWon,onPress:function(){return e._randomize()}}),Object(O.jsx)(A,{visible:this.state.help,onPress:function(){return e.setState({help:!1})}}),Object(O.jsxs)(c.a,{style:{flexDirection:"row"},children:[Object(O.jsx)(v.a,{style:L.button,onPress:function(){return e._randomize()},children:Object(O.jsx)(g.a,{style:L.button_text,children:"New Game"})}),Object(O.jsx)(v.a,{style:L.button,onPress:function(){return e.setState({help:!0})},children:Object(O.jsx)(g.a,{style:L.button_text,children:"Help"})})]})]})}}]),n}(o.Component),L=i.a.create({row:{flexDirection:"row",width:"100%"},button:{margin:10,height:40,justifyContent:"center",textAlign:"center",alignItems:"center",width:120,backgroundColor:"#ffA812"},container:{alignItems:"center",justifyContent:"center"},button_text:{fontSize:15,fontWeight:"bold"}});function V(){return Object(O.jsx)(c.a,{style:D.container,children:Object(O.jsx)(g.a,{style:D.text,children:"Lights Out!"})})}var D=i.a.create({container:{paddingBottom:30},text:{fontSize:60,fontWeight:"bold",color:"white"}});function M(){return Object(O.jsx)(c.a,{style:q.container,children:Object(O.jsxs)(g.a,{style:q.text,children:["Developed by ",Object(O.jsx)(g.a,{onPress:function(){return W.a.openURL("https://www.seanstilwell.ca")},style:q.link,children:"Sean Stilwell"})]})})}var q=i.a.create({text:{fontSize:20,color:"white"},link:{color:"#ffA812"}});var H=i.a.create({container:{flex:1,backgroundColor:"#1F1F1F",alignItems:"center",justifyContent:"center"}});Object(r.a)((function(){return Object(O.jsxs)(c.a,{style:H.container,children:[Object(O.jsx)(V,{}),Object(O.jsx)(F,{}),Object(O.jsx)(M,{})]})}))},77:function(e,t,n){e.exports=n(103)},85:function(e,t,n){e.exports=n.p+"static/media/LightOff.faa22160.png"},86:function(e,t,n){e.exports=n.p+"static/media/LightOn.5e01bec4.png"},87:function(e,t,n){e.exports=n.p+"static/media/LightInactive.e799a455.png"}},[[77,1,2]]]);
//# sourceMappingURL=app.409cfc53.chunk.js.map