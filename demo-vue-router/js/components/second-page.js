const SecondPage = {
	name: 'second-page',
	template: `
		<div class="c-second-page">
			<h1>Second Page</h1>
			<p>
				Fusce accumsan ac lacus in luctus. Fusce finibus leo id elementum luctus. Nullam
				luctus augue eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.
				Suspendisse eu neque sapien. Curabitur ut nibh id lectus pretium condimentum rhoncus
				eget est. Nullam id elit turpis. Maecenas tincidunt quis urna quis posuere.
				Phasellus dignissim nisi in congue tincidunt. Nulla facilisi. In massa dui,
				imperdiet ut metus vitae, aliquam interdum enim.
			</p>
			<div class="text-center">
				<span class="btn-group">
					<router-link class="btn btn-danger"
					:to="{path: '/', query: {'test': 'Hello from the SECOND PAGE'}}">
						Start Page (custom query)
					</router-link>
					<router-link class="btn btn-danger" to="/third">Third Page</router-link>
				</span>
			</div>
		</div>
	`
};