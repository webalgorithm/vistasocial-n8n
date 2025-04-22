import type { INodeProperties } from 'n8n-workflow';


export const noteOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['note'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: "Create note",
				routing: {
					request: {
						method: 'POST',
						url: '/notes',
					},
				},
				action: 'Create new note',
			},

		],
		default: 'create',
	},
];

export const noteFields: INodeProperties[] = [
	{
		displayName: 'Title',
		name: 'message',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['note'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'title',
				type: 'body',
			},
		},
		description: 'Note title',
	},
	{
		displayName: 'Note',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['note'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'description',
				type: 'body',
			},
		},
		description: 'Note description',
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['note'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'date',
				type: 'body',
			},
		},
		description: 'Note date',
	},
	{
		displayName: 'Visibility',
		name: 'visibility',
		type: 'options',
		default: 'Public',
		displayOptions: {
			show: {
				resource: ['note'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'visibility',
				type: 'body',
			},
		},
		options: [
			{
				name: 'Public',
				value: 'Public',
			},
			{
				name: 'Private',
				value: 'Private',
			},

		],
		description: 'Note visibility',
	},
	{
		displayName: 'Color',
		name: 'color',
		type: 'options',
		default: 'Alice Blue',
		displayOptions: {
			show: {
				resource: ['note'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'color',
				type: 'body',
			},
		},
		options:[
			{ name: 'Alice Blue', value: 'Alice Blue' },
			{ name: 'Blue Violet', value: 'Blue Violet' },
			{ name: 'Bright Gold', value: 'Bright Gold' },
			{ name: 'Cornflower Blue', value: 'Cornflower Blue' },
			{ name: 'Cotton Candy Pink', value: 'Cotton Candy Pink' },
			{ name: 'Ghost White', value: 'Ghost White' },
			{ name: 'Golden Yellow', value: 'Golden Yellow' },
			{ name: 'Lavender', value: 'Lavender' },
			{ name: 'Lavender Blush', value: 'Lavender Blush' },
			{ name: 'Light Apricot', value: 'Light Apricot' },
			{ name: 'Light Cyan', value: 'Light Cyan' },
			{ name: 'Light Gold', value: 'Light Gold' },
			{ name: 'Light Golden Yellow', value: 'Light Golden Yellow' },
			{ name: 'Light Gray', value: 'Light Gray' },
			{ name: 'Light Green', value: 'Light Green' },
			{ name: 'Light Lime', value: 'Light Lime' },
			{ name: 'Light Peach', value: 'Light Peach' },
			{ name: 'Light Periwinkle', value: 'Light Periwinkle' },
			{ name: 'Light Purple', value: 'Light Purple' },
			{ name: 'Light Salmon', value: 'Light Salmon' },
			{ name: 'Light Sky Blue', value: 'Light Sky Blue' },
			{ name: 'Mint Green', value: 'Mint Green' },
			{ name: 'Orchid', value: 'Orchid' },
			{ name: 'Peach', value: 'Peach' },
			{ name: 'Peach Puff', value: 'Peach Puff' },
			{ name: 'Periwinkle', value: 'Periwinkle' },
			{ name: 'Salmon Pink', value: 'Salmon Pink' },
			{ name: 'Sky Blue', value: 'Sky Blue' },
			{ name: 'Turquoise', value: 'Turquoise' },
			{ name: 'Watermelon', value: 'Watermelon' }
		],
		description: 'Note color',
	},

	{
		displayName: 'Profile Groups',
		name: 'entities',
		type: 'fixedCollection',
		default: {},
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['idea'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'entities',
				type: 'body',
				value: '={{$parameter["entities"].entity.map(item => item.value)}}',
			},
		},
		options: [
			{
				name: 'entity',
				displayName: 'Group',
				values: [
					{
						displayName: 'Group ID',
						name: 'value',
						type: 'string',
						description: 'Choose from the list, or specify a group ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
						default: '',
					},
				],
			},
		],

		description: 'Profile groups. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

];
