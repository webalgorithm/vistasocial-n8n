import type { INodeProperties } from 'n8n-workflow';

export const ideaOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['idea'],
			},
		},
		options: [

			{
				name: 'Create',
				value: 'create',
				description: "Create idea",
				routing: {
					request: {
						method: 'POST',
						url: '/ideas',
					},
				},
				action: 'Create new idea',
			},

		],
		default: 'create',
	},
];

export const ideaFields: INodeProperties[] = [
	{
		displayName: 'Caption',
		name: 'message',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['idea'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'message',
				type: 'body',
			},
		},
		description: 'Idea caption',
	},


	{
		displayName: 'Media',
		name: 'media_url',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['idea'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'url',
				displayName: 'URL',
				values: [
					{
						displayName: 'Media URL',
						name: 'value',
						type: 'string',
						default: '',
					},
				],
			},
		],
		routing: {
			send: {
				property: 'media_url',
				type: 'body',
				value: '={{$parameter["media_url"].url.map(item => item.value)}}',
			},
		},
		description: 'Link to an image or video to be shared with this idea. If not specified, the idea will be created without media.',
	},

	{
		displayName: 'Users',
		name: 'participants',
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
				property: 'participants',
				type: 'body',
				value: '={{$parameter["participants"].participant.map(item => item.value)}}',
			},
		},
		options: [
			{
				name: 'participant',
				displayName: 'Participant',
				values: [
					{
						displayName: 'Participant Name or ID',
						name: 'value',
						type: 'options',
						description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
						default: '',
						typeOptions: {
							loadOptionsMethod: 'getUsers',
						},
					},
				],
			},
		],

		description: 'Profiles. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
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
						displayName: 'Group Name or ID',
						name: 'value',
						type: 'options',
						description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
						default: '',
						typeOptions: {
							loadOptionsMethod: 'getGroups',
						},
					},
				],
			},
		],

		description: 'Profile groups. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Labels',
		name: 'labels',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['idea'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'label',
				displayName: 'Label',
				values: [
					{
						displayName: 'Label',
						name: 'value',
						type: 'string',
						default: '',
					},
				],
			},
		],
		routing: {
			send: {
				property: 'labels',
				type: 'body',
			value: '={{$parameter["labels"].label.map(item => item.value)}}',
			},
		},
		description: 'Internal idea labels. If not specified, the idea will be created without labels.',
	},

];
