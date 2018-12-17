<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>请假条</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>

		</div>
		<el-form ref="leave" :rules="rules" :model="leave" class="demo-ruleForm" label-width="100px">
		<el-row type="flex">
				<el-col :span="8" style="margin-right: 50px;">
			<el-form-item label="请假人" prop="name">
				<el-input placeholder="请输入姓名" v-model="leave.name" clearable>
				</el-input>
			 </el-form-item>
			</el-col>
			<el-col :span="8">
				<el-form-item label="部门" prop="partment">
			    <el-select v-model="leave.partment" placeholder="请选择部门">
			      <el-option label="技术部" value="技术部"></el-option>
			      <el-option label="财务部" value="财务部"></el-option>
			      <el-option label="人事部" value="人事部"></el-option>
			      <el-option label="售后部" value="售后部"></el-option>
			    </el-select>
			  </el-form-item>
			</el-col>
		</el-row>
		<el-row type="flex" >
				<el-col :span="22">
					<el-form-item label="事由" prop="region">
						<el-select v-model="leave.region" placeholder="请选择事由" style="width:100%">
							<el-option label="事假" value="事假"></el-option>
							<el-option label="病假" value="病假"></el-option>
							<el-option label="婚假" value="婚假"></el-option>
							<el-option label="产假" value="产假"></el-option>
							<el-option label="丧假" value="丧假"></el-option>
							<el-option label="年假" value="年假"></el-option>
							<el-option label="其他" value="其他"></el-option>
						</el-select>
					</el-form-item>
			</el-col>
		</el-row>
		<el-row type="flex">
			<el-col :span="12" style="margin-right: 10px;line-height: 40px;">
				<el-form-item label="时间">
					<el-date-picker v-model="time" style="width:100%" value-format="timestamp" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right">
					</el-date-picker>
				</el-form-item>
			</el-col>
		</el-row>
		<el-row type="flex">
			<el-col :span="24" style="margin-right: 10px;line-height: 40px;">
				<el-form-item label="说明" prop="leave_desc">
				<el-input type="textarea" v-model="leave.leave_desc" placeholder="请备注请假说明"></el-input>
			</el-form-item>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="12">
				<el-form-item label="情急联系人" prop="other">
					<el-input v-model="leave.other"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item label="情急电话" prop="other_phone">
					<el-input v-model="leave.other_phone"></el-input>
				</el-form-item>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="10" :offset="7" style="text-align: center;margin-top: 50px;">
			<el-button plain type="primary" :loading="loading" @click="submitForm('leave')">提交</el-button>
			<el-button plain @click="resetForm('leave')">重置</el-button>
			</el-col>
		</el-row>
		</el-form>

	</el-card>
</template>

