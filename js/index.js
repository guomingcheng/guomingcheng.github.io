
var fso=new ActiveXObject("Scripting.FileSystemObject");//创建文件系统对象
var s=fso.GetFolder("E:\\");//获取文件夹对象
var fn=new Enumerator(s.files);
var s="";
for(;!fn.atEnd();fn.moveNext()){
    s=s+fn.item()+"\n";
}

alert(s);