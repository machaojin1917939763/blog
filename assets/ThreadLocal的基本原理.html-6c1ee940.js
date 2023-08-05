const e=JSON.parse('{"key":"v-0bdbc32c","path":"/demo/ThreadLocal%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86.html","title":"","lang":"en-US","frontmatter":{"description":"介绍 Exchanger 的底层原理及其适用场景 Exchanger 是一个用于两个线程之间交换数据的工具类，它提供了一个同步点，让两个线程在交换数据之前都达到这个点，然后进行数据的交换。Exchanger 的底层原理是基于 CAS 操作和自旋锁实现的，它维护了一个内部类 Node，用来封装线程和数据。Exchanger 有两个槽位，分别对应两个线程，...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/demo/ThreadLocal%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:description","content":"介绍 Exchanger 的底层原理及其适用场景 Exchanger 是一个用于两个线程之间交换数据的工具类，它提供了一个同步点，让两个线程在交换数据之前都达到这个点，然后进行数据的交换。Exchanger 的底层原理是基于 CAS 操作和自旋锁实现的，它维护了一个内部类 Node，用来封装线程和数据。Exchanger 有两个槽位，分别对应两个线程，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-05T11:04:04.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2023-08-05T11:04:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-05T11:04:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"介绍 Exchanger 的底层原理及其适用场景","slug":"介绍-exchanger-的底层原理及其适用场景","link":"#介绍-exchanger-的底层原理及其适用场景","children":[]},{"level":2,"title":"说一下Entry和ThreadLocal和ThreadLocalMap的关系？尽量详细一点","slug":"说一下entry和threadlocal和threadlocalmap的关系-尽量详细一点","link":"#说一下entry和threadlocal和threadlocalmap的关系-尽量详细一点","children":[]},{"level":2,"title":"那是不是ThreadLocal不能像HashMap那样存储多个值，而是只能存储一个值？","slug":"那是不是threadlocal不能像hashmap那样存储多个值-而是只能存储一个值","link":"#那是不是threadlocal不能像hashmap那样存储多个值-而是只能存储一个值","children":[]},{"level":2,"title":"ThreadLocal每次在访问的时候都会清理一下key被垃圾回收回收调的value，我这样说对吗？","slug":"threadlocal每次在访问的时候都会清理一下key被垃圾回收回收调的value-我这样说对吗","link":"#threadlocal每次在访问的时候都会清理一下key被垃圾回收回收调的value-我这样说对吗","children":[]},{"level":2,"title":"ThreadLocal 父子线程之间如何传递数据","slug":"threadlocal-父子线程之间如何传递数据","link":"#threadlocal-父子线程之间如何传递数据","children":[]}],"git":{"createdTime":1691233444000,"updatedTime":1691233444000,"contributors":[{"name":"machaojin","email":"1917939763@qq.com","commits":1}]},"readingTime":{"minutes":7.4,"words":2220},"filePathRelative":"demo/ThreadLocal的基本原理.md","localizedDate":"August 5, 2023","autoDesc":true}');export{e as data};