<script>
	import axios from "axios";
	import qs from "qs";
	export default {
		data() {
			return {
				leave: {
					name:'张三',
					partment:'技术部',
					leave_desc:"",
					region:"",
					other:"",
					other_phone:"",
					start:0,
					end:0,
				},
				rules: {
					 name: [
			            { required: true, message: '请输入请假人', trigger: 'blur' },
			            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
			          ],
				},
				time: [],
				loading:false,
//				value1:"",
//				value2:"",
//				value3:"",
//				value4:"",
//				textarea1:"",
//				input3:"",
//				input4:"",
//				input5:"",
//				options: [{
//					value: 'jishubumen',
//					label: '技术部门',
//					children: [{
//						value: 'shejiyuanze',
//						label: '设计原则',
//						children: [{
//							value: 'yizhi',
//							label: '一致'
//						}, {
//							value: 'fankui',
//							label: '反馈'
//						}, {
//							value: 'xiaolv',
//							label: '效率'
//						}, {
//							value: 'kekong',
//							label: '可控'
//						}]
//					}, {
//						value: 'daohang',
//						label: '导航',
//						children: [{
//							value: 'cexiangdaohang',
//							label: '侧向导航'
//						}, {
//							value: 'dingbudaohang',
//							label: '顶部导航'
//						}]
//					}]
//				}, {
//					value: 'renshibumen',
//					label: '人事部门',
//					children: [{
//						value: 'basic',
//						label: 'Basic',
//						children: [{
//							value: 'layout',
//							label: 'Layout 布局'
//						}, {
//							value: 'color',
//							label: 'Color 色彩'
//						}, {
//							value: 'typography',
//							label: 'Typography 字体'
//						}, {
//							value: 'icon',
//							label: 'Icon 图标'
//						}, {
//							value: 'button',
//							label: 'Button 按钮'
//						}]
//					}, {
//						value: 'form',
//						label: 'Form',
//						children: [{
//							value: 'radio',
//							label: 'Radio 单选框'
//						}, {
//							value: 'checkbox',
//							label: 'Checkbox 多选框'
//						}, {
//							value: 'input',
//							label: 'Input 输入框'
//						}, {
//							value: 'input-number',
//							label: 'InputNumber 计数器'
//						}, {
//							value: 'select',
//							label: 'Select 选择器'
//						}, {
//							value: 'cascader',
//							label: 'Cascader 级联选择器'
//						}, {
//							value: 'switch',
//							label: 'Switch 开关'
//						}]
//					}, {
//						value: 'data',
//						label: 'Data',
//						children: [{
//							value: 'table',
//							label: 'Table 表格'
//						}, {
//							value: 'tag',
//							label: 'Tag 标签'
//						}, {
//							value: 'progress',
//							label: 'Progress 进度条'
//						}]
//					}, {
//						value: 'notice',
//						label: 'Notice',
//						children: [{
//							value: 'alert',
//							label: 'Alert 警告'
//						}, {
//							value: 'loading',
//							label: 'Loading 加载'
//						}, {
//							value: 'message',
//							label: 'Message 消息提示'
//						}]
//					}, {
//						value: 'navigation',
//						label: 'Navigation',
//						children: [{
//							value: 'menu',
//							label: 'NavMenu 导航菜单'
//						}, {
//							value: 'tabs',
//							label: 'Tabs 标签页'
//						}, {
//							value: 'breadcrumb',
//							label: 'Breadcrumb 面包屑'
//						}]
//					}, {
//						value: 'others',
//						label: 'Others',
//						children: [{
//							value: 'dialog',
//							label: 'Dialog 对话框'
//						}, {
//							value: 'tooltip',
//							label: 'Tooltip 文字提示'
//						}, {
//							value: 'popover',
//							label: 'Popover 弹出框'
//						}]
//					}]
//				}, {
//					value: 'shouhoubumen',
//					label: '售后部门',
//					children: [{
//						value: 'axure',
//						label: 'Axure Components'
//					}, {
//						value: 'sketch',
//						label: 'Sketch Templates'
//					}, {
//						value: 'jiaohu',
//						label: '组件交互文档'
//					}]
//				}],
//
//				options3: [{
//					label: '病假',
//					options: [{
//						value: 'bingjia1',
//						label: '病假1'
//					}, {
//						value: 'bingjia2',
//						label: '病假2'
//					}]
//				}, {
//					label: '事假',
//					options: [{
//						value: 'shijia1',
//						label: '事假1'
//					}, {
//						value: 'shijia2',
//						label: '事假2'
//					}, {
//						value: 'shijia3',
//						label: '事假3'
//					}]
//				}],
//				value7: ''
			}
		},
		methods: {
//			 submit1() {
//	        this.$notify({
//	          title: '提交成功',
//	          message: '请假申请已提交',
//	          type: 'success',
//	          duration:1500,
//	        })
//		},
//		 submit2() {
//      this.$confirm('您将重置页面内容, 是否继续?', '提示', {
//        confirmButtonText: '确定',
//        cancelButtonText: '取消',
//        type: 'warning',
//        duration:1500
//      }).then(() => {
//        this.$message({
//          type: 'success',
//          message: '重置成功!',
//          duration:1500
//        });
//      }).catch(() => {
//        this.$message({
//          type: 'info',
//          message: '已取消重置',
//          duration:1500
//        });          
//      });
//    },
        addLeave(){
        	
        	    this.loading = true;
				let url = "http://192.168.255.30:8888/index.php/Index/Index/addLeave";
				this.leave.start = this.time[0] / 1000;
				this.leave.end = this.time[1] / 1000;
				axios.post(url,qs.stringify({data:this.leave})).then(res=>{
					if(res.data.code > 0){
						this.$notify({
							title: '成功',
							message: res.data.msg,
							type: 'success'});
					}else {
						this.$notify({
							title: '失败',
							message: res.data.msg,
							type: 'error'
						});
					}
					this.loading = false;
				}).catch(err=>{
					this.$notify({
						title: '错误',
						message: '服务器错误！',
						type: 'error'
					});
					this.loading = false;
				});
			},
	    submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if(valid) {
					console.log("通过验证");
					this.addLeave();
				} else {
						console.log('error submit!!');
						return false;
				}
				});
			},
		resetForm(formName) {
			this.$refs[formName].resetFields();
			}
		}

	}
	
</script>

<style>
	.proj {
		margin-right: 0;
	}
</style>