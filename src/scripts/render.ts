import { accordion, accordionItem, render } from "@sitebender/renderer"

document.addEventListener("DOMContentLoaded", event => {
	const hi = document.querySelector("#hi")

	hi?.replaceWith(
		render(
			accordion({
				children: [
					accordionItem({
						children: [
							{
								children: ["First para."],
								tagName: "P",
							},
							{
								children: ["Second para."],
								tagName: "P",
							},
						],
						title: ["I am accordion item 1"],
					}),
					accordionItem({
						children: [
							{
								children: ["First para."],
								tagName: "P",
							},
							{
								children: ["Second para."],
								tagName: "P",
							},
						],
						title: ["I am accordion item 2"],
					}),
					accordionItem({
						children: [
							{
								children: ["First para."],
								tagName: "P",
							},
							{
								children: ["Second para."],
								tagName: "P",
							},
						],
						title: ["I am accordion item 2"],
					}),
				],
				id: "bob",
				title: [
					{
						children: ["I am the title!"],
						tagName: "H2",
					},
				],
			}),
		),
	)
})
