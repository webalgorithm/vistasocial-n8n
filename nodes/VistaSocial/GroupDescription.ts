import type { INodeProperties } from 'n8n-workflow';

export const groupOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['group'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: "List profile groups within the user's account",
				action: 'List groups',
				routing: {
					request: {
						method: 'GET',
						url: '/groups',
					},
				},

			},

		],
		default: 'list',
	},
];
