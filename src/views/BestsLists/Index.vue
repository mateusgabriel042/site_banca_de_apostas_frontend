<template>
	<div class="title-best-list">
		<img src="@/assets/icons-sports/futebol.png" />
		<label>Futebol</label>
	</div>
	<ul>
		<div class="row">
			<div class="col-4">
				<li>
					<img src="@/assets/icons-sports/futebol.png" />
					<div>
						<label>Copa do Libertadores</label>
						<label>
							<span class="color-orange">Ao vivo</span>: 0&nbsp;
							<span class="color-red">24hs</span>: 9
						</label>
					</div>
				</li>
			</div>
			<div class="col-4">
				<li>
					<img src="@/assets/icons-sports/futebol.png" />
					<div>
						<label>Brasileirão Série B</label>
						<label>
							<span class="color-orange">Ao vivo</span>: 0&nbsp;
							<span class="color-red">24hs</span>: 9
						</label>
					</div>
				</li>
			</div>
			<div class="col-4">
				<li>
					<img src="@/assets/icons-sports/futebol.png" />
					<div>
						<label>Copa do brasil</label>
						<label>
							<span class="color-orange">Ao vivo</span>: 0&nbsp;
							<span class="color-red">24hs</span>: 9
						</label>
					</div>
				</li>
			</div>
		</div>
	</ul>

	<div class="title-best-list">
		<img src="@/assets/icons-sports/basquete.png" />
		<label>Basquete</label>
	</div>
	<ul>
		<div class="row">
			<div class="col-4">
				<li>
					<img src="@/assets/icons-sports/basquete.png" />
					<div>
						<label>NBA</label>
						<label>
							<span class="color-orange">Ao vivo</span>: 0&nbsp;
							<span class="color-red">24hs</span>: 9
						</label>
					</div>
				</li>
			</div>
		</div>
	</ul>

	<div class="title-best-list">
		<img src="@/assets/icons-sports/tenis.png" />
		<label>Tênis</label>
	</div>
	<ul>
		<div class="row">
			<div class="col-4">
				<li>
					<img src="@/assets/icons-sports/tenis.png" />
					<div>
						<label>Winbledon Masculino</label>
						<label>
							<span class="color-orange">Ao vivo</span>: 0&nbsp;
							<span class="color-red">24hs</span>: 9
						</label>
					</div>
				</li>
			</div>

			<div class="col-4">
				<li>
					<img src="@/assets/icons-sports/tenis.png" />
					<div>
						<label>Winbledon Masculino</label>
						<label>
							<span class="color-orange">Ao vivo</span>: 0&nbsp;
							<span class="color-red">24hs</span>: 9
						</label>
					</div>
				</li>
			</div>

			<div class="col-4">
				<li>
					<img src="@/assets/icons-sports/tenis.png" />
					<div>
						<label>Winbledon Duplas Masculino</label>
						<label>
							<span class="color-orange">Ao vivo</span>: 0&nbsp;
							<span class="color-red">24hs</span>: 9
						</label>
					</div>
				</li>
			</div>
		</div>
	</ul>
</template>

<style scoped>
	div.title-best-list {float:left; width:100%; border-radius:6px; background-color:#2e3135; margin:3px; padding:4px;}
	div.title-best-list img {width:40px; margin-right:8px;}
	div.title-best-list label {color:#bbbbbb; font-size:13px;}

	ul {float:left; width:100%; list-style:none; padding:0px; margin:0px;}
	ul li {width:100%; background-color:#3d3d3d; margin:5px; padding:5px 8px; border-radius:5px; display:flex; align-items:center; align-content:center;}
	ul li img {width:30px; margin-right:10px;}
	ul li div label {float:left; width:100%; font-size:13px; color:#bbbbbb; margin-bottom:0px;}
	ul li div label span.color-orange {color:#ff742f;}
	ul li div label span.color-red {color:#e1453c;}
</style>
