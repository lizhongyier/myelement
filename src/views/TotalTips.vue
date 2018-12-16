<template>
	<div class="total_tips">
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>请假人员</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<el-table :data="leavepeople" style="width: 100%">
			<el-table-column type="index" width="50"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="cause" label="事由"></el-table-column>
			<el-table-column prop="timestart" label="开始时间"></el-table-column>
			<el-table-column prop="timeend" label="结束时间"></el-table-column>
			<el-table-column prop="notes" label="备注"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="agree">同意</el-button>
					<el-button size="mini" type="danger"  @click="disagree">不同意</el-button>
				</template>
			</el-table-column>
		</el-table>
		
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-sizes="[10, 20, 30, 40]" :page-size="size" layout="total, sizes, prev, pager, next, jumper" :total="total">
		</el-pagination>
		

	</el-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				size: 10,
				total: 100,
				page: 1,
				leavepeople: [{
					name: "小明",
					cause: "家有急事",
					timestart: "2018-12-1,12:30",
					timeend: "2018-12-2,12:30",
					notes: "尽量提前回来"
				},{
					name: "小王",
					cause: "身体酸痛",
					timestart: "2018-12-1,9:30",
					timeend: "2018-12-2,9:30",
					notes: "尽量提前回来"
				},{
					name: "小李",
					cause: "家有急事",
					timestart: "2018-12-3,9:30",
					timeend: "2018-12-4,9:30",
					notes: "尽量提前回来"
				},{
					name: "小华",
					cause: "感冒发烧",
					timestart: "2018-12-4,9:30",
					timeend: "2018-12-5,9:30",
					notes: "尽量提前回来"
				}, {
					name: "小红",
					cause: "头痛眼昏",
					timestart: "2018-12-4,9:30",
					timeend: "2018-12-6,9:30",
					notes: "尽量提前回来"
				}, ]

			};
		},
		methods: {
			agree() {
			        this.$alert('<i>确认同意请假？</i>', '批准同意', {
			          dangerouslyUseHTMLString: true
			        });
			},
			disagree() {
				this.$prompt('请输入不同意原因', '不批准', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',})
			},
			handleSizeChange(s) {
				this.leavepeople =  this.getleavepeople(s);
			},
			handleCurrentChange(p) {
				console.log(p);
				this.leavepeople =  this.getleavepeople(this.size);
			},
			getleavepeople(n){
				let arr=[];
				let names=["小明","小花","小张","小王","小李"];
				let causes=["家有急事","身体酸痛","感冒发烧","头痛眼昏","孩子有事"];
				let notess=["尽量提前回来","可能会推迟","完事儿就回来","迫不得已","很紧急"];
				for(let i=0;i<n;i++){
					let index=Math.floor(Math.random()*names.length);
					let j=Math.floor(Math.random()*causes.length);
					let k=Math.floor(Math.random()*notess.length);
					let s={
						id:1,
						name:names[index],
						cause:causes[j],
						timestart:"12"+"-"+Math.floor(Math.random()*30)+","+Math.floor(Math.random()*24)+":"+"30",
						timeend:"12"+"-"+Math.floor(Math.random()*31)+","+Math.floor(Math.random()*24)+":"+"30",
						notes:notess[k]
					};
					arr.push(s);
				}
				return arr;
			}
			
		}
	}
</script>

<style>
.total_tips .el-pagination{
		margin-top: 20px;
		text-align: center;
	}

</style>