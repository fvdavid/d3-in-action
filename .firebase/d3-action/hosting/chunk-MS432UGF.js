import{b as d,c as g,d as l,f as p,n as f,p as u}from"./chunk-IVKNQDWJ.js";import{a as c,b as m}from"./chunk-HMR6D4PY.js";import"./chunk-KIRPRCXL.js";import"./chunk-7X44HFL5.js";import{Wa as r,qb as s,rb as o,sb as h}from"./chunk-Q3C673SS.js";import"./chunk-JKOY2XUY.js";var v=class i{margin={top:30,right:30,bottom:70,left:60};width=460-this.margin.left-this.margin.right;height=400-this.margin.top-this.margin.bottom;svg;ngOnInit(){this.getTheData()}getTheData(){p("https://raw.githubusercontent.com/fvdavid/d3-in-action/refs/heads/main/data/onecat_onenum.csv").then(a=>{a.sort((t,n)=>t.Value-n.Value),this.createSvg(a)})}createSvg(a){this.svg=l("figure#barchart").append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform",`translate(${this.margin.left}, ${this.margin.top})`);let t=f().range([0,this.width]).domain(a.map(function(e){return e.Country})).padding(.2);this.svg.append("g").attr("transform","translate(0,"+this.height+")").call(d(t)).selectAll("text").attr("transform","translate(-10,0)rotate(-45)").style("text-anchor","end");let n=u().domain([0,13e3]).range([this.height,0]);this.svg.append("g").call(g(n)),this.svg.selectAll("mybar").data(a).enter().append("rect").attr("x",function(e){return t(e.Country)}).attr("y",function(e){return n(e.Value)}).attr("width",t.bandwidth()).attr("height",e=>this.height-n(e.Value)).attr("fill","#69b3a2")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=r({type:i,selectors:[["app-barchart"]],decls:4,vars:0,consts:[[1,"grid","grid-cols-12","gap-8"],[1,"col-span-12","xl:col-span-12"],[1,"card"],["id","barchart"]],template:function(t,n){t&1&&(s(0,"p-fluid",0)(1,"div",1)(2,"div",2),h(3,"figure",3),o()()())},dependencies:[m,c],encapsulation:2})};export{v as BarchartComponent};
