import{d as h,m as u,s as l,t as m}from"./chunk-IVKNQDWJ.js";import{a as p,b as c}from"./chunk-HMR6D4PY.js";import"./chunk-KIRPRCXL.js";import"./chunk-7X44HFL5.js";import{Wa as o,qb as s,rb as d,sb as r}from"./chunk-Q3C673SS.js";import"./chunk-JKOY2XUY.js";var g=class a{width=450;height=450;margin=40;radius=Math.min(this.width,this.height)/2-this.margin;svg;ngOnInit(){this.createSvg()}createSvg(){this.svg=h("figure#doughnut").append("svg").attr("width",this.width).attr("height",this.height).append("g").attr("transform","translate("+this.width/2+","+this.height/2+")");let e=Object.entries({a:9,b:20,c:30,d:8,e:12}).map(([t,v])=>({key:t,value:v})),n=u().domain(e.map(t=>t.key)).range(["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56"]),f=m()(e.map(t=>t.value));this.svg.selectAll("whatever").data(f).enter().append("path").attr("d",l().innerRadius(100).outerRadius(this.radius)).attr("fill",function(t){return n(t.value)}).attr("stroke","black").style("stroke-width","2px").style("opacity",.7)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=o({type:a,selectors:[["app-doughnut"]],decls:4,vars:0,consts:[[1,"grid","grid-cols-12","gap-8"],[1,"col-span-12","xl:col-span-12"],[1,"card"],["id","doughnut"]],template:function(e,n){e&1&&(s(0,"p-fluid",0)(1,"div",1)(2,"div",2),r(3,"figure",3),d()()())},dependencies:[c,p],encapsulation:2})};export{g as DoughnutComponent};
