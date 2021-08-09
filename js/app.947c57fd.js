(function(e){function t(t){for(var n,o,a=t[0],u=t[1],l=t[2],d=0,m=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,a=1;a<s.length;a++){var u=s[a];0!==i[u]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=u;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},1551:function(e,t,s){"use strict";s("6861")},"5c0b":function(e,t,s){"use strict";s("9c0c")},6861:function(e,t,s){},"697f":function(e,t,s){},"720a":function(e,t,s){},"7c4d":function(e,t,s){"use strict";s("720a")},"85a1":function(e,t,s){},"9c0c":function(e,t,s){},c880:function(e,t,s){"use strict";s("697f")},c9d4:function(e,t,s){},cd49:function(e,t,s){"use strict";s.r(t);var n=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"controls"},[s("label",{staticClass:"load-file"},[s("input",{ref:"file",attrs:{type:"file",accept:"application/json"},on:{change:e.loadJson}}),e._v(" Load JSON ")]),s("button",{on:{click:e.save}},[e._v("Save JSON")]),s("button",{on:{click:e.clear}},[e._v("Clear")])]),s("h2",[e._v("Settings")]),s("test-settings"),s("h2",[e._v("Questions")]),s("ul",{staticClass:"test-questions"},[e._l(e.questions,(function(t,n){return s("test-question",{key:n,attrs:{index:n,value:t.text,edit:t.editMode},on:{edit:function(){return e.editMode({questionIndex:n,enable:!t.editMode})},remove:function(){return e.removeQuestion(n)},change:function(t){return e.updateQuestion({questionIndex:n,data:{text:t}})}}},[e._l(t.answers,(function(i,r){return s("test-answer",{key:r,attrs:{questionIndex:n,text:i.text,correct:i.isCorrect,multiple:t.multiple,edit:t.editMode},on:{remove:function(){return e.removeAnswer({questionIndex:n,index:r})},change:function(t){return e.updateAnswer({questionIndex:n,index:r,data:t})}}})})),t.editMode?s("test-answer",{attrs:{questionIndex:n,multiple:t.multiple,edit:!0,isNew:!0},on:{add:function(t){return e.newAnswer({questionIndex:n,data:t})}}}):e._e()],2)})),0==e.questions.length?s("li",{staticClass:"controls"},[s("p",[e._v("There are no questions in test.")])]):e._e(),s("li",{staticClass:"controls"},[s("button",{on:{click:function(){return e.newQuestion(!1)}}},[e._v("Add question (single answer)")]),s("button",{on:{click:function(){return e.newQuestion(!0)}}},[e._v("Add question (multiple answers)")])])],2),s("div",{staticClass:"controls"},[s("button",{on:{click:e.save}},[e._v("Save JSON")]),s("button",{on:{click:e.clear}},[e._v("Clear")])])],1)},r=[],o=s("2f62"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"test-settings"},[s("li",[s("label",{attrs:{for:"tresholdPercentage"}},[e._v("Treshold percentage:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.tresholdPercentage,expression:"tresholdPercentage"}],attrs:{id:"tresholdPercentage",type:"number",min:"0",max:"100"},domProps:{value:e.tresholdPercentage},on:{input:function(t){t.target.composing||(e.tresholdPercentage=t.target.value)}}})]),s("li",[s("label",{attrs:{for:"numberOfQuestions"}},[e._v("Number of questions: ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.numberOfQuestions,expression:"numberOfQuestions"}],attrs:{id:"numberOfQuestions",type:"number"},domProps:{value:e.numberOfQuestions},on:{input:function(t){t.target.composing||(e.numberOfQuestions=t.target.value)}}})]),s("li",[s("label",{attrs:{for:"maxAttemptsNumber"}},[e._v("Max attempts:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.maxAttemptsNumber,expression:"maxAttemptsNumber"}],attrs:{id:"maxAttemptsNumber",type:"number"},domProps:{value:e.maxAttemptsNumber},on:{input:function(t){t.target.composing||(e.maxAttemptsNumber=t.target.value)}}})]),s("li",[s("label",{attrs:{for:"strictAttemptsMode"}},[e._v("Strict attempts mode:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.strictAttemptsMode,expression:"strictAttemptsMode"}],attrs:{id:"strictAttemptsMode",type:"checkbox"},domProps:{checked:Array.isArray(e.strictAttemptsMode)?e._i(e.strictAttemptsMode,null)>-1:e.strictAttemptsMode},on:{change:function(t){var s=e.strictAttemptsMode,n=t.target,i=!!n.checked;if(Array.isArray(s)){var r=null,o=e._i(s,r);n.checked?o<0&&(e.strictAttemptsMode=s.concat([r])):o>-1&&(e.strictAttemptsMode=s.slice(0,o).concat(s.slice(o+1)))}else e.strictAttemptsMode=i}}})])])},u=[],l=n["a"].extend({name:"TestSettings",computed:{tresholdPercentage:{get(){return this.$store.state.testSettings.tresholdPercentage},set(e){this.$store.dispatch("setSettings",{tresholdPercentage:Number(e)})}},numberOfQuestions:{get(){return this.$store.state.testSettings.numberOfQuestions},set(e){this.$store.dispatch("setSettings",{numberOfQuestions:Number(e)})}},maxAttemptsNumber:{get(){return this.$store.state.testSettings.maxAttemptsNumber},set(e){this.$store.dispatch("setSettings",{maxAttemptsNumber:Number(e)})}},strictAttemptsMode:{get(){return this.$store.state.testSettings.strictAttemptsMode},set(e){this.$store.dispatch("setSettings",{strictAttemptsMode:e})}}}}),c=l,d=(s("c880"),s("2877")),m=Object(d["a"])(c,a,u,!1,null,null,null),p=m.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"test-question"},[s("span",[e._v(e._s(e.num))]),s("editable-text",{staticClass:"question-text",attrs:{edit:e.edit,multiline:!0,placeholder:"Please, write the question here"},model:{value:e.questionValue,callback:function(t){e.questionValue=t},expression:"questionValue"}}),s("button",{attrs:{title:"Delete question"},on:{click:function(t){return e.$emit("remove")}}},[e._v("✖")]),s("button",{attrs:{title:e.edit?"OK":"Edit"},on:{click:function(t){return e.$emit("edit")}}},[e._v(e._s(e.edit?"✔":"✎"))]),s("ul",{staticClass:"test-answers"},[e._t("default")],2)],1)},f=[],b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"editable-text"},[e.edit&&!e.multiline?s("input",{ref:"editField",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value},on:{change:function(t){return e.inputHandler(t.target.value)}}}):e.edit?s("textarea",{ref:"editMultiField",attrs:{placeholder:e.placeholder},domProps:{value:e.value},on:{change:function(t){return e.inputHandler(t.target.value)}}}):s("span",[e._v(e._s(e.value))])])},v=[],x=n["a"].extend({name:"EditableText",props:{edit:Boolean,value:String,multiline:Boolean,placeholder:String},methods:{inputHandler(e){this.$emit("input",e)}},watch:{edit(e){e&&this.$nextTick(()=>{this.multiline?this.$refs["editMultiField"].focus():this.$refs["editField"].focus()})}}}),g=x,w=(s("ff8c"),Object(d["a"])(g,b,v,!1,null,null,null)),q=w.exports,A=n["a"].extend({name:"TestQuestion",components:{EditableText:q},props:{edit:Boolean,value:String,index:Number},computed:{questionValue:{get(){return this.value},set(e){this.$emit("change",e)}},num(){return`#${this.index<9?"0":""}${this.index+1}`}}}),_=A,N=(s("1551"),Object(d["a"])(_,h,f,!1,null,null,null)),O=N.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"test-answer"},[e.isNew?s("h4",[e._v("Add new answer:")]):e._e(),s("editable-mark",{staticClass:"answer-mark",attrs:{value:e.isNew?e.newData.isCorrect:e.correct,edit:e.edit,group:e.group,multiple:e.multiple},on:{input:e.changeMark}}),s("editable-text",{staticClass:"answer-text",attrs:{value:e.isNew?e.newData.text:e.text,edit:e.edit,placeholder:"Please, write the answer here"},on:{input:e.changeText}}),e.edit&&!e.isNew?s("button",{attrs:{title:"Delete answer"},on:{click:function(t){return e.$emit("remove")}}},[e._v("✖")]):e._e(),e.edit&&e.isNew?s("button",{attrs:{title:"Add new answer"},on:{click:e.addNew}},[e._v("✚")]):e._e()],1)},M=[],k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"editable-mark"},[e.edit?s("input",{attrs:{type:e.multiple?"checkbox":"radio",name:e.group},domProps:{checked:e.value},on:{change:e.checkHandler}}):s("span",{class:{correct:e.value}},[e._v(" "+e._s(e.value?"✔":"✘")+" ")])])},Q=[],y=n["a"].extend({name:"EditableMark",props:{edit:Boolean,value:Boolean,group:String,multiple:Boolean},methods:{checkHandler(e){this.$emit("input",e.target.checked)}}}),$=y,C=(s("d52e"),Object(d["a"])($,k,Q,!1,null,null,null)),P=C.exports,j=n["a"].extend({name:"TestAnswer",components:{EditableMark:P,EditableText:q},props:{edit:Boolean,questionIndex:Number,text:String,correct:Boolean,multiple:Boolean,isNew:Boolean},data(){return{group:void 0!==this.questionIndex?"q-"+this.questionIndex:void 0,newData:{text:"",isCorrect:!1}}},methods:{addNew(){this.$emit("add",this.newData),this.$nextTick(()=>{this.newData.text="",this.newData.isCorrect=!1})},changeMark(e){this.isNew?this.newData.isCorrect=e:this.$emit("change",{text:this.text,isCorrect:e})},changeText(e){this.isNew?this.newData.text=e:this.$emit("change",{text:e,isCorrect:this.correct})}}}),I=j,E=(s("7c4d"),Object(d["a"])(I,S,M,!1,null,null,null)),T=E.exports,B=n["a"].extend({name:"App",components:{TestSettings:p,TestQuestion:O,TestAnswer:T},computed:{questions(){return this.$store.state.questions}},methods:Object.assign(Object.assign({},Object(o["b"])(["editMode","newQuestion","removeQuestion","removeAnswer","newAnswer","updateAnswer","updateQuestion","save","clear"])),{loadJson(e){const t=e.target;t.files&&(this.$store.dispatch("load",t.files[0]),this.$nextTick(()=>{t.value=""}))}}),mounted(){this.$store.dispatch("restore")}}),J=B,D=(s("5c0b"),Object(d["a"])(J,i,r,!1,null,null,null)),H=D.exports,F=s("9ab4");function V({text:e,multiple:t,answers:s}){return{question:e,multiple:t,answers:s.map(e=>e.text)}}function L({testSettings:e,questions:t}){return{public:Object.assign(Object.assign({},e),{questions:t.map(V)}),answers:t.map(e=>e.answers.map((e,t)=>e.isCorrect?t:-1).filter(e=>e>=0))}}const R=document.createElement("a");function U(e){const t=JSON.stringify(L(e),null,2),s=new Blob([t],{type:"application/json"});R.href=URL.createObjectURL(s),R.download=e.fileName,R.click()}function K(e){return{maxAttemptsNumber:e.public.maxAttemptsNumber,numberOfQuestions:e.public.numberOfQuestions,strictAttemptsMode:e.public.strictAttemptsMode,tresholdPercentage:e.public.tresholdPercentage}}function z(e){return e.public.questions.map(({question:t,answers:s,multiple:n},i)=>({text:t,multiple:n,editMode:!1,answers:s.map((t,s)=>({text:t,isCorrect:e.answers[i].includes(s)}))}))}n["a"].use(o["a"]);const G={tresholdPercentage:90,numberOfQuestions:10,maxAttemptsNumber:2,strictAttemptsMode:!1},W=[];var X=new o["a"].Store({state:{fileName:"new-test.json",testSettings:Object.assign({},G),questions:[...W]},mutations:{setSettings({testSettings:e},t){var s,n,i,r;e.maxAttemptsNumber=null!==(s=t.maxAttemptsNumber)&&void 0!==s?s:e.maxAttemptsNumber,e.numberOfQuestions=null!==(n=t.numberOfQuestions)&&void 0!==n?n:e.numberOfQuestions,e.strictAttemptsMode=null!==(i=t.strictAttemptsMode)&&void 0!==i?i:e.strictAttemptsMode,e.tresholdPercentage=null!==(r=t.tresholdPercentage)&&void 0!==r?r:e.tresholdPercentage},addQuestion({questions:e},t){e.push(Object.assign({},t))},removeQuestion({questions:e},t){e.splice(t,1)},updateQuestion({questions:e},t){var s,n,i;e[t.questionIndex].text=null!==(s=t.data.text)&&void 0!==s?s:e[t.questionIndex].text,e[t.questionIndex].editMode=null!==(n=t.data.editMode)&&void 0!==n?n:e[t.questionIndex].editMode,e[t.questionIndex].multiple=null!==(i=t.data.multiple)&&void 0!==i?i:e[t.questionIndex].multiple},addAnswer({questions:e},t){t.data.isCorrect&&!e[t.questionIndex].multiple&&e[t.questionIndex].answers.forEach(e=>e.isCorrect=!1),e[t.questionIndex].answers.push(Object.assign({},t.data))},removeAnswer({questions:e},t){e[t.questionIndex].answers.splice(t.index,1)},updateAnswer({questions:e},t){var s;e[t.questionIndex].answers[t.index].text=null!==(s=t.data.text)&&void 0!==s?s:e[t.questionIndex].answers[t.index].text,t.data.isCorrect&&!e[t.questionIndex].multiple&&(e[t.questionIndex].answers.forEach(e=>e.isCorrect=!1),e[t.questionIndex].answers[t.index].isCorrect=t.data.isCorrect)},changeEditMode({questions:e},t){t.enable&&e.forEach(e=>e.editMode=!1),e[t.questionIndex].editMode=t.enable},setState(e,{fileName:t,data:s}){e.testSettings=K(s),e.questions=z(s),e.fileName=t},restoreState(e,{testSettings:t,questions:s,fileName:n}){e.testSettings=t,e.questions=s,e.fileName=n},clearState(e){e.testSettings=Object.assign({},G),e.fileName="new-test.json",e.questions=[...W]}},actions:{setSettings({commit:e,dispatch:t},s){e("setSettings",s),t("backup")},newQuestion({commit:e,state:t,dispatch:s},n){const i={text:"Question "+(t.questions.length+1),multiple:n,answers:[],editMode:!1};e("addQuestion",i),e("changeEditMode",{questionIndex:t.questions.length-1,enable:!0}),s("backup")},removeQuestion({commit:e,dispatch:t},s){e("removeQuestion",s),t("backup")},updateQuestion({commit:e,dispatch:t},s){e("updateQuestion",s),t("backup")},editMode({commit:e,dispatch:t},s){e("changeEditMode",s),t("backup")},newAnswer({commit:e,dispatch:t},s){e("addAnswer",s),t("backup")},removeAnswer({commit:e,dispatch:t},s){e("removeAnswer",s),t("backup")},updateAnswer({commit:e,dispatch:t},s){e("updateAnswer",s),t("backup")},save({state:e}){U(e)},load({commit:e,dispatch:t},s){return Object(F["a"])(this,void 0,void 0,(function*(){const n=yield s.text(),i=JSON.parse(n);e("setState",{fileName:s.name,data:i}),t("backup")}))},backup({state:e}){const t=JSON.stringify(e);window.localStorage.setItem("editor-state",t)},restore({commit:e}){const t=window.localStorage.getItem("editor-state");if(!t)return;const s=JSON.parse(t);e("restoreState",s)},clear({commit:e}){e("clearState"),window.localStorage.removeItem("editor-state")}}});n["a"].config.productionTip=!1,new n["a"]({store:X,render:e=>e(H)}).$mount("#app")},d52e:function(e,t,s){"use strict";s("c9d4")},ff8c:function(e,t,s){"use strict";s("85a1")}});
//# sourceMappingURL=app.947c57fd.js.map