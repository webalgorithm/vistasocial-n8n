import type { INodeProperties } from 'n8n-workflow';

export const reportOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['report'],
			},
		},
		options: [
			{
				name: 'Get Daily Metrics',
				value: 'getDailyMetrics',
				routing: {
					request: {
						method: 'GET',
						url: '=/zapier/data?date_from={{$parameter["date_from"]}}&date_to={{$parameter["date_to"]}}&profile={{$parameter["profile_id"]}}&export_type=daily'
					},
				},
				action: 'Get daily metrics',
			},


		],
		default: 'getDailyMetrics',
	},
];

export const reportFields: INodeProperties[] = [
	{
		displayName: 'Date From',
		name: 'date_from',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['report'],
				operation: ['getDailyMetrics'],
			},
		},

	},
	{
		displayName: 'Date To',
		name: 'date_to',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['report'],
				operation: ['getDailyMetrics'],
			},
		},
	},

	{
		displayName: 'Profile Name or ID',
		name: 'profile_id',
		type: 'options',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['report'],
				operation: ['getDailyMetrics'],
			},
		},
		typeOptions: {
			loadOptionsMethod: 'getProfiles',
		},

		description: 'Profile. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

];
