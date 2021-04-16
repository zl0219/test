function Student(name) {
    function People(name) {
        this.task = [];
        let fn = () => {
            console.log(`Hi！ This is ${name}`);
            this.next();
        }
        this.task.push(fn);
        setTimeout(() => {
            this.next();
        }, 0)
        return this;
    }

    People.prototype.sleep = function (time) {
        const self = this
        const fn = (ms = time) => {
            setTimeout(() => {
                console.log("Wake up after", ms);
                self.next()
            }, ms * 1000)
        }
        this.task.push(fn)
        return this
    }

    People.prototype.sleepFirst = function (time) {
        const self = this;
        const fn = (ms=time) => {
            setTimeout(() => {
                console.log("Wake up after",ms);
                self.next();
            }, ms * 1000)
        }
        this.task.unshift(fn);
        return this;
    }
    People.prototype.study = function (course) {
        const self = this;
        const fn = () => {
            console.log(`Study ${course}~`)
            self.next()
        }
        this.task.push(fn);
        return this
    }
    People.prototype.next = function () {
        const fn = this.task.shift();
        fn && fn()
    }
    return new People(name);
}

// Student('fxy')
// Student('fxy').sleep(3).study('javascript')
// Student('fxy').study('javascript').study('vue')
Student('fxy').sleepFirst(5).study('Ajax')