import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as u,c as n,f as i}from"./app-1f5c234e.js";const o={},r=i('<h2 id="知道哪些阻塞队列-blockingqueue-底层原理是什么" tabindex="-1"><a class="header-anchor" href="#知道哪些阻塞队列-blockingqueue-底层原理是什么" aria-hidden="true">#</a> 知道哪些阻塞队列（BlockingQueue）？底层原理是什么</h2><p>阻塞队列（BlockingQueue）是一种特殊的队列，它在插入或删除元素时，如果队列已满或已空，会导致当前线程阻塞，直到队列有空位或有元素可取。阻塞队列可以用于实现生产者-消费者模式，以及线程池中的任务队列。</p><p>Java中提供了多种阻塞队列的实现，它们都实现了BlockingQueue接口，但是底层的数据结构和同步机制有所不同。以下是一些常见的阻塞队列：</p><ul><li>ArrayBlockingQueue：基于数组的有界阻塞队列，内部维护了一个定长的数组来缓存数据。它使用一个锁来控制对数组的访问，因此插入和删除操作不能并行执行。它还支持公平和非公平的访问策略。</li><li>LinkedBlockingQueue：基于链表的有界或无界阻塞队列，内部维护了一个双向链表来缓存数据。它使用两个锁来分别控制链表的头部和尾部，因此插入和删除操作可以并行执行。它默认采用非公平的访问策略。</li><li>PriorityBlockingQueue：基于数组的无界优先级阻塞队列，内部维护了一个堆来缓存数据。它使用一个锁来控制对堆的访问，因此插入和删除操作不能并行执行。它按照元素的自然顺序或者指定的比较器来排序元素。</li><li>DelayQueue：基于PriorityBlockingQueue实现的无界延迟阻塞队列，内部维护了一个延迟堆来缓存数据。它使用一个锁和一个条件变量来控制对堆的访问，因此插入和删除操作不能并行执行。它只允许取出已经到期的元素。</li><li>SynchronousQueue：不存储元素的无界阻塞队列，内部没有任何缓存空间。它使用两个栈来分别存储等待插入和等待删除的线程，因此插入和删除操作可以并行执行。它支持公平和非公平的访问策略。</li></ul><h2 id="介绍-arrayblockingqueue-和-linkedblockingqueue-的底层区别-高并发情况下哪个表现更好" tabindex="-1"><a class="header-anchor" href="#介绍-arrayblockingqueue-和-linkedblockingqueue-的底层区别-高并发情况下哪个表现更好" aria-hidden="true">#</a> 介绍 ArrayBlockingQueue 和 LinkedBlockingQueue 的底层区别，高并发情况下哪个表现更好</h2><p>ArrayBlockingQueue 和 LinkedBlockingQueue 是两种实现了 BlockingQueue 接口的阻塞队列，它们都可以用于多线程环境下的数据交换，但是它们的底层实现和性能特点有所不同。我将从以下几个方面来介绍它们的区别：</p><ul><li><strong>数据结构</strong>：ArrayBlockingQueue 是基于数组的有界阻塞队列，它在创建时就需要指定数组的大小，而且这个大小在之后不能改变。LinkedBlockingQueue 是基于链表的有界或无界阻塞队列，它在创建时可以指定容量，也可以不指定（默认为 Integer.MAX_VALUE）。LinkedBlockingQueue 内部使用了一个双向链表来存储数据，每次插入或删除元素都会动态创建或销毁链表节点。</li><li><strong>公平性策略</strong>：ArrayBlockingQueue 可以在创建时指定是否使用公平性策略，即是否按照线程等待的先后顺序来访问队列。这样可以避免线程饥饿，但是也会增加开销。LinkedBlockingQueue 没有提供这样的选项，它默认使用非公平的访问策略。</li><li><strong>锁机制</strong>：ArrayBlockingQueue 使用一个 ReentrantLock 来控制对数组的访问，因此插入和删除操作不能并行执行。LinkedBlockingQueue 使用两个 ReentrantLock 来分别控制链表的头部和尾部，因此插入和删除操作可以并行执行。这样可以减少线程之间的竞争，提高并发性能。</li><li>[<strong>内存占用</strong>：ArrayBlockingQueue 在创建时就需要分配一块固定大小的内存空间来存储数组，如果数组大小设置过大或过小，都会造成内存浪费或不足。LinkedBlockingQueue 在创建时只需要分配一个头节点的内存空间，之后根据需要动态分配或回收节点的内存空间。这样可以节省内存空间，但是也会增加垃圾回收的开销。</li></ul><p>ArrayBlockingQueue 和 LinkedBlockingQueue 的底层区别主要体现在数据结构、公平性策略、锁机制和内存占用方面。在高并发情况下，哪个表现更好取决于具体的应用场景和需求。一般来说，如果队列的容量是固定且合理的，并且对公平性有要求，那么 ArrayBlockingQueue 可能更适合；如果队列的容量是动态变化的，并且对并发性能有要求，那么 LinkedBlockingQueue 可能更适合。</p><h2 id="介绍-synchronousqueue-及其底层原理" tabindex="-1"><a class="header-anchor" href="#介绍-synchronousqueue-及其底层原理" aria-hidden="true">#</a> 介绍 SynchronousQueue 及其底层原理</h2><p>SynchronousQueue 是一种特殊的阻塞队列，它没有实际的容量，也就是说它不存储任何元素。它的作用是在两个线程之间传递数据，一个线程（生产者）提供数据，另一个线程（消费者）获取数据。当生产者线程调用 put 方法时，它必须等待消费者线程调用 take 方法，才能将数据交给消费者线程，并返回。同样，当消费者线程调用 take 方法时，它必须等待生产者线程调用 put 方法，才能从生产者线程那里接收数据，并返回。这样就实现了两个线程之间的同步传输。</p><p>SynchronousQueue 底层有两种实现方式：栈和队列。栈方式是非公平的，队列方式是公平的。非公平模式下，SynchronousQueue 使用一个栈来存储等待的线程，每个节点代表一个线程，节点中存储了线程要传递或接收的数据。当一个新的线程进来时，它会尝试与栈顶的节点匹配，如果匹配成功，就将数据传递给对方，并弹出栈顶节点。如果匹配失败，就将自己作为新的栈顶节点入栈，并等待被匹配。公平模式下，SynchronousQueue 使用一个队列来存储等待的线程，每个节点代表一个线程，节点中存储了线程要传递或接收的数据。当一个新的线程进来时，它会尝试与队首的节点匹配，如果匹配成功，就将数据传递给对方，并移除队首节点。如果匹配失败，就将自己作为新的队尾节点入队，并等待被匹配。</p><p>SynchronousQueue 的特点是高效、简洁、实时。它可以用于实现生产者-消费者模式，或者在不同的线程之间传递任务或结果。它也是 Java 线程池中 newCachedThreadPool 的默认工作队列。</p><h2 id="延时队列-delayqueue-底层原理" tabindex="-1"><a class="header-anchor" href="#延时队列-delayqueue-底层原理" aria-hidden="true">#</a> 延时队列（DelayQueue）底层原理</h2><p>延时队列（DelayQueue）是一种特殊的阻塞队列，它的特点是队列中的元素都有一个延迟时间，只有当延迟时间到期后，才能从队列中取出元素。延时队列的应用场景有很多，比如定时任务、缓存过期、订单超时等。</p><p>延时队列的底层原理是基于优先级队列（PriorityQueue）和锁（ReentrantLock）实现的。优先级队列是一种基于数组的二叉堆结构，它可以保证每次取出的元素都是最小（或最大）的。锁是用来控制多个线程对队列的并发访问，以及实现线程的阻塞和唤醒。</p><p>延时队列中存放的元素必须实现 Delayed 接口，该接口有两个方法：</p><ul><li><code>getDelay(TimeUnit unit)</code>：返回元素的剩余延迟时间，单位由参数指定。</li><li><code>compareTo(Delayed o)</code>：比较两个元素的延迟时间，用于优先级队列的排序。</li></ul><p>当一个线程向延时队列中插入一个元素时，它会先获取锁，然后调用优先级队列的 offer 方法将元素插入到合适的位置。如果插入的元素是队列中最早到期的元素，那么它会唤醒等待在条件变量上的线程（如果有的话），因为这些线程可能可以取出这个元素了。最后释放锁。</p><p>当一个线程从延时队列中取出一个元素时，它也会先获取锁，然后调用优先级队列的 peek 方法查看队首元素。如果队首元素为空，说明队列中没有任何元素，那么它会在条件变量上等待，直到被其他线程唤醒或者被中断。如果队首元素不为空，但是还没有到期，那么它也会在条件变量上等待，但是会指定一个等待时间，等待时间就是元素的剩余延迟时间。如果在等待时间内，有其他线程插入了一个更早到期的元素，那么它会被唤醒并重新计算等待时间。如果在等待时间内，没有任何线程唤醒它，那么它会自动醒来并再次查看队首元素。如果队首元素已经到期，那么它会调用优先级队列的 poll 方法将其弹出并返回。最后释放锁。</p>',19),l=[r];function a(c,t){return u(),n("div",null,l)}const g=e(o,[["render",a],["__file","阻塞队列.html.vue"]]);export{g as default};
