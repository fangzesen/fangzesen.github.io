webpackJsonp([0],{431:function(a,l,n){"use strict";function e(a){return t["ɵvid"](0,[(a()(),t["ɵeld"](0,0,null,null,9,"light-content",[["titleName","新建流程"]],null,null,null,M.b,M.a)),t["ɵdid"](1,114688,null,0,L.a,[],{titleName:[0,"titleName"]},null),(a()(),t["ɵted"](-1,2,["\n  "])),(a()(),t["ɵeld"](3,0,null,2,5,"ion-grid",[["class","list-grid grid"]],null,null,null,null,null)),t["ɵdid"](4,16384,null,0,O.a,[],null,null),(a()(),t["ɵted"](-1,null,["\n    "])),(a()(),t["ɵeld"](6,0,null,null,1,"light-writer",[],null,null,null,A.b,A.a)),t["ɵdid"](7,770048,null,0,_.a,[j.a],{writerData:[0,"writerData"]},null),(a()(),t["ɵted"](-1,null,["\n  "])),(a()(),t["ɵted"](-1,2,["\n"])),(a()(),t["ɵted"](-1,null,["\n"])),(a()(),t["ɵeld"](11,0,null,null,5,"div",[["class","processbar"]],null,null,null,null,null)),(a()(),t["ɵted"](-1,null,["\n  "])),(a()(),t["ɵeld"](13,0,null,null,2,"a",[["class","task-button"],["color","secondary"],["full",""],["ion-button",""]],null,[[null,"click"]],function(a,l,n){var e=!0;if("click"===l){e=!1!==a.component.submitProcess()&&e}return e},U.b,U.a)),t["ɵdid"](14,1097728,null,0,z.a,[[8,""],T.a,t.ElementRef,t.Renderer],{color:[0,"color"],full:[1,"full"]},null),(a()(),t["ɵted"](-1,0,["提交"])),(a()(),t["ɵted"](-1,null,["\n"])),(a()(),t["ɵted"](-1,null,["\n"]))],function(a,l){var n=l.component;a(l,1,0,"新建流程");a(l,7,0,n.writeData);a(l,14,0,"secondary","")},null)}Object.defineProperty(l,"__esModule",{value:!0});var t=n(0),d=(n(1),n(49)),o=(n(12),n(89)),i=function(){function a(a,l,n,e,t,d){this.navCtrl=a,this.navParams=l,this.lightload=n,this.flowServcie=e,this.lightpop=t,this.http=d,this.sCode=this.navParams.data.item.Code}return a.prototype.ionViewDidLoad=function(){var a=this,l=this.lightload.showLoading("正在加载中...");this.flowServcie.getStartFlow(this.sCode).then(function(n){a.writerFlow=n,a.flowServcie.getWriterForm(a.writerFlow).then(function(n){l.instance&&l.dismiss(),a.writeData=d.b.toObject(n)}).catch(function(n){l.instance&&l.dismiss(),a.lightpop.errMessage(n),a.navCtrl.pop()})}).catch(function(n){l.instance&&l.dismiss(),a.navCtrl.pop()})},a.prototype.submitProcess=function(){this.flowServcie.submitFlow(this.navCtrl,this.writerFlow,this.writeData)},a}(),u=function(){return function(){}}(),r=n(314),m=n(315),s=n(316),p=n(317),c=n(318),f=n(319),h=n(320),g=n(321),w=n(322),v=n(324),b=n(325),C=n(323),R=n(326),P=n(327),k=n(328),y=n(329),D=n(330),E=n(331),F=n(332),N=n(333),S=n(334),M=n(50),L=n(43),O=n(171),A=n(340),_=n(111),j=n(45),U=n(22),z=n(18),T=n(2),W=n(14),G=n(13),I=n(106),J=n(65),V=n(64),q=t["ɵcrt"]({encapsulation:2,styles:[],data:{}}),x=t["ɵccf"]("page-work-new-process",i,function(a){return t["ɵvid"](0,[(a()(),t["ɵeld"](0,0,null,null,1,"page-work-new-process",[],null,null,null,e,q)),t["ɵdid"](1,49152,null,0,i,[W.a,G.a,I.a,J.a,V.a,o.e],null,null)],null,null)},{},{},[]),B=n(6),H=n(15),K=n(74),Q=n(42),X=n(76),Y=n(91),Z=n(90),$=n(37),aa=n(108),la=n(162),na=n(157),ea=n(243),ta=n(3),da=n(88),oa=n(152),ia=n(164),ua=n(32),ra=n(165),ma=n(149),sa=n(73),pa=n(151),ca=n(160),fa=n(161),ha=n(166),ga=n(148),wa=n(8),va=n(109),ba=n(150),Ca=n(107),Ra=n(30),Pa=n(153),ka=n(241),ya=n(110),Da=n(155),Ea=n(154),Fa=n(156),Na=n(242),Sa=n(159),Ma=n(158),La=n(245),Oa=n(240),Aa=n(244),_a=n(46),ja=n(163),Ua=n(92),za=n(24),Ta=n(28),Wa=n(75),Ga=n(72);n.d(l,"WorkNewProcessPageModuleNgFactory",function(){return Ia});var Ia=t["ɵcmf"](u,[],function(a){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[r.a,m.a,s.a,p.a,c.a,f.a,h.a,g.a,w.a,v.a,b.a,C.a,R.a,P.a,k.a,y.a,D.a,E.a,F.a,N.a,S.a,x]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,B.NgLocalization,B.NgLocaleLocalization,[t.LOCALE_ID,[2,B["ɵa"]]]),t["ɵmpd"](4608,H.p,H.p,[]),t["ɵmpd"](4608,H.d,H.d,[]),t["ɵmpd"](4608,o.c,o.c,[]),t["ɵmpd"](4608,o.i,o.b,[]),t["ɵmpd"](5120,o.l,o.m,[]),t["ɵmpd"](4608,o.k,o.k,[o.c,o.i,o.l]),t["ɵmpd"](4608,o.h,o.a,[]),t["ɵmpd"](5120,o.e,o.n,[o.k,o.h]),t["ɵmpd"](4608,K.RoundProgressService,K.RoundProgressService,[[2,Q.DOCUMENT]]),t["ɵmpd"](4608,X.RoundProgressEase,X.RoundProgressEase,[]),t["ɵmpd"](4608,Y.a,Y.a,[]),t["ɵmpd"](4608,Z.a,Z.a,[Y.a]),t["ɵmpd"](4608,$.a,$.a,[o.e,Z.a]),t["ɵmpd"](4608,aa.a,aa.a,[$.a]),t["ɵmpd"](4608,j.a,j.a,[$.a]),t["ɵmpd"](4608,la.a,la.a,[]),t["ɵmpd"](4608,na.a,na.a,[]),t["ɵmpd"](4608,ea.a,ea.a,[ta.a,na.a]),t["ɵmpd"](4608,V.a,V.a,[da.a]),t["ɵmpd"](4608,oa.a,oa.a,[ta.a,ia.a,ua.a,ea.a,V.a,ra.a]),t["ɵmpd"](4608,I.a,I.a,[ma.a]),t["ɵmpd"](4608,sa.a,sa.a,[]),t["ɵmpd"](4608,pa.a,pa.a,[]),t["ɵmpd"](4608,ca.a,ca.a,[]),t["ɵmpd"](4608,fa.a,fa.a,[ha.a]),t["ɵmpd"](4608,ga.a,ga.a,[wa.a]),t["ɵmpd"](4608,va.a,va.a,[ta.a]),t["ɵmpd"](4608,ba.a,ba.a,[]),t["ɵmpd"](4608,Ca.a,Ca.a,[ba.a,va.a,$.a,Y.a]),t["ɵmpd"](4608,Ra.a,Ra.a,[Z.a,la.a,oa.a,$.a,I.a,Y.a,sa.a,pa.a,ca.a,fa.a,ga.a,va.a,V.a,Ca.a]),t["ɵmpd"](4608,J.a,J.a,[j.a,Ra.a,I.a]),t["ɵmpd"](4608,Pa.a,Pa.a,[]),t["ɵmpd"](4608,ka.a,ka.a,[Pa.a,ta.a]),t["ɵmpd"](4608,ya.a,ya.a,[Ra.a,ka.a]),t["ɵmpd"](4608,Da.a,Da.a,[]),t["ɵmpd"](4608,Ea.a,Ea.a,[Da.a,ta.a]),t["ɵmpd"](4608,Fa.a,Fa.a,[]),t["ɵmpd"](4608,Na.a,Na.a,[Fa.a,ta.a,da.a]),t["ɵmpd"](4608,Sa.a,Sa.a,[]),t["ɵmpd"](4608,Ma.a,Ma.a,[ta.a,Sa.a]),t["ɵmpd"](4608,La.a,La.a,[]),t["ɵmpd"](512,B.CommonModule,B.CommonModule,[]),t["ɵmpd"](512,H.m,H.m,[]),t["ɵmpd"](512,H.e,H.e,[]),t["ɵmpd"](512,H.l,H.l,[]),t["ɵmpd"](512,Oa.a,Oa.a,[]),t["ɵmpd"](512,Oa.b,Oa.b,[]),t["ɵmpd"](512,o.f,o.f,[]),t["ɵmpd"](512,Aa.RoundProgressModule,Aa.RoundProgressModule,[]),t["ɵmpd"](512,_a.j,_a.j,[]),t["ɵmpd"](512,ja.b,ja.b,[]),t["ɵmpd"](512,Ua.e,Ua.e,[]),t["ɵmpd"](512,za.o,za.o,[]),t["ɵmpd"](512,Ta.f,Ta.f,[]),t["ɵmpd"](512,d.c,d.c,[]),t["ɵmpd"](512,u,u,[]),t["ɵmpd"](256,Wa.ROUND_PROGRESS_DEFAULTS,{radius:125,animation:"easeOutCubic",animationDelay:null,duration:500,stroke:15,color:"#45CCCE",background:"#EAEAEA",responsive:!1,clockwise:!0,semicircle:!1,rounded:!1},[]),t["ɵmpd"](256,Ga.a,i,[])])})}});