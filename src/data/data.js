import { nanoid } from "nanoid";

const sublinks = [
	{
		pageId: nanoid(),
		page: "product",
		links: [
			{
				id: nanoid(),
				label: "community",
				icon: "fa-brands fa-500px",
				url: "/product/community"
			},
			{
				id: nanoid(),
				label: "content",
				icon: "fa-brands fa-accusoft",
				url: "/product/content"
			},
			{
				id: nanoid(),
				label: "roles",
				icon: "fa-brands fa-adversal",
				url: "/product/roles"
			}
		]
	},
	{
		pageId: nanoid(),
		page: "solutions",
		links: [
			{
				id: nanoid(),
				label: "developers",
				icon: "fa-brands fa-avianex",
				url: "/solutions/developers"
			},
			{
				id: nanoid(),
				label: "content managers",
				icon: "fa-brands fa-bitcoin",
				url: "/solutions/content-managers"
			},
			{
				id: nanoid(),
				label: "business teams",
				icon: "fa-brands fa-btc",
				url: "/solutions/business teams"
			},
			{
				id: nanoid(),
				label: "ecommerce",
				icon: "fa-brands fa-codiepie",
				url: "/solutions/ecommerce"
			}
		]
	},
	{
		page: "resources",
		pageId: nanoid(),
		links: [
			{
				id: nanoid(),
				label: "starters",
				icon: "fa-brands fa-docker",
				url: "/resources/starters"
			},
			{
				id: nanoid(),
				label: "showcase",
				icon: "fa-brands fa-square-github",
				url: "/resources/showcase"
			}
		]
	}
];

export default sublinks;
