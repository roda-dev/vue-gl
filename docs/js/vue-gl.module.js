import{AmbientLight,ArrowHelper,AxisHelper,BoxGeometry,BoxHelper,Camera,CircleGeometry,Color,ConeGeometry,CylinderGeometry,DirectionalLight,DodecahedronGeometry,Euler,Geometry,Group,IcosahedronGeometry,Light,Line,LineBasicMaterial,LineLoop,LineSegments,Material,Mesh,MeshStandardMaterial,Object3D,OctahedronGeometry,OrthographicCamera,PerspectiveCamera,PlaneGeometry,PointLight,Points,PointsMaterial,RingGeometry,Scene,SphereGeometry,Spherical,SpotLight,Sprite,TetrahedronGeometry,TorusGeometry,TorusKnotGeometry,Vector3,WebGLRenderer}from"https://unpkg.com/three@0.87.1/build/three.module.js";var asyncGenerator=function(){function a(a){this.value=a}function b(b){function c(e,f){try{var g=b[e](f),h=g.value;h instanceof a?Promise.resolve(h.value).then(function(a){c("next",a)},function(a){c("throw",a)}):d(g.done?"return":"normal",g.value)}catch(a){d("throw",a)}}function d(a,b){"return"===a?e.resolve({value:b,done:!0}):"throw"===a?e.reject(b):e.resolve({value:b,done:!1});e=e.next,e?c(e.key,e.arg):f=null}var e,f;this._invoke=function(a,b){return new Promise(function(d,g){var h={key:a,arg:b,resolve:d,reject:g,next:null};f?f=f.next=h:(e=f=h,c(a,b))})},"function"!=typeof b.return&&(this.return=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(b.prototype[Symbol.asyncIterator]=function(){return this}),b.prototype.next=function(a){return this._invoke("next",a)},b.prototype.throw=function(a){return this._invoke("throw",a)},b.prototype.return=function(a){return this._invoke("return",a)},{wrap:function(a){return function(){return new b(a.apply(this,arguments))}},await:function(b){return new a(b)}}}(),classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),defineProperty=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a},toConsumableArray=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)};/**
 * Returns a parsed vector3 object when the argument is a string. Otherwise pass the argument through.
 */function parseVector3(a,b){return"string"==typeof a?(b||new Vector3).fromArray(a.trim().split(/\s+/).map(function(a){return parseFloat(a)})):b?b.copy(a):a}/**
 * Returns a parsed euler object when the argument is a string. Othewise pass the argument through.
 */function parseEuler(a,b){return"string"==typeof a?(b||new Euler).fromArray(a.trim().split(/\s+/).map(function(a,b){return 3===b?a:parseFloat(a)})):b?b.copy(a):a}/**
 * Returns a parsed spherical object when the argument is a string. Otherwise pass the argument through.
 */function parseSpherical(a,b){var c;return"string"==typeof a?(c=b||new Spherical).set.apply(c,toConsumableArray(a.trim().split(/\s+/).map(function(a){return parseFloat(a)}))).makeSafe():b?b.copy(a):a}/**
 * Returns a parsed integer number when the argument is a string. Otherwise pass the argument through.
 */function parseInt_(a){return"string"==typeof a?parseInt(a,10):a}/**
 * Returns a parsed float number when the argument is a string. Otherwise pass the argument through.
 */function parseFloat_(a){return"string"==typeof a?parseFloat(a):a}/**
 * Create an object that has array's items as keys. Values are set by setter function.
 */function createObjectFromArray(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};return a.reduce(function(a,c,d){return a[c]=b(c,d),a},c)}/**
 * Find the nearest ancestor component that has the [key] option.
 */function findParent(a,b){var c=a.$parent;if(c)return c.$options[b]?c:findParent(c,b)}/**
 * Constant arrays useful for props validation.
 */var validatePropNumber=[String,Number],globalNamespaces=["vglCameras","vglScenes"],localNamespaces=["vglGeometries","vglMaterials"];function createEmptyObject(){return Object.create(null)}function isRoot(a){return a.$options.isVglRootNamespace}function pop(a){return a.slice(0,-1)}var VglNamespace={isVglNamespace:!0,beforeCreate:function(){var a=this.$options;findParent(this,"isVglNamespace")?(!a.inject&&(a.inject={}),localNamespaces.forEach(function(b){a.inject[b]=b})):a.isVglRootNamespace=!0},provide:function(){var a=this,b=function(){function b(a,c){classCallCheck(this,b),this.n=a,this.g=c?0:1}return createClass(b,[{key:"forGet",get:function(){return a[this.n+"_".repeat(2*this.g)]}},{key:"forSet",get:function(){return a[this.n+"_".repeat(this.g)]}}]),b}();return createObjectFromArray(localNamespaces,function(a){return new b(a)},isRoot(this)?createObjectFromArray(globalNamespaces,function(a){return new b(a,!0)}):{})},data:function(){return createObjectFromArray(localNamespaces.map(function(a){return a+"_"}),function(){return createEmptyObject()},isRoot(this)?createObjectFromArray(globalNamespaces,function(){return createEmptyObject()}):{})},computed:createObjectFromArray(localNamespaces.map(function(a){return a+"__"}),function(a){return function(){var b=pop(a);return isRoot(this)?this[b]:Object.assign(Object.create(this[pop(b)].forGet),this[b])}}),render:function(a){if(this.$slots.default)return a("div",this.$slots.default)}},defaultPosition=new Vector3,defaultRotation=new Euler,defaultScale=new Vector3(1,1,1),VglObject3d={isVglObject3d:!0,props:{position:{type:[String,Vector3],default:function(){return defaultPosition}},rotation:{type:[String,Euler],default:function(){return defaultRotation}},scale:{type:[String,Vector3],default:function(){return defaultScale}}},computed:{inst:function(){return new Object3D}},created:function(){parseVector3(this.position,this.inst.position),parseEuler(this.rotation,this.inst.rotation),parseVector3(this.scale,this.inst.scale);var a=findParent(this,"isVglObject3d");a&&a.inst.add(this.inst)},beforeDestroy:function(){this.inst.parent&&this.inst.parent.remove(this.inst)},watch:{position:function(a){parseVector3(a||defaultPosition,this.inst.position)},rotation:function(a){parseEuler(a||defaultRotation,this.inst.rotation)},scale:function(a){parseVector3(a||defaultScale,this.inst.scale)},inst:function(a,b){b.children.length&&a.add.apply(a,toConsumableArray(b.children)),a.position.copy(b.position),a.rotation.copy(b.rotation),a.scale.copy(b.scale),b.parent&&b.parent.remove(b).add(a)}},render:function(a){if(this.$slots.default)return a("div",this.$slots.default)}};function assetFactory(a,b){return{props:{name:String},inject:[b],computed:{inst:function(){return new a}},created:function(){this.$set(this[b].forSet,this.name,this.inst)},watch:{inst:function(a){this[b].forSet[this.name]=a}},beforeDestroy:function(){this[b].forSet[this.name]===this.inst&&this.$delete(this[b].forSet,this.name)},render:function(a){if(this.$slots.default)return a("div",this.$slots.default)}}}function hasAssetsMixinFactory(a,b){var c=a+"_";return{props:defineProperty({},a,String),inject:[b],computed:defineProperty({},c,function(){return this[b].forGet[this[a]]}),mounted:function(){this[c]&&(this.inst[a]=this[c])},watch:defineProperty({},c,function(b){this.inst[a]=b})}}function objectMixinFactory(a){var b=[hasAssetsMixinFactory("material","vglMaterials")];return a&&b.push(hasAssetsMixinFactory("geometry","vglGeometries")),{mixins:b}}var numberValidator=[String,Number];function hedronFactory(a){return{props:{radius:numberValidator,detail:numberValidator},computed:{inst:function(){return new a(parseFloat_(this.radius),parseInt_(this.detail))}}}}var vglScene={mixins:[VglObject3d,assetFactory(Scene,"vglScenes")]};function setPositionAndRotation(a,b,c){if(b||c){var d=parseVector3(c);if(b){var e=a.inst.position.setFromSpherical(parseSpherical(b));d&&e.add(d)}a.inst.lookAt(d||new Vector3)}}var VglCamera={mixins:[VglObject3d,assetFactory(Camera,"vglCameras")],props:{orbitTarget:[String,Vector3],orbitPosition:[String,Spherical]},created:function(){setPositionAndRotation(this,this.orbitPosition,this.orbitTarget)},watch:{orbitTarget:function(a){setPositionAndRotation(this,this.orbitPosition,a)},orbitPosition:function(a){setPositionAndRotation(this,a,this.orbitTarget)}}};function resizeCamera(a,b){var c=b.clientWidth,d=b.clientHeight;a.isPerspectiveCamera?a.aspect=c/d:(a.left=c/-2,a.right=c/2,a.top=d/2,a.bottom=d/-2),a.updateProjectionMatrix()}function resizeRenderer(a,b){a.setSize(b.clientWidth,b.clientHeight,!1)}var vglRenderer={mixins:[VglNamespace],props:{precision:String,alpha:Boolean,disablePremultipliedAlpha:Boolean,antialias:Boolean,disableStencil:Boolean,preserveDrawingBuffer:Boolean,disableDepth:Boolean,logarithmicDepthBuffer:Boolean,camera:String,scene:String},beforeCreate:function(){var a=this.$options;a.isVglRootNamespace||(a.inject=createObjectFromArray(["vglCameras","vglScenes"],function(a){return a},a.inject))},data:function(){return{key:0,req:!0}},computed:{opt:function(){return{precision:this.precision,alpha:this.alpha,premultipliedAlpha:!this.disablePremultipliedAlpha,antialias:this.antialias,stencil:!this.disableStencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:!this.disableDepth,logarithmicDepthBuffer:this.logarithmicDepthBuffer}},inst:function(){return new WebGLRenderer(Object.assign({canvas:this.$refs.rdr},this.opt))},cmr:function(){return this.vglCameras[this.camera]},scn:function(){return this.vglScenes[this.scene]}},methods:{resize:function(){resizeRenderer(this.inst,this.$el),this.cmr&&(resizeCamera(this.cmr,this.$el),this.scn&&this.render())},render:function(){var a=this;this.req&&(this.$nextTick(function(){requestAnimationFrame(function(){a.scn&&a.cmr&&a.inst.render(a.scn,a.cmr),a.req=!0})}),this.req=!1)}},watch:{opt:function(){var a=this;++this.key,this.$nextTick(function(){a.resize()})},scn:function(a){a&&this.render()},cmr:function(a){a&&(resizeCamera(a,this.$el),this.render())}},updated:function(){this.render()},render:function(a){var b=this;return a("div",[a("canvas",{ref:"rdr",key:this.key},this.$slots.default),a("iframe",{ref:"frm",style:{visibility:"hidden",width:"100%",height:"100%"},on:{load:function(a){a.target.contentWindow.addEventListener("resize",b.resize),b.$nextTick(b.resize)}}})])}},validator=[String,Number],vglPerspectiveCamera={mixins:[VglCamera],props:{zoom:{type:validator,default:1},near:{type:validator,default:0.1},far:{type:validator,default:2e3},fov:{type:validator,default:50}},computed:{inst:function(){return new PerspectiveCamera}},created:function(){var a=this.inst;a.zoom=parseFloat_(this.zoom),a.near=parseFloat_(this.near),a.far=parseFloat_(this.far),a.fov=parseFloat_(this.fov)},watch:{zoom:function(a){this.inst.zoom=parseFloat_(a)},near:function(a){this.inst.near=parseFloat_(a)},far:function(a){this.inst.far=parseFloat_(a)},fov:function(a){this.inst.fov=parseFloat_(a)}}},vglGroup={mixins:[VglObject3d],computed:{inst:function(){return new Group}}},VglLight={mixins:[VglObject3d],props:{color:{type:String,default:"white"},intensity:{type:[String,Number],default:1}},computed:{inst:function(){return new Light}},created:function(){this.inst.color.setStyle(this.color),this.inst.intensity=parseFloat_(this.intensity)},watch:{color:function(a){this.inst.color.setStyle(a)},intensity:function(a){this.inst.intensity=parseFloat_(a)}}},vglDirectionalLight={mixins:[VglLight],computed:{inst:function(){return new DirectionalLight}}},vglAmbientLight={mixins:[VglLight],computed:{inst:function(){return new AmbientLight}}},VglMaterial={mixins:[assetFactory(Material,"vglMaterials")]},vglPointsMaterial={mixins:[VglMaterial],props:{color:{type:String,default:"#fff"},size:{type:[String,Number],default:1},disableSizeAttenuation:Boolean},computed:{inst:function(){return new PointsMaterial}},created:function(){var a=this.inst;a.color.setStyle(this.color),a.size=parseFloat_(this.size),a.sizeAttenuation=!this.disableSizeAttenuation},watch:{color:function(a){this.inst.color.setStyle(a)},size:function(a){this.inst.size=parseFloat_(a)},disableSizeAttenuation:function(a){this.inst.sizeAttenuation=!a}}},VglGeometry={mixins:[assetFactory(Geometry,"vglGeometries")]},validator$1=[String,Number],props=["radius","widthSegments","heightSegments","phiStart","phiLength","thetaStart","thetaLength"],vglSphereGeometry={mixins:[VglGeometry],props:createObjectFromArray(props,function(){return validator$1}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(SphereGeometry,[null].concat(toConsumableArray(props.map(function(b,c){return(1>c||2<c?parseFloat_:parseInt_)(a[b])})))))}}},vglMeshStandardMaterial={mixins:[VglMaterial],props:{color:{type:String,default:"#fff"}},computed:{inst:function(){return new MeshStandardMaterial}},created:function(){this.inst.color.setStyle(this.color)},watch:{color:function(a){this.inst.color.setStyle(a)}}},vglMesh={mixins:[VglObject3d,objectMixinFactory(!0)],computed:{inst:function(){return new Mesh}}},vglPoints={mixins:[VglObject3d,objectMixinFactory(!0)],computed:{inst:function(){return new Points}}},vglLineBasicMaterial={mixins:[VglMaterial],props:{color:{type:String,default:"#fff"},lights:Boolean,linewidth:{type:[String,Number],default:1},linecap:{type:String,default:"round"},linejoin:{type:String,default:"round"}},computed:{inst:function(){return new LineBasicMaterial}},created:function(){var a=this.inst;a.lights=this.lights,a.linecap=this.linecap,a.linejoin=this.linejoin,a.linewidth=parseFloat_(this.linewidth),a.color.setStyle(this.color)},watch:{color:function(a){this.inst.color.setStyle(a)},lights:function(a){this.inst.lights=a},linewidth:function(a){this.inst.linewidth=parseFloat_(a)},linecap:function(a){this.inst.linecap=a},linejoin:function(a){this.inst.linejoin=a}}},VglLine={mixins:[VglObject3d,objectMixinFactory(!0)],computed:{inst:function(){return new Line}}},vglSprite={mixins:[VglObject3d,objectMixinFactory()],computed:{inst:function(){return new Sprite}}},validator$2=[String,Number],propsFloat=["width","height","depth"],propsInt=["widthSegments","heightSegments","depthSegments"],vglBoxGeometry={mixins:[VglGeometry],props:createObjectFromArray(propsFloat,function(){return validator$2},createObjectFromArray(propsInt,function(){return validator$2})),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(BoxGeometry,[null].concat(toConsumableArray(propsFloat.map(function(b){return parseFloat_(a[b])})),toConsumableArray(propsInt.map(function(b){return parseInt_(a[b])})))))}}},validator$3=[String,Number],props$1=["radius","segments","thetaStart","thetaLength"],vglCircleGeometry={mixins:[VglGeometry],props:createObjectFromArray(props$1,function(){return validator$3}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(CircleGeometry,[null].concat(toConsumableArray(props$1.map(function(b,c){return(1===c?parseInt_:parseFloat_)(a[b])})))))}}},VglLineSegments={mixins:[VglLine],computed:{inst:function(){return new LineSegments}}},vglLineLoop={mixins:[VglLine],computed:{inst:function(){return new LineLoop}}},validator$4=[String,Number],props$2=["radiusTop","radiusBottom","height","radialSegments","heightSegments","openEnded","thetaStart","thetaLength"],VglCylinderGeometry={mixins:[VglGeometry],props:createObjectFromArray(props$2,function(a,b){return 5===b?Boolean:validator$4}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(CylinderGeometry,[null].concat(toConsumableArray(props$2.map(function(b,c){return(3>c||5<c?parseFloat_:parseInt_)(a[b])})))))}}},vglConeGeometry={mixins:[VglCylinderGeometry],props:{radius:[String,Number]},computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(ConeGeometry,[null].concat(toConsumableArray(["radius","height","radialSegments","heightSegments","openEnded","thetaStart","thetaLength"].map(function(b,c){return(2>c||4<c?parseFloat_:parseInt_)(a[b])})))))}}},vglAxisHelper={mixins:[VglLineSegments],props:{size:[String,Number]},computed:{inst:function(){return new AxisHelper(parseFloat_(this.size))}}},validator$5=[String,Number],vglOrthographicCamera={mixins:[VglCamera],props:{zoom:{type:validator$5,default:1},near:{type:validator$5,default:0.1},far:{type:validator$5,default:2e3}},computed:{inst:function(){return new OrthographicCamera}},created:function(){var a=this.inst;a.zoom=parseFloat_(this.zoom),a.near=parseFloat_(this.near),a.far=parseFloat_(this.far)},watch:{zoom:function(a){this.inst.zoom=parseFloat_(a)},near:function(a){this.inst.near=parseFloat_(a)},far:function(a){this.inst.far=parseFloat_(a)}}},validator$6=[String,Number],props$3=["width","height","widthSegments","heightSegments"],vglPlaneGeometry={mixins:[VglGeometry],props:createObjectFromArray(props$3,function(){return validator$6}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(PlaneGeometry,[null].concat(toConsumableArray(props$3.map(function(b,c){return(1<c?parseInt_:parseFloat_)(a[b])})))))}}},vglDodecahedronGeometry={mixins:[VglGeometry,hedronFactory(DodecahedronGeometry)]},vglIcosahedronGeometry={mixins:[VglGeometry,hedronFactory(IcosahedronGeometry)]},vglOctahedronGeometry={mixins:[VglGeometry,hedronFactory(OctahedronGeometry)]},validator$7=[String,Number],props$4=["innerRadius","outerRadius","thetaSegments","phiSegments","thetaStart","thetaLength"],vglRingGeometry={mixins:[VglGeometry],props:createObjectFromArray(props$4,function(){return validator$7}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(RingGeometry,[null].concat(toConsumableArray(props$4.map(function(b,c){return(2>c||3<c?parseFloat_:parseInt_)(a[b])})))))}}},vglTetrahedronGeometry={mixins:[VglGeometry,hedronFactory(TetrahedronGeometry)]},validator$8=[String,Number],props$5=["radius","tube","radialSegments","tubularSegments","arc"],vglTorusGeometry={mixins:[VglGeometry],props:createObjectFromArray(props$5,function(){return validator$8}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(TorusGeometry,[null].concat(toConsumableArray(props$5.map(function(b,c){return(2>c||3<c?parseFloat_:parseInt_)(a[b])})))))}}},validator$9=[String,Number],props$6=["radius","tube","tubularSegments","radialSegments","p","q"],vglTorusKnotGeometry={mixins:[VglGeometry],props:createObjectFromArray(props$6,function(){return validator$9}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(TorusKnotGeometry,[null].concat(toConsumableArray(props$6.map(function(b,c){return(2>c||3<c?parseFloat_:parseInt_)(a[b])})))))}}},numberValidator$1=[String,Number],defaultDirection=new Vector3(0,1),origin=new Vector3,tempColor=new Color;function setDirection(a,b){a.inst.setDirection(parseVector3(b).normalize())}var vglArrowHelper={mixins:[VglObject3d],props:{dir:{type:[String,Vector3],default:function(){return defaultDirection}},length:{type:numberValidator$1,default:1},color:{type:String,default:"#ff0"},headLength:numberValidator$1,headWidth:numberValidator$1},computed:{inst:function(){return new ArrowHelper(defaultDirection,origin)},len:function(){return[parseFloat_(this.length),parseFloat_(this.headLength),parseFloat_(this.headWidth)]}},created:function(){var a;this.dir!==defaultDirection&&this.inst.setDirection(parseVector3(this.dir).normalize()),(a=this.inst).setLength.apply(a,toConsumableArray(this.len)),this.inst.setColor(tempColor.setStyle(this.color))},watch:{dir:function(a){setDirection(this,a)},len:function(a){var b;(b=this.inst).setLength.apply(b,toConsumableArray(a))},color:function(a){this.inst.setColor(tempColor.setStyle(a))}}},vglBoxHelper={mixins:[VglLineSegments],props:{color:{type:String,default:"#ff0"}},data:function(){return{uw:null}},computed:{inst:function(){return new BoxHelper}},created:function(){var a=this;this.inst.material.color.setStyle(this.color);var b=findParent(this,"isVglObject3d");b&&(this.uw=this.$watch(function(){return b.inst},function(b){a.inst.setFromObject(b)},{immediate:!0}))},beforeDestroy:function(){this.uw&&this.uw()},watch:{color:function(a){this.inst.material.color.setStyle(a)}}},validator$10=[String,Number],vglPointLight={mixins:[VglLight],props:{distance:{type:validator$10,default:0},decay:{type:validator$10,default:1}},computed:{inst:function(){return new PointLight}},created:function(){this.inst.distance=parseFloat_(this.distance),this.inst.decay=parseFloat_(this.decay)},watch:{distance:function(a){this.inst.distance=parseFloat_(a)},decay:function(a){this.inst.decay=parseFloat_(a)}}},vglSpotLight={mixins:[VglLight],props:{distance:{type:validatePropNumber,default:0},decay:{type:validatePropNumber,default:1},angle:{type:validatePropNumber,default:Math.PI/3},penumbra:{type:validatePropNumber,default:0},target:{type:[String,Vector3]}},computed:{inst:function(){return new SpotLight}},created:function(){var a=this;if(this.inst.distance=parseFloat_(this.distance),this.inst.decay=parseFloat_(this.decay),this.inst.angle=parseFloat_(this.angle),this.inst.penumbra=parseFloat_(this.penumbra),this.target){parseVector3(this.target,this.inst.target.position);var b=findParent(this,"isVglObject3d");b&&this.$watch(function(){return b.inst},function(b){b.add(a.inst.target)},{immediate:!0})}},beforeDestroy:function(){this.inst.target.parent&&this.inst.target.parent.remove(this.inst.target)},watch:{distance:function(a){this.inst.distance=parseFloat_(a)},decay:function(a){this.inst.decay=parseFloat_(a)},angle:function(a){this.inst.angle=parseFloat_(a)},penumbra:function(a){this.inst.penumbra=parseFloat_(a)},target:function(a,b){a&&(this.inst.target.position.copy(parseVector3(a)),b===void 0&&this.inst.parent&&this.inst.parent.add(this.inst.target))}}};export{VglNamespace,VglObject3d,vglScene as VglScene,VglCamera,vglRenderer as VglRenderer,vglPerspectiveCamera as VglPerspectiveCamera,vglGroup as VglGroup,VglLight,vglDirectionalLight as VglDirectionalLight,vglAmbientLight as VglAmbientLight,VglMaterial,vglPointsMaterial as VglPointsMaterial,VglGeometry,vglSphereGeometry as VglSphereGeometry,vglMeshStandardMaterial as VglMeshStandardMaterial,vglMesh as VglMesh,vglPoints as VglPoints,vglLineBasicMaterial as VglLineBasicMaterial,VglLine,vglSprite as VglSprite,vglBoxGeometry as VglBoxGeometry,vglCircleGeometry as VglCircleGeometry,VglLineSegments,vglLineLoop as VglLineLoop,vglConeGeometry as VglConeGeometry,vglAxisHelper as VglAxisHelper,vglOrthographicCamera as VglOrthographicCamera,VglCylinderGeometry,vglPlaneGeometry as VglPlaneGeometry,vglDodecahedronGeometry as VglDodecahedronGeometry,vglIcosahedronGeometry as VglIcosahedronGeometry,vglOctahedronGeometry as VglOctahedronGeometry,vglRingGeometry as VglRingGeometry,vglTetrahedronGeometry as VglTetrahedronGeometry,vglTorusGeometry as VglTorusGeometry,vglTorusKnotGeometry as VglTorusKnotGeometry,vglArrowHelper as VglArrowHelper,vglBoxHelper as VglBoxHelper,vglPointLight as VglPointLight,vglSpotLight as VglSpotLight};
