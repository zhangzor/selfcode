const test = new Vue({
    el: "#app",
    data: {
        boolean: false,
        books: [
            {
                id: 1,
                name: 'C语言',
                byDate: '2021-03-16',
                price: 68.00,
                count: 1
            },
            {
                id: 2,
                name: 'java',
                byDate: '2021-03-16',
                price: 79.00,
                count: 1
            },
            {
                id: 3,
                name: 'python',
                byDate: '2021-03-16',
                price: 86.00,
                count: 1
            },
            {
                id: 4,
                name: 'javascript',
                byDate: '2021-03-16',
                price: 77.00,
                count: 1
            },
            {
                id: 5,
                name: 'Vue框架讲解',
                byDate: '2021-03-16',
                price: 83.00,
                count: 1
            }
        ]
    },
    methods: {
        // getPrice(price) {
        //     return '￥' + price.toFixed(2);
        // },
        increment(index) {
            return this.books[index].count++;
        },
        decrement(index) {
            return this.books[index].count--;
        },
        del(index) {
            return this.books.splice(index, 1);
        }
    },
    computed: {
        countPrice() {
            let num = 0;
            // 第一种方法：
            // for (let i = 0; i < this.books.length; i++) {
            //     num += this.books[i].price * this.books[i].count;
            // }
            // 第二种方法：
            // for (let i in this.books) {
            //     num += this.books[i].price * this.books[i].count;
            // }
            // 第三种方法：
            for (let item of this.books) {
                num += item.price * item.count;
            }
            return num;
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2);
        }
    }
})