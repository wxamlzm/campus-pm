/*
DATE: 2021/08/14;
AUTHOR: ZD;
EFFECT: 辅助ajax解析对象；数组参数；将传入的对象，或关联数组打散，拼接成符合要求的url,只适用'GET'类方式
*/
var jsonToStr = function(dataJson){
  var arr = [];
  for(var key in dataJson){
    arr.push(`${key}=${dataJson[key]}`)
    // question:对象中的属性能用.访问的前提是什么
    // question:为什么合理用.访问会是undefine：因为这里的data.key会去data下面找key属性，不能承担变量传值的职责
  }
  var strUrlParams = arr.join('&');
  return strUrlParams;
}
// 通过对象的传参方式，可以以较小的篇幅，同时获得键值和键名，在这里毫无疑问两者都需要，所以感受是比较好的封装方式
// 由此推断，以对象为核心的封装方式的流行可能有这方面的原因