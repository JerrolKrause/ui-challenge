"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[718],{2718:(mn,d,l)=>{l.r(d),l.d(d,{HomeModule:()=>cn});var g=l(2619),f=l(4182),p=l(6814),b=l(9502),P=l(2414),n=l(9212),_=l(1993),i=l(95),x=l(7398),O=l(5619),y=l(2096),s=l(8180),M=l(4352),Z=l(5211),A=l(9360),N=l(8251),T=l(2420),k=l(975),U=l(1631);function C(t,r){return r?e=>(0,Z.z)(r.pipe((0,s.q)(1),function F(){return(0,A.e)((t,r)=>{t.subscribe((0,N.x)(r,T.Z))})}()),e.pipe(C(t))):(0,U.z)((e,a)=>t(e,a).pipe((0,s.q)(1),(0,k.h)(e)))}var w=l(4825),q=l(1474);const S={waiting:!1,success:!1,error:!1};let E=(()=>{class t{constructor(e){this.http=e,this.devMode=!0,this._apiState$=new O.X(S),this.apiState$=this._apiState$.pipe()}submitLoanPaymentForm(e){this.stateChange({waiting:!0,success:!1,error:!1}),(0,y.of)(null).pipe((0,s.q)(1)),(this.devMode?(0,y.of)({}).pipe((0,s.q)(1),function I(t,r=M.z){const e=(0,w.H)(t,r);return C(()=>e)}(1e3)):this.http.post("http://www.apierver/loan-application",e)).subscribe(()=>{this.stateChange({waiting:!1,success:!0})},()=>{this.stateChange({waiting:!1,error:!0})})}stateChange(e){this._apiState$.pipe((0,s.q)(1)).subscribe(a=>this._apiState$.next({...a,...e}))}static#n=this.\u0275fac=function(a){return new(a||t)(n.LFG(q.eN))};static#t=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var h=l(6651);function L(t,r){if(1&t&&(n.TgZ(0,"div",1),n._uU(1),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.hij("",e.label," is required")}}function B(t,r){1&t&&(n.TgZ(0,"div",1),n._uU(1,"Only numbers are allowed"),n.qZA())}function D(t,r){if(1&t&&(n.TgZ(0,"div",1),n._uU(1),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.hij(" Please enter at least ",null==e.control||null==e.control.errors||null==e.control.errors.minlength?null:e.control.errors.minlength.requiredLength," numbers\n")}}function J(t,r){if(1&t&&(n.TgZ(0,"div",1),n._uU(1),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.hij(" Please enter a max of ",null==e.control||null==e.control.errors||null==e.control.errors.maxlength?null:e.control.errors.maxlength.requiredLength," numbers\n")}}function Q(t,r){1&t&&(n.TgZ(0,"div",1),n.Hsn(1),n.qZA())}const V=["*"];let z=(()=>{class t{constructor(){this.label="This field",this.control=null,this.showCustomError=!1}ngOnInit(){}static#n=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-error"]],inputs:{label:"label",control:"control",showCustomError:"showCustomError"},ngContentSelectors:V,decls:5,vars:5,consts:[["class","error",4,"ngIf"],[1,"error"]],template:function(a,o){1&a&&(n.F$t(),n.YNc(0,L,2,1,"div",0)(1,B,2,0,"div",0)(2,D,2,1,"div",0)(3,J,2,1,"div",0)(4,Q,2,0,"div",0)),2&a&&(n.Q6J("ngIf",(null==o.control||null==o.control.errors?null:o.control.errors.required)&&(null==o.control?null:o.control.touched)),n.xp6(1),n.Q6J("ngIf",(null==o.control||null==o.control.errors?null:o.control.errors.numbersOnly)&&(null==o.control?null:o.control.touched)),n.xp6(1),n.Q6J("ngIf",(null==o.control||null==o.control.errors?null:o.control.errors.minlength)&&(null==o.control?null:o.control.touched)),n.xp6(1),n.Q6J("ngIf",(null==o.control||null==o.control.errors?null:o.control.errors.maxlength)&&(null==o.control?null:o.control.touched)),n.xp6(1),n.Q6J("ngIf",o.showCustomError))},dependencies:[p.O5],styles:[".error[_ngcontent-%COMP%]{color:red;font-size:12px;padding:4px 8px;background-color:#fae7e9;border-top:1px solid #d7dadd}"]})}return t})();const K=()=>({severity:"success",summary:"Success",detail:"Loan payment made successfully"}),v=t=>[t];function $(t,r){1&t&&n._UZ(0,"p-messages",24),2&t&&n.Q6J("value",n.VKq(4,v,n.DdM(3,K)))("enableService",!1)("closable",!1)}const Y=()=>({severity:"error",summary:"Error",detail:"Error trying to make loan payment, please try again later"});function R(t,r){1&t&&n._UZ(0,"p-messages",24),2&t&&n.Q6J("value",n.VKq(4,v,n.DdM(3,Y)))("enableService",!1)("closable",!1)}const j=()=>({height:"6px"});function G(t,r){1&t&&n._UZ(0,"p-progressBar",25),2&t&&n.Akn(n.DdM(2,j))}function W(t,r){if(1&t&&(n.ynx(0),n.TgZ(1,"div",8)(2,"label",26),n._uU(3,"Routing Number"),n.qZA(),n._UZ(4,"input",27)(5,"app-error",28),n.qZA(),n.TgZ(6,"div",8)(7,"label",29),n._uU(8,"Bank Account Number"),n.qZA(),n._UZ(9,"input",30)(10,"app-error",31),n.qZA(),n.TgZ(11,"div",32)(12,"label",33),n._uU(13,"Confirm Bank Account Number"),n.qZA(),n._UZ(14,"input",34),n.TgZ(15,"app-error",35),n._uU(16," Bank Account Numbers must match "),n.qZA()(),n.BQk()),2&t){const e=n.oxw(2);let a,o,c,m;n.xp6(4),n.uIk("aria-invalid",null==(a=e.loanPaymentForm.get("routingNumber"))?null:a.invalid),n.xp6(1),n.Q6J("control",e.loanPaymentForm.get("routingNumber")),n.xp6(4),n.uIk("aria-invalid",null==(o=e.loanPaymentForm.get("bankAccountNumber"))?null:o.invalid),n.xp6(1),n.Q6J("control",e.loanPaymentForm.get("bankAccountNumber")),n.xp6(4),n.uIk("aria-invalid",null==(c=e.loanPaymentForm.get("confirmBankAccountNumber"))?null:c.invalid),n.xp6(1),n.Q6J("control",e.loanPaymentForm.get("confirmBankAccountNumber"))("showCustomError",(null==(m=e.loanPaymentForm.get("bankAccountNumber"))?null:m.touched)&&(null==(m=e.loanPaymentForm.get("confirmBankAccountNumber"))?null:m.touched)&&(null==(m=e.loanPaymentForm.get("bankAccountNumber"))?null:m.value)!==(null==(m=e.loanPaymentForm.get("confirmBankAccountNumber"))?null:m.value))}}function X(t,r){if(1&t&&(n.TgZ(0,"div",8)(1,"label",36),n._uU(2,"Card Number"),n.qZA(),n._UZ(3,"input",37)(4,"app-error",38),n.qZA(),n.TgZ(5,"div",8)(6,"label",39),n._uU(7,"Name On Card"),n.qZA(),n._UZ(8,"input",40)(9,"app-error",41),n.qZA(),n.TgZ(10,"div",42)(11,"div",43)(12,"label",44),n._uU(13,"Expiration Date"),n.qZA(),n._UZ(14,"input",45)(15,"app-error",46),n.qZA(),n.TgZ(16,"div",43)(17,"label",47),n._uU(18,"CVV"),n.qZA(),n._UZ(19,"input",48)(20,"app-error",49),n.qZA()()),2&t){const e=n.oxw(2);let a,o,c,m;n.xp6(3),n.uIk("aria-invalid",null==(a=e.loanPaymentForm.get("cardNumber"))?null:a.invalid),n.xp6(1),n.Q6J("control",e.loanPaymentForm.get("cardNumber")),n.xp6(4),n.uIk("aria-invalid",null==(o=e.loanPaymentForm.get("nameOnCard"))?null:o.invalid),n.xp6(1),n.Q6J("control",e.loanPaymentForm.get("nameOnCard")),n.xp6(5),n.uIk("aria-invalid",null==(c=e.loanPaymentForm.get("expirationDate"))?null:c.invalid),n.xp6(1),n.Q6J("control",e.loanPaymentForm.get("expirationDate")),n.xp6(4),n.uIk("aria-invalid",null==(m=e.loanPaymentForm.get("cvv"))?null:m.invalid),n.xp6(1),n.Q6J("control",e.loanPaymentForm.get("cvv"))}}function nn(t,r){1&t&&(n.ynx(0),n.TgZ(1,"h3"),n._uU(2,"Where can I find the CCV number?"),n.qZA(),n._UZ(3,"img",50),n.BQk())}function tn(t,r){1&t&&(n.TgZ(0,"h3"),n._uU(1," Where can I find the routing and"),n._UZ(2,"br"),n._uU(3," account number? "),n.qZA(),n._UZ(4,"img",51))}function en(t,r){if(1&t){const e=n.EpF();n.TgZ(0,"div",1)(1,"h1",2),n._uU(2,"One-time Loan Payment"),n.qZA(),n.TgZ(3,"p",3),n._uU(4,"Fill out the form below to complete your payment."),n.qZA(),n.TgZ(5,"form",4),n.NdJ("ngSubmit",function(){n.CHM(e);const o=n.oxw();return n.KtG(o.onSubmit())}),n.YNc(6,$,1,6,"p-messages",5)(7,R,1,6,"p-messages",5)(8,G,1,3,"p-progressBar",6),n.TgZ(9,"div",7)(10,"div",8)(11,"label",9),n._uU(12,"Loan Account Number"),n.qZA(),n._UZ(13,"input",10)(14,"app-error",11),n.qZA(),n.TgZ(15,"div",12)(16,"div",13)(17,"fieldset",8)(18,"label",9),n._uU(19,"Type of Account:"),n.qZA(),n.TgZ(20,"div",14)(21,"label",15),n._UZ(22,"input",16),n._uU(23," Checking "),n.qZA(),n.TgZ(24,"label"),n._UZ(25,"input",17),n._uU(26," Debit Card "),n.qZA()(),n._UZ(27,"app-error",18),n.qZA(),n.YNc(28,W,17,7,"ng-container",19)(29,X,21,8,"ng-template",null,20,n.W1O),n.qZA(),n.TgZ(31,"div",21),n.YNc(32,nn,4,0,"ng-container",19)(33,tn,5,0,"ng-template",null,22,n.W1O),n.qZA()()(),n.TgZ(35,"button",23),n._uU(36,"MAKE PAYMENT"),n.qZA()()()}if(2&t){const e=r.ngIf,a=n.MAs(30),o=n.MAs(34),c=n.oxw();let m;n.xp6(5),n.Q6J("formGroup",c.loanPaymentForm),n.xp6(1),n.Q6J("ngIf",null==e.apiState?null:e.apiState.success),n.xp6(1),n.Q6J("ngIf",null==e.apiState?null:e.apiState.error),n.xp6(1),n.Q6J("ngIf",null==e.apiState?null:e.apiState.waiting),n.xp6(5),n.uIk("aria-invalid",null==(m=c.loanPaymentForm.get("loanAccountNumber"))?null:m.invalid),n.xp6(1),n.Q6J("control",c.loanPaymentForm.get("loanAccountNumber")),n.xp6(13),n.Q6J("control",c.loanPaymentForm.get("accountType")),n.xp6(1),n.Q6J("ngIf",!e.isDebit)("ngIfElse",a),n.xp6(4),n.Q6J("ngIf",e.isDebit)("ngIfElse",o),n.xp6(3),n.Q6J("disabled",null==e.apiState?null:e.apiState.waiting)}}const on=(t,r)=>({isDebit:t,apiState:r});let an=(()=>{class t{constructor(e,a){this.formBuilder=e,this.svc=a,this.loanPaymentForm=this.formBuilder.group({loanAccountNumber:[null,[i.Validators.required,t=>{const r=t.value;return r&&!/^\d+$/.test(r)?{numbersOnly:!0}:null}]],accountType:["Checking",i.Validators.required],routingNumber:[null,[i.Validators.required,t=>{const r=t.value;return r&&!/^\d+$/.test(r)?{numbersOnly:!0}:null},i.Validators.maxLength(9)]],bankAccountNumber:[null,[i.Validators.required,t=>{const r=t.value;return r&&!/^\d+$/.test(r)?{numbersOnly:!0}:null}]],confirmBankAccountNumber:[null,[i.Validators.required,t=>{const r=t.value;return r&&!/^\d+$/.test(r)?{numbersOnly:!0}:null}]],cardNumber:[null,[i.Validators.required,t=>{const r=t.value;return r&&!/^\d+$/.test(r)?{numbersOnly:!0}:null}]],nameOnCard:[null,[i.Validators.required,t=>{const r=t.value;return r&&!/^\d+$/.test(r)?{numbersOnly:!0}:null}]],expirationDate:[null,[i.Validators.required]],cvv:[null,[i.Validators.required,t=>{const r=t.value;return r&&!/^\d+$/.test(r)?{numbersOnly:!0}:null},i.Validators.maxLength(3),i.Validators.minLength(3)]]}),this.checkingKeys=["routingNumber","bankAccountNumber","confirmBankAccountNumber"],this.debitKeys=["cardNumber","nameOnCard","expirationDate","cvv"],this.isDebit$=this.loanPaymentForm.get("accountType")?.valueChanges.pipe((0,x.U)(o=>"DebitCard"===o)),this.isDebit$?.pipe((0,_.sL)()).subscribe(o=>{o?(this.checkingKeys.forEach(c=>this.loanPaymentForm.get(c)?.disable()),this.debitKeys.forEach(c=>this.loanPaymentForm.get(c)?.enable())):(this.checkingKeys.forEach(c=>this.loanPaymentForm.get(c)?.enable()),this.debitKeys.forEach(c=>this.loanPaymentForm.get(c)?.disable()))})}ngOnInit(){}onSubmit(){this.loanPaymentForm.markAllAsTouched(),this.loanPaymentForm.patchValue(this.loanPaymentForm.value),this.loanPaymentForm.valid?this.svc.submitLoanPaymentForm(this.loanPaymentForm.value):window.scrollTo({top:0})}ngOnDestroy(){}static#n=this.\u0275fac=function(a){return new(a||t)(n.Y36(i.FormBuilder),n.Y36(E))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-loan-payment"]],decls:3,vars:8,consts:[["class","loan-payment-container container","role","form",4,"ngIf"],["role","form",1,"loan-payment-container","container"],["id","formTitle"],["id","formDescription"],["novalidate","",3,"formGroup","ngSubmit"],[3,"value","enableService","closable",4,"ngIf"],["styleClass","mb-2","mode","indeterminate",3,"style",4,"ngIf"],[1,"mb-3"],[1,"form-field"],["for","loanAccountNumber"],["type","text","formControlName","loanAccountNumber","id","loanAccountNumber"],["label","Loan Account Number",3,"control"],[1,"form-layout"],[1,"form-layout-fields"],[1,"d-flex","radio"],[1,"me-4"],["type","radio","formControlName","accountType","value","Checking"],["type","radio","formControlName","accountType","value","DebitCard"],[3,"control"],[4,"ngIf","ngIfElse"],["debit",""],[1,"form-layout-image","text-center"],["credit",""],["type","submit","aria-labelledby","Submit the form to make a payment",1,"make-payment-btn",3,"disabled"],[3,"value","enableService","closable"],["styleClass","mb-2","mode","indeterminate"],["for","routingNumber"],["type","text","formControlName","routingNumber","id","routingNumber","maxlength","9"],["label","Routing Number",3,"control"],["for","bankAccountNumber"],["type","text","formControlName","bankAccountNumber","id","bankAccountNumber"],["label","Bank Account Number",3,"control"],[1,"form-field","border-bottom"],["for","confirmBankAccountNumber"],["type","text","formControlName","confirmBankAccountNumber","id","confirmBankAccountNumber"],["label","Confirm Bank Account Number",3,"control","showCustomError"],["for","cardNumber"],["type","text","formControlName","cardNumber","id","cardNumber"],["label","Card Number",3,"control"],["for","nameOnCard"],["type","text","formControlName","nameOnCard","id","nameOnCard"],["label","Name On Card",3,"control"],[1,"debit-layout"],[1,"form-field","w-50"],["for","expirationDate"],["type","text","formControlName","expirationDate","id","expirationDate","placeholder","mm/dd/yyyy"],["label","Expiration Date",3,"control"],["for","cvv"],["type","text","formControlName","cvv","id","cvv","maxlength","3"],["label","CVV",3,"control"],["src","assets/images/debit.png","alt","Example debit card with CCV"],["src","assets/images/check.png","alt","Example check with routing number and accout number"]],template:function(a,o){1&a&&(n.YNc(0,en,37,12,"div",0),n.ALo(1,"async"),n.ALo(2,"async")),2&a&&n.Q6J("ngIf",n.WLB(5,on,n.lcZ(1,1,o.isDebit$),n.lcZ(2,3,o.svc.apiState$)))},dependencies:[p.O5,i.\u0275NgNoValidate,i.DefaultValueAccessor,i.RadioControlValueAccessor,i.NgControlStatus,i.NgControlStatusGroup,i.MaxLengthValidator,i.FormGroupDirective,i.FormControlName,b.Messages,h.k,z,p.Ov],styles:[".loan-payment-container[_ngcontent-%COMP%]{max-width:768px;margin:0 auto;font-family:Roboto,sans-serif;color:#000;background:#fff}.loan-payment-container[_ngcontent-%COMP%]   .debit-layout[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid #d7dadd}.loan-payment-container[_ngcontent-%COMP%]   .debit-layout[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]:last-child{border-left:0}.loan-payment-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{border:1px solid #d7dadd;border-bottom:0;color:#606060}.loan-payment-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #d7dadd}.loan-payment-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-size:12px;font-weight:700;margin-bottom:8px;padding:.5rem;padding-bottom:0}.loan-payment-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;font-weight:initial}.loan-payment-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .loan-payment-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{width:100%;padding:8px;font-size:14px;border:0;border-radius:4px}.loan-payment-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, .loan-payment-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{border-color:#66afe9;outline:none}.loan-payment-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[type=number].is-invalid[_ngcontent-%COMP%], .loan-payment-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[type=text].is-invalid[_ngcontent-%COMP%]{border-color:#dc3545}.loan-payment-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .radio-buttons[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;font-weight:400;margin-right:16px}.loan-payment-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .radio-buttons[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:4px}.loan-payment-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:#dc3545;font-size:12px;margin-top:4px}.loan-payment-container[_ngcontent-%COMP%]   .form-layout[_ngcontent-%COMP%]   .form-layout-image[_ngcontent-%COMP%]{padding:1rem;border:1px solid #d7dadd;border-top-width:0;background:#f4f7fc}@media (min-width: 768px){.loan-payment-container[_ngcontent-%COMP%]   .form-layout[_ngcontent-%COMP%]{display:flex}.loan-payment-container[_ngcontent-%COMP%]   .form-layout[_ngcontent-%COMP%]   .form-layout-fields[_ngcontent-%COMP%]{width:55%}.loan-payment-container[_ngcontent-%COMP%]   .form-layout[_ngcontent-%COMP%]   .form-layout-image[_ngcontent-%COMP%]{width:45%;border-left:0;border-top-width:1px}}.loan-payment-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;font-weight:700;margin-bottom:16px;color:#000}.loan-payment-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#000}.loan-payment-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:#000}.loan-payment-container[_ngcontent-%COMP%]   .formDescription[_ngcontent-%COMP%]{color:#000}.loan-payment-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.loan-payment-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;margin-bottom:24px}.loan-payment-container[_ngcontent-%COMP%]   .make-payment-btn[_ngcontent-%COMP%]{padding:12px;font-size:14px;font-weight:700;text-transform:uppercase;color:#fff;background-color:#00a39e;border:none;cursor:pointer;text-align:center;width:100%}@media (min-width: 768px){.loan-payment-container[_ngcontent-%COMP%]   .make-payment-btn[_ngcontent-%COMP%]{width:200px}}.loan-payment-container[_ngcontent-%COMP%]   .make-payment-btn[_ngcontent-%COMP%]:hover{background-color:#00a39e}.loan-payment-container[_ngcontent-%COMP%]   .make-payment-btn[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}"]})}return t})();const rn=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}ngOnDestroy(){}static#n=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],decls:4,vars:0,consts:[[1,"container-fluid","pt-5"],[1,"row"],[1,"col","col-12","col-md-12"]],template:function(a,o){1&a&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._UZ(3,"app-loan-payment"),n.qZA()()())},dependencies:[an],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}return t})(),title:(0,f.Z1)("Home")}],ln=P.Bz.forChild(rn);let cn=(()=>{class t{static#n=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[p.ez,f.m8,ln,g.eK,g.Uf,i.ReactiveFormsModule,b.MessagesModule,h.q]})}return t})()}}]);