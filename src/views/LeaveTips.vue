<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>请假条</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>

		</div>
		<el-row type="flex">
			<el-col :span="2" style="margin-right: 10px;line-height: 40px;">
				<label>姓名:</label>
				</el-col>
				<el-col :span="4" style="margin-right: 50px;">
				<el-input placeholder="请输入姓名" v-model="input10" clearable>
				</el-input>
			</el-col>
			<el-col :span="8">
				<span style="margin-right: 10px;">部门:</span>
				<el-cascader :options="options" change-on-select></el-cascader>
			</el-col>
		</el-row>
		<el-row type="flex" >
				<el-col :span="2" style="margin-right: 10px;line-height: 40px;">
				<label style="margin-right: 10px;">原因:</label>
				</el-col>
				<el-col :span="22">
				<el-select v-model="value7" placeholder="请选择">
					<el-option-group v-for="group in options3" :key="group.label" :label="group.label">
						<el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-option-group>
				</el-select>
				<el-input placeholder="请输入内容" v-model="input3" clearable style="margin-top: 10px;">
					<template slot="prepend" >其他原因:</template>
				</el-input>
			</el-col>
		</el-row>
		<el-row type="flex">
			<el-col :span="2" style="margin-right: 10px;line-height: 40px;">
				<span >时间: 从</span>
				</el-col>
				<el-col :span="22">
				<el-date-picker v-model="value1" type="date" placeholder="选择日期"> </el-date-picker>
				<el-time-picker v-model="value2" :picker-options="{selectableRange: '00:00:00 - 23:59:59'}"placeholder="选择时间点" style="margin-left: 5px;"></el-time-picker>
				<span style="margin: 10px;">至:</span>
				<el-date-picker v-model="value3" type="date" placeholder="选择日期"> </el-date-picker>
				<el-time-picker v-model="value4" :picker-options="{selectableRange: '00:00:00 - 23:59:59'}"placeholder="选择时间点" style="margin-left: 5px;"></el-time-picker>
			</el-col>
		</el-row>
		<el-row type="flex">
			<el-col :span="2" style="margin-right: 10px;line-height: 40px;">
				<span >备注:</span>
				</el-col>
				<el-col :span="22">
				<el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1"></el-input>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="2" style="text-align: left;margin-right: 10px;">
			<span >紧急联系方式:</span>
			</el-col>
			<el-col :span="10">
				<el-input placeholder="请输入内容" type="number" clearable v-model="input4">
                </el-input>
            </el-col>    
            <el-col :span="10">    
				<el-input placeholder="请输入内容" type="number" clearable v-model="input5">
                </el-input>
				
			</el-col>
		</el-row>

		<el-row :gutter="20">
			<el-col :span="10" :offset="7" style="text-align: center;margin-top: 50px;">
			<el-button plain @click="submit1">提交</el-button>
			<el-button plain @click="submit2">重置</el-button>
			</el-col>
		</el-row>

	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				value1:"",
				value2:"",
				value3:"",
				value4:"",
				textarea1:"",
				input3:"",
				input4:"",
				input5:"",
				input10: '',
				options: [{
					value: 'jishubumen',
					label: '技术部门',
					children: [{
						value: 'shejiyuanze',
						label: '设计原则',
						children: [{
							value: 'yizhi',
							label: '一致'
						}, {
							value: 'fankui',
							label: '反馈'
						}, {
							value: 'xiaolv',
							label: '效率'
						}, {
							value: 'kekong',
							label: '可控'
						}]
					}, {
						value: 'daohang',
						label: '导航',
						children: [{
							value: 'cexiangdaohang',
							label: '侧向导航'
						}, {
							value: 'dingbudaohang',
							label: '顶部导航'
						}]
					}]
				}, {
					value: 'renshibumen',
					label: '人事部门',
					children: [{
						value: 'basic',
						label: 'Basic',
						children: [{
							value: 'layout',
							label: 'Layout 布局'
						}, {
							value: 'color',
							label: 'Color 色彩'
						}, {
							value: 'typography',
							label: 'Typography 字体'
						}, {
							value: 'icon',
							label: 'Icon 图标'
						}, {
							value: 'button',
							label: 'Button 按钮'
						}]
					}, {
						value: 'form',
						label: 'Form',
						children: [{
							value: 'radio',
							label: 'Radio 单选框'
						}, {
							value: 'checkbox',
							label: 'Checkbox 多选框'
						}, {
							value: 'input',
							label: 'Input 输入框'
						}, {
							value: 'input-number',
							label: 'InputNumber 计数器'
						}, {
							value: 'select',
							label: 'Select 选择器'
						}, {
							value: 'cascader',
							label: 'Cascader 级联选择器'
						}, {
							value: 'switch',
							label: 'Switch 开关'
						}]
					}, {
						value: 'data',
						label: 'Data',
						children: [{
							value: 'table',
							label: 'Table 表格'
						}, {
							value: 'tag',
							label: 'Tag 标签'
						}, {
							value: 'progress',
							label: 'Progress 进度条'
						}]
					}, {
						value: 'notice',
						label: 'Notice',
						children: [{
							value: 'alert',
							label: 'Alert 警告'
						}, {
							value: 'loading',
							label: 'Loading 加载'
						}, {
							value: 'message',
							label: 'Message 消息提示'
						}]
					}, {
						value: 'navigation',
						label: 'Navigation',
						children: [{
							value: 'menu',
							label: 'NavMenu 导航菜单'
						}, {
							value: 'tabs',
							label: 'Tabs 标签页'
						}, {
							value: 'breadcrumb',
							label: 'Breadcrumb 面包屑'
						}]
					}, {
						value: 'others',
						label: 'Others',
						children: [{
							value: 'dialog',
							label: 'Dialog 对话框'
						}, {
							value: 'tooltip',
							label: 'Tooltip 文字提示'
						}, {
							value: 'popover',
							label: 'Popover 弹出框'
						}]
					}]
				}, {
					value: 'shouhoubumen',
					label: '售后部门',
					children: [{
						value: 'axure',
						label: 'Axure Components'
					}, {
						value: 'sketch',
						label: 'Sketch Templates'
					}, {
						value: 'jiaohu',
						label: '组件交互文档'
					}]
				}],

				options3: [{
					label: '病假',
					options: [{
						value: 'bingjia1',
						label: '病假1'
					}, {
						value: 'bingjia2',
						label: '病假2'
					}]
				}, {
					label: '事假',
					options: [{
						value: 'shijia1',
						label: '事假1'
					}, {
						value: 'shijia2',
						label: '事假2'
					}, {
						value: 'shijia3',
						label: '事假3'
					}]
				}],
				value7: ''
			}
		},
		methods: {
			 submit1() {
	        this.$notify({
	          title: '提交成功',
	          message: '请假申请已提交',
	          type: 'success',
	          duration:1500,
	        })
		},
		 submit2() {
        this.$confirm('您将重置页面内容, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          duration:1500
        }).then(() => {
          this.$message({
            type: 'success',
            message: '重置成功!',
            duration:1500
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消重置',
            duration:1500
          });          
        });
      }
			 }
	}
</script>

<style>
	.proj {
		margin-right: 0;
	}
</style>