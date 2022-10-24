const obj = {
    data:[],
    getData: function(){
        // let _this = this
        // setTimeout(function(){
        //     var result = ["abh","hh","ooo"]
        //     console.log(this);
        //     _this.data = result
        //     console.log(_this.data);
        // },1000)
        setTimeout(()=>{
            var result = ["abh","hh","ooo"]
            console.log(this);
            this.data = result
            console.log(this.data);
        },2000)
    }
}

obj.getData()