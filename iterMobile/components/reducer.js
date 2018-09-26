import React from "react";
import { combineReducers } from "redux";

const appointments = (
	state = [
		{
			title: "Today",
			description: "This is happening today",
			data: ["Devin"]
		},
		{
			title: "Tomorrow",
			data: [
				"Jackson",
				"James",
				"Jillian",
				"Jimmy",
				"Joel",
				"John",
				"Julie"
			]
		},
		{
			title: "Upcoming",
			data: [
				"Kackson",
				"Kames",
				"Killian",
				"Kimmy",
				"Koel",
				"Kohn",
				"Kulie"
			]
		},
		{
			title: "Someday",
			data: [
				"Kackson",
				"Kames",
				"Killian",
				"Kimmy",
				"Koel",
				"Kohn",
				"Kulie"
			]
		}
	],
	action
) => {
	return state;
};

// 3. reducer tells Redux about two object states:

export const reducer = combineReducers({ appointments });
