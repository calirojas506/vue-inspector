const StartPage = {
	props: ['title', 'tags', 'keywords', 'description'],
	name: 'start-page',
	template: `
		<div class="c-start-page">
			<h1>Start Page</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit,
				felis eu maximus rhoncus, elit justo feugiat est, sit amet faucibus lacus
				dolor viverra purus. Donec dignissim venenatis nibh, quis tincidunt quam
				sollicitudin vitae. Cras porttitor sed nibh et ultricies. Phasellus eget
				mollis purus. Donec tempus vitae justo consectetur suscipit. Lorem ipsum
				dolor sit amet, consectetur adipiscing elit. In euismod hendrerit turpis
				sed maximus. Nulla sollicitudin eros maximus metus dapibus, scelerisque
				cursus neque hendrerit. Donec turpis leo, congue non nunc imperdiet,
				aliquet pretium mauris. Nulla venenatis molestie ipsum vel pellentesque.
			</p>
			<h2>Proin tortor odio</h2>
			<p>
				Proin tortor odio, dignissim vel ante vitae, egestas iaculis nibh. Curabitur
				tellus nisi, euismod nec enim eget, eleifend vestibulum tortor. In magna velit,
				vehicula at risus in, imperdiet euismod eros. Morbi lobortis enim ut tempor
				laoreet. Vestibulum pulvinar tortor id felis tincidunt, vel mattis odio
				vestibulum. Ut pulvinar blandit ligula. Sed feugiat libero iaculis odio posuere,
				eget faucibus nunc rhoncus. Fusce rhoncus lectus sit amet eleifend tristique.
				Duis non quam at dolor posuere vulputate. Curabitur lacinia mattis ipsum id
				aliquet. Praesent massa nulla, luctus a arcu eget, varius faucibus metus.
				Mauris at lacinia dolor, tincidunt porttitor neque. Phasellus porttitor non mi
				in blandit. Vivamus ex velit, sodales ac lacus gravida, ultrices porttitor
				felis. Quisque vel lectus non ipsum faucibus accumsan. Morbi vel sagittis neque.
			</p>
			<router-link :to="{path: '/third', query: {message: 'Hello from the first page'}}"
			class="btn btn-block btn-danger">
				Navigate to Page Three
			</router-link>
		</div>
	`,
	data(){
		return {
			testStartPage: 'Hello world'
		}
	}
};