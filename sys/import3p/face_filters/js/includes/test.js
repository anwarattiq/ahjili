 /**
  * Jeeliz Face Filter - https://github.com/jeeliz/jeelizFaceFilter
  *
  * Copyright 2018 Jeeliz ( https://jeeliz.com )
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  * http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

 var JEEFACEFILTERAPI = (function() {
     function pa(a, b, d) {
         return a * (1 - d) + b * d
     }

     function ra(a, b) {
         var d = new XMLHttpRequest;
         
         d.open("GET", a, !0);
         d.withCredentials = !1;
         d.onreadystatechange = function() {
             4 === d.readyState && 200 === d.status && b(d.responseText)
         };
         console.log(d);
         d.send()
     }

     function sa(a, b, d) {
         return Math.min(Math.max((d - a) / (b - a), 0), 1)
     }

     function ta(a, b) {
         var d = b % 8;
         return a[(b - d) / 8] >> 7 - d & 1
     }

     function ua(a) {
         var b = JSON.parse(a);
         a = b.ne;
         var d = b.nf,
             f = b.n,
             g = "undefined" === typeof btoa ? Buffer.from(b.data, "base64").toString("latin1") : atob(b.data),
             e = g.length,
             h;
         b = new Uint8Array(e);
         for (h = 0; h < e; ++h) b[h] = g.charCodeAt(h);
         g = new Float32Array(f);
         e = new Float32Array(d);
         h = a + d + 1;
         var n, p;
         for (n = 0; n < f; ++n) {
             var m = h * n;
             var r = 0 === ta(b, m) ? 1 : -1;
             var y = m + 1;
             var w = 1,
                 z = 0;
             for (p = y + a - 1; p >= y; --p) z += w * ta(b, p), w *= 2;
             p = z;
             y = b;
             w = m + 1 + a;
             z = e;
             var B = 0,
                 C = z.length;
             for (m = w; m < w + C; ++m) z[B] = ta(y, m), ++B;
             for (m = y = 0; m < d; ++m) y += e[m] * Math.pow(2, -m -
                 1);
             r = 0 === y && 0 === p ? 0 : r * (1 + y) * Math.pow(2, 1 + p - Math.pow(2, a - 1));
             g[n] = r
         }
         return g
     }
     var l = function() {
             function a(a, b) {
                 a = c.createShader(a);
                 c.shaderSource(a, b);
                 c.compileShader(a);
                 return c.getShaderParameter(a, c.COMPILE_STATUS) ? a : !1
             }

             function b(b, d, e) {
                 b = a(c.VERTEX_SHADER, b, e + " VERTEX");
                 d = a(c.FRAGMENT_SHADER, d, e + " FRAGMENT");
                 e = c.createProgram();
                 c.attachShader(e, b);
                 c.attachShader(e, d);
                 c.linkProgram(e);
                 return e
             }

             function d(a) {
                 void 0 === a.Z && (a.Z = "precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}");
                 void 0 === a.ta && (a.ta = ["a0"]);
                 void 0 === a.ha && (a.ha = [2]);
                 void 0 === a.precision && (c.getShaderPrecisionFormat && 10 <= c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.MEDIUM_FLOAT).precision ? a.precision = "mediump" : a.precision = "highp");
                 a.id = h++;
                 void 0 !== a.Pc && a.Pc.forEach(function(b, d) {
                     a.c = a.c.replace(b, a.Ca[d])
                 });
                 a.cb = 0;
                 a.ha.forEach(function(b) {
                     a.cb += 4 * b
                 });
                 a.Ba = b(a.Z, "precision " + a.precision + " float;\n" + a.c, a.name);
                 a.o = {};
                 a.g.forEach(function(b) {
                     a.o[b] = c.getUniformLocation(a.Ba, b)
                 });
                 a.attributes = {};
                 a.ia = [];
                 a.ta.forEach(function(b) {
                     var d =
                         c.getAttribLocation(a.Ba, b);
                     a.attributes[b] = d;
                     a.ia.push(d)
                 });
                 if (a.h) {
                     c.useProgram(a.Ba);
                     e = a;
                     g = a.id;
                     for (var d in a.h) c.uniform1i(a.o[d], a.h[d])
                 }
                 a.Ld = !0
             }

             function f(a) {
                 va.Vc(I);
                 g !== a.id && (I.S(), g = a.id, e = a, c.useProgram(a.Ba), a.ia.forEach(function(a) {
                     0 !== a && c.enableVertexAttribArray(a)
                 }))
             }
             var g = -1,
                 e = !1,
                 h = 0,
                 n = !1,
                 p = ["u0"],
                 m = ["u1"],
                 r = {
                     u0: 0
                 },
                 y = {
                     u1: 0
                 },
                 w = {
                     u0: 0,
                     u2: 1
                 },
                 z = {
                     u3: 0
                 },
                 B = {
                     u4: 0,
                     u5: 1
                 },
                 C = {
                     s0: {
                         name: "_",
                         c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vv0);}",
                         g: p,
                         h: r
                     },
                     s1: {
                         name: "_",
                         c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vv0);}",
                         g: p,
                         h: r,
                         precision: "lowp"
                     },
                     s2: {
                         name: "_",
                         c: "uniform sampler2D u0,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u0,vv0);gl_FragColor=a*b;}",
                         g: ["u0", "u2"],
                         h: w
                     },
                     s3: {
                         name: "_",
                         c: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a.r*f;}",
                         g: p,
                         h: r
                     },
                     s4: {
                         name: "_",
                         c: "uniform sampler2D u0,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u0,vv0);gl_FragColor=a.a*b.r*f;}",
                         g: ["u0", "mask"],
                         h: w
                     },
                     s5: {
                         name: "_",
                         c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vec2(1.-vv0.x,vv0.y));}",
                         g: p,
                         h: r
                     },
                     s6: {
                         name: "_",
                         c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vec2(vv0.x,1.-vv0.y));}",
                         g: p,
                         h: r
                     },
                     s7: {
                         name: "_",
                         c: "uniform sampler2D u1;uniform float u6;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*u6;}",
                         g: ["u1", "u6"],
                         h: y
                     },
                     s8: {
                         name: "_",
                         c: "uniform sampler2D u1;uniform float u6;varying vec2 vv0;const vec4 g=vec4(.25,.25,.25,.25),e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);float b=dot(a*u6,g);gl_FragColor=b*e;}",
                         g: ["u1", "u6"],
                         h: y
                     },
                     s9: {
                         name: "_",
                         c: "uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u0,vv0));gl_FragColor=a*e;}",
                         g: p,
                         h: r
                     },
                     s10: {
                         name: "_",
                         c: "uniform sampler2D u0,u7;uniform float u8;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0),b=texture2D(u7,vv0);gl_FragColor=mix(b,a,u8*f);}",
                         g: ["u0", "u7", "u8"],
                         h: {
                             u0: 0,
                             u7: 1
                         }
                     },
                     s11: {
                         name: "_",
                         c: "uniform sampler2D u0;uniform vec2 u9;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u0,vv0+u9)+texture2D(u0,vv0+u9*vec2(1.,-1.))+texture2D(u0,vv0+u9*vec2(-1.,-1.))+texture2D(u0,vv0+u9*vec2(-1.,1.)));}",
                         g: ["u0", "u9"],
                         h: r
                     },
                     s12: {
                         name: "_",
                         c: "uniform sampler2D u0;uniform vec4 u10;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 k(float a){if(a==0.)return vec4(0.,0.,0.,0.);float l=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),m=c+127.,b=(a/exp2(c)-1.)*8388608.,d=m/2.,n=fract(d)*2.,o=floor(d),p=e(b,0.,8.),q=e(b,8.,16.),r=n*128.+e(b,16.,23.),j=l+o;return vec4(p,q,r,j)/255.;}void main(){float a=dot(texture2D(u0,vv0),u10);gl_FragColor=k(a);}",
                         g: ["u0", "u10"],
                         h: r
                     },
                     s13: {
                         name: "_",
                         c: "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0),b=e/(e+exp(-a));gl_FragColor=b;}",
                         g: m,
                         h: y
                     },
                     s14: {
                         name: "_",
                         c: "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(0.,0.,0.,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=max(e,a);}",
                         g: m,
                         h: y
                     },
                     s15: {
                         name: "_",
                         c: "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=mix(exp(-abs(a))-e,a,step(0.,a));}",
                         g: m,
                         h: y
                     },
                     s16: {
                         name: "_",
                         c: "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0),b=exp(-abs(a))-e;gl_FragColor=mix(.1*b,a,step(0.,a));}",
                         g: m,
                         h: y
                     },
                     s17: {
                         name: "_",
                         c: "uniform sampler2D u1,u8,u11;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0),c=texture2D(u8,vv0),d=texture2D(u11,vv0),b=a/d;gl_FragColor=c*mix(exp(-abs(b))-f,b,step(0.,a));}",
                         g: ["u1", "u8", "u11"],
                         h: {
                             u1: 0,
                             u8: 1,
                             u11: 2
                         }
                     },
                     s18: {
                         name: "_",
                         c: "uniform sampler2D u1;const float e=3.141593;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=atan(e*a)/e;gl_FragColor=b;}",
                         g: m,
                         h: y
                     },
                     s19: {
                         name: "_",
                         c: "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(.5,.5,.5,.5);void main(){vec4 a=texture2D(u1,vv0),b=log(e+a);gl_FragColor=b;}",
                         g: m,
                         h: y
                     },
                     s20: {
                         name: "_",
                         c: "uniform sampler2D u1;uniform float gain;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=exp(a);}",
                         g: ["u1", "u12"],
                         h: y
                     },
                     s21: {
                         name: "_",
                         c: "uniform sampler2D u1,u13;uniform float u14;const vec2 f=vec2(.5,.5);const float g=1e-5;const vec4 h=vec4(1.,1.,1.,1.),i=vec4(0.,0.,0.,0.);varying vec2 vv0;void main(){vec4 a=texture2D(u13,f);float b=u14*u14;vec4 c=max(b*a,g*h);gl_FragColor=texture2D(u1,vv0)/c;}",
                         g: ["u1", "u15", "u14"],
                         h: {
                             u1: 0,
                             u15: 1
                         }
                     },
                     s22: {
                         name: "_",
                         c: "uniform sampler2D u0;uniform vec2 u16;varying vec2 vv0;void main(){float a=u16.x*u16.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u16.y),g=floor(u16.x*fract(b*u16.y)),f=(g*u16.y+d)/a;gl_FragColor=texture2D(u0,f+c/a);}",
                         g: ["u0", "u16"],
                         h: r
                     },
                     s23: {
                         name: "_",
                         c: "uniform sampler2D u17,u5,u18;varying vec2 vv0;void main(){vec4 a=texture2D(u18,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u17,b),e=texture2D(u5,c);gl_FragColor=d*e;}",
                         g: ["u17", "u5", "u18"],
                         h: {
                             u5: 0,
                             u17: 1,
                             u18: 2
                         }
                     },
                     s24: {
                         name: "_",
                         c: "uniform float u19;uniform sampler2D u17,u5;varying vec2 vv0;void main(){vec2 a=fract(vv0*u19);vec4 b=texture2D(u17,vv0),c=texture2D(u5,a);gl_FragColor=b*c;}",
                         g: ["u5", "u17", "u19"],
                         h: {
                             u5: 0,
                             u17: 1
                         }
                     },
                     s25: {
                         name: "_",
                         c: "uniform float u19;uniform sampler2D u17,u5,u20,u21,u22,u23;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 i=vv0*u19,m=floor(i),c=i-m;vec4 n=texture2D(u17,vv0),d=texture2D(u5,c),a=texture2D(u23,vv0);a=a*255.;vec4 o=texture2D(u20,c),p=texture2D(u21,c),q=texture2D(u22,c),j=step(-g,-a),b=e-j,k=b*step(-e-g,-a);b*=e-k;vec4 h=b*step(-2.*e-g,-a);b*=e-h;vec4 l=b;d=j*d+k*o+h*p+l*q,gl_FragColor=n*d;}",
                         g: "u17 u5 u19 u23 u20 u21 u22".split(" "),
                         h: {
                             u5: 0,
                             u17: 1,
                             u23: 3,
                             u20: 4,
                             u21: 5,
                             u22: 6
                         }
                     },
                     s26: {
                         name: "_",
                         c: "uniform sampler2D u17,u5,u24;uniform float u19,u25,u26,u27;varying vec2 vv0;const vec2 j=vec2(1.,1.);void main(){vec2 a=floor(u25*vv0),g=u25*vv0-a;float b=u19/u25;vec2 c=floor(g*b),d=g*b-c,h=(a+d)/u25;float l=u25*u27/u19;vec2 m=l*c,i=(m+d*u26)/u27,e=step(i,j);vec4 n=texture2D(u17,h),o=texture2D(u5,i),p=n*o*e.x*e.y,k=texture2D(u24,h);gl_FragColor=p*u26*u26+k;}",
                         g: "u17 u5 u19 u25 u26 u27 u24".split(" "),
                         h: {
                             u5: 0,
                             u17: 1,
                             u24: 2
                         }
                     },
                     s27: {
                         name: "_",
                         c: "uniform sampler2D u17,u5;varying vec2 vv0;void main(){vec4 a=texture2D(u17,vv0),b=texture2D(u5,vv0);gl_FragColor=a*b;}",
                         g: ["u17", "u5"],
                         h: {
                             u5: 0,
                             u17: 1
                         }
                     },
                     s28: {
                         name: "_",
                         c: "uniform sampler2D u0,u24;uniform float u28;varying vec2 vv0;void main(){gl_FragColor=texture2D(u24,vv0)+u28*texture2D(u0,vv0);}",
                         g: ["u0", "u24", "u28"],
                         h: {
                             u0: 0,
                             u24: 1
                         }
                     },
                     s29: {
                         name: "_",
                         c: "varying vec2 vv0;uniform sampler2D u0;const vec4 g=vec4(1.,1.,1.,1.),e=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=dot(a,e)*g;}",
                         g: p,
                         h: r,
                         precision: "lowp"
                     },
                     s30: {
                         name: "_",
                         c: "varying vec2 vv0;uniform sampler2D u0,u2;uniform float u29;const vec4 g=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u0,vec2(vv0.x-u29,vv0.y-u29))*1.,a-=texture2D(u0,vec2(vv0.x-u29,vv0.y))*2.,a-=texture2D(u0,vec2(vv0.x-u29,vv0.y+u29))*1.,a+=texture2D(u0,vec2(vv0.x+u29,vv0.y-u29))*1.,a+=texture2D(u0,vec2(vv0.x+u29,vv0.y))*2.,a+=texture2D(u0,vec2(vv0.x+u29,vv0.y+u29))*1.;vec4 b=vec4(0.);b-=texture2D(u0,vec2(vv0.x-u29,vv0.y-u29))*1.,b-=texture2D(u0,vec2(vv0.x,vv0.y-u29))*2.,b-=texture2D(u0,vec2(vv0.x+u29,vv0.y-u29))*1.,b+=texture2D(u0,vec2(vv0.x-u29,vv0.y+u29))*1.,b+=texture2D(u0,vec2(vv0.x,vv0.y+u29))*2.,b+=texture2D(u0,vec2(vv0.x+u29,vv0.y+u29))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u0,vv0).a),f=texture2D(u2,vv0);gl_FragColor=f.a*e.r*g;}",
                         g: ["u0", "u2", "u29"],
                         h: w
                     },
                     s31: {
                         name: "_",
                         c: "varying vec2 vv0;uniform sampler2D u0,u2;uniform float u29;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float i=0.;vec2 l=k*u29,b,c;float d,a,g=0.;for(float f=-4.;f<=4.;f+=1.)for(float e=-4.;e<=4.;e+=1.)b=vec2(f,e),d=length(b)/2.,a=exp(-d*d),c=vv0+l*b,a=1.,i+=a*texture2D(u0,c).r,g+=a;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u0,c).r-i/g)*j;}",
                         g: ["u0", "u2", "u29"],
                         h: w
                     },
                     s32: {
                         name: "_",
                         c: "uniform sampler2D u3;uniform vec2 u9;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 h=vec2(.5,.5),i=vec2(1.,0.),j=vec2(0.,1.);void main(){vec2 a=vv0-u9*h;vec4 b=texture2D(u3,a),c=texture2D(u3,a+u9*i),d=texture2D(u3,a+u9*j),k=texture2D(u3,a+u9),l=e(b,c),g=e(d,k);gl_FragColor=e(l,g);}",
                         g: ["u3", "u9"],
                         h: z
                     },
                     s33: {
                         name: "_",
                         c: "uniform sampler2D u3;uniform vec2 u9;varying vec2 vv0;const vec2 j=vec2(1.,0.),k=vec2(0.,1.),l=vec2(2.,0.),m=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u3,a),c=texture2D(u3,a+u9*j),d=texture2D(u3,a+u9*k),g=texture2D(u3,a+u9),i=e(b,c),h=e(d,g);return e(i,h);}void main(){vec2 a=vv0+u9*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u9*l),d=f(a+u9*2.),g=f(a+u9*m),i=e(b,c),h=e(d,g);gl_FragColor=e(i,h);}",
                         g: ["u3", "u9"],
                         h: z
                     },
                     s34: {
                         name: "_",
                         c: "uniform sampler2D u0;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*a;}",
                         g: ["u0"],
                         h: r,
                         precision: "lowp"
                     },
                     s35: {
                         name: "_",
                         c: "uniform sampler2D u0;uniform vec2 u9;varying vec2 vv0;const vec4 g=vec4(1.,1.,1.,1.);const float d=15444.;void main(){vec4 a=1001./d*texture2D(u0,vv0-3.*u9)+2002./d*texture2D(u0,vv0-2.*u9)+3003./d*texture2D(u0,vv0-u9)+3432./d*texture2D(u0,vv0)+3003./d*texture2D(u0,vv0+u9)+2002./d*texture2D(u0,vv0+2.*u9)+1001./d*texture2D(u0,vv0+3.*u9);gl_FragColor=a;}",
                         g: ["u9", "u0"],
                         h: r,
                         precision: "lowp"
                     },
                     s36: {
                         name: "_",
                         c: "uniform sampler2D u0,u30,u31;varying vec2 vv0;const vec4 g=vec4(1.,1.,1.,1.);const float h=.1;void main(){vec4 a=texture2D(u30,vv0),b=texture2D(u31,vv0),c=texture2D(u0,vv0),d=max(g*h,b-a*a),f=sqrt(d);gl_FragColor=(c-a)/f;}",
                         g: ["u0", "u30", "u31"],
                         h: {
                             u0: 0,
                             u30: 1,
                             u31: 2
                         }
                     },
                     s37: {
                         name: "_",
                         c: "uniform sampler2D u17,u32,u33;varying vec2 vv0;void main(){vec4 a=texture2D(u33,vv0);vec2 b=a.rg;vec4 c=texture2D(u17,b);vec2 d=a.ba;vec4 e=texture2D(u32,d);gl_FragColor=c*e;}",
                         g: ["u17", "u32", "u33"],
                         h: {
                             u32: 0,
                             u33: 1,
                             u17: 2
                         }
                     },
                     s38: {
                         name: "_",
                         c: "uniform sampler2D u17,u32;uniform float u19,u27;varying vec2 vv0;void main(){float d=u19*u27;vec2 b=vv0*u27,c=floor(b),a=b-c;a.y=1.-a.y;vec2 g=floor(a*u19),h=(g*u27+c)/d;vec4 i=texture2D(u17,h),e=texture2D(u32,a);gl_FragColor=i*e;}",
                         g: ["u17", "u32", "u19", "u27"],
                         h: {
                             u32: 0,
                             u17: 1
                         }
                     },
                     s39: {
                         name: "_",
                         c: "uniform sampler2D u17,u32;uniform float u19,u27,u26,u25;varying vec2 vv0;const vec2 e=vec2(1.,1.);void main(){float k=u19*u26/u27,d=u25*u27/u19,l=k/u25,m=u19/u25,n=k/u25;vec2 g=e-vv0,c=floor(u27*g),h=u27*g-c,i=floor(u25*h),j=u25*h-i,q=j*l,r=floor(c/d),s=c-r*d,t=floor(c/d),u=t+n*j,a=(u+i*m)/u19;a=mod(a,e),a=e-a;vec2 v=s-d*q,b=mod(v/u26,e);b=e-b,b+=vec2(1./u19,1./u19),b=mod(b,e);vec2 w=floor(a*u25),f=(w+b)/u25;f=mod(f,e);vec4 x=texture2D(u17,f),o=texture2D(u32,a);gl_FragColor=x*o;}",
                         g: "u17 u32 u19 u27 u26 u25".split(" "),
                         h: {
                             u32: 0,
                             u17: 1
                         }
                     },
                     s40: {
                         name: "_",
                         c: "uniform sampler2D u1,u34,u35;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u34,vv0),c=texture2D(u35,vv0);gl_FragColor=a-b;}",
                         g: ["u1", "u34", "u35"],
                         h: {
                             u1: 0,
                             u34: 1,
                             u35: 2
                         }
                     },
                     s41: {
                         name: "_",
                         c: "uniform sampler2D u1,u34,u35;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u34,vv0),c=texture2D(u35,vv0);gl_FragColor=c*(a-b);}",
                         g: ["u1", "u34", "u35"],
                         h: {
                             u1: 0,
                             u34: 1,
                             u35: 2
                         }
                     },
                     s42: {
                         name: "_",
                         c: "uniform sampler2D u4,u5;uniform float u28;varying vec2 vv0;void main(){vec4 a=u28*texture2D(u4,vv0),b=texture2D(u5,vv0);gl_FragColor=a;}",
                         g: ["u4", "u5", "u28"],
                         h: B
                     },
                     s43: {
                         name: "_",
                         c: "uniform sampler2D u4,u5;uniform float u28;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);vec4 g(vec4 b){vec4 a=exp(-b);return a/((f+a)*(f+a));}void main(){vec4 a=u28*texture2D(u4,vv0),b=texture2D(u5,vv0);gl_FragColor=a*g(b);}",
                         g: ["u4", "u5", "u28"],
                         h: B
                     },
                     s44: {
                         name: "_",
                         c: "uniform sampler2D u4,u5;uniform float u28;varying vec2 vv0;const vec4 g=vec4(0.,0.,0.,0.),i=vec4(1.,1.,1.,1.);const float h=1e-4;vec4 f(vec4 a){return h+step(g,a);}void main(){vec4 a=u28*texture2D(u4,vv0),b=texture2D(u5,vv0);gl_FragColor=a*f(b);}",
                         g: ["u4", "u5", "u28"],
                         h: B
                     },
                     s45: {
                         name: "_",
                         c: "uniform sampler2D u4,u5;uniform float u28;varying vec2 vv0;const vec4 g=vec4(1.,1.,1.,1.);vec4 f(vec4 a){vec4 b=exp(-abs(a));return mix(b,g,step(0.,a));}void main(){vec4 a=u28*texture2D(u4,vv0),b=texture2D(u5,vv0);gl_FragColor=a*f(b);}",
                         g: ["u4", "u5", "u28"],
                         h: B
                     },
                     s46: {
                         name: "_",
                         c: "uniform sampler2D u4,u5;uniform float u28;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);const float h=3.141593;vec4 g(vec4 b){vec4 a=b*h;return e/(e+a*a);}void main(){vec2 a=vv0;vec4 b=u28*texture2D(u4,a),c=texture2D(u5,a);gl_FragColor=b*g(c);}",
                         g: ["u4", "u5", "u28"],
                         h: B
                     }
                 },
                 F = {
                     s47: {
                         name: "_",
                         c: "#",
                         g: ["u19", "u17", "u5", "u24", "u36"],
                         Ca: ["#sparsity#"]
                     },
                     s48: {
                         name: "_",
                         c: "#",
                         g: ["u19", "u17", "u32", "u36"],
                         Ca: ["#sparsity#"]
                     }
                 },
                 I = {
                     Va: function() {
                         return n
                     },
                     m: function() {
                         if (!n) {
                             for (var a in C) d(C[a], a);
                             l.set("s0");
                             c.enableVertexAttribArray(0);
                             a = xa.m();
                             n = !0;
                             return a
                         }
                     },
                     Vb: function(a) {
                         a.forEach(function(a) {
                             I.Ub(a)
                         })
                     },
                     Ub: function(a) {
                         C[a.id] = a;
                         d(a, a.id)
                     },
                     Ta: function(a, b, e) {
                         b || (b = a);
                         C[b] = Object.create(F[a]);
                         F[a].Ca && F[a].Ca.forEach(function(a, d) {
                             C[b].c = C[b].c.replace(new RegExp(a,
                                 "g"), e[d])
                         });
                         d(C[b], b)
                     },
                     set: function(a) {
                         f(C[a])
                     },
                     rc: function(a) {
                         return "undefined" !== typeof C[a]
                     },
                     yd: function() {
                         return e.vd
                     },
                     S: function() {
                         -1 !== g && (g = -1, e.ia.forEach(function(a) {
                             0 !== a && c.disableVertexAttribArray(a)
                         }))
                     },
                     ab: function() {
                         var a = 0;
                         e.ia.forEach(function(b, d) {
                             d = e.ha[d];
                             c.vertexAttribPointer(b, d, c.FLOAT, !1, e.cb, a);
                             a += 4 * d
                         })
                     },
                     kb: function() {
                         c.enableVertexAttribArray(0)
                     },
                     qa: function() {
                         c.vertexAttribPointer(e.ia[0], 2, c.FLOAT, !1, 8, 0)
                     },
                     Mb: function(a, b) {
                         c.uniform1i(e.o[a], b)
                     },
                     u: function(a, b) {
                         c.uniform1f(e.o[a],
                             b)
                     },
                     J: function(a, b, d) {
                         c.uniform2f(e.o[a], b, d)
                     },
                     be: function(a, b) {
                         c.uniform2fv(e.o[a], b)
                     },
                     ce: function(a, b) {
                         c.uniform3fv(e.o[a], b)
                     },
                     Wc: function(a, b, d, p) {
                         c.uniform3f(e.o[a], b, d, p)
                     },
                     Nb: function(a, b) {
                         c.uniform4fv(e.o[a], b)
                     },
                     de: function(a, b) {
                         c.uniformMatrix2fv(e.o[a], !1, b)
                     },
                     ee: function(a, b) {
                         c.uniformMatrix3fv(e.o[a], !1, b)
                     },
                     fe: function(a, b) {
                         c.uniformMatrix4fv(e.o[a], !1, b)
                     },
                     K: function(a, b) {
                         I.set(a);
                         b.forEach(function(a) {
                             switch (a.type) {
                                 case "4f":
                                     c.uniform4fv(e.o[a.name], a.value);
                                     break;
                                 case "3f":
                                     c.uniform3fv(e.o[a.name],
                                         a.value);
                                     break;
                                 case "2f":
                                     c.uniform2fv(e.o[a.name], a.value);
                                     break;
                                 case "1f":
                                     c.uniform1f(e.o[a.name], a.value);
                                     break;
                                 case "1i":
                                     c.uniform1i(e.o[a.name], a.value);
                                     break;
                                 case "mat2":
                                     c.uniformMatrix2fv(e.o[a.name], !1, a.value);
                                     break;
                                 case "mat3":
                                     c.uniformMatrix3fv(e.o[a.name], !1, a.value);
                                     break;
                                 case "mat4":
                                     c.uniformMatrix4fv(e.o[a.name], !1, a.value)
                             }
                         })
                     }
                 };
             return I
         }(),
         c, ya = function() {
             function a(a) {
                 console.log("ERROR in ContextFeedForward : ", a);
                 return !1
             }
             var b = !1,
                 d = !1,
                 f = !1,
                 g = !1,
                 e = !0,
                 h = !1,
                 n = {
                     A: function() {
                         return b.width
                     },
                     M: function() {
                         return b.height
                     },
                     zd: function() {
                         return b
                     },
                     xd: function() {
                         return c
                     },
                     v: function() {
                         return e
                     },
                     flush: function() {
                         c.flush()
                     },
                     wc: function() {
                         h || (h = new Uint8Array(b.width * b.height * 4));
                         c.readPixels(0, 0, b.width, b.height, c.RGBA, c.UNSIGNED_BYTE, h);
                         return h
                     },
                     Bd: function() {
                         return b.toDataURL("image/jpeg")
                     },
                     Cd: function() {
                         u.C();
                         d || (d = document.createElement("canvas"), f = d.getContext("2d"));
                         d.width = b.width;
                         d.height = b.height;
                         var a = n.wc(),
                             e = f.createImageData(d.width, d.height),
                             g, h, w = d.width,
                             z = d.height,
                             B = e.data;
                         for (h = 0; h < z; ++h) {
                             var C = z - h - 1;
                             for (g = 0; g < w; ++g) {
                                 var F = 4 * (h * w + g);
                                 var I = 4 * (C * w + g);
                                 B[F] = a[I];
                                 B[F + 1] = a[I + 1];
                                 B[F + 2] = a[I + 2];
                                 B[F + 3] = a[I + 3]
                             }
                         }
                         f.putImageData(e, 0, 0);
                         return d.toDataURL("image/png")
                     },
                     Ad: function(a) {
                         !d && a && (d = document.createElement("canvas"), f = d.getContext("2d"));
                         var e = a ? d : document.createElement("canvas");
                         e.width = b.width;
                         e.height = b.height;
                         (a ? f : e.getContext("2d")).drawImage(b, 0, 0);
                         return e
                     },
                     m: function(d) {
                         d.jc && !d.la ? b = document.getElementById(d.jc) : d.la && (b = d.la);
                         b || (b = document.createElement("canvas"));
                         b.width = d && void 0 !== d.width ? d.width : 512;
                         b.height = d && void 0 !== d.height ? d.height : 512;
                         "undefined" === typeof d && (d = {});
                         void 0 === d.premultipliedAlpha && (d.premultipliedAlpha = !1);
                         void 0 === d.ub && (d.ub = !0);
                         void 0 === d.antialias && (d.antialias = !1);
                         var h = {
                             antialias: d.antialias,
                             alpha: !0,
                             preserveDrawingBuffer: !0,
                             premultipliedAlpha: d.premultipliedAlpha,
                             stencil: !1,
                             depth: d.ub
                         };
                         (c = b.getContext("webgl2", h)) ? e = !0: ((c = b.getContext("webgl", h)) || (c = b.getContext("experimental-webgl", h)), e = !1);
                         if (!c) return a("WebGL is not enabled");
                         (g = c.getExtension("WEBGL_lose_context")) && b.addEventListener("webglcontextlost", d.Lc, !1);
                         if (!v.m()) return a("not enough capabilities");
                         if (!v.ec() && e) return a("Your configuration cannot process color buffer float");
                         c.clearColor(0, 0, 0, 0);
                         c.disable(c.DEPTH_TEST);
                         c.disable(c.BLEND);
                         c.disable(c.DITHER);
                         c.disable(c.STENCIL_TEST);
                         c.GENERATE_MIPMAP_HINT && c.hint(c.GENERATE_MIPMAP_HINT, c.FASTEST);
                         c.disable(c.SAMPLE_ALPHA_TO_COVERAGE);
                         c.disable(c.SAMPLE_COVERAGE);
                         return !0
                     },
                     Cc: function() {
                         if (!l.m()) return !1;
                         c.depthFunc(c.LEQUAL);
                         c.clearDepth(1);
                         return !0
                     }
                 };
             return n
         }(),
         va = function() {
             var a = "undefined" === typeof l ? JEShaders : l;
             return {
                 Vc: function(b) {
                     a !== b && (a.S(), a = b)
                 },
                 Va: function() {
                     return a.Va()
                 },
                 qa: function() {
                     a.qa()
                 },
                 ab: function() {
                     a.ab()
                 },
                 S: function() {
                     a.S()
                 },
                 set: function(b) {
                     a.set(b)
                 }
             }
         }(),
         J = function() {
             var a, b, d = 0,
                 f = -2,
                 g = -2,
                 e = !1,
                 h = {
                     reset: function() {
                         g = f = -2
                     },
                     m: function() {
                         e || (a = c.createBuffer(), c.bindBuffer(c.ARRAY_BUFFER, a), c.bufferData(c.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), c.STATIC_DRAW), b = c.createBuffer(), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,
                             b), c.bufferData(c.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), c.STATIC_DRAW), h.ja(), e = !0)
                     },
                     a: function(a) {
                         var b = d++,
                             e = a.ea.length,
                             h = c.createBuffer();
                         c.bindBuffer(c.ARRAY_BUFFER, h);
                         c.bufferData(c.ARRAY_BUFFER, a.Qb instanceof Float32Array ? a.Qb : new Float32Array(a.Qb), c.STATIC_DRAW);
                         f = b;
                         if (a.ea) {
                             var n = c.createBuffer();
                             c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, n);
                             if (65536 > a.ea.length) {
                                 var w = Uint16Array;
                                 var z = c.UNSIGNED_SHORT;
                                 var B = 2
                             } else w = Uint32Array, z = c.UNSIGNED_INT, B = 4;
                             c.bufferData(c.ELEMENT_ARRAY_BUFFER,
                                 a.ea instanceof w ? a.ea : new w(a.ea), c.STATIC_DRAW);
                             g = b
                         }
                         var C = {
                             dc: function(a) {
                                 f !== b && (c.bindBuffer(c.ARRAY_BUFFER, h), f = b);
                                 a && va.ab()
                             },
                             bc: function() {
                                 g !== b && (c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, n), g = b)
                             },
                             bind: function(a) {
                                 C.dc(a);
                                 C.bc()
                             },
                             sd: function() {
                                 c.drawElements(c.TRIANGLES, e, z, 0)
                             },
                             td: function(a, b) {
                                 c.drawElements(c.TRIANGLES, a, z, b * B)
                             },
                             remove: function() {
                                 c.deleteBuffer(h);
                                 a.ea && c.deleteBuffer(n);
                                 C = null
                             }
                         };
                         return C
                     },
                     ja: function() {
                         -1 !== f && (c.bindBuffer(c.ARRAY_BUFFER, a), f = -1); - 1 !== g && (c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,
                             b), g = -1)
                     },
                     f: function(a, b) {
                         a && J.ja();
                         b && va.qa();
                         c.drawElements(c.TRIANGLES, 3, c.UNSIGNED_SHORT, 0)
                     },
                     vc: function() {
                         c.deleteBuffer(a);
                         c.deleteBuffer(b)
                     }
                 };
             return h
         }(),
         u = function() {
             var a, b, d, f = !1,
                 g = {
                     w: -2,
                     tc: 1
                 };
             return {
                 m: function() {
                     if (!f) {
                         a = c.createFramebuffer();
                         var e = v.v();
                         b = e && c.DRAW_FRAMEBUFFER ? c.DRAW_FRAMEBUFFER : c.FRAMEBUFFER;
                         d = e && c.READ_FRAMEBUFFER ? c.READ_FRAMEBUFFER : c.FRAMEBUFFER;
                         f = !0
                     }
                 },
                 Ed: function() {
                     return b
                 },
                 Qa: function() {
                     return d
                 },
                 ca: function() {
                     return c.FRAMEBUFFER
                 },
                 Gd: function() {
                     return g
                 },
                 wd: function() {
                     return a
                 },
                 a: function(d) {
                     void 0 === d.tb && (d.tb = !1);
                     var e = d.ga_ ? d.ga_ : !1,
                         f = d.width,
                         p = void 0 !== d.height ? d.height : d.width,
                         m = a,
                         r = !1,
                         y = !1,
                         w = 0;
                     e && (f = f ? f : e.A(), p = p ? p : e.M());
                     var z = {
                         Lb: function() {
                             y || (m = c.createFramebuffer(), y = !0, w = g.tc++)
                         },
                         Tb: function() {
                             z.Lb();
                             z.l();
                             r = c.createRenderbuffer();
                             c.bindRenderbuffer(c.RENDERBUFFER, r);
                             c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, f, p);
                             c.framebufferRenderbuffer(b, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, r);
                             c.clearDepth(1)
                         },
                         bind: function(a, d) {
                             w !== g.w && (c.bindFramebuffer(b, m),
                                 g.w = w);
                             e && e.l();
                             d && c.viewport(0, 0, f, p);
                             a && c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT)
                         },
                         kd: function() {
                             w !== g.w && (c.bindFramebuffer(b, m), g.w = w)
                         },
                         clear: function() {
                             c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT)
                         },
                         nd: function() {
                             c.clear(c.COLOR_BUFFER_BIT)
                         },
                         od: function() {
                             c.clear(c.DEPTH_BUFFER_BIT)
                         },
                         Xc: function() {
                             c.viewport(0, 0, f, p)
                         },
                         l: function() {
                             w !== g.w && (c.bindFramebuffer(b, m), g.w = w)
                         },
                         rtt: function(a) {
                             e = a;
                             g.w !== w && (c.bindFramebuffer(c.FRAMEBUFFER, m), g.w = w);
                             a.l()
                         },
                         C: function() {
                             c.bindFramebuffer(b, null);
                             g.w = -1
                         },
                         resize: function(a, b) {
                             f = a;
                             p = b;
                             r && (c.bindRenderbuffer(c.RENDERBUFFER, r), c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, f, p))
                         },
                         remove: function() {
                             c.bindFramebuffer(b, m);
                             c.framebufferTexture2D(b, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, null, 0);
                             r && c.framebufferRenderbuffer(b, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, null);
                             c.bindFramebuffer(b, null);
                             c.deleteFramebuffer(m);
                             r && c.deleteRenderbuffer(r);
                             z = null
                         }
                     };
                     d.tb && z.Tb();
                     return z
                 },
                 C: function() {
                     c.bindFramebuffer(b, null);
                     g.w = -1
                 },
                 dd: function() {
                     c.bindFramebuffer(b,
                         null);
                     c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                     c.viewport(0, 0, v.A(), v.M());
                     g.w = -1
                 },
                 reset: function() {
                     g.w = -2
                 },
                 T: function() {
                     0 !== g.w && (c.bindFramebuffer(b, a), g.w = 0)
                 },
                 clear: function() {
                     c.viewport(0, 0, v.A(), v.M());
                     c.clear(c.COLOR_BUFFER_BIT)
                 }
             }
         }(),
         V = function() {
             function a(a) {
                 c.bindTexture(c.TEXTURE_2D, a)
             }

             function b(a) {
                 ma[0] = a;
                 a = qa[0];
                 var b = a >> 16 & 32768,
                     d = a >> 12 & 2047,
                     H = a >> 23 & 255;
                 return 103 > H ? b : 142 < H ? b | 31744 | ((255 == H ? 0 : 1) && a & 8388607) : 113 > H ? (d |= 2048, b | (d >> 114 - H) + (d >> 113 - H & 1)) : b = (b | H - 112 << 10 | d >> 1) + (d & 1)
             }

             function d(a) {
                 var d =
                     new Uint16Array(a.length);
                 a.forEach(function(a, H) {
                     d[H] = b(a)
                 });
                 return d
             }

             function f() {
                 if (null !== S.Ra) return S.Ra;
                 var a = e(d([1, 1, 1, 1]));
                 return null === a ? !0 : S.Ra = a
             }

             function g() {
                 if (null !== S.Sa) return S.Sa;
                 var a = e(new Uint8Array([255, 255, 255, 255]));
                 return null === a ? !0 : S.Sa = a
             }

             function e(a) {
                 if (!va.Va() || !B) return null;
                 a = O.a({
                     isFloat: !1,
                     H: !0,
                     array: a,
                     width: 1
                 });
                 u.C();
                 c.viewport(0, 0, 1, 1);
                 c.clearColor(0, 0, 0, 0);
                 c.clear(c.COLOR_BUFFER_BIT);
                 va.set("s0");
                 a.fb(0);
                 J.f(!1, !0);
                 var b = new Uint8Array(4);
                 c.readPixels(0, 0, 1,
                     1, c.RGBA, c.UNSIGNED_BYTE, b);
                 b = .9 < b[0];
                 a.remove();
                 u.T();
                 return b
             }
             var h = 0,
                 n, p = 0,
                 m, r = !1,
                 y, w, z, B = !1,
                 C = !1,
                 F, I, L, ia = [
                     [1, 0, 0, 0],
                     [0, 1, 0, 0],
                     [0, 0, 1, 0],
                     [0, 0, 0, 1]
                 ],
                 ea = !1,
                 la = !1,
                 ma = new Float32Array(1),
                 qa = new Int32Array(ma.buffer),
                 S = {
                     Ra: null,
                     Sa: null
                 },
                 O = {
                     m: function() {
                         if (!B) {
                             w = [c.RGB, !1, c.RGB, c.RGBA];
                             z = [c.RGB, !1, c.RGB, c.RGBA];
                             n = [c.TEXTURE0, c.TEXTURE1, c.TEXTURE2, c.TEXTURE3, c.TEXTURE4, c.TEXTURE5, c.TEXTURE6, c.TEXTURE7];
                             ea = "undefined" !== typeof JEContext;
                             la = "undefined" !== typeof v;
                             ea && JEContext.Sd() && n.push(c.TEXTURE8,
                                 c.TEXTURE9);
                             m = [-1, -1, -1, -1, -1, -1, -1, -1];
                             y = [c.UNSIGNED_BYTE, c.FLOAT, c.FLOAT];
                             if (!r) {
                                 for (var a = new Float32Array(16384), b = 0; 16384 > b; ++b) a[b] = 2 * Math.random() - 1;
                                 r = {
                                     random: O.a({
                                         isFloat: !0,
                                         isPot: !0,
                                         array: a,
                                         width: 64
                                     }),
                                     Pb: O.a({
                                         isFloat: !1,
                                         isPot: !0,
                                         width: 1,
                                         array: new Uint8Array([0, 0, 0, 0])
                                     })
                                 }
                             }
                             B = !0
                         }
                     },
                     Bc: function() {
                         O.ed()
                     },
                     Jd: function() {
                         return r.Pb
                     },
                     ed: function() {
                         y[1] = v.wa()
                     },
                     Rc: function() {
                         z = w = [c.RGBA, c.RGBA, c.RGBA, c.RGBA]
                     },
                     Ud: function(a, b) {
                         l.set("s1");
                         u.C();
                         var d = a.A(),
                             H = a.M();
                         c.viewport(0, 0, d, H);
                         a.b(0);
                         J.f(!1, !1);
                         c.readPixels(0, 0, d, H, c.RGBA, c.UNSIGNED_BYTE, b)
                     },
                     uc: function(b, d, e) {
                         c.activeTexture(c.TEXTURE0);
                         h = 0;
                         var H = c.createTexture();
                         a(H);
                         var g = v.v() && c.RGBA32F ? c.RGBA32F : c.FLOAT;
                         d = d instanceof Float32Array ? d : new Float32Array(d);
                         c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST);
                         c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST);
                         c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, e);
                         c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, b.A(), b.M(), 0, c.RGBA, g, d);
                         a(null);
                         c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
                         u.T();
                         l.set("s0");
                         b.i();
                         c.clearColor(0, 0, 0, 0);
                         c.clear(c.COLOR_BUFFER_BIT);
                         a(H);
                         J.f(!0, !1);
                         c.deleteTexture(H)
                     },
                     a: function(b) {
                         function e() {
                             a(x);
                             ba && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, ba);
                             b.isPot ? (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, b.xb ? c.MIRRORED_REPEAT : c.REPEAT), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, b.V ? c.MIRRORED_REPEAT : c.REPEAT)) : (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE));
                             b.xa && "undefined" !== typeof JESETTINGS &&
                                 c.texParameterf(c.TEXTURE_2D, JEContext.Dd().TEXTURE_MAX_ANISOTROPY_EXT, JESETTINGS.gd);
                             c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, b.isLinear ? c.LINEAR : c.NEAREST);
                             b.isLinear ? c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, b.isMipmap && !aa ? c.NEAREST_MIPMAP_LINEAR : c.LINEAR) : c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, b.isMipmap && !aa ? c.NEAREST_MIPMAP_NEAREST : c.NEAREST);
                             Q = w[b.oa - 1];
                             N = z[b.oa - 1];
                             T = y[r];
                             if (v.v()) {
                                 var d = c.RGBA32F;
                                 Q === c.RGBA && T === c.FLOAT && d && (N = d);
                                 Q === c.RGB && T === c.FLOAT && d && (N =
                                     d, Q = c.RGBA)
                             }
                             if (b.H && !b.isFloat || b.isFloat && b.isMipmap && xa.Ec())(d = c.RGBA16F) && (N = d), T = v.wa();
                             b.Ab && "undefined" !== typeof c.texStorage2D && (ja = b.Ab);
                             b.yb && 4 === b.oa && (Q = JEContext.Hd());
                             if (b.F) c.texImage2D(c.TEXTURE_2D, 0, N, Q, T, b.F);
                             else if (b.url) c.texImage2D(c.TEXTURE_2D, 0, N, Q, T, A);
                             else if (D) {
                                 try {
                                     var e = c.getError();
                                     e !== c.NO_ERROR && console.log("GLERR in SharedTexture :", e);
                                     c.texImage2D(c.TEXTURE_2D, 0, N, k, t, 0, Q, T, D);
                                     c.getError() !== c.NO_ERROR && (c.texImage2D(c.TEXTURE_2D, 0, N, k, t, 0, Q, T, null), c.getError() !==
                                         c.NO_ERROR && c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, k, t, 0, c.RGBA, c.UNSIGNED_BYTE, null))
                                 } catch (ab) {
                                     c.texImage2D(c.TEXTURE_2D, 0, N, k, t, 0, Q, T, null)
                                 }
                                 b.isKeepArray || (D = null)
                             } else c.texImage2D(c.TEXTURE_2D, 0, N, k, t, 0, Q, T, null);
                             if (b.isMipmap)
                                 if (!aa && q) q.ba(), ha = !0;
                                 else if (aa) {
                                 e = Math.log(Math.min(k, t)) / Math.log(2);
                                 ka = Array(1 + e);
                                 ka[0] = x;
                                 for (d = 1; d <= e; ++d) {
                                     var wa = Math.pow(2, d);
                                     var g = k / wa;
                                     wa = t / wa;
                                     var f = c.createTexture();
                                     a(f);
                                     c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST);
                                     c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER,
                                         c.NEAREST);
                                     c.texImage2D(c.TEXTURE_2D, 0, N, g, wa, 0, Q, T, null);
                                     a(null);
                                     ka[d] = f
                                 }
                                 ha = !0
                             }
                             a(null);
                             m[h] = -1;
                             ba && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
                             da = !0;
                             P && q && (P(q), P = !1)
                         }
                         "undefined" === typeof b.isFloat && (b.isFloat = !1);
                         "undefined" === typeof b.H && (b.H = !1);
                         "undefined" === typeof b.isPot && (b.isPot = !0);
                         "undefined" === typeof b.isLinear && (b.isLinear = !1);
                         "undefined" === typeof b.isMipmap && (b.isMipmap = !1);
                         "undefined" === typeof b.Ga && (b.Ga = !1);
                         void 0 === b.xa && (b.xa = !1);
                         void 0 === b.V && (b.V = !1);
                         void 0 === b.xb && (b.xb = !1);
                         void 0 ===
                             b.yb && (b.yb = !1);
                         void 0 === b.oa && (b.oa = 4);
                         void 0 === b.vb && (b.vb = !1);
                         "undefined" === typeof b.isFlipY && (b.isFlipY = b.url || b.array ? !0 : !1);
                         "undefined" === typeof b.isKeepArray && (b.isKeepArray = !1);
                         b.data && (b.array = "string" === typeof b.data ? ua(b.data) : b.isFloat ? new Float32Array(b.data) : new Uint8Array(b.data), b.isFlipY = !1);
                         var r = 0,
                             H = b.F ? !0 : !1,
                             B = null,
                             S = null,
                             Y = !1,
                             Z = null;
                         b.isFloat && (b.H = !0);
                         b.H && (r = 1);
                         b.vb || v.v() || !b.isFloat || !la || v.hb() || (b.isFloat = !1);
                         b.isFloat && (r = 2);
                         b.xa && ea && !JEContext.Nd() && (b.xa = !1);
                         var x = c.createTexture(),
                             P = b.Ga,
                             A = null,
                             D = !1,
                             k = 0,
                             t = 0,
                             da = !1,
                             G = p++,
                             U = !1,
                             X, K, ca, R, N, Q, T, ba = b.isFlipY,
                             aa = b.H && b.isMipmap && xa && !xa.gc(),
                             ka, ja = -1,
                             ha = !1;
                         "undefined" !== typeof b.width && b.width && (k = b.width, t = "undefined" !== typeof b.height && b.height ? b.height : k);
                         var q = {
                             get: function() {
                                 return x
                             },
                             A: function() {
                                 return k
                             },
                             M: function() {
                                 return t
                             },
                             Kd: function() {
                                 return b.url
                             },
                             Od: function() {
                                 return b.isFloat
                             },
                             Qd: function() {
                                 return b.H
                             },
                             Rd: function() {
                                 return b.isLinear
                             },
                             ba: function() {
                                 c.generateMipmap(c.TEXTURE_2D)
                             },
                             gb: function(b, d) {
                                 aa ? (b || (b = q.pb()),
                                     q.Da(d), a(ka[b]), m[d] = -1) : q.b(d)
                             },
                             pb: function() {
                                 -1 === ja && (ja = Math.log(k) / Math.log(2));
                                 return ja
                             },
                             nb: function(b) {
                                 if (aa) {
                                     b || (b = q.pb());
                                     l.set("s11");
                                     q.Da(0);
                                     var d, e = k,
                                         g = t;
                                     for (d = 1; d <= b; ++d) e /= 2, g /= 2, l.J("u9", .25 / e, .25 / g), c.viewport(0, 0, e, g), a(ka[d - 1]), c.framebufferTexture2D(u.ca(), c.COLOR_ATTACHMENT0, c.TEXTURE_2D, ka[d], 0), J.f(!1, 1 === d);
                                     m[0] = -1
                                 } else q.ba()
                             },
                             Da: function(a) {
                                 a !== h && (c.activeTexture(n[a]), h = a)
                             },
                             b: function(b) {
                                 if (!da) return !1;
                                 q.Da(b);
                                 if (m[b] === G) return !1;
                                 a(x);
                                 m[b] = G;
                                 return !0
                             },
                             fb: function(b) {
                                 c.activeTexture(n[b]);
                                 h = b;
                                 a(x);
                                 m[b] = G
                             },
                             l: function() {
                                 c.framebufferTexture2D(u.ca(), c.COLOR_ATTACHMENT0, c.TEXTURE_2D, x, 0)
                             },
                             i: function() {
                                 c.viewport(0, 0, k, t);
                                 c.framebufferTexture2D(u.ca(), c.COLOR_ATTACHMENT0, c.TEXTURE_2D, x, 0)
                             },
                             je: function() {
                                 c.framebufferTexture2D(u.ca(), c.COLOR_ATTACHMENT0, c.TEXTURE_2D, null, 0)
                             },
                             resize: function(a, b) {
                                 k = a;
                                 t = b;
                                 e()
                             },
                             clone: function(a) {
                                 a = O.a({
                                     width: k,
                                     height: t,
                                     H: b.H,
                                     isFloat: b.isFloat,
                                     isLinear: b.isLinear,
                                     V: b.V,
                                     isFlipY: a ? !ba : ba,
                                     isPot: b.isPot
                                 });
                                 va.set("s0");
                                 u.T();
                                 a.l();
                                 c.viewport(0, 0, k, t);
                                 q.b(0);
                                 J.f(!0, !0);
                                 return a
                             },
                             Xc: function() {
                                 c.viewport(0, 0, k, t)
                             },
                             remove: function() {
                                 c.deleteTexture(x);
                                 q = null
                             },
                             refresh: function() {
                                 q.fb(0);
                                 ba && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0);
                                 H ? c.texImage2D(c.TEXTURE_2D, 0, N, Q, c.UNSIGNED_BYTE, b.F) : c.texImage2D(c.TEXTURE_2D, 0, N, k, t, 0, Q, T, D);
                                 ba && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1)
                             },
                             ib: function() {
                                 var a = k * t * 4;
                                 K = [new Uint8Array(a), new Uint8Array(a), new Uint8Array(a), new Uint8Array(a)];
                                 X = [new Float32Array(K[0].buffer), new Float32Array(K[1].buffer), new Float32Array(K[2].buffer),
                                     new Float32Array(K[3].buffer)
                                 ];
                                 ca = new Uint8Array(4 * a);
                                 R = new Float32Array(ca.buffer);
                                 U = !0
                             },
                             Kb: function() {
                                 U || q.ib();
                                 c.readPixels(0, 0, k, 4 * t, c.RGBA, c.UNSIGNED_BYTE, ca);
                                 var a, b = k * t,
                                     d = 2 * b,
                                     e = 3 * b;
                                 for (a = 0; a < b; ++a) X[0][a] = R[a], X[1][a] = R[a + b], X[2][a] = R[a + d], X[3][a] = R[a + e];
                                 return X
                             },
                             jb: function() {
                                 u.C();
                                 l.set("s12");
                                 q.b(0);
                                 c.viewport(0, 0, k, 4 * t);
                                 for (var a = 0; 4 > a; ++a) c.viewport(0, t * a, k, t), l.Nb("u10", ia[a]), J.f(!1, 0 === a)
                             },
                             ke: function(b) {
                                 var d = T === y[0] && !g();
                                 a(x);
                                 ba && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, ba);
                                 d ? (Y || (B =
                                     document.createElement("canvas"), B.width = k, B.height = t, S = B.getContext("2d"), Z = S.createImageData(k, t), Y = !0), Z.data.set(b), S.putImageData(Z, 0, 0), c.texImage2D(c.TEXTURE_2D, 0, N, Q, T, B)) : c.texImage2D(c.TEXTURE_2D, 0, N, k, t, 0, Q, T, b);
                                 m[h] = G;
                                 ba && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1)
                             },
                             le: function(b, d) {
                                 a(x);
                                 c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, d);
                                 c.texImage2D(c.TEXTURE_2D, 0, N, Q, T, b);
                                 m[h] = G;
                                 d && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1)
                             },
                             Xd: function(a, d) {
                                 var e = k * t,
                                     g = 4 * e;
                                 a = b.H ? a ? "RGBE" : "JSON" : "RGBA";
                                 d && (a = d);
                                 d = v.v() &&
                                     !1;
                                 switch (a) {
                                     case "RGBE":
                                         var f = "s49";
                                         break;
                                     case "JSON":
                                         f = d ? "s0" : "s12";
                                         break;
                                     case "RGBA":
                                     case "RGBAARRAY":
                                         f = "s6"
                                 }
                                 U || ("RGBA" === a || "RGBE" === a || "RGBAARRAY" === a ? (K = new Uint8Array(g), U = !0) : "JSON" !== a || d || q.ib());
                                 u.C();
                                 l.set(f);
                                 q.b(0);
                                 if ("RGBA" === a || "RGBE" === a || "RGBAARRAY" === a) {
                                     c.viewport(0, 0, k, t);
                                     J.f(!0, !0);
                                     c.readPixels(0, 0, k, t, c.RGBA, c.UNSIGNED_BYTE, K);
                                     if ("RGBAARRAY" === a) return {
                                         data: K
                                     };
                                     C || (F = document.createElement("canvas"), I = F.getContext("2d"), C = !0);
                                     F.width = k;
                                     F.height = t;
                                     L = I.createImageData(k, t);
                                     L.data.set(K);
                                     I.putImageData(L, 0, 0);
                                     var h = F.toDataURL("image/png")
                                 } else if ("JSON" === a)
                                     if (d) h = new Float32Array(e), c.viewport(0, 0, k, t), J.f(!0, !0), c.readPixels(0, 0, k, t, c.RGBA, c.FLOAT, h);
                                     else {
                                         for (h = 0; 4 > h; ++h) c.viewport(0, t * h, k, t), l.Nb("u10", ia[h]), J.f(!h, !h);
                                         q.Kb();
                                         h = Array(e);
                                         for (f = 0; f < e; ++f) h[4 * f] = X[0][f], h[4 * f + 1] = X[1][f], h[4 * f + 2] = X[2][f], h[4 * f + 3] = X[3][f]
                                     }
                                 return {
                                     format: a,
                                     data: h,
                                     width: k,
                                     height: t,
                                     isMirrorY: b.V,
                                     isFlipY: "RGBA" === a ? b.isFlipY : !b.isFlipY
                                 }
                             }
                         };
                         b.isMipmap && !aa && da && !ha && (q.ba(), ha = !0);
                         if (b.url) a(x), c.texImage2D(c.TEXTURE_2D,
                             0, c.RGBA, 1, 1, 0, c.RGBA, c.UNSIGNED_BYTE, null), A = new Image, A.rd = "Anonymous", A.crossOrigin = "Anonymous", A.src = b.url, A.onload = function() {
                             k = A.width;
                             t = A.height;
                             e()
                         };
                         else if (b.F) {
                             var E = function() {
                                 k = void 0 !== b.F.videoWidth ? b.F.videoWidth : b.F.width;
                                 t = void 0 !== b.F.videoHeight ? b.F.videoHeight : b.F.height;
                                 k ? e() : setTimeout(E, 1)
                             };
                             E()
                         } else b.array ? (b.H && !b.isFloat ? b.array instanceof Uint16Array ? (D = b.array, e()) : f() ? (D = d(b.array), e()) : (e(), O.uc(q, b.array, ba)) : (D = b.isFloat ? b.array instanceof Float32Array ? b.array : new Float32Array(b.array) :
                             b.array instanceof Uint8Array ? b.array : new Uint8Array(b.array), e()), b.isKeepArray || (D && D !== b.array && (D = null), delete b.array)) : e();
                         q.yc = q.A;
                         P && da && (P(q), P = !1);
                         return q
                     },
                     C: function(b) {
                         b !== h && (c.activeTexture(n[b]), h = b);
                         m[b] = -1;
                         a(null)
                     },
                     ld: function(a) {
                         r.random.b(a)
                     },
                     reset: function() {
                         for (var a = 0; a < n.length; ++a) m[a] = -1;
                         h = -1
                     },
                     Wd: function() {
                         h = -1
                     },
                     he: function() {
                         for (var a = 0; a < n.length; ++a) O.C(a)
                     },
                     vc: function() {
                         r && (r.random.remove(), r.Pb.remove())
                     },
                     ie: function(a, b) {
                         if ("RGBA" === a.format || "RGBE" === a.format) {
                             var d =
                                 new Image;
                             d.src = a.data;
                             d.onload = function() {
                                 O.a({
                                     V: a.isMirrorY,
                                     isFlipY: a.isFlipY,
                                     isFloat: !1,
                                     F: d,
                                     Ga: function(d) {
                                         if ("RGBA" === a.format) b(d);
                                         else {
                                             var e = a.width,
                                                 f = a.height,
                                                 g = O.a({
                                                     V: a.isMirrorY,
                                                     isFloat: !0,
                                                     width: e,
                                                     height: f,
                                                     isFlipY: a.isFlipY
                                                 });
                                             u.T();
                                             c.viewport(0, 0, e, f);
                                             l.set("s50");
                                             g.l();
                                             d.b(0);
                                             J.f(!0, !0);
                                             O.C(0);
                                             b(g);
                                             c.flush();
                                             setTimeout(d.remove, 50)
                                         }
                                     }
                                 })
                             }
                         } else "JSON" === a.format ? b(O.a({
                             isFloat: !0,
                             isFlipY: a.isFlipY,
                             width: a.width,
                             height: a.height,
                             array: new Float32Array(a.data)
                         })) : b(!1)
                     }
                 };
             return O
         }(),
         za = {
             a: function(a) {
                 var b = [V.a(a), V.a(a)],
                     d = [b[1], b[0]],
                     f = d,
                     g = {
                         Uc: function(a) {
                             f[1].l();
                             f[0].b(a);
                             g.Ob()
                         },
                         ae: function(a) {
                             f[1].i();
                             f[0].b(a);
                             g.Ob()
                         },
                         Ob: function() {
                             f = f === b ? d : b
                         },
                         refresh: function() {
                             f[0].refresh();
                             f[1].refresh()
                         },
                         b: function(a) {
                             f[0].b(a)
                         }
                     };
                 return g
             }
         },
         v = function() {
             function a() {
                 b = "undefined" === typeof ya ? JEContext : ya;
                 d = !0
             }
             var b, d = !1,
                 f = !1,
                 g = !1,
                 e = !1,
                 h = !1,
                 n = !1,
                 p = !1,
                 m = !1,
                 r = !1,
                 y = !1,
                 w = !1,
                 z = !0,
                 B = !0,
                 C = !0,
                 F, I = "undefined" === typeof window ? {} : window,
                 L = {
                     m: function() {
                         if (d) return !0;
                         a();
                         L.v() || (L.lb(), L.Na());
                         L.pc();
                         L.qc();
                         u.m();
                         V.m();
                         if (!L.lc()) return !1;
                         J.m();
                         V.Bc();
                         return !0
                     },
                     A: function() {
                         d || a();
                         return b.A()
                     },
                     M: function() {
                         d || a();
                         return b.M()
                     },
                     v: function() {
                         d || a();
                         return b.v()
                     },
                     pc: function() {
                         w = (y = c.getExtension("EXT_color_buffer_float") || c.getExtension("WEBGL_color_buffer_float") || c.getExtension("OES_color_buffer_float")) ? !0 : !1;
                         I.GL_EXT_COLORBUFFERFLOAT = y
                     },
                     qc: function() {
                         c.getExtension("EXT_color_buffer_half_float") || c.getExtension("WEBGL_color_buffer_half_float") || c.getExtension("OES_color_buffer_half_float")
                     },
                     lb: function() {
                         if (!f) {
                             this.v() ||
                                 (g = c.getExtension("OES_texture_float") || c.getExtension("MOZ_OES_texture_float") || c.getExtension("WEBKIT_OES_texture_float"), h = (I.GL_EXT_FLOAT = g) ? !0 : !1);
                             if (h || this.v()) e = c.getExtension("OES_texture_float_linear") || c.getExtension("MOZ_OES_texture_float_linear") || c.getExtension("WEBKIT_OES_texture_float_linear"), I.GL_EXT_FLOATLINEAR = e;
                             f = !0
                         }
                     },
                     Na: function() {
                         if (!r) {
                             if (!this.v()) {
                                 if (n = c.getExtension("OES_texture_half_float") || c.getExtension("MOZ_OES_texture_half_float") || c.getExtension("WEBKIT_OES_texture_half_float")) F =
                                     n.HALF_FLOAT_OES, p = !0;
                                 I.GL_EXT_HALFFLOAT = n
                             }
                             if (p || this.v()) m = c.getExtension("OES_texture_half_float_linear") || c.getExtension("MOZ_OES_texture_half_float_linear") || c.getExtension("WEBKIT_OES_texture_half_float_linear"), I.GL_EXT_HALFFLOATLINEAR = m;
                             r = !0
                         }
                     },
                     wa: function() {
                         if (L.v()) return c.HALF_FLOAT;
                         L.Na();
                         return p ? F : c.FLOAT
                     },
                     hb: function() {
                         return z
                     },
                     fc: function() {
                         return B
                     },
                     md: function() {
                         return C
                     },
                     ec: function() {
                         return w
                     },
                     nc: function() {
                         B = z = !0;
                         var a = c.createFramebuffer();
                         c.bindFramebuffer(c.FRAMEBUFFER, a);
                         var b = c.createTexture();
                         c.bindTexture(c.TEXTURE_2D, b);
                         c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST);
                         c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST);
                         c.texImage2D(c.TEXTURE_2D, 0, L.v() && c.RGBA32F ? c.RGBA32F : c.RGBA, 1, 1, 0, c.RGBA, c.FLOAT, null);
                         c.framebufferTexture2D(u.ca(), c.COLOR_ATTACHMENT0, c.TEXTURE_2D, b, 0);
                         var d = c.checkFramebufferStatus(u.Qa());
                         d !== c.FRAMEBUFFER_COMPLETE && (z = !1);
                         c.texImage2D(c.TEXTURE_2D, 0, L.v() && c.RGBA16F ? c.RGBA16F : c.RGBA, 1, 1, 0, c.RGBA, L.wa(), null);
                         c.framebufferTexture2D(u.ca(),
                             c.COLOR_ATTACHMENT0, c.TEXTURE_2D, b, 0);
                         d = c.checkFramebufferStatus(u.Qa());
                         d !== c.FRAMEBUFFER_COMPLETE && (B = !1);
                         c.bindTexture(c.TEXTURE_2D, null);
                         c.bindFramebuffer(c.FRAMEBUFFER, null);
                         c.deleteTexture(b);
                         c.deleteFramebuffer(a)
                     },
                     mc: function() {
                         var a = u.a({
                             width: 1
                         });
                         a.Lb();
                         var b = V.a({
                             width: 1,
                             isFloat: !0,
                             oa: 3
                         });
                         a.l();
                         b.l();
                         c.flush();
                         c.checkFramebufferStatus(u.Qa()) !== c.FRAMEBUFFER_COMPLETE ? (V.Rc(), C = !1) : C = !0;
                         a.remove();
                         b.remove()
                     },
                     lc: function() {
                         L.nc();
                         if (!z && !B) return !1;
                         L.mc();
                         return !0
                     }
                 };
             return L
         }(),
         xa = function() {
             var a = !1,
                 b = [.8, 1, .8, 1],
                 d = 0,
                 f, g = new Uint8Array(4),
                 e = b.concat(b, b, b),
                 h = !0,
                 n = {
                     m: function() {
                         function b(a, b, d, e) {
                             c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, e ? c.NEAREST_MIPMAP_NEAREST : c.LINEAR);
                             try {
                                 var f = c.getError();
                                 f !== c.NO_ERROR && console.log("GLERR in test_mipmapping() :", f);
                                 c.texImage2D(c.TEXTURE_2D, 0, a, 2, 2, 0, c.RGBA, b, d);
                                 if (c.getError() !== c.NO_ERROR) return !1
                             } catch (ia) {
                                 return !1
                             }
                             e && c.generateMipmap(c.TEXTURE_2D);
                             J.ja();
                             J.f(!1, !0);
                             c.readPixels(0, 0, 1, 1, c.RGBA, c.UNSIGNED_BYTE, g);
                             return 0 !== g[0]
                         }

                         function n(a) {
                             return v.hb() &&
                                 b(y, c.FLOAT, new Float32Array(e), a) ? (d = 3, !0) : !1
                         }

                         function r(a) {
                             return v.fc() ? b(w, v.wa(), new Uint16Array(e), a) || b(w, c.FLOAT, new Float32Array(e), a) ? (d = 2, !0) : !1 : !1
                         }
                         v.lb();
                         v.Na();
                         var y = c.RGBA,
                             w = c.RGBA;
                         if (ya.v()) {
                             var z = c.RGBA32F;
                             z && (y = z);
                             (z = c.RGBA16F) && (w = z)
                         }
                         J.m();
                         u.reset();
                         u.C();
                         c.viewport(0, 0, 1, 1);
                         l.set("s0");
                         a = !0;
                         f = c.createTexture();
                         c.activeTexture(c.TEXTURE0);
                         c.bindTexture(c.TEXTURE_2D, f);
                         c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.REPEAT);
                         c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.REPEAT);
                         c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST);
                         if (r(!0) || n(!0)) return !0;
                         h = !1;
                         return r(!1) || n(!1) ? !0 : !1
                     },
                     gc: function() {
                         return h
                     },
                     Fd: function() {
                         return d
                     },
                     Pd: function() {
                         a || n.m();
                         return 3 === d
                     },
                     Ec: function() {
                         a || n.m();
                         return 2 === d
                     }
                 };
             return n
         }(),
         Ca = {
             a: function(a) {
                 var b = V.a(a.alpha),
                     d = V.a(a.beta);
                 return {
                     oc: function() {
                         b.b(1);
                         d.b(2)
                     }
                 }
             }
         },
         Fa = {
             a: function(a) {
                 var b = a.Zc;
                 b.index = a.index;
                 b.X = a.X;
                 b.parent = a.parent;
                 switch (b.type) {
                     case "input":
                         a = Da.a(b);
                         break;
                     default:
                         a = Ea.a(b)
                 }
                 return a
             }
         },
         Da = {
             a: function(a) {
                 "undefined" ===
                 typeof a.sift && (a.sift = !1);
                 "undefined" === typeof a.DWT && (a.DWT = !1);
                 "undefined" === typeof a.blur && (a.blur = !1);
                 "undefined" === typeof a.siftOutWidth && (a.siftOutWidth = !1);
                 "undefined" === typeof a.filterBank && (a.filterBank = !1);
                 "undefined" === typeof a.poolType && (a.poolType = "max");
                 "undefined" === typeof a.postpreprocessing && (a.postpreprocessing = "copy");
                 "undefined" === typeof a.density && (a.density = 1);
                 a.filterBank && (FilterBank.$d(a.poolType, a.postpreprocessing), FilterBank.Yd(a.density));
                 var b = !1;
                 if (a.mask) {
                     b = !0;
                     SETTINGS &&
                         void 0 !== SETTINGS.ac && (a.mask = SETTINGS.ac + a.mask);
                     var d = V.a({
                         isFloat: !1,
                         url: a.mask
                     })
                 }
                 var f = !1,
                     g = "undefined" !== typeof a.preprocessing ? a.preprocessing : !1,
                     e = !1;
                 a.sift ? Sift.m({
                     Ac: c,
                     la: !1,
                     width: a.size,
                     Td: a.siftOutWidth
                 }) : a.DWT && DWT.m({
                     Ac: c,
                     la: !1,
                     width: a.size
                 });
                 switch (g) {
                     case "sobel":
                         var h = "s30";
                         e = !0;
                         break;
                     case "meanNormalization":
                         h = "s31";
                         e = !0;
                         break;
                     case "grayScale":
                         h = "s29";
                         e = !1;
                         break;
                     case "copy":
                         h = "s0";
                         break;
                     case "inputLightRegulation":
                         h = "s29";
                         Ga.m({
                             width: a.size,
                             Db: a.nBlurPass,
                             Dc: !1
                         });
                         f = !0;
                         break;
                     case "direct":
                     case "none":
                         h = !1;
                         break;
                     default:
                         h = "s3"
                 }
                 b && (h += "Mask");
                 if (a.blur) var n = V.a({
                     isFloat: !1,
                     isPot: !1,
                     width: a.size
                 });
                 var p = V.a({
                         isFloat: !1,
                         isPot: !1,
                         width: a.size
                     }),
                     m, r, y, w = {
                         A: function() {
                             return a.sift ? Sift.da() : a.filterBank ? FilterBank.da() : a.size
                         },
                         da: function() {
                             return w.A()
                         },
                         rb: function() {
                             return a.sift ? Sift.na() : a.DWT ? DWT.na() : a.filterBank ? FilterBank.na() : f ? Ga.na() : p
                         },
                         G: function() {
                             u.T();
                             a.blur && (n.i(), l.set("s51"), l.J("u9", 1 / a.size, 1 / a.size), J.f(!1, !0), n.b(0));
                             h && (l.set(h), e && l.u("u29", 1 / a.size), p.i(), b && d.b(1), J.f(!1, !1),
                                 p.b(0), f ? Ga.Aa(p) : a.sift ? (l.S(), Sift.Aa()) : a.DWT ? (l.S(), DWT.Aa(4)) : a.filterBank && (l.S(), FilterBank.Aa(p)))
                         },
                         Zd: function(a) {
                             m = a
                         },
                         $a: function(b) {
                             m = b;
                             r = "s42";
                             y = V.a({
                                 isFloat: !0,
                                 isPot: !0,
                                 width: a.size
                             })
                         },
                         Oa: function() {
                             return y
                         },
                         L: function() {
                             var a = w.rb(),
                                 b = m.Oa();
                             m.Pa().L(b);
                             b = m.Pa().U();
                             l.set(r);
                             l.u("u28", b * b);
                             a.b(1);
                             y.i();
                             J.f(!1, !1);
                             y.b(0)
                         }
                     };
                 return w
             }
         },
         Ea = {
             a: function(a) {
                 "undefined" === typeof a.disableNormalize && (a.disableNormalize = !1);
                 var b = [],
                     d = [],
                     f, g, e = !1,
                     h, n = !0,
                     p, m, r = a.isReorganize ? a.isReorganize : !1,
                     y = a.kernelsNumber ? !0 : !1,
                     w, z, B, C, F, I, L, ia, ea = a.dynPelu ? Ca.a(a.dynPelu) : !1,
                     la = ea ? !0 : !1,
                     ma = {
                         isEnabled: !1
                     },
                     qa;
                 if ("softmax" === a.type) {
                     a.activation = "softmax";
                     a.size = Math.pow(2, Math.ceil(Math.log(Math.sqrt(a.num_classes)) / Math.log(2)));
                     a.sparsity = "undefined" !== typeof a.sparsity ? a.sparsity : a.X.da();
                     a.gain = "undefined" !== typeof a.gain ? a.gain : 1;
                     l.K("s20", [{
                         type: "1f",
                         name: "u12",
                         value: a.gain
                     }]);
                     var S = V.a({
                             isFloat: !0,
                             isPot: !1,
                             width: a.size
                         }),
                         O = V.a({
                             isFloat: !0,
                             isPot: !1,
                             width: a.size,
                             isMipmap: !0
                         });
                     n = !1;
                     var H = new Uint8Array(Math.pow(4 *
                             a.size, 2)),
                         W;
                     for (W = 0; W < a.size * a.size; ++W) {
                         var M = W < a.num_classes ? 255 : 0;
                         H[4 * W] = M;
                         H[4 * W + 1] = M;
                         H[4 * W + 2] = M;
                         H[4 * W + 3] = M
                     }
                     var fa = V.a({
                         isFloat: !1,
                         isPot: !1,
                         width: a.size,
                         array: H
                     })
                 } else a.cost ? (a.sparsity = "undefined" !== typeof a.sparsity ? a.sparsity : a.X.da(), n = !1) : "full" === a.connectivityUp && (a.sparsity = a.X.da());
                 var na = {
                         elu: "s15",
                         elu01: "s16",
                         relu: "s14",
                         arctan: "s18",
                         sigmoid: "s13",
                         copy: "s0",
                         softplus: "s19",
                         softmax: "s20",
                         dynPelu: "s17"
                     }[a.activation],
                     oa = a.sparsity * a.sparsity,
                     Y = !1,
                     Z = a.size;
                 if (a.maxPooling) {
                     switch (a.maxPooling.size) {
                         case 2:
                             var x =
                                 "s32";
                             break;
                         case 4:
                             x = "s33"
                     }
                     Y = !0;
                     Z /= a.maxPooling.size;
                     var P = V.a({
                         isFloat: !0,
                         isPot: !1,
                         width: Z
                     })
                 }
                 var A = void 0 !== a.Kc && a.Kc ? !0 : !1,
                     D = null,
                     k = null,
                     t = null;
                 A && (D = "s52" + a.index.toString(), l.Ta("s52", D, [((a.normalization.n - 1) / 2).toFixed(1)]), l.K(D, [{
                         type: "1i",
                         name: "u0",
                         value: 0
                     }, {
                         type: "2f",
                         name: "u9",
                         value: [1 / a.size, 1 / a.size]
                     }, {
                         type: "1f",
                         name: "u8",
                         value: a.normalization.alpha
                     }, {
                         type: "1f",
                         name: "u11",
                         value: a.normalization.beta
                     }, {
                         type: "1f",
                         name: "u38",
                         value: a.normalization.k
                     }]), k = V.a({
                         isFloat: !0,
                         isPot: !0,
                         width: a.size
                     }),
                     t = V.a({
                         isFloat: !0,
                         isPot: !0,
                         width: a.size
                     }));
                 var da = a.size * a.sparsity,
                     G = Math.log(da / a.size) / Math.log(2),
                     U, X = V.a({
                         isFloat: !0,
                         isPot: !0,
                         width: a.size
                     }),
                     K;
                 n && (K = V.a({
                     isFloat: !0,
                     isPot: !1,
                     width: a.size
                 }));
                 var ca = V.a(a.bias),
                     R, N = {
                         A: function() {
                             return a.size
                         },
                         da: function() {
                             return Z
                         },
                         qb: function() {
                             return a.num_classes
                         },
                         cc: function(a) {
                             qa.b(a)
                         },
                         Nc: function() {
                             a.remap && a.remap.isEnabled && (ma = {
                                 isEnabled: !0,
                                 Gc: V.a({
                                     isFloat: !1,
                                     isFlipY: !1,
                                     array: new Uint8Array(a.remap.maskTexture.data),
                                     width: a.remap.maskTexture.width,
                                     isPot: !1
                                 }),
                                 layers: a.remap.layers.map(function(b) {
                                     return a.parent.xc(b)
                                 }),
                                 depth: a.remap.depth
                             })
                         },
                         Tc: function() {
                             switch (a.connectivityUp) {
                                 case "gaussian":
                                     R = Ha.a(a.connectivity);
                                     break;
                                 case "direct":
                                     R = Ia.a(a.connectivity);
                                     break;
                                 case "square":
                                     R = Ja.a(a.connectivity);
                                     break;
                                 case "squareFast":
                                     R = Ka.a(a.connectivity);
                                     break;
                                 case "full":
                                     R = La.a(a.connectivity);
                                     break;
                                 case "conv":
                                     m = a.kernelsNumber, R = Ma.a(a.connectivity), r && (p = V.a({
                                         width: Z,
                                         isFloat: !0,
                                         isFlipY: !1,
                                         isPot: !1
                                     }))
                             }
                             R.Y && (U = V.a({
                                 isMipmap: !0,
                                 isFloat: !0,
                                 isPot: !0,
                                 width: da,
                                 Ab: G
                             }))
                         },
                         G: function(b, d) {
                             qa = b;
                             R.Y ? (U.i(), y && ca.b(2), R.G(ma), U.b(0), U.nb(G), X.i(), y ? l.set("s0") : (l.set("s28"), l.u("u28", oa), ca.b(1)), U.gb(G, 0), J.f(!1, !1)) : (X.l(!0, !1), ca.b(1), R.G(ma));
                             l.set(na);
                             A ? k.l() : K.l();
                             X.b(0);
                             la && ea.oc();
                             J.f(!1, !1);
                             A && (l.set(D), t.l(), k.b(0), J.f(!1, !1), l.set("s53"), l.u("u8", 1), K.l(), t.b(1), J.f(!1, !1));
                             if (n) return Y ? (P.i(), K.b(0), l.set(x), l.J("u9", 1 / a.size, 1 / a.size), J.f(!1, !1), d = P) : d = K, d.b(0), r && (p.l(), l.set("s22"), l.J("u16", m, Z / m), J.f(!1, !1), d = p, p.b(0)), I = d;
                             if ("softmax" === a.type) {
                                 l.set("s20");
                                 K.b(0);
                                 S.l();
                                 J.f(!1, !1);
                                 a.disableNormalize ? b = S : (l.set("s2"), S.b(0), fa.b(1), O.l(), J.f(!1, !1), l.set("s0"), g.i(), O.b(0), O.nb(!1), J.f(!1, !1), l.set("s21"), f.i(), O.gb(!1, 0), l.u("u14", K.yc()), g.b(1), J.f(!1, !1), b = f);
                                 if (d) {
                                     switch (e) {
                                         case "cpuRGBAAvg":
                                             break;
                                         default:
                                             var w = N.Jb(b)
                                     }
                                     return w
                                 }
                                 return !1
                             }
                             if (a.cost) {
                                 l.set("gpuRawAvg" === e ? "s8" : "s7");
                                 d = K;
                                 a.disableNormalize || (l.u("u6", 1 / a.size), f.i(), K.b(0), J.f(!1, !1), d = f);
                                 I = d;
                                 switch (e) {
                                     case "cpuRGBA2Float":
                                         d.jb();
                                         w = N.Jb(d);
                                         h(w);
                                         break;
                                     case "gpuRawAvg":
                                     case "gpuRaw":
                                         d.b(0),
                                             h(d)
                                 }
                                 return !1
                             }
                         },
                         ic: function(n) {
                             n && "undefined" !== typeof n.Ib && (e = n.Ib, h = n.Mc);
                             K = V.a({
                                 isFloat: !0,
                                 isPot: !0,
                                 isMipmap: "softmax" === a.type,
                                 width: a.size
                             });
                             "softmax" === a.type && (g = V.a({
                                 isFloat: !0,
                                 isPot: !0,
                                 width: 1
                             }));
                             var k = 0,
                                 m = 0,
                                 p = "undefined" !== typeof a.num_classes && a.num_classes ? a.num_classes : a.size * a.size;
                             for (n = 0; n < p; ++n) b.push(k + (a.size - 1 - m) * a.size), d.push([-1, -1, -1, -1]), ++k, k === a.size && (k = 0, ++m);
                             a.disableNormalize || (f = V.a({
                                 isFloat: !0,
                                 isPot: !0,
                                 width: a.size
                             }))
                         },
                         Jb: function(a) {
                             a.jb();
                             var e = a.Kb();
                             b.forEach(function(a,
                                 b) {
                                 d[b][0] = e[0][a];
                                 d[b][1] = e[1][a];
                                 d[b][2] = e[2][a];
                                 d[b][3] = e[3][a]
                             });
                             return d
                         },
                         $a: function(b) {
                             F = b;
                             ia = {
                                 ge: "s43",
                                 Vd: "s44",
                                 qd: "s42",
                                 ud: "s45",
                                 hd: "s46"
                             }[a.activation];
                             b = {
                                 isFloat: !0,
                                 isPot: !0,
                                 width: a.size
                             };
                             L = V.a(b);
                             z = V.a(b);
                             Y && V.a(b);
                             r && (B = V.a(b));
                             n || (C = V.a({
                                 isFloat: !0,
                                 isPot: !1,
                                 width: a.size
                             }))
                         },
                         Oa: function() {
                             return w
                         },
                         L: function(b) {
                             if (!n) {
                                 C.i();
                                 l.set("quadratic" === a.cost ? "s41" : "s40");
                                 b.b(1);
                                 I.b(0);
                                 J.f(!1, !1);
                                 C.b(0);
                                 var d = 1
                             }
                             b = X;
                             n && (d = F.Oa(), r && (L.i(), l.set("s22"), X.b(0), l.J("u16", m, Z / m), J.f(!1, !1), b = L, d.b(0)),
                                 F.Pa().L(d), d = F.Pa().U());
                             l.set(ia);
                             l.u("u28", d * d);
                             b.b(1);
                             z.i();
                             J.f(!1, !1);
                             w = z;
                             r && (l.set("s22"), B.i(), z.b(0), l.J("u16", Z / m, m), J.f(!1, !1), w = B);
                             w.b(0)
                         }
                     };
                 a.X && N.Tc(a.X);
                 return N
             }
         };

     function Na() {
         var a = {
                 Md: !1
             },
             b, d, f;
         a || (a = {});
         this.xc = function(a) {
             return b[a]
         };
         this.Qc = function(a) {
             var e = !1;
             b = a.map(function(a, b) {
                 return e = a = Fa.a({
                     index: b,
                     parent: this,
                     Zc: a,
                     X: e
                 })
             });
             d = b[0];
             f = b[b.length - 1];
             b.forEach(function(a, b) {
                 0 !== b && a.Nc()
             })
         };
         this.G = function(a, d) {
             var e = d;
             b.forEach(function(b) {
                 e = b.G(e, a)
             });
             return e
         };
         this.$a = function() {
             for (var a = b.length - 1, d; 0 <= a; --a) d = a !== b.length - 1 ? b[a + 1] : !1, b[a].$a(d)
         };
         this.L = function(a) {
             for (var d = b.length - 1; 0 <= d; --d) b[d].L(a)
         };
         this.ob = function() {
             return d.A()
         };
         this.na =
             function() {
                 return f.rb()
             };
         this.Sc = function(a) {
             f.ic(a)
         };
         this.qb = function() {
             return f.qb()
         }
     }
     var Ia = {
             a: function(a) {
                 var b = V.a(a.weights);
                 delete a.weights.data;
                 return {
                     Y: !0,
                     U: function() {
                         return 1
                     },
                     zc: function() {
                         return b
                     },
                     G: function() {
                         l.set("s27");
                         b.b(1);
                         J.f(!1, !1)
                     }
                 }
             }
         },
         La = {
             a: function(a) {
                 var b = a.fromLayerSize * a.toLayerSize,
                     d = a.fromLayerSize,
                     f = V.a(a.weights),
                     g = V.a({
                         isFloat: !0,
                         isPot: !0,
                         width: b,
                         isMipmap: !0
                     }),
                     e = V.a({
                         isFloat: !0,
                         isPot: !0,
                         width: a.fromLayerSize
                     });
                 return {
                     Y: !0,
                     U: function() {
                         return d
                     },
                     G: function(b) {
                         if (b.isEnabled) {
                             l.set("s25");
                             b.Gc.b(3);
                             var d, e = Math.min(b.layers.length, b.depth);
                             for (d = 0; d <
                                 e; ++d) b.layers[d].cc(4 + d)
                         } else l.set("s24");
                         l.u("u19", a.toLayerSize);
                         f.b(1);
                         J.f(!1, !1)
                     },
                     L: function() {
                         l.set("s38");
                         l.u("u19", a.toLayerSize);
                         l.u("u27", a.fromLayerSize);
                         g.i();
                         f.b(1);
                         J.f(!1, !1);
                         e.i();
                         l.set("s0");
                         g.b(0);
                         g.ba();
                         J.f(!1, !1);
                         e.b(0)
                     }
                 }
             }
         },
         Ha = {
             a: function(a) {
                 var b = a.toSparsity * a.toLayerSize,
                     d = b / a.fromLayerSize,
                     f = V.a(a.weights);
                 V.a({
                     width: b,
                     isFloat: !0,
                     array: new Float32Array(a.fromBindings),
                     isPot: !0
                 });
                 var g = V.a({
                     width: b,
                     isFloat: !0,
                     array: new Float32Array(a.toBindings),
                     isPot: !0
                 });
                 return {
                     Y: !0,
                     U: function() {
                         return d
                     },
                     G: function() {
                         l.set("s23");
                         f.b(1);
                         g.b(2);
                         J.f(!1, !0)
                     }
                 }
             }
         },
         Ja = {
             a: function(a) {
                 var b = a.fromLayerSize,
                     d = a.toLayerSize,
                     f = a.toSparsity,
                     g = f * d,
                     e = g / b,
                     h = b / d,
                     n, p, m, r, y = 0,
                     w = 0,
                     z = 0,
                     B = Array(f * d * f * d * 4),
                     C = Array(f * d * f * d * 4),
                     F = Array(b * b);
                 for (n = 0; n < F.length; ++n) F[n] = 0;
                 var I = Math.floor(f / 2),
                     L = .5 / d,
                     ia = .5 / b,
                     ea = .5 / g;
                 for (n = 0; n < d; ++n)
                     for (p = 0; p < d; ++p) {
                         var la = Math.round(n * h);
                         var ma = Math.round(p * h);
                         var qa = n / d;
                         var S = p / d;
                         qa += L;
                         S += L;
                         for (m = 0; m < f; ++m)
                             for (r = 0; r < f; ++r) {
                                 var O = y / g;
                                 var H = w / g;
                                 var W = la + m - I;
                                 var M = ma + r - I;
                                 0 > W && (W += b);
                                 0 > M && (M +=
                                     b);
                                 W >= b && (W -= b);
                                 M >= b && (M -= b);
                                 var fa = W / b;
                                 var na = M / b;
                                 H = 1 - H - 1 / g;
                                 fa += ia;
                                 na += ia;
                                 O += ea;
                                 H += ea;
                                 var oa = n * f + m,
                                     Y = p * f + r;
                                 Y = d * f - Y - 1;
                                 oa = Y * d * f + oa;
                                 B[4 * oa] = O;
                                 B[4 * oa + 1] = H;
                                 B[4 * oa + 2] = fa;
                                 B[4 * oa + 3] = na;
                                 fa = F[M * b + W]++;
                                 na = fa % e;
                                 W = W * e + na;
                                 M = M * e + (fa - na) / e;
                                 M = b * e - 1 - M;
                                 M = M * b * e + W;
                                 C[4 * M] = O;
                                 C[4 * M + 1] = H;
                                 C[4 * M + 2] = qa;
                                 C[4 * M + 3] = S;
                                 ++y >= g && (y = 0, ++w);
                                 ++z
                             }
                     }
                 var Z = V.a(a.weights),
                     x = V.a({
                         width: g,
                         isFloat: !0,
                         array: new Float32Array(C),
                         isPot: !0
                     });
                 C = null;
                 var P = V.a({
                     width: g,
                     isFloat: !0,
                     array: new Float32Array(B),
                     isPot: !0
                 });
                 B = null;
                 var A = V.a({
                         isFloat: !0,
                         isPot: !0,
                         width: g,
                         isMipmap: !0
                     }),
                     D = V.a({
                         isFloat: !0,
                         isPot: !0,
                         width: g / e
                     });
                 return {
                     Y: !0,
                     U: function() {
                         return e
                     },
                     G: function() {
                         l.set("s23");
                         Z.b(1);
                         P.b(2);
                         J.f(!1, !1)
                     },
                     L: function() {
                         l.set("s37");
                         A.i();
                         x.b(1);
                         Z.b(2);
                         J.f(!1, !1);
                         l.set("s0");
                         D.i();
                         A.b(0);
                         A.ba();
                         J.f(!1, !1);
                         D.b(0)
                     }
                 }
             }
         },
         Ma = {
             a: function(a) {
                 function b() {
                     l.u("u25", d);
                     l.u("u26", f);
                     l.u("u19", a.toLayerSize);
                     l.u("u27", a.fromLayerSize)
                 }
                 var d = a.kernelsNumber,
                     f = a.toSparsity,
                     g = f * a.toLayerSize,
                     e = g / a.fromLayerSize,
                     h = V.a(a.weights),
                     n = V.a({
                         isFloat: !0,
                         isPot: !0,
                         width: g,
                         isMipmap: !0
                     }),
                     p = V.a({
                         isFloat: !0,
                         isPot: !0,
                         width: a.fromLayerSize
                     });
                 return {
                     Y: !0,
                     U: function() {
                         return e
                     },
                     Id: function() {
                         return f
                     },
                     zc: function() {
                         return h
                     },
                     G: function() {
                         l.set("s26");
                         b();
                         h.b(1);
                         J.f(!1, !1)
                     },
                     L: function() {
                         l.set("s39");
                         b();
                         n.i();
                         h.b(1);
                         J.f(!1, !1);
                         l.set("s0");
                         p.i();
                         n.b(0);
                         n.ba();
                         J.f(!1, !1);
                         p.b(0)
                     }
                 }
             }
         },
         Ka = {
             a: function(a) {
                 var b = a.toLayerSize,
                     d = a.toSparsity,
                     f = a.stride,
                     g = a.bd * b,
                     e = g / a.fromLayerSize;
                 d = a.bd;
                 var h = V.a(a.weights),
                     n = V.a({
                         isFloat: !0,
                         isPot: !0,
                         width: g / e
                     }),
                     p = u.a({
                         ga_: n
                     });
                 a = [b.toString(), d.toString(), f.toString()].join("_");
                 var m = "s54" + a,
                     r = "s55" + a;
                 l.rc(m) || (b = [{
                     type: "1f",
                     name: "u19",
                     value: b
                 }, {
                     type: "1f",
                     name: "u36",
                     value: f
                 }], l.Ta("s47", m, [d.toFixed(1)]), l.K(m, b.concat([{
                     type: "1i",
                     name: "u5",
                     value: 0
                 }, {
                     type: "1i",
                     name: "u24",
                     value: 1
                 }, {
                     type: "1i",
                     name: "u17",
                     value: 3
                 }])), l.Ta("s48", r, [d.toFixed(1)]), l.K(r, b.concat([{
                     type: "1i",
                     name: "u32",
                     value: 0
                 }, {
                     type: "1i",
                     name: "u17",
                     value: 1
                 }])));
                 return {
                     Y: !1,
                     U: function() {
                         return e
                     },
                     G: function() {
                         l.set(m);
                         h.b(3);
                         J.f(!1);
                         V.C(3)
                     },
                     L: function() {
                         l.set(r);
                         p.bind(!0, !0);
                         h.b(1);
                         J.f(!1);
                         u.C();
                         n.b(0)
                     }
                 }
             }
         },
         Ga =
         function() {
             var a, b, d, f, g, e, h, n, p;
             return {
                 m: function(m) {
                     a = m.Db ? m.Db : 3;
                     b = m.width ? m.width : 64;
                     f = m.Dc ? !0 : !1;
                     m = {
                         isFloat: !1,
                         width: b,
                         isPot: !1,
                         isFlipY: !1
                     };
                     g = V.a(m);
                     e = V.a(m);
                     h = V.a(m);
                     n = V.a(m);
                     p = V.a({
                         isFloat: !0,
                         width: b,
                         isPot: !1,
                         isFlipY: !1
                     });
                     d = 1 / b
                 },
                 Aa: function(b) {
                     l.set("s35");
                     for (var m = 0; m < a; ++m) g.l(), l.J("u9", d, 0), J.f(f, !1), e.l(), g.b(0), l.J("u9", 0, d), J.f(f, !1), e.b(0);
                     l.set("s34");
                     n.l();
                     b.b(0);
                     J.f(f);
                     l.set("s35");
                     for (m = 0; m < a; ++m) h.l(), n.b(0), l.J("u9", d, 0), J.f(f, !1), n.l(), h.b(0), l.J("u9", 0, d), J.f(f, !1);
                     l.set("s36");
                     p.l();
                     b.b(0);
                     e.b(1);
                     n.b(2);
                     J.f(f, !1);
                     p.b(0)
                 },
                 na: function() {
                     return p
                 }
             }
         }();

     function Oa(a, b) {
         a[b] = !0;
         a.setAttribute(b, "true")
     }

     function Pa() {
         var a = !1,
             b = navigator.userAgent || navigator.vendor || window.opera;
         if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,
                 4))) a = !0;
         return a
     }

     function Qa() {
         return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
     }

     function Ra() {
         var a = navigator.userAgent.toLowerCase();
         return -1 == a.indexOf("safari") || -1 < a.indexOf("chrome") ? !1 : !0
     }

     function Sa() {
         return navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? !0 : !1
     }

     function Ta(a) {
         if (!a) return a;
         var b = !1;
         if (a.video) {
             var d = function(a) {
                 var b = {};
                 "undefined" !== typeof a.min && (b.min = a.min);
                 "undefined" !== typeof a.max && (b.max = a.max);
                 "undefined" !== typeof a.ideal && (b.ideal = a.ideal);
                 return b
             };
             b = {};
             "undefined" !== typeof a.video.width && (b.width = d(a.video.width));
             "undefined" !== typeof a.video.height && (b.height = d(a.video.height));
             "undefined" !== typeof a.video.facingMode && (b.facingMode = a.video.facingMode)
         }
         b = {
             audio: a.audio,
             video: b
         };
         "undefined" !== typeof a.deviceId && (b.deviceId = a.deviceId);
         return b
     }

     function Ua(a) {
         var b = a.video.width;
         a.video.width = a.video.height;
         a.video.height = b;
         return a
     }

     function Va(a) {
         function b(a) {
             return [480, 576, 640, 648, 720, 768, 800, 960, 1080, 1152, 1280, 1366, 1920].sort(function(b, d) {
                 return Math.abs(b - a) - Math.abs(d - a)
             })
         }

         function d(b) {
             f.push(b(Ta(a)))
         }
         var f = [];
         if (!a || !a.video) return f;
         if (a.video.width && a.video.height) {
             if (a.video.width.ideal && a.video.height.ideal)
                 for (var g = b(a.video.width.ideal).slice(0, 3), e = b(a.video.height.ideal).slice(0, 3), h = 0, n; h < g.length; ++h) {
                     n = g[h];
                     for (var p = 0, m; p < e.length; ++p)
                         if (m = e[p], n !== a.video.width.ideal || m !== a.video.height.ideal) {
                             var r = Math.max(n,
                                 m) / Math.min(n, m);
                             r < 4 / 3 - .1 || r > 16 / 9 + .1 || d(function(a) {
                                 a.video.width.ideal = n;
                                 a.video.height.ideal = m;
                                 return a
                             })
                         }
                 }
             d(function(a) {
                 return Ua(a)
             })
         }
         a.video.facingMode && (d(function(a) {
             delete a.video.facingMode;
             return a
         }), a.video.width && a.video.height && d(function(a) {
             Ua(a);
             delete a.video.facingMode;
             return a
         }));
         a.video.width && a.video.height && (a.video.width.ideal && a.video.height.ideal && d(function(a) {
             delete a.video.width.ideal;
             delete a.video.height.ideal;
             return a
         }), d(function(a) {
             delete a.video.width;
             delete a.video.height;
             return a
         }));
         f.push({
             audio: a.audio,
             video: !0
         });
         return f
     }

     function Wa(a) {
         try {
             var b = window.matchMedia("(orientation: portrait)").matches ? !0 : !1
         } catch (f) {
             b = window.innerHeight > window.innerWidth
         }
         if (b && a && a.video) {
             b = a.video.width;
             var d = a.video.height;
             b && d && b.ideal && d.ideal && b.ideal > d.ideal && (a.video.height = b, a.video.width = d)
         }
     }

     function Xa(a) {
         a.volume = 0;
         Oa(a, "muted");
         if (Ra()) {
             if (1 === a.volume) {
                 var b = function() {
                     a.volume = 0;
                     window.removeEventListener("mousemove", b, !1);
                     window.removeEventListener("touchstart", b, !1)
                 };
                 window.addEventListener("mousemove", b, !1);
                 window.addEventListener("touchstart", b, !1)
             }
             setTimeout(function() {
                 a.volume = 0;
                 Oa(a, "muted")
             }, 5)
         }
     }

     function Ya(a, b, d, f) {
         navigator.mediaDevices.getUserMedia(f).then(function(f) {
             function e() {
                 setTimeout(function() {
                     if (a.currentTime) {
                         var e = a.videoWidth,
                             g = a.videoHeight;
                         if (0 === e || 0 === g) d("VIDEO_NULLSIZE");
                         else {
                             e = a.videoWidth;
                             g = a.videoHeight;
                             e && (a.style.width = e.toString() + "px");
                             g && (a.style.height = g.toString() + "px");
                             e = {
                                 hc: null,
                                 Yc: null,
                                 Hc: null
                             };
                             try {
                                 var p = f.getVideoTracks()[0];
                                 p && (e.Hc = p, e.hc = p.getCapabilities(), e.Yc = p.getSettings())
                             } catch (m) {}
                             Qa() ? (document.body.appendChild(a), Xa(a), b(a, f, e), setTimeout(function() {
                                 a.style.transform =
                                     "scale(0.0001,0.0001)";
                                 a.style.position = "fixed";
                                 a.style.bottom = "0px";
                                 a.style.right = "0px";
                                 Xa(a)
                             }, 80)) : b(a, f, e)
                         }
                     } else d("VIDEO_NOTSTARTED")
                 }, 200)
             }
             "undefined" !== typeof a.srcObject ? a.srcObject = f : (a.src = window.URL.createObjectURL(f), a.videoStream = f);
             Xa(a);
             a.addEventListener("loadeddata", function() {
                 var b = a.play();
                 Xa(a);
                 "undefined" === typeof b ? e() : b.then(function() {
                     e()
                 }).catch(function() {
                     d("VIDEO_PLAYPROMISEREJECTED")
                 })
             }, !1)
         }).catch(d)
     }

     function Za(a, b, d) {
         var f = Sa() ? document.createElement("video") : !1;
         f ? Sa() ? (d && d.video && (Qa() ? Wa(d) : Pa() && Wa(d), d.video.width && d.video.width.ideal && (f.style.width = d.video.width.ideal + "px"), d.video.height && d.video.height.ideal && (f.style.height = d.video.height.ideal + "px")), Oa(f, "autoplay"), Oa(f, "playsinline"), d && d.audio ? f.volume = 0 : Oa(f, "muted"), Ya(f, a, function() {
                 function g(d) {
                     if (0 === d.length) b("INVALID_FALLBACKCONSTRAINS");
                     else {
                         var e = d.shift();
                         Ya(f, a, function() {
                             g(d)
                         }, e)
                     }
                 }
                 var e = Va(d);
                 g(e)
             }, d)) : b && b("MEDIASTREAMAPI_NOTFOUND") :
             b && b("VIDEO_NOTPROVIDED")
     }

     function $a(a) {
         if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return a(!1, "NOTSUPPORTED"), !1;
         navigator.mediaDevices.enumerateDevices().then(function(b) {
             (b = b.filter(function(a) {
                 return a.kind && -1 !== a.kind.toLowerCase().indexOf("video") && a.label && a.deviceId
             })) && b.length && 0 < b.length ? a(b, !1) : a(!1, "NODEVICESFOUND")
         }).catch(function() {
             a(!1, "PROMISEREJECTED")
         })
     }
     window.JEEFACEFILTERAPI = function() {
         var a, b, d, f, g, e, h, n, p, m, r, y, w, z;

         function B(a) {
             if (D !== A.pause) {
                 var b = D === A.play ? t.Ea : x.$b;
                 ka = setTimeout(L.bind(null, a), b)
             }
         }

         function C() {
             if (-1 !== [A.play, A.W].indexOf(D)) return !1;
             D = A.play;
             E.timestamp = Date.now();
             ja && window.cancelAnimationFrame(ja);
             L(0)
         }

         function F(a, b, d, e, f) {
             a = 4 * (3 * b + a) + d;
             return e + (T[a] / 255 + T[a + 12] / 65025) * (f - e)
         }

         function I() {
             u.T();
             J.reset();
             V.reset();
             l.S();
             l.kb();
             c.disable(c.DEPTH_TEST);
             c.disable(c.BLEND);
             J.ja();
             l.qa()
         }

         function L() {
             if (D !== A.pause) {
                 l.kb();
                 J.reset();
                 J.ja();
                 c.disable(c.DEPTH_TEST);
                 u.T();
                 l.qa();
                 if (!k.Ua) {
                     var a = k.element.currentTime - k.za;
                     0 > a && (k.za = k.element.currentTime);
                     1E3 * a < x.fd || (k.ga_.refresh(), k.za += a, l.set("s57"), k.ra.i(), k.ga_.b(0), J.f(!1, !1))
                 }
                 if (q.O.length > E.I) q.O.splice(0, q.O.length - E.I);
                 else
                     for (; q.O.length < E.I;) q.O.push(0);
                 if (1 !== q.j)
                     if (aa.every(S)) {
                         var b = 0,
                             d = 0;
                         for (a = 0; a < aa.length; ++a) aa[a].detected > b && (b = aa[a].detected, d = 0);
                         for (a = 0; a < E.I; ++a) q.O[a] = d
                     } else {
                         a = 0;
                         b = !1;
                         for (d = q.zb; a < E.I; ++a) {
                             if (S(aa[d]))
                                 if (b) {
                                     do ++d === q.j && (d = 0); while (S(aa[d]))
                                 } else b = !0;
                             q.O[a] = d++;
                             d >= q.j && (d = 0)
                         }
                         q.zb = d
                     }
                 for (var e = 0; e < E.I; ++e) q.aa = q.O[e], q.Wa = (.5 + q.aa) / q.j, q.wb = q.O.lastIndexOf(q.aa) === e, l.set("s58"), 1 !== q.j && l.u("u42", q.Wa), N.i(), k.ra.b(0), Q.b(1), J.f(!1, !1), N.b(0), da.G(!1, N);
                 a = Date.now();
                 E.ma = a - E.timestamp;
                 E.timestamp = a;
                 G.nDetectsPerLoop || (a = x.Fa, E.Fb = E.Eb / E.ma, E.Gb = E.Fb * a + E.Gb * (1 - a), E.Hb = 1E3 / E.ma, E.fa = E.Hb * x.Fa + E.fa * (1 - x.Fa), E.fa > x.$[1] ? (E.I = Math.min(E.I + 1, x.sa[1]), E.fa = (x.$[0] + x.$[1]) / 2) : E.fa < x.$[0] && (E.I = Math.max(E.I - 1, x.sa[0]), E.fa = (x.$[0] + x.$[1]) / 2));
                 u.C();
                 c.viewport(0, 0, 3, 2 * q.j);
                 l.set("s56");
                 Q.b(0);
                 J.f(!1, !1);
                 c.readPixels(0, 0, 3, 2 * q.j, c.RGBA, c.UNSIGNED_BYTE, T);
                 for (a = 0; a < q.j; ++a) {
                     b = ba[a];
                     var f = [a];
                     d = aa[a];
                     var g = Aa[a],
                         h = 2 * a;
                     b.x = F(0, h, 1, -1, 1);
                     b.y = F(0, h, 2, -1, 1);
                     b.N = F(0, h, 3, 0, 1);
                     b.Xa = F(1, h, 0, -ha[0], ha[0]);
                     b.Ya = F(1, h, 1, -ha[1], ha[1]);
                     b.Za = F(1, h, 2, -ha[2], ha[2]);
                     b.va = F(1, h, 3, 0, 1);
                     for (e = 0; e < x.ya; ++e) b.mb[e] = x.sc[e](F(2, h, e, 0, 1));
                     f.kc = b.va - d.detected;
                     f.La = b.x - d.x;
                     f.Ma = b.y - d.y;
                     f.Ka = b.N - d.s;
                     f.Ha = b.Xa - d.rx;
                     f.Ia = b.Ya - d.ry;
                     f.Ja = b.Za - d.rz;
                     e = Math.sqrt(f.La * f.La +
                         f.Ma * f.Ma + f.Ka * f.Ka) / E.ma;
                     f = Math.sqrt(f.Ha * f.Ha + f.Ia * f.Ia + f.Ja * f.Ja) / E.ma;
                     e = 1 - sa(U.translationFactorRange[0], U.translationFactorRange[1], e);
                     f = 1 - sa(U.rotationFactorRange[0], U.rotationFactorRange[1], f);
                     f = e * f * sa(U.qualityFactorRange[0], U.qualityFactorRange[1], b.va);
                     h = g[++Ba[a] % g.length] = f;
                     for (e = 0; e < g.length; ++e) h = Math.min(h, g[e]);
                     h = Math.max(.5, h);
                     f = Math.min(h, f);
                     g = pa(U.alphaRange[1], U.alphaRange[0], Math.pow(f, x.Yb));
                     d.x = pa(d.x, b.x, g);
                     d.y = pa(d.y, b.y, g);
                     d.s = pa(d.s, b.N, g);
                     d.rx = pa(d.rx, b.Xa, g);
                     d.ry = pa(d.ry,
                         b.Ya, g);
                     d.rz = pa(d.rz, b.Za, g);
                     d.detected = pa(d.detected, b.va, x.Wb);
                     g = Math.max(g, x.Xb);
                     for (e = 0; e < x.ya; ++e) d.expressions[e] = pa(d.expressions[e], b.mb[e], g);
                     b.pa = d.detected > x.Bb ? b.pa + 1 : 0
                 }
                 u.dd();
                 u.reset();
                 V.reset();
                 c.enable(c.DEPTH_TEST);
                 t.ua && (1 === q.j ? t.ua(aa[0]) : t.ua(aa));
                 c.disable(c.BLEND);
                 if (D === A.play || D === A.W) ja = window.requestAnimationFrame(B)
             }
         }

         function ia() {
             function a(a) {
                 for (var b = 0, d = []; b < q.j; ++b) d.push(Object.assign({}, a));
                 return d
             }
             k.ra = V.a({
                 isPot: !1,
                 isLinear: !0,
                 isFloat: !1,
                 width: K,
                 height: ca
             });
             N =
                 V.a({
                     isPot: !0,
                     isFloat: !1,
                     width: da.ob()
                 });
             var b = {
                 width: 3,
                 height: q.j,
                 isFloat: !0,
                 isPot: !1,
                 array: function(a) {
                     for (var b = new Float32Array(a.length * q.j), d = 0, e; d < q.j; ++d)
                         for (e = 0; e < a.length; ++e) b[d * a.length + e] = a[e];
                     return b
                 }(new Float32Array([0, G.borderWidth, G.borderHeight, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
             };
             Q = za.a(b);
             T = new Uint8Array(8 * b.width * q.j);
             ba = a({
                 va: 0,
                 x: 0,
                 y: 0,
                 N: 1,
                 Xa: 0,
                 Ya: 0,
                 Za: 0,
                 mb: new Float32Array(x.ya),
                 pa: 0
             });
             aa = a({
                 detected: 0,
                 x: 0,
                 y: 0,
                 s: 1,
                 rx: 0,
                 ry: 0,
                 rz: 0,
                 expressions: new Float32Array(x.ya)
             });
             a({
                 kc: 0,
                 La: 0,
                 Ma: 0,
                 Ka: 0,
                 Ha: 0,
                 Ia: 0,
                 Ja: 0
             })
         }

         function ea() {
             l.K("s58", [{
                 type: "1i",
                 name: "u0",
                 value: 0
             }, {
                 type: "1i",
                 name: "u40",
                 value: 1
             }, {
                 type: "2f",
                 name: "u41",
                 value: R
             }, {
                 type: "1f",
                 name: "u42",
                 value: .5
             }]);
             l.K("s59", [{
                 type: "1i",
                 name: "u43",
                 value: 0
             }, {
                 type: "1i",
                 name: "u40",
                 value: 1
             }, {
                 type: "1f",
                 name: "u46",
                 value: x.cd
             }, {
                 type: "1f",
                 name: "u47",
                 value: x.Sb
             }, {
                 type: "1f",
                 name: "u48",
                 value: x.Rb
             }, {
                 type: "3f",
                 name: "u45",
                 value: [x.bb[0] * R[0], x.bb[1] * R[1], x.bb[2]]
             }, {
                 type: "1f",
                 name: "u42",
                 value: .5
             }, {
                 type: "1f",
                 name: "u49",
                 value: 1
             }]);
             var a = [{
                 type: "1i",
                 name: "u43",
                 value: 0
             }];
             l.K("s60", a);
             l.K("s61", a);
             l.K("s56", [{
                 type: "1i",
                 name: "u40",
                 value: 0
             }, {
                 type: "1f",
                 name: "u51",
                 value: R[0]
             }, {
                 type: "2f",
                 name: "u50",
                 value: [0, .5 / q.j]
             }])
         }

         function la() {
             var k = da.ob(),
                 q = K / k;
             e = G.minScale * q;
             h = G.maxScale * q;
             n = (1 - 2 * G.borderWidth) / G.nStepsX;
             p = (1 - 2 * G.borderHeight) / G.nStepsY;
             m = (h - e) / G.nStepsScale;
             r = G.borderWidth;
             y = G.borderHeight;
             w = 1 - G.borderWidth;
             z = 1 - G.borderHeight;
             R = [k / K, k / ca];
             a = G.borderWidth;
             b = G.borderHeight;
             d = e;
             f = G.borderWidth;
             g = G.borderHeight;
             X = e
         }

         function ma(a) {
             var b = t.eb;
             "JSON" !== b.toUpperCase().split(".").pop() &&
                 (b += x.save);
             ra(b, function(b) {
                 b = JSON.parse(b);
                 b.exportData && b.exportData.thetaXYZfactor && (ha = b.exportData.thetaXYZfactor);
                 a(b)
             })
         }

         function qa() {
             if (ya.m({
                     la: t.P,
                     width: K,
                     height: ca,
                     debug: !1,
                     Lc: function() {
                         Y("GLCONTEXT_LOST")
                     },
                     antialias: !0,
                     premultipliedAlpha: !0
                 })) {
                 if (ya.Cc()) return !0;
                 Y("GL_INCOMPATIBLE");
                 return !1
             }
             Y("GL_INCOMPATIBLE");
             return !1
         }

         function S(a) {
             return a.detected < x.Bb
         }

         function O(a, b, d, e) {
             return d > a ? Math.max(0, a + b / 2 - (d - e / 2)) : Math.max(0, d + e / 2 - (a - b / 2))
         }

         function H() {
             return ba.some(function(a, b) {
                 if (b ===
                     q.aa) return !1;
                 b = ba[q.aa];
                 if (b.pa > a.pa || 3 > a.pa || O(b.x / 2, b.N, a.x / 2, a.N) < x.Cb * b.N) return !1;
                 var d = K / ca;
                 return O(b.y / 2, b.N * d, a.y / 2, a.N * d) > x.Cb * b.N * d
             })
         }

         function W() {
             var k = q.aa;
             Q.Uc(1);
             1 !== q.j && (c.viewport(0, 0, 3, q.j), l.set("s0"), l.Mb("u0", 1), J.f(!1, !1), l.Mb("u0", 0));
             c.viewport(0, k, 1, 1);
             l.set("s59");
             1 !== q.j && l.u("u42", q.Wa);
             if (1 < q.j) {
                 var t = H() ? 0 : 1;
                 l.u("u49", t)
             }
             l.Wc("u44", f, g, X);
             J.f(!1, !1);
             q.wb && (c.viewport(1, k, 1, 1), l.set("s60"), J.f(!1, !1), c.viewport(2, k, 1, 1), l.set("s61"), J.f(!1, !1));
             d += m;
             d > h && (a += n, d = e, a >
                 w && (a = r, b += p, b > z && (b = y)));
             f = a + .8 * (Math.random() - .5) * n;
             g = b + .8 * (Math.random() - .5) * p;
             X = d + .8 * (Math.random() - .5) * m
         }

         function M() {
             l.K("s57", [{
                 type: "1i",
                 name: "u0",
                 value: 0
             }, {
                 type: "mat2",
                 name: "u39",
                 value: k.D
             }])
         }

         function fa() {
             k.B[0] = .5;
             k.B[1] = .5;
             var a = k.R[1] / k.R[0],
                 b = ya.M() / ya.A();
             90 === Math.abs(P.rotate) && (a = 1 / a);
             a > b ? k.B[1] *= b / a : k.B[0] *= a / b;
             k.D[0] = 0;
             k.D[1] = 0;
             k.D[2] = 0;
             k.D[3] = 0;
             switch (P.rotate) {
                 case 0:
                     k.D[0] = k.B[0];
                     k.D[3] = k.B[1];
                     break;
                 case 180:
                     k.D[0] = -k.B[0];
                     k.D[3] = -k.B[1];
                     break;
                 case 90:
                     k.D[1] = k.B[0];
                     k.D[2] = -k.B[1];
                     break;
                 case -90:
                     k.D[1] = -k.B[0], k.D[2] = k.B[1]
             }
         }

         function na(a, b) {
             if (D === A.error) return !1;
             var d = a.videoHeight;
             k.R[0] = a.videoWidth;
             k.R[1] = d;
             k.element = a;
             b && b();
             return !0
         }

         function oa(a, b, d) {
             a && a();
             a = {
                 video: {
                     facingMode: {
                         ideal: P.facingMode
                     },
                     width: {
                         min: P.minWidth,
                         max: P.maxWidth,
                         ideal: P.idealWidth
                     },
                     height: {
                         min: P.minHeight,
                         max: P.maxHeight,
                         ideal: P.idealHeight
                     }
                 },
                 audio: !1
             };
             P.deviceId && (a.deviceId = P.deviceId);
             Za(function(a) {
                 b && b(a);
                 d(a)
             }, function() {
                 Y("WEBCAM_UNAVAILABLE")
             }, a)
         }

         function Y(a) {
             D !== A.error && (D = A.error,
                 t.ka && t.ka(a))
         }

         function Z(a, b) {
             for (var d in a) "undefined" !== typeof b[d] && (a[d] = b[d]);
             b === G && G.nDetectsPerLoop && (E.I = G.nDetectsPerLoop, E.Eb = G.nDetectsPerLoop)
         }
         var x = {
                 save: "NNC.json",
                 Zb: 0,
                 $b: 25,
                 Fa: .2,
                 $: [45, 60],
                 jd: 1 / 3.5,
                 sa: [2, 5],
                 Oc: {
                     minScale: .15,
                     maxScale: .6,
                     borderWidth: .2,
                     borderHeight: .2,
                     nStepsX: 6,
                     nStepsY: 5,
                     nStepsScale: 3,
                     nDetectsPerLoop: 0
                 },
                 bb: [.092, .092, .3],
                 cd: 50,
                 Cb: .12,
                 Bb: .6,
                 Ic: 8,
                 Sb: .75,
                 Rb: 1,
                 $c: {
                     translationFactorRange: [.0015, .005],
                     rotationFactorRange: [.003, .02],
                     qualityFactorRange: [.9,
                         .98
                     ],
                     alphaRange: [.05, 1]
                 },
                 ad: [.65, 1, .262],
                 Wb: .2,
                 Yb: 2,
                 Xb: .1,
                 Jc: 8,
                 ya: 1,
                 sc: [sa.bind(null, .3, .75)],
                 fd: 20
             },
             P = {
                 facingMode: "user",
                 idealWidth: 800,
                 idealHeight: 600,
                 minWidth: 480,
                 maxWidth: 1280,
                 minHeight: 480,
                 maxHeight: 1280,
                 rotate: 0
             },
             A = {
                 Fc: -1,
                 error: -2,
                 sb: 0,
                 play: 1,
                 pause: 2,
                 W: 3
             },
             D = A.sb,
             k = {
                 Ua: !1,
                 element: !1,
                 ga_: !1,
                 ra: !1,
                 R: [0, 0],
                 B: [.5, .5],
                 D: [.5, 0, 0, .5],
                 za: 0
             },
             t = {
                 ka: !1,
                 ua: !1,
                 eb: "./",
                 P: !1,
                 Ea: x.Zb
             },
             da, G = Object.create(x.Oc),
             U = Object.create(x.$c);
         var X = d = g = f = b = a = h = e = z = w = y = r = m = p = n = 0;
         var K, ca, R, N, Q, T, ba, aa, ka = !1,
             ja = !1,
             ha = x.ad,
             q = {
                 j: 1,
                 aa: 0,
                 O: [0],
                 wb: !1,
                 zb: 0,
                 Wa: 0
             },
             E = {
                 ma: 0,
                 timestamp: 0,
                 Fb: 0,
                 Gb: 0,
                 I: x.sa[0],
                 Eb: x.sa[0],
                 Hb: 0,
                 fa: 0,
                 pd: 1
             },
             Aa = [],
             Ba = [];
         return {
             init: function(a) {
                 function b() {
                     D !== A.error && 2 === ++e && (fa(), k.ga_ = V.a({
                         F: k.element,
                         isPot: !1,
                         isFloat: !1,
                         isFlipY: !0
                     }), M(), t.ka && (t.ka(!1, {
                         GL: c,
                         canvasElement: t.P,
                         videoTexture: k.ra.get(),
                         maxFacesDetected: q.j
                     }), I()), C())
                 }
                 if (D !== A.sb) return a.callbackReady && a.callbackReady("ALREADY_INITIALIZED"), !1;
                 D = A.Fc;
                 a.callbackReady && (t.ka = a.callbackReady);
                 a.callbackTrack && (t.ua = a.callbackTrack);
                 "undefined" !==
                 typeof a.animateDelay && (t.Ea = a.animateDelay);
                 "undefined" !== typeof a.NNCpath && (t.eb = a.NNCpath);
                 "undefined" !== typeof a.maxFacesDetected && (q.j = Math.max(1, a.maxFacesDetected));
                 if (q.j > x.Ic) return Y("MAXFACES_TOOHIGH"), !1;
                 if (!a.canvasId) return Y("NO_CANVASID"), !1;
                 t.P = document.getElementById(a.canvasId);
                 if (!t.P) return Y("INVALID_CANVASID"), !1;
                 K = t.P.width;
                 ca = t.P.height;
                 if (!K || !ca) return Y("INVALID_CANVASDIMENSIONS"), !1;
                 for (var d = 0; d < q.j; ++d) Aa.push(new Float32Array(x.Jc)), Ba.push(0);
                 a.scanSettings && Z(G, a.scanSettings);
                 a.stabilizationSettings && Z(U, a.stabilizationSettings);
                 var e = 0;
                 if (a.videoSettings && a.videoSettings.videoElement) na(a.videoSettings.videoElement, b);
                 else {
                     if (a.videoSettings)
                         for (var f in a.videoSettings) P[f] = a.videoSettings[f];
                     oa(a.onWebcamAsk, a.onWebcamGet, function(a) {
                         na(a, b)
                     })
                 }
                 ma(function(a) {
                     if (!qa()) return !1;
                     da = new Na;
                     da.Qc(a.layers);
                     da.Sc({
                         Ib: "gpuRawAvg",
                         Mc: W
                     });
                     l.Vb([{
                         id: "s57",
                         name: "_",
                         Z: "attribute vec2 a0;uniform mat2 u39;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=vec2(.5,.5)+u39*a0;}",
                         ta: ["a0"],
                         ha: [2],
                         c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vv0);}",
                         g: ["u0", "u39"],
                         precision: "lowp"
                     }, {
                         id: "s58",
                         name: "_",
                         c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vv0);}",
                         Z: "attribute vec2 a0;uniform sampler2D u40;uniform vec2 u41;uniform float u42;varying vec2 vv0;void main(){vec4 a=texture2D(u40,vec2(.17,u42));vec2 b=a.gb,c=a.a*u41;vv0=b+a0*.5*c,gl_Position=vec4(a0,0.,1.);}",
                         ta: ["a0"],
                         ha: [2],
                         g: ["u0", "u40", "u41", "u42"],
                         precision: "lowp"
                     }, {
                         id: "s59",
                         name: "_",
                         c: "uniform sampler2D u43,u40;uniform vec3 u44,u45;uniform float u46,u47,u48,u42,u49;const vec4 k=vec4(1.,1.,1.,1.),l=vec4(0.,0.,0.,0.),e=vec4(.25,.25,.25,.25);void main(){vec4 c=texture2D(u43,vec2(.5,.5)),d=texture2D(u43,vec2(.75,.5));float g=dot(e,texture2D(u43,vec2(.75,.75))),h=dot(e,texture2D(u43,vec2(0.,.5))),i=dot(e,texture2D(u43,vec2(.25,.5)));vec4 a=texture2D(u40,vec2(.17,u42));float b=dot(c,e),j=dot(d,e);bool f=b>u47&&b>j+u48;f?a.r=2.:a.r>u46?a.r=0.:a.r>1.9?a.r+=1.:0.,a.r*=u49;if(a.r<.9)a=vec4(1.,u44);else a.r*=step(1.9,a.r),a.gba+=vec3(g,h,i)*u45*a.a;gl_FragColor=a;}",
                         Z: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                         g: "u43 u40 u44 u46 u45 u49 u47 u48 u42".split(" ")
                     }, {
                         id: "s60",
                         name: "_",
                         Z: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                         c: "uniform sampler2D u43;const vec4 e=vec4(.25,.25,.25,.25);const vec3 g=vec3(.5,.5,.5);void main(){float a=dot(e,texture2D(u43,vec2(0.,.75))),b=dot(e,texture2D(u43,vec2(.25,.75))),c=dot(e,texture2D(u43,vec2(.5,.75))),d=dot(e,texture2D(u43,vec2(.5,.5)));vec3 f=vec3(a,b,c)*.5+g;gl_FragColor=vec4(f,d);}",
                         g: ["u43"]
                     }, {
                         id: "s61",
                         name: "_",
                         Z: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                         c: "uniform sampler2D u43;const vec4 e=vec4(.25,.25,.25,.25);void main(){float a=dot(e,texture2D(u43,vec2(.25,.25)));gl_FragColor=vec4(a,0.,0.,0.);}",
                         g: ["u43"]
                     }, {
                         id: "s56",
                         name: "_",
                         c: "uniform sampler2D u40;uniform vec2 u50;uniform float u51;varying vec2 vv0;void main(){float g=step(.5,mod(gl_FragCoord.y+1.5,2.)),c=step(.33,vv0.x);vec4 a=texture2D(u40,vv0+u50);a.a=mix(a.a*u51,a.a,c);vec4 d=floor(255.*a),f=255.*(255.*a-d),b=mix(d,f,g)/255.;b.x=mix(step(a.x,1.5),b.x,c),gl_FragColor=b;}",
                         g: ["u40", "u51", "u50"]
                     }]);
                     ia();
                     la();
                     ea();
                     b()
                 });
                 return !0
             },
             toggle_pause: function(a) {
                 if (-1 !== [A.play, A.pause, A.W].indexOf(D)) return a ? -1 === [A.play, A.W].indexOf(D) ? a = !1 : (ka && (clearTimeout(ka), ka = !1), ja && (window.cancelAnimationFrame(ja), ja = !1), D = A.pause, a = !0) : a = C(), a
             },
             toggle_slow: function(a) {
                 -1 !== [A.play, A.pause, A.W].indexOf(D) && -1 !== [A.play, A.W].indexOf(D) && (D = a ? A.W : A.play)
             },
             set_animateDelay: function(a) {
                 t.Ea = a
             },
             resize: function() {
                 var a = t.P.width,
                     b = t.P.height;
                 if (a === K && b === ca) return !1;
                 K = a;
                 ca = b;
                 la();
                 ea();
                 fa();
                 M();
                 return !0
             },
             set_inputTexture: function(a, b, d) {
                 k.R[0] = b;
                 k.R[1] = d;
                 k.Ua = !0;
                 fa();
                 I();
                 M();
                 l.set("s57");
                 k.ra.i();
                 c.activeTexture(c.TEXTURE0);
                 c.bindTexture(c.TEXTURE_2D, a);
                 J.f(!0, !0)
             },
             reset_inputTexture: function() {
                 k.R[0] = k.element.videoWidth;
                 k.R[1] = k.element.videoHeight;
                 k.Ua = !1;
                 fa();
                 M()
             },
             get_videoDevices: function(a) {
                 return $a(a)
             },
             set_scanSettings: function(a) {
                 Z(G, a);
                 la();
                 ea()
             },
             set_stabilizationSettings: function(a) {
                 Z(U, a)
             }
         }
     }();;
     return JEEFACEFILTERAPI;
 })();