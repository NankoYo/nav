import{b as B,c as J}from"./chunk-6BAA23AW.js";import{Q as y,R as W,S as $,X as Z,Z as P,ba as Q,eb as q,fb as H,gb as K,ua as G}from"./chunk-6UQELOH5.js";import{Hc as A,Ma as I,Mb as O,Nb as l,Ob as F,Pb as m,Qa as x,Rb as j,Uc as U,Xc as z,Yb as C,bc as g,cc as u,dc as v,ec as w,fc as _,ha as a,ma as N,mc as d,oa as D,pb as c,q as k,qb as s,rc as L,sc as R,tc as V,w as E,x as f,xb as M,yb as T,yc as S,zc as b}from"./chunk-QJD5Q3TO.js";var re=["switchElement"];function se(i,r){i&1&&v(0,"nz-icon",3)}function ae(i,r){if(i&1&&(w(0),S(1),_()),i&2){let o=d(2);c(),b(o.nzCheckedChildren)}}function ce(i,r){if(i&1&&l(0,ae,2,1,"ng-container",6),i&2){let o=d();m("nzStringTemplateOutlet",o.nzCheckedChildren)}}function le(i,r){if(i&1&&(w(0),S(1),_()),i&2){let o=d(2);c(),b(o.nzUnCheckedChildren)}}function de(i,r){if(i&1&&l(0,le,2,1,"ng-container",6),i&2){let o=d();m("nzStringTemplateOutlet",o.nzUnCheckedChildren)}}var he="switch",me=(()=>{let i,r=[],o=[];return class p{static{let e=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;i=[$()],E(null,null,i,{kind:"field",name:"nzSize",static:!1,private:!1,access:{has:t=>"nzSize"in t,get:t=>t.nzSize,set:(t,n)=>{t.nzSize=n}},metadata:e},r,o),e&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:e})}nzConfigService;host;ngZone;cdr;focusMonitor;directionality;_nzModuleName=he;isChecked=!1;onChange=()=>{};onTouched=()=>{};switchElement;nzLoading=!1;nzDisabled=!1;nzControl=!1;nzCheckedChildren=null;nzUnCheckedChildren=null;nzSize=f(this,r,"default");nzId=(f(this,o),null);dir="ltr";destroy$=new k;isNzDisableFirstChange=!0;updateValue(e){this.isChecked!==e&&(this.isChecked=e,this.onChange(this.isChecked))}focus(){this.focusMonitor.focusVia(this.switchElement.nativeElement,"keyboard")}blur(){this.switchElement.nativeElement.blur()}constructor(e,t,n,h,Y,ee){this.nzConfigService=e,this.host=t,this.ngZone=n,this.cdr=h,this.focusMonitor=Y,this.directionality=ee}ngOnInit(){this.directionality.change.pipe(a(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value,y(this.host.nativeElement,"click").pipe(a(this.destroy$)).subscribe(e=>{e.preventDefault(),!(this.nzControl||this.nzDisabled||this.nzLoading)&&this.ngZone.run(()=>{this.updateValue(!this.isChecked),this.cdr.markForCheck()})}),y(this.switchElement.nativeElement,"keydown").pipe(a(this.destroy$)).subscribe(e=>{if(this.nzControl||this.nzDisabled||this.nzLoading)return;let{keyCode:t}=e;t!==37&&t!==39&&t!==32&&t!==13||(e.preventDefault(),this.ngZone.run(()=>{t===37?this.updateValue(!1):t===39?this.updateValue(!0):(t===32||t===13)&&this.updateValue(!this.isChecked),this.cdr.markForCheck()}))})}ngAfterViewInit(){this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe(a(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())})}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}writeValue(e){this.isChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}static \u0275fac=function(t){return new(t||p)(s(W),s(x),s(I),s(U),s(G),s(Q))};static \u0275cmp=M({type:p,selectors:[["nz-switch"]],viewQuery:function(t,n){if(t&1&&L(re,7),t&2){let h;R(h=V())&&(n.switchElement=h.first)}},inputs:{nzLoading:[2,"nzLoading","nzLoading",z],nzDisabled:[2,"nzDisabled","nzDisabled",z],nzControl:[2,"nzControl","nzControl",z],nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize",nzId:"nzId"},exportAs:["nzSwitch"],features:[A([{provide:K,useExisting:N(()=>p),multi:!0}]),O],decls:8,vars:15,consts:[["switchElement",""],["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode"],[1,"ant-switch-handle"],["nzType","loading",1,"ant-switch-loading-icon"],[1,"ant-switch-inner"],[1,"ant-click-animating-node"],[4,"nzStringTemplateOutlet"]],template:function(t,n){t&1&&(g(0,"button",1,0)(2,"span",2),l(3,se,1,0,"nz-icon",3),u(),g(4,"span",4),l(5,ce,1,1,"ng-container")(6,de,1,1,"ng-container"),u(),v(7,"div",5),u()),t&2&&(j("ant-switch-checked",n.isChecked)("ant-switch-loading",n.nzLoading)("ant-switch-disabled",n.nzDisabled)("ant-switch-small",n.nzSize==="small")("ant-switch-rtl",n.dir==="rtl"),m("disabled",n.nzDisabled)("nzWaveExtraNode",!0),F("id",n.nzId),c(3),C(n.nzLoading?3:-1),c(2),C(n.isChecked?5:6))},dependencies:[J,B,P,Z,H,q],encapsulation:2,changeDetection:0})}})(),Le=(()=>{class i{static \u0275fac=function(X){return new(X||i)};static \u0275mod=T({type:i});static \u0275inj=D({imports:[me]})}return i})();export{me as a,Le as b};
