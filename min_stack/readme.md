数组的操作 
1： push pop 入栈出栈操作 
只在栈顶部  FILO
2： unshift  shift 队列操作
FIFO（队列）
CPU 的底层 
写代码 放音乐 聊天 
进程， 分时分片  
CPU计算 分时 运行时钟

程序是怎么运行的？  程序会崩溃
代码文本  文件系统fs
a.c 编译器 a.o  可被执行的程序文件 
内存  I/O 
CPU 分配空间  成为独立进程 （ 进程就是一段程序的执行过程）
365? 
排队  空间不够    
执行 就绪 阻塞
顺序执行 
代码是程序   

程序崩溃  
CPU分时分片， 切换操作 
Tomcat 独立的进程 
进程的切换消耗巨大，
线程 可被独立运行 
web 
Tomcat多线程  
分布式 
1 冯诺依曼原理
代码 文件 -> compile  可执行文件 
文件系统  
2 CPU分时分片  
执行可执行文件 
进程 由操作系统负责调度 
并行 多个进程在由CPU切换 
3 进程切换 消耗大
线程 
.java  编译后变成 *.javac
启动多线程 （进程创建线程  线程独立工作 ）
4 Tomcat （ 每个访问者准备new一个线程）
每个线程有独立的资源、内存
占据越来越多的空间， 不释放，处于堵塞状态 
- 分配的线程数量到了Tomcat可以被分配的上限
- 线程为了就绪 ，分配的内存 达到服务器的物理上限时，也会死
5 分布式的概念  
nginx   动态扩容 
加服务器 负载均衡 

