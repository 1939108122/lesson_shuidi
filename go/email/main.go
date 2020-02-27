package main  // 包
import (
	"github.com/jordan-wright/email"
	"net/smtp"
	"log"
)
func main() { //入口函数
	//node-mail Go email 
	e := email.NewEmail() // := 表示定义并且赋值 
	e.From = "HAWK <1939108122@qq.com>"
	// [] Array? 多个用户发邮件  {}集合
	e.To = []string{"1416526150@qq.com", "924594466@qq.com"}
	e.Subject = "你的头发还好吗？" //标题
	// e.Text =  []byte ("*************")内容
	//链接
	e.HTML = []byte(`
	<ul>
		<li><a href="https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E8%94%A1%E5%BE%90%E5%9D%A4&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1027005945,157918800&os=3315316059,28669419&simid=880136,783377318&pn=0&rn=1&di=153010&ln=1839&fr=&fmq=1582817715101_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=http%3A%2F%2Fi.serengeseba.com%2Fuploads%2Fi_3_1027005945x157918800_26.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined">还不赶紧点击？</a></li>
		<li><a href="https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E8%94%A1%E5%BE%90%E5%9D%A4&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2344407568,3690040438&os=1703189447,2521466382&simid=4148409319,478092542&pn=54&rn=1&di=71610&ln=1839&fr=&fmq=1582817715101_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=http%3A%2F%2Fp5.qhimg.com%2Ft01ee1c67d1ea424dc2.png&rpstart=0&rpnum=0&adpicid=0&force=undefined">是兄弟就来砍我</a></li>
	</ul>
	`)
	e.AttachFile("kun.jpg")
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth( "", "1939108122@qq.com" ,"rbxhzaswmdsccghb", "smtp.qq.com"))
	
	if err != nil {
		log.Fatal(err)

	}
}