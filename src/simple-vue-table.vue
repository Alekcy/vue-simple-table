<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&subset=cyrillic,cyrillic-ext');
@import url('https://fonts.googleapis.com/css?family=Nosifer');

body{
	font-family: 'Roboto', sans-serif;
	font-weight: 700;
}
.inp{
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	width: 100%;
	height: 100%;

}
table{
	border-spacing: 0;
}
input{
	border-width: 0;

}

input:focus{
	outline: none;
	border-bottom: 1px solid black;	
}
td{
	height: 40px;
}

</style>
<template>
  <div>
  	<table class="striped">
  		<thead>
  			<tr>
  				<th v-for="item in tableHead">{{item}}</th>
  			</tr>
  		</thead>
  		<tbody>
  			<tr v-for="rows in valuesArray">
  				<td v-for="cell in rows">
  					<input class="inp" 
  					@change = "someHandler"
  					 type="text" name="" :value="cell">
  				</td>
  			</tr>
  		</tbody>
  	</table>
  	<div v-if="btn!==undefined">
  		<button >{{btn}}</button>
  	</div>
  	
  </div>
</template>
<script>
export default{
	data:function(){
		return{
	
		}
	},
	props:['valuesArray','tableHead','btn'],
	mounted:function(){
		console.log(this.btn);
	},
	components:{
		
	},
	methods:{
		someHandler:function(){
			console.log('fwef');
		}
	}
}
</script>