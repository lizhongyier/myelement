<template>
	<div class="total_tips">
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>请假人员</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		
		<el-table :data="leavepeople"  v-loading="loading" style="width: 100%">
			<el-table-column type="index" label="序号"  width="50"></el-table-column>
			<el-table-column prop="name" label="姓名" ></el-table-column>
			<el-table-column prop="partment" label="部门" ></el-table-column>
			<el-table-column prop="region" label="事由" ></el-table-column>
			<el-table-column  label="时间" >
				<template slot-scope="scope">
					{{timeFrmate(scope.row.start)}}到{{scope.row.end|timeFrmate}}
				</template>
				
			</el-table-column>
			<el-table-column prop="other" label="紧急联系人" ></el-table-column>
			<el-table-column prop="other_phone" label="紧急联系人电话" ></el-table-column>
			<el-table-column prop="leave_desc" label="描述" ></el-table-column>
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
	import axios from "axios";
	import qs from "qs";
	export default {
		data() {
			return {
				size: 10,
				total: 100,
				page: 1,
				leavepeople: [],
				loading:false,

			};
		},
		methods: {
			timeFrmate(timestamp) {
				let time=new Date(timestamp*1000);
				let y=time.getFullYear();
				let M=time.getMonth();
				let d=time.getDate();
				let h=time.getHours();
				let m=time.getMinutes();
				let s=time.getSeconds();
				h = h < 10 ? ('0' + h) : h;
				m = m < 10 ? ('0' + m) : m;
				s = s < 10 ? ('0' + s) : s;
				return y+"-" + (M + 1) + '-' + d + ',' + h + ":" + m + ":" + s;
				
			},
			
			
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
				this.size = s;
				this.page = 1;
				this.getleavepeople(1);
			},
			handleCurrentChange(p) {
				this.page = p;
				this.getleavepeople(p);
			},
			getleavepeople(page){
				this.loading = true;
				const url = "http://192.168.255.30:8888/index.php/Index/Index/getLeaveList";
				axios.post(url,qs.stringify({page:page,size:this.size})).then(res=>{this.leavepeople = res.data.list;console.log(res);this.total = res.data.total;this.loading = false;}).catch(err=>{this.loading = false;});
				
			},
			
			
		},
		created(){
			this.getleavepeople(1)
		}
		
	}
</script>

<style>
.total_tips .el-pagination{
		margin-top: 20px;
		text-align: center;
	}

</style>