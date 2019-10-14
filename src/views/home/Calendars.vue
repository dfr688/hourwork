<template>
  <section class="wh_container">
    <div class="wh_content_all">
      <div class="wh_content">
        <div class="wh_content_item" v-for="(tag,index) in textTop" :key="index">
          <div class="wh_top_tag">{{tag}}</div>
        </div>
      </div>
      <div class="wh_content">
        <div class="wh_content_item" v-for="(item,index) in list" :key="index" @click="clickDay(item,index)">
          <div
            class="wh_item_date"
            v-bind:class="[{ wh_isMark: item.isMark},{wh_other_dayhide:item.otherMonth!=='nowMonth'},{wh_want_dayhide:item.dayHide},{wh_isToday:item.isToday},{wh_chose_day:item.chooseDay},setClass(item)]"
          >{{item.id}}
					</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import timeUtil from "./Calendar.js";
export default {
  data() {
    return {
      myDate: [],
      list: [],
      historyChose: [],
      dateTop: "",
			chooseKey: "",
			price:[],
			dayPriceList:[],
    };
  },
  props: {
    markDate: {
      type: Array,
      default: () => []
    },
    markDateMore: {
      type: Array,
      default: () => []
    },
    textTop: {
      type: Array,
      default: () => ["一", "二", "三", "四", "五", "六", "日"]
    },
    sundayStart: {
      type: Boolean,
      default: () => false
    },
    agoDayHide: {
      type: String,
      default: `0`
    },
    futureDayHide: {
      type: String,
      default: `2554387200`
    }
  },
  created() {
    this.intStart();
    this.myDate = new Date();
  },
	computed: {

	},
  methods: {
    intStart() {
      timeUtil.sundayStart = this.sundayStart;
    },
    setClass(data) {
      let obj = {};
      obj[data.markClassName] = data.markClassName;
      return obj;
    },
    clickDay: function(item, index) {
      if (item.otherMonth === "nowMonth" && !item.dayHide) {
        this.getList(this.myDate, item.date);
      }
      if (item.otherMonth !== "nowMonth") {
        item.otherMonth === "preMonth"
          ? this.PreMonth(item.date)
          : this.NextMonth(item.date);
      }
    },
    ChoseMonth: function(date, isChosedDay = true) {
			const initDate = date;
			 //console.log(date);
       date = timeUtil.dateFormat(date);
			
       this.myDate = new Date(date);
			 this.$emit("changeMonth", timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(initDate, date, isChosedDay);
      } else {
        this.getList(initDate);
      }
    },
    PreMonth: function(date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = timeUtil.getOtherMonth(this.myDate, "preMonth");
			this.$emit("changeMonth", timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    NextMonth: function(date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = timeUtil.getOtherMonth(this.myDate, "nextMonth");
      this.$emit("changeMonth", timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    forMatArgs: function() {
      let markDate = this.markDate;
      let markDateMore = this.markDateMore;
      markDate = markDate.map(k => {
        return timeUtil.dateFormat(k);
      });
      markDateMore = markDateMore.map(k => {
        k.date = timeUtil.dateFormat(k.date);
        return k;
      });
      return [markDate, markDateMore];
    },
    getList: function(date, chooseDay, isChosedDay = true) {
      const [markDate, markDateMore] = this.forMatArgs();
			if(typeof date == 'object') {
				this.dateTop = `${date.getFullYear()}年${date.getMonth() + 1}月`;
			} else if(typeof date == 'string') {
				const arrData = date.split(" ")[0].split("-");
				this.dateTop = arrData[0] + "年" + arrData[1] + "月";
			}
// 			console.log(date);
// 			console.log(date.getFullYear());
      // this.dateTop = `${date.getFullYear()}年${date.getMonth() + 1}月`;
      let arr = timeUtil.getMonthList(this.myDate);
      for (let i = 0; i < arr.length; i++) {
        let markClassName = "";
        let k = arr[i];
        k.chooseDay = false;
        const nowTime = k.date;
        const t = new Date(nowTime).getTime() / 1000;
        //看每一天的class
        for (const c of markDateMore) {
          if (c.date === nowTime) {
            markClassName = c.className || "";
          }
        }
        //标记选中某些天 设置class
        k.markClassName = markClassName;
        k.isMark = markDate.indexOf(nowTime) > -1;
        //无法选中某天
        k.dayHide = t < this.agoDayHide || t > this.futureDayHide;
        if (k.isToday) {
          this.$emit("isToday", nowTime);
        }
        let flag = !k.dayHide && k.otherMonth === "nowMonth";
        if (chooseDay && chooseDay === nowTime && flag) {
          this.$emit("choseDay", nowTime);
          this.historyChose.push(nowTime);
          k.chooseDay = true;
        } else if (
          this.historyChose[this.historyChose.length - 1] === nowTime &&
          !chooseDay &&
          flag
        ) {
          k.chooseDay = true;
        }
      }
      this.list = arr;
    }
  },
  mounted() {
    this.getList(this.myDate);
  },
  watch: {
    markDate: {
      handler(val, oldVal) {
        this.getList(this.myDate);
      },
      deep: true
    },
    markDateMore: {
      handler(val, oldVal) {
        this.getList(this.myDate);
      },
      deep: true
    },
    agoDayHide: {
      handler(val, oldVal) {
        this.getList(this.myDate);
      },
      deep: true
    },
    futureDayHide: {
      handler(val, oldVal) {
        this.getList(this.myDate);
      },
      deep: true
    },
    sundayStart: {
      handler(val, oldVal) {
        this.intStart();
        this.getList(this.myDate);
      },
      deep: true
    }
  }
};
</script>
<style scoped>
.wh_container {
  width: 100%;
  margin-top: 1.5rem;
}
.wh_content_all {
  background: #fff;
  width: 100%;
  overflow: hidden;
  padding-bottom: 8px;
}
.wh_content {
  display: flex;
  flex-wrap: wrap;
  padding: 0 3% 0 3%;
  width: 100%;
}
.wh_content:first-child .wh_content_item_tag,
.wh_content:first-child .wh_content_item {
  color: #999;
  font-size: .28rem;
}
.wh_content_item,
.wh_content_item_tag {
  font-size: .36rem;
  width: 14.2%;
  text-align: center;
  color: #333;
  position: relative;
}
.wh_top_tag {
  width: 100%;
  height: 1.18rem;
  line-height: 1.18rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wh_item_date {
  width: 100%;
  height: 1.18rem;
  line-height: 1.18rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wh_content_item > .wh_isMark {
  margin: auto;
  border-radius: 100px;
  background: blue;
  z-index: 2;
}
.wh_content_item .wh_other_dayhide {
  color: #bfbfbf;
}
.wh_content_item .wh_want_dayhide {
  color: #bfbfbf;
}
.wh_content_item .wh_isToday {
  background: #fae7b3;
  border-radius: .1rem;
}
/* .wh_content_item .wh_chose_day {
  background: green;
  border-radius: 100px;
} */
</style>